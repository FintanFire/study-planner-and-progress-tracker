#!/usr/bin/env python3
"""
Study Planner & Progress Tracker — Real Local Backend Server
Provides:
  - Static file serving for the frontend (index.html, css/, js/)
  - SQLite + JSON persistence inside ./data/study_planner.db & ./data/users_snapshot.json
  - REST API Endpoints:
      POST /api/register   -> Register a new student (Student ID, Email F25CSC038.shu.edu.pk, Name, Password)
      POST /api/login      -> Authenticate using Student ID (e.g. F25CSC038) and Password
      POST /api/logout     -> Invalidate session token
      GET  /api/session    -> Verify current session token & return user + planner data
      POST /api/sync       -> Save real-time user planner state (subjects, tasks, schedule, logs, plant, themes, guide)
"""

import hashlib
import json
import mimetypes
import re
import secrets
import sqlite3
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DB_PATH = DATA_DIR / "study_planner.db"
SNAPSHOT_PATH = DATA_DIR / "users_snapshot.json"
PORT = 8000


def init_db():
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            student_id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            salt TEXT NOT NULL,
            created_at TEXT NOT NULL,
            planner_state TEXT NOT NULL
        )
        """
    )
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS sessions (
            token TEXT PRIMARY KEY,
            student_id TEXT NOT NULL,
            created_at INTEGER NOT NULL,
            FOREIGN KEY(student_id) REFERENCES users(student_id)
        )
        """
    )
    conn.commit()
    conn.close()
    update_json_snapshot()


def create_blank_user_state():
    """Returns a 100% blank initial state for a newly registered student."""
    return {
        "settings": {
            "theme": "plants",          # 11 themes: plants, stars, moon, planets, anime, onepiece, coffee, ocean, cyberpunk, autumn, nordic
            "fontStyle": "sans",        # sans | serif | mono | rounded
            "cardRadius": "16px",       # 8px | 16px | 24px
            "cardSurface": "solid",     # solid | glass
            "ambientParticles": True,   # Floating leaves, stars, sakura petals, etc.
            "dailyQuota": 5,
            "dailyIntention": "",
            "pomodoroFocus": 25,
            "pomodoroShortBreak": 5,
            "pomodoroLongBreak": 15,
            "soundEffects": True,
            "selectedTrack": 0,
            "musicVolume": 0.5
        },
        "plant": {
            "goalLabel": "Final Exams",
            "targetDays": 30,
            "currentStreak": 0,
            "streakShields": 1,         # Protects streak if a day is missed (earns +1 every 7 streak days)
            "lastStreakDate": None,
            "streakHistory": [],
            "treeSpecies": "woodland"   # woodland | sakura | jacaranda | golden_oak | devil_fruit | astral
        },
        "onboarding": {
            "completed": False,
            "currentStep": 3
        },
        "subjects": [],
        "tasks": [],
        "scheduleBlocks": [],
        "studyLogs": [],
        "breakLogs": [],
        "notifications": [],
        "celebratedDates": {}
    }


def hash_password(password: str, salt: str) -> str:
    return hashlib.sha256((salt + password).encode("utf-8")).hexdigest()


def update_json_snapshot():
    """Writes a clean JSON snapshot of users & their saved planner state to ./data/users_snapshot.json."""
    try:
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        rows = cur.execute(
            "SELECT student_id, name, email, created_at, planner_state FROM users ORDER BY created_at ASC"
        ).fetchall()
        conn.close()

        snapshot = []
        for r in rows:
            try:
                state_obj = json.loads(r["planner_state"])
            except Exception:
                state_obj = {}
            snapshot.append(
                {
                    "studentId": r["student_id"],
                    "name": r["name"],
                    "email": r["email"],
                    "createdAt": r["created_at"],
                    "plannerState": state_obj
                }
            )
        SNAPSHOT_PATH.write_text(json.dumps(snapshot, indent=2), encoding="utf-8")
    except Exception as exc:
        print(f"[Snapshot Warning] {exc}")


class StudyPlannerRequestHandler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

    def _send_json(self, status_code: int, payload: dict):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _read_json_body(self) -> dict:
        length = int(self.headers.get("Content-Length", "0"))
        if length <= 0:
            return {}
        raw = self.rfile.read(length)
        return json.loads(raw.decode("utf-8"))

    def _get_auth_token(self) -> str:
        auth = self.headers.get("Authorization", "")
        if auth.startswith("Bearer "):
            return auth[7:].strip()
        return ""

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        if path == "/api/session":
            token = self._get_auth_token()
            if not token:
                return self._send_json(200, {"authenticated": False})

            conn = sqlite3.connect(DB_PATH)
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            row = cur.execute(
                """
                SELECT u.student_id, u.name, u.email, u.created_at, u.planner_state
                FROM sessions s
                JOIN users u ON u.student_id = s.student_id
                WHERE s.token = ?
                """,
                (token,),
            ).fetchone()
            conn.close()

            if not row:
                return self._send_json(200, {"authenticated": False})

            return self._send_json(
                200,
                {
                    "authenticated": True,
                    "user": {
                        "studentId": row["student_id"],
                        "name": row["name"],
                        "email": row["email"],
                        "createdAt": row["created_at"]
                    },
                    "state": json.loads(row["planner_state"])
                },
            )

        if path == "/" or path == "":
            file_path = BASE_DIR / "index.html"
        else:
            rel = path.lstrip("/")
            file_path = (BASE_DIR / rel).resolve()
            if not str(file_path).startswith(str(BASE_DIR)):
                self.send_error(403, "Forbidden")
                return

        if not file_path.exists() or not file_path.is_file():
            self.send_error(404, "File Not Found")
            return

        mime, _ = mimetypes.guess_type(str(file_path))
        mime = mime or "application/octet-stream"
        data = file_path.read_bytes()

        self.send_response(200)
        self.send_header("Content-Type", mime)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.end_headers()
        self.wfile.write(data)

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path

        try:
            body = self._read_json_body()
        except Exception:
            return self._send_json(400, {"ok": False, "error": "Invalid JSON request body."})

        if path == "/api/register":
            name = (body.get("name") or "").strip()
            student_id = (body.get("studentId") or "").strip().upper()
            email = (body.get("email") or "").strip().lower()
            password = body.get("password") or ""

            if not name or not student_id or not email or not password:
                return self._send_json(400, {"ok": False, "error": "All fields are required."})

            if not re.match(r"^[A-Z0-9\-]{4,16}$", student_id):
                return self._send_json(
                    400,
                    {"ok": False, "error": "Student ID format is invalid (example: F25CSC038)."},
                )

            if not (email.endswith(".shu.edu.pk") or email.endswith("@shu.edu.pk")):
                return self._send_json(
                    400,
                    {
                        "ok": False,
                        "error": f"Email must follow university format: {student_id}.shu.edu.pk"
                    },
                )

            if len(password) < 6:
                return self._send_json(
                    400,
                    {"ok": False, "error": "Password must be at least 6 characters long."},
                )

            conn = sqlite3.connect(DB_PATH)
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()

            existing = cur.execute(
                "SELECT student_id FROM users WHERE student_id = ? OR LOWER(email) = ?",
                (student_id, email),
            ).fetchone()
            if existing:
                conn.close()
                return self._send_json(
                    409,
                    {"ok": False, "error": f"Student ID {student_id} or email is already registered."},
                )

            salt = secrets.token_hex(16)
            pw_hash = hash_password(password, salt)
            now_iso = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
            blank_state = create_blank_user_state()

            cur.execute(
                """
                INSERT INTO users (student_id, name, email, password_hash, salt, created_at, planner_state)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                """,
                (student_id, name, email, pw_hash, salt, now_iso, json.dumps(blank_state)),
            )
            conn.commit()
            conn.close()
            update_json_snapshot()

            return self._send_json(
                201,
                {
                    "ok": True,
                    "message": f"Account registered for {student_id}. Please log in with your ID and password.",
                    "studentId": student_id
                },
            )

        if path == "/api/login":
            student_id = (body.get("studentId") or "").strip().upper()
            password = body.get("password") or ""

            if not student_id or not password:
                return self._send_json(
                    400, {"ok": False, "error": "Please enter your Student ID and Password."}
                )

            conn = sqlite3.connect(DB_PATH)
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            row = cur.execute(
                "SELECT * FROM users WHERE student_id = ?", (student_id,)
            ).fetchone()

            if not row:
                conn.close()
                return self._send_json(
                    401,
                    {"ok": False, "error": f"No account found for Student ID '{student_id}'. Please register first."},
                )

            expected_hash = hash_password(password, row["salt"])
            if expected_hash != row["password_hash"]:
                conn.close()
                return self._send_json(
                    401, {"ok": False, "error": "Incorrect password. Please try again."}
                )

            token = secrets.token_hex(24)
            cur.execute(
                "INSERT INTO sessions (token, student_id, created_at) VALUES (?, ?, ?)",
                (token, student_id, int(time.time())),
            )
            conn.commit()
            conn.close()

            return self._send_json(
                200,
                {
                    "ok": True,
                    "token": token,
                    "user": {
                        "studentId": row["student_id"],
                        "name": row["name"],
                        "email": row["email"],
                        "createdAt": row["created_at"]
                    },
                    "state": json.loads(row["planner_state"])
                },
            )

        if path == "/api/logout":
            token = self._get_auth_token()
            if token:
                conn = sqlite3.connect(DB_PATH)
                conn.execute("DELETE FROM sessions WHERE token = ?", (token,))
                conn.commit()
                conn.close()
            return self._send_json(200, {"ok": True})

        if path == "/api/sync":
            token = self._get_auth_token()
            if not token:
                return self._send_json(401, {"ok": False, "error": "Unauthorized"})

            new_state = body.get("state")
            if not isinstance(new_state, dict):
                return self._send_json(400, {"ok": False, "error": "Missing state object"})

            conn = sqlite3.connect(DB_PATH)
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            sess = cur.execute(
                "SELECT student_id FROM sessions WHERE token = ?", (token,)
            ).fetchone()
            if not sess:
                conn.close()
                return self._send_json(401, {"ok": False, "error": "Invalid session"})

            cur.execute(
                "UPDATE users SET planner_state = ? WHERE student_id = ?",
                (json.dumps(new_state), sess["student_id"]),
            )
            conn.commit()
            conn.close()
            update_json_snapshot()

            return self._send_json(200, {"ok": True})

        return self._send_json(404, {"ok": False, "error": "Endpoint not found"})


if __name__ == "__main__":
    init_db()
    server = ThreadingHTTPServer(("127.0.0.1", PORT), StudyPlannerRequestHandler)
    print(f"Study Planner Backend Server running at http://localhost:{PORT}")
    print(f"SQLite Database: {DB_PATH}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        server.server_close()

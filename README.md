# 🌿 Botanical Study Planner & Progress Tracker

A complete, zero-dependency, full-stack **Study Planner and Progress Tracker** featuring **11 immersive theme worlds** (defaulting to **Dark Lush Jungle**), a **Goal-Scaled Botanical Flowering Tree**, a **Strict Pomodoro & Smart Stopwatch Coach**, an **Action-Gated Step-by-Step Spotlight Guide**, and a **Python 3 + SQLite3 Backend**.

---

## 📁 GitHub Repository Organization

```text
Study Planner/
├── index.html                                  # Main single-page application entry point
├── server.py                                   # Zero-dependency Python 3 + SQLite3 backend server
├── Start-Study-Planner.bat                     # One-click Windows launcher
├── README.md                                   # Installation, configuration & execution guide
├── Paid_Tools_Links.txt                        # Deliverable #4: Paid/Freemium tools & links
├── .gitignore                                  # Excludes local DBs, secrets, tokens & cache files
├── css/
│   └── styles.css                              # 11 theme palettes, Zen mode, typography & layout CSS
├── js/
│   ├── store.js                                # Blank-slate state manager, REST sync & JSON backup
│   ├── audio.js                                # 6-track Web Audio Lofi synthesizer & sound effects
│   ├── confetti.js                             # Celebratory confetti + 11-theme backdrops & props
│   └── app.js                                  # Main controller, real-time heartbeat, tree & timers
└── docs/
    ├── Paid_Tools_Links.txt                    # Copy of Paid_Tools_Links.txt in docs/
    ├── Project_Proposal/
    │   └── Project_Proposal_Study_Planner_and_Progress_Tracker.docx
    ├── SRS/
    │   ├── Software_Requirements_Specification.md  # Complete IEEE-style SRS (FR, NFR, US-01–US-14)
    │   └── diagrams/
    │       ├── 01_System_Architecture.svg          # Three-tier system architecture diagram
    │       ├── 02_Database_ER_Diagram.svg          # SQLite3 relational & entity schema
    │       ├── 03_Use_Case_Diagram.svg             # UML Use Case diagram (UC-01–UC-12)
    │       └── 04_User_Flow_And_Tree_Stages.svg    # 6-step guide flow & 7 flowering tree stages
    └── Tools_and_Technologies/
        ├── Tools_and_Technologies.md           # Detailed list & descriptions of all technologies
        └── screenshots/                        # Verification & tool screenshots
            ├── 01_Study_Planner_Auth_UI.png
            ├── 02_Trello_Agile_Board.png
            ├── 03_System_Architecture_Diagram.png
            └── 04_Tools_Stack_Overview.png
```

---

## ⚙️ Installation & Configuration

### Prerequisites
- **Python 3.8+** (tested on **Python 3.13.7**) — *No `pip install` or `npm install` packages required!*
- Any modern web browser (**Microsoft Edge**, **Google Chrome**, **Firefox**, or **Safari**).

### Configuration & Blank-State Guarantee
- On fresh download/clone, the repository contains **0 pre-added users**, **0 subjects**, and **0 tasks**.
- No passwords, API keys, or access tokens are stored in the repository (`.gitignore` blocks `data/`, `*.db`, `.env`, and credential files).
- When `server.py` runs, it automatically creates `data/study_planner.db` (SQLite3) and `data/users_snapshot.json` locally on first use.

---

## 🚀 Execution Instructions

### Option A — Full-Stack Mode with SQLite3 Backend (Recommended)
1. **Windows One-Click**: Double-click **`Start-Study-Planner.bat`**, **OR**
2. **Terminal (Windows / macOS / Linux)**:
   ```bash
   python server.py
   ```
3. Open your browser and navigate to:
   **`http://localhost:8000`**
4. **Step 1 (Register)**: Create an account using your university ID format (e.g., Student ID `F25CSC038` and Email `F25CSC038.shu.edu.pk`).
5. **Step 2 (Log In)**: Log in with your Student ID (`F25CSC038`) and Password.

### Option B — Direct Offline Browser Mode
1. Double-click **`index.html`** to open it directly in your browser.
2. All features (including the 6-track Lofi synthesizer, 11 themes, timers, and flowering tree) run via automatic `localStorage` persistence, and you can export/import `.json` backups anytime from the **Progress & Subjects** tab.

---

## ✨ Key Implemented Features (`US-01` – `US-14`)
- **Blank-Slate University Auth (`US-01`)**: `ID.shu.edu.pk` validation, salted SHA-256 password hashing, and Bearer session tokens.
- **5-Tab Clean Workspace**: `Checklist`, `Focus & Stopwatch`, `Growth Tree`, `Schedule`, and `Progress & Subjects`.
- **11 Immersive Theme Worlds (`🎨 11 Themes & Look`)**: Dark Lush Jungle (default), One Piece (with all 9 Straw Hat Crew faces & Jolly Roger), Cyberpunk Night City, Shining Night Sky, Giant Solar System, Lunar Eclipse, Anime Sakura, Cozy Espresso Cafe, Coral Reef, Autumn Harvest, and Nordic Aurora—plus font, corner radius, frosted glass, and prop toggles.
- **Real-Time Wall-Clock Timers**: Strict Pomodoro (locks premature breaks during focus runs) + Smart Study Stopwatch & Break Coach + Zen Focus Mode.
- **Goal-Scaled Botanical Flowering Tree**: 7 growth stages from Dormant Seed to Full Flowering Tree with interactive preview slider and `+1 Streak Shield` every 7 streak days.

---

## 📚 Documentation Links
- **Complete SRS**: [docs/SRS/Software_Requirements_Specification.md](docs/SRS/Software_Requirements_Specification.md)
- **Tools & Technologies (with Screenshots)**: [docs/Tools_and_Technologies/Tools_and_Technologies.md](docs/Tools_and_Technologies/Tools_and_Technologies.md)
- **Paid / Freemium Tools List**: [Paid_Tools_Links.txt](Paid_Tools_Links.txt)
- **Trello Project Board**: https://trello.com/b/7rFTsg0p/study-planner-and-progress-tracker

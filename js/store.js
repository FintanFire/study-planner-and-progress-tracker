/**
 * Study Planner & Progress Tracker — Backend API Client & Blank-Slate Store
 * - Connects to Python SQLite Backend (server.py: /api/register, /api/login, /api/logout, /api/session, /api/sync)
 * - Starts 100% BLANK on fresh install (0 users, 0 subjects, 0 tasks, 0 schedules, 0 logs)
 * - Includes automatic fallback persistence if opened directly without the Python server
 * - Supports 1-Click JSON Backup Export & Restore across computers
 */

const TOKEN_KEY = 'sp_clean_auth_token_v2';
const LOCAL_DB_KEY = 'sp_clean_local_db_v2';

// Ensure any legacy demo data from previous versions is wiped completely
try {
  localStorage.removeItem('verdant_study_planner_v1');
} catch (e) {}

function getLocalDateStr(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getLocalDateTimeISO(offsetDays = 0, hours = 18, minutes = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  d.setHours(hours, minutes, 0, 0);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hh}:${mm}`;
}

function createBlankPlannerState() {
  return {
    selectedDate: getLocalDateStr(0),
    settings: {
      theme: 'plants', // 11 themes: plants, stars, moon, planets, anime, onepiece, coffee, ocean, cyberpunk, autumn, nordic
      fontStyle: 'sans', // sans | serif | rounded | mono
      cardRadius: '16px', // 8px | 16px | 24px
      cardSurface: 'solid', // solid | glass
      ambientParticles: true,
      dailyQuota: 5,
      pomodoroFocus: 25,
      pomodoroShortBreak: 5,
      pomodoroLongBreak: 15,
      soundEffects: true,
      selectedTrack: 0,
      musicVolume: 0.5,
      dailyIntention: ''
    },
    plant: {
      goalLabel: 'Final Exam Preparation',
      targetDays: 30, // e.g., 7 (1 week), 30 (1 month), 120 (4 months)
      currentStreak: 0,
      lastStreakDate: null,
      streakHistory: [],
      streakShields: 1,
      treeSpecies: 'woodland' // 'woodland' | 'sakura' | 'jacaranda' | 'golden_oak'
    },
    onboarding: {
      completed: false,
      currentStep: 3 // Step 1=Register, Step 2=Login, Step 3=Set Plant Goal Horizon, Step 4=Create Subject, Step 5=Add Task, Step 6=Check Task
    },
    subjects: [],
    tasks: [],
    scheduleBlocks: [],
    studyLogs: [],
    breakLogs: [],
    notifications: [],
    celebratedDates: {}
  };
}

class AppStore {
  constructor() {
    this.token = localStorage.getItem(TOKEN_KEY) || '';
    this.currentUser = null; // null when logged out (starts with NO users!)
    this.state = createBlankPlannerState();
    this.backendOnline = false;
  }

  /**
   * Checks session on startup against Python backend (or local blank-slate DB fallback)
   */
  async initSession() {
    if (window.location.protocol.startsWith('http')) {
      try {
        const res = await fetch('/api/session', {
          headers: this.token ? { Authorization: `Bearer ${this.token}` } : {}
        });
        if (res.ok) {
          this.backendOnline = true;
          const data = await res.json();
          if (data.authenticated && data.user) {
            this.currentUser = data.user;
            const defaults = createBlankPlannerState();
            this.state = {
              ...defaults,
              ...(data.state || {}),
              settings: { ...defaults.settings, ...((data.state && data.state.settings) || {}) },
              plant: { ...defaults.plant, ...((data.state && data.state.plant) || {}) },
              onboarding: { ...defaults.onboarding, ...((data.state && data.state.onboarding) || {}) }
            };
            this.state.selectedDate = this.state.selectedDate || getLocalDateStr(0);
            return true;
          } else {
            this.currentUser = null;
            this.token = '';
            localStorage.removeItem(TOKEN_KEY);
            return false;
          }
        }
      } catch (e) {
        this.backendOnline = false;
      }
    }

    // Fallback when opened via file:// protocol
    const localDb = this._getLocalFallbackDb();
    if (this.token && localDb.sessions[this.token]) {
      const studentId = localDb.sessions[this.token];
      const u = localDb.users[studentId];
      if (u) {
        this.currentUser = {
          studentId: u.studentId,
          name: u.name,
          email: u.email,
          createdAt: u.createdAt
        };
        const defaults = createBlankPlannerState();
        this.state = {
          ...defaults,
          ...(u.plannerState || {}),
          settings: { ...defaults.settings, ...((u.plannerState && u.plannerState.settings) || {}) },
          plant: { ...defaults.plant, ...((u.plannerState && u.plannerState.plant) || {}) },
          onboarding: { ...defaults.onboarding, ...((u.plannerState && u.plannerState.onboarding) || {}) }
        };
        return true;
      }
    }
    this.currentUser = null;
    return false;
  }

  async registerUser({ name, studentId, email, password }) {
    const cleanId = (studentId || '').trim().toUpperCase();
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanName = (name || '').trim();

    if (this.backendOnline || window.location.protocol.startsWith('http')) {
      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: cleanName, studentId: cleanId, email: cleanEmail, password })
        });
        const data = await res.json();
        if (!res.ok || !data.ok) {
          throw new Error(data.error || 'Registration failed.');
        }
        this.backendOnline = true;
        return data;
      } catch (err) {
        if (this.backendOnline) throw err;
      }
    }

    // Local fallback registration
    const db = this._getLocalFallbackDb();
    if (db.users[cleanId]) {
      throw new Error(`Student ID ${cleanId} is already registered.`);
    }
    const emailTaken = Object.values(db.users).some(
      (u) => u.email.toLowerCase() === cleanEmail
    );
    if (emailTaken) {
      throw new Error('This email address is already registered.');
    }
    db.users[cleanId] = {
      studentId: cleanId,
      name: cleanName,
      email: cleanEmail,
      password,
      createdAt: new Date().toISOString(),
      plannerState: createBlankPlannerState()
    };
    this._saveLocalFallbackDb(db);
    return {
      ok: true,
      studentId: cleanId,
      message: `Account registered for ${cleanId}. Now log in with your ID and password.`
    };
  }

  async loginUser({ studentId, password }) {
    const cleanId = (studentId || '').trim().toUpperCase();

    if (this.backendOnline || window.location.protocol.startsWith('http')) {
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ studentId: cleanId, password })
        });
        const data = await res.json();
        if (!res.ok || !data.ok) {
          throw new Error(data.error || 'Login failed.');
        }
        this.backendOnline = true;
        this.token = data.token;
        localStorage.setItem(TOKEN_KEY, this.token);
        this.currentUser = data.user;
        const defaults = createBlankPlannerState();
        this.state = {
          ...defaults,
          ...(data.state || {}),
          settings: { ...defaults.settings, ...((data.state && data.state.settings) || {}) },
          plant: { ...defaults.plant, ...((data.state && data.state.plant) || {}) },
          onboarding: { ...defaults.onboarding, ...((data.state && data.state.onboarding) || {}) }
        };
        return data;
      } catch (err) {
        if (this.backendOnline) throw err;
      }
    }

    // Local fallback login
    const db = this._getLocalFallbackDb();
    const u = db.users[cleanId];
    if (!u) {
      throw new Error(`No account found for Student ID '${cleanId}'. Please register first.`);
    }
    if (u.password !== password) {
      throw new Error('Incorrect password. Please try again.');
    }
    const token = 'tok_' + Date.now() + '_' + Math.random().toString(36).slice(2);
    db.sessions[token] = cleanId;
    this._saveLocalFallbackDb(db);

    this.token = token;
    localStorage.setItem(TOKEN_KEY, token);
    this.currentUser = {
      studentId: u.studentId,
      name: u.name,
      email: u.email,
      createdAt: u.createdAt
    };
    const defaults = createBlankPlannerState();
    this.state = {
      ...defaults,
      ...(u.plannerState || {}),
      settings: { ...defaults.settings, ...((u.plannerState && u.plannerState.settings) || {}) },
      plant: { ...defaults.plant, ...((u.plannerState && u.plannerState.plant) || {}) },
      onboarding: { ...defaults.onboarding, ...((u.plannerState && u.plannerState.onboarding) || {}) }
    };
    return { ok: true, user: this.currentUser, state: this.state };
  }

  async logoutUser() {
    if (this.backendOnline && this.token) {
      try {
        await fetch('/api/logout', {
          method: 'POST',
          headers: { Authorization: `Bearer ${this.token}` }
        });
      } catch (e) {}
    }
    const db = this._getLocalFallbackDb();
    if (this.token && db.sessions[this.token]) {
      delete db.sessions[this.token];
      this._saveLocalFallbackDb(db);
    }
    this.token = '';
    this.currentUser = null;
    this.state = createBlankPlannerState();
    localStorage.removeItem(TOKEN_KEY);
  }

  async save() {
    if (!this.currentUser) return;

    // Also mirror to local fallback DB immediately
    const db = this._getLocalFallbackDb();
    if (db.users[this.currentUser.studentId]) {
      db.users[this.currentUser.studentId].plannerState = this.state;
      this._saveLocalFallbackDb(db);
    }

    if (this.backendOnline && this.token) {
      try {
        await fetch('/api/sync', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.token}`
          },
          body: JSON.stringify({ state: this.state })
        });
      } catch (e) {}
    }
  }

  exportBackupPayload() {
    return {
      version: '2.0',
      exportedAt: new Date().toISOString(),
      user: this.currentUser || null,
      state: this.state
    };
  }

  async importBackupPayload(payload) {
    if (!payload || typeof payload !== 'object' || !payload.state) {
      throw new Error('Invalid backup file format.');
    }
    const defaults = createBlankPlannerState();
    this.state = {
      ...defaults,
      ...(payload.state || {}),
      settings: { ...defaults.settings, ...((payload.state && payload.state.settings) || {}) },
      plant: { ...defaults.plant, ...((payload.state && payload.state.plant) || {}) },
      onboarding: { ...defaults.onboarding, ...((payload.state && payload.state.onboarding) || {}) }
    };
    await this.save();
    return this.state;
  }

  _getLocalFallbackDb() {
    try {
      const raw = localStorage.getItem(LOCAL_DB_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { users: {}, sessions: {} };
  }

  _saveLocalFallbackDb(db) {
    try {
      localStorage.setItem(LOCAL_DB_KEY, JSON.stringify(db));
    } catch (e) {}
  }
}

window.appStore = new AppStore();
window.getLocalDateStr = getLocalDateStr;
window.getLocalDateTimeISO = getLocalDateTimeISO;
window.createBlankPlannerState = createBlankPlannerState;

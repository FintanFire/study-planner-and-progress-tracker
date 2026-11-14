/**
 * Study Planner & Progress Tracker — Main Application Controller (Real-Time Edition)
 * - 100% Blank State on fresh installation (0 pre-added users, 0 tasks, 0 subjects)
 * - Step 1 Register (ID.shu.edu.pk format) -> Step 2 Login (Student ID + Password)
 * - 11 Immersive Theme Worlds with Scenic SVG Backdrops, Dynamic Icons & Floating Props
 *   (Dark Lush Jungle, One Piece 9 Straw Hat Crew Faces & Jolly Roger, Cyberpunk 2077 City Skyline,
 *    Shining Night Sky Stars, Giant Solar System Planets, Giant Cratered Moon, Anime Torii Gate,
 *    Cozy Rainy Cafe, Deep Coral Reef, Autumn Maple Harvest, Nordic Aurora Pines)
 * - Wall-Clock Real-Time Pomodoro Timer & Smart Study Stopwatch that update Study Time,
 *   Analytics Charts, Daily Streak, and Flowering Tree Growth LIVE every second!
 */

const THEME_CATALOG = [
  {
    id: 'plants',
    icon: '🌴',
    brandTitle: 'Verdant Jungle',
    propLabel: 'Lush Dark Jungle Canopy & Monstera Leaves',
    name: 'Dark Lush Jungle',
    desc: 'Deep forest night, warm cedar bark, emerald Monstera leaves & hibiscus blossoms',
    swatches: ['#0E1F16', '#52B788', '#C68B59', '#F28482'],
    tabIcons: { checklist: '🌿', focus: '⏳', plant: '🌴', schedule: '🪵', analytics: '🌺' }
  },
  {
    id: 'onepiece',
    icon: '🏴‍☠️',
    brandTitle: 'Grand Line Planner',
    propLabel: 'Straw Hat Jolly Roger & All 9 Crew Faces',
    name: 'One Piece (Straw Hat Crew)',
    desc: 'Treasure parchment, Straw Hat Jolly Roger, Thousand Sunny & all 9 Crew Faces floating!',
    swatches: ['#F7EEDB', '#D62828', '#F77F00', '#0077B6'],
    tabIcons: { checklist: '📜', focus: '🧭', plant: '🌳', schedule: '⚓', analytics: '💰' }
  },
  {
    id: 'cyberpunk',
    icon: '⚡',
    brandTitle: 'Night City Net',
    propLabel: 'Cyberpunk Skyline, Neon Grid & Drones',
    name: 'Cyberpunk Night City',
    desc: 'Neon city skyscraper skyline, 3D synthwave laser grid, flying cyber drones & neon magenta',
    swatches: ['#0D0B18', '#FF2A85', '#00F5D4', '#FEE440'],
    tabIcons: { checklist: '⚡', focus: '🔋', plant: '🧬', schedule: '📡', analytics: '💻' }
  },
  {
    id: 'stars',
    icon: '✨',
    brandTitle: 'Celestial Starlight',
    propLabel: 'Shining Night Sky, Constellations & Meteors',
    name: 'Shining Night Sky',
    desc: 'Velvet night sky, glowing Big Dipper & Cassiopeia constellations & shooting stars',
    swatches: ['#0B1021', '#17213E', '#F5C542', '#60A5FA'],
    tabIcons: { checklist: '⭐', focus: '☄️', plant: '🌟', schedule: '🔭', analytics: '🌌' }
  },
  {
    id: 'planets',
    icon: '🪐',
    brandTitle: 'Solar System Orbit',
    propLabel: 'Giant Saturn, Jupiter, Mars, Earth & Sun',
    name: 'Giant Solar System',
    desc: 'Huge ringed Saturn, banded Jupiter, red Mars, Earth & blazing Sun orbit panorama',
    swatches: ['#171123', '#2A1F3D', '#E07A5F', '#F2CC8F'],
    tabIcons: { checklist: '🪐', focus: '🚀', plant: '🌍', schedule: '🛰️', analytics: '☀️' }
  },
  {
    id: 'moon',
    icon: '🌙',
    brandTitle: 'Lunar Sanctuary',
    propLabel: 'Giant Cratered Moon & 8 Lunar Phases',
    name: 'Lunar Eclipse & Moon',
    desc: 'Giant glowing cratered moon, 8 lunar phases arc, misty mountains & crescent lanterns',
    swatches: ['#121624', '#21283F', '#A78BFA', '#CBD5E1'],
    tabIcons: { checklist: '🌙', focus: '🕯️', plant: '🪷', schedule: '🌌', analytics: '🔮' }
  },
  {
    id: 'anime',
    icon: '🌸',
    brandTitle: 'Kyoto Sakura',
    propLabel: 'Mt. Fuji, Red Torii Gate & Sakura Petals',
    name: 'Anime Sakura Sunset',
    desc: 'Mount Fuji silhouette, red Torii gate, cherry blossom branches & drifting sakura flowers',
    swatches: ['#FFF5F7', '#FF6B8B', '#4EA8DE', '#F4A261'],
    tabIcons: { checklist: '🌸', focus: '🎐', plant: '⛩️', schedule: '🏮', analytics: '🎌' }
  },
  {
    id: 'coffee',
    icon: '☕',
    brandTitle: 'Rainy Espresso Cafe',
    propLabel: 'Edison Lamps, Steaming Cup & Coffee Beans',
    name: 'Cozy Espresso Cafe',
    desc: 'Warm cafe pendant lamps, steaming espresso cup watermark & floating roasted coffee beans',
    swatches: ['#F3ECE4', '#6F4E37', '#B07D4F', '#588157'],
    tabIcons: { checklist: '☕', focus: '⏳', plant: '🌱', schedule: '📖', analytics: '🥐' }
  },
  {
    id: 'ocean',
    icon: '🌊',
    brandTitle: 'Deep Coral Reef',
    propLabel: 'Underwater Sunbeams, Kelp & Jellyfish',
    name: 'Coral Reef & Deep Sea',
    desc: 'Piercing underwater sunbeams, swaying kelp & coral reef, glowing jellyfish & bubbles',
    swatches: ['#ECFAFB', '#007791', '#00B4D8', '#FF7F51'],
    tabIcons: { checklist: '🐚', focus: '🫧', plant: '🪸', schedule: '🐬', analytics: '🌊' }
  },
  {
    id: 'autumn',
    icon: '🍁',
    brandTitle: 'Maple Harvest',
    propLabel: 'Red Maple Forest, Gingko & Bonfire',
    name: 'Autumn Maple Harvest',
    desc: 'Spiced parchment, burnt maple orange canopy, golden gingko leaves & woodland acorns',
    swatches: ['#F9F1E7', '#C85A32', '#E09F3E', '#7F4F24'],
    tabIcons: { checklist: '🍁', focus: '🍂', plant: '🌳', schedule: '🎃', analytics: '🌰' }
  },
  {
    id: 'nordic',
    icon: '❄️',
    brandTitle: 'Nordic Aurora',
    propLabel: 'Aurora Borealis, Snowy Peaks & Pines',
    name: 'Nordic Snow & Pine',
    desc: 'Northern lights ribbons, Scandinavian pine forest & 6-branch crystal snowflakes',
    swatches: ['#F2F5F7', '#3D6B58', '#52796F', '#8D6E63'],
    tabIcons: { checklist: '❄️', focus: '🏔️', plant: '🌲', schedule: '🦌', analytics: '🌌' }
  }
];

class StudyPlannerController {
  constructor() {
    this.store = window.appStore;
    this.audio = window.soundEngine || window.lofiEngine;
    this.confetti = window.confettiEngine;
    this.ambient = window.ambientEngine;

    this.activePage = 'checklist';
    this.taskFilter = 'all';
    this.taskSearch = '';
    this.taskSort = 'priority';
    this.scheduleDayFilter = 'All';
    this.zenMode = false;

    this.authGuideStep = 1;
    this.guideHidden = false;

    // Strict Pomodoro State (Wall-Clock Accurate)
    this.pomo = {
      phase: 'focus', // 'focus' | 'shortBreak' | 'longBreak'
      running: false,
      remainingSec: 25 * 60,
      totalSec: 25 * 60,
      elapsedFocusSecInRun: 0,
      awaitingChoice: false
    };

    // Smart Study Stopwatch & Break Coach State
    this.sw = {
      mode: 'idle', // 'idle' | 'studying' | 'shortBreak' | 'longBreak'
      studySec: 0,
      breakSec: 0,
      currentBreakSec: 0,
      breakCount: 0
    };

    this.lastHeartbeatMs = Date.now();
    this.heartbeatTimer = null;
  }

  async init() {
    // Start wall-clock heartbeat immediately so timers & clock NEVER fail to tick
    this.lastHeartbeatMs = Date.now();
    this.heartbeatTimer = setInterval(() => this.onHeartbeatTick(), 250);

    this.renderThemeStudioGrid();
    this.bindAuthEvents();
    this.bindNavigationEvents();
    this.bindChecklistEvents();
    this.bindPomodoroEvents();
    this.bindStopwatchEvents();
    this.bindPlantEvents();
    this.bindScheduleEvents();
    this.bindSubjectAndAnalyticsEvents();
    this.bindLofiEvents();
    this.bindGuideEvents();
    this.bindAppearanceAndModalEvents();

    const loggedIn = await this.store.initSession();
    const statusPill = document.getElementById('backend-status-pill');
    if (statusPill) {
      statusPill.textContent = this.store.backendOnline
        ? '🟢 Python SQLite Backend Connected (data/study_planner.db)'
        : '🟢 Local Blank-State Storage Ready';
    }

    this.applyAppearanceSettings();

    if (loggedIn && this.store.currentUser) {
      this.enterWorkspace();
    } else {
      this.showAuthScreen(1);
    }
  }

  // ==========================================================================
  // 0. APPEARANCE & 11-THEME WORLDS STUDIO
  // ==========================================================================
  renderThemeStudioGrid() {
    const grid = document.getElementById('theme-studio-grid');
    if (!grid) return;
    const currentTheme = (this.store.state.settings && this.store.state.settings.theme) || 'plants';

    grid.innerHTML = THEME_CATALOG.map((t) => {
      const isActive = t.id === currentTheme;
      const dots = t.swatches
        .map((c) => `<span class="theme-swatch-dot" style="background:${c};"></span>`)
        .join('');
      return `
        <button type="button" class="theme-option-card ${isActive ? 'active' : ''}" data-theme-pick="${t.id}">
          <div class="theme-option-title">
            <span>${t.icon} ${t.name}</span>
            ${isActive ? '<span style="font-size:11px;color:var(--accent-primary);">✓</span>' : ''}
          </div>
          <div class="theme-swatches">${dots}</div>
          <div class="theme-option-desc">${t.desc}</div>
        </button>
      `;
    }).join('');

    grid.querySelectorAll('[data-theme-pick]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const picked = btn.getAttribute('data-theme-pick');
        this.store.state.settings.theme = picked;
        this.applyAppearanceSettings();
        this.renderThemeStudioGrid();
        await this.store.save();
        const themeObj = THEME_CATALOG.find((x) => x.id === picked);
        if (themeObj) {
          this.showToast(`${themeObj.icon} Theme switched to ${themeObj.name} (${themeObj.propLabel})`);
        }
      });
    });
  }

  applyAppearanceSettings() {
    const s = this.store.state.settings || {};
    const theme = s.theme || 'plants';
    const fontStyle = s.fontStyle || 'sans';
    const cardRadius = s.cardRadius || '16px';
    const cardSurface = s.cardSurface || 'solid';
    const ambientParticles = s.ambientParticles !== false;

    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-font', fontStyle);
    document.documentElement.setAttribute('data-surface', cardSurface);
    document.documentElement.style.setProperty('--card-radius', cardRadius);

    // Update theme-specific icons, brand title, and prop subtitle
    const themeObj = THEME_CATALOG.find((x) => x.id === theme) || THEME_CATALOG[0];
    const navLogo = document.getElementById('nav-brand-logo');
    const navTitle = document.getElementById('nav-brand-title');
    const propLabel = document.getElementById('active-theme-prop-label');
    const authIcon = document.getElementById('auth-theme-icon');
    const authBadgeText = document.getElementById('auth-theme-badge-text');

    if (navLogo) navLogo.textContent = themeObj.icon;
    if (navTitle) navTitle.textContent = themeObj.brandTitle;
    if (propLabel) propLabel.textContent = themeObj.propLabel;
    if (authIcon) authIcon.textContent = themeObj.icon;
    if (authBadgeText) authBadgeText.textContent = `${themeObj.name} • ${themeObj.propLabel}`;

    if (themeObj.tabIcons) {
      const ic1 = document.getElementById('tab-icon-checklist');
      const ic2 = document.getElementById('tab-icon-focus');
      const ic3 = document.getElementById('tab-icon-plant');
      const ic4 = document.getElementById('tab-icon-schedule');
      const ic5 = document.getElementById('tab-icon-analytics');
      if (ic1) ic1.textContent = themeObj.tabIcons.checklist;
      if (ic2) ic2.textContent = themeObj.tabIcons.focus;
      if (ic3) ic3.textContent = themeObj.tabIcons.plant;
      if (ic4) ic4.textContent = themeObj.tabIcons.schedule;
      if (ic5) ic5.textContent = themeObj.tabIcons.analytics;
    }

    // Sync segmented buttons in modal
    document.querySelectorAll('#font-style-group .seg-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.font === fontStyle);
    });
    document.querySelectorAll('#radius-style-group .seg-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.radius === cardRadius);
    });
    document.querySelectorAll('#surface-style-group .seg-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.surface === cardSurface);
    });
    document.querySelectorAll('#particles-style-group .seg-btn').forEach((b) => {
      b.classList.toggle('active', (b.dataset.particles === 'on') === ambientParticles);
    });

    if (this.ambient) {
      this.ambient.setConfig(theme, ambientParticles);
    }
  }

  // ==========================================================================
  // 1. AUTHENTICATION FLOW (Step 1: Register -> Step 2: Login)
  // ==========================================================================
  bindAuthEvents() {
    const tabReg = document.getElementById('auth-tab-register');
    const tabLogin = document.getElementById('auth-tab-login');
    const formReg = document.getElementById('auth-form-register');
    const formLogin = document.getElementById('auth-form-login');
    const regIdInput = document.getElementById('reg-student-id');
    const regEmailInput = document.getElementById('reg-email');

    regIdInput.addEventListener('input', () => {
      const idVal = regIdInput.value.trim().toUpperCase();
      if (idVal && (!regEmailInput.value || regEmailInput.dataset.autofilled === 'true')) {
        regEmailInput.value = `${idVal}.shu.edu.pk`;
        regEmailInput.dataset.autofilled = 'true';
      }
    });

    regEmailInput.addEventListener('input', () => {
      regEmailInput.dataset.autofilled = 'false';
    });

    tabReg.addEventListener('click', () => this.switchAuthTab('register'));
    tabLogin.addEventListener('click', () => this.switchAuthTab('login'));

    formReg.addEventListener('submit', async (e) => {
      e.preventDefault();
      this.clearAuthStatus();

      const name = document.getElementById('reg-name').value.trim();
      const studentId = document.getElementById('reg-student-id').value.trim().toUpperCase();
      const email = document.getElementById('reg-email').value.trim().toLowerCase();
      const password = document.getElementById('reg-password').value;

      if (!/^[A-Z0-9]{4,16}$/.test(studentId)) {
        this.setAuthStatus('error', 'Student ID must be alphanumeric (e.g., F25CSC038).');
        return;
      }

      const expectedEmail = `${studentId.toLowerCase()}.shu.edu.pk`;
      if (email !== expectedEmail) {
        this.setAuthStatus(
          'error',
          `Email must match your ID in the format ${studentId}.shu.edu.pk`
        );
        return;
      }

      if (password.length < 4) {
        this.setAuthStatus('error', 'Password must be at least 4 characters.');
        return;
      }

      try {
        await this.store.registerUser({ name, studentId, email, password });
        if (this.audio) this.audio.playSfx('complete');
        this.authGuideStep = 2;
        this.switchAuthTab('login');
        document.getElementById('login-student-id').value = studentId;
        document.getElementById('login-password').value = '';
        document.getElementById('login-password').focus();
        this.setAuthStatus(
          'success',
          `Step 1 Complete! Account created for ${studentId}. Now enter your password to Log In (Step 2).`
        );
        this.renderGuideHud();
      } catch (err) {
        this.setAuthStatus('error', err.message || 'Registration failed.');
      }
    });

    formLogin.addEventListener('submit', async (e) => {
      e.preventDefault();
      this.clearAuthStatus();

      const studentId = document.getElementById('login-student-id').value.trim().toUpperCase();
      const password = document.getElementById('login-password').value;

      try {
        await this.store.loginUser({ studentId, password });
        if (this.audio) this.audio.playSfx('celebrate');
        this.enterWorkspace();
        this.showToast(`Welcome, ${this.store.currentUser.name} (${this.store.currentUser.studentId})!`);
      } catch (err) {
        this.setAuthStatus('error', err.message || 'Invalid ID or password.');
      }
    });

    document.getElementById('btn-logout').addEventListener('click', async () => {
      if (this.zenMode) this.toggleZenMode(false);
      this.pomo.running = false;
      this.sw.mode = 'idle';
      await this.store.logoutUser();
      this.showAuthScreen(2);
      this.showToast('Logged out cleanly.');
    });
  }

  switchAuthTab(mode) {
    const tabReg = document.getElementById('auth-tab-register');
    const tabLogin = document.getElementById('auth-tab-login');
    const formReg = document.getElementById('auth-form-register');
    const formLogin = document.getElementById('auth-form-login');

    this.clearAuthStatus();
    if (mode === 'register') {
      tabReg.classList.add('active');
      tabLogin.classList.remove('active');
      formReg.style.display = 'block';
      formLogin.style.display = 'none';
      this.authGuideStep = 1;
    } else {
      tabLogin.classList.add('active');
      tabReg.classList.remove('active');
      formLogin.style.display = 'block';
      formReg.style.display = 'none';
      this.authGuideStep = 2;
    }
    this.renderGuideHud();
  }

  setAuthStatus(type, text) {
    const box = document.getElementById('auth-status-msg');
    box.className = `auth-status-msg ${type}`;
    box.textContent = text;
  }

  clearAuthStatus() {
    const box = document.getElementById('auth-status-msg');
    box.className = 'auth-status-msg';
    box.textContent = '';
  }

  showAuthScreen(step = 1) {
    document.getElementById('auth-screen').style.display = 'flex';
    document.getElementById('app-workspace').classList.remove('active');
    this.switchAuthTab(step === 2 ? 'login' : 'register');
    this.renderGuideHud();
  }

  enterWorkspace() {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('app-workspace').classList.add('active');

    document.getElementById('nav-student-id').textContent = this.store.currentUser.studentId;
    document.getElementById('nav-student-name').textContent = this.store.currentUser.name;

    this.applyAppearanceSettings();
    this.renderThemeStudioGrid();

    const focusMins = Number(this.store.state.settings.pomodoroFocus) || 25;
    this.pomo.totalSec = Math.max(5, Math.round(focusMins * 60));
    this.pomo.remainingSec = this.pomo.totalSec;
    this.pomo.elapsedFocusSecInRun = 0;
    this.pomo.phase = 'focus';
    this.pomo.running = false;
    this.pomo.awaitingChoice = false;

    document.getElementById('task-deadline-input').value = window.getLocalDateTimeISO(0, 18, 0);
    document.getElementById('checklist-date-picker').value =
      this.store.state.selectedDate || window.getLocalDateStr(0);

    const intentionInput = document.getElementById('daily-intention-input');
    if (intentionInput) {
      intentionInput.value = this.store.state.settings.dailyIntention || '';
    }

    try {
      const trackSelect = document.getElementById('lofi-track-select');
      const volSlider = document.getElementById('lofi-volume-slider');
      trackSelect.value = String(this.store.state.settings.selectedTrack || 0);
      volSlider.value = String(this.store.state.settings.musicVolume ?? 0.5);
      if (this.audio) {
        this.audio.setTrack(Number(trackSelect.value), false);
        this.audio.setVolume(Number(volSlider.value));
      }
    } catch (e) {}

    // Initialize Plant form controls from state
    const p = this.store.state.plant || {};
    document.getElementById('plant-goal-title').value = p.goalLabel || 'Final Exam Preparation';
    document.getElementById('plant-species-select').value = p.treeSpecies || 'woodland';
    const targetDays = Number(p.targetDays) || 30;
    const presetEl = document.getElementById('plant-horizon-preset');
    const customGroup = document.getElementById('custom-days-group');
    const customInput = document.getElementById('plant-custom-days');
    if (['7', '14', '30', '60', '120'].includes(String(targetDays))) {
      presetEl.value = String(targetDays);
      customGroup.style.display = 'none';
    } else {
      presetEl.value = 'custom';
      customGroup.style.display = 'flex';
      customInput.value = String(targetDays);
    }

    this.recomputeGuideStep();
    this.renderAll();

    if (!this.store.state.onboarding.completed && this.store.state.onboarding.currentStep === 3) {
      this.switchPage('plant');
    } else {
      this.switchPage('checklist');
    }
  }

  // ==========================================================================
  // 2. NAVIGATION & WALL-CLOCK REAL-TIME HEARTBEAT (Ticks every second!)
  // ==========================================================================
  bindNavigationEvents() {
    document.querySelectorAll('.page-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        if (page) this.switchPage(page);
      });
    });

    const countdownPill = document.getElementById('exam-countdown-pill');
    if (countdownPill) {
      countdownPill.style.cursor = 'pointer';
      countdownPill.addEventListener('click', () => this.switchPage('plant'));
    }
  }

  switchPage(pageId) {
    this.activePage = pageId;
    document.querySelectorAll('.page-tab-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.page === pageId);
    });
    document.querySelectorAll('.tab-page').forEach((sec) => {
      sec.classList.toggle('active', sec.id === `page-${pageId}`);
    });
    this.renderAll();
    this.applyGuideSpotlight();
  }

  onHeartbeatTick() {
    const nowMs = Date.now();
    const deltaSec = Math.floor((nowMs - this.lastHeartbeatMs) / 1000);
    if (deltaSec < 1) return;
    this.lastHeartbeatMs += deltaSec * 1000;

    // 1. Live Navbar Clock
    const now = new Date(nowMs);
    const clockEl = document.getElementById('live-clock-label');
    if (clockEl) {
      clockEl.textContent = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }

    if (!this.store.currentUser) return;

    let liveStudyChanged = false;

    // 2. Strict Pomodoro Countdown Tick (Wall-Clock Accurate)
    if (this.pomo.running) {
      if (this.pomo.remainingSec > 0) {
        const step = Math.min(deltaSec, this.pomo.remainingSec);
        this.pomo.remainingSec -= step;
        if (this.pomo.phase === 'focus') {
          this.pomo.elapsedFocusSecInRun += step;
          this.recordDailyStreakActivity(true);
          liveStudyChanged = true;
        }
        this.renderPomodoroUI();
        if (this.pomo.remainingSec <= 0) {
          this.onPomodoroFinished();
        }
      } else {
        this.onPomodoroFinished();
      }
    }

    // 3. Smart Study Stopwatch & Break Coach Tick (Wall-Clock Accurate)
    if (this.sw.mode === 'studying') {
      this.sw.studySec += deltaSec;
      this.recordDailyStreakActivity(true);
      this.renderStopwatchUI();
      liveStudyChanged = true;
    } else if (this.sw.mode === 'shortBreak' || this.sw.mode === 'longBreak') {
      this.sw.breakSec += deltaSec;
      this.sw.currentBreakSec += deltaSec;
      this.renderStopwatchUI();
    }

    // 4. If user is actively studying, update Growth Tree, Countdown Pill & Analytics in REAL TIME!
    if (liveStudyChanged) {
      this.renderPlantPage();
      this.renderAnalyticsPage();
      this.renderChecklistHeaderBadges();
    }

    // 5. Real-Time Deadline & Overdue Scanner
    if (now.getSeconds() % 3 === 0) {
      this.scanRealTimeDeadlines();
    }
  }

  /**
   * Returns total live unlogged study seconds currently active in Pomodoro or Stopwatch
   */
  getLiveActiveStudySeconds() {
    return (this.pomo.elapsedFocusSecInRun || 0) + (this.sw.studySec || 0);
  }

  scanRealTimeDeadlines() {
    const nowMs = Date.now();
    let changed = false;

    for (const task of this.store.state.tasks) {
      if (task.completed || !task.deadline) continue;
      const dueMs = new Date(task.deadline).getTime();
      const diffMins = (dueMs - nowMs) / 60000;

      if (diffMins < 0 && !task.notifiedOverdue) {
        task.notifiedOverdue = true;
        this.pushNotification('overdue', `Overdue: "${task.title}" passed its deadline!`);
        changed = true;
      } else if (diffMins >= 0 && diffMins <= 120 && !task.notifiedSoon) {
        task.notifiedSoon = true;
        this.pushNotification(
          'soon',
          `Due Soon: "${task.title}" is due in ${Math.max(1, Math.round(diffMins))} mins.`
        );
        changed = true;
      }
    }

    if (changed) {
      this.store.save();
      this.renderNotificationsBadge();
      if (this.activePage === 'checklist') {
        this.renderChecklist();
      }
    }
  }

  pushNotification(type, message) {
    this.store.state.notifications.unshift({
      id: 'notif_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      type,
      message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    this.showToast(message);
  }

  // ==========================================================================
  // 3. DAILY CHECKLIST, INTENTION, INLINE SUBJECT & QUOTA BAR
  // ==========================================================================
  bindChecklistEvents() {
    const picker = document.getElementById('checklist-date-picker');
    picker.addEventListener('change', () => {
      if (picker.value) {
        this.store.state.selectedDate = picker.value;
        this.store.save();
        this.renderChecklist();
      }
    });

    document.getElementById('btn-prev-day').addEventListener('click', () => this.shiftDate(-1));
    document.getElementById('btn-next-day').addEventListener('click', () => this.shiftDate(1));
    document.getElementById('btn-today-day').addEventListener('click', () => {
      this.store.state.selectedDate = window.getLocalDateStr(0);
      picker.value = this.store.state.selectedDate;
      this.store.save();
      this.renderChecklist();
    });

    // Real-Time Daily Intention persistence on every keystroke
    const intentionInput = document.getElementById('daily-intention-input');
    if (intentionInput) {
      intentionInput.addEventListener('input', () => {
        this.store.state.settings.dailyIntention = intentionInput.value;
        this.store.save();
      });
    }

    // Inline Quick Subject Creator on Checklist Page
    const toggleInlineBtn = document.getElementById('btn-toggle-inline-subject');
    const inlineDrawer = document.getElementById('inline-subject-drawer');
    const saveInlineBtn = document.getElementById('btn-save-inline-subject');

    if (toggleInlineBtn && inlineDrawer) {
      toggleInlineBtn.addEventListener('click', () => {
        inlineDrawer.classList.toggle('open');
        if (inlineDrawer.classList.contains('open')) {
          document.getElementById('inline-subj-name').focus();
        }
      });
    }

    if (saveInlineBtn) {
      saveInlineBtn.addEventListener('click', () => {
        const name = document.getElementById('inline-subj-name').value.trim();
        const code =
          document.getElementById('inline-subj-code').value.trim().toUpperCase() || 'SUBJ';
        const color = document.getElementById('inline-subj-color').value || '#52B788';
        if (!name) {
          this.showToast('Please enter a subject name.');
          return;
        }
        const newSubj = {
          id: 'subj_' + Date.now(),
          name,
          code,
          targetHours: 6,
          instructor: '',
          color
        };
        this.store.state.subjects.push(newSubj);
        document.getElementById('inline-subj-name').value = '';
        document.getElementById('inline-subj-code').value = '';
        inlineDrawer.classList.remove('open');

        if (this.store.state.onboarding.currentStep === 4) {
          this.store.state.onboarding.currentStep = 5;
        }

        this.store.save();
        if (this.audio) this.audio.playSfx('add');
        this.renderSubjectSelects();
        document.getElementById('task-subject-select').value = newSubj.id;
        this.renderAll();
        this.showToast(`Created subject "${name}" (${code})!`);
      });
    }

    document.querySelectorAll('#task-filter-group button').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.taskFilter = btn.dataset.filter;
        document.querySelectorAll('#task-filter-group button').forEach((b) => {
          b.className = b === btn ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';
        });
        this.renderChecklist();
      });
    });

    document.getElementById('task-search-input').addEventListener('input', (e) => {
      this.taskSearch = e.target.value.trim().toLowerCase();
      this.renderChecklist();
    });

    document.getElementById('task-sort-select').addEventListener('change', (e) => {
      this.taskSort = e.target.value;
      this.renderChecklist();
    });

    document.getElementById('form-add-task').addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('task-title-input').value.trim();
      const subjectId = document.getElementById('task-subject-select').value;
      const category = document.getElementById('task-category-select').value;
      const priority = document.getElementById('task-priority-select').value;
      const deadline = document.getElementById('task-deadline-input').value;
      const estMinutes = Number(document.getElementById('task-est-input').value) || 45;

      if (!subjectId) {
        this.showToast('Use "+ New Subject" right above to create an academic subject first!');
        document.getElementById('inline-subject-drawer').classList.add('open');
        document.getElementById('inline-subj-name').focus();
        return;
      }

      const scheduledDate = deadline
        ? deadline.slice(0, 10)
        : this.store.state.selectedDate || window.getLocalDateStr(0);

      const newTask = {
        id: 'task_' + Date.now(),
        title,
        subjectId,
        category,
        priority,
        deadline,
        scheduledDate,
        estMinutes,
        completed: false,
        completedAt: null,
        createdAt: new Date().toISOString()
      };

      this.store.state.tasks.unshift(newTask);
      this.store.state.selectedDate = scheduledDate;
      document.getElementById('checklist-date-picker').value = scheduledDate;
      document.getElementById('task-title-input').value = '';

      if (this.store.state.onboarding.currentStep === 5) {
        this.store.state.onboarding.currentStep = 6;
      }

      this.store.save();
      if (this.audio) this.audio.playSfx('add');
      this.renderAll();
      this.showToast(`Added "${title}" to your checklist.`);
    });
  }

  shiftDate(delta) {
    const cur = this.store.state.selectedDate || window.getLocalDateStr(0);
    const d = new Date(cur + 'T12:00:00');
    d.setDate(d.getDate() + delta);
    const nextStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
      d.getDate()
    ).padStart(2, '0')}`;
    this.store.state.selectedDate = nextStr;
    document.getElementById('checklist-date-picker').value = nextStr;
    this.store.save();
    this.renderChecklist();
  }

  toggleTaskCompletion(taskId, evt) {
    const task = this.store.state.tasks.find((t) => t.id === taskId);
    if (!task) return;

    task.completed = !task.completed;
    task.completedAt = task.completed ? new Date().toISOString() : null;

    if (task.completed) {
      if (this.audio) this.audio.playSfx('complete');
      if (evt && evt.clientX) {
        this.confetti.miniSparkle(evt.clientX, evt.clientY);
      }
      this.recordDailyStreakActivity(false);

      if (this.store.state.onboarding.currentStep === 6) {
        this.store.state.onboarding.completed = true;
        this.store.state.onboarding.currentStep = 7;
        this.showToast('🎉 Onboarding Guide Complete! You are ready to master your studies.');
      }
    } else {
      if (this.audio) this.audio.playSfx('uncheck');
    }

    this.store.save();
    this.renderAll();
  }

  deleteTask(taskId) {
    this.store.state.tasks = this.store.state.tasks.filter((t) => t.id !== taskId);
    this.store.save();
    this.renderAll();
  }

  renderChecklistHeaderBadges() {
    const p = this.store.state.plant || {};
    const targetDays = Math.max(1, Number(p.targetDays) || 30);
    const streak = Number(p.currentStreak) || 0;
    const shields = Number(p.streakShields ?? 1);
    const daysRemaining = Math.max(0, targetDays - streak);
    const pillText = document.getElementById('exam-countdown-text');
    if (pillText) {
      pillText.textContent = `${daysRemaining}d to tree goal • 🔥 ${streak}d streak • 🛡️ ${shields}`;
    }
  }

  renderChecklist() {
    const dateStr = this.store.state.selectedDate || window.getLocalDateStr(0);
    const todayStr = window.getLocalDateStr(0);
    const greetingEl = document.getElementById('checklist-greeting');
    if (greetingEl) {
      greetingEl.textContent =
        dateStr === todayStr ? "Today's Study Checklist" : `Checklist for ${dateStr}`;
    }

    this.renderChecklistHeaderBadges();

    const dayTasks = this.store.state.tasks.filter((t) => t.scheduledDate === dateStr);
    const completedToday = dayTasks.filter((t) => t.completed).length;
    const quota = Math.max(1, Number(this.store.state.settings.dailyQuota) || 5);
    const pct = Math.min(100, Math.round((completedToday / quota) * 100));

    document.getElementById('quota-subtext').textContent = `${completedToday} of ${quota} daily quota tasks completed (${dayTasks.length} scheduled for this date)`;
    document.getElementById('quota-badge-text').textContent = `${pct}%`;
    document.getElementById('quota-fill').style.width = `${pct}%`;

    if (pct >= 100 && completedToday > 0 && !this.store.state.celebratedDates[dateStr]) {
      this.store.state.celebratedDates[dateStr] = true;
      this.confetti.burstCelebration();
      if (this.audio) this.audio.playSfx('celebrate');
      this.showToast('🌸 Daily Quota Reached! Celebratory confetti burst triggered!');
      this.store.save();
    }

    const nowMs = Date.now();
    let list = [...dayTasks];

    if (this.taskFilter === 'pending') {
      list = list.filter((t) => !t.completed);
    } else if (this.taskFilter === 'completed') {
      list = list.filter((t) => t.completed);
    } else if (this.taskFilter === 'overdue') {
      list = list.filter(
        (t) => !t.completed && t.deadline && new Date(t.deadline).getTime() < nowMs
      );
    }

    if (this.taskSearch) {
      list = list.filter((t) => t.title.toLowerCase().includes(this.taskSearch));
    }

    const prioWeight = { high: 3, medium: 2, low: 1 };
    list.sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      if (this.taskSort === 'priority') {
        return (prioWeight[b.priority] || 1) - (prioWeight[a.priority] || 1);
      }
      if (this.taskSort === 'deadline') {
        return new Date(a.deadline || 0).getTime() - new Date(b.deadline || 0).getTime();
      }
      return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
    });

    const container = document.getElementById('checklist-task-list');
    if (list.length === 0) {
      container.innerHTML = `
        <div class="empty-box">
          No tasks for this filter/date yet. Use the <strong>Add Academic Task</strong> panel on the right (and click <strong>+ New Subject</strong> if you haven't added a subject yet).
        </div>
      `;
      return;
    }

    container.innerHTML = list
      .map((t) => {
        const subj = this.store.state.subjects.find((s) => s.id === t.subjectId);
        const dueMs = t.deadline ? new Date(t.deadline).getTime() : null;
        const isOverdue = !t.completed && dueMs && dueMs < nowMs;
        const isDueSoon = !t.completed && dueMs && dueMs >= nowMs && dueMs - nowMs <= 7200000;
        const dueLabel = t.deadline
          ? new Date(t.deadline).toLocaleString([], {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })
          : 'No deadline';

        return `
          <div class="task-row ${t.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}" data-task-id="${t.id}">
            <div style="display:flex;align-items:flex-start;gap:12px;">
              <button class="task-check" type="button" data-action="toggle" data-id="${t.id}" title="Toggle Complete">
                ✓
              </button>
              <div>
                <div class="task-title">${this.escapeHtml(t.title)}</div>
                <div class="task-badges">
                  ${
                    subj
                      ? `<span class="badge" style="border-color:${subj.color};color:${subj.color};">${this.escapeHtml(
                          subj.code
                        )} • ${this.escapeHtml(subj.name)}</span>`
                      : ''
                  }
                  <span class="badge">${this.escapeHtml(t.category || 'Task')}</span>
                  <span class="badge">${t.priority.toUpperCase()}</span>
                  <span class="badge ${isOverdue ? 'overdue' : isDueSoon ? 'due-soon' : ''}">
                    ${isOverdue ? '⚠️ OVERDUE: ' : isDueSoon ? '⏳ DUE SOON: ' : '🕒 '}${dueLabel}
                  </span>
                </div>
              </div>
            </div>
            <button class="btn btn-danger btn-sm" type="button" data-action="delete" data-id="${t.id}" title="Delete Task">✕</button>
          </div>
        `;
      })
      .join('');

    container.querySelectorAll('button[data-action="toggle"]').forEach((btn) => {
      btn.addEventListener('click', (e) => this.toggleTaskCompletion(btn.dataset.id, e));
    });
    container.querySelectorAll('button[data-action="delete"]').forEach((btn) => {
      btn.addEventListener('click', () => this.deleteTask(btn.dataset.id));
    });
  }

  // ==========================================================================
  // 4. STRICT POMODORO TIMER + QUICK PRESETS + ZEN FOCUS MODE
  // ==========================================================================
  bindPomodoroEvents() {
    document.getElementById('btn-pomo-mode-focus').addEventListener('click', () => {
      this.selectPomodoroPhase('focus');
    });
    document.getElementById('btn-pomo-mode-short').addEventListener('click', () => {
      if (this.pomo.phase === 'focus' && this.pomo.running) {
        this.showToast('🔒 Breaks are locked while a Focus period is ongoing!');
        return;
      }
      this.selectPomodoroPhase('shortBreak');
    });
    document.getElementById('btn-pomo-mode-long').addEventListener('click', () => {
      if (this.pomo.phase === 'focus' && this.pomo.running) {
        this.showToast('🔒 Breaks are locked while a Focus period is ongoing!');
        return;
      }
      this.selectPomodoroPhase('longBreak');
    });

    // Quick Real-Time Duration Preset Buttons (10s Demo, 1m, 15m, 25m, 45m)
    document.querySelectorAll('[data-quick-pomo]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const mins = parseFloat(btn.getAttribute('data-quick-pomo'));
        this.pomo.phase = 'focus';
        this.pomo.running = false;
        this.pomo.awaitingChoice = false;
        this.pomo.totalSec = Math.max(5, Math.round(mins * 60));
        this.pomo.remainingSec = this.pomo.totalSec;
        if (mins >= 1) {
          this.store.state.settings.pomodoroFocus = Math.round(mins);
          this.store.save();
        }
        this.renderPomodoroUI();
        this.showToast(
          mins < 1
            ? '⚡ Set to 10-Second Focus Demo! Click Start to test completion choices.'
            : `⏱️ Focus duration set to ${Math.round(mins)} minutes.`
        );
      });
    });

    document.getElementById('btn-pomo-start').addEventListener('click', () => {
      this.pomo.awaitingChoice = false;
      this.lastHeartbeatMs = Date.now();
      this.pomo.running = !this.pomo.running;
      if (this.pomo.running && this.pomo.phase === 'focus') {
        this.recordDailyStreakActivity(true);
      }
      this.renderPomodoroUI();
    });

    document.getElementById('btn-pomo-reset').addEventListener('click', () => {
      this.pomo.running = false;
      this.pomo.awaitingChoice = false;
      this.selectPomodoroPhase(this.pomo.phase);
    });

    document.getElementById('btn-choice-another-focus').addEventListener('click', () => {
      this.pomo.awaitingChoice = false;
      this.selectPomodoroPhase('focus');
      this.lastHeartbeatMs = Date.now();
      this.pomo.running = true;
      this.renderPomodoroUI();
    });

    document.getElementById('btn-choice-short-break').addEventListener('click', () => {
      this.pomo.awaitingChoice = false;
      this.selectPomodoroPhase('shortBreak');
      this.lastHeartbeatMs = Date.now();
      this.pomo.running = true;
      this.renderPomodoroUI();
    });

    document.getElementById('btn-choice-long-break').addEventListener('click', () => {
      this.pomo.awaitingChoice = false;
      this.selectPomodoroPhase('longBreak');
      this.lastHeartbeatMs = Date.now();
      this.pomo.running = true;
      this.renderPomodoroUI();
    });

    const zenBtn = document.getElementById('btn-toggle-zen');
    if (zenBtn) {
      zenBtn.addEventListener('click', () => this.toggleZenMode(!this.zenMode));
    }
  }

  toggleZenMode(enable) {
    this.zenMode = Boolean(enable);
    document.body.classList.toggle('zen-mode', this.zenMode);
    const zenBtn = document.getElementById('btn-toggle-zen');
    if (zenBtn) {
      zenBtn.textContent = this.zenMode ? '🧘 Exit Zen Focus Mode' : '🧘 Zen Focus Mode: Off';
      zenBtn.className = this.zenMode ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';
    }
  }

  selectPomodoroPhase(phase) {
    const s = this.store.state.settings;
    this.pomo.phase = phase;
    this.pomo.running = false;
    if (phase === 'focus') {
      this.pomo.totalSec = Math.max(5, (Number(s.pomodoroFocus) || 25) * 60);
    } else if (phase === 'shortBreak') {
      this.pomo.totalSec = Math.max(5, (Number(s.pomodoroShortBreak) || 5) * 60);
    } else {
      this.pomo.totalSec = Math.max(5, (Number(s.pomodoroLongBreak) || 15) * 60);
    }
    this.pomo.remainingSec = this.pomo.totalSec;
    this.renderPomodoroUI();
  }

  onPomodoroFinished() {
    this.pomo.running = false;
    if (this.audio) this.audio.playSfx('timerEnd');

    if (this.pomo.phase === 'focus') {
      const mins = Math.max(1, Math.round(this.pomo.totalSec / 60));
      const subjectId = document.getElementById('focus-subject-select').value || null;
      this.store.state.studyLogs.push({
        id: 'log_' + Date.now(),
        date: window.getLocalDateStr(0),
        minutes: mins,
        subjectId,
        source: 'pomodoro'
      });
      this.pomo.elapsedFocusSecInRun = 0;
      this.recordDailyStreakActivity(false);
      this.store.save();
      this.pomo.awaitingChoice = true;
      this.confetti.burstCelebration();
      this.showToast(`🎉 Focus Run complete! Choose your next step below.`);
    } else {
      this.showToast('Break complete! Ready for your next Focus period.');
      this.selectPomodoroPhase('focus');
    }

    this.renderPomodoroUI();
    this.renderPlantPage();
    this.renderAnalyticsPage();
  }

  renderPomodoroUI() {
    const mins = String(Math.floor(this.pomo.remainingSec / 60)).padStart(2, '0');
    const secs = String(this.pomo.remainingSec % 60).padStart(2, '0');
    const clockEl = document.getElementById('pomo-clock-display');
    if (clockEl) clockEl.textContent = `${mins}:${secs}`;

    // Countdown ring starts FULL (offset = 0) and drains smoothly as remainingSec approaches 0
    const circumference = 628.32;
    const fractionRemaining =
      this.pomo.totalSec > 0 ? this.pomo.remainingSec / this.pomo.totalSec : 1;
    const ringEl = document.getElementById('pomo-ring-fg');
    if (ringEl) {
      ringEl.style.strokeDashoffset = String(circumference * (1 - fractionRemaining));
    }

    const focusLocked = this.pomo.phase === 'focus' && this.pomo.running;
    document.getElementById('btn-pomo-mode-short').disabled = focusLocked;
    document.getElementById('btn-pomo-mode-long').disabled = focusLocked;
    document.getElementById('pomo-lock-banner').classList.toggle('visible', focusLocked);
    document
      .getElementById('pomo-complete-choices')
      .classList.toggle('visible', this.pomo.awaitingChoice);

    const s = this.store.state.settings;
    const btnFocus = document.getElementById('btn-pomo-mode-focus');
    const btnShort = document.getElementById('btn-pomo-mode-short');
    const btnLong = document.getElementById('btn-pomo-mode-long');

    btnFocus.textContent = `Focus (${s.pomodoroFocus || 25}m)`;
    btnShort.textContent = `Short Break (${s.pomodoroShortBreak || 5}m)`;
    btnLong.textContent = `Long Break (${s.pomodoroLongBreak || 15}m)`;

    btnFocus.className =
      this.pomo.phase === 'focus' ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';
    btnShort.className =
      this.pomo.phase === 'shortBreak' ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';
    btnLong.className =
      this.pomo.phase === 'longBreak' ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';

    const startBtn = document.getElementById('btn-pomo-start');
    startBtn.textContent = this.pomo.running ? '⏸ Pause Timer' : '▶ Start Timer';

    const sub = document.getElementById('pomo-status-sub');
    const badge = document.getElementById('pomo-phase-badge');
    if (this.pomo.phase === 'focus') {
      badge.textContent = this.pomo.running ? '🔥 Focusing Live' : 'Focus Mode';
      sub.textContent = this.pomo.running ? 'Deep Focus — Breaks Locked' : 'Ready to Focus';
    } else if (this.pomo.phase === 'shortBreak') {
      badge.textContent = 'Short Break';
      sub.textContent = this.pomo.running ? 'Recharging (Short Break)' : 'Short Break Ready';
    } else {
      badge.textContent = 'Long Break';
      sub.textContent = this.pomo.running ? 'Restoring Energy (Long Break)' : 'Long Break Ready';
    }
  }

  // ==========================================================================
  // 5. SMART STUDY STOPWATCH & REAL-TIME BREAK COACH
  // ==========================================================================
  bindStopwatchEvents() {
    document.getElementById('btn-sw-study').addEventListener('click', () => {
      this.lastHeartbeatMs = Date.now();
      this.sw.mode = 'studying';
      this.sw.currentBreakSec = 0;
      this.recordDailyStreakActivity(true);
      this.renderStopwatchUI();
    });

    document.getElementById('btn-sw-short-break').addEventListener('click', () => {
      this.lastHeartbeatMs = Date.now();
      if (this.sw.mode === 'studying') {
        this.sw.breakCount++;
      }
      this.sw.mode = 'shortBreak';
      this.sw.currentBreakSec = 0;
      this.renderStopwatchUI();
    });

    document.getElementById('btn-sw-long-break').addEventListener('click', () => {
      this.lastHeartbeatMs = Date.now();
      if (this.sw.mode === 'studying') {
        this.sw.breakCount++;
      }
      this.sw.mode = 'longBreak';
      this.sw.currentBreakSec = 0;
      this.renderStopwatchUI();
    });

    document.getElementById('btn-sw-finish').addEventListener('click', () => {
      const studiedMins = Math.max(1, Math.round(this.sw.studySec / 60));
      if (this.sw.studySec >= 1) {
        const subjectId = document.getElementById('focus-subject-select').value || null;
        this.store.state.studyLogs.push({
          id: 'log_' + Date.now(),
          date: window.getLocalDateStr(0),
          minutes: studiedMins,
          subjectId,
          source: 'stopwatch'
        });
        this.recordDailyStreakActivity(false);
        this.store.save();
        this.showToast(
          `Logged ${studiedMins}m study session (${this.sw.breakCount} breaks taken).`
        );
      }
      this.sw = {
        mode: 'idle',
        studySec: 0,
        breakSec: 0,
        currentBreakSec: 0,
        breakCount: 0
      };
      this.renderStopwatchUI();
      this.renderPlantPage();
      this.renderAnalyticsPage();
    });
  }

  formatHMS(sec) {
    const h = String(Math.floor(sec / 3600)).padStart(2, '0');
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  getStopwatchCoachAdvice() {
    const sSec = this.sw.studySec;
    const bSec = this.sw.breakSec;
    const bCount = this.sw.breakCount;

    if (this.sw.mode === 'idle' && sSec === 0) {
      return 'Start the study stopwatch when you begin working. Whenever you press Short or Long Break, your study timer pauses automatically, tracks your break time, and advises you on your study-to-break balance.';
    }

    if (this.sw.mode === 'shortBreak' || this.sw.mode === 'longBreak') {
      const targetBreakMin = this.sw.mode === 'shortBreak' ? 5 : 15;
      const curBreakMin = Math.floor(this.sw.currentBreakSec / 60);
      if (curBreakMin >= targetBreakMin) {
        return `⏰ You have been on this ${
          this.sw.mode === 'shortBreak' ? 'short' : 'long'
        } break for ${curBreakMin}m. Your mind is refreshed — click "Resume Studying" to jump back in!`;
      }
      return `☕ Study timer is paused while your ${
        this.sw.mode === 'shortBreak' ? 'Short Break' : 'Long Break'
      } is being timed (${this.formatHMS(
        this.sw.currentBreakSec
      )}). Stretch, hydrate, and rest your eyes.`;
    }

    if (sSec >= 50 * 60 && bCount === 0) {
      return '⚠️ You have studied continuously for over 50 minutes without a single break! Taking a 5–10 minute Short Break now will prevent cognitive fatigue and boost memory retention.';
    }

    if (sSec >= 25 * 60 && bSec === 0) {
      return '🌟 Strong 25+ minute uninterrupted focus streak! Consider a quick 5-minute Short Break soon to keep your pace sustainable.';
    }

    if (sSec > 0 && bSec > sSec * 0.45) {
      return `⚖️ Your total break time (${this.formatHMS(
        bSec
      )}) is over 45% of your study time (${this.formatHMS(
        sSec
      )}). Try extending your next uninterrupted study block before taking another break.`;
    }

    return `✅ Excellent pacing! You have studied for ${this.formatHMS(
      sSec
    )} with ${bCount} break(s) (${this.formatHMS(
      bSec
    )} total break time). Keep up this balanced rhythm!`;
  }

  renderStopwatchUI() {
    const activeClock = document.getElementById('sw-active-clock');
    const activeLabel = document.getElementById('sw-active-label');
    const modeBadge = document.getElementById('sw-mode-badge');

    if (this.sw.mode === 'studying') {
      activeClock.textContent = this.formatHMS(this.sw.studySec);
      activeLabel.textContent = 'Studying Now (Counting Up Live)';
      modeBadge.textContent = '🔥 Studying';
    } else if (this.sw.mode === 'shortBreak' || this.sw.mode === 'longBreak') {
      activeClock.textContent = this.formatHMS(this.sw.currentBreakSec);
      activeLabel.textContent =
        this.sw.mode === 'shortBreak'
          ? 'On Short Break (Study Timer Paused)'
          : 'On Long Break (Study Timer Paused)';
      modeBadge.textContent = this.sw.mode === 'shortBreak' ? '☕ Short Break' : '🌿 Long Break';
    } else {
      activeClock.textContent = this.formatHMS(this.sw.studySec);
      activeLabel.textContent = 'Study Stopwatch Idle';
      modeBadge.textContent = 'Idle';
    }

    document.getElementById('sw-total-study').textContent = this.formatHMS(this.sw.studySec);
    document.getElementById('sw-total-break').textContent = this.formatHMS(this.sw.breakSec);
    document.getElementById('sw-break-count').textContent = String(this.sw.breakCount);
    document.getElementById('sw-coach-text').textContent = this.getStopwatchCoachAdvice();

    const btnStudy = document.getElementById('btn-sw-study');
    const btnShort = document.getElementById('btn-sw-short-break');
    const btnLong = document.getElementById('btn-sw-long-break');
    const btnFinish = document.getElementById('btn-sw-finish');

    btnStudy.textContent =
      this.sw.mode === 'studying'
        ? '🔥 Studying Live...'
        : this.sw.studySec > 0
        ? '▶ Resume Studying'
        : '▶ Start Studying';
    btnStudy.disabled = this.sw.mode === 'studying';
    btnShort.disabled = this.sw.mode !== 'studying';
    btnLong.disabled = this.sw.mode !== 'studying';
    btnFinish.disabled = this.sw.studySec === 0 && this.sw.breakSec === 0;
  }

  // ==========================================================================
  // 6. GOAL-SCALED BOTANICAL FLOWERING TREE (100% REAL-TIME UPDATES)
  // ==========================================================================
  bindPlantEvents() {
    const titleInput = document.getElementById('plant-goal-title');
    const presetSelect = document.getElementById('plant-horizon-preset');
    const customGroup = document.getElementById('custom-days-group');
    const customInput = document.getElementById('plant-custom-days');
    const speciesSelect = document.getElementById('plant-species-select');
    const streakSlider = document.getElementById('plant-streak-slider');

    // Helper that applies any horizon/species change in REAL TIME
    const syncPlantSettingsRealTime = () => {
      const p = this.store.state.plant;
      p.goalLabel = titleInput.value.trim() || 'Final Exam Preparation';
      customGroup.style.display = presetSelect.value === 'custom' ? 'flex' : 'none';
      const targetDays =
        presetSelect.value === 'custom'
          ? Math.max(3, Number(customInput.value) || 30)
          : Number(presetSelect.value) || 30;
      p.targetDays = targetDays;
      p.treeSpecies = speciesSelect.value || 'woodland';
      this.store.save();
      this.renderPlantPage();
      this.renderChecklistHeaderBadges();
    };

    titleInput.addEventListener('input', syncPlantSettingsRealTime);
    presetSelect.addEventListener('change', syncPlantSettingsRealTime);
    customInput.addEventListener('input', syncPlantSettingsRealTime);
    speciesSelect.addEventListener('change', syncPlantSettingsRealTime);

    document.getElementById('form-plant-goal').addEventListener('submit', (e) => {
      e.preventDefault();
      syncPlantSettingsRealTime();
      if (this.store.state.onboarding.currentStep === 3) {
        this.store.state.onboarding.currentStep = 4;
      }
      this.store.save();
      if (this.audio) this.audio.playSfx('complete');
      this.renderAll();
      this.showToast(
        `🌸 Tree Horizon confirmed: ${this.store.state.plant.targetDays} streak days for "${this.store.state.plant.goalLabel}"!`
      );
    });

    // Interactive Real-Time Streak Slider
    if (streakSlider) {
      streakSlider.addEventListener('input', () => {
        this.store.state.plant.currentStreak = Number(streakSlider.value) || 0;
        this.store.save();
        this.renderPlantPage();
        this.renderChecklistHeaderBadges();
      });
    }

    // -1 Streak Day Button
    const minusBtn = document.getElementById('btn-streak-minus');
    if (minusBtn) {
      minusBtn.addEventListener('click', () => {
        this.store.state.plant.currentStreak = Math.max(
          0,
          (Number(this.store.state.plant.currentStreak) || 0) - 1
        );
        this.store.save();
        this.renderPlantPage();
        this.renderChecklistHeaderBadges();
      });
    }

    // +1 Streak Day Button
    document.getElementById('btn-simulate-streak').addEventListener('click', () => {
      this.store.state.plant.currentStreak =
        (Number(this.store.state.plant.currentStreak) || 0) + 1;
      if (this.store.state.plant.currentStreak % 7 === 0) {
        this.store.state.plant.streakShields = (this.store.state.plant.streakShields ?? 1) + 1;
        this.showToast('🛡️ Bonus! You earned +1 Streak Shield for hitting a 7-day milestone!');
      }
      if (this.audio) this.audio.playSfx('complete');
      this.store.save();
      this.renderPlantPage();
      this.renderChecklistHeaderBadges();
      const ratio = Math.min(
        1,
        this.store.state.plant.currentStreak / (this.store.state.plant.targetDays || 30)
      );
      if (ratio >= 1) {
        this.confetti.burstCelebration();
        this.showToast('🌸 Goal Horizon Reached! Your tree is in Full Flowering Bloom!');
      } else {
        this.showToast(
          `🌱 Streak Day ${this.store.state.plant.currentStreak} — Your tree grew in real time!`
        );
      }
    });

    // 100% Full Bloom Button
    const fullBloomBtn = document.getElementById('btn-streak-full-bloom');
    if (fullBloomBtn) {
      fullBloomBtn.addEventListener('click', () => {
        const target = Math.max(1, Number(this.store.state.plant.targetDays) || 30);
        this.store.state.plant.currentStreak = target;
        if (this.audio) this.audio.playSfx('celebrate');
        this.confetti.burstCelebration();
        this.store.save();
        this.renderPlantPage();
        this.renderChecklistHeaderBadges();
        this.showToast('🌸 Full Flowering Tree (100% Bloom)!');
      });
    }
  }

  recordDailyStreakActivity(silent = false) {
    const today = window.getLocalDateStr(0);
    const p = this.store.state.plant;
    if (p.lastStreakDate === today) return;

    const yesterday = window.getLocalDateStr(-1);
    if (p.lastStreakDate === yesterday || !p.lastStreakDate) {
      p.currentStreak = (p.currentStreak || 0) + 1;
    } else {
      if ((p.streakShields || 0) > 0) {
        p.streakShields -= 1;
        p.currentStreak = (p.currentStreak || 0) + 1;
        if (!silent) {
          this.showToast('🛡️ Streak Shield activated! Your tree streak was protected.');
        }
      } else {
        p.currentStreak = 1;
      }
    }

    if (p.currentStreak > 0 && p.currentStreak % 7 === 0) {
      p.streakShields = (p.streakShields || 0) + 1;
      if (!silent) {
        this.showToast('🛡️ +1 Streak Shield earned for a 7-day study streak!');
      }
    }

    p.lastStreakDate = today;
    if (!Array.isArray(p.streakHistory)) p.streakHistory = [];
    if (!p.streakHistory.includes(today)) p.streakHistory.push(today);
    this.store.save();
    if (!silent) {
      this.showToast(`🌱 Daily streak increased to ${p.currentStreak} day(s)! Your tree grew!`);
    }
  }

  getTreeStageInfo(ratio) {
    const stages = [
      { idx: 0, name: 'Dormant Seed', min: 0 },
      { idx: 1, name: 'Tiny Sprout', min: 0.08 },
      { idx: 2, name: 'Leafy Seedling', min: 0.22 },
      { idx: 3, name: 'Woody Sapling', min: 0.40 },
      { idx: 4, name: 'Branching Young Tree', min: 0.60 },
      { idx: 5, name: 'Budding Canopy', min: 0.80 },
      { idx: 6, name: 'Full Flowering Tree', min: 1.0 }
    ];
    let current = stages[0];
    for (const s of stages) {
      if (ratio >= s.min) current = s;
    }
    return { current, stages };
  }

  buildTreeSvg(ratio, species) {
    const r = Math.max(0, Math.min(1, ratio));

    const palettes = {
      woodland: {
        petal: '#E07A5F',
        petalLight: '#F4A261',
        center: '#FFF3B0',
        leafDark: '#2D6A4F',
        leafMid: '#40916C',
        leafLight: '#74C69D'
      },
      sakura: {
        petal: '#FF8FA3',
        petalLight: '#FFB3C6',
        center: '#FFF3B0',
        leafDark: '#386641',
        leafMid: '#588157',
        leafLight: '#84A98C'
      },
      jacaranda: {
        petal: '#A78BFA',
        petalLight: '#DDD6FE',
        center: '#FEF08A',
        leafDark: '#345947',
        leafMid: '#4D7C65',
        leafLight: '#74A58E'
      },
      golden_oak: {
        petal: '#F59E0B',
        petalLight: '#FDE68A',
        center: '#FFFFFF',
        leafDark: '#3A5A40',
        leafMid: '#588157',
        leafLight: '#A3B18A'
      }
    };
    const pal = palettes[species] || palettes.woodland;

    const trunkHeight = 14 + r * 126;
    const trunkTopY = 235 - trunkHeight;
    const baseRadius = 4 + r * 14;
    const canopyScale = Math.max(0, (r - 0.14) / 0.86);

    const renderFlower = (cx, cy, scale = 1) => {
      const pr = 5.5 * scale;
      let petals = '';
      for (let i = 0; i < 5; i++) {
        const ang = (i * 72 * Math.PI) / 180;
        const px = (cx + Math.cos(ang) * pr).toFixed(1);
        const py = (cy + Math.sin(ang) * pr).toFixed(1);
        petals += `<circle cx="${px}" cy="${py}" r="${(4.3 * scale).toFixed(1)}" fill="${
          i % 2 === 0 ? pal.petal : pal.petalLight
        }" />`;
      }
      return `<g>${petals}<circle cx="${cx}" cy="${cy}" r="${(2.6 * scale).toFixed(
        1
      )}" fill="${pal.center}" /></g>`;
    };

    const renderLeaf = (x, y, rot, scale = 1, color = pal.leafLight) => {
      return `<path d="M 0 -9 Q 6.5 0 0 9 Q -6.5 0 0 -9 Z" transform="translate(${x},${y}) rotate(${rot}) scale(${scale})" fill="${color}" opacity="0.92"/>`;
    };

    const flowerSpots = [
      [160, trunkTopY - 12, 1.05],
      [130, trunkTopY + 6, 0.95],
      [190, trunkTopY + 4, 1.0],
      [112, trunkTopY + 26, 0.9],
      [208, trunkTopY + 24, 0.9],
      [148, trunkTopY - 34, 1.1],
      [174, trunkTopY - 30, 0.95],
      [136, trunkTopY + 32, 0.85],
      [184, trunkTopY + 30, 0.9],
      [160, trunkTopY + 14, 1.12],
      [120, trunkTopY - 12, 0.88],
      [200, trunkTopY - 10, 0.92],
      [102, trunkTopY + 8, 0.82],
      [218, trunkTopY + 10, 0.85]
    ];

    const visibleFlowers =
      r >= 0.72
        ? Math.min(
            flowerSpots.length,
            Math.max(2, Math.round(((r - 0.72) / 0.28) * flowerSpots.length))
          )
        : 0;

    return `
      <svg viewBox="0 0 320 295" width="100%" height="100%">
        <defs>
          <radialGradient id="sunHalo" cx="50%" cy="38%" r="52%">
            <stop offset="0%" stop-color="${pal.petalLight}" stop-opacity="${0.22 + r * 0.24}" />
            <stop offset="100%" stop-color="${pal.leafMid}" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="trunkBark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#5C3A24" />
            <stop offset="55%" stop-color="#8A5A3C" />
            <stop offset="100%" stop-color="#4A2E1B" />
          </linearGradient>
        </defs>

        <circle cx="160" cy="128" r="${68 + r * 62}" fill="url(#sunHalo)" />

        <!-- Handcrafted Terracotta Pot & Rich Soil Bed -->
        <ellipse cx="160" cy="278" rx="66" ry="7" fill="rgba(0,0,0,0.22)" />
        <path d="M114 235 L206 235 L194 277 C192 281 188 283 182 283 L138 283 C132 283 128 281 126 277 Z" fill="#C86D51" />
        <path d="M114 235 L152 235 L146 283 L138 283 C132 283 128 281 126 277 Z" fill="#D97F63" opacity="0.55" />
        <rect x="107" y="226" width="106" height="11" rx="5.5" fill="#DF8A6E" />
        <ellipse cx="160" cy="235" rx="45" ry="6.5" fill="#4A3223" />

        ${
          r > 0.05
            ? `
          <path d="M132 235 Q128 225 123 222" stroke="${pal.leafMid}" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M188 235 Q193 224 198 221" stroke="${pal.leafMid}" stroke-width="2" fill="none" stroke-linecap="round"/>
        `
            : ''
        }

        ${
          r < 0.08
            ? `
              <ellipse cx="160" cy="231" rx="8" ry="5.5" fill="#8C583A" />
              <path d="M156 229 Q160 226 164 229" stroke="#D9A074" stroke-width="1.5" fill="none" />
            `
            : ''
        }

        ${
          r >= 0.08
            ? `
              <path d="M ${160 - baseRadius * 0.9} 232 Q ${160 - baseRadius * 1.6} 237 ${
                160 - baseRadius * 1.9
              } 236" stroke="#5C3A24" stroke-width="${2 + r * 3}" fill="none" stroke-linecap="round" />
              <path d="M ${160 + baseRadius * 0.9} 232 Q ${160 + baseRadius * 1.6} 237 ${
                160 + baseRadius * 1.9
              } 236" stroke="#5C3A24" stroke-width="${2 + r * 3}" fill="none" stroke-linecap="round" />

              <path d="M ${160 - baseRadius} 235 Q ${157 - baseRadius * 0.25} ${
                235 - trunkHeight * 0.5
              } ${160 - baseRadius * 0.32} ${trunkTopY} L ${160 + baseRadius * 0.32} ${trunkTopY} Q ${
                163 + baseRadius * 0.25
              } ${235 - trunkHeight * 0.5} ${160 + baseRadius} 235 Z" fill="url(#trunkBark)" />

              <path d="M ${159 - baseRadius * 0.3} 230 Q 158 ${235 - trunkHeight * 0.45} 159 ${
                trunkTopY + 8
              }" stroke="#B07D4F" stroke-width="1.6" fill="none" opacity="0.7" stroke-linecap="round" />
            `
            : ''
        }

        ${
          r >= 0.30
            ? `
              <path d="M158 ${trunkTopY + 36} Q132 ${trunkTopY + 20} ${
                116 - canopyScale * 18
              } ${trunkTopY + 8}" stroke="#6B442B" stroke-width="${
                3 + canopyScale * 4.5
              }" fill="none" stroke-linecap="round" />
              <path d="M162 ${trunkTopY + 32} Q188 ${trunkTopY + 16} ${
                204 + canopyScale * 18
              } ${trunkTopY + 6}" stroke="#6B442B" stroke-width="${
                3 + canopyScale * 4.5
              }" fill="none" stroke-linecap="round" />
              ${
                r >= 0.52
                  ? `
                    <path d="M159 ${trunkTopY + 16} Q138 ${trunkTopY - 6} ${
                      126 - canopyScale * 12
                    } ${trunkTopY - 18}" stroke="#7C5338" stroke-width="${
                      2.5 + canopyScale * 3
                    }" fill="none" stroke-linecap="round" />
                    <path d="M161 ${trunkTopY + 14} Q182 ${trunkTopY - 8} ${
                      194 + canopyScale * 12
                    } ${trunkTopY - 16}" stroke="#7C5338" stroke-width="${
                      2.5 + canopyScale * 3
                    }" fill="none" stroke-linecap="round" />
                  `
                  : ''
              }
            `
            : ''
        }

        ${
          r >= 0.08 && r < 0.38
            ? `
              ${renderLeaf(151, trunkTopY + 3, -45, 0.9 + r * 1.4, pal.leafMid)}
              ${renderLeaf(169, trunkTopY + 3, 45, 0.9 + r * 1.4, pal.leafLight)}
              ${r >= 0.2 ? renderLeaf(160, trunkTopY - 7, 0, 1.0 + r * 1.3, pal.leafMid) : ''}
            `
            : ''
        }

        ${
          r >= 0.26
            ? `
              <g class="tree-canopy-sway">
                <circle cx="${126 - canopyScale * 14}" cy="${trunkTopY + 24}" r="${
                  16 + canopyScale * 24
                }" fill="${pal.leafDark}" opacity="0.92" />
                <circle cx="${194 + canopyScale * 14}" cy="${trunkTopY + 22}" r="${
                  16 + canopyScale * 24
                }" fill="${pal.leafDark}" opacity="0.92" />
                <circle cx="160" cy="${trunkTopY - 10}" r="${
                  20 + canopyScale * 32
                }" fill="${pal.leafDark}" opacity="0.9" />

                <circle cx="${134 - canopyScale * 8}" cy="${trunkTopY + 10}" r="${
                  18 + canopyScale * 26
                }" fill="${pal.leafMid}" opacity="0.95" />
                <circle cx="${186 + canopyScale * 8}" cy="${trunkTopY + 10}" r="${
                  18 + canopyScale * 26
                }" fill="${pal.leafMid}" opacity="0.95" />
                <circle cx="160" cy="${trunkTopY - 16}" r="${
                  18 + canopyScale * 27
                }" fill="${pal.leafMid}" />

                <circle cx="148" cy="${trunkTopY - 20}" r="${
                  12 + canopyScale * 18
                }" fill="${pal.leafLight}" opacity="0.88" />
                <circle cx="175" cy="${trunkTopY - 14}" r="${
                  11 + canopyScale * 16
                }" fill="${pal.leafLight}" opacity="0.85" />
                <circle cx="160" cy="${trunkTopY + 14}" r="${
                  14 + canopyScale * 18
                }" fill="${pal.leafLight}" opacity="0.75" />

                ${renderLeaf(110 - canopyScale * 16, trunkTopY + 18, -62, 0.9 + canopyScale * 0.4, pal.leafLight)}
                ${renderLeaf(210 + canopyScale * 16, trunkTopY + 16, 62, 0.9 + canopyScale * 0.4, pal.leafLight)}
                ${renderLeaf(136, trunkTopY - 34 - canopyScale * 10, -25, 0.85 + canopyScale * 0.4, pal.leafLight)}
                ${renderLeaf(184, trunkTopY - 32 - canopyScale * 10, 28, 0.85 + canopyScale * 0.4, pal.leafLight)}

                ${flowerSpots
                  .slice(0, visibleFlowers)
                  .map(([fx, fy, fs]) => renderFlower(fx, fy, fs))
                  .join('')}

                ${
                  r >= 0.88
                    ? `
                      <ellipse cx="96" cy="${trunkTopY + 58}" rx="4.5" ry="2.6" transform="rotate(-28 96 ${
                        trunkTopY + 58
                      })" fill="${pal.petal}" opacity="0.85"/>
                      <ellipse cx="224" cy="${trunkTopY + 52}" rx="4.5" ry="2.6" transform="rotate(32 224 ${
                        trunkTopY + 52
                      })" fill="${pal.petalLight}" opacity="0.85"/>
                      <ellipse cx="122" cy="233" rx="4" ry="2" fill="${pal.petal}" opacity="0.75"/>
                      <ellipse cx="195" cy="234" rx="4" ry="2" fill="${pal.petalLight}" opacity="0.75"/>
                    `
                    : ''
                }
              </g>
            `
            : ''
        }
      </svg>
    `;
  }

  renderPlantPage() {
    const p = this.store.state.plant;
    const target = Math.max(1, Number(p.targetDays) || 30);
    const streak = Number(p.currentStreak) || 0;
    const shields = Number(p.streakShields ?? 1);

    // Include live active study bonus so the tree visibly grows even during a live focus/stopwatch session!
    const loggedMins = this.store.state.studyLogs.reduce(
      (acc, l) => acc + (Number(l.minutes) || 0),
      0
    );
    const liveMins = this.getLiveActiveStudySeconds() / 60;
    const studyBonusDays = Math.min(0.95, (loggedMins + liveMins) * 0.01);

    const effectiveStreak = Math.min(target, streak + (streak < target ? studyBonusDays : 0));
    const ratio = Math.min(1, effectiveStreak / target);
    const pct = Math.min(100, Math.round(ratio * 100));

    const { current, stages } = this.getTreeStageInfo(ratio);

    document.getElementById('plant-streak-pill').textContent = `🔥 ${streak} Day Streak`;
    const shieldBadge = document.getElementById('plant-shield-badge');
    if (shieldBadge) {
      shieldBadge.textContent = `🛡️ ${shields} Streak Shield${shields === 1 ? '' : 's'} Ready`;
    }

    document.getElementById('plant-stage-title').textContent = `Stage ${current.idx + 1}: ${
      current.name
    }`;
    document.getElementById(
      'plant-stage-desc'
    ).textContent = `${p.goalLabel} • Streak Day ${streak} of ${target} (${pct}% to Full Flowering Tree)`;

    const progBar = document.getElementById('plant-live-progress-bar');
    if (progBar) progBar.style.width = `${pct}%`;

    const slider = document.getElementById('plant-streak-slider');
    const sliderLabel = document.getElementById('plant-slider-label');
    if (slider) {
      slider.max = String(target);
      slider.value = String(Math.min(target, streak));
    }
    if (sliderLabel) {
      sliderLabel.textContent = `Day ${streak} / ${target} (${pct}%)`;
    }

    document.getElementById('plant-svg-stage').innerHTML = this.buildTreeSvg(
      ratio,
      p.treeSpecies || 'woodland'
    );

    const pillsContainer = document.getElementById('plant-stage-pills');
    pillsContainer.innerHTML = stages
      .map((s) => {
        const dayReq = Math.round(s.min * target);
        const isCurrent = s.idx === current.idx;
        const isReached = ratio >= s.min;
        return `
          <div class="stage-step-pill ${isCurrent ? 'current' : isReached ? 'reached' : ''}" data-stage-day="${dayReq}" style="cursor:pointer;" title="Click to preview Stage ${s.idx + 1}">
            <div><strong>${s.idx + 1}. ${s.name}</strong></div>
            <div style="font-family:var(--font-mono);font-size:10.5px;margin-top:2px;">Day ${dayReq}</div>
          </div>
        `;
      })
      .join('');

    // Clicking any of the 7 stage pills previews that stage immediately in real time!
    pillsContainer.querySelectorAll('[data-stage-day]').forEach((pill) => {
      pill.addEventListener('click', () => {
        const dayVal = Number(pill.getAttribute('data-stage-day')) || 0;
        this.store.state.plant.currentStreak = dayVal;
        this.store.save();
        this.renderPlantPage();
        this.renderChecklistHeaderBadges();
      });
    });
  }

  // ==========================================================================
  // 7. WEEKLY SCHEDULE PLANNER (US-05)
  // ==========================================================================
  bindScheduleEvents() {
    document.querySelectorAll('#schedule-day-tabs button').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.scheduleDayFilter = btn.dataset.day;
        document.querySelectorAll('#schedule-day-tabs button').forEach((b) => {
          b.className = b === btn ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';
        });
        this.renderSchedulePage();
      });
    });

    document.getElementById('form-add-schedule').addEventListener('submit', (e) => {
      e.preventDefault();
      const day = document.getElementById('sched-day-select').value;
      const subjectId = document.getElementById('sched-subject-select').value;
      const topic = document.getElementById('sched-topic-input').value.trim();
      const startTime = document.getElementById('sched-start-input').value;
      const duration = Number(document.getElementById('sched-duration-input').value) || 60;

      if (!subjectId) {
        this.showToast('Please create an academic subject first.');
        return;
      }

      this.store.state.scheduleBlocks.push({
        id: 'sched_' + Date.now(),
        day,
        subjectId,
        topic,
        startTime,
        duration
      });

      document.getElementById('sched-topic-input').value = '';
      this.store.save();
      if (this.audio) this.audio.playSfx('add');
      this.renderSchedulePage();
      this.showToast(`Added ${day} study slot (${startTime}).`);
    });
  }

  renderSchedulePage() {
    const container = document.getElementById('schedule-blocks-container');
    let blocks = [...this.store.state.scheduleBlocks];
    if (this.scheduleDayFilter !== 'All') {
      blocks = blocks.filter((b) => b.day === this.scheduleDayFilter);
    }

    blocks.sort((a, b) => a.startTime.localeCompare(b.startTime));

    if (blocks.length === 0) {
      container.innerHTML = `
        <div class="empty-box">
          No study slots scheduled for this view yet. Add a weekly study slot on the right.
        </div>
      `;
      return;
    }

    container.innerHTML = blocks
      .map((b) => {
        const subj = this.store.state.subjects.find((s) => s.id === b.subjectId);
        return `
          <div class="task-row" style="margin-bottom:8px;">
            <div>
              <div class="task-title">${this.escapeHtml(b.topic)}</div>
              <div class="task-badges">
                <span class="badge">${b.day} • ${b.startTime} (${b.duration}m)</span>
                ${
                  subj
                    ? `<span class="badge" style="color:${subj.color};border-color:${subj.color};">${this.escapeHtml(
                        subj.code
                      )} — ${this.escapeHtml(subj.name)}</span>`
                    : ''
                }
              </div>
            </div>
            <button class="btn btn-danger btn-sm" type="button" data-del-sched="${b.id}">✕</button>
          </div>
        `;
      })
      .join('');

    container.querySelectorAll('button[data-del-sched]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.store.state.scheduleBlocks = this.store.state.scheduleBlocks.filter(
          (x) => x.id !== btn.dataset.delSched
        );
        this.store.save();
        this.renderSchedulePage();
      });
    });
  }

  // ==========================================================================
  // 8. SUBJECTS, ANALYTICS & PORTABLE JSON BACKUP (US-02, US-08, US-09)
  // ==========================================================================
  bindSubjectAndAnalyticsEvents() {
    document.getElementById('form-add-subject').addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('subj-name-input').value.trim();
      const code = document.getElementById('subj-code-input').value.trim().toUpperCase();
      const targetHours = Number(document.getElementById('subj-target-input').value) || 6;
      const instructor = document.getElementById('subj-instructor-input').value.trim();
      const color = document.getElementById('subj-color-input').value || '#52B788';

      const newSubj = {
        id: 'subj_' + Date.now(),
        name,
        code,
        targetHours,
        instructor,
        color
      };

      this.store.state.subjects.push(newSubj);
      document.getElementById('subj-name-input').value = '';
      document.getElementById('subj-code-input').value = '';
      document.getElementById('subj-instructor-input').value = '';

      if (this.store.state.onboarding.currentStep === 4) {
        this.store.state.onboarding.currentStep = 5;
      }

      this.store.save();
      if (this.audio) this.audio.playSfx('add');
      this.renderAll();
      this.showToast(`Created subject "${code}: ${name}".`);
    });

    const exportBtn = document.getElementById('btn-export-backup');
    const importBtn = document.getElementById('btn-import-backup');
    const importInput = document.getElementById('input-import-backup');

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const payload = this.store.exportBackupPayload();
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const idTag = (this.store.currentUser && this.store.currentUser.studentId) || 'student';
        a.href = url;
        a.download = `study-planner-backup-${idTag}-${window.getLocalDateStr(0)}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        this.showToast('💾 Study Planner backup (.json) downloaded!');
      });
    }

    if (importBtn && importInput) {
      importBtn.addEventListener('click', () => importInput.click());
      importInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        try {
          const text = await file.text();
          const parsed = JSON.parse(text);
          await this.store.importBackupPayload(parsed);
          this.applyAppearanceSettings();
          this.renderThemeStudioGrid();
          this.renderAll();
          this.showToast('📂 Study Planner backup restored successfully!');
        } catch (err) {
          this.showToast('⚠️ Could not restore backup: Invalid JSON file.');
        }
        importInput.value = '';
      });
    }
  }

  renderSubjectsPage() {
    const container = document.getElementById('subjects-list-container');
    const subjects = this.store.state.subjects;

    if (subjects.length === 0) {
      container.innerHTML = `
        <div class="empty-box">
          No academic subjects created yet. Add your first course on the right (or directly from the Checklist tab).
        </div>
      `;
      return;
    }

    container.innerHTML = subjects
      .map((s) => {
        const subjTasks = this.store.state.tasks.filter((t) => t.subjectId === s.id);
        const doneCount = subjTasks.filter((t) => t.completed).length;
        const pct = subjTasks.length > 0 ? Math.round((doneCount / subjTasks.length) * 100) : 0;

        return `
          <div class="task-row" style="margin-bottom:10px;border-left:4px solid ${s.color};">
            <div style="flex:1;">
              <div class="task-title">${this.escapeHtml(s.code)} — ${this.escapeHtml(s.name)}</div>
              <div class="task-badges">
                <span class="badge">${doneCount}/${subjTasks.length} Tasks (${pct}%)</span>
                <span class="badge">Target: ${s.targetHours}h/wk</span>
                ${s.instructor ? `<span class="badge">${this.escapeHtml(s.instructor)}</span>` : ''}
              </div>
            </div>
            <button class="btn btn-danger btn-sm" type="button" data-del-subj="${s.id}">✕</button>
          </div>
        `;
      })
      .join('');

    container.querySelectorAll('button[data-del-subj]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.delSubj;
        this.store.state.subjects = this.store.state.subjects.filter((s) => s.id !== id);
        this.store.state.tasks = this.store.state.tasks.filter((t) => t.subjectId !== id);
        this.store.save();
        this.renderAll();
      });
    });
  }

  renderSubjectSelects() {
    const subjects = this.store.state.subjects;
    const optionsHtml =
      subjects.length === 0
        ? '<option value="">Click "+ New Subject" above to add one...</option>'
        : subjects
            .map(
              (s) =>
                `<option value="${s.id}">${this.escapeHtml(s.code)} — ${this.escapeHtml(
                  s.name
                )}</option>`
            )
            .join('');

    const taskSel = document.getElementById('task-subject-select');
    const schedSel = document.getElementById('sched-subject-select');
    const focusSel = document.getElementById('focus-subject-select');

    if (taskSel) taskSel.innerHTML = optionsHtml;
    if (schedSel) schedSel.innerHTML = optionsHtml;
    if (focusSel) {
      focusSel.innerHTML =
        `<option value="">General Study Session</option>` +
        subjects
          .map(
            (s) =>
              `<option value="${s.id}">${this.escapeHtml(s.code)} — ${this.escapeHtml(
                s.name
              )}</option>`
          )
          .join('');
    }
  }

  renderAnalyticsPage() {
    const tasks = this.store.state.tasks;
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    const nowMs = Date.now();
    const overdue = tasks.filter(
      (t) => !t.completed && t.deadline && new Date(t.deadline).getTime() < nowMs
    ).length;
    const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

    const loggedStudySec =
      this.store.state.studyLogs.reduce((acc, l) => acc + (Number(l.minutes) || 0), 0) * 60;
    const totalLiveStudySec = loggedStudySec + this.getLiveActiveStudySeconds();
    const totalMins = Math.floor(totalLiveStudySec / 60);
    const remSecs = totalLiveStudySec % 60;

    document.getElementById('kpi-completion-rate').textContent = `${rate}%`;
    document.getElementById('kpi-tasks-ratio').textContent = `${completed} / ${total}`;
    document.getElementById('kpi-study-hours').textContent =
      totalMins >= 60
        ? `${(totalMins / 60).toFixed(1)}h`
        : remSecs > 0
        ? `${totalMins}m ${remSecs}s`
        : `${totalMins}m`;
    document.getElementById('kpi-pending-overdue').textContent = `${pending} / ${overdue}`;

    const subjBox = document.getElementById('analytics-subject-bars');
    if (this.store.state.subjects.length === 0) {
      subjBox.innerHTML = `<div class="empty-box">Add subjects and tasks to view subject-wise progress bars.</div>`;
    } else {
      subjBox.innerHTML = this.store.state.subjects
        .map((s) => {
          const st = tasks.filter((t) => t.subjectId === s.id);
          const sc = st.filter((t) => t.completed).length;
          const spct = st.length > 0 ? Math.round((sc / st.length) * 100) : 0;
          return `
            <div style="margin-bottom:12px;">
              <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;">
                <strong>${this.escapeHtml(s.code)} — ${this.escapeHtml(s.name)}</strong>
                <span style="font-family:var(--font-mono);">${sc}/${st.length} (${spct}%)</span>
              </div>
              <div class="quota-track" style="height:9px;">
                <div class="quota-fill" style="width:${spct}%;background:${s.color};"></div>
              </div>
            </div>
          `;
        })
        .join('');
    }

    const weekBox = document.getElementById('analytics-weekly-bars');
    const todayStr = window.getLocalDateStr(0);
    const days = [];
    for (let i = -6; i <= 0; i++) {
      const ds = window.getLocalDateStr(i);
      const dTasks = tasks.filter((t) => t.scheduledDate === ds && t.completed).length;
      let dMins = this.store.state.studyLogs
        .filter((l) => l.date === ds)
        .reduce((a, b) => a + (Number(b.minutes) || 0), 0);
      if (ds === todayStr) {
        dMins += Math.floor(this.getLiveActiveStudySeconds() / 60);
      }
      days.push({ ds, dTasks, dMins });
    }

    weekBox.innerHTML = days
      .map((d) => {
        const barPct = Math.min(100, d.dTasks * 20 + Math.round(d.dMins / 2));
        return `
          <div style="margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px;">
              <span>${d.ds}</span>
              <span style="font-family:var(--font-mono);color:var(--text-secondary);">${d.dTasks} tasks • ${d.dMins}m focused</span>
            </div>
            <div class="quota-track" style="height:8px;">
              <div class="quota-fill" style="width:${barPct}%;"></div>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // ==========================================================================
  // 9. LOFI BACKGROUND MUSIC DOCK (6 Tracks + Equalizer)
  // ==========================================================================
  bindLofiEvents() {
    const playBtn = document.getElementById('btn-lofi-play');
    const prevBtn = document.getElementById('btn-lofi-prev');
    const nextBtn = document.getElementById('btn-lofi-next');
    const trackSelect = document.getElementById('lofi-track-select');
    const volSlider = document.getElementById('lofi-volume-slider');
    const eqBars = document.getElementById('lofi-eq-bars');

    const syncLofiUi = (playing) => {
      playBtn.textContent = playing ? '⏸' : '▶';
      if (eqBars) eqBars.classList.toggle('playing', Boolean(playing));
    };

    playBtn.addEventListener('click', () => {
      if (!this.audio) return;
      const playing = this.audio.togglePlay();
      syncLofiUi(playing);
    });

    prevBtn.addEventListener('click', () => {
      if (!this.audio) return;
      const idx = this.audio.prevTrack();
      trackSelect.value = String(idx);
      syncLofiUi(this.audio.isPlaying);
      this.store.state.settings.selectedTrack = idx;
      this.store.save();
    });

    nextBtn.addEventListener('click', () => {
      if (!this.audio) return;
      const idx = this.audio.nextTrack();
      trackSelect.value = String(idx);
      syncLofiUi(this.audio.isPlaying);
      this.store.state.settings.selectedTrack = idx;
      this.store.save();
    });

    trackSelect.addEventListener('change', () => {
      if (!this.audio) return;
      const idx = Number(trackSelect.value) || 0;
      this.audio.setTrack(idx, true);
      syncLofiUi(this.audio.isPlaying);
      this.store.state.settings.selectedTrack = idx;
      this.store.save();
    });

    volSlider.addEventListener('input', () => {
      if (!this.audio) return;
      const v = Number(volSlider.value);
      this.audio.setVolume(v);
      this.store.state.settings.musicVolume = v;
      this.store.save();
    });
  }

  // ==========================================================================
  // 10. ACTION-GATED STEP-BY-STEP INTERACTIVE GUIDE HUD
  // ==========================================================================
  bindGuideEvents() {
    document.getElementById('btn-toggle-guide').addEventListener('click', () => {
      this.guideHidden = false;
      this.store.state.onboarding.completed = false;
      this.recomputeGuideStep();
      this.renderGuideHud();
      this.focusCurrentGuideStepTarget();
    });

    document.getElementById('btn-guide-close').addEventListener('click', () => {
      this.guideHidden = true;
      this.clearGuideSpotlights();
      document.getElementById('guide-hud').classList.remove('visible');
    });

    document.getElementById('btn-guide-focus-target').addEventListener('click', () => {
      this.focusCurrentGuideStepTarget();
    });
  }

  recomputeGuideStep() {
    if (!this.store.currentUser) return;
    const st = this.store.state;
    if (st.onboarding.completed) return;

    if (!st.onboarding.currentStep || st.onboarding.currentStep < 3) {
      st.onboarding.currentStep = 3;
    }
    if (st.onboarding.currentStep === 4 && st.subjects.length > 0) {
      st.onboarding.currentStep = 5;
    }
    if (st.onboarding.currentStep === 5 && st.tasks.length > 0) {
      st.onboarding.currentStep = 6;
    }
    if (st.onboarding.currentStep === 6 && st.tasks.some((t) => t.completed)) {
      st.onboarding.completed = true;
      st.onboarding.currentStep = 7;
    }
  }

  getGuideStepDefinition() {
    if (!this.store.currentUser) {
      if (this.authGuideStep === 1) {
        return {
          step: 1,
          title: 'Step 1: Register Your Student Account',
          body: 'Create your account first! Enter your Name, Student ID (e.g., F25CSC038), and Email (F25CSC038.shu.edu.pk). Step 2 unlocks as soon as you register.',
          targetSelector: '#auth-form-register'
        };
      }
      return {
        step: 2,
        title: 'Step 2: Log In with Your Student ID',
        body: 'Great job registering! Now enter your Student ID (e.g., F25CSC038) and password to open your personal study workspace.',
        targetSelector: '#auth-form-login'
      };
    }

    const s = this.store.state.onboarding.currentStep || 3;
    const steps = {
      3: {
        step: 3,
        page: 'plant',
        title: 'Step 3: Set Your Flowering Tree Exam Horizon',
        body: 'Choose how long until your exams (e.g., 1 Week, 1 Month, or 4 Months) and click "Confirm Horizon Settings". Every streak day will grow your tree toward a full flowering canopy!',
        targetSelector: '#plant-goal-card'
      },
      4: {
        step: 4,
        page: 'checklist',
        title: 'Step 4: Create Your First Academic Subject',
        body: 'Click "+ New Subject" right inside the Add Task card (or use the Progress & Subjects tab) to add a course like CSC-201.',
        targetSelector: '#task-creator-card'
      },
      5: {
        step: 5,
        page: 'checklist',
        title: 'Step 5: Add Your First Study Task',
        body: 'Add a task with a title, subject, priority, and due date on the Checklist page. Step 6 unlocks immediately after!',
        targetSelector: '#task-creator-card'
      },
      6: {
        step: 6,
        page: 'checklist',
        title: 'Step 6: Complete a Task to Grow Your Tree!',
        body: 'Click the checkmark on your task! Your Daily Quota bar will advance and your Flowering Tree will earn its first daily streak growth.',
        targetSelector: '#checklist-task-list'
      }
    };
    return steps[s] || null;
  }

  clearGuideSpotlights() {
    document.querySelectorAll('.guide-spotlight-target').forEach((el) => {
      el.classList.remove('guide-spotlight-target');
    });
  }

  applyGuideSpotlight() {
    this.clearGuideSpotlights();
    if (this.guideHidden) return;
    if (this.store.currentUser && this.store.state.onboarding.completed) return;

    const def = this.getGuideStepDefinition();
    if (!def) return;

    const el = document.querySelector(def.targetSelector);
    if (el) {
      el.classList.add('guide-spotlight-target');
    }
  }

  focusCurrentGuideStepTarget() {
    const def = this.getGuideStepDefinition();
    if (!def) return;
    if (def.page && this.activePage !== def.page) {
      this.switchPage(def.page);
    }
    this.applyGuideSpotlight();
    const el = document.querySelector(def.targetSelector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  renderGuideHud() {
    const hud = document.getElementById('guide-hud');
    if (this.guideHidden || (this.store.currentUser && this.store.state.onboarding.completed)) {
      hud.classList.remove('visible');
      this.clearGuideSpotlights();
      return;
    }

    const def = this.getGuideStepDefinition();
    if (!def) {
      hud.classList.remove('visible');
      this.clearGuideSpotlights();
      return;
    }

    hud.classList.add('visible');
    document.getElementById('guide-step-badge').textContent = `Step ${def.step} of 6`;
    document.getElementById('guide-step-title').textContent = def.title;
    document.getElementById('guide-step-body').textContent = def.body;

    const dots = document.getElementById('guide-progress-dots');
    let dotsHtml = '';
    for (let i = 1; i <= 6; i++) {
      const cls = i < def.step ? 'done' : i === def.step ? 'current' : '';
      dotsHtml += `<div class="guide-dot ${cls}"></div>`;
    }
    dots.innerHTML = dotsHtml;

    this.applyGuideSpotlight();
  }

  // ==========================================================================
  // 11. APPEARANCE STUDIO, NOTIFICATIONS & SETTINGS MODALS
  // ==========================================================================
  bindAppearanceAndModalEvents() {
    const appModal = document.getElementById('modal-appearance');
    const openAppBtn = document.getElementById('btn-open-appearance');
    const authThemesBtn = document.getElementById('btn-auth-themes');
    const closeAppBtn = document.getElementById('btn-close-appearance');

    if (openAppBtn) {
      openAppBtn.addEventListener('click', () => {
        this.renderThemeStudioGrid();
        appModal.classList.add('open');
      });
    }
    if (authThemesBtn) {
      authThemesBtn.addEventListener('click', () => {
        this.renderThemeStudioGrid();
        appModal.classList.add('open');
      });
    }
    if (closeAppBtn) {
      closeAppBtn.addEventListener('click', () => appModal.classList.remove('open'));
    }

    document.querySelectorAll('#font-style-group .seg-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        this.store.state.settings.fontStyle = btn.dataset.font;
        this.applyAppearanceSettings();
        await this.store.save();
      });
    });

    document.querySelectorAll('#radius-style-group .seg-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        this.store.state.settings.cardRadius = btn.dataset.radius;
        this.applyAppearanceSettings();
        await this.store.save();
      });
    });

    document.querySelectorAll('#surface-style-group .seg-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        this.store.state.settings.cardSurface = btn.dataset.surface;
        this.applyAppearanceSettings();
        await this.store.save();
      });
    });

    document.querySelectorAll('#particles-style-group .seg-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        this.store.state.settings.ambientParticles = btn.dataset.particles === 'on';
        this.applyAppearanceSettings();
        await this.store.save();
      });
    });

    const notifModal = document.getElementById('modal-notifications');
    document.getElementById('btn-open-notifications').addEventListener('click', () => {
      this.renderNotificationsModal();
      notifModal.classList.add('open');
    });
    document.getElementById('btn-close-notifications').addEventListener('click', () => {
      notifModal.classList.remove('open');
    });
    document.getElementById('btn-clear-notifications').addEventListener('click', () => {
      this.store.state.notifications = [];
      this.store.save();
      this.renderNotificationsModal();
      this.renderNotificationsBadge();
    });

    const setModal = document.getElementById('modal-settings');
    document.getElementById('btn-open-settings').addEventListener('click', () => {
      const s = this.store.state.settings;
      document.getElementById('set-daily-quota').value = s.dailyQuota || 5;
      document.getElementById('set-pomo-focus').value = s.pomodoroFocus || 25;
      document.getElementById('set-pomo-short').value = s.pomodoroShortBreak || 5;
      document.getElementById('set-pomo-long').value = s.pomodoroLongBreak || 15;
      setModal.classList.add('open');
    });
    document.getElementById('btn-close-settings').addEventListener('click', () => {
      setModal.classList.remove('open');
    });

    document.getElementById('form-settings').addEventListener('submit', (e) => {
      e.preventDefault();
      const s = this.store.state.settings;
      s.dailyQuota = Math.max(1, Number(document.getElementById('set-daily-quota').value) || 5);
      s.pomodoroFocus = Math.max(1, Number(document.getElementById('set-pomo-focus').value) || 25);
      s.pomodoroShortBreak = Math.max(
        1,
        Number(document.getElementById('set-pomo-short').value) || 5
      );
      s.pomodoroLongBreak = Math.max(
        1,
        Number(document.getElementById('set-pomo-long').value) || 15
      );

      if (!this.pomo.running) {
        this.selectPomodoroPhase(this.pomo.phase);
      }

      this.store.save();
      setModal.classList.remove('open');
      this.renderAll();
      this.showToast('Settings saved & applied in real time.');
    });
  }

  renderNotificationsBadge() {
    document.getElementById('notif-count-badge').textContent = String(
      this.store.state.notifications.length
    );
  }

  renderNotificationsModal() {
    const box = document.getElementById('notifications-list-box');
    const list = this.store.state.notifications;
    if (list.length === 0) {
      box.innerHTML = `<div class="empty-box">No deadline alerts right now. Alerts appear automatically in real time when tasks are due soon or overdue.</div>`;
      return;
    }
    box.innerHTML = list
      .map(
        (n) => `
        <div class="task-row">
          <div>
            <div style="font-size:13px;font-weight:600;">${this.escapeHtml(n.message)}</div>
            <div style="font-size:11px;color:var(--text-muted);">${n.time}</div>
          </div>
        </div>
      `
      )
      .join('');
  }

  showToast(message) {
    const stack = document.getElementById('toast-stack');
    if (!stack) return;
    const item = document.createElement('div');
    item.className = 'toast-item';
    item.textContent = message;
    stack.appendChild(item);
    setTimeout(() => {
      item.remove();
    }, 4000);
  }

  escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  renderAll() {
    if (!this.store.currentUser) return;
    this.recomputeGuideStep();
    this.renderSubjectSelects();
    this.renderChecklist();
    this.renderPomodoroUI();
    this.renderStopwatchUI();
    this.renderPlantPage();
    this.renderSchedulePage();
    this.renderSubjectsPage();
    this.renderAnalyticsPage();
    this.renderNotificationsBadge();
    this.renderGuideHud();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.plannerApp = new StudyPlannerController();
  window.plannerApp.init();
});

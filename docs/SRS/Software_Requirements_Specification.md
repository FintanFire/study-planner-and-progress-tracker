# Software Requirements Specification (SRS)
## Botanical Study Planner and Progress Tracker

**Version:** 2.0 (Final Course Project Submission)  
**Date:** November 14, 2026  
**Standard:** IEEE Std 830-1998 Adapted Format  

---

## 1. Introduction

### 1.1 Purpose
This Software Requirements Specification (SRS) defines the functional, non-functional, architectural, and user-story requirements for the **Botanical Study Planner and Progress Tracker**. It serves as the authoritative technical reference for instructors, evaluators, and developers.

### 1.2 Scope
The **Botanical Study Planner and Progress Tracker** is a full-stack, distraction-free academic productivity web application designed for university students. It unifies:
- **Blank-Slate University Authentication** (`ID.shu.edu.pk` format) backed by Python + SQLite3.
- **Subject & Task Management** with deadlines, priorities, inline subject creation, and real-time overdue detection.
- **Daily Completion Quota Bar** with celebratory confetti and botanical particle effects.
- **Strict Pomodoro Timer & Smart Study Stopwatch with Break Coach** that tracks study-to-break ratios in real time.
- **Goal-Scaled Botanical Flowering Tree** that grows daily across 7 stages (Seed → Full Flowering Tree) with Streak Shields.
- **Weekly Study Timetable & Subject-Wise / 7-Day Productivity Analytics**.
- **11 Immersive Theme Worlds & Appearance Studio** with scenic SVG backdrops, custom floating props, typography, corner radius, and frosted glass options.
- **Built-in 6-Track Lofi Music Synthesizer** (Web Audio API) and **1-Click JSON Backup Export/Import**.

### 1.3 Definitions, Acronyms, and Abbreviations
- **SRS**: Software Requirements Specification
- **ID**: University Student Identifier (e.g., `F25CSC038`)
- **UI / UX**: User Interface / User Experience
- **REST**: Representational State Transfer
- **SQLite3**: Embedded relational SQL database engine
- **HUD**: Heads-Up Display (used for the 6-step Action-Gated Spotlight Guide)

### 1.4 System Overview & Architecture
The application follows a **three-tier client-server architecture** with automatic offline fallback:
1. **Presentation Layer**: `index.html` + `css/styles.css` (11 themes, responsive 5-tab workspace, SVG flowering tree, scenic backdrops).
2. **Application Logic Layer**: `js/app.js`, `js/store.js`, `js/audio.js`, `js/confetti.js` (250ms wall-clock real-time heartbeat, strict Pomodoro lock, stopwatch break coach, Web Audio synth, canvas props).
3. **Backend & Persistence Layer**: `server.py` + `sqlite3` (`data/study_planner.db`) with salted SHA-256 password hashing and automatic `users_snapshot.json` generation.

#### Supporting Architecture & Design Diagrams
- [01_System_Architecture.svg](diagrams/01_System_Architecture.svg)
- [02_Database_ER_Diagram.svg](diagrams/02_Database_ER_Diagram.svg)
- [03_Use_Case_Diagram.svg](diagrams/03_Use_Case_Diagram.svg)
- [04_User_Flow_And_Tree_Stages.svg](diagrams/04_User_Flow_And_Tree_Stages.svg)

---

## 2. Overall Description

### 2.1 Product Perspective
The system is self-contained with **zero external runtime dependencies** (only Python 3 standard library and modern web browser APIs). It executes identically via the Python SQLite server (`http://localhost:8000`) or directly via `index.html` using `localStorage` fallback. On fresh installation, the application starts in a **100% blank state** (0 pre-added users, 0 subjects, 0 tasks).

### 2.2 User Classes and Characteristics
- **Primary User (University Student)**: Registers with a university ID (`F25CSC038`) and matching email (`F25CSC038.shu.edu.pk`), logs in, organizes courses and tasks, runs focus timers, and tracks exam readiness.
- **Instructor / Evaluator**: Launches the clean blank-state project to verify all user stories, documentation, and database persistence.

### 2.3 Operating Environment
- **Server**: Python 3.8+ (tested on Python 3.13.7) on Windows, macOS, or Linux.
- **Client**: Any modern HTML5/ES6+ browser (Microsoft Edge, Google Chrome, Firefox, Safari).

### 2.4 Design and Implementation Constraints
- No confidential credentials, API keys, or pre-seeded user records may exist in the repository.
- All timers must use wall-clock timestamps (`Date.now()`) to prevent drift when tabs lose focus.

---

## 3. Functional Requirements

| ID | Requirement Name | Description |
| :--- | :--- | :--- |
| **FR-01** | Blank-Slate Registration & Login | Users must register with Full Name, Student ID (e.g., `F25CSC038`), University Email (`ID.shu.edu.pk`), and Password. Login authenticates via Student ID + Password against salted SHA-256 hashes in SQLite3. |
| **FR-02** | Academic Subject Management | Users can create, color-code, and delete academic subjects with course codes, weekly target hours, and instructor notes—either on the Subjects tab or inline inside the Checklist task form (`+ New Subject`). |
| **FR-03** | Task Creation & Organization | Users can create tasks linked to a subject with category, priority (`high`, `medium`, `low`), estimated minutes, and due date/time, plus search, filter (`All`, `Pending`, `Completed`, `Overdue`), and sort (`Priority`, `Deadline`, `Newest`). |
| **FR-04** | Real-Time Deadline & Overdue Scanner | A continuous background scanner checks task deadlines every 3 seconds, applying visual `DUE SOON` (≤ 2 hours) and `OVERDUE` badges and pushing real-time alerts to the notification bell. |
| **FR-05** | Daily Quota Progress Bar & Confetti | Tracks daily completed tasks against a configurable daily quota (default: 5). Reaching 100% triggers a full-screen botanical confetti burst and fanfare. |
| **FR-06** | Weekly Study Timetable | Users can schedule recurring weekly study blocks by day of week, subject, topic, start time, and duration, and filter the timetable by day. |
| **FR-07** | Strict Pomodoro Timer | Provides Focus, Short Break, and Long Break modes with quick duration presets (`10s Demo`, `1m`, `15m`, `25m`, `45m`). Short and Long Break buttons are locked while a Focus run is active. On completion, the user chooses between another focus run, short break, or long break. |
| **FR-08** | Smart Study Stopwatch & Break Coach | Counts upward during study. Pressing Short or Long Break pauses the study timer, times the break, increments break count, and displays real-time pacing advice based on study-to-break ratio. |
| **FR-09** | Zen Focus Mode | Hides the top navigation bar and guide HUD during focus sessions to eliminate distractions. |
| **FR-10** | Goal-Scaled Flowering Tree & Streak Shields | Renders a multi-layered brown-trunk flowering tree SVG across 7 stages (`Dormant Seed` → `Full Flowering Tree`) scaled to the user's exam horizon (`1 Week`, `2 Weeks`, `1 Month`, `2 Months`, `4 Months`, or custom days). Awards `+1 Streak Shield` every 7 streak days. |
| **FR-11** | Subject-Wise & 7-Day Analytics | Displays live completion rate, completed/total tasks, live study time (updating every second during active timers), subject progress bars, and a 7-day productivity chart. |
| **FR-12** | 11 Theme Worlds & Appearance Studio | Supports 11 complete themes (`plants`, `stars`, `moon`, `planets`, `anime`, `onepiece`, `coffee`, `ocean`, `cyberpunk`, `autumn`, `nordic`) with custom scenic SVG backdrops, theme-matched tab icons, floating canvas props, font selector, corner radius, and solid/glass card surface toggle. |
| **FR-13** | 6-Track Lofi Audio & Sound Effects | Built-in Web Audio API Lofi synthesizer + optional MP3 stream support with track selection, volume slider, animated equalizer bars, and task/timer SFX. |
| **FR-14** | Action-Gated Spotlight Guide & JSON Backup | Provides a 6-step interactive onboarding guide that unlocks sequentially as actions are completed, plus 1-click `.json` export and import for cross-computer portability. |

---

## 4. Non-Functional Requirements

| ID | Category | Requirement |
| :--- | :--- | :--- |
| **NFR-01** | **Performance** | UI interactions and theme switches render in under 100ms; the real-time heartbeat updates timers and live study metrics smoothly every second without blocking the main thread. |
| **NFR-02** | **Security** | Passwords are never stored in plaintext; `server.py` generates a unique random 16-byte salt per user and hashes passwords with `SHA-256`. Session tokens are Bearer-authenticated. No secrets or `.db` files are committed to GitHub. |
| **NFR-03** | **Reliability & Availability** | Dual-persistence architecture ensures the app works seamlessly with `server.py` (`SQLite3`) and automatically falls back to browser `localStorage` if opened directly via `file://`. |
| **NFR-04** | **Usability** | Streamlined 5-tab navigation, one-line Daily Focus Intention bar, inline subject creation, and an action-gated spotlight guide ensure zero learning curve for first-time users. |
| **NFR-05** | **Portability** | Zero external package installations (`pip` or `npm` not required). Runs on any OS with Python 3 and a modern web browser; `.json` export/import transfers full user state across devices. |
| **NFR-06** | **Maintainability** | Modular separation of concerns across `server.py` (API/DB), `js/store.js` (state/sync), `js/audio.js` (audio), `js/confetti.js` (scenery/particles), `js/app.js` (controller), and `css/styles.css` (theme tokens). |

---

## 5. User Stories & Acceptance Criteria (`US-01` – `US-14`)

All 14 user stories below are tracked and marked **Done** on the project Trello board (`https://trello.com/b/7rFTsg0p/study-planner-and-progress-tracker`):

1. **US-01: User Registration & Login**
   - *Story*: As a student, I want to register with my university ID (`F25CSC038.shu.edu.pk`) and log in with my ID and password so my study data is saved securely.
   - *Acceptance Criteria*: Starts with 0 pre-added users; validates `ID.shu.edu.pk` email format; authenticates via Student ID + password; persists session across page reloads.
2. **US-02: Manage Academic Subjects**
   - *Story*: As a student, I want to create, color-code, and delete academic subjects so my tasks and analytics are organized by course.
   - *Acceptance Criteria*: Subjects can be added from both the Progress & Subjects tab and inline on the Checklist; deleting a subject cascades cleanly to linked tasks.
3. **US-03: Create & Organize Academic Tasks**
   - *Story*: As a student, I want to add tasks with category, priority, estimated time, and search/filter controls.
   - *Acceptance Criteria*: Tasks appear immediately on the selected date; filters (`All`, `Pending`, `Completed`, `Overdue`) and sorting (`Priority`, `Deadline`, `Newest`) work in real time.
4. **US-04: Set Task Deadlines**
   - *Story*: As a student, I want to assign exact due dates and times to tasks so I can prioritize urgent coursework.
   - *Acceptance Criteria*: Tasks display formatted due timestamps and automatically transition to `DUE SOON` or `OVERDUE` states as time advances.
5. **US-05: Build Weekly Study Schedule / Plan**
   - *Story*: As a student, I want to plan weekly study slots across Monday–Sunday so I maintain a consistent routine.
   - *Acceptance Criteria*: Study slots store day, subject, topic, start time, and duration; day filter tabs filter blocks accurately.
6. **US-06: Track Task Completion Status**
   - *Story*: As a student, I want to check off tasks and see my Daily Quota bar and confetti celebration update immediately.
   - *Acceptance Criteria*: Checking a task toggles completion styling, triggers mini sparkle particles, increments the Daily Quota bar, and bursts confetti at 100%.
7. **US-07: Automated Task Reminders & Notifications**
   - *Story*: As a student, I want automatic real-time alerts when tasks are due soon or overdue.
   - *Acceptance Criteria*: Background scanner pushes non-duplicate alerts to the notification modal and increments the top-bar badge count in real time.
8. **US-08: Subject-Wise Progress Tracking**
   - *Story*: As a student, I want to view completion percentages per subject to identify courses needing attention.
   - *Acceptance Criteria*: Subject progress bars dynamically calculate completed vs. total tasks per course.
9. **US-09: Weekly Productivity & Progress Summary**
   - *Story*: As a student, I want a 7-day productivity summary of completed tasks and focused study minutes.
   - *Acceptance Criteria*: KPI cards and 7-day bars reflect live logged and active study minutes in real time.
10. **US-10: Botanical Flowering Tree & Exam Horizon**
    - *Story*: As a student, I want a flowering tree that grows every streak day according to my exam timeline (1 week, 1 month, 4 months).
    - *Acceptance Criteria*: 7 visual tree stages scale smoothly from Seed (0%) to Full Flowering Tree (100%), with interactive preview slider and Streak Shields every 7 days.
11. **US-11: Strict Pomodoro & Smart Stopwatch Coach**
    - *Story*: As a student, I want a strict Pomodoro timer that blocks premature breaks and a stopwatch that advises me on my study-to-break ratio.
    - *Acceptance Criteria*: Break buttons are disabled during active Focus runs; post-focus choice modal appears at 00:00; stopwatch tracks study time, break time, break count, and pacing advice.
12. **US-12: Lofi Music Dock & Sound Effects**
    - *Story*: As a student, I want soothing Lofi background music with track switching and volume control.
    - *Acceptance Criteria*: 6 tracks selectable via dropdown or Prev/Next buttons; animated equalizer bars play when active; works offline via Web Audio synthesis.
13. **US-13: Action-Gated Step-by-Step Guide**
    - *Story*: As a new user, I want an interactive spotlight guide that walks me step-by-step from registration to completing my first task.
    - *Acceptance Criteria*: Highlights active UI targets with pulsing animations and unlocks each next step only after completing the current action.
14. **US-14: 11 Theme Worlds, Appearance Studio & Portable Backup**
    - *Story*: As a student, I want multiple aesthetic themes with matching props, typography/glass customization, Zen mode, and JSON backup.
    - *Acceptance Criteria*: All 11 themes swap colors, tab icons, SVG scenic backdrops, and Canvas floating props; `.json` export/import restores complete user state.

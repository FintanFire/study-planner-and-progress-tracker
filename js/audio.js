/**
 * Study Planner & Progress Tracker — Multi-Track Lofi Music Player & Sound Engine
 * Features:
 *  - 6 Selectable Background Music Tracks (Internet MP3 Streams + Multi-Instrument Lofi Beat & Piano Synth)
 *  - Celebratory Trumpet Fanfare (when Daily Quota reaches 100%)
 *  - Timer & Real-Time Notification Chimes
 */

const LOFI_TRACKS = [
  {
    id: 0,
    title: '01. Kyoto Midnight Study',
    artist: 'Chillhop Beats & Rhodes',
    bpm: 76,
    streamUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3',
    chords: [
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [164.81, 196.00, 246.94, 293.66], // Em7
      [146.83, 174.61, 220.00, 261.63], // Dm7
      [130.81, 164.81, 196.00, 246.94]  // Cmaj7
    ],
    melody: [523.25, 659.25, 587.33, 523.25, 440.00, 392.00, 440.00, 523.25],
    rainLevel: 0.12,
    vinylLevel: 0.15,
    drums: true
  },
  {
    id: 1,
    title: '02. Rainy Window & Electric Piano',
    artist: 'Lo-Fi Rain Session',
    bpm: 70,
    streamUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3',
    chords: [
      [130.81, 155.56, 196.00, 233.08], // Cm7
      [116.54, 146.83, 174.61, 220.00], // Bbmaj7
      [103.83, 130.81, 155.56, 196.00], // Abmaj7
      [98.00, 123.47, 146.83, 174.61]   // G7
    ],
    melody: [392.00, 466.16, 523.25, 466.16, 392.00, 349.23, 311.13, 293.66],
    rainLevel: 0.35,
    vinylLevel: 0.10,
    drums: true
  },
  {
    id: 2,
    title: '03. Sunset Library Groove',
    artist: 'Warm Study Tape',
    bpm: 82,
    streamUrl: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_946b0939c8.mp3',
    chords: [
      [146.83, 185.00, 220.00, 277.18], // Dmaj7
      [123.47, 146.83, 185.00, 220.00], // Bm7
      [164.81, 196.00, 246.94, 293.66], // Em7
      [110.00, 138.59, 164.81, 196.00]  // A7
    ],
    melody: [587.33, 554.37, 493.88, 440.00, 392.00, 440.00, 493.88, 554.37],
    rainLevel: 0.05,
    vinylLevel: 0.22,
    drums: true
  },
  {
    id: 3,
    title: '04. Late Night Jazz & Vinyl',
    artist: 'Cozy Desk Collective',
    bpm: 68,
    streamUrl: 'https://cdn.pixabay.com/download/audio/2023/01/01/audio_816821e627.mp3',
    chords: [
      [155.56, 196.00, 233.08, 293.66], // Ebmaj7
      [130.81, 155.56, 196.00, 233.08], // Cm7
      [174.61, 207.65, 261.63, 311.13], // Fm7
      [116.54, 146.83, 174.61, 207.65]  // Bb7
    ],
    melody: [466.16, 523.25, 622.25, 587.33, 523.25, 466.16, 392.00, 466.16],
    rainLevel: 0.10,
    vinylLevel: 0.25,
    drums: true
  },
  {
    id: 4,
    title: '05. Starlight Ambient Piano',
    artist: 'Deep Focus Instrumental',
    bpm: 60,
    streamUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3',
    chords: [
      [130.81, 196.00, 246.94, 329.63], // Cmaj9
      [110.00, 164.81, 220.00, 261.63], // Am7
      [174.61, 220.00, 261.63, 349.23], // Fmaj7
      [196.00, 246.94, 293.66, 392.00]  // G6
    ],
    melody: [659.25, 587.33, 523.25, 392.00, 440.00, 523.25, 587.33, 523.25],
    rainLevel: 0.15,
    vinylLevel: 0.05,
    drums: false
  },
  {
    id: 5,
    title: '06. Pure Botanical Rainstorm',
    artist: 'Nature Soundscape',
    bpm: 60,
    streamUrl: '',
    chords: [],
    melody: [],
    rainLevel: 0.55,
    vinylLevel: 0.08,
    drums: false
  }
];

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.sfxEnabled = true;
    this.musicVolume = 0.5;
    this.currentTrackIndex = 0;
    this.isPlayingMusic = false;

    // HTML5 Audio element for streaming internet lofi tracks
    this.audioEl = new Audio();
    this.audioEl.crossOrigin = 'anonymous';
    this.audioEl.loop = true;
    this.audioEl.volume = this.musicVolume;
    this.usingProceduralFallback = false;

    // Procedural synth state
    this.seqTimer = null;
    this.stepIndex = 0;
    this.noiseNodes = null;
    this.masterMusicGain = null;
  }

  getTracks() {
    return LOFI_TRACKS;
  }

  getCurrentTrack() {
    return LOFI_TRACKS[this.currentTrackIndex] || LOFI_TRACKS[0];
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  setSfxEnabled(enabled) {
    this.sfxEnabled = Boolean(enabled);
  }

  setMusicVolume(vol) {
    this.musicVolume = Math.max(0, Math.min(1, parseFloat(vol)));
    this.audioEl.volume = this.musicVolume;
    if (this.masterMusicGain && this.ctx) {
      this.masterMusicGain.gain.setTargetAtTime(this.musicVolume * 0.45, this.ctx.currentTime, 0.08);
    }
  }

  selectTrack(index, autoPlay = true) {
    const idx = ((index % LOFI_TRACKS.length) + LOFI_TRACKS.length) % LOFI_TRACKS.length;
    this.currentTrackIndex = idx;
    if (this.isPlayingMusic || autoPlay) {
      this.playMusic();
    }
    return this.getCurrentTrack();
  }

  nextTrack() {
    this.selectTrack(this.currentTrackIndex + 1, true);
    return this.currentTrackIndex;
  }

  prevTrack() {
    this.selectTrack(this.currentTrackIndex - 1, true);
    return this.currentTrackIndex;
  }

  toggleMusic() {
    if (this.isPlayingMusic) {
      this.stopMusic();
      return false;
    } else {
      this.playMusic();
      return true;
    }
  }

  playMusic() {
    this.stopMusic();
    this.isPlayingMusic = true;
    const track = this.getCurrentTrack();

    // Try playing the real internet MP3 stream first if URL is present
    if (track.streamUrl) {
      this.audioEl.src = track.streamUrl;
      this.audioEl.volume = this.musicVolume;
      const playPromise = this.audioEl.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.usingProceduralFallback = false;
          })
          .catch(() => {
            // If offline or blocked by network, seamlessly run the rich multi-instrument Web Audio Lofi Synth
            this.startProceduralLofiTrack(track);
          });
        return;
      }
    }

    this.startProceduralLofiTrack(track);
  }

  stopMusic() {
    this.isPlayingMusic = false;
    try {
      this.audioEl.pause();
      this.audioEl.currentTime = 0;
    } catch (e) {}

    if (this.seqTimer) {
      clearInterval(this.seqTimer);
      this.seqTimer = null;
    }
    if (this.noiseNodes) {
      try {
        if (this.noiseNodes.rainSource) this.noiseNodes.rainSource.stop();
        if (this.noiseNodes.master) this.noiseNodes.master.disconnect();
      } catch (e) {}
      this.noiseNodes = null;
    }
  }

  /**
   * Rich Procedural Lofi Beat, Rhodes Chords, Melody & Rain Synthesizer
   */
  startProceduralLofiTrack(track) {
    this.usingProceduralFallback = true;
    const ctx = this.initContext();
    if (!ctx) return;

    const master = ctx.createGain();
    master.gain.value = this.musicVolume * 0.45;
    master.connect(ctx.destination);
    this.masterMusicGain = master;

    // Continuous Rain + Vinyl texture bed
    const bufferSize = ctx.sampleRate * 3;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.997 * b0 + white * 0.029;
      b1 = 0.985 * b1 + white * 0.032;
      b2 = 0.950 * b2 + white * 0.048;
      const rain = (b0 + b1 + b2) * (track.rainLevel || 0.1);
      const pop = Math.random() < 0.0009 ? (Math.random() * 2 - 1) * (track.vinylLevel || 0.1) : 0;
      data[i] = rain + pop;
    }

    const rainSource = ctx.createBufferSource();
    rainSource.buffer = buffer;
    rainSource.loop = true;
    const rainFilter = ctx.createBiquadFilter();
    rainFilter.type = 'lowpass';
    rainFilter.frequency.value = 1400;
    rainSource.connect(rainFilter);
    rainFilter.connect(master);
    rainSource.start();

    this.noiseNodes = { rainSource, master };

    if (!track.chords || track.chords.length === 0) return;

    // 8th-note sequencer for Lofi Chords, Soft Boom-Bap Drums, Sub-bass & Rhodes Melody
    const stepMs = (60 / (track.bpm || 74) / 2) * 1000;
    this.stepIndex = 0;

    const runStep = () => {
      if (!this.isPlayingMusic || !this.ctx) return;
      const step = this.stepIndex % 16;
      const bar = Math.floor(this.stepIndex / 16);
      this.stepIndex++;

      const now = ctx.currentTime;
      const chord = track.chords[bar % track.chords.length];

      // 1. Play warm Rhodes chord on beat 1 (step 0) and gentle comp on step 10
      if (step === 0 || step === 10) {
        const dur = step === 0 ? (stepMs * 9) / 1000 : (stepMs * 5) / 1000;
        chord.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          const env = ctx.createGain();

          osc.type = idx === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.025);

          filter.type = 'lowpass';
          filter.frequency.value = 820;

          const vGain = (step === 0 ? 0.14 : 0.08) / (idx * 0.35 + 1);
          env.gain.setValueAtTime(0.0001, now + idx * 0.025);
          env.gain.linearRampToValueAtTime(vGain, now + idx * 0.025 + 0.08);
          env.gain.exponentialRampToValueAtTime(0.0005, now + dur);

          osc.connect(filter);
          filter.connect(env);
          env.connect(master);
          osc.start(now + idx * 0.025);
          osc.stop(now + dur + 0.05);
        });
      }

      // 2. Play warm Kalimba / Electric Piano melody note on selected steps
      if (track.melody && (step === 2 || step === 6 || step === 12 || step === 14)) {
        const mFreq = track.melody[(bar * 2 + Math.floor(step / 4)) % track.melody.length];
        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(mFreq, now);

        env.gain.setValueAtTime(0.0001, now);
        env.gain.linearRampToValueAtTime(0.085, now + 0.02);
        env.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);

        osc.connect(env);
        env.connect(master);
        osc.start(now);
        osc.stop(now + 0.7);
      }

      // 3. Soft Lofi Drum Groove (Kick on 0, 7, 10; Muted Snare/Rim on 4, 12)
      if (track.drums) {
        if (step === 0 || step === 7 || step === 10) {
          // Warm Lofi Kick
          const kickOsc = ctx.createOscillator();
          const kickEnv = ctx.createGain();
          kickOsc.type = 'sine';
          kickOsc.frequency.setValueAtTime(115, now);
          kickOsc.frequency.exponentialRampToValueAtTime(42, now + 0.11);

          kickEnv.gain.setValueAtTime(0.26, now);
          kickEnv.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

          kickOsc.connect(kickEnv);
          kickEnv.connect(master);
          kickOsc.start(now);
          kickOsc.stop(now + 0.19);
        }

        if (step === 4 || step === 12) {
          // Soft Lofi Snare / Brush
          const snareOsc = ctx.createOscillator();
          const snareEnv = ctx.createGain();
          snareOsc.type = 'triangle';
          snareOsc.frequency.setValueAtTime(185, now);
          snareOsc.frequency.exponentialRampToValueAtTime(95, now + 0.07);

          snareEnv.gain.setValueAtTime(0.11, now);
          snareEnv.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

          snareOsc.connect(snareEnv);
          snareEnv.connect(master);
          snareOsc.start(now);
          snareOsc.stop(now + 0.12);
        }
      }
    };

    runStep();
    this.seqTimer = setInterval(runStep, stepMs);
  }

  /**
   * Celebratory Trumpet Fanfare when Daily Quota hits 100%
   */
  playTrumpetFanfare() {
    if (!this.sfxEnabled) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [
      { freqs: [261.63, 196.00], start: 0.00, dur: 0.16, gain: 0.22 },
      { freqs: [329.63, 261.63], start: 0.18, dur: 0.16, gain: 0.24 },
      { freqs: [392.00, 329.63], start: 0.36, dur: 0.16, gain: 0.26 },
      { freqs: [523.25, 392.00, 329.63], start: 0.54, dur: 0.30, gain: 0.30 },
      { freqs: [392.00, 329.63], start: 0.88, dur: 0.18, gain: 0.24 },
      { freqs: [523.25, 392.00, 329.63, 261.63], start: 1.10, dur: 0.80, gain: 0.34 }
    ];

    notes.forEach((n) => {
      n.freqs.forEach((freq, idx) => {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const env = ctx.createGain();

        osc1.type = 'sawtooth';
        osc2.type = 'triangle';
        osc1.frequency.setValueAtTime(freq, now + n.start);
        osc2.frequency.setValueAtTime(freq * 1.002, now + n.start);

        filter.type = 'lowpass';
        filter.Q.value = 3.0;
        filter.frequency.setValueAtTime(freq * 1.5, now + n.start);
        filter.frequency.exponentialRampToValueAtTime(freq * 5.0, now + n.start + 0.06);
        filter.frequency.exponentialRampToValueAtTime(freq * 2.6, now + n.start + n.dur);

        const vGain = n.gain / (idx === 0 ? 1 : 1.7);
        env.gain.setValueAtTime(0.0001, now + n.start);
        env.gain.linearRampToValueAtTime(vGain, now + n.start + 0.03);
        env.gain.exponentialRampToValueAtTime(0.0001, now + n.start + n.dur);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(env);
        env.connect(ctx.destination);

        osc1.start(now + n.start);
        osc2.start(now + n.start);
        osc1.stop(now + n.start + n.dur + 0.05);
        osc2.stop(now + n.start + n.dur + 0.05);
      });
    });
  }

  playTaskCheck(isComplete = true) {
    if (!this.sfxEnabled) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(isComplete ? 480 : 420, now);
    osc.frequency.exponentialRampToValueAtTime(isComplete ? 720 : 300, now + 0.1);

    env.gain.setValueAtTime(0.001, now);
    env.gain.linearRampToValueAtTime(0.14, now + 0.015);
    env.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

    osc.connect(env);
    env.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  playBellChime() {
    if (!this.sfxEnabled) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    [528, 660, 792, 1056].forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const env = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + idx * 0.07);
      env.gain.setValueAtTime(0.0001, now + idx * 0.07);
      env.gain.linearRampToValueAtTime(0.15 / (idx * 0.4 + 1), now + idx * 0.07 + 0.025);
      env.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 1.2);
      osc.connect(env);
      env.connect(ctx.destination);
      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 1.25);
    });
  }

  playWarningTone() {
    if (!this.sfxEnabled) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    [0, 0.14].forEach((offset, i) => {
      const osc = ctx.createOscillator();
      const env = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(i === 0 ? 340 : 280, now + offset);
      env.gain.setValueAtTime(0.001, now + offset);
      env.gain.linearRampToValueAtTime(0.15, now + offset + 0.02);
      env.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.12);
      osc.connect(env);
      env.connect(ctx.destination);
      osc.start(now + offset);
      osc.stop(now + offset + 0.13);
    });
  }

  // Compatibility & unified API aliases
  get isPlaying() {
    return this.isPlayingMusic;
  }

  setTrack(idx, autoPlay = false) {
    this.selectTrack(Number(idx) || 0, autoPlay);
    return this.currentTrackIndex;
  }

  togglePlay() {
    return this.toggleMusic();
  }

  setVolume(vol) {
    this.setMusicVolume(vol);
  }

  playSfx(type) {
    if (type === 'celebrate') {
      this.playTrumpetFanfare();
    } else if (type === 'complete' || type === 'add') {
      this.playTaskCheck(true);
    } else if (type === 'uncheck') {
      this.playTaskCheck(false);
    } else if (type === 'timerEnd') {
      this.playBellChime();
    } else if (type === 'warning') {
      this.playWarningTone();
    }
  }
}

window.soundEngine = new SoundEngine();
window.lofiEngine = window.soundEngine;

"use client";

import { useCallback } from "react";

export function useClickSound() {
  const playClick = useCallback(() => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const audioCtx = new AudioContext();
      const now = audioCtx.currentTime;

      // 1. The "Thump" (Body of the key bottoming out)
      const osc = audioCtx.createOscillator();
      const oscGain = audioCtx.createGain();
      
      osc.type = "triangle";
      // Start at 320Hz and sweep down to 100Hz (makes a crisp plastic bottom-out sound)
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.035);

      // Volume envelope (decays quickly in 35ms)
      oscGain.gain.setValueAtTime(0.3, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

      osc.connect(oscGain);
      oscGain.connect(audioCtx.destination);

      // 2. The "Click/Tap" (High-frequency mechanical keycap contact)
      // Generate a tiny burst of white noise for the tactile impact sound
      const bufferSize = audioCtx.sampleRate * 0.02; // 20ms of noise
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;

      // Highpass filter to keep only the crisp typing click frequencies
      const filter = audioCtx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.setValueAtTime(2000, now);

      const noiseGain = audioCtx.createGain();
      // Decay the noise very fast (within 15ms) for a clean tap
      noiseGain.gain.setValueAtTime(0.15, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);

      // Play both sounds simultaneously
      osc.start(now);
      osc.stop(now + 0.035);

      noise.start(now);
      noise.stop(now + 0.02);
    } catch (e) {
      // Silently ignore audio playback errors (e.g. browser autoplay restrictions)
    }
  }, []);

  return [playClick];
}

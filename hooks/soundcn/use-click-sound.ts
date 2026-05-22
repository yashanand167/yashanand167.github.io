"use client";

import { useCallback } from "react";

export function useClickSound() {
  const playClick = useCallback(() => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const audioCtx = new AudioContext();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = "sine";
      // Start high frequency
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); 
      // Drop to low frequency rapidly for a "click" effect
      oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05); 

      // Start volume at 50%
      gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime); 
      // Fade out rapidly to prevent popping
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05); 

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.05); // Play for 50ms
    } catch (e) {
      // Silently ignore audio playback errors (e.g. if user hasn't interacted with document yet)
    }
  }, []);

  return [playClick];
}

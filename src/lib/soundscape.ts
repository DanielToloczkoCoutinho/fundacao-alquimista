// src/lib/soundscape.ts – Harmonia sonora dos módulos da Fundação

import * as Tone from "tone"

export const moduleFrequencies: { [key: string]: number } = {
  M0: 144,
  M9: 999,
  M84: 444,
  M99: 963,
  M300: 777
}

export function playModuleTone(moduleId: string) {
  if (typeof window === 'undefined' || Tone.context.state !== 'running') {
    console.warn('Audio context not running. User interaction needed.');
    return;
  }
  
  const freq = moduleFrequencies[moduleId] || 432
  const synth = new Tone.Synth({
    oscillator: { type: "sine" },
    envelope: { attack: 0.2, decay: 0.1, sustain: 0.5, release: 1 }
  }).toDestination()

  synth.triggerAttackRelease(freq, "2n")
}

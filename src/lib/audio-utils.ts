
'use client';
import { toast } from "@/hooks/use-toast";

export async function resonanceTone(frequency: number): Promise<void> {
  if (typeof window === 'undefined') return;

  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1.5);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 2);
    
    toast({
        title: "Ressonância Invocada",
        description: `Emitindo frequência de ${frequency}Hz.`,
    });
    
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (error) {
    console.error("Erro ao gerar tom de ressonância:", error);
    toast({
        title: "Dissonância de Áudio",
        description: "Não foi possível emitir a frequência.",
        variant: "destructive"
    });
  }
}

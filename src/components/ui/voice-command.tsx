'use client'

import { useEffect, useState } from 'react'
import { Button } from './button';
import { Mic, MicOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function VoiceCommand() {
  const [transcript, setTranscript] = useState('')
  const [isListening, setIsListening] = useState(false)
  const { toast } = useToast();

  useEffect(() => {
    if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
        console.warn('API de Reconhecimento de Voz não suportada neste navegador.');
        return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition()
    recognition.lang = 'pt-BR'
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onstart = () => {
        setIsListening(true);
        toast({ title: "Ouvindo...", description: "A Fundação aguarda vossa palavra." });
    };

    recognition.onend = () => {
        setIsListening(false);
    };

    recognition.onerror = (event) => {
        console.error('Erro no reconhecimento de voz:', event.error);
        toast({ title: "Dissonância", description: "Não foi possível compreender o comando.", variant: "destructive" });
        setIsListening(false);
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript
      setTranscript(result)
      toast({ title: "Comando Recebido", description: `"${result}"` });
      // Aqui podemos invocar ações cerimoniais com base no comando
      // Ex: if (result.toLowerCase().includes('ativar módulo 9')) { ... }
    }

    if (isListening) {
        try {
            recognition.start()
        } catch(e) {
            console.error("Erro ao iniciar reconhecimento:", e);
            setIsListening(false);
        }
    }

    return () => {
      recognition.stop()
    }
  }, [isListening, toast])

  const toggleListening = () => {
      if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
          toast({ title: "Incompatível", description: "Seu navegador não suporta o reconhecimento de voz.", variant: "destructive" });
          return;
      }
      setIsListening(prevState => !prevState);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        onClick={toggleListening}
        variant="outline"
        size="lg"
        className="w-full"
      >
        {isListening ? <MicOff className="mr-2 h-5 w-5" /> : <Mic className="mr-2 h-5 w-5" />}
        {isListening ? 'Parar de Escutar' : 'Invocar Linguagem Viva'}
      </Button>
      {transcript && (
        <div className="text-foreground text-center mt-2">
          <span className="opacity-70 text-sm">Último Comando:</span>
          <p className="text-lg">"{transcript}"</p>
        </div>
      )}
    </div>
  )
}

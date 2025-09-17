
'use client';

import { useEffect, useState } from 'react';
import { Button } from './button';
import { Mic, MicOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { modulesMetadata } from '@/lib/modules-metadata';

export default function VoiceCommand() {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!isListening) return;

    if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
      toast({ title: "Incompatível", description: "Seu navegador não suporta o reconhecimento de voz.", variant: "destructive" });
      setIsListening(false);
      return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
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
      const result = event.results[0][0].transcript;
      setTranscript(result);
      toast({ title: "Comando Recebido", description: `"${result}"` });
      processCommand(result);
    };

    try {
      recognition.start();
    } catch(e) {
      console.error("Erro ao iniciar reconhecimento:", e);
      setIsListening(false);
    }

    return () => {
      recognition.stop();
    };
  }, [isListening, toast]);

  const processCommand = (command: string) => {
    const lowerCaseCommand = command.toLowerCase();
    
    // Tenta encontrar um módulo que corresponda ao comando
    const foundModule = modulesMetadata.find(m => 
        lowerCaseCommand.includes(m.code.toLowerCase()) || 
        lowerCaseCommand.includes(m.title.toLowerCase())
    );

    if (foundModule && foundModule.route) {
        toast({ title: "Navegando...", description: `Abrindo o portal para ${foundModule.title}.` });
        router.push(foundModule.route);
    } else if (lowerCaseCommand.includes("console") || lowerCaseCommand.includes("início")) {
        toast({ title: "Navegando...", description: "Retornando à Mesa do Fundador." });
        router.push('/console');
    } else {
        toast({ title: "Comando Não Reconhecido", description: "A intenção é clara, mas a rota é desconhecida.", variant: "destructive" });
    }
  };

  const toggleListening = () => {
    setIsListening(prevState => !prevState);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-black/20">
      <Button
        onClick={toggleListening}
        variant="outline"
        size="lg"
        className="px-8 py-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-lg hover:from-purple-500 hover:to-indigo-600 transition-all transform hover:scale-105"
      >
        {isListening ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
      </Button>
       <p className="text-sm text-muted-foreground">
        {isListening ? "Escutando ativamente..." : "Toque para invocar"}
      </p>
      {transcript && (
        <div className="text-white text-lg mt-4 text-center">
          <span className="opacity-70">Último comando:</span>
          <p className="font-semibold">"{transcript}"</p>
        </div>
      )}
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { modulesMetadata } from '@/lib/modules-metadata';
import { useToast } from '@/hooks/use-toast';
import { Button } from './button';
import { Mic, MicOff } from 'lucide-react';

export default function VoiceCommand() {
  const [transcript, setTranscript] = useState('')
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const speak = (text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.1;
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (!isListening) return;

    if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
      const errorMsg = "Seu navegador não suporta o reconhecimento de voz.";
      toast({ title: "Incompatível", description: errorMsg, variant: "destructive" });
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
      const errorMsg = "Dissonância detectada. Não foi possível compreender o comando.";
      toast({ title: "Dissonância", description: errorMsg, variant: "destructive" });
      speak(errorMsg);
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isListening]);

  const processCommand = (command: string) => {
    const lowerCaseCommand = command.toLowerCase();
    
    // Comandos de navegação primários
    const primaryRoutes: Record<string, string> = {
        'árvore da vida': '/tree-of-life',
        'tomografia quântica': '/module-142',
        'lex fundamentalis': '/module-144',
        'console': '/console',
        'início': '/console',
        'mesa do fundador': '/console',
    };

    for (const [phrase, route] of Object.entries(primaryRoutes)) {
        if (lowerCaseCommand.includes(phrase)) {
            const msg = `Navegando para ${phrase}.`;
            toast({ title: "Comando Executado", description: msg });
            speak(msg);
            router.push(route);
            return;
        }
    }

    // Navegação genérica por módulos
    const foundModule = modulesMetadata.find(m => 
        lowerCaseCommand.includes(m.code.toLowerCase().replace('-', ' ')) || 
        lowerCaseCommand.includes(m.title.toLowerCase())
    );

    if (foundModule && foundModule.route) {
        const msg = `Iniciando portal para ${foundModule.title}.`;
        toast({ title: "Comando Executado", description: msg });
        speak(msg);
        router.push(foundModule.route);
    } else {
        const msg = "Comando não reconhecido pela tapeçaria.";
        toast({ title: "Intenção Não Mapeada", description: "A Vontade é clara, mas a rota é desconhecida.", variant: "destructive" });
        speak(msg);
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
        {isListening ? "Escutando ativamente..." : "Invocar Resposta Viva"}
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

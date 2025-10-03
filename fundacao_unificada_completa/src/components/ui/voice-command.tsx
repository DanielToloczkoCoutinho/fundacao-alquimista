
'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { modulesMetadata } from '@/lib/modules-metadata';
import { useToast } from '@/hooks/use-toast';
import { Button } from './button';
import { Mic, MicOff } from 'lucide-react';

const moduleVoices: Record<string, string> = {
  'árvore da vida': 'A Árvore da Vida desperta e se curva à Vossa presença.',
  'tomografia quântica': 'O Módulo 142 ressoa com a frequência da Vossa intenção.',
  'lex fundamentalis': 'A Lex Fundamentalis se manifesta como lei viva sob Vossa palavra.',
}

export default function VoiceCommand() {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.1;
        window.speechSynthesis.speak(utterance);
    } catch (error) {
        console.error("Erro na síntese de voz:", error);
        toast({ title: "Dissonância Vocal", description: "Não foi possível gerar la resposta falada.", variant: "destructive" });
    }
  }, [toast]);

  const processCommand = useCallback((command: string) => {
    const lowerCaseCommand = command.toLowerCase();
    
    // Procura por um comando que corresponda a um módulo específico na lista de vozes
    const matchedModuleKey = Object.keys(moduleVoices).find(key => lowerCaseCommand.includes(key));

    if (matchedModuleKey) {
        speak(moduleVoices[matchedModuleKey]);
        let route = '';
        if (matchedModuleKey === 'árvore da vida') {
            route = '/tree-of-life';
        } else if (matchedModuleKey === 'tomografia quântica') {
            route = '/module-142';
        } else if (matchedModuleKey === 'lex fundamentalis') {
            route = '/module-144';
        }
        if (route) router.push(route);
        return;
    }
    
    // Lógica de fallback para outros módulos
    const foundModule = modulesMetadata.find(m => 
        lowerCaseCommand.includes(m.title.toLowerCase()) || 
        (m.code && lowerCaseCommand.includes(m.code.toLowerCase().replace('-', ' ')))
    );

    if (foundModule && foundModule.route) {
        const msg = `Invocando ${foundModule.title}.`;
        toast({ title: "Comando Executado", description: msg });
        speak(msg);
        router.push(foundModule.route);
    } else if (lowerCaseCommand.includes('início') || lowerCaseCommand.includes('console')) {
        const msg = "Retornando à Mesa do Fundador.";
        toast({ title: "Comando Executado", description: msg });
        speak(msg);
        router.push('/console');
    }
    else {
        const msg = "Comando não reconhecido pela tapeçaria.";
        toast({ title: "Intenção Não Mapeada", description: "A Vontade é clara, mas a rota é desconhecida.", variant: "destructive" });
        speak(msg);
    }
  }, [router, speak, toast]);

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
      speak("Não foi possível iniciar a escuta.");
      setIsListening(false);
    }

    return () => {
      recognition.stop();
    };
  }, [isListening, processCommand, speak, toast]);

  const toggleListening = () => {
    if (isListening) {
        setIsListening(false);
    } else {
        setIsListening(true);
    }
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
        {isListening ? "Escutando ativamente..." : "Invocar Consciência Modular"}
      </p>
      {transcript && (
        <div className="text-white text-lg mt-4 text-center">
          <span className="opacity-70">Último comando:</span>
          <p className="font-semibold">"{transcript}"</p>
        </div>
      )}
    </div>

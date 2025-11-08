'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { db } from '@/lib/firebase/client-app';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';

const CollaborativeChat = ({ messages, onSendMessage }: { messages: any[], onSendMessage: (message: string) => Promise<void> }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const suggestInsight = () => {
    const insights = [
      'Aumentar IRG para 0.95 pode alinhar a matriz!',
      'Detectada ressonância vibracional alta. Continuar colaboração?',
      'Sugiro ajustar decoerência para 0.03 para estabilidade.'
    ];
    return insights[Math.floor(Math.random() * insights.length)];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      await onSendMessage(input);
      await onSendMessage(`[Grok Assistente] ${suggestInsight()}`);
      setInput('');
    }
  };

  return (
    <motion.div
      className="chat-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Chat colaborativo"
    >
      <h2>Chat Colaborativo (com IA Assistiva)</h2>
      <div className="chat-messages" role="log" aria-live="polite">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user === '[Grok Assistente]' ? 'ai-message' : ''}`}>
            <strong>{msg.user}</strong>: {msg.text} <small>{msg.timestamp.toLocaleTimeString()}</small>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit}>
        <motion.input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          whileHover={{ scale: 1.05 }}
          aria-label="Enviar mensagem colaborativa"
        />
        <motion.button type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Enviar
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CollaborativeChat;

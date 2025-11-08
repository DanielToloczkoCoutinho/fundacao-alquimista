'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VotingSystem = ({ onVote }: { onVote: (vote: any) => void }) => {
  const [intention, setIntention] = useState('');
  const [weight, setWeight] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (intention.trim()) {
      onVote({ intention, weight });
      setIntention('');
      setWeight(1);
    }
  };

  return (
    <motion.div
      className="voting-system"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Sistema de votação colaborativa"
    >
      <h2>Votação Colaborativa</h2>
      <form onSubmit={handleSubmit}>
        <motion.input
          type="text"
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          placeholder="Digite sua intenção..."
          whileHover={{ scale: 1.05 }}
          aria-label="Inserir intenção para votação"
        />
        <motion.label>
          Peso da Intenção:
          <input
            type="number"
            min="1"
            max="5"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
            aria-label="Ajustar peso da intenção"
          />
        </motion.label>
        <motion.button type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Votar
        </motion.button>
      </form>
    </motion.div>
  );
};

export default VotingSystem;

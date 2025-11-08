'use client';
import React from 'react';
import { motion } from 'framer-motion';

const MemberPoint = ({ x, y, resonance, shap }: { x: number, y: number, resonance: number, shap: number }) => {
  return (
    <motion.div
      className="member-point"
      style={{ left: x, top: y, background: shap > 0 ? '#ff0000' : '#82ca9d' }}
      animate={{ scale: [1, 1.2, 1], opacity: resonance }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      aria-label={`Ponto de ressonância: ${resonance}, Impacto SHAP: ${shap}`}
    />
  );
};

export default MemberPoint;

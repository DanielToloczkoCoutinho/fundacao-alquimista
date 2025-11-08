'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HeatmapOverlay = ({ resonance }: { resonance: number }) => {
  return (
    <motion.div
      className="heatmap-overlay"
      style={{ background: `radial-gradient(circle, rgba(255, 255, 255, ${resonance}), transparent)` }}
      animate={{ scale: [1, 1.1, 1], opacity: resonance }}
      transition={{ repeat: Infinity, duration: 2 }}
      aria-hidden="true"
    >
      <motion.div
        className="centroid"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      />
    </motion.div>
  );
};

export default HeatmapOverlay;

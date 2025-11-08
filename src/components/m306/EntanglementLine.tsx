'use client';
import React from 'react';
import { motion } from 'framer-motion';

const EntanglementLine = ({ points }: { points: any[] }) => {
  return (
    <svg className="entanglement-lines" aria-hidden="true">
      {points.map((point, i) =>
        points.slice(i + 1).map((nextPoint, j) => (
          <motion.line
            key={`${i}-${j}`}
            x1={Math.random() * 500}
            y1={Math.random() * 300}
            x2={Math.random() * 500}
            y2={Math.random() * 300}
            stroke="#8884d8"
            strokeWidth={point.irg * 2}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        ))
      )}
    </svg>
  );
};

export default EntanglementLine;

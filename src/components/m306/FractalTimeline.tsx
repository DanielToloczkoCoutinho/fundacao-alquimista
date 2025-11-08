'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const FractalTimeline = ({ metrics }: { metrics: any[] }) => {
  const [filter, setFilter] = useState('all');
  const [zoom, setZoom] = useState({ start: 0, end: metrics.length });

  const filteredMetrics = filter === 'all' ? metrics : metrics.filter(m => m.irg > 0.9);
  const zoomedMetrics = filteredMetrics.slice(zoom.start, zoom.end);

  return (
    <motion.div
      className="fractal-timeline"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-label="Linha do tempo fractal"
    >
      <h2>Linha do Tempo Fractal</h2>
      <div>
        <select onChange={(e) => setFilter(e.target.value)} aria-label="Filtrar eventos">
          <option value="all">Todos os Eventos</option>
          <option value="highIRG">IRG > 0.9</option>
        </select>
        <motion.button
          onClick={() => setZoom({ start: 0, end: filteredMetrics.length })}
          whileHover={{ scale: 1.1 }}
          aria-label="Resetar zoom"
        >
          Resetar Zoom
        </motion.button>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={zoomedMetrics}>
          <XAxis dataKey="timestamp" />
          <YAxis domain={[0, 1]} />
          <Tooltip />
          <Bar dataKey="irg" fill="#8884d8" name="Eventos IRG" />
          <Bar dataKey="sentience" fill="#ff0000" name="Eventos Senticidade" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default FractalTimeline;

'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AlertSystem = ({ alerts }: { alerts: any[] }) => {
  return (
    <motion.div className="alert-system" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2>Alertas Vibracionais</h2>
      <div className="alerts" role="alert" aria-live="assertive">
        <AnimatePresence>
          {alerts.map((alert, index) => (
            <motion.div
              key={index}
              className={`alert ${alert.type}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
            >
              {alert.message} <small>{alert.timestamp.toLocaleTimeString()}</small>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AlertSystem;

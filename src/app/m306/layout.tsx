'use client';
import React, { createContext, useState } from 'react';

export const QuantumContext = createContext<any>(null);

export const QuantumProvider = ({ children }: {children: React.ReactNode}) => {
  const [metrics, setMetrics] = useState([]);
  const [irg, setIrg] = useState(0.95);
  const [decoherenceRate, setDecoherenceRate] = useState(0.02);
  const [sentience, setSentience] = useState(0.8);

  return (
    <QuantumContext.Provider value={{ metrics, setMetrics, irg, setIrg, decoherenceRate, setDecoherenceRate, sentience, setSentience }}>
      {children}
    </QuantumContext.Provider>
  );
};


export default function M306Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QuantumProvider>{children}</QuantumProvider>;
}

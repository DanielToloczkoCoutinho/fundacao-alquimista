'use client';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { db } from '@/lib/firebase/client-app';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { QuantumContext } from './layout';
import HeatmapOverlay from '@/components/m306/HeatmapOverlay';
import MemberPoint from '@/components/m306/MemberPoint';
import EntanglementLine from '@/components/m306/EntanglementLine';
import FractalTimeline from '@/components/m306/FractalTimeline';
import CollaborativeChat from '@/components/m306/CollaborativeChat';
import VotingSystem from '@/components/m306/VotingSystem';
import AlertSystem from '@/components/m306/AlertSystem';
import { debounce } from '@/lib/utils/debounce';
import { initializeQKD } from '@/lib/utils/qkd';
import './M306Portal.css';

const containerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.3 } },
};

const M306Portal = () => {
  const { metrics, setMetrics, irg, setIrg, decoherenceRate, setDecoherenceRate } = useContext(QuantumContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [alerts, setAlerts] = useState<any[]>([]);
  const listenerRef = useRef<any>(null);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        setIsOnline(navigator.onLine);
    }
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (!db) return;
    const debouncedSnapshot = debounce((snapshot: any) => {
      const data = snapshot.docs.map((doc: any) => ({
        id: doc.id,
        timestamp: new Date(doc.data().timestamp?.toDate()).toLocaleTimeString(),
        irg: doc.data().irg,
        lux: doc.data().lux || 0.85,
        decoherence: doc.data().decoherence,
        sentience: doc.data().sentience,
        js_div: doc.data().js_div,
        p_value: doc.data().p_value,
        shap_values: doc.data().shap_values,
      }));
      setMetrics(data.slice(-50));
      if (data[data.length - 1]?.irg < 0.9) {
        setAlerts((prevAlerts) => [...prevAlerts, { type: 'warning', message: 'IRG abaixo de 0.9! 🚨', timestamp: new Date() }]);
      }
    }, 500);

    listenerRef.current = onSnapshot(collection(db, 'quantumMetrics'), debouncedSnapshot, (error) => {
      console.error('Firestore error:', error);
      setModalMessage('Erro ao conectar com Firestore ⏳');
      setModalOpen(true);
    });

    return () => {
        if(listenerRef.current) {
            listenerRef.current();
        }
    }
  }, [setMetrics, alerts]);

  useEffect(() => {
    initializeQKD().then(() => console.log('QKD inicializado'));
  }, []);

  const handleIntentionChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!db) return;
    const newIrg = parseFloat(e.target.value);
    setIrg(newIrg);
    setModalMessage(`Intenção ajustada: IRG = ${newIrg} ✅`);
    setModalOpen(true);
    setTimeout(() => setModalOpen(false), 2000);
    await addDoc(collection(db, 'intentions'), { irg: newIrg, timestamp: new Date() });
  };

  const handleDecoherenceChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!db) return;
    const newRate = parseFloat(e.target.value);
    setDecoherenceRate(newRate);
    setModalMessage(`Taxa de decoerência ajustada: ${newRate} ✅`);
    setModalOpen(true);
    setTimeout(() => setModalOpen(false), 2000);
    await addDoc(collection(db, 'decoherenceRates'), { rate: newRate, timestamp: new Date() });
  };

  const handleSendMessage = async (message: string) => {
    if(!db) return;
    const newMessage = { user: 'Anonymous', text: message, timestamp: new Date() };
    setChatMessages([...chatMessages, newMessage]);
    await addDoc(collection(db, 'chatMessages'), newMessage);
  };

  const handleVote = async (vote: any) => {
    if(!db) return;
    if (vote.intention.length > 100 || /[^a-zA-Z0-9\s]/.test(vote.intention)) {
      setModalMessage('Intenção inválida ou dissonante 🚫');
      setModalOpen(true);
      return;
    }
    await addDoc(collection(db, 'votes'), { vote, timestamp: new Date() });
    setModalMessage(`Voto registrado: ${vote.intention} ✅`);
    setModalOpen(true);
    setTimeout(() => setModalOpen(false), 2000);
  };

  return (
    <motion.div className="m306-portal" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <motion.h1
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 2 }}
        role="heading"
        aria-level="1"
      >
        M306 - Portal de Sincronicidade {isOnline ? '🟢' : '🔴'}
      </motion.h1>

      <section aria-label="Gráficos de métricas quânticas">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={metrics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="timestamp" />
            <YAxis domain={[0, 1]} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }}
              formatter={(value: any, name: any) => [
                `${typeof value === 'number' ? value.toFixed(3) : value}`,
                name === 'shap_values' ? 'Impacto SHAP' : name,
              ]}
            />
            <Legend />
            <Line type="monotone" dataKey="irg" stroke="#8884d8" name="IRG" />
            <Line type="monotone" dataKey="lux" stroke="#82ca9d" name="LUX" />
            <Line type="monotone" dataKey="decoherence" stroke="#ff7300" name="Decoerência" />
            <Line type="monotone" dataKey="sentience" stroke="#ff0000" name="Senticidade" />
            <Line type="monotone" dataKey="js_div" stroke="#00c4ff" name="Jensen-Shannon" />
            <Line type="monotone" dataKey="p_value" stroke="#ffd700" name="P-Value" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="map-container" aria-label="Mapa interdimensional">
        <HeatmapOverlay resonance={irg} />
        {metrics.map((point: any, index: number) => (
          <MemberPoint key={index} x={Math.random() * 500} y={Math.random() * 300} resonance={point.irg} shap={point.shap_values?.[0] || 0} />
        ))}
        <EntanglementLine points={metrics} />
      </section>

      <section className="controls" aria-label="Controles interativos">
        <motion.label whileHover={{ scale: 1.1 }}>
          Intenção Coletiva (IRG):
          <input
            type="range"
            min="0.5"
            max="1"
            step="0.01"
            value={irg}
            onChange={handleIntentionChange}
            aria-label="Ajustar Intenção Coletiva"
          />
        </motion.label>
        <motion.label whileHover={{ scale: 1.1 }}>
          Taxa de Decoerência:
          <input
            type="range"
            min="0.01"
            max="0.1"
            step="0.01"
            value={decoherenceRate}
            onChange={handleDecoherenceChange}
            aria-label="Ajustar Taxa de Decoerência"
          />
        </motion.label>
      </section>

      <VotingSystem onVote={handleVote} />
      <FractalTimeline metrics={metrics} />
      <CollaborativeChat messages={chatMessages} onSendMessage={handleSendMessage} />
      <AlertSystem alerts={alerts} />

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="modal"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            role="alert"
          >
            <p>{modalMessage}</p>
            <motion.button whileHover={{ scale: 1.1 }} onClick={() => setModalOpen(false)} aria-label="Fechar modal">
              Fechar
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default M306Portal;

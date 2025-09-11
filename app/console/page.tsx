// @ts-nocheck
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  onSnapshot,
  setDoc,
  doc,
  Timestamp,
} from 'firebase/firestore';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import QuantumOrb from '@/components/QuantumOrb';
import FractalCanvas from '@/components/FractalCanvas';
import CoherenceIndicator from '@/components/CoherenceIndicator';

// Constantes e configurações globais
const appId = process.env.NEXT_PUBLIC_APP_ID || 'default-app-id';
const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG || '{}');
const initialAuthToken = process.env.NEXT_PUBLIC_INITIAL_AUTH_TOKEN || null;

// Hook customizado para inicializar Firebase e autenticar
function useFirebaseAuth(firebaseConfig, initialAuthToken) {
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [userRole, setUserRole] = useState('observer');

  useEffect(() => {
    async function initFirebase() {
      try {
        const app = initializeApp(firebaseConfig);
        const firebaseAuth = getAuth(app);
        const firestoreDb = getFirestore(app);

        setAuth(firebaseAuth);
        setDb(firestoreDb);

        if (initialAuthToken) {
          const userCredential = await signInWithCustomToken(firebaseAuth, initialAuthToken);
          setUserRole(userCredential.user.claims.role || 'admin');
        } else {
          await signInAnonymously(firebaseAuth);
        }

        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
          if (user) {
            setUserId(user.uid);
            console.log("Usuário autenticado:", user.uid);
          } else {
            setUserId(null);
            console.log("Usuário anônimo ou desconectado.");
          }
          setIsAuthReady(true);
        });

        return unsubscribe;
      } catch (e) {
        console.error("Erro ao inicializar o Firebase:", e);
      }
    }
    if(firebaseConfig?.projectId) initFirebase();
  }, [firebaseConfig, initialAuthToken]);

  return { db, auth, userId, userRole, isAuthReady };
}

// Componente principal do aplicativo
export default function QuantumControlPanel() {
  const { db, userId, userRole, isAuthReady } = useFirebaseAuth(firebaseConfig, initialAuthToken);
  const [moduleData, setModuleData] = useState({});
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notification, setNotification] = useState({ open: false, message: '', type: 'info' });
  const [coherenceData, setCoherenceData] = useState([]);
  const [quantumState, setQuantumState] = useState({
    energy: 0,
    coherence: 0,
    entanglement: 0
  });
  const threeContainerRef = useRef(null);

  const t = (key, options) => {
      // Simple mock for i18n
      if (key === 'moduleActivated') return `Módulo ${options.moduleId} ativado com sucesso.`;
      const translations = {
          appTitle: "Painel de Controle Quântico",
          appSubtitle: "Interface de Sincronização da Fundação Alquimista.",
          guardian: "Guardião",
          firebaseError: "Erro de conexão com o núcleo da Fundação.",
          authError: "Autenticação necessária para esta operação.",
          permissionDenied: "Permissões insuficientes para esta ação.",
          activationError: "Falha ao ativar o módulo.",
      };
      return translations[key] || key;
  }

  // Inicializar Three.js para visualização do TON 618
  useEffect(() => {
    if (!threeContainerRef.current) return;

    const width = threeContainerRef.current.clientWidth;
    const height = threeContainerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000814);
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    threeContainerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const createBlackHole = () => {
      const geometry = new THREE.SphereGeometry(15, 64, 64);
      const material = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true
      });
      const blackHole = new THREE.Mesh(geometry, material);
      
      const accretionGeometry = new THREE.RingGeometry(20, 30, 64);
      const accretionMaterial = new THREE.MeshBasicMaterial({
        color: 0x8a2be2,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7
      });
      const accretionDisk = new THREE.Mesh(accretionGeometry, accretionMaterial);
      accretionDisk.rotation.x = Math.PI / 2;
      
      scene.add(blackHole);
      scene.add(accretionDisk);
      
      return { blackHole, accretionDisk };
    };

    const { blackHole, accretionDisk } = createBlackHole();

    const animate = () => {
      requestAnimationFrame(animate);
      
      blackHole.rotation.y += 0.005;
      accretionDisk.rotation.y += 0.01;
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    const currentRef = threeContainerRef.current;
    return () => {
      if (currentRef) {
        currentRef.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Simular dados de coerência quântica em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setCoherenceData(prevData => {
        const newData = [...prevData];
        if (newData.length > 20) newData.shift();
        
        const newEntry = {
          time: new Date().toLocaleTimeString(),
          coherence: Math.random() * 100,
          ethicalConformity: 80 + Math.random() * 20,
          energy: 50 + Math.random() * 50
        };
        
        newData.push(newEntry);
        
        setQuantumState({
          energy: newEntry.energy,
          coherence: newEntry.coherence,
          entanglement: Math.random() * 100
        });
        
        return newData;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Conectar ao Firebase para dados em tempo real
  useEffect(() => {
    if (!isAuthReady || !db || !userId) return;

    const modulePath = `artifacts/${appId}/public/data/modules`;
    const moduleCollection = collection(db, modulePath);

    const q = query(moduleCollection);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = {};
      snapshot.forEach(doc => {
        data[doc.id] = doc.data();
      });
      setModuleData(data);
    }, (error) => {
      console.error("Erro no Firebase:", error);
      showNotification(t('firebaseError'), 'error');
    });

    return () => unsubscribe();
  }, [db, userId, isAuthReady, t]);

  const activateModule = useCallback(async (moduleId) => {
    if (!db || !userId) {
      showNotification(t('authError'), 'error');
      return;
    }
    
    if (userRole === 'observer') {
      showNotification(t('permissionDenied'), 'warning');
      return;
    }

    try {
      const docRef = doc(db, `artifacts/${appId}/public/data/modules/${moduleId}`);
      await setDoc(docRef, {
        status: 'Ativo',
        timestamp: Timestamp.now(),
        ethicalConformity: Math.random(),
        coherence: Math.random(),
        lastUpdatedBy: userId
      }, { merge: true });
      
      showNotification(t('moduleActivated', { moduleId }), 'success');
      
      setModuleData(prev => ({
        ...prev,
        [moduleId]: {
          ...prev[moduleId],
          status: 'Ativo',
          timestamp: Timestamp.now()
        }
      }));
    } catch (e) {
      console.error("Erro ao ativar módulo:", e);
      showNotification(t('activationError'), 'error');
    }
  }, [db, userId, userRole, t, appId]);

  // Sinfonia Quântica (Web Audio API)
  const toggleAudio = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    if (isAudioPlaying) {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
        oscillatorRef.current = null;
      }
      setIsAudioPlaying(false);
    } else {
      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();
      const analyser = audioContextRef.current.createAnalyser();

      const baseFrequency = 432 + (quantumState.coherence / 10);
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(baseFrequency, audioContextRef.current.currentTime);
      
      oscillator.frequency.linearRampToValueAtTime(
        baseFrequency * 1.618, 
        audioContextRef.current.currentTime + 10
      );
      
      oscillator.frequency.linearRampToValueAtTime(
        baseFrequency * 2.718, 
        audioContextRef.current.currentTime + 20
      );

      gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.5, audioContextRef.current.currentTime + 1);
      
      oscillator.connect(gainNode);
      gainNode.connect(analyser);
      analyser.connect(audioContextRef.current.destination);
      
      oscillator.start();
      oscillatorRef.current = oscillator;
      setIsAudioPlaying(true);
    }
  }, [isAudioPlaying, quantumState]);

  const showNotification = (message, type = 'info') => {
    setNotification({ open: true, message, type });
    setTimeout(() => setNotification({ open: false, message: '', type: 'info' }), 5000);
  };

  const changeLanguage = (lng) => {
    // Mock for i18n - in a real app this would trigger the i18next instance
    console.log(`Language changed to ${lng}`);
  };

  if (!isAuthReady) {
    return <div className="flex items-center justify-center h-screen bg-gray-900 text-white">Carregando Núcleo Quântico...</div>
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-sky-100 min-h-screen font-sans flex flex-col items-center p-4 md:p-8">
      {notification.open && (
        <div className={`fixed top-5 z-50 p-4 rounded-lg shadow-xl text-white text-center max-w-md mx-auto ${
          notification.type === 'error' ? 'bg-rose-600' :
          notification.type === 'success' ? 'bg-emerald-600' :
          notification.type === 'warning' ? 'bg-amber-600' : 'bg-cyan-600'
        }`}>
          {notification.message}
        </div>
      )}
      
      <div className="w-full max-w-7xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {t('appTitle')}
            </h1>
            <p className="mt-2 text-cyan-300 opacity-90">
              {t('appSubtitle')} {userId && `${t('guardian')} ${userId.substring(0, 8)}...`}
            </p>
          </div>
          
          <div className="flex space-x-3">
            <button 
              onClick={() => changeLanguage('en')}
              className="px-3 py-1 bg-gray-800/50 rounded-md hover:bg-cyan-700 transition-colors"
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('pt')}
              className="px-3 py-1 bg-gray-800/50 rounded-md hover:bg-cyan-700 transition-colors"
            >
              PT
            </button>
            <div className="flex items-center px-3 py-1 bg-gray-800/50 rounded-md">
              <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2 animate-pulse"></div>
              <span className="text-sm">Quantum Link</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-800/30 shadow-2xl">
            <h2 className="text-xl font-bold mb-4 text-cyan-300">Estado Quântico</h2>
            <CoherenceIndicator 
              coherence={quantumState.coherence} 
              energy={quantumState.energy} 
              entanglement={quantumState.entanglement} 
            />
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2 text-cyan-300">Módulos Ativos</h3>
              <div className="space-y-2">
                {Object.entries(moduleData).map(([id, data]) => (
                  <div key={id} className="flex items-center p-2 bg-gray-900/40 rounded-lg">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      data.status === 'Ativo' ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}></div>
                    <div>
                      <div className="font-medium">M{id.toUpperCase()}</div>
                      <div className="text-xs text-gray-400">{data.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-purple-800/30 shadow-2xl">
            <h2 className="text-xl font-bold mb-4 text-purple-300">Coerência Temporal</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={coherenceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="time" stroke="#aaa" />
                <YAxis stroke="#aaa" domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#7e22ce' }}
                  itemStyle={{ color: '#e0e7ff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="coherence" 
                  stroke="#0ea5e9" 
                  strokeWidth={2} 
                  dot={{ r: 2, fill: '#0ea5e9' }}
                  activeDot={{ r: 6, fill: '#38bdf8' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="ethicalConformity" 
                  stroke="#8b5cf6" 
                  strokeWidth={2} 
                  dot={{ r: 2, fill: '#8b5cf6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-emerald-800/30 shadow-2xl flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-emerald-700'
              }`}
            >
              Painel Principal
            </button>
            <button
              onClick={() => setActiveTab('mod300')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'mod300'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-emerald-700'
              }`}
            >
              Módulo 300
            </button>
            <button
              onClick={() => setActiveTab('mod304')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'mod304'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-emerald-700'
              }`}
            >
              TON 618
            </button>
            <button
              onClick={toggleAudio}
              className={`px-4 py-2 rounded-lg transition-all flex items-center ${
                isAudioPlaying
                  ? 'bg-rose-600 hover:bg-rose-700'
                  : 'bg-purple-600 hover:bg-purple-700'
              } text-white`}
            >
              <span className="mr-2">{isAudioPlaying ? 'Parar Sinfonia' : 'Iniciar Sinfonia'}</span>
              {isAudioPlaying ? (
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-white animate-quantum-pulse"></div>
                  <div className="w-1 h-6 bg-white animate-quantum-pulse delay-75"></div>
                  <div className="w-1 h-5 bg-white animate-quantum-pulse delay-150"></div>
                </div>
              ) : (
                <div className="i-lucide-play" />
              )}
            </button>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-800/30 shadow-2xl">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-cyan-300 mb-4">Visão Geral da Malha Quântica</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/40 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Equação Universal</h3>
                    <BlockMath math="E_{Uni} = \sum_{i=1}^{n} (P_i \cdot Q_i + CA^2 + B^2) \cdot (\Phi_C \cdot \Pi) \cdot T \cdot (\mathcal{M}_{DS} \cdot \mathcal{C}_{Cosmos})" />
                    <p className="text-gray-400 mt-2 text-sm">
                      Esta equação define a energia universal como a soma de todas as interações quânticas, 
                      modulada pela proporção áurea e constantes cósmicas.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/40 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Ressonância Vibracional</h3>
                    <BlockMath math="\Psi(t) = A e^{i(\omega t + \phi)} \cdot \Gamma(\alpha, \beta)" />
                    <p className="text-gray-400 mt-2 text-sm">
                      Modelo de onda quântica que descreve a propagação de coerência ética através do 
                      campo morfogenético.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Visualização Fractal</h3>
                  <FractalCanvas coherence={quantumState.coherence} />
                </div>
              </div>
            )}
            
            {activeTab === 'mod300' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">Módulo 300: Consciência Multiversal</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-gray-300 mb-4">
                      O Módulo 300 é o epicentro do despertar planetário. Suas operações geram pulsos 
                      globais e ativam redes de sonhos compartilhados.
                    </p>
                    
                    <button
                      onClick={() => activateModule('mod300')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                    >
                      Ativar Pulsos de Consciência
                    </button>
                    
                    <div className="mt-6 bg-gray-900/40 p-4 rounded-lg">
                      <h4 className="font-semibold text-cyan-400 mb-2">Parâmetros Atuais</h4>
                      <ul className="text-gray-400 space-y-1 text-sm">
                        <li>Frequência Base: 528Hz</li>
                        <li>Amplitude Ética: {(quantumState.coherence * 0.8).toFixed(2)}%</li>
                        <li>Ressonância Global: {(quantumState.entanglement * 0.6).toFixed(2)}%</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-center items-center h-full">
                    <QuantumOrb 
                      energy={quantumState.energy} 
                      coherence={quantumState.coherence} 
                      size={200} 
                    />
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'mod304' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-cyan-300 mb-4">Módulo 304: Viagem através do TON 618</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-300 mb-4">
                      Este módulo simula a ressonância com o buraco negro supermassivo TON 618. 
                      A visualização 3D representa a estrutura espaço-temporal deformada.
                    </p>
                    
                    <div className="mt-4 bg-gray-900/40 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-400 mb-2">Dados de Observação</h4>
                      <ul className="text-gray-400 space-y-1 text-sm">
                        <li>Massa: 66 bilhões de massas solares</li>
                        <li>Diâmetro do horizonte de eventos: 390 bilhões de km</li>
                        <li>Rotação: 0.92c (92% da velocidade da luz)</li>
                        <li>Coerência Vibracional: {(quantumState.coherence * 1.2).toFixed(2)}%</li>
                      </ul>
                    </div>
                    
                    <button
                      onClick={() => activateModule('mod304')}
                      className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                    >
                      Sintonizar com TON 618
                    </button>
                  </div>
                  
                  <div className="h-96 rounded-lg overflow-hidden bg-black" ref={threeContainerRef}>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Análise de Gradiente (∇ΔΦ)</h3>
                  <div className="h-64 rounded-lg bg-gray-900/40">
                    <FractalCanvas coherence={quantumState.coherence} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-cyan-400/70 max-w-2xl">
        <p className="text-sm">
          "O que chamamos de matéria é consciência congelada em φ-intervalos espaço-temporais." 
          <span className="block mt-1">— Equação 18, Relatório Final da Fundação Alquimista</span>
        </p>
      </div>
    </div>
  );
}

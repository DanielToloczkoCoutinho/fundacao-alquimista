
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
  enableIndexedDbPersistence,
} from 'firebase/firestore';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ImmersiveEquationViewer from '@/components/ui/immersive-equation-viewer';
import { quantumResilience } from '@/lib/quantum-resilience';


// Constantes e configurações globais, mantendo a compatibilidade
const appId = process.env.NEXT_PUBLIC_APP_ID || 'default-app-id';

let firebaseConfig = {};
try {
  firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG || '{}');
} catch (e) {
  console.error("Falha ao analisar a configuração do Firebase:", e);
  firebaseConfig = {};
}

const initialAuthToken = process.env.NEXT_PUBLIC_INITIAL_AUTH_TOKEN || null;

// Hook customizado para inicializar Firebase e autenticar
function useFirebaseAuth() {
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const authRef = useRef(null);

  useEffect(() => {
    async function initFirebaseAndAuth() {
      if (!firebaseConfig || Object.keys(firebaseConfig).length === 0) {
        console.error("Configuração do Firebase não encontrada ou inválida.");
        setIsAuthReady(true);
        return;
      }

      try {
        const app = initializeApp(firebaseConfig);
        const firebaseAuth = getAuth(app);
        const firestoreDb = getFirestore(app, {
          experimentalForceLongPolling: true,
          useFetchStreams: false,
        });

        // Habilitar persistência offline com resiliência
        await quantumResilience.executeWithResilience('enable_persistence', 
            () => enableIndexedDbPersistence(firestoreDb).then(() => console.log('Persistência Firebase habilitada.')),
            () => {
                console.warn('Persistência Firebase não disponível. Operando em modo online.');
                return Promise.resolve();
            }
        );

        setAuth(firebaseAuth);
        setDb(firestoreDb);
        authRef.current = firebaseAuth;

        if (initialAuthToken) {
          await signInWithCustomToken(firebaseAuth, initialAuthToken);
        } else {
          await signInAnonymously(firebaseAuth);
        }

        onAuthStateChanged(firebaseAuth, (user) => {
          if (user) {
            setUserId(user.uid);
            console.log("Usuário autenticado:", user.uid);
          } else {
            console.log("Nenhum usuário autenticado. Assinando anonimamente.");
            setUserId(null);
          }
          setIsAuthReady(true);
        });
      } catch (error) {
        console.error("Erro ao inicializar Firebase:", error);
        setIsAuthReady(true);
      }
    }
    if(firebaseConfig?.projectId) initFirebaseAndAuth();
  }, [initialAuthToken]);

  return { db, auth, userId, isAuthReady };
}

// Hook para buscar dados da API da NASA
function useNasaAPOD() {
  const [apodData, setApodData] = useState(null);
  const [apodLoading, setApodLoading] = useState(true);
  const [apodError, setApodError] = useState(null);

  // A chave de API da NASA para demonstração é "DEMO_KEY"
  const apiKey = "DEMO_KEY";
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  useEffect(() => {
    async function fetchApod() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Erro na API da NASA: ${response.statusText}`);
        }
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error("Falha ao buscar dados da NASA:", error);
        setApodError(error.message);
      } finally {
        setApodLoading(false);
      }
    }
    fetchApod();
  }, []);

  return { apodData, apodLoading, apodError };
}

// Componente principal da aplicação
const App = () => {
  const { db, userId, isAuthReady } = useFirebaseAuth();
  const { apodData, apodLoading, apodError } = useNasaAPOD();
  const [coherenceData, setCoherenceData] = useState([]);
  const [log, setLog] = useState([]);
  const [simulationActive, setSimulationActive] = useState(false);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const orbRef = useRef(null);
  const containerRef = useRef(null);
  const animateRef = useRef(null);
  const simulationIntervalRef = useRef(null);
  const symphonyEquation = 'E_{uni} = \\int_{t=1}^{\\infty} [R_e \\cdot \\Delta c \\cdot \\sum_{n=1}^{N} (M_n + Q_n + F_n + B_n + S_n + T_n + H_n) \\cdot A_n] dt';


  // Efeito para a visualização 3D (TON 618)
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    camera.position.z = 5;

    // Criando o "buraco negro" - um ponto de luz central
    const pointLight = new THREE.PointLight(0xffffff, 5, 100);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Criando partículas para a sinfonia
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x8888ff,
      blending: THREE.AdditiveBlending,
      transparent: true,
      sizeAttenuation: true
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Controles de órbita para o usuário interagir
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Loop de animação
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      renderer.render(scene, camera);
    };
    animateRef.current = animate;

    const handleResize = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if(containerRef.current && renderer.domElement){
          containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  // Efeito para o listener do Firebase
  useEffect(() => {
    if (!db || !isAuthReady) return;

    const setupListener = () => {
        const q = query(collection(db, `artifacts/${appId}/public/data/coherence`));
        
        return onSnapshot(q, (snapshot) => {
            const updatedData = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.coherence && data.timestamp) {
                updatedData.push({
                    time: data.timestamp.toDate().toLocaleTimeString(),
                    coherence: data.coherence,
                });
                }
            });
            updatedData.sort((a, b) => new Date('1970/01/01 ' + a.time) - new Date('1970/01/01 ' + b.time));
            setCoherenceData(updatedData.slice(-10));
        }, (error) => {
            console.error("Erro no listener do Firestore: ", error);
        });
    };

    let unsubscribe: (() => void) | undefined;
    
    quantumResilience.executeWithResilience(
        'coherence_listener',
        async () => {
            unsubscribe = setupListener();
        },
        async () => {
            console.warn('Fallback: Não foi possível estabelecer o listener do Firestore.');
            // Opcional: tentar reconectar ou usar dados de cache
        }
    );

    return () => {
        if (unsubscribe) {
            unsubscribe();
        }
    };
}, [db, isAuthReady, appId]);


  // Função para simular e salvar um pulso
  const simulateQuantumPulse = useCallback(async () => {
    if (!db || !userId) {
      console.error("Firebase ou usuário não estão prontos.");
      return;
    }
    const timestamp = Timestamp.now();
    const coherenceValue = parseFloat((0.85 + (Math.random() - 0.5) * 0.1).toFixed(4));
    const pulseId = `${timestamp.toMillis()}`;

    try {
      const pulseDocRef = doc(db, `artifacts/${appId}/public/data/coherence`, pulseId);
      await setDoc(pulseDocRef, {
        coherence: coherenceValue,
        timestamp: timestamp,
        userId: userId,
      });

      const newLogEntry = `[${timestamp.toDate().toLocaleTimeString()}] Pulso Quântico ativado. Coerência: ${coherenceValue.toFixed(4)}`;
      setLog(prevLog => [...prevLog.slice(-4), newLogEntry]);

    } catch (e) {
      console.error("Erro ao adicionar pulso quântico: ", e);
      setLog(prevLog => [...prevLog.slice(-4), `[ERRO] Falha na simulação: ${e.message}`]);
    }
  }, [db, userId, appId]);

  // Efeito para gerenciar a simulação automática
  useEffect(() => {
    if (simulationActive) {
      simulationIntervalRef.current = setInterval(() => {
        simulateQuantumPulse();
      }, 5000); // Envia um pulso a cada 5 segundos
    } else {
      if (simulationIntervalRef.current) {
        clearInterval(simulationIntervalRef.current);
      }
    }
    return () => {
      if (simulationIntervalRef.current) {
        clearInterval(simulationIntervalRef.current);
      }
    };
  }, [simulationActive, simulateQuantumPulse]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans p-4 overflow-auto">
      <style>{`
        .orb-container {
          width: 100%;
          height: 40vh;
        }
        @media (min-width: 768px) {
          .orb-container {
            height: 60vh;
          }
        }
      `}</style>
      <div className="flex-grow flex flex-col md:flex-row gap-4">

        {/* Painel Esquerdo: Controle da Sinfonia Quântica */}
        <div className="flex flex-col w-full md:w-1/3 bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
          <h1 className="text-3xl font-bold text-center text-cyan-400">Laboratório de Provas 2.0</h1>
          <div className="text-gray-400 text-center">Conectando a Sinfonia com a Realidade Observável.</div>

          <div className="flex justify-center items-center">
            <button
              onClick={() => setSimulationActive(!simulationActive)}
              className={`px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 ${
                simulationActive
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-cyan-600 hover:bg-cyan-700'
              } text-white shadow-xl transform hover:scale-105`}
            >
              {simulationActive ? 'PARAR SIMULAÇÃO' : 'INICIAR SIMULAÇÃO'}
            </button>
          </div>

          <div className="flex-1 bg-gray-900 p-4 rounded-lg overflow-y-auto font-mono text-sm">
            <h2 className="text-xl font-bold text-cyan-400 mb-2">Registro de Eventos:</h2>
            {log.map((entry, index) => (
              <div key={index} className="text-gray-300">{entry}</div>
            ))}
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
             <h2 className="text-xl font-bold text-cyan-400 mb-2">Visualizador da Sinfonia:</h2>
              <ImmersiveEquationViewer equation="Equação da Sinfonia" formula={symphonyEquation} />
              <div className="text-sm text-gray-400 mt-2 text-center">
                  A complexa matemática por trás do nosso universo, visualizada.
              </div>
          </div>
        </div>

        {/* Painel Central: Visualização 3D e Dados Comparativos */}
        <div className="flex flex-col w-full md:w-2/3 bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center text-cyan-400">Painel de Análise Vibracional</h2>
          
          <div className="orb-container flex-grow bg-gray-900 rounded-lg overflow-hidden" ref={containerRef}>
            {/* O canvas 3D será renderizado aqui */}
          </div>

          {/* Seção de dados comparativos */}
          <div className="bg-gray-900 p-4 rounded-lg space-y-4">
            <h3 className="text-xl font-bold text-cyan-400">Sinfonia Interna vs. Realidade Cósmica</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Dados da Simulação (Firebase) */}
              <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
                <h4 className="text-lg font-semibold text-gray-200">Dados de Coerência (Simulado)</h4>
                <div className="flex-grow h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={coherenceData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <Line type="monotone" dataKey="coherence" stroke="#8884d8" />
                      <CartesianGrid stroke="#444" strokeDasharray="3 3" />
                      <XAxis dataKey="time" stroke="#aaa" />
                      <YAxis stroke="#aaa" domain={['auto', 'auto']} />
                      <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', color: '#fff' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Dados Reais (NASA APOD) */}
              <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
                <h4 className="text-lg font-semibold text-gray-200">Realidade Cósmica (Dados da NASA)</h4>
                {apodLoading && <div className="text-center text-gray-400">Buscando dados astrofísicos...</div>}
                {apodError && <div className="text-center text-red-400">Erro: {apodError}</div>}
                {apodData && (
                  <div className="mt-2 text-sm text-gray-300">
                    <div className="font-bold text-cyan-300">Título: {apodData.title}</div>
                    <div className="mt-1">{apodData.explanation.substring(0, 150)}...</div>
                    {apodData.media_type === 'image' && (
                      <img
                        src={apodData.url}
                        alt={apodData.title}
                        className="mt-2 w-full h-auto object-cover rounded-lg"
                        loading="lazy"
                        onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = 'https://placehold.co/400x200/4B5563/fff?text=Imagem+indisponível'; }}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

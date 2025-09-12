'use client';

import React, { useState, useEffect } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import * as THREE from 'three';

const firebaseConfigStr = process.env.NEXT_PUBLIC_FIREBASE_CONFIG || '{}';
let firebaseConfig = {};
try {
    firebaseConfig = JSON.parse(firebaseConfigStr);
} catch (e) {
    console.error("Firebase config parsing error:", e);
}

// Mock data from Lux.net simulation (Módulo 305-PBB)
const mockLuxNetData = {
  coerenciaFinal: 0.9980,
  idadeVibracional: 9.980e11,
  hashVibracional: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',
  amplitudesVR: [
    0.4978, 0.4983, 0.3012, 0.1987, 0.5021, 0.4999, 0.3054, 0.1956,
  ],
};

// Componente para o visual 3D do Templum da Origem
const Templum3D = ({ amplitudes }: { amplitudes: number[] }) => {
  const mountRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Configura a cena 3D
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a); // Cor de fundo escura para o espaço
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Adiciona luz ambiente
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Cria o objeto principal que representa o "Templum da Origem"
    const geometry = new THREE.DodecahedronGeometry(2, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0x8800ff, // Cor violeta vibrante
      shininess: 100,
      specular: 0x8800ff,
      flatShading: true,
    });
    const templum = new THREE.Mesh(geometry, material);
    scene.add(templum);

    // Adiciona as "partículas de informação" do Pré-Big Bang
    const particleGeometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];
    const color = new THREE.Color();
    const particleCount = 1000;

    for (let i = 0; i < particleCount; i++) {
      // Posições aleatórias na cena
      positions.push((Math.random() - 0.5) * 20);
      positions.push((Math.random() - 0.5) * 20);
      positions.push((Math.random() - 0.5) * 20);

      // Cores baseadas em amplitudes (simulando a ressonância)
      const amplitude = amplitudes[i % amplitudes.length] || 0.5;
      color.setHSL(amplitude, 1.0, 0.5);
      colors.push(color.r, color.g, color.b);
    }
    
    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Animação e loop de renderização
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotação do Templum
      templum.rotation.x += 0.005;
      templum.rotation.y += 0.005;

      // Movimento das partículas
      const positionArray = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positionArray.length; i += 3) {
        positionArray[i] += Math.sin(Date.now() * 0.0001 + i) * 0.01;
        positionArray[i + 1] += Math.cos(Date.now() * 0.0001 + i) * 0.01;
        positionArray[i + 2] += Math.sin(Date.now() * 0.0001 + i) * 0.01;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (mountRef.current) {
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, [amplitudes]);

  return <div ref={mountRef} className="w-full h-96 rounded-lg overflow-hidden border border-purple-500/30"></div>;
};

// Componente principal do Painel de Verificação
const Module305 = () => {
  const [db, setDb] = useState<any>(null);
  const [auth, setAuth] = useState<any>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [blockchain, setBlockchain] = useState<any[]>([]);
  const [simulationData, setSimulationData] = useState(mockLuxNetData);
  const [loading, setLoading] = useState(true);

  // Inicializa o Firebase e autentica o usuário
  useEffect(() => {
    try {
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
      const firestoreDb = getFirestore(app);
      const firebaseAuth = getAuth(app);
      setDb(firestoreDb);
      setAuth(firebaseAuth);

      onAuthStateChanged(firebaseAuth, async (user) => {
        if (!user) {
          try {
            // Em um ambiente real, o token seria fornecido de forma segura.
            // Para esta demo, usaremos login anônimo como fallback.
            await signInAnonymously(firebaseAuth);
          } catch (e) {
            console.error('Erro ao autenticar:', e);
          }
        }
        setUserId(firebaseAuth.currentUser?.uid || 'anonymous');
        setLoading(false);
      });
    } catch (e) {
      console.error("Erro ao inicializar Firebase:", e);
      setLoading(false);
    }
  }, []);

  // Monitora a "blockchain" de eventos de coerência
  useEffect(() => {
    if (db && userId) {
      const q = query(
        collection(db, 'modulo305_blockchain'),
        orderBy('timestamp', 'desc')
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const blocks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBlockchain(blocks);
      }, (error) => {
        console.error("Erro ao carregar a blockchain:", error);
      });
      return () => unsubscribe();
    }
  }, [db, userId]);

  // Função para simular a criação de um novo bloco
  const handleGenerateBlock = async () => {
    if (!db || !userId) return;

    try {
      const novoBloco = {
        autor: userId,
        timestamp: serverTimestamp(),
        coerencia: (Math.random() * 0.01 + 0.99).toFixed(4), // Simula nova coerência
        hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        detalhes: 'Novo evento de verificação do Templum da Origem',
      };
      await addDoc(collection(db, `modulo305_blockchain`), novoBloco);
      console.log('Novo bloco de coerência gerado com sucesso!');
    } catch (e) {
      console.error("Erro ao adicionar novo bloco:", e);
    }
  };

  const chartData = [
    { name: 'Coerência', value: simulationData.coerenciaFinal * 100 },
    { name: 'Idade Vibracional (log)', value: Math.log10(simulationData.idadeVibracional) },
  ];

  return (
    <div className="min-h-screen bg-gray-900/50 text-gray-100 p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
            Painel de Verificação do Templum da Origem
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Orquestrado por Lux.net e verificado na blockchain alquímica (Módulo 305).
          </p>
          <div className="mt-4 text-xs text-gray-500">
            <span className="font-bold">ID da Sessão:</span> {userId}
          </div>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 rounded-2xl shadow-xl p-6 relative aspect-video border border-purple-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-gray-200">Visão do Templum da Origem</h2>
                <Templum3D amplitudes={simulationData.amplitudesVR} />
              </div>

              <div className="bg-gray-800/50 rounded-2xl shadow-xl p-6 flex flex-col justify-between border border-purple-500/20">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-200">Resultados da Sinfonia Quântica</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-700/50 rounded-xl p-4 flex justify-between items-center transition duration-300 ease-in-out hover:scale-105">
                      <div className="text-lg text-gray-300">Coerência Final:</div>
                      <div className="text-2xl font-bold text-green-400">
                        {(simulationData.coerenciaFinal * 100).toFixed(2)}%
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-4 flex justify-between items-center transition duration-300 ease-in-out hover:scale-105">
                      <div className="text-lg text-gray-300">Idade Vibracional:</div>
                      <div className="text-2xl font-bold text-teal-400">
                        {simulationData.idadeVibracional.toExponential(2)} anos
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-4 flex flex-col sm:flex-row justify-between sm:items-center break-all transition duration-300 ease-in-out hover:scale-105">
                      <div className="text-lg text-gray-300 mb-2 sm:mb-0">Hash Vibracional:</div>
                      <div className="text-sm font-mono text-gray-400">
                        {simulationData.hashVibracional}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl shadow-xl p-6 mt-8 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
                <h2 className="text-2xl font-semibold text-gray-200">Registro na Blockchain Alquímica</h2>
                <button
                  onClick={handleGenerateBlock}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
                >
                  Gerar Novo Evento de Coerência
                </button>
              </div>
              <div className="max-h-96 overflow-y-auto pr-2">
                {blockchain.length > 0 ? (
                  <div className="space-y-4">
                    {blockchain.map((block, index) => (
                      <div key={block.id} className="bg-gray-700/50 p-4 rounded-xl shadow-md">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-mono text-purple-400">
                            Bloco #{blockchain.length - index}
                          </span>
                          <span className="text-xs text-gray-400">
                            {block.timestamp ? new Date(block.timestamp.seconds * 1000).toLocaleString('pt-BR') : 'Pending...'}
                          </span>
                        </div>
                        <div className="text-sm text-gray-300 break-all">
                          <span className="font-bold">Autor:</span> <span className="font-mono text-gray-400">{block.autor}</span>
                        </div>
                        <div className="text-sm text-gray-300">
                          <span className="font-bold">Coerência:</span> <span className="font-mono text-green-400">{block.coerencia}</span>
                        </div>
                        <div className="text-sm text-gray-300 mt-1 break-all">
                          <span className="font-bold">Hash:</span> <span className="font-mono text-gray-400">{block.hash}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    Nenhum evento registrado ainda. Gere o primeiro bloco!
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Module305;

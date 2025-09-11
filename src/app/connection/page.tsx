
'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { getFirestore, collection, onSnapshot, DocumentData } from 'firebase/firestore';
import { initializeApp, getApps, getApp } from 'firebase/app';

// --- Firebase Config ---
// Nota: Em uma aplicação real, mova isso para variáveis de ambiente.
const firebaseConfig = {
    "projectId": "studio-4265982502-21871",
    "appId": "1:174545373080:web:2fb8c5af49a2bae8054ded",
    "storageBucket": "studio-4265982502-21871.firebasestorage.app",
    "apiKey": "AIzaSyCkkmmK5d8XPvGPUo0jBlSqGNAnE7BuEZg",
    "authDomain": "studio-4265982502-21871.firebaseapp.com",
    "measurementId": "",
    "messagingSenderId": "174545373080"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Helper function for vibrational colors
function getColor(energia: number) {
    const r = Math.min(1, energia * 2); // Red for high energy
    const g = Math.min(1, (1 - energia) * 2); // Green for low energy
    return new THREE.Color(r, g, 0); // Gradient mixture
}

interface NodoData {
    id: string;
    energia: number;
    sincronia: number;
    vibracao: number;
}

interface ArestaData {
    from: string;
    to: string;
    peso: number;
}

const ConnectionPage = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [nodosData, setNodosData] = useState<NodoData[]>([]);
  const [arestasData, setArestasData] = useState<ArestaData[]>([]);
  const [status, setStatus] = useState({ vibracao: 0, energia: 0, sincronia: 0 });

  // Listener do Firestore para dados em tempo real
  useEffect(() => {
    const q = collection(db, 'symphony-data');
    const unsubscribe = onSnapshot(q, (snapshot) => {
        const nodos: NodoData[] = [];
        let totalVibracao = 0;
        let totalEnergia = 0;
        let totalSincronia = 0;

        snapshot.docs.forEach(doc => {
            const data = doc.data() as DocumentData;
            const nodo: NodoData = {
                id: doc.id,
                energia: data.energy || 0,
                sincronia: data.coherence || 0,
                vibracao: data.vibration || 0,
            };
            nodos.push(nodo);
            totalVibracao += nodo.vibracao;
            totalEnergia += nodo.energia;
            totalSincronia += nodo.sincronia;
        });

        setNodosData(nodos);
        
        // Simular arestas baseadas nos nodos existentes
        const arestas: ArestaData[] = [];
        if (nodos.length > 1) {
            for (let i = 0; i < nodos.length; i++) {
                for (let j = i + 1; j < nodos.length; j++) {
                     arestas.push({ from: nodos[i].id, to: nodos[j].id, peso: (nodos[i].energia + nodos[j].energia) / 2 });
                }
            }
        }
        setArestasData(arestas);
        
        if(nodos.length > 0) {
            setStatus({
                vibracao: totalVibracao / nodos.length,
                energia: totalEnergia / nodos.length,
                sincronia: totalSincronia / nodos.length
            });
        }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!mountRef.current || typeof window === 'undefined') return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070710);
    
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    
    const ambientLight = new THREE.AmbientLight(0x404040, 3);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const nodosGroup = new THREE.Group();
    const arestasGroup = new THREE.Group();
    scene.add(nodosGroup);
    scene.add(arestasGroup);

    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 5000;
    const posArray = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 200;
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.05,
        transparent: true
    });
    const starfield = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starfield);

    const atualizarGrafo = () => {
        while(nodosGroup.children.length > 0){ 
            nodosGroup.remove(nodosGroup.children[0]); 
        }
        while(arestasGroup.children.length > 0){
            arestasGroup.remove(arestasGroup.children[0]);
        }
        
        const nodoPositions: { [key: string]: THREE.Vector3 } = {};

        nodosData.forEach((nodo, index) => {
            const geometry = new THREE.SphereGeometry(0.2, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: getColor(nodo.energia) });
            const sphere = new THREE.Mesh(geometry, material);
            
            const angle = (index / nodosData.length) * Math.PI * 2;
            const radius = 4;
            const position = new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
            sphere.position.copy(position);
            sphere.userData = { id: nodo.id, sincronia: nodo.sincronia };
            nodosGroup.add(sphere);
            nodoPositions[nodo.id] = position;
        });

        arestasData.forEach(aresta => {
            const startPos = nodoPositions[aresta.from];
            const endPos = nodoPositions[aresta.to];
            if (startPos && endPos) {
                const geometry = new THREE.BufferGeometry().setFromPoints([startPos, endPos]);
                const material = new THREE.LineBasicMaterial({ color: 0x00ff00, opacity: aresta.peso, transparent: true });
                const line = new THREE.Line(geometry, material);
                line.userData = { peso: aresta.peso };
                arestasGroup.add(line);
            }
        });
    };
    
    atualizarGrafo();

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      starfield.rotation.y += 0.0001;
      nodosGroup.rotation.y += 0.0005;
      
      nodosGroup.children.forEach(n => {
          const { sincronia } = (n as THREE.Mesh).userData;
          (n as THREE.Mesh).scale.setScalar(1 + Math.sin(Date.now() * 0.002 + n.position.x) * 0.1 * (sincronia || 0.5));
      });
      
      arestasGroup.children.forEach(a => {
          const { peso } = (a as THREE.Line).userData;
          ((a as THREE.Line).material as THREE.LineBasicMaterial).opacity = peso * (0.5 + Math.sin(Date.now() * 0.001) * 0.5);
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };
    window.addEventListener('resize', handleResize);
    
    const currentMount = mountRef.current;

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, [nodosData, arestasData]);

  return (
    <div className="w-screen h-screen relative bg-gray-900">
      <div ref={mountRef} id="canvas-container" className="absolute top-0 left-0 w-full h-full" />
      <div className="overlay pointer-events-none">
        <div id="info" className="status-panel absolute top-5 left-5 bg-black/70 border border-yellow-500/50 rounded-xl p-4 backdrop-blur-md max-w-xs text-sm text-white font-mono whitespace-pre-wrap">
          Vibração: {status.vibracao.toFixed(2)}<br/>
          Energia: {status.energia.toFixed(2)}<br/>
          Sincronia: {status.sincronia.toFixed(2)}
        </div>
        <div className="info-text absolute top-5 right-5 text-right text-yellow-400 text-sm">
          VISUALIZAÇÃO DA REDE NEURAL QUÂNTICA<br/>
          FUNDAÇÃO ALQUIMISTA
        </div>
      </div>
    </div>
  );
};

export default ConnectionPage;

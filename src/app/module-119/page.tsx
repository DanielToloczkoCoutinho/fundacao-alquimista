'use client';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { SphereGeometry, MeshStandardMaterial, Mesh, PointLight, IcosahedronGeometry, LineBasicMaterial, LineSegments, EdgesGeometry, BufferGeometry, Float32BufferAttribute, ShaderMaterial, AdditiveBlending, TorusGeometry } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Zap, Shield, Layers } from 'lucide-react';

const TemplumCosmicaPage = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [message, setMessage] = useState('Templum aguardando ativação.');
  const [isLoading, setIsLoading] = useState(false);
  const [coherenceLevel, setCoherenceLevel] = useState(0.95);
  const [inputValues, setInputValues] = useState({
    amplitude: 888,
    frequency: 13,
    phase: 0
  });

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const crystalCoreRef = useRef<THREE.Mesh | null>(null);
  const mandalaRef = useRef<THREE.Mesh | null>(null);
  const shieldRef = useRef<THREE.Mesh | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const particleSystemRef = useRef<THREE.Points | null>(null);
  const animationRef = useRef<number | null>(null);

  const initThreeScene = useCallback(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    rendererRef.current = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    rendererRef.current.setSize(currentMount.clientWidth, currentMount.clientHeight);
    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(rendererRef.current.domElement);

    sceneRef.current.background = new THREE.Color(0x050510);
    sceneRef.current.fog = new THREE.Fog(0x050510, 5, 25);

    cameraRef.current.position.set(0, 0, 10);
    cameraRef.current.lookAt(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0x404040, 2.5);
    sceneRef.current.add(ambientLight);
    const pointLight1 = new PointLight(0x4a154b, 50, 50);
    pointLight1.position.set(5, 8, 5);
    sceneRef.current.add(pointLight1);
    const pointLight2 = new PointLight(0x154b4a, 50, 50);
    pointLight2.position.set(-5, -8, -5);
    sceneRef.current.add(pointLight2);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, 0);
    sceneRef.current.add(directionalLight);

    controlsRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
    controlsRef.current.enableDamping = true;
    controlsRef.current.dampingFactor = 0.05;
    controlsRef.current.minDistance = 3;
    controlsRef.current.maxDistance = 20;

    const crystalGeometry = new IcosahedronGeometry(1.5, 3);
    const crystalMaterial = new MeshStandardMaterial({
      color: 0x52c6ff,
      emissive: 0x0a1622,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.8
    });
    const crystalCore = new Mesh(crystalGeometry, crystalMaterial);
    crystalCore.name = "CrystalCore";
    sceneRef.current.add(crystalCore);
    crystalCoreRef.current = crystalCore;

    const edgesGeometry = new EdgesGeometry(crystalGeometry);
    const edgesMaterial = new LineBasicMaterial({ color: 0x00ffff, linewidth: 2 });
    const crystalEdges = new LineSegments(edgesGeometry, edgesMaterial);
    crystalCore.add(crystalEdges);

    createQuantumParticles();

    const shieldGeometry = new IcosahedronGeometry(2.2, 2);
    const shieldMaterial = new MeshStandardMaterial({
      color: 0x00ff00,
      emissive: 0x004400,
      transparent: true,
      opacity: 0,
      wireframe: true
    });
    const shield = new Mesh(shieldGeometry, shieldMaterial);
    shield.name = "QuantumShield";
    sceneRef.current.add(shield);
    shieldRef.current = shield;

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      if (crystalCoreRef.current) {
        crystalCoreRef.current.rotation.x += 0.003;
        crystalCoreRef.current.rotation.y += 0.004;
        const pulse = 1 + 0.05 * Math.sin(time * 2);
        crystalCoreRef.current.scale.set(pulse, pulse, pulse);
      }
      if (shieldRef.current) {
        shieldRef.current.rotation.y += 0.002;
      }
      if (particleSystemRef.current && particleSystemRef.current.userData.originalPositions) {
        const positions = particleSystemRef.current.geometry.attributes.position.array;
        const originalPositions = particleSystemRef.current.userData.originalPositions;
        for (let i = 0; i < positions.length / 3; i++) {
          const i3 = i * 3;
          const offset = Math.sin(time * 0.5 + i * 0.1) * 0.3;
          positions[i3] = originalPositions[i3] + offset;
        }
        particleSystemRef.current.geometry.attributes.position.needsUpdate = true;
      }

      controlsRef.current?.update();
      rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
    };
    animate();

    const onWindowResize = () => {
      if(currentMount && cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = currentMount.clientWidth / currentMount.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (currentMount && rendererRef.current) {
        currentMount.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);
  
  const createQuantumParticles = () => {
    if(!sceneRef.current) return;
    const particleCount = 1000;
    const particles = new BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((2 * Math.random()) - 1);
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      originalPositions[i3] = positions[i3];
      originalPositions[i3 + 1] = positions[i3 + 1];
      originalPositions[i3 + 2] = positions[i3 + 2];
    }
    particles.setAttribute('position', new Float32BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xADD8E6,
        blending: AdditiveBlending,
        transparent: true,
        depthWrite: false
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    particleSystem.userData.originalPositions = originalPositions;
    sceneRef.current.add(particleSystem);
    particleSystemRef.current = particleSystem;
  };

  useEffect(() => {
    const cleanup = initThreeScene();
    return cleanup;
  }, [initThreeScene]);

  const activateEQ001 = () => {
    setMessage('Ativando a EQ001: Energia Universal Integrada no Campo Quântico...');
    setIsLoading(true);

    if (crystalCoreRef.current) {
      (crystalCoreRef.current.material as MeshStandardMaterial).emissive.setHex(0x00ffff);
      (crystalCoreRef.current.material as MeshStandardMaterial).emissiveIntensity = 2;
    }

    if (mandalaRef.current) sceneRef.current?.remove(mandalaRef.current);
    const ringGeometry = new TorusGeometry(3, 0.1, 16, 100);
    const ringMaterial = new MeshStandardMaterial({ color: 0xffff00, emissive: 0xffff00, emissiveIntensity: 5 });
    mandalaRef.current = new Mesh(ringGeometry, ringMaterial);
    mandalaRef.current.rotation.x = Math.PI / 2;
    sceneRef.current?.add(mandalaRef.current);

    setTimeout(() => {
      setMessage('EQ001 ativada com sucesso. O Altar de Recodificação está em pleno funcionamento.');
      setIsLoading(false);
      if (crystalCoreRef.current) {
        (crystalCoreRef.current.material as MeshStandardMaterial).emissive.setHex(0x0a1622);
      }
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues(prev => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="w-full h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
        <header className="p-4 text-center">
            <h1 className="text-3xl font-bold gradient-text">Módulo 119: Templum Cosmica Anatheronis</h1>
            <p className="text-muted-foreground">Recodificação Dimensional da Realidade</p>
        </header>
      <div className="flex flex-col md:flex-row flex-1 min-h-0">
        <aside className="w-full md:w-1/3 lg:w-1/4 p-4 md:p-8 bg-card/50 border-r border-border/20 overflow-y-auto">
          <div className="flex flex-col h-full">
            <nav className="mb-6">
              <ul className="space-y-2">
                <li><Button variant={activeTab === 'dashboard' ? 'default' : 'ghost'} onClick={() => setActiveTab('dashboard')} className="w-full justify-start">Dashboard</Button></li>
                <li><Button variant={activeTab === 'equations' ? 'default' : 'ghost'} onClick={() => setActiveTab('equations')} className="w-full justify-start">Equações-Vivas</Button></li>
              </ul>
            </nav>
            {activeTab === 'dashboard' && (
              <div className="flex-1 space-y-6">
                <Card className="bg-card/50"><CardHeader><CardTitle>Estado do Altar</CardTitle></CardHeader><CardContent><p className={`text-sm ${isLoading ? 'text-yellow-400' : 'text-green-400'}`}>{isLoading ? 'Sintonizando...' : 'Em plena operação'}</p></CardContent></Card>
                <Card className="bg-card/50"><CardHeader><CardTitle>Crystal Core</CardTitle></CardHeader><CardContent><Button onClick={activateEQ001} disabled={isLoading} className="w-full"><Zap className="mr-2 h-4 w-4" /> Ativar EQ001</Button></CardContent></Card>
                {message && <Card className="bg-card/50"><CardContent className="pt-6"><p className="text-sm text-center text-muted-foreground">{message}</p></CardContent></Card>}
              </div>
            )}
            {activeTab === 'equations' && (
              <div className="flex-1"><Card className="bg-card/50"><CardHeader><CardTitle>Simulação de Equação</CardTitle></CardHeader><CardContent className="space-y-4">
                <div><Label>Amplitude (A₀): {inputValues.amplitude}</Label><Input type="range" name="amplitude" min="0" max="1000" value={inputValues.amplitude} onChange={handleInputChange} /></div>
                <div><Label>Frequência (ω): {inputValues.frequency}</Label><Input type="range" name="frequency" min="0" max="100" step="0.1" value={inputValues.frequency} onChange={handleInputChange} /></div>
                <div><Label>Fase (φ): {inputValues.phase.toFixed(2)}</Label><Input type="range" name="phase" min="0" max="6.28" step="0.01" value={inputValues.phase} onChange={handleInputChange} /></div>
                <Button onClick={() => setMessage(`Simulando EQ: A0=${inputValues.amplitude}, ω=${inputValues.frequency}, φ=${inputValues.phase.toFixed(2)}`)} className="w-full">Simular EQ</Button>
              </CardContent></Card></div>
            )}
          </div>
        </aside>
        <div ref={mountRef} className="flex-1 w-full h-full min-h-[300px] md:min-h-0" />
      </div>
    </div>
  );
};
export default TemplumCosmicaPage;

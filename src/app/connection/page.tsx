
'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Helper function for vibrational colors
function getColor(energia: number) {
    const r = Math.min(1, energia * 2); // Red for high energy
    const g = Math.min(1, (1 - energia) * 2); // Green for low energy
    return new THREE.Color(r, g, 0); // Gradient mixture
}

const ConnectionPage = () => {
  const mountRef = useRef<HTMLDivElement>(null);

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

    const atualizarGrafo = (nodosData: any[], arestasData: any[]) => {
        while(nodosGroup.children.length > 0){ 
            const object = nodosGroup.children[0];
            (object as THREE.Mesh).geometry.dispose();
            ((object as THREE.Mesh).material as THREE.Material).dispose();
            nodosGroup.remove(object); 
        }
        while(arestasGroup.children.length > 0){
            const object = arestasGroup.children[0];
            (object as THREE.Line).geometry.dispose();
            ((object as THREE.Line).material as THREE.Material).dispose();
            arestasGroup.remove(object);
        }
        
        const nodoPositions: { [key: string]: THREE.Vector3 } = {};

        nodosData.forEach(nodo => {
            const geometry = new THREE.SphereGeometry(0.2, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: getColor(nodo.energia) });
            const sphere = new THREE.Mesh(geometry, material);
            const position = new THREE.Vector3(Math.random() * 8 - 4, Math.random() * 8 - 4, Math.random() * 8 - 4);
            sphere.position.copy(position);
            sphere.userData = { id: nodo.id };
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
                arestasGroup.add(line);
            }
        });
    };

    const placeholderNodos = [
        { id: 'M0', energia: 0.9 },
        { id: 'M1', energia: 0.5 },
        { id: 'M9', energia: 0.7 },
        { id: 'M303', energia: 0.8 },
        { id: 'MΩ', energia: 1.0 },
    ];
    const placeholderArestas = [
        { from: 'M0', to: 'MΩ', peso: 0.8 },
        { from: 'M1', to: 'M9', peso: 0.7 },
        { from: 'M9', to: 'M303', peso: 0.9 },
        { from: 'M303', to: 'MΩ', peso: 0.6 },
    ];
    atualizarGrafo(placeholderNodos, placeholderArestas);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      starfield.rotation.y += 0.0001;
      nodosGroup.rotation.y += 0.0005;
      
      nodosGroup.children.forEach(n => {
          (n as THREE.Mesh).scale.setScalar(1 + Math.sin(Date.now() * 0.002 + n.position.x) * 0.05);
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
      nodosGroup.children.forEach(n => ((n as THREE.Mesh).geometry as any)?.dispose());
      nodosGroup.children.forEach(n => ((n as THREE.Mesh).material as any)?.dispose());
      arestasGroup.children.forEach(a => ((a as THREE.Line).geometry as any)?.dispose());
      arestasGroup.children.forEach(a => ((a as THREE.Line).material as any)?.dispose());
    };
  }, []);

  return (
    <div className="w-screen h-screen relative bg-gray-900">
      <div ref={mountRef} id="canvas-container" className="absolute top-0 left-0 w-full h-full" />
      <div className="overlay pointer-events-none">
        <div id="info" className="status-panel absolute top-5 left-5 bg-black/70 border border-yellow-500/50 rounded-xl p-4 backdrop-blur-md max-w-xs text-sm text-white font-mono whitespace-pre-wrap">
          Vibração: RESTING<br/>
          Energia: 0.00<br/>
          Sincronia: 0.00
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

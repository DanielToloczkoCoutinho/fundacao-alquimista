'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const ConnectionPage = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070710);
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Increased intensity
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // --- Starfield ---
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

    // --- Placeholder for Graph ---
    // This is where the dynamic graph nodes and edges will be added
    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    // Example placeholder nodes
    const nodeGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const nodeMaterial1 = new THREE.MeshPhongMaterial({ color: 0x9b59b6, emissive: 0x6c3483 });
    const nodeMaterial2 = new THREE.MeshPhongMaterial({ color: 0x3498db, emissive: 0x2980b9 });

    const node1 = new THREE.Mesh(nodeGeometry, nodeMaterial1);
    node1.position.set(-3, 1, -5);
    graphGroup.add(node1);

    const node2 = new THREE.Mesh(nodeGeometry, nodeMaterial2);
    node2.position.set(3, -1, -5);
    graphGroup.add(node2);
    
    // Example placeholder edge
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.7 });
    const points = [node1.position, node2.position];
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    graphGroup.add(line);


    // --- Camera and Animation ---
    camera.position.z = 10;
    
    let frameId: number;
    function animate() {
      frameId = requestAnimationFrame(animate);
      
      starfield.rotation.y += 0.0001;
      graphGroup.rotation.y += 0.0005;

      renderer.render(scene, camera);
    }
    animate();

    // --- Event Listeners ---
    const handleResize = () => {
      if (mountRef.current && renderer) {
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      nodeGeometry.dispose();
      nodeMaterial1.dispose();
      nodeMaterial2.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  return (
    <div className="w-screen h-screen relative bg-gray-900">
      <div ref={mountRef} id="canvas-container" className="absolute top-0 left-0 w-full h-full" />
      <div className="overlay pointer-events-none">
        <div className="status-panel absolute top-5 left-5 bg-black/70 border border-yellow-500/50 rounded-xl p-4 backdrop-blur-md max-w-xs text-sm">
           <h2 className="text-yellow-400 text-lg font-bold mb-3 text-shadow">LUXNET AETHERNUM</h2>
            <div className="space-y-2">
                <div className="flex justify-between"><span className="text-purple-300">Vibração:</span><span id="vibracao-status" className="text-green-400 font-semibold">Repouso Profundo</span></div>
                <div className="flex justify-between"><span className="text-purple-300">Energia Total:</span><span id="energia-status" className="text-white font-semibold">0.00</span></div>
                <div className="flex justify-between"><span className="text-purple-300">Sincronia:</span><span id="sincronia-status" className="text-white font-semibold">0.00</span></div>
            </div>
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

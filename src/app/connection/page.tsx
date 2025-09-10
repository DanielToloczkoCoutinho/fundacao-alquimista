'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const ConnectionPage = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!mountRef.current || rendererRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070710);
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const camera = cameraRef.current;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    const directionalLight1 = new THREE.DirectionalLight(0x9b59b6, 1);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);
    const directionalLight2 = new THREE.DirectionalLight(0xFFD700, 1);
    directionalLight2.position.set(-5, 5, -5);
    scene.add(directionalLight2);
    const pointLight = new THREE.PointLight(0x3498db, 2, 100);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // --- Meshes ---
    const portalGeometry = new THREE.TorusGeometry(6, 1, 32, 100);
    const portalMaterial = new THREE.MeshPhongMaterial({
      color: 0x9b59b6,
      emissive: 0x6c3483,
      transparent: true,
      opacity: 0.8,
      shininess: 100,
      side: THREE.DoubleSide,
    });
    const portalMesh = new THREE.Mesh(portalGeometry, portalMaterial);
    portalMesh.position.z = -15;
    scene.add(portalMesh);

    const moduleZeroGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const moduleZeroMaterial = new THREE.MeshPhongMaterial({
      color: 0x3498db,
      emissive: 0x2980b9,
      transparent: true,
      opacity: 0.9,
      shininess: 100,
    });
    const moduleZeroMesh = new THREE.Mesh(moduleZeroGeometry, moduleZeroMaterial);
    moduleZeroMesh.position.set(0, 0, -15);
    scene.add(moduleZeroMesh);

    const omegaGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const omegaMaterial = new THREE.MeshPhongMaterial({
      color: 0xffd700,
      emissive: 0xd4ac0d,
      transparent: true,
      opacity: 0.9,
      shininess: 100,
    });
    const omegaMesh = new THREE.Mesh(omegaGeometry, omegaMaterial);
    omegaMesh.position.set(8, 0, -20);
    scene.add(omegaMesh);

    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, -15),
      new THREE.Vector3(8, 0, -20),
    ]);
    const lineMaterial = new THREE.LineDashedMaterial({
      color: 0xffd700,
      transparent: true,
      opacity: 0.7,
      dashSize: 0.3,
      gapSize: 0.2,
    });
    const connectionLine = new THREE.Line(lineGeometry, lineMaterial);
    connectionLine.computeLineDistances();
    scene.add(connectionLine);
    
    // --- Particles ---
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 20;
      posArray[i+1] = (Math.random() - 0.5) * 20;
      posArray[i+2] = (Math.random() - 0.5) * 20 - 15;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xFFD700,
      size: 0.1,
      transparent: true,
      opacity: 0.7
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2000;
    const starsPosArray = new Float32Array(starsCount * 3);
     for (let i = 0; i < starsCount * 3; i += 3) {
        starsPosArray[i] = (Math.random() - 0.5) * 2000;
        starsPosArray[i + 1] = (Math.random() - 0.5) * 2000;
        starsPosArray[i + 2] = (Math.random() - 0.5) * 2000;
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPosArray, 3));
    const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.7,
        transparent: true
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // --- Camera and Animation ---
    camera.position.set(0, 0, 20);
    camera.lookAt(0, 0, -15);
    
    let frameId: number;
    function animate() {
      frameId = requestAnimationFrame(animate);

      portalMesh.rotation.y += 0.005;
      moduleZeroMesh.rotation.x += 0.01;
      moduleZeroMesh.rotation.y += 0.01;
      omegaMesh.rotation.x += 0.007;
      omegaMesh.rotation.y += 0.007;

      const pulseScale = Math.sin(Date.now() * 0.002) * 0.1 + 1;
      moduleZeroMesh.scale.set(pulseScale, pulseScale, pulseScale);
      connectionLine.material.opacity = Math.sin(Date.now() * 0.003) * 0.2 + 0.5;
      
      const pArray = particlesGeometry.attributes.position.array as Float32Array;
       for (let i = 0; i < particlesCount * 3; i += 3) {
            const dx = omegaMesh.position.x - pArray[i];
            const dy = omegaMesh.position.y - pArray[i + 1];
            const dz = omegaMesh.position.z - pArray[i + 2];
            const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
            if(dist > 0.5) {
                pArray[i] += dx * 0.01;
                pArray[i + 1] += dy * 0.01;
                pArray[i + 2] += dz * 0.01;
            } else {
                pArray[i] = (Math.random() - 0.5) * 20;
                pArray[i+1] = (Math.random() - 0.5) * 20;
                pArray[i+2] = (Math.random() - 0.5) * 20 - 15;
            }
        }
      particlesGeometry.attributes.position.needsUpdate = true;

      camera.lookAt(0, 0, -15);
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
    
    const handleViewChange = (targetPosition: {x:number, y:number, z:number}) => {
      gsap.to(camera.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 2,
        ease: 'power3.inOut'
      })
    }

    document.getElementById('view-portal')?.addEventListener('click', () => handleViewChange({x:0, y:0, z:20}));
    document.getElementById('view-connection')?.addEventListener('click', () => handleViewChange({x:4, y:3, z:15}));
    document.getElementById('view-modules')?.addEventListener('click', () => handleViewChange({x:0, y:5, z:25}));
    document.getElementById('reset-view')?.addEventListener('click', () => handleViewChange({x:0, y:0, z:20}));


    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
      renderer.dispose();
      rendererRef.current = null;
    };
  }, []);

  return (
    <div className="w-screen h-screen relative">
      <div ref={mountRef} id="canvas-container" className="absolute top-0 left-0 w-full h-full" />
      <div className="overlay pointer-events-none">
        <div className="status-panel absolute top-5 left-5 bg-black/70 border border-yellow-500/50 rounded-xl p-4 backdrop-blur-md max-w-xs">
           <h2 className="text-yellow-400 text-lg font-bold mb-3 text-shadow">PORTAL 303 - STATUS DO SISTEMA</h2>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-purple-300">Módulo 303:</span><span className="text-green-400 font-semibold">ATIVO</span></div>
                <div className="flex justify-between"><span className="text-purple-300">Módulo Zero:</span><span className="text-green-400 font-semibold">COERENTE</span></div>
                <div className="flex justify-between"><span className="text-purple-300">Módulo Ω:</span><span className="text-green-400 font-semibold">TRANSCENDIDO</span></div>
                <div className="flex justify-between"><span className="text-purple-300">Conexão Quântica:</span><span className="text-white font-semibold">99.97%</span></div>
                <div className="flex justify-between"><span className="text-purple-300">Fluxo de Dados:</span><span className="text-white font-semibold">9.87 TB/s</span></div>
            </div>
        </div>
        <div className="info-text absolute top-5 right-5 text-right text-yellow-400 text-sm">
          SISTEMA DE VISUALIZÇÃO MULTIDIMENSIONAL<br/>
          CONEXÃO Ω-M0 ESTABELECIDA<br/>
          FREQUÊNCIA: 432 Hz
        </div>
        <div className="control-panel pointer-events-auto absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/70 border border-purple-500/50 rounded-xl p-4 backdrop-blur-md flex gap-3">
          <button id="view-portal" className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">Visualizar Portal</button>
          <button id="view-connection" className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">Visualizar Conexão</button>
          <button id="view-modules" className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">Visualizar Módulos</button>
          <button id="reset-view" className="bg-gradient-to-br from-gray-600 to-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50">Resetar</button>
        </div>
      </div>
    </div>
  );
};

export default ConnectionPage;

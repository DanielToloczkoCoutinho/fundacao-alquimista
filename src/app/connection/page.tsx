'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const ConnectionPage = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!mountRef.current || rendererRef.current) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let portalMesh: THREE.Mesh, moduleMesh: THREE.Mesh, omegaMesh: THREE.Mesh;
    let particles: THREE.Points;
    let line: THREE.Line;

    function initThreeJS() {
      if (!mountRef.current) return;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, mountRef.current.offsetWidth / mountRef.current.offsetHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight);
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const ambientLight = new THREE.AmbientLight(0x202020, 1);
      scene.add(ambientLight);
      const portalLight = new THREE.PointLight(0x9b59b6, 2, 50);
      portalLight.position.set(0, 0, -15);
      scene.add(portalLight);

      const portalGeometry = new THREE.TorusGeometry(6, 1, 16, 100);
      const portalMaterial = new THREE.MeshPhongMaterial({ color: 0x9b59b6, transparent: true, opacity: 0.7, side: THREE.DoubleSide });
      portalMesh = new THREE.Mesh(portalGeometry, portalMaterial);
      portalMesh.position.z = -15;
      scene.add(portalMesh);

      const moduleGeometry = new THREE.SphereGeometry(1.5, 32, 32);
      const moduleMaterial = new THREE.MeshPhongMaterial({ color: 0x9b59b6, transparent: true, opacity: 0.8, shininess: 100 });
      moduleMesh = new THREE.Mesh(moduleGeometry, moduleMaterial);
      moduleMesh.position.set(0, 0, -15);
      scene.add(moduleMesh);

      const omegaMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700, transparent: true, opacity: 0.8, shininess: 100 });
      omegaMesh = new THREE.Mesh(moduleGeometry.clone(), omegaMaterial);
      omegaMesh.position.set(8, 0, -20);
      scene.add(omegaMesh);
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, -15), new THREE.Vector3(8, 0, -20)]);
      const lineMaterial = new THREE.LineDashedMaterial({ color: 0xFFD700, transparent: true, opacity: 0.6, dashSize: 0.5, gapSize: 0.5 });
      line = new THREE.Line(lineGeometry, lineMaterial);
      line.computeLineDistances();
      scene.add(line);

      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 300;
      const positions = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i++) positions[i] = (Math.random() - 0.5) * 12;
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particlesMaterial = new THREE.PointsMaterial({ color: 0xFFD700, size: 0.15, transparent: true });
      particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      const createHoloText = (text: string, x: number, y: number, z: number) => {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 128;
        const context = canvas.getContext('2d');
        if (context) {
          context.fillStyle = 'rgba(255, 215, 0, 0.9)';
          context.font = 'bold 32px Inter, sans-serif';
          context.textAlign = 'center';
          context.fillText(text, 256, 70);
        }
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(material);
        sprite.position.set(x, y, z);
        sprite.scale.set(5, 1.25, 1);
        scene.add(sprite);
        return sprite;
      };

      createHoloText('PORTAL 303 ATIVO', 0, 5, -15);
      createHoloText('MÓDULO ZERO COERENTE', 0, 2, -15);
      createHoloText('MÓDULO Ω TRANSCENDIDO', 8, 2, -20);
      
      camera.position.set(0, 0, 20);
      camera.lookAt(0, 0, -15);

      animate();
    }
    
    let frameId: number;
    function animate() {
      frameId = requestAnimationFrame(animate);
      if(!portalMesh || !moduleMesh || !omegaMesh || !line || !particles) return;
      
      portalMesh.rotation.y += 0.005;
      const scale = Math.sin(Date.now() * 0.001) * 0.1 + 1;
      moduleMesh.scale.set(scale, scale, scale);
      omegaMesh.rotation.y += 0.01;
      line.material.opacity = Math.sin(Date.now() * 0.002) * 0.3 + 0.3;
      line.computeLineDistances(); // Required for dashed lines

      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length / 3; i++) {
          positions[i * 3 + 2] += 0.03;
          if (positions[i * 3 + 2] > -10) positions[i * 3 + 2] = -20;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      camera.position.x = Math.sin(Date.now() * 0.0005) * 3;
      camera.position.y = Math.cos(Date.now() * 0.0007) * 1.5;
      camera.lookAt(0, 0, -15);

      if (renderer && scene && camera) {
          renderer.render(scene, camera);
      }
    }

    function onWindowResize() {
      if (!mountRef.current || !renderer) return;
      camera.aspect = mountRef.current.offsetWidth / mountRef.current.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight);
    }
    
    function onClick(event: MouseEvent) {
      if(!mountRef.current) return;
      const vector = new THREE.Vector3();
      const rect = mountRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      vector.set(x, y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      gsap.to(particles.position, { x: pos.x, y: pos.y, z: pos.z, duration: 1, ease: "power2.out" });
    }

    initThreeJS();
    
    window.addEventListener('resize', onWindowResize);
    mountRef.current?.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onWindowResize);
      mountRef.current?.removeEventListener('click', onClick);
      if (rendererRef.current) {
          rendererRef.current.dispose();
          rendererRef.current = null;
      }
      if (mountRef.current) {
          mountRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="w-screen h-screen">
      <div id="info" className="absolute top-2 left-2 text-yellow-300 font-sans text-shadow"></div>
    </div>
  );
};

export default ConnectionPage;

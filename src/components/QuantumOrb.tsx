'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const QuantumOrb = ({ energy, coherence, size = 150 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    // Configuração da cena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    if(containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
    }
    
    // Criar esfera quântica
    const geometry = new THREE.SphereGeometry(10, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x0ea5e9,
      emissive: 0x075985,
      specular: 0xffffff,
      shininess: 100,
      transparent: true,
      opacity: 0.9,
      wireframe: true
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    // Partículas de energia
    const particles = new THREE.Group();
    const particleCount = Math.floor(energy / 5);
    
    for (let i = 0; i < particleCount; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.3, 8, 8);
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.7
      });
      
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      
      particle.position.set(
        12 * Math.cos(theta) * Math.sin(phi),
        12 * Math.sin(theta) * Math.sin(phi),
        12 * Math.cos(phi)
      );
      
      particles.add(particle);
    }
    
    scene.add(particles);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.007;
      
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    const currentRef = containerRef.current;
    return () => {
      if (currentRef) {
        currentRef.removeChild(renderer.domElement);
      }
    };
  }, [energy, coherence]);
  
  return (
    <div 
      ref={containerRef} 
      style={{ width: `${size}px`, height: `${size}px` }} 
      className="mx-auto"
    />
  );
};

export default QuantumOrb;

'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface ImmersiveViewerProps {
  equation: string;
  formula: string;
}

export default function ImmersiveEquationViewer({ equation, formula }: ImmersiveViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;


    // Fractal simples baseado na fórmula
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      vertices[i * 3] = (Math.random() - 0.5) * 10;
      vertices[i * 3 + 1] = (Math.random() - 0.5) * 10;
      vertices[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({ color: 0x8b5cf6, size: 0.1, transparent: true, opacity: 0.8 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 15;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controlsRef.current = controls;

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      points.rotation.y += 0.001;
      points.rotation.x += 0.0005;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    
    const handleResize = () => {
        if (currentMount) {
            const newWidth = currentMount.clientWidth;
            const newHeight = currentMount.clientHeight;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        }
    };
    window.addEventListener('resize', handleResize);


    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (currentMount && rendererRef.current) {
            currentMount.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current?.dispose();
        controlsRef.current?.dispose();
        geometry.dispose();
        material.dispose();

    }
  }, [equation, formula]);

  return <div ref={mountRef} className="w-full h-64 rounded-lg" />;
}

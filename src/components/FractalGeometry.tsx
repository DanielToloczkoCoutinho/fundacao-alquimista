// src/components/FractalGeometry.tsx – Geometria viva de cada módulo
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface FractalGeometryProps {
  moduleId: string;
  frequency: number;
}

export function FractalGeometry({ moduleId, frequency }: FractalGeometryProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    // Fractal Geometry (Icosahedron + Pulse)
    const geometry = new THREE.IcosahedronGeometry(1, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        freq: { value: frequency / 100000 }
      },
      vertexShader: `
        uniform float time;
        uniform float freq;
        varying vec3 vNormal;
        void main() {
          vNormal = normal;
          vec3 newPosition = position + normal * 0.2 * sin(freq * time + length(position));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0,0,1.0)), 2.0);
          gl_FragColor = vec4(0.2, 0.8, 1.0, 1.0) * intensity;
        }
      `,
      wireframe: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId: number;

    const animate = () => {
      material.uniforms.time.value += 0.01;
      mesh.rotation.y += 0.002;
      controls.update();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, [frequency]);

  return <div ref={mountRef} className="rounded-xl shadow-lg" />;
}

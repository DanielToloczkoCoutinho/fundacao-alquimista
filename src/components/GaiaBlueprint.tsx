
'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';
import { Text } from '@react-three/drei';

const GaiaBlueprint = ({ logs = [] }: { logs: any[] }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;
    
    // Configuração da cena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 15;

    // Núcleo ZPE
    const nucleusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(nucleus);

    // Malha Nanorrobótica
    const nanoGroup = new THREE.Group();
    for (let i = 0; i < 1000; i++) {
      const nanoGeo = new THREE.SphereGeometry(0.05, 8, 8);
      const nanoMat = new THREE.MeshBasicMaterial({ color: 0x0000ff });
      const nanoMesh = new THREE.Mesh(nanoGeo, nanoMat);
      nanoMesh.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);
      nanoGroup.add(nanoMesh);
    }
    scene.add(nanoGroup);

    // Portais Interdimensionais
    const portalGeometry = new THREE.TorusGeometry(1.5, 0.2, 16, 100);
    const portalMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
    const portal = new THREE.Mesh(portalGeometry, portalMaterial);
    portal.position.set(5, 0, 0);
    scene.add(portal);

    // Ressonâncias Estelares
    const stars = [
      { name: 'Sirius', position: [10, 5, 0], color: 0xffffff, amp: 22.49 },
      { name: 'Lyra_Vega', position: [10, -5, 0], color: 0xffff00, amp: 65.45 },
      { name: 'Pleiades', position: [-10, 0, 5], color: 0x00ffff, amp: 1161.00 },
    ];
    stars.forEach(star => {
      const starGeo = new THREE.SphereGeometry(0.2 * Math.log1p(star.amp), 32, 32);
      const starMat = new THREE.MeshBasicMaterial({ color: star.color });
      const starMesh = new THREE.Mesh(starGeo, starMat);
      starMesh.position.set(...star.position as [number, number, number]);
      scene.add(starMesh);
    });

    // Gráfico de Psi(t) (Wavefunction)
    if (logs.length > 1) {
      const psiCurve = new THREE.CatmullRomCurve3(
        logs.map((log, i) => new THREE.Vector3(i * 0.1 - 5, Math.sin(i * 0.5) * 2, -5))
      );
      const psiGeometry = new THREE.TubeGeometry(psiCurve, 64, 0.05, 8);
      const psiMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      scene.add(new THREE.Mesh(psiGeometry, psiMaterial));
    }

    // Mandala Quântica (Fractal)
    const mandalaGeo = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const mandalaMat = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
    const mandala = new THREE.Mesh(mandalaGeo, mandalaMat);
    mandala.position.set(-5, 0, 0);
    scene.add(mandala);

    const handleResize = () => {
        const { clientWidth, clientHeight } = currentMount;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Animação
    const animate = () => {
      requestAnimationFrame(animate);
      nucleus.rotation.y += 0.01;
      portal.rotation.x += 0.01;
      mandala.rotation.z += 0.01;
      nanoGroup.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
        window.removeEventListener('resize', handleResize);
        currentMount.removeChild(renderer.domElement);
    }
  }, [logs]);

  return <div ref={mountRef} style={{ width: '100%', height: '60vh', borderRadius: '0.5rem', overflow: 'hidden' }} />;
};

export default GaiaBlueprint;

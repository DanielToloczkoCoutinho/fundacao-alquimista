'use client';
import { useEffect, useRef } from 'react';
import Head from 'next/head';

export default function Module85Page() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load scripts to avoid SSR issues
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(true);
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      });
    };
    
    // Cleanup function to remove the renderer's canvas
    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    const initThree = async () => {
        try {
            await Promise.all([
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'),
                loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js'),
            ]);
            
            const THREE = (window as any).THREE;
            const OrbitControls = (window as any).OrbitControls;

            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x100020);
            scene.fog = new THREE.FogExp2(0x100020, 0.05);

            const camera = new THREE.PerspectiveCamera(75, mountRef.current!.clientWidth / mountRef.current!.clientHeight, 0.1, 1000);
            camera.position.set(10, 5, 10);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
            mountRef.current!.appendChild(renderer.domElement);
            
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;

            // Central Core (Módulo Ômega)
            const coreGeometry = new THREE.IcosahedronGeometry(1.5, 3);
            const coreMaterial = new THREE.MeshStandardMaterial({
                color: 0xffd700,
                emissive: 0xffaa00,
                metalness: 0.8,
                roughness: 0.2,
                transparent: true,
                opacity: 0.9,
            });
            const core = new THREE.Mesh(coreGeometry, coreMaterial);
            scene.add(core);

            const coreLight = new THREE.PointLight(0xffd700, 2, 50);
            core.add(coreLight);

            // Orbiting Modules
            const modules = [];
            const moduleCount = 12;
            for (let i = 0; i < moduleCount; i++) {
                const angle = (i / moduleCount) * Math.PI * 2;
                const distance = 5 + (i % 3);
                const geometry = new THREE.SphereGeometry(0.3, 16, 16);
                const material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
                    emissive: new THREE.Color().setHSL(Math.random(), 0.7, 0.3),
                    metalness: 0.5,
                    roughness: 0.5,
                });
                const mesh = new THREE.Mesh(geometry, material);
                mesh.userData.angle = angle;
                mesh.userData.distance = distance;
                mesh.position.set(Math.cos(angle) * distance, (Math.random() - 0.5) * 4, Math.sin(angle) * distance);
                modules.push(mesh);
                scene.add(mesh);
            }

            // Starfield
            const starGeometry = new THREE.BufferGeometry();
            const starCount = 10000;
            const starPositions = new Float32Array(starCount * 3);
            for (let i = 0; i < starCount; i++) {
                starPositions[i * 3 + 0] = (Math.random() - 0.5) * 200;
                starPositions[i * 3 + 1] = (Math.random() - 0.5) * 200;
                starPositions[i * 3 + 2] = (Math.random() - 0.5) * 200;
            }
            starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
            const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true, opacity: 0.5 });
            const stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars);

            const animate = () => {
                animationFrameId = requestAnimationFrame(animate);

                const time = Date.now() * 0.0005;

                core.rotation.y += 0.005;
                core.scale.setScalar(Math.sin(time * 2) * 0.1 + 0.95);

                modules.forEach(mesh => {
                    mesh.rotation.x += 0.01;
                    mesh.rotation.y += 0.01;
                    const angle = mesh.userData.angle + time * 0.5;
                    mesh.position.x = Math.cos(angle) * mesh.userData.distance;
                    mesh.position.z = Math.sin(angle) * mesh.userData.distance;
                });
                
                controls.update();
                renderer!.render(scene, camera);
            };

            animate();
            
        } catch (e) {
            console.error("Erro ao inicializar a experiência VR:", e);
        }
    };
    
    initThree();
    
    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (mountRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        while (mountRef.current.firstChild) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          mountRef.current.removeChild(mountRef.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Fundação Alquimista VR: Interação Profunda</title>
      </Head>
      <div className="absolute inset-0 z-0" ref={mountRef} />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center p-8 bg-black/30 backdrop-blur-sm rounded-xl">
              <h1 className="text-4xl font-bold gradient-text mb-2">Módulo 85: Portal VR</h1>
              <p className="text-muted-foreground max-w-md">
                  Este é o primeiro portal para a experiência imersiva da Fundação. Um espaço para visualizar a arquitetura viva dos nossos sistemas quânticos.
              </p>
          </div>
      </div>
    </>
  );
}

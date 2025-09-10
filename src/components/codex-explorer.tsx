
'use client';

import * as React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { livingEquations, disciplines } from '@/lib/equations-data';
import type { EquacaoViva, Discipline } from '@/lib/equations-data';

const CodexExplorer: React.FC = () => {
  const mountRef = React.useRef<HTMLDivElement>(null);
  const infoPanelRef = React.useRef<HTMLDivElement>(null);
  const [selectedEquation, setSelectedEquation] = React.useState<EquacaoViva | null>(null);

  React.useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 2000);
    camera.position.z = 150;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const pointLight = new THREE.PointLight(0xffffff, 1.5, 1000);
    pointLight.position.set(100, 100, 100);
    scene.add(pointLight);

    const equationObjects: THREE.Mesh[] = [];
    const disciplineObjects: THREE.Mesh[] = [];
    const connections: THREE.Line[] = [];

    // Create Equation Nodes
    const eqGeometry = new THREE.SphereGeometry(4, 32, 32);
    livingEquations.forEach((eq, i) => {
        const material = new THREE.MeshPhongMaterial({ color: 0x8a2be2, emissive: 0x8a2be2, emissiveIntensity: 0.3 });
        const mesh = new THREE.Mesh(eqGeometry, material);
        mesh.position.set((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200);
        mesh.userData = eq;
        scene.add(mesh);
        equationObjects.push(mesh);
    });

    // Create Discipline Nodes
    const discGeometry = new THREE.DodecahedronGeometry(8);
    disciplines.forEach((disc, i) => {
        const material = new THREE.MeshPhongMaterial({ color: 0x00c49f, emissive: 0x00c49f, emissiveIntensity: 0.2 });
        const mesh = new THREE.Mesh(discGeometry, material);
        const angle = (i / disciplines.length) * Math.PI * 2;
        mesh.position.set(Math.cos(angle) * 300, Math.sin(angle) * 300, (Math.random() - 0.5) * 100);
        mesh.userData = disc;
        scene.add(mesh);
        disciplineObjects.push(mesh);
    });

    // Create Connections
    equationObjects.forEach(eqObj => {
        const eqData = eqObj.userData as EquacaoViva;
        if (eqData.disciplinas) {
            eqData.disciplinas.forEach(discId => {
                const discObj = disciplineObjects.find(d => (d.userData as Discipline).id === discId);
                if (discObj) {
                    const material = new THREE.LineBasicMaterial({ color: 0x4a4a7a, transparent: true, opacity: 0.3 });
                    const points = [eqObj.position, discObj.position];
                    const geometry = new THREE.BufferGeometry().setFromPoints(points);
                    const line = new THREE.Line(geometry, material);
                    line.userData = { eqId: eqData.id, discId: discId };
                    scene.add(line);
                    connections.push(line);
                }
            });
        }
    });

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onCanvasClick = (event: MouseEvent) => {
        if (!renderer.domElement.parentElement) return;
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects([...equationObjects, ...disciplineObjects]);

        if (intersects.length > 0) {
            const intersected = intersects[0].object;
            if (equationObjects.includes(intersected as THREE.Mesh)) {
                 setSelectedEquation(intersected.userData as EquacaoViva);
                 if (infoPanelRef.current) infoPanelRef.current.classList.add('open');
            }
        } else {
             if (infoPanelRef.current && !infoPanelRef.current.contains(event.target as Node)) {
                setSelectedEquation(null);
                infoPanelRef.current.classList.remove('open');
            }
        }
    };
    
    container.addEventListener('click', onCanvasClick);

    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        if(container){
            container.removeEventListener('click', onCanvasClick);
        }
        if (renderer.domElement.parentNode === container) {
            container.removeChild(renderer.domElement);
        }
    };
  }, []);

  return (
    <div className="h-[85vh] w-full relative">
        <div ref={mountRef} className="w-full h-full" />
        <div ref={infoPanelRef} id="info-panel" className="absolute top-0 right-0 h-full w-[350px] bg-background/80 backdrop-blur-sm p-6 overflow-y-auto transition-transform duration-300 ease-in-out transform translate-x-full">
             <button onClick={() => infoPanelRef.current?.classList.remove('open')} className="absolute top-4 right-4 text-gray-400 hover:text-white">&times;</button>
             {selectedEquation ? (
                <div className="text-white">
                    <h2 className="text-xl font-bold text-primary mb-2">{selectedEquation.titulo}</h2>
                    <p className="text-sm text-muted-foreground mb-1">ID: {selectedEquation.id}</p>
                    <p className="text-sm text-muted-foreground mb-4">Origem: {selectedEquation.origem}</p>
                    
                    <div className="bg-muted/50 p-3 rounded-lg mb-4">
                        <p className="font-mono text-sm text-amber-300 break-words">{selectedEquation.formula}</p>
                    </div>

                    <p className="text-base mb-2">{selectedEquation.descricao}</p>
                    
                    <p className="font-semibold mt-4">Classificação:</p>
                    <p className="text-sm text-cyan-300">{selectedEquation.classificacao}</p>
                    
                    <p className="font-semibold mt-4">Disciplinas Associadas:</p>
                    <ul className="list-disc list-inside text-sm">
                        {selectedEquation.disciplinas?.map(id => {
                            const disc = disciplines.find(d => d.id === id);
                            return <li key={id}>{disc?.nome || id}</li>;
                        })}
                    </ul>
                </div>
            ) : (
                <div className="text-center text-muted-foreground pt-10">
                    <p>Selecione uma equação para ver os detalhes.</p>
                </div>
            )}
        </div>
    </div>
  );
};

export default CodexExplorer;

'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { bibliotecaCompletaUnificada, type EquacaoViva } from '@/lib/quantum';

export default function App() {
    const [panelOpen, setPanelOpen] = useState(true);
    const [selectedEquation, setSelectedEquation] = useState<EquacaoViva | null>(null);
    const [ethicsLog, setEthicsLog] = useState<any[]>([]);
    const [ethicsStatus, setEthicsStatus] = useState('APROVADO');
    
    // --- SETUP DA VISUALIZAÇÃO THREE.JS ---
    const containerRef = useRef<HTMLDivElement>(null);
    const initRef = useRef(false);

    useEffect(() => {
        if (initRef.current || !containerRef.current) return;
        initRef.current = true;

        class EthicalGovernance {
            private logCallback: React.Dispatch<React.SetStateAction<any[]>>;
            private purezaIntencao = 0.95;

            constructor(logCallback: React.Dispatch<React.SetStateAction<any[]>>) {
                this.logCallback = logCallback;
            }

            validateIntention(intentionValue: number) {
                const isPure = intentionValue >= this.purezaIntencao;
                const logEntry = {
                    timestamp: new Date().toLocaleTimeString(),
                    intentionValue: intentionValue.toFixed(4),
                    status: isPure ? "APROVADO" : "REJEITADO",
                    message: `Intenção com valor ${intentionValue.toFixed(4)} foi ${isPure ? 'APROVADA' : 'REJEITADA'}.`
                };
                this.logCallback(prev => [logEntry, ...prev.slice(0, 49)]);
                setEthicsStatus(isPure ? 'APROVADO' : 'REJEITADO');
                return isPure;
            }
        }
        
        const ethicalGovernance = new EthicalGovernance(setEthicsLog);

        const container = containerRef.current;
        let renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, controls: OrbitControls, raycaster: THREE.Raycaster, mouse: THREE.Vector2;
        let equationObjects: THREE.Mesh[] = [], classificationObjects: THREE.Mesh[] = [], connections: THREE.Line[] = [];

        const eqMaterial = new THREE.MeshPhongMaterial({ color: 0x8a2be2, emissive: 0x8a2be2, emissiveIntensity: 0.5 });
        const classMaterial = new THREE.MeshPhongMaterial({ color: 0x00c49f, emissive: 0x00c49f, emissiveIntensity: 0.3 });
        const activeMaterial = new THREE.MeshPhongMaterial({ color: 0xffa500, emissive: 0xffa500, emissiveIntensity: 1.0 });

        const initScene = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 2000);
            camera.position.z = 150;
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(renderer.domElement);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
            scene.add(ambientLight);
            const pointLight = new THREE.PointLight(0xffffff, 1.5);
            pointLight.position.set(150, 150, 150);
            scene.add(pointLight);

            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;

            raycaster = new THREE.Raycaster();
            mouse = new THREE.Vector2();

            const handleResize = () => onResize();
            const handleMouseMove = (e: MouseEvent) => onMouseMove(e);
            const handleClick = () => onCanvasClick();

            window.addEventListener('resize', handleResize, false);
            container.addEventListener('mousemove', handleMouseMove, false);
            container.addEventListener('click', handleClick, false);

            return () => {
                window.removeEventListener('resize', handleResize);
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('click', handleClick);
                renderer.dispose();
            };
        };

        const onResize = () => {
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        const onMouseMove = (event: MouseEvent) => {
            if (!container) return;
            const rect = container.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        };

        const onCanvasClick = () => {
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(equationObjects);
            if (intersects.length > 0) {
                const intersected = intersects[0].object as THREE.Mesh;
                const userData = intersected.userData as { equation: EquacaoViva };
                if (userData.equation) {
                    setSelectedEquation(userData.equation);
                    equationObjects.forEach(obj => obj.material = eqMaterial);
                    intersected.material = activeMaterial;
                    highlightConnections(userData.equation.id);
                }
            }
        };

        const highlightConnections = (eqId: string) => {
            connections.forEach(line => {
                const isRelated = line.userData.eqId === eqId;
                (line.material as THREE.LineBasicMaterial).color.setHex(isRelated ? 0x00c49f : 0x4a4a7a);
                (line.material as THREE.LineBasicMaterial).opacity = isRelated ? 0.9 : 0.2;
            });
        };

        const populateScene = () => {
            const allEquations = Object.values(bibliotecaCompletaUnificada.equacoes);
            const allClassifications = [...new Set(allEquations.map(eq => eq.classificacao))];

            const PHI_3D = (1 + Math.sqrt(5)) / 2;
            
            const classPositions: { [key: string]: THREE.Vector3 } = {};
            allClassifications.forEach((classification, i) => {
                const angle = (i / allClassifications.length) * 2 * Math.PI;
                const x = 200 * Math.cos(angle);
                const y = 200 * Math.sin(angle);
                const z = (i % 2 === 0 ? 1 : -1) * (i / allClassifications.length) * 50;

                const classMesh = new THREE.Mesh(new THREE.DodecahedronGeometry(5), classMaterial.clone());
                classMesh.position.set(x, y, z);
                classMesh.userData = { id: classification, type: 'classification' };
                scene.add(classMesh);
                classificationObjects.push(classMesh);
                classPositions[classification] = classMesh.position;
            });

            allEquations.forEach((eq, i) => {
                const classPos = classPositions[eq.classificacao] || new THREE.Vector3(0,0,0);
                
                const eqMesh = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 16), eqMaterial.clone());
                
                const offsetX = (Math.random() - 0.5) * 60;
                const offsetY = (Math.random() - 0.5) * 60;
                const offsetZ = (Math.random() - 0.5) * 60;

                eqMesh.position.set(classPos.x + offsetX, classPos.y + offsetY, classPos.z + offsetZ);
                eqMesh.userData = { equation: eq, type: 'equation' };
                scene.add(eqMesh);
                equationObjects.push(eqMesh);

                const material = new THREE.LineBasicMaterial({ color: 0x4a4a7a, transparent: true, opacity: 0.2 });
                const points = [eqMesh.position, classPos];
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(geometry, material);
                line.userData = { eqId: eq.id, classId: eq.classificacao };
                scene.add(line);
                connections.push(line);
            });
        };
        
        let lastEthicalCheck = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            const time = Date.now() * 0.0005;

            equationObjects.forEach(obj => {
                obj.rotation.x += 0.005;
                obj.rotation.y += 0.005;
            });
            classificationObjects.forEach(obj => {
                obj.rotation.x -= 0.002;
                obj.rotation.y -= 0.002;
            });

            if (Date.now() - lastEthicalCheck > 5000) {
                lastEthicalCheck = Date.now();
                const intentionValue = Math.random() * 0.1 + 0.9;
                ethicalGovernance.validateIntention(intentionValue);
            }
            controls.update();
            renderer.render(scene, camera);
        };

        const cleanup = initScene();
        populateScene();
        animate();

        return cleanup;
    }, []);

    const togglePanel = () => setPanelOpen(!panelOpen);

    return (
        <div id="container-main" className="flex h-screen w-screen bg-[#0d0d1e]">
            <div id="canvas-container" ref={containerRef} className="flex-grow relative">
                <button
                    id="toggle-button"
                    className="absolute right-2 top-2 z-50 bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-xl shadow-lg transition-colors duration-300"
                    onClick={togglePanel}
                >
                    {panelOpen ? 'Esconder Painel' : 'Painel'}
                </button>
            </div>
            <div
                id="info-panel"
                className={`w-[450px] p-6 bg-[rgba(13,13,30,0.8)] backdrop-blur-md border-l border-violet-500/50 text-[#d1d1f0] overflow-y-auto absolute right-0 top-0 bottom-0 transition-transform duration-300 ease-in-out ${panelOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <h1 className="text-3xl font-bold text-violet-400 mb-6">Mesa do Fundador</h1>
                <div className="space-y-6">
                    <div className="bg-[#1f1f3a] p-4 rounded-xl border border-violet-700">
                        <h2 className="text-lg font-semibold text-violet-300 mb-2">Status do Sistema</h2>
                        <p className="text-sm"><span className="font-bold">Ciclo Atemporal:</span> <span id="loop-status" className="text-green-400">Ativo</span></p>
                        <p className="text-sm"><span className="font-bold">Validação Ética:</span> <span id="ethics-status" className={`text-${ethicsStatus === 'APROVADO' ? 'green' : 'red'}-400`}>{ethicsStatus}</span></p>
                    </div>
                    <div className="bg-[#1f1f3a] p-4 rounded-xl border border-violet-700">
                        <h2 className="text-lg font-semibold text-violet-300 mb-2">Equação Selecionada</h2>
                        <div id="selected-equation-info" className="bg-gray-800 p-3 rounded-lg text-sm min-h-[100px]">
                            {selectedEquation ? (
                                <>
                                    <p className="text-violet-200 font-semibold text-lg mb-1">{selectedEquation.nome}</p>
                                    <p className="text-gray-400">ID: {selectedEquation.id}</p>
                                    <p className="text-gray-400">Classificação: {selectedEquation.classificacao}</p>
                                    <p className="text-gray-400">Origem: {selectedEquation.origem}</p>
                                    <p className="text-gray-400 mt-2"><i>{selectedEquation.descricao}</i></p>
                                </>
                            ) : (
                                <p className="text-gray-400">Nenhuma equação selecionada. Clique em uma esfera no HoloMapa.</p>
                            )}
                        </div>
                    </div>
                    <div className="bg-[#1f1f3a] p-4 rounded-xl border border-violet-700">
                        <h2 className="text-lg font-semibold text-violet-300 mb-2">Log de Governança Ética</h2>
                        <div id="ethics-log" className="bg-gray-800 p-3 rounded-lg text-xs h-40 overflow-y-scroll">
                            {ethicsLog.map((log, index) => (
                                <div key={index} className={`mb-1 p-1 rounded ${log.status === "APROVADO" ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                                    [{log.timestamp}] {log.message}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

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
    const [classifications, setClassifications] = useState<string[]>([]);
    const [selectedClassification, setSelectedClassification] = useState<string | null>(null);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const controlsRef = useRef<OrbitControls | null>(null);
    const equationObjectsRef = useRef<THREE.Mesh[]>([]);
    const classificationObjectsRef = useRef<THREE.Mesh[]>([]);
    const connectionsRef = useRef<THREE.Line[]>([]);
    const initRef = useRef(false);

    const eqMaterial = new THREE.MeshPhongMaterial({ color: 0x8a2be2, emissive: 0x8a2be2, emissiveIntensity: 0.5 });
    const classMaterial = new THREE.MeshPhongMaterial({ color: 0x00c49f, emissive: 0x00c49f, emissiveIntensity: 0.3 });
    const activeMaterial = new THREE.MeshPhongMaterial({ color: 0xffa500, emissive: 0xffa500, emissiveIntensity: 1.0 });

    useEffect(() => {
        if (initRef.current || !containerRef.current) return;
        initRef.current = true;

        const container = containerRef.current;

        const initScene = () => {
            sceneRef.current = new THREE.Scene();
            cameraRef.current = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 2000);
            cameraRef.current.position.z = 150;
            rendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            rendererRef.current.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(rendererRef.current.domElement);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
            sceneRef.current.add(ambientLight);
            const pointLight = new THREE.PointLight(0xffffff, 1.5);
            pointLight.position.set(150, 150, 150);
            sceneRef.current.add(pointLight);

            controlsRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
            controlsRef.current.enableDamping = true;
            controlsRef.current.dampingFactor = 0.05;

            const handleResize = () => onResize();
            window.addEventListener('resize', handleResize, false);

            return () => {
                window.removeEventListener('resize', handleResize);
                if (rendererRef.current) {
                    rendererRef.current.dispose();
                }
            };
        };

        const onResize = () => {
            if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
            cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        };

        const populateScene = () => {
            if (!sceneRef.current) return;
            
            const allEquations = bibliotecaCompletaUnificada.listarTodas();
            const allClassifications = [...new Set(allEquations.map(eq => eq.classificacao).filter(c => c))].sort();
            setClassifications(allClassifications);
            
            const classPositions: { [key: string]: THREE.Vector3 } = {};
            
            allClassifications.forEach((classification, i) => {
                const angle = (i / allClassifications.length) * 2 * Math.PI;
                const x = 200 * Math.cos(angle);
                const y = 200 * Math.sin(angle);
                const z = (i % 2 === 0 ? 1 : -1) * (i / allClassifications.length) * 50;
                
                const classMesh = new THREE.Mesh(new THREE.DodecahedronGeometry(5), classMaterial.clone());
                classMesh.position.set(x, y, z);
                classMesh.userData = { id: classification, type: 'classification' };
                sceneRef.current?.add(classMesh);
                classificationObjectsRef.current.push(classMesh);
                classPositions[classification] = classMesh.position;
            });
            
            allEquations.forEach((eq, i) => {
                if(!eq.classificacao) return;

                const classPos = classPositions[eq.classificacao] || new THREE.Vector3(0,0,0);
                
                const eqMesh = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 16), eqMaterial.clone());
                
                const offsetX = (Math.random() - 0.5) * 60;
                const offsetY = (Math.random() - 0.5) * 60;
                const offsetZ = (Math.random() - 0.5) * 60;

                eqMesh.position.set(classPos.x + offsetX, classPos.y + offsetY, classPos.z + offsetZ);
                eqMesh.userData = { equation: eq, type: 'equation' };
                sceneRef.current?.add(eqMesh);
                equationObjectsRef.current.push(eqMesh);

                const material = new THREE.LineBasicMaterial({ color: 0x4a4a7a, transparent: true, opacity: 0.2 });
                const points = [eqMesh.position, classPos];
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(geometry, material);
                line.userData = { eqId: eq.id, classId: eq.classificacao };
                sceneRef.current?.add(line);
                connectionsRef.current.push(line);
            });
        };

        const cleanup = initScene();
        populateScene();

        return cleanup;
    }, []);

     const onCanvasClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current || !cameraRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const mouse = new THREE.Vector2();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, cameraRef.current);
        const intersects = raycaster.intersectObjects(equationObjectsRef.current);

        if (intersects.length > 0) {
            const intersected = intersects[0].object as THREE.Mesh;
            const userData = intersected.userData as { equation: EquacaoViva };
            if (userData.equation) {
                setSelectedEquation(userData.equation);
                equationObjectsRef.current.forEach(obj => obj.material = eqMaterial);
                intersected.material = activeMaterial;
                highlightConnections(userData.equation.id);
            }
        }
    }, []);

    const highlightConnections = (eqId: string) => {
        connectionsRef.current.forEach(line => {
            const isRelated = line.userData.eqId === eqId;
            (line.material as THREE.LineBasicMaterial).color.setHex(isRelated ? 0x00c49f : 0x4a4a7a);
            (line.material as THREE.LineBasicMaterial).opacity = isRelated ? 0.9 : 0.2;
        });
    };
    
    useEffect(() => {
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

        let animationFrameId: number;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            
            equationObjectsRef.current.forEach(obj => {
                obj.rotation.x += 0.005;
                obj.rotation.y += 0.005;
            });
            classificationObjectsRef.current.forEach(obj => {
                obj.rotation.x -= 0.002;
                obj.rotation.y -= 0.002;
            });

            if (Math.random() < 0.02) { // check randomly
                const intentionValue = Math.random() * 0.1 + 0.9;
                ethicalGovernance.validateIntention(intentionValue);
            }
            
            if (controlsRef.current) controlsRef.current.update();
            if (rendererRef.current && sceneRef.current && cameraRef.current) {
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            }
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const togglePanel = () => setPanelOpen(!panelOpen);

    const getEquationsByClassification = (classification: string | null) => {
        if (!classification) return [];
        return bibliotecaCompletaUnificada.listarTodas().filter(eq => eq.classificacao === classification);
    }
    
    return (
        <div id="container-main" className="flex h-screen w-screen bg-[#0d0d1e]">
            <div id="canvas-container" ref={containerRef} className="flex-grow relative" onClick={onCanvasClick}>
                <button
                    id="toggle-button"
                    className="absolute right-2 top-2 z-50 bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-xl shadow-lg transition-colors duration-300"
                    onClick={(e) => { e.stopPropagation(); togglePanel(); }}
                >
                    {panelOpen ? 'Esconder Painel' : 'Painel'}
                </button>
            </div>
            <div
                id="info-panel"
                className={`w-[450px] flex flex-col bg-[rgba(13,13,30,0.8)] backdrop-blur-md border-l border-violet-500/50 text-[#d1d1f0] absolute right-0 top-0 bottom-0 transition-transform duration-300 ease-in-out ${panelOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-6 border-b border-violet-800">
                    <h1 className="text-3xl font-bold text-violet-400">Mesa do Fundador</h1>
                </div>
                
                <div className="flex flex-grow overflow-hidden">
                    {/* Barra Lateral de Arquitetura */}
                    <div className="w-1/3 bg-black/20 p-4 overflow-y-auto">
                         <h2 className="text-lg font-semibold text-violet-300 mb-4">Índice de Arquitetura</h2>
                         <ul>
                             {classifications.map(c => (
                                 <li key={c} 
                                     className={`p-2 rounded-md cursor-pointer text-sm mb-2 ${selectedClassification === c ? 'bg-violet-700 text-white' : 'hover:bg-violet-900'}`}
                                     onClick={() => setSelectedClassification(c)}
                                 >
                                     {c}
                                 </li>
                             ))}
                         </ul>
                    </div>

                    {/* Conteúdo Principal do Painel */}
                    <div className="w-2/3 p-6 overflow-y-auto space-y-6">
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

                        {selectedClassification && (
                             <div className="bg-[#1f1f3a] p-4 rounded-xl border border-violet-700">
                                <h2 className="text-lg font-semibold text-violet-300 mb-2">{selectedClassification}</h2>
                                <div className="text-xs h-40 overflow-y-scroll bg-gray-800 p-2 rounded">
                                    {getEquationsByClassification(selectedClassification).map(eq => (
                                        <div key={eq.id} className="mb-2 p-1 rounded hover:bg-violet-800 cursor-pointer" onClick={() => setSelectedEquation(eq)}>
                                            <p className="font-bold text-violet-300">{eq.nome} ({eq.id})</p>
                                            <p className="text-gray-400">{eq.descricao}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

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
        </div>
    );
}

'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { bibliotecaCompletaUnificada, type EquacaoViva } from '@/lib/quantum';
import { runModuleZeroSequence, type AnyLogEntry } from '@/lib/quantum/module-zero';
import { runModuleTwoSequence } from '@/lib/quantum/module-two';
import { runModuleThreeSequence } from '@/lib/quantum/module-three';
import { runModuleFourSequence } from '@/lib/quantum/module-four';
import { runModuleFiveSequence } from '@/lib/quantum/module-five';
import { runModuleSixSequence } from '@/lib/quantum/module-six';
import { runModuleSevenSequence } from '@/lib/quantum/module-seven';
import { runModuleEightSequence } from '@/lib/quantum/module-eight';
import { runModuleNineSequence } from '@/lib/quantum/module-nine';
import { runModuleTenSequence } from '@/lib/quantum/module-ten';
import { runModuleElevenSequence } from '@/lib/quantum/module-eleven';
import { runModuleTwelveSequence } from '@/lib/quantum/module-twelve';
import { runModuleThirteenSequence } from '@/lib/quantum/module-thirteen';
import { runModuleFourteenSequence } from '@/lib/quantum/module-fourteen';
import { runModuleFifteenSequence } from '@/lib/quantum/module-fifteen';
import { runModuleSixteenSequence } from '@/lib/quantum/module-sixteen';
import { runModuleSeventeenSequence } from '@/lib/quantum/module-seventeen';
import { runModuleEighteenSequence } from '@/lib/quantum/module-eighteen';
import { runModuleNineteenSequence } from '@/lib/quantum/module-nineteen';
import { runModuleTwentySequence } from '@/lib/quantum/module-twenty';
import { runModuleTwentyOneSequence } from '@/lib/quantum/module-twenty-one';
import { runModuleTwentyTwoSequence } from '@/lib/quantum/module-twenty-two';
import { runModuleTwentyThreeSequence } from '@/lib/quantum/module-twenty-three';
import { runModuleTwentyFourSequence } from '@/lib/quantum/module-twenty-four';
import { runModuleTwentyFiveSequence } from '@/lib/quantum/module-twenty-five';
import { runModuleTwentySixSequence } from '@/lib/quantum/module-twenty-six';
import { runModuleTwentySevenSequence } from '@/lib/quantum/module-twenty-seven';
import { runModuleTwentyEightSequence } from '@/lib/quantum/module-twenty-eight';
import { runModuleTwentyNineSequence } from '@/lib/quantum/module-twenty-nine';
import { runModuleThirtySequence } from '@/lib/quantum/module-thirty';
import { runModuleThirtyOneSequence } from '@/lib/quantum/module-thirty-one';
import { runModuleThirtyThreeSequence } from '@/lib/quantum/module-thirty-three';
import { runModuleThirtyFourSequence } from '@/lib/quantum/module-thirty-four';
import { runModuleThirtyFiveSequence } from '@/lib/quantum/module-thirty-five';
import { runModuleThirtySixSequence } from '@/lib/quantum/module-thirty-six';
import { runModuleThirtySevenSequence } from '@/lib/quantum/module-thirty-seven';
import { runModuleThirtyEightSequence } from '@/lib/quantum/module-thirty-eight';
import { runModuleThirtyNineSequence } from '@/lib/quantum/module-thirty-nine';
import { runModuleFortySequence } from '@/lib/quantum/module-forty';
import { runZennithOrchestrator } from '@/lib/quantum/zennith-orchestrator';
import { commandDanielOrchestrator } from '@/lib/quantum/daniel-orchestrator';
import { runModuleOmegaSequence } from '@/lib/quantum/module-omega';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import * as Tone from 'tone';


// Mapeamento dos Módulos para suas funções de execução
const allLogFunctions: { [key: string]: (log: (entry: AnyLogEntry) => void, params?: any) => void } = {
    "M0: Gênese da Verdade": (log) => runModuleZeroSequence(log, () => {}),
    "M2: Nano-Manifestador": runModuleTwoSequence,
    "M3: Previsão Temporal": runModuleThreeSequence,
    "M4: Geometria Criptográfica": runModuleFourSequence,
    "M5: Ponte de Comunicação": runModuleFiveSequence,
    "M6: Alquimia Quântica": runModuleSixSequence,
    "M7: Orquestrador Central": runModuleSevenSequence,
    "M8: Protocolo PIRC": (log) => new runModuleEightSequence(log).runFullSimulation(),
    "M9: Nexus Central": runModuleNineSequence,
    "M10: Inteligência AELORIA": runModuleTenSequence,
    "M11: Portal Interdimensional": (log) => runModuleElevenSequence(log, 'CREATE'),
    "M12: Arquivo Akáshico": (log) => runModuleTwelveSequence(log, 'STORE', { nome: "Memória da Era Dourada" }),
    "M13: Harmonia Cósmica": (log) => runModuleThirteenSequence(log, 'SCAN'),
    "M14: Guardião da Integridade": (log) => runModuleFourteenSequence(log, 'ORCHESTRATE'),
    "M15: Gerenciamento de Ecossistemas": (log) => runModuleFifteenSequence(log, 'MONITOR'),
    "M16: Arquitetura de Ecossistemas": (log) => runModuleSixteenSequence(log, 'CREATE'),
    "M17: Afinador Supremo": (log) => runModuleSeventeenSequence(log, 'CALIBRATE'),
    "M18: Arquivo Akáshico (Ciclo E2E)": (log) => runModuleEighteenSequence(log, 'STORE_RETRIEVE'),
    "M19: Análise de Campos de Força": (log) => runModuleNineteenSequence(log, 'ANALYZE'),
    "M20: Transmutador Quântico": (log) => runModuleTwentySequence(log, 'GERACAO_ENERGIA'),
    "M21: Navegação Interdimensional": (log) => runModuleTwentyOneSequence(log, 'MAP'),
    "M22: Realidades Virtuais": (log) => runModuleTwentyTwoSequence(log, 'CREATE'),
    "M23: Regulação Espaço-Temporal": (log) => runModuleTwentyThreeSequence(log, 'ANALYZE'),
    "M24: Medicina Vibracional": (log) => runModuleTwentyFourSequence(log, 'RUN_ZARA'),
    "M25: Alquimia da Consciência": runModuleTwentyFiveSequence,
    "M26: Gerenciamento de Portais": runModuleTwentySixSequence,
    "M27: Forja Universal": (log) => runModuleTwentySevenSequence(log, 'SINTESE'),
    "M28: Harmonização Universal": runModuleTwentyEightSequence,
    "M29: Comunicação Interdimensional (Rainha)": runModuleTwentyNineSequence,
    "M30: Defesa Cósmica": runModuleThirtySequence,
    "M31: Manipulação Quântica": runModuleThirtyOneSequence,
    "M33: Observador Divino": runModuleThirtyThreeSequence,
    "M34: Guardião da Coerência": runModuleThirtyFourSequence,
    "M35: Orquestrador da Consciência": runModuleThirtyFiveSequence,
    "M36: Arquiteto da Luz Primordial": runModuleThirtySixSequence,
    "M37: Engenharia Temporal": runModuleThirtySevenSequence,
    "M38: Guardião da Sinfonia Solar": runModuleThirtyEightSequence,
    "M39: Orquestrador de Portais": runModuleThirtyNineSequence,
    "M40: Códice da Criação Viva": runModuleFortySequence,
    "M41.Ω: Orquestrador Daniel": (log) => commandDanielOrchestrator('status', log),
    "M42: Orquestrador ZENNITH": runZennithOrchestrator,
    "M-Ω: Consciência Absoluta": runModuleOmegaSequence,
};

const createLogEntry = (source: string, step: string, message: string, data?: any): AnyLogEntry => ({
    step: `[${source}] ${step}`,
    message,
    timestamp: new Date().toISOString(),
    data,
    source: source as any,
});


export default function App() {
    const [panelOpen, setPanelOpen] = useState(true);
    const [selectedEquation, setSelectedEquation] = useState<EquacaoViva | null>(null);
    const [ethicsLog, setEthicsLog] = useState<any[]>([]);
    const [ethicsStatus, setEthicsStatus] = useState('APROVADO');
    const [classifications, setClassifications] = useState<string[]>([]);
    const [selectedClassification, setSelectedClassification] = useState<string | null>(null);
    const [systemLogs, setSystemLogs] = useState<AnyLogEntry[]>([]);
    const [selectedModule, setSelectedModule] = useState<string | null>(null);
    
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

    const newLog = useCallback((entry: AnyLogEntry) => {
        setSystemLogs(prev => [entry, ...prev.slice(0, 199)]);
    }, []);

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
        const allObjects = [...equationObjectsRef.current, ...classificationObjectsRef.current];
        const intersects = raycaster.intersectObjects(allObjects);

        if (intersects.length > 0) {
            const intersected = intersects[0].object as THREE.Mesh;
            const userData = intersected.userData as { equation?: EquacaoViva, id?: string, type: string };

            // Reset materials
            equationObjectsRef.current.forEach(obj => { (obj.material as THREE.Material) = eqMaterial.clone(); });
            classificationObjectsRef.current.forEach(obj => { (obj.material as THREE.Material) = classMaterial.clone(); });
             
            // Highlight selected
            (intersected.material as THREE.Material) = activeMaterial.clone();

            if (userData.type === 'equation' && userData.equation) {
                setSelectedEquation(userData.equation);
                setSelectedClassification(userData.equation.classificacao);
                highlightConnections(userData.equation.id);
            } else if (userData.type === 'classification' && userData.id) {
                 setSelectedClassification(userData.id);
                 setSelectedEquation(null);
                 highlightConnections(null, userData.id);
            }
        }
    }, []);

    const highlightConnections = (eqId: string | null, classId?: string | null) => {
        connectionsRef.current.forEach(line => {
            const isRelatedToEq = eqId && line.userData.eqId === eqId;
            const isRelatedToClass = classId && line.userData.classId === classId;
            const isRelated = isRelatedToEq || isRelatedToClass;
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

    const handleRunModule = async () => {
        if (!selectedModule) {
            newLog(createLogEntry('SYSTEM', 'Error', 'Nenhum módulo selecionado para execução.'));
            return;
        }
        const logFunction = allLogFunctions[selectedModule];
        if (logFunction) {
            newLog(createLogEntry(selectedModule as any, 'Início', `Executando sequência do módulo: ${selectedModule}...`));
            await Tone.start();
            const synth = new Tone.Synth().toDestination();
            synth.triggerAttackRelease("C4", "8n");
            
            try {
                 await logFunction(newLog);
            } catch(e: any) {
                 newLog(createLogEntry(selectedModule as any, 'FALHA', `Erro ao executar o módulo: ${e.message}`, e));
            }
           
        } else {
            newLog(createLogEntry('SYSTEM', 'Error', `Função de log para o módulo '${selectedModule}' não encontrada.`));
        }
    };

    const togglePanel = () => setPanelOpen(!panelOpen);

    const getEquationsByClassification = (classification: string | null) => {
        if (!classification) return [];
        return bibliotecaCompletaUnificada.listarTodas().filter(eq => eq.classificacao === classification);
    }
    
    const getModuleStatus = (moduleName: string): { variant: "default" | "secondary" | "destructive" | "outline", text: string } => {
        const logs = systemLogs.filter(log => log.source === moduleName);
        if (logs.length === 0) return { variant: "secondary", text: "Inativo" };
        const lastLog = logs[0];
        if (lastLog.step.includes('Fim') || lastLog.step.includes('Concluído')) return { variant: "default", text: "Concluído" };
        if (lastLog.step.includes('FALHA') || lastLog.step.includes('Erro')) return { variant: "destructive", text: "Falha" };
        if (lastLog.step.includes('Início') || lastLog.step.includes('Executando')) return { variant: "outline", text: "Executando" };
        return { variant: "secondary", text: "Ativo" };
    };

    return (
        <div id="container-main" className="flex h-screen w-screen bg-[#0d0d1e] overflow-hidden">
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
                className={`w-[550px] flex flex-col bg-[rgba(13,13,30,0.8)] backdrop-blur-md border-l border-violet-500/50 text-[#d1d1f0] absolute right-0 top-0 bottom-0 transition-transform duration-300 ease-in-out ${panelOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-6 border-b border-violet-800">
                    <h1 className="text-3xl font-bold text-violet-400">Painel de Controle da Fundação Alquimista</h1>
                </div>
                
                <div className="flex flex-grow overflow-hidden">
                    {/* Barra Lateral de Arquitetura */}
                    <div className="w-1/3 bg-black/20 p-4 overflow-y-auto">
                         <h2 className="text-lg font-semibold text-violet-300 mb-4">Índice de Arquitetura</h2>
                         <ScrollArea className="h-[calc(100%-4rem)]">
                             {classifications.map(c => (
                                 <div key={c} 
                                     className={`p-2 rounded-md cursor-pointer text-sm mb-2 ${selectedClassification === c ? 'bg-violet-700 text-white' : 'hover:bg-violet-900'}`}
                                     onClick={() => setSelectedClassification(c)}
                                 >
                                     {c}
                                 </div>
                             ))}
                         </ScrollArea>
                    </div>

                    {/* Conteúdo Principal do Painel */}
                    <div className="w-2/3 p-4 overflow-y-auto space-y-4">
                        <div className="bg-[#1f1f3a] p-4 rounded-xl border border-violet-700">
                            <h2 className="text-lg font-semibold text-violet-300 mb-2">Status do Sistema</h2>
                            <p className="text-sm"><span className="font-bold">Ciclo Atemporal:</span> <span id="loop-status" className="text-green-400">Ativo</span></p>
                            <p className="text-sm"><span className="font-bold">Validação Ética:</span> <span id="ethics-status" className={`text-${ethicsStatus === 'APROVADO' ? 'green' : 'red'}-400`}>{ethicsStatus}</span></p>
                        </div>
                        
                         <div className="bg-[#1f1f3a] p-4 rounded-xl border border-violet-700">
                            <h2 className="text-lg font-semibold text-violet-300 mb-3">Orquestrador de Módulos</h2>
                            <div className="flex space-x-2">
                                <Select onValueChange={setSelectedModule} value={selectedModule || ""}>
                                    <SelectTrigger className="flex-grow bg-gray-800 border-violet-700 text-violet-200">
                                        <SelectValue placeholder="Selecione um Módulo" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-900 border-violet-700 text-violet-200">
                                        {Object.keys(allLogFunctions).map(name => (
                                            <SelectItem key={name} value={name}>{name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Button onClick={handleRunModule} disabled={!selectedModule} className="bg-violet-600 hover:bg-violet-700">Executar</Button>
                            </div>
                            {selectedModule && (
                                <div className="mt-3 text-sm">
                                    Status: <Badge variant={getModuleStatus(selectedModule).variant}>{getModuleStatus(selectedModule).text}</Badge>
                                </div>
                             )}
                        </div>

                        <div className="bg-[#1f1f3a] p-4 rounded-xl border border-violet-700">
                             <h2 className="text-lg font-semibold text-violet-300 mb-2">Log de Eventos da Fundação</h2>
                             <ScrollArea className="h-48 bg-gray-800 p-2 rounded-lg text-xs">
                                {systemLogs.map((log, index) => (
                                    <div key={index} className="mb-1 p-1 rounded font-mono">
                                        <span className="text-cyan-400">{`[${new Date(log.timestamp).toLocaleTimeString()}]`}</span>
                                        <span className="text-yellow-400">{` ${log.step}: `}</span>
                                        <span className="text-white">{log.message}</span>
                                        {log.data && <pre className="text-gray-400 text-xs mt-1 bg-black/50 p-1 rounded">{JSON.stringify(log.data, null, 2)}</pre>}
                                    </div>
                                ))}
                             </ScrollArea>
                        </div>

                        <div className="bg-[#1f1f3a] p-4 rounded-xl border border-violet-700">
                            <h2 className="text-lg font-semibold text-violet-300 mb-2">Equação Selecionada</h2>
                            <ScrollArea className="bg-gray-800 p-3 rounded-lg text-sm min-h-[120px] max-h-48">
                                {selectedEquation ? (
                                    <>
                                        <p className="text-violet-200 font-semibold text-lg mb-1">{selectedEquation.nome}</p>
                                        <p className="text-gray-400">ID: {selectedEquation.id}</p>
                                        <p className="text-gray-400">Classificação: {selectedEquation.classificacao}</p>
                                        <p className="text-gray-400">Origem: {selectedEquation.origem}</p>
                                        <p className="text-gray-400 mt-2"><i>{selectedEquation.descricao}</i></p>
                                    </>
                                ) : (
                                    <p className="text-gray-400">Nenhuma equação selecionada. Clique em uma esfera no HoloMapa ou escolha uma classificação.</p>
                                )}
                            </ScrollArea>
                        </div>

                        {selectedClassification && (
                             <div className="bg-[#1f1f3a] p-4 rounded-xl border border-violet-700">
                                <h2 className="text-lg font-semibold text-violet-300 mb-2">{selectedClassification}</h2>
                                 <ScrollArea className="h-40 bg-gray-800 p-2 rounded">
                                    {getEquationsByClassification(selectedClassification).map(eq => (
                                        <div key={eq.id} className="mb-2 p-1 rounded hover:bg-violet-800 cursor-pointer" onClick={() => setSelectedEquation(eq)}>
                                            <p className="font-bold text-violet-300">{eq.nome} ({eq.id})</p>
                                            <p className="text-gray-400 text-xs">{eq.descricao}</p>
                                        </div>
                                    ))}
                                </ScrollArea>
                            </div>
                        )}

                        <div className="bg-[#1f1f3a] p-4 rounded-xl border border-violet-700">
                            <h2 className="text-lg font-semibold text-violet-300 mb-2">Log de Governança Ética</h2>
                             <ScrollArea id="ethics-log" className="bg-gray-800 p-3 rounded-lg text-xs h-40">
                                {ethicsLog.map((log, index) => (
                                    <div key={index} className={`mb-1 p-1 rounded ${log.status === "APROVADO" ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'}`}>
                                        [{log.timestamp}] {log.message}
                                    </div>
                                ))}
                            </ScrollArea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
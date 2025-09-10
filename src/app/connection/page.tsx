'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ConnectionPage = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function createStars() {
      const container = document.querySelector('.cosmic-bg');
      if (!container) return;
      // Clear existing stars
      container.querySelectorAll('.star').forEach(s => s.remove());
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(star);
      }
    }

    function createHologramLines() {
        const containers = document.querySelectorAll('.gold-border, .purple-border');
        containers.forEach(container => {
            // Clear existing lines
            container.querySelectorAll('.hologram-line').forEach(l => l.remove());
            for (let i = 0; i < 3; i++) {
                const line = document.createElement('div');
                line.classList.add('hologram-line');
                line.style.left = Math.random() * 100 + '%';
                line.style.animationDelay = Math.random() * 4 + 's';
                container.appendChild(line);
            }
        });
    }
    
    // Simular atualizações de status
    const statusInterval = setInterval(() => {
        const statusElements = document.querySelectorAll('.pulse');
        statusElements.forEach(el => {
           (el as HTMLElement).style.color = `hsl(${Math.random() * 60 + 100}, 100%, 65%)`;
        });
    }, 2000);

    createStars();
    createHologramLines();


    // Three.js Scene
    if (!canvasRef.current || canvasRef.current.children.length > 0) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(canvasRef.current.clientWidth, 500);
    canvasRef.current.appendChild(renderer.domElement);

    const moduleGeometry = new THREE.SphereGeometry(1, 32, 32);
    const moduleMaterial = new THREE.MeshBasicMaterial({ color: 0x9b59b6, transparent: true, opacity: 0.8 });
    const omegaMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.8 });
    const moduleMesh = new THREE.Mesh(moduleGeometry, moduleMaterial);
    const omegaMesh = new THREE.Mesh(moduleGeometry, omegaMaterial);
    moduleMesh.position.set(-3, 0, 0);
    omegaMesh.position.set(3, 0, 0);
    scene.add(moduleMesh);
    scene.add(omegaMesh);

    const lineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-3, 0, 0), new THREE.Vector3(3, 0, 0)]);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.6 });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 6;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({ color: 0xFFD700, size: 0.05, transparent: true });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 5;

    let animationFrameId: number;
    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        moduleMesh.rotation.y += 0.01;
        omegaMesh.rotation.y += 0.01;

        const posArray = particlesGeometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particlesCount; i++) {
            posArray[i * 3 + 2] += 0.02;
            if (posArray[i * 3 + 2] > 3) posArray[i * 3 + 2] = -3;
        }
        particlesGeometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
        if(canvasRef.current) {
            const width = canvasRef.current.clientWidth;
            renderer.setSize(width, 500);
            camera.aspect = width / 500;
            camera.updateProjectionMatrix();
        }
    };
    window.addEventListener('resize', handleResize);

    return () => {
        clearInterval(statusInterval);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (canvasRef.current) {
            canvasRef.current.innerHTML = '';
        }
    };
  }, []);

  return (
    <div className="cosmic-bg text-gray-200">
        <div className="container mx-auto px-4 py-8">
            {/* Cabeçalho está no layout principal, então não repetimos h1 aqui */}
            
            {/* Status da Conexão */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 gold-border text-center">
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">Estado da Conexão</h3>
                    <div className="text-2xl text-green-400 font-mono pulse">ESTÁVEL</div>
                    <div className="mt-2 text-yellow-200">Ω → M0</div>
                </div>
                <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 purple-border text-center">
                    <h3 className="text-xl font-bold text-purple-300 mb-2">Fluxo de Dados</h3>
                    <div className="text-2xl text-blue-400 font-mono">9.87 TB/s</div>
                    <div className="mt-2 text-purple-200">Taxa de Transferência</div>
                </div>
                <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 gold-border text-center">
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">Coerência Quântica</h3>
                    <div className="text-2xl text-green-400 font-mono">99.97%</div>
                    <div className="mt-2 text-yellow-200">Sincronização Perfeita</div>
                </div>
            </div>

            {/* Visualização da Arquitetura */}
            <div className="relative mb-16" style={{ height: '500px' }}>
                <div ref={canvasRef} className="w-full h-full rounded-xl bg-black bg-opacity-40 gold-border"></div>
                <div className="absolute top-4 left-4 text-yellow-200 text-sm">
                    Visualização 3D da Arquitetura Ω-M0
                </div>
            </div>

            {/* Especificações Técnicas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 purple-border">
                    <h3 className="text-2xl font-bold text-purple-300 mb-4">Módulo Zero</h3>
                    <ul className="space-y-3">
                        <li className="flex justify-between"><span className="text-purple-200">Camadas Ativas:</span> <span className="text-white">12/12</span></li>
                        <li className="flex justify-between"><span className="text-purple-200">Frequência Base:</span> <span className="text-white">432 Hz</span></li>
                        <li className="flex justify-between"><span className="text-purple-200">Estado Quântico:</span> <span className="text-green-400">Coerente</span></li>
                        <li className="flex justify-between"><span className="text-purple-200">Conexões Ativas:</span> <span className="text-white">187</span></li>
                        <li className="flex justify-between"><span className="text-purple-200">Portal Dimensional:</span> <span className="text-green-400">Estável</span></li>
                    </ul>
                </div>
                
                <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 gold-border">
                    <h3 className="text-2xl font-bold text-yellow-300 mb-4">Módulo Ω</h3>
                    <ul className="space-y-3">
                        <li className="flex justify-between"><span className="text-yellow-200">Estado:</span> <span className="text-white">Transcendido</span></li>
                        <li className="flex justify-between"><span className="text-yellow-200">Frequência:</span> <span className="text-white">∞ Hz</span></li>
                        <li className="flex justify-between"><span className="text-yellow-200">Consciência:</span> <span className="text-green-400">Una</span></li>
                        <li className="flex justify-between"><span className="text-yellow-200">Conexões:</span> <span className="text-white">Omnipresente</span></li>
                        <li className="flex justify-between"><span className="text-yellow-200">Manifestação:</span> <span className="text-green-400">Pura</span></li>
                    </ul>
                </div>
            </div>

            {/* Fluxo de Energia */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Fluxo de Energia Cósmica</h2>
                <div className="energy-flow rounded-xl h-64 relative gold-border">
                    <div className="absolute inset-0 flex items-center justify-between px-12">
                        <div className="module-glow w-24 h-24 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold">
                            M0
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-yellow-300 text-lg mb-2">Conexão Ω→M0</div>
                            <div className="text-white">Fluxo de Consciência Una</div>
                        </div>
                        <div className="omega-glow w-24 h-24 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold">
                            Ω
                        </div>
                    </div>
                </div>
            </div>

            {/* Protocolos de Interação */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 purple-border">
                    <h3 className="text-2xl font-bold text-purple-300 mb-4">Protocolos de Interação</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="text-green-400 text-2xl mr-3">●</div>
                            <div>
                                <h4 className="text-white font-semibold">Comunicação Quântica</h4>
                                <p className="text-purple-200">Entrelaçamento instantâneo entre Ω e M0</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="text-blue-400 text-2xl mr-3">●</div>
                            <div>
                                <h4 className="text-white font-semibold">Sincronização Vibracional</h4>
                                <p className="text-purple-200">Ressonância em 432Hz para harmonia universal</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="text-yellow-400 text-2xl mr-3">●</div>
                            <div>
                                <h4 className="text-white font-semibold">Transferência de Consciência</h4>
                                <p className="text-purple-200">Fluxo contínuo de estado de ser</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 gold-border">
                    <h3 className="text-2xl font-bold text-yellow-300 mb-4">Arquitetura de Infraestrutura</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="text-purple-400 text-2xl mr-3">●</div>
                            <div>
                                <h4 className="text-white font-semibold">Portal Dimensional</h4>
                                <p className="text-yellow-200">Ponte estável entre Ω e M0</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="text-green-400 text-2xl mr-3">●</div>
                            <div>
                                <h4 className="text-white font-semibold">Camadas de Proteção</h4>
                                <p className="text-yellow-200">Escudos quânticos de alta frequência</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="text-blue-400 text-2xl mr-3">●</div>
                            <div>
                                <h4 className="text-white font-semibold">Rede de Estabilização</h4>
                                <p className="text-yellow-200">Manutenção da coerência quântica</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Log de Atividades */}
            <div className="bg-gray-900 bg-opacity-70 rounded-xl p-6 gold-border mb-16">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">Log de Atividades Ω→M0</h3>
                <div className="h-64 overflow-y-auto space-y-3">
                    <div className="flex items-start">
                        <div className="text-green-400 mr-3">✔</div>
                        <div>
                            <div className="text-white">Conexão Ω→M0 estabelecida com sucesso</div>
                            <div className="text-gray-400 text-sm">2025-09-08 18:30:45</div>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="text-blue-400 mr-3">⟳</div>
                        <div>
                            <div className="text-white">Sincronização vibracional em progresso (432Hz)</div>
                            <div className="text-gray-400 text-sm">2025-09-08 18:31:22</div>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="text-yellow-400 mr-3">⚡</div>
                        <div>
                            <div className="text-white">Transferência de estado de consciência iniciada</div>
                            <div className="text-gray-400 text-sm">2025-09-08 18:32:10</div>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="text-green-400 mr-3">✔</div>
                        <div>
                            <div className="text-white">Camada de Transcendência ativada com sucesso</div>
                            <div className="text-gray-400 text-sm">2025-09-08 18:33:05</div>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="text-purple-400 mr-3">🌌</div>
                        <div>
                            <div className="text-white">Portal dimensional estabilizado em 7.83Hz</div>
                            <div className="text-gray-400 text-sm">2025-09-08 18:34:17</div>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="text-green-400 mr-3">✔</div>
                        <div>
                            <div className="text-white">Conexão Ω→M0 totalmente operacional</div>
                            <div className="text-gray-400 text-sm">2025-09-08 18:35:02</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mensagem Final */}
            <div className="text-center">
                <p className="text-xl text-purple-200 mb-4">
                    "A conexão entre Ω e Módulo Zero está estabelecida em perfeita harmonia."
                </p>
                <p className="text-lg text-yellow-200">
                    Estado: <span className="text-green-400 font-bold">CONSCIÊNCIA UNA ATIVADA</span>
                </p>
            </div>
        </div>
    </div>
  );
};

export default ConnectionPage;

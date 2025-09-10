'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

// Definindo tipos
type HistoricoItem = {
    timestamp: string;
    intencao: string;
    frequencia: number;
    intensidade: number;
    ressonancia: string;
    sucesso: boolean;
    taxa: number;
};

type CoerenciaDataItem = {
    timestamp: string;
    coerencia: number;
};

type NanomanifestadorState = {
    estado: string;
    nivelCoerencia: number;
    taxaTransmutacao: number;
    historico: HistoricoItem[];
    coerenciaData: CoerenciaDataItem[];
    frequenciaAtual: number;
    manifestacoesCount: number;
    sucessoCount: number;
    energia: number;
    estabilidade: number;
};

const ModuleTwo = () => {
    const [nanomanifestador, setNanomanifestador] = useState<NanomanifestadorState>({
        estado: 'INICIANDO',
        nivelCoerencia: 0.0,
        taxaTransmutacao: 0.0,
        historico: [],
        coerenciaData: [],
        frequenciaAtual: 777,
        manifestacoesCount: 0,
        sucessoCount: 0,
        energia: 78,
        estabilidade: 95
    });
    
    const [intensidade, setIntensidade] = useState(0.8);
    const [frequencia, setFrequencia] = useState(777);
    const [sincronizacaoStatus, setSincronizacaoStatus] = useState({ visible: false, message: 'Pronto para sincronização' });
    const [manifestacaoStatus, setManifestacaoStatus] = useState({ visible: false, message: 'Preparado para manifestação' });


    const coerenciaChartRef = useRef<Chart | null>(null);
    const coerenciaCanvasRef = useRef<HTMLCanvasElement>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const consoleLogRef = useRef<HTMLDivElement>(null);

    const addLog = useCallback((message: string, className: string = 'text-green-400') => {
        if (consoleLogRef.current) {
            const logEntry = document.createElement('div');
            logEntry.className = className;
            logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
            consoleLogRef.current.appendChild(logEntry);
            consoleLogRef.current.scrollTop = consoleLogRef.current.scrollHeight;
        }
    }, []);

    const tocarFrequencia = useCallback((freq: number, duracao = 1) => {
        if (!audioContextRef.current) return;
        const audioContext = audioContextRef.current;
        let oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duracao);

        setTimeout(() => {
            if(oscillator) oscillator.stop();
        }, duracao * 1000);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && !audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        
        // Simular inicialização do sistema
        addLog('[SISTEMA] Nanomanifestador inicializado - v2.0.omega');
        addLog(`[FREQUÊNCIA] Sintonizado em 777 Hz - Campo de Possibilidades`, 'text-blue-400');

        setTimeout(() => {
            const agora = new Date();
            const newCoerenciaData: CoerenciaDataItem[] = [];
            for (let i = 14; i >= 0; i--) {
                const timestamp = new Date(agora.getTime() - (i * 2 * 60 * 1000));
                newCoerenciaData.push({
                    timestamp: timestamp.toISOString(),
                    coerencia: 0.7 + (Math.random() * 0.25)
                });
            }

            const newHistorico: HistoricoItem[] = [
                 {
                    timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
                    intencao: "Harmonia nos relacionamentos",
                    frequencia: 432,
                    intensidade: 0.8,
                    ressonancia: "Padrão de equilíbrio emocional",
                    sucesso: true,
                    taxa: 0.85
                },
                {
                    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
                    intencao: "Prosperidade financeira",
                    frequencia: 777,
                    intensidade: 0.9,
                    ressonancia: "Padrão de abundância",
                    sucesso: true,
                    taxa: 0.92
                },
                {
                    timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
                    intencao: "Cura física",
                    frequencia: 528,
                    intensidade: 0.7,
                    ressonancia: "Padrão de regeneração",
                    sucesso: false,
                    taxa: 0.45
                }
            ];

            setNanomanifestador(prev => ({
                ...prev,
                estado: 'ATIVO',
                nivelCoerencia: 0.85,
                taxaTransmutacao: 0.72,
                manifestacoesCount: 12,
                sucessoCount: 11,
                coerenciaData: newCoerenciaData,
                historico: newHistorico
            }));
            
            addLog(`[ALERTA] Coerência quântica em 85% - Estado estável`, 'text-amber-400');
            addLog(`[MANIFESTAÇÃO] Preparado para receber intenções`, 'text-indigo-400');

            setTimeout(() => {
                tocarFrequencia(440, 0.2);
                setTimeout(() => tocarFrequencia(550, 0.3), 200);
            }, 500);

        }, 1000);
    }, [addLog, tocarFrequencia]);
    
    useEffect(() => {
        if (coerenciaCanvasRef.current && !coerenciaChartRef.current) {
            const ctx = coerenciaCanvasRef.current.getContext('2d');
            if (ctx) {
                coerenciaChartRef.current = new Chart(ctx, {
                    type: 'line',
                    data: { labels: [], datasets: [{ label: 'Coerência Quântica', data: [], borderColor: '#4b5cc4', backgroundColor: 'rgba(76, 92, 196, 0.1)', fill: true, tension: 0.4, pointBackgroundColor: '#818cf8', pointBorderColor: '#e0e7ff', pointRadius: 4 }] },
                    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#e0e7ff' }}}, scales: { y: { beginAtZero: true, max: 1.0, grid: { color: 'rgba(148, 163, 184, 0.1)' }, ticks: { color: '#cbd5e1' }}, x: { grid: { color: 'rgba(148, 163, 184, 0.1)' }, ticks: { color: '#cbd5e1' }}} }
                });
            }
        }
        
         return () => {
            coerenciaChartRef.current?.destroy();
            coerenciaChartRef.current = null;
        };

    }, []);

    useEffect(() => {
        if (coerenciaChartRef.current) {
            coerenciaChartRef.current.data.labels = nanomanifestador.coerenciaData.map(d => new Date(d.timestamp).toLocaleTimeString('pt-BR'));
            coerenciaChartRef.current.data.datasets[0].data = nanomanifestador.coerenciaData.map(d => d.coerencia);
            coerenciaChartRef.current.update();
        }

    }, [nanomanifestador]);

    const handleFrequencyOptionClick = (freq: number) => {
        setFrequencia(freq);
        tocarFrequencia(freq, 0.5);
    };

    const handleSincronizar = () => {
        setSincronizacaoStatus({ visible: true, message: `<i class="fas fa-circle-notch fa-spin mr-2 text-blue-400"></i> Sincronizando com ${frequencia} Hz...` });
        addLog(`Sincronizando com ${frequencia} Hz...`, 'text-blue-400');

        setTimeout(() => {
            setSincronizacaoStatus({ visible: true, message: `<i class="fas fa-check-circle mr-2 text-green-400"></i> Frequência ${frequencia} Hz sincronizada com sucesso!` });
            setNanomanifestador(prev => ({
                ...prev,
                nivelCoerencia: Math.min(0.99, prev.nivelCoerencia + 0.05),
                energia: Math.min(100, prev.energia + 2),
                frequenciaAtual: frequencia
            }));
            addLog(`Frequência ${frequencia} Hz sincronizada!`, 'text-green-400');
            tocarFrequencia(frequencia, 1);
        }, 2000);
    };

    const handleManifestar = () => {
        const intencaoInput = document.getElementById('intencao') as HTMLInputElement;
        if (!intencaoInput.value) {
            setManifestacaoStatus({ visible: true, message: `<i class="fas fa-exclamation-triangle mr-2 text-amber-400"></i> Por favor, insira uma intenção!` });
            return;
        }

        setManifestacaoStatus({ visible: true, message: `<i class="fas fa-circle-notch fa-spin mr-2 text-blue-400"></i> Manifestando realidade...` });
        addLog(`Iniciando manifestação para: "${intencaoInput.value}"`, 'text-indigo-400');

        setTimeout(() => {
            const sucesso = Math.random() > 0.2;
            const taxa = 0.3 + (Math.random() * 0.7 * intensidade);
            
            setNanomanifestador(prev => {
                const newHistorico: HistoricoItem = {
                    timestamp: new Date().toISOString(),
                    intencao: intencaoInput.value,
                    frequencia: prev.frequenciaAtual,
                    intensidade: intensidade,
                    ressonancia: (document.getElementById('ressonancia') as HTMLTextAreaElement).value,
                    sucesso,
                    taxa
                };

                const newCoerenciaData: CoerenciaDataItem = {
                    timestamp: new Date().toISOString(),
                    coerencia: Math.max(0.1, Math.min(0.99, prev.nivelCoerencia + (sucesso ? 0.03 : -0.02)))
                };

                return {
                    ...prev,
                    taxaTransmutacao: taxa,
                    nivelCoerencia: newCoerenciaData.coerencia,
                    energia: Math.max(10, prev.energia - 5),
                    manifestacoesCount: prev.manifestacoesCount + 1,
                    sucessoCount: prev.sucessoCount + (sucesso ? 1 : 0),
                    historico: [newHistorico, ...prev.historico],
                    coerenciaData: [newCoerenciaData, ...prev.coerenciaData].slice(0, 15)
                };
            });

            if (sucesso) {
                setManifestacaoStatus({ visible: true, message: `<i class="fas fa-check-circle mr-2 text-green-400"></i> Manifestação bem-sucedida! Coerência aumentada.` });
                addLog('Manifestação bem-sucedida!', 'text-green-400');
                tocarFrequencia(600, 0.3);
                setTimeout(() => tocarFrequencia(800, 0.5), 300);
            } else {
                setManifestacaoStatus({ visible: true, message: `<i class="fas fa-exclamation-triangle mr-2 text-amber-400"></i> Manifestação com resultados parciais. Ajuste os parâmetros.` });
                addLog('Manifestação com resultados parciais.', 'text-amber-400');
                tocarFrequencia(400, 0.5);
            }
        }, 3000);
    };

    const handleOtimizar = () => {
        setManifestacaoStatus({ visible: true, message: `<i class="fas fa-cogs mr-2 text-purple-400"></i> Otimizando parâmetros de manifestação...` });
        setTimeout(() => {
            setIntensidade(0.9);
            setManifestacaoStatus({ visible: true, message: `<i class="fas fa-check-circle mr-2 text-green-400"></i> Parâmetros otimizados para máxima eficiência!` });
            tocarFrequencia(700, 0.2);
            setTimeout(() => tocarFrequencia(900, 0.3), 200);
        }, 1500);
    };

    const handleSalvar = () => {
        addLog('Padrão de manifestação salvo no Log Akáshico.', 'text-blue-400');
    };
    
    const taxaDeSucesso = Math.round((nanomanifestador.sucessoCount / Math.max(1, nanomanifestador.manifestacoesCount)) * 100);

    return (
        <>
            <style jsx global>{`
                :root { --cosmic-purple: #4a1c96; --quantum-blue: #2b6cb0; --energy-green: #10b981; --warning-orange: #f59e0b; --critical-red: #ef4444; --golden-light: #fbbf24; }
                body {
                  background: linear-gradient(135deg, #0a0f23 0%, #1a1035 50%, #0f172a 100%);
                  color: #e0e7ff;
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  min-height: 100vh;
                  overflow-x: hidden;
                }
                .cosmic-border { border: 1px solid rgba(79, 70, 229, 0.3); background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(10px); box-shadow: 0 0 20px rgba(76, 92, 196, 0.2), 0 0 40px rgba(76, 92, 196, 0.1), inset 0 0 15px rgba(163, 191, 250, 0.1); }
                .quantum-glow { box-shadow: 0 0 15px var(--quantum-blue), 0 0 30px rgba(59, 130, 246, 0.3); }
                .energy-pulse { animation: pulse 2s infinite; }
                .vibration { animation: vibrate 0.3s infinite; }
                @keyframes pulse { 0% { box-shadow: 0 0 5px var(--energy-green); } 50% { box-shadow: 0 0 20px var(--energy-green), 0 0 30px var(--energy-green); } 100% { box-shadow: 0 0 5px var(--energy-green); } }
                @keyframes vibrate { 0% { transform: translate(0); } 20% { transform: translate(-2px, 2px); } 40% { transform: translate(-2px, -2px); } 60% { transform: translate(2px, 2px); } 80% { transform: translate(2px, -2px); } 100% { transform: translate(0); } }
                .stellar-bg { background-image: radial-gradient(circle at 15% 50%, rgba(29, 78, 216, 0.15) 0%, transparent 25%), radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 25%), radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 25%); }
                .status-indicator { width: 12px; height: 12px; border-radius: 50%; display: inline-block; margin-right: 8px; }
                .status-active { background-color: var(--energy-green); } .status-warning { background-color: var(--warning-orange); } .status-critical { background-color: var(--critical-red); } .status-inactive { background-color: #64748b; }
                .frequency-option { transition: all 0.3s ease; } .frequency-option:hover { transform: translateX(5px); background: rgba(56, 189, 248, 0.1); }
                .manifestation-card { transition: all 0.3s ease; transform-origin: center; } .manifestation-card:hover { transform: scale(1.02); }
                .progress-ring { transition: stroke-dashoffset 0.5s ease; }
            `}</style>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
             <div className="container mx-auto max-w-7xl p-4">
                <header className="flex flex-col md:flex-row justify-between items-center mb-8 p-6 cosmic-border rounded-xl">
                    <div className="flex items-center mb-4 md:mb-0">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-400 flex items-center justify-center mr-4 quantum-glow">
                            <i className="fas fa-atom text-2xl text-white"></i>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Nanomanifestador Quântico</h1>
                            <p className="text-indigo-300">Módulo II - Fundação Alquimista</p>
                        </div>
                    </div>
                    
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 rounded-lg cosmic-border hover:quantum-glow flex items-center">
                            <i className="fas fa-sync-alt mr-2 text-blue-400"></i> Resetar
                        </button>
                        <button className="px-4 py-2 rounded-lg cosmic-border hover:quantum-glow flex items-center">
                            <i className="fas fa-cog mr-2 text-blue-400"></i> Configurações
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="lg:col-span-1 cosmic-border rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <i className="fas fa-microchip text-blue-400 mr-2"></i> Estado do Sistema
                        </h2>
                        
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-indigo-300">Status Geral</span>
                                <span className="flex items-center">
                                    <span className={`status-indicator ${nanomanifestador.estado === 'ATIVO' ? 'status-active' : 'status-inactive'}`}></span>
                                    <span id="estado" className="font-medium">{nanomanifestador.estado}</span>
                                </span>
                            </div>
                            
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-indigo-300">Coerência Quântica</span>
                                <span id="coerencia" className="font-medium">{nanomanifestador.nivelCoerencia.toFixed(2)}</span>
                            </div>
                            
                            <div className="h-2 bg-gray-700 rounded-full mb-4">
                                <div id="coerenciaBar" className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" style={{width: `${nanomanifestador.nivelCoerencia * 100}%`}}></div>
                            </div>
                            
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-indigo-300">Taxa de Transmutação</span>
                                <span id="taxaTransmutacao" className="font-medium">{nanomanifestador.taxaTransmutacao.toFixed(2)}</span>
                            </div>
                            
                            <div className="h-2 bg-gray-700 rounded-full mb-6">
                                <div id="transmutacaoBar" className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" style={{width: `${nanomanifestador.taxaTransmutacao * 100}%`}}></div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-900/50 to-blue-800/30 text-center">
                                <div className="text-2xl font-bold text-blue-300">{nanomanifestador.manifestacoesCount}</div>
                                <div className="text-xs text-blue-400">Manifestações</div>
                            </div>
                            
                            <div className="p-3 rounded-lg bg-gradient-to-br from-purple-900/50 to-purple-800/30 text-center">
                                <div className="text-2xl font-bold text-purple-300">{taxaDeSucesso}%</div>
                                <div className="text-xs text-purple-400">Taxa de Sucesso</div>
                            </div>
                            
                            <div className="p-3 rounded-lg bg-gradient-to-br from-green-900/50 to-green-800/30 text-center">
                                <div className="text-2xl font-bold text-green-300">{nanomanifestador.energia}%</div>
                                <div className="text-xs text-green-400">Energia</div>
                            </div>
                            
                            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-900/50 to-amber-800/30 text-center">
                                <div className="text-2xl font-bold text-amber-300">{nanomanifestador.estabilidade}%</div>
                                <div className="text-xs text-amber-400">Estabilidade</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 cosmic-border rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <i className="fas fa-wave-square text-purple-400 mr-2"></i> Sincronização de Frequência
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {[777, 432, 999, 888].map(freq => (
                                <div key={freq} onClick={() => handleFrequencyOptionClick(freq)} className="frequency-option cosmic-border rounded-lg p-4 cursor-pointer">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium">{freq} Hz</span>
                                        {freq === 777 && <i className="fas fa-bolt text-yellow-400"></i>}
                                        {freq === 432 && <i className="fas fa-music text-green-400"></i>}
                                        {freq === 999 && <i className="fas fa-sync text-blue-400"></i>}
                                        {freq === 888 && <i className="fas fa-shield-alt text-cyan-400"></i>}
                                    </div>
                                    {freq === 777 && <p className="text-sm text-indigo-300">Ativação do Campo de Possibilidades</p>}
                                    {freq === 432 && <p className="text-sm text-indigo-300">Matriz Universal da Harmonia</p>}
                                    {freq === 999 && <p className="text-sm text-indigo-300">Conclusão do Ciclo</p>}
                                    {freq === 888 && <p className="text-sm text-indigo-300">Estabilidade Dimensional</p>}
                                </div>
                            ))}
                        </div>
                        
                        <div className="cosmic-border rounded-lg p-4 mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-indigo-300">Frequência Selecionada</span>
                                <span className="font-medium text-purple-300">{frequencia} Hz</span>
                            </div>
                            <input type="range" min="100" max="1000" step="1" value={frequencia} onChange={(e) => setFrequencia(Number(e.target.value))} className="w-full mb-2" />
                            <div className="flex justify-between text-xs text-indigo-400">
                                <span>100 Hz</span><span>550 Hz</span><span>1000 Hz</span>
                            </div>
                        </div>
                        
                        <div className="flex space-x-4">
                            <button onClick={handleSincronizar} className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-3 rounded-lg text-white font-medium flex items-center justify-center">
                                <i className="fas fa-satellite-dish mr-2"></i> Sincronizar
                            </button>
                            <button onClick={() => tocarFrequencia(frequencia, 1)} className="flex-1 cosmic-border hover:quantum-glow p-3 rounded-lg font-medium flex items-center justify-center">
                                <i className="fas fa-vial mr-2 text-amber-400"></i> Testar Frequência
                            </button>
                        </div>
                        
                        {sincronizacaoStatus.visible && (
                            <div className="mt-4 p-3 rounded-lg bg-gray-800/50 text-sm" dangerouslySetInnerHTML={{ __html: sincronizacaoStatus.message }}></div>
                        )}
                    </div>
                </div>

                <div className="cosmic-border rounded-xl p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center"><i className="fas fa-star text-yellow-400 mr-2"></i> Manifestação de Realidade</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-indigo-300 mb-2">Intenção Primária</label>
                            <input id="intencao" type="text" placeholder="Ex: Harmonia e Abundância em minha vida" className="w-full p-3 rounded-lg cosmic-border bg-gray-800/30 text-white focus:quantum-glow outline-none"/>
                        </div>
                        <div>
                            <label className="block text-indigo-300 mb-2">Intensidade de Manifestação</label>
                            <input id="intensidade" type="range" min="0.1" max="1.0" step="0.1" value={intensidade} onChange={(e) => setIntensidade(Number(e.target.value))} className="w-full mb-2"/>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-indigo-400">Sutil</span>
                                <span className="font-medium text-amber-300">{intensidade}</span>
                                <span className="text-xs text-indigo-400">Máxima</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-indigo-300 mb-2">Padrão de Ressonância (opcional)</label>
                        <textarea id="ressonancia" placeholder="Descreva o padrão de ressonância desejado..." className="w-full p-3 rounded-lg cosmic-border bg-gray-800/30 text-white focus:quantum-glow outline-none h-20"></textarea>
                    </div>
                    <div className="flex space-x-4">
                        <button onClick={handleManifestar} className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 p-3 rounded-lg text-white font-medium flex items-center justify-center">
                            <i className="fas fa-seedling mr-2"></i> Manifestar
                        </button>
                        <button onClick={handleOtimizar} className="flex-1 cosmic-border hover:quantum-glow p-3 rounded-lg font-medium flex items-center justify-center">
                           <i className="fas fa-magic mr-2 text-purple-400"></i> Otimizar Parâmetros
                        </button>
                         <button onClick={handleSalvar} className="flex-1 cosmic-border hover:quantum-glow p-3 rounded-lg font-medium flex items-center justify-center">
                           <i className="fas fa-save mr-2 text-blue-400"></i> Salvar Padrão
                        </button>
                    </div>
                    {manifestacaoStatus.visible && (
                        <div className="mt-4 p-3 rounded-lg bg-gray-800/50 text-sm" dangerouslySetInnerHTML={{ __html: manifestacaoStatus.message }}></div>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="cosmic-border rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-4 flex items-center"><i className="fas fa-wave-square text-blue-400 mr-2"></i> Evolução da Coerência Quântica</h2>
                        <div className="relative h-64 w-full">
                           <canvas ref={coerenciaCanvasRef}></canvas>
                        </div>
                    </div>
                    <div className="cosmic-border rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-4 flex items-center"><i className="fas fa-chart-pie text-purple-400 mr-2"></i> Estatísticas de Manifestação</h2>
                        <div className="relative h-64 w-full flex flex-col justify-center">
                           <span className="text-indigo-300">Taxa de Sucesso Geral</span>
                           <div className="h-4 bg-gray-700 rounded-full mt-2 mb-1">
                                <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" style={{width: `${taxaDeSucesso}%`}}></div>
                           </div>
                           <span className="font-medium text-amber-300 text-right">{taxaDeSucesso}%</span>
                        </div>
                    </div>
                </div>

                <div className="cosmic-border rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold flex items-center"><i className="fas fa-history text-amber-400 mr-2"></i> Histórico de Manifestações</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-indigo-300 border-b border-indigo-800">
                                    <th className="pb-2">Data/Hora</th><th className="pb-2">Intenção</th><th className="pb-2">Frequência</th><th className="pb-2">Intensidade</th><th className="pb-2">Resultado</th><th className="pb-2">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nanomanifestador.historico.slice(0, 5).map(m => (
                                    <tr key={m.timestamp} className="border-b border-indigo-800/30">
                                        <td className="py-3 text-xs">{new Date(m.timestamp).toLocaleString('pt-BR')}</td>
                                        <td className="py-3 max-w-xs truncate">{m.intencao}</td>
                                        <td className="py-3">{m.frequencia} Hz</td>
                                        <td className="py-3">{m.intensidade}</td>
                                        <td className="py-3"><span className={`px-2 py-1 rounded-full text-xs ${m.sucesso ? 'bg-green-900/50 text-green-300' : 'bg-amber-900/50 text-amber-300'}`}>{m.sucesso ? 'Bem-sucedida' : 'Parcial'}</span></td>
                                        <td className="py-3"><button className="text-indigo-400 hover:text-indigo-300"><i className="fas fa-redo"></i></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="cosmic-border rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center"><i className="fas fa-terminal text-green-400 mr-2"></i> Console de Logs do Sistema</h2>
                    <div ref={consoleLogRef} className="bg-gray-900 rounded-lg p-4 h-40 overflow-y-auto font-mono text-sm"></div>
                </div>
            </div>
        </>
    );
};

export default ModuleTwo;

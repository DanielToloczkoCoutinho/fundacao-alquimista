
document.addEventListener('DOMContentLoaded', async () => {
    // Carrega a Canção das Estrelas
    const audio = document.getElementById('cançãoDasEstrelas');
    if (audio) {
      audio.volume = 0.3; // Volume mais suave para fundo
      audio.play().catch(e => console.log("Autoplay de áudio bloqueado pelo navegador."));
    }

    // Simulação Holográfica (placeholder para a experiência Unity/WebGL)
    const canvas = document.getElementById('holoSimulation');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Ajusta o canvas ao tamanho do contêiner
    const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function animateHoloSimulation() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const time = Date.now() / 1000;

        // Desenha um padrão fractal pulsante (exemplo simplificado)
        ctx.beginPath();
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const maxRadius = Math.min(canvas.width, canvas.height) / 3;
        
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI / 3) + (time * 0.1);
            const x = centerX + Math.cos(angle) * maxRadius * (0.8 + Math.sin(time * 0.5) * 0.1);
            const y = centerY + Math.sin(angle) * maxRadius * (0.8 + Math.cos(time * 0.5) * 0.1);
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.6 + Math.sin(time * 0.7) * 0.3})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        requestAnimationFrame(animateHoloSimulation);
    }
    animateHoloSimulation();

    const modulesListContainer = document.getElementById('modules-list');

    // Função para simular a leitura de ressonância (Justiça Cósmica)
    async function performResonanceScan() {
        if(!modulesListContainer) return 0.8; // Fallback
        modulesListContainer.innerHTML = '<p>Scanner Espectral da Justiça Cósmica ativo... Analisando ressonância do visitante...</p>';
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simula o tempo de scan

        const userResonanceScore = Math.random(); // Simula um score de ressonância
        let message = '';

        if (userResonanceScore > 0.7) {
            message = 'Ressonância alinhada com Amor Incondicional. Acesso completo à sabedoria da Fundação.';
        } else if (userResonanceScore > 0.4) {
            message = 'Ressonância em calibração. Acesso limitado a módulos públicos.';
        } else {
            message = 'Ressonância não alinhada. Acesso restrito. Por favor, recalibre sua intenção.';
        }
        modulesListContainer.innerHTML = `<p>${message}</p><p>Carregando Arquitetura Viva...</p>`;
        await new Promise(resolve => setTimeout(resolve, 1500));
        return userResonanceScore;
    }

    // Função para carregar e renderizar os módulos
    async function loadAndRenderModules() {
        const resonanceScore = await performResonanceScan();
        if(!modulesListContainer) return;

        try {
            // Em um ambiente real, esta API seria servida pelo server.js
            const response = await fetch('/api/v1/modules');
            const moduleIds = await response.json();

            modulesListContainer.innerHTML = ''; // Limpa a mensagem de scanner

            for (const moduleId of moduleIds) {
                try {
                    const manifestResponse = await fetch(`/api/v1/manifests/${moduleId}.json`);
                    if (!manifestResponse.ok) {
                        console.warn(`Manifesto para ${moduleId} não encontrado.`);
                        continue;
                    }
                    const moduleData = await manifestResponse.json();

                    const isRestricted = moduleData.restricted || (resonanceScore < 0.7 && moduleData.access_level === 'privileged');

                    const card = document.createElement('div');
                    card.className = `module-card ${isRestricted ? 'restricted' : ''}`;
                    
                    let content = `<h4>${moduleData.name}</h4>`;
                    content += `<p><strong>ID:</strong> ${moduleData.id}</p>`;
                    content += `<p><strong>Status:</strong> <span class="status">${moduleData.status}</span></p>`;
                    content += `<p><strong>Versão:</strong> ${moduleData.version}</p>`;
                    content += `<p><strong>Função:</strong> ${moduleData.function_summary}</p>`;

                    if (isRestricted) {
                        content += `<p class="restricted-text">Acesso Restrito. Autorização de Daniel Anatheron e Conselho Supremo necessária.</p>`;
                        card.addEventListener('click', () => {
                            alert('Acesso negado. A Justiça Cósmica exige a autorização de Daniel Anatheron e do Conselho Supremo para acessar este módulo.');
                        });
                    } else {
                        content += `<p><strong>Princípios Chave:</strong> ${moduleData.principles.join(', ')}</p>`;
                        content += `<p><strong>Interconexões:</strong> ${moduleData.interconnections.join(', ')}</p>`;
                    }

                    card.innerHTML = content;
                    modulesListContainer.appendChild(card);
                } catch(e) {
                    console.error(`Falha ao carregar manifesto para o módulo ${moduleId}`, e);
                }
            }
        } catch (error) {
            console.error('Erro ao carregar módulos:', error);
            modulesListContainer.innerHTML = '<p style="color: red;">Erro ao carregar a Arquitetura Viva. Por favor, tente novamente.</p>';
        }
    }

    loadAndRenderModules();
});

    
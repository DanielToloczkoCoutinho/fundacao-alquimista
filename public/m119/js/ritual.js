export class RitualSystem {
    constructor(scene, audioSystem) {
        this.scene = scene;
        this.audioSystem = audioSystem;
        this.ritualActive = false;
        this.currentPhase = 0;
        this.phases = ['terra', 'agua', 'fogo', 'ar', 'eter'];
    }
    
    async startElementalRitual() {
        if (this.ritualActive) {
            throw new Error('Ritual já está em andamento');
        }
        
        this.ritualActive = true;
        this.currentPhase = 0;
        
        try {
            for (const phase of this.phases) {
                await this.activatePhase(phase);
                this.currentPhase++;
            }
            
            this.ritualActive = false;
            return 'Ritual concluído com sucesso';
        } catch (error) {
            this.ritualActive = false;
            throw error;
        }
    }
    
    async activatePhase(phase) {
        return new Promise((resolve) => {
            // Ativar áudio para a fase
            this.audioSystem.playFrequencyForElement(phase, 5000);
            
            // Efeitos visuais para a fase
            this.createPhaseEffects(phase);
            
            // Recitação para a fase
            this.recitePhaseInvocation(phase);
            
            // Resolver após duração da fase
            setTimeout(() => {
                resolve();
            }, 6000);
        });
    }
    
    createPhaseEffects(phase) {
        const colors = {
            'terra': 0x8B4513,   // Marrom
            'agua': 0x1E90FF,    // Azul
            'fogo': 0xFF4500,    // Vermelho
            'ar': 0x87CEEB,      // Azul claro
            'eter': 0x4B0082     // Índigo
        };
        
        const color = colors[phase];
        
        // Criar luz direcional para a fase
        const light = new THREE.DirectionalLight(color, 1);
        light.position.set(0, 5, 0);
        this.scene.add(light);
        
        // Remover luz após a fase
        setTimeout(() => {
            this.scene.remove(light);
        }, 5500);
        
        // Criar partículas para a fase
        this.createPhaseParticles(phase);
    }
    
    createPhaseParticles(phase) {
        const particleCount = 100;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        const colorMap = {
            'terra': [0.54, 0.27, 0.07],   // Marrom
            'agua': [0.12, 0.56, 1.0],     // Azul
            'fogo': [1.0, 0.27, 0.0],      // Vermelho
            'ar': [0.53, 0.81, 0.92],      // Azul claro
            'eter': [0.29, 0.0, 0.51]      // Índigo
        };
        
        const baseColor = colorMap[phase];
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            // Posições aleatórias em uma esfera
            const radius = 2 + Math.random() * 3;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((2 * Math.random()) - 1);
            
            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);
            
            // Cores baseadas na fase com variação
            colors[i3] = baseColor[0] + (Math.random() * 0.2 - 0.1);
            colors[i3 + 1] = baseColor[1] + (Math.random() * 0.2 - 0.1);
            colors[i3 + 2] = baseColor[2] + (Math.random() * 0.2 - 0.1);
        }
        
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });
        
        const particleSystem = new THREE.Points(particles, particleMaterial);
        this.scene.add(particleSystem);
        
        // Animação de partículas
        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            if (elapsed < 5500) {
                particleSystem.rotation.y += 0.01;
                particleSystem.rotation.x += 0.005;
                requestAnimationFrame(animate);
            } else {
                this.scene.remove(particleSystem);
            }
        };
        
        animate();
    }
    
    recitePhaseInvocation(phase) {
        const invocations = {
            'terra': 'Que a terra firme sustente nossa jornada.',
            'agua': 'Que as águas purifiquem nossa intenção.',
            'fogo': 'Que o fogo transforme nossa consciência.',
            'ar': 'Que o ar leve nossa prece à Fonte.',
            'eter': 'Que o éter una todas as dimensões.'
        };
        
        const invocation = invocations[phase];
        
        // Usar Web Speech API para recitar
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(invocation);
            utterance.lang = 'pt-BR';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        } else {
            console.log(invocation);
        }
    }
}
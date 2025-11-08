export class AudioSystem {
    constructor() {
        this.audioContext = null;
        this.oscillators = new Map();
        this.backgroundGain = null;
        this.isInitialized = false;
        
        this.init();
    }
    
    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.backgroundGain = this.audioContext.createGain();
            this.backgroundGain.connect(this.audioContext.destination);
            this.isInitialized = true;
        } catch (e) {
            console.error('Erro ao inicializar áudio:', e);
        }
    }
    
    playBackgroundTone(frequency = 528) {
        if (!this.isInitialized) return;
        
        this.stopAllTones();
        
        // Criar oscilador para tom de fundo
        const oscillator = this.audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        
        // Configurar ganho
        const gainNode = this.audioContext.createGain();
        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        
        // Conectar nós
        oscillator.connect(gainNode);
        gainNode.connect(this.backgroundGain);
        
        // Iniciar e armazenar
        oscillator.start();
        this.oscillators.set('background', { oscillator, gainNode });
    }
    
    playBinauralTone(baseFrequency, deltaFrequency = 10) {
        if (!this.isInitialized) return;
        
        // Criar osciladores para efeito binaural
        const leftOscillator = this.audioContext.createOscillator();
        const rightOscillator = this.audioContext.createOscillator();
        
        leftOscillator.type = 'sine';
        rightOscillator.type = 'sine';
        
        leftOscillator.frequency.setValueAtTime(baseFrequency - deltaFrequency/2, this.audioContext.currentTime);
        rightOscillator.frequency.setValueAtTime(baseFrequency + deltaFrequency/2, this.audioContext.currentTime);
        
        // Criar panner para efeito estéreo
        const leftPanner = this.audioContext.createStereoPanner();
        const rightPanner = this.audioContext.createStereoPanner();
        
        leftPanner.pan.setValueAtTime(-1, this.audioContext.currentTime);
        rightPanner.pan.setValueAtTime(1, this.audioContext.currentTime);
        
        // Configurar ganho
        const gainNode = this.audioContext.createGain();
        gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
        
        // Conectar nós
        leftOscillator.connect(leftPanner);
        rightOscillator.connect(rightPanner);
        leftPanner.connect(gainNode);
        rightPanner.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Iniciar e armazenar
        leftOscillator.start();
        rightOscillator.start();
        
        const id = `binaural_${Date.now()}`;
        this.oscillators.set(id, { 
            leftOscillator, 
            rightOscillator, 
            leftPanner, 
            rightPanner, 
            gainNode 
        });
        
        return id;
    }
    
    stopTone(id) {
        if (this.oscillators.has(id)) {
            const { 
                leftOscillator, 
                rightOscillator, 
                gainNode 
            } = this.oscillators.get(id);
            
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.5);
            
            setTimeout(() => {
                if (leftOscillator) leftOscillator.stop();
                if (rightOscillator) rightOscillator.stop();
                this.oscillators.delete(id);
            }, 500);
        }
    }
    
    stopAllTones() {
        this.oscillators.forEach((value, id) => {
            this.stopTone(id);
        });
    }
    
    playFrequencyForElement(element, duration = 5000) {
        const frequencies = {
            'terra': 174,
            'agua': 528,
            'fogo': 639,
            'ar': 741,
            'eter': 963
        };
        
        const frequency = frequencies[element.toLowerCase()];
        if (!frequency) return;
        
        const id = this.playBinauralTone(frequency, 7);
        
        // Parar após a duração especificada
        setTimeout(() => {
            this.stopTone(id);
        }, duration);
        
        return id;
    }
}
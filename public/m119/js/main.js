import { TemplumVR } from './templum.js';
import { AudioSystem } from './audio.js';
import { MandalaSystem } from './mandalas.js';
import { PortalSystem } from './portais.js';
import { RitualSystem } from './ritual.js';
import { SecuritySystem } from './security.js';

class TemplumVRApp {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.controls = null;
        this.clock = new THREE.Clock();
        
        this.templum = null;
        this.audioSystem = null;
        this.mandalaSystem = null;
        this.portalSystem = null;
        this.ritualSystem = null;
        this.securitySystem = null;
        
        this.isVRMode = false;
        this.currentFrequency = 528;
        this.currentCoherence = 0.95;
        
        this.init();
    }
    
    init() {
        // Configurar renderizador
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.xr.enabled = true;
        document.getElementById('vr-container').appendChild(this.renderer.domElement);
        
        // Configurar cena
        this.scene.background = new THREE.Color(0x000000);
        this.addLights();
        
        // Configurar câmera
        this.camera.position.set(0, 1.6, 5);
        
        // Inicializar sistemas
        this.audioSystem = new AudioSystem();
        this.mandalaSystem = new MandalaSystem(this.scene);
        this.portalSystem = new PortalSystem(this.scene);
        this.ritualSystem = new RitualSystem(this.scene, this.audioSystem);
        this.securitySystem = new SecuritySystem();
        
        // Configurar controles
        this.setupControls();
        
        // Configurar eventos
        this.setupEvents();
        
        // Iniciar animação
        this.animate();
        
        // Verificar suporte a WebXR
        this.checkXRSupport();
    }
    
    addLights() {
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        this.scene.add(directionalLight);
        
        // Luzes especiais para efeito espiritual
        const pointLight1 = new THREE.PointLight(0x4a154b, 2, 20);
        pointLight1.position.set(0, 3, 0);
        this.scene.add(pointLight1);
        
        const pointLight2 = new THREE.PointLight(0x154b4a, 2, 20);
        pointLight2.position.set(3, 3, 3);
        this.scene.add(pointLight2);
    }
    
    setupControls() {
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 1.6, 0);
        this.controls.update();
    }
    
    setupEvents() {
        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        
        document.getElementById('enterVR').addEventListener('click', () => {
            this.enterVR();
        });
        
        document.getElementById('ritualButton').addEventListener('click', () => {
            this.startRitual();
        });
    }
    
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    checkXRSupport() {
        if ('xr' in navigator) {
            navigator.xr.isSessionSupported('immersive-vr')
                .then(supported => {
                    if (supported) {
                        document.getElementById('enterVR').disabled = false;
                        document.getElementById('status').innerHTML = '<p>VR suportado. Clique para entrar.</p>';
                    } else {
                        document.getElementById('status').innerHTML = '<p>VR não suportado. Usando modo desktop.</p>';
                    }
                });
        } else {
            document.getElementById('status').innerHTML = '<p>WebXR não suportado. Usando modo desktop.</p>';
        }
    }
    
    enterVR() {
        if (this.isVRMode) return;
        
        const sessionInit = { optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking'] };
        
        this.renderer.xr.setSession(navigator.xr.requestSession('immersive-vr', sessionInit))
            .then(() => {
                this.isVRMode = true;
                document.getElementById('enterVR').textContent = 'Sair do VR';
                document.getElementById('ritualButton').disabled = false;
                document.getElementById('status').innerHTML = '<p>Modo VR ativo.</p>';
                
                // Iniciar sistemas específicos de VR
                this.audioSystem.playBackgroundTone(528);
                this.mandalaSystem.generateInitialMandala();
            })
            .catch(err => {
                console.error('Erro ao iniciar VR:', err);
                document.getElementById('status').innerHTML = '<p>Erro ao iniciar VR.</p>';
            });
    }
    
    startRitual() {
        if (!this.isVRMode) return;
        
        this.ritualSystem.startElementalRitual()
            .then(result => {
                document.getElementById('status').innerHTML = `<p>Ritual concluído: ${result}</p>`;
                
                // Ativar portais após ritual
                this.portalSystem.activatePortal('temporal');
                this.updateHUD('portal-display', 'Temporal');
            })
            .catch(err => {
                console.error('Erro no ritual:', err);
            });
    }
    
    updateHUD(elementId, value) {
        document.getElementById(elementId).textContent = value;
    }
    
    animate() {
        this.renderer.setAnimationLoop(() => {
            const delta = this.clock.getDelta();
            
            // Atualizar sistemas
            if (this.mandalaSystem) this.mandalaSystem.update(delta);
            if (this.portalSystem) this.portalSystem.update(delta);
            
            // Renderizar cena
            this.renderer.render(this.scene, this.camera);
        });
    }
}

// Inicializar aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', ()
export class PortalSystem {
    constructor(scene) {
        this.scene = scene;
        this.portals = new Map();
        this.activePortal = null;
    }
    
    createPortal(type, position) {
        let portalGeometry, portalMaterial;
        
        switch(type) {
            case 'temporal':
                portalGeometry = new THREE.CylinderGeometry(1.5, 1.5, 0.1, 32);
                portalMaterial = new THREE.MeshPhongMaterial({
                    color: 0x154b9c,
                    emissive: 0x153c7a,
                    transparent: true,
                    opacity: 0.9,
                    side: THREE.DoubleSide
                });
                break;
                
            case 'dimensional':
                portalGeometry = new THREE.TorusGeometry(1.5, 0.2, 16, 100);
                portalMaterial = new THREE.MeshPhongMaterial({
                    color: 0x9c154b,
                    emissive: 0x7a153c,
                    transparent: true,
                    opacity: 0.9,
                    side: THREE.DoubleSide
                });
                break;
                
            default:
                portalGeometry = new THREE.RingGeometry(1, 1.5, 32);
                portalMaterial = new THREE.MeshPhongMaterial({
                    color: 0x4a154b,
                    emissive: 0x3a153c,
                    transparent: true,
                    opacity: 0.9,
                    side: THREE.DoubleSide
                });
        }
        
        const portal = new THREE.Mesh(portalGeometry, portalMaterial);
        portal.position.set(position.x, position.y, position.z);
        portal.userData.type = type;
        
        // Adicionar efeito de partículas ao portal
        this.addPortalParticles(portal);
        
        this.scene.add(portal);
        this.portals.set(type, portal);
        
        return portal;
    }
    
    addPortalParticles(portal) {
        const particleCount = 200;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const radius = 1.8;
            const angle = Math.random() * Math.PI * 2;
            
            positions[i3] = Math.cos(angle) * radius;
            positions[i3 + 1] = (Math.random() - 0.5) * 0.5;
            positions[i3 + 2] = Math.sin(angle) * radius;
            
            // Cores baseadas no tipo de portal
            if (portal.userData.type === 'temporal') {
                colors[i3] = 0.2 + Math.random() * 0.3;     // R
                colors[i3 + 1] = 0.3 + Math.random() * 0.4; // G
                colors[i3 + 2] = 0.6 + Math.random() * 0.4; // B
            } else {
                colors[i3] = 0.6 + Math.random() * 0.4;     // R
                colors[i3 + 1] = 0.2 + Math.random() * 0.3; // G
                colors[i3 + 2] = 0.3 + Math.random() * 0.4; // B
            }
        }
        
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.7
        });
        
        const particleSystem = new THREE.Points(particles, particleMaterial);
        portal.add(particleSystem);
        portal.userData.particles = particleSystem;
    }
    
    activatePortal(type) {
        if (!this.portals.has(type)) {
            // Criar portal se não existir
            const position = this.getPortalPosition(type);
            this.createPortal(type, position);
        }
        
        this.activePortal = this.portals.get(type);
        
        // Animar portal
        this.animatePortalActivation(this.activePortal);
        
        return this.activePortal;
    }
    
    getPortalPosition(type) {
        // Posicionar portais em locais específicos
        switch(type) {
            case 'temporal':
                return new THREE.Vector3(-5, 1.5, -5);
            case 'dimensional':
                return new THREE.Vector3(5, 1.5, -5);
            default:
                return new THREE.Vector3(0, 1.5, -8);
        }
    }
    
    animatePortalActivation(portal) {
        // Configurar animação de ativação
        portal.scale.set(0.1, 0.1, 0.1);
        
        const targetScale = 1;
        const duration = 2000; // 2 segundos
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-out quad function for smooth animation
            const scale = progress * (2 - progress);
            
            portal.scale.set(scale, scale, scale);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    }
    
    update(delta) {
        // Atualizar animações dos portais
        this.portals.forEach(portal => {
            if (portal.userData.particles) {
                portal.userData.particles.rotation.y += delta * 0.5;
            }
            
            portal.rotation.y += delta * 0.2;
        });
    }
}
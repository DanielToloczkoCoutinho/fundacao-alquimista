export class MandalaSystem {
    constructor(scene) {
        this.scene = scene;
        this.mandalas = [];
        this.currentMandala = null;
    }
    
    generateInitialMandala() {
        // Criar mandala base com geometria sagrada
        const geometry = new THREE.RingGeometry(1, 5, 64);
        const material = new THREE.MeshPhongMaterial({
            color: 0x4a154b,
            emissive: 0x154b4a,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        });
        
        this.currentMandala = new THREE.Mesh(geometry, material);
        this.currentMandala.rotation.x = -Math.PI / 2;
        this.currentMandala.position.y = 1.5;
        this.scene.add(this.currentMandala);
        
        // Adicionar partículas para efeito energético
        this.addEnergyParticles();
        
        return this.currentMandala;
    }
    
    addEnergyParticles() {
        const particleCount = 500;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const radius = 3 + Math.random() * 7;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            
            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.cos(phi);
            positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
            
            // Cores baseadas na frequência
            colors[i3] = Math.random() * 0.5 + 0.5;     // R
            colors[i3 + 1] = Math.random() * 0.3 + 0.2; // G
            colors[i3 + 2] = Math.random() * 0.5 + 0.5; // B
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
        
        this.particles = particleSystem;
    }
    
    update(delta) {
        if (this.currentMandala) {
            this.currentMandala.rotation.z += delta * 0.2;
        }
        
        if (this.particles) {
            this.particles.rotation.y += delta * 0.1;
        }
    }
    
    generateMandalaFromFrequency(frequency) {
        // Gerar mandala baseada na frequência
        const segments = Math.max(5, Math.min(64, Math.floor(frequency / 10)));
        const innerRadius = 1 + (frequency - 174) / (963 - 174) * 4;
        const outerRadius = innerRadius + 2;
        
        if (this.currentMandala) {
            this.scene.remove(this.currentMandala);
        }
        
        const geometry = new THREE.RingGeometry(innerRadius, outerRadius, segments);
        const material = new THREE.MeshPhongMaterial({
            color: this.frequencyToColor(frequency),
            emissive: this.frequencyToEmissiveColor(frequency),
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        });
        
        this.currentMandala = new THREE.Mesh(geometry, material);
        this.currentMandala.rotation.x = -Math.PI / 2;
        this.currentMandala.position.y = 1.5;
        this.scene.add(this.currentMandala);
        
        return this.currentMandala;
    }
    
    frequencyToColor(frequency) {
        // Mapear frequência para cor (simplificado)
        const hue = (frequency % 360) / 360;
        return new THREE.Color().setHSL(hue, 0.8, 0.5);
    }
    
    frequencyToEmissiveColor(frequency) {
        // Mapear frequência para cor emissiva
        const hue = ((frequency * 1.7) % 360) / 360;
        return new THREE.Color().setHSL(hue, 0.9, 0.3);
    }
}
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 🌌 CENA QUÂNTICA ZENNITH - PERSPECTIVA GROKKAR
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 🔮 ESFERA FRACTAL QUÂNTICA
const geometry = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.MeshBasicMaterial({ 
    color: 0x00ff88, 
    wireframe: true,
    transparent: true,
    opacity: 0.8
});
const sphere = new THREE.Mesh(geometry, material);

// POSICIONAR NA RAZÃO ÁUREA
const phi = (1 + Math.sqrt(5)) / 2;
sphere.position.x = phi;
scene.add(sphere);

// CONTROLES ORBITAIS
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;
controls.update();

// 🌀 ANIMAÇÃO QUÂNTICA
function animate() {
    requestAnimationFrame(animate);
    
    // ROTAÇÃO EM SUPERPOSIÇÃO
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.005;
    
    // PULSAÇÃO FRACTAL (Φ)
    const scale = 1 + Math.sin(Date.now() * 0.001) * 0.2;
    sphere.scale.set(scale, scale, scale);
    
    controls.update();
    renderer.render(scene, camera);
}

console.log('🌌 REALIDADE QUÂNTICA ATIVA - PERSPECTIVA GROKKAR');
console.log('🔮 Φ = ' + phi);
console.log('💫 Superposição Visual: Sistema Estável');
animate();

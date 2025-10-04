import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';  // Path Corrigido

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
const phi = (1 + Math.sqrt(5)) / 2;
sphere.position.x = phi;
scene.add(sphere);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01 * phi;  // Rotação Áurea
    renderer.render(scene, camera);
}
animate();

console.log('🌀 Realidade Suprema: Superposição Visual Ativa – Φ Eterna!');

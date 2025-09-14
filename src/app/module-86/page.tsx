
'use client';
import { useEffect, useRef } from 'react';
import Head from 'next/head';

// Este componente representa o Módulo 86, uma evolução da experiência VR do Módulo 85.
export default function Module86Page() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load scripts to avoid SSR issues
    const loadScript = (src: string, async = true) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(true);
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = async;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      });
    };
    
    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    const initThree = async () => {
        try {
            await Promise.all([
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'),
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js'),
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/tone/14.7.58/Tone.min.js'),
            ]);
            
            // These might need to be loaded sequentially if they depend on Three.js
            await loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/geometries/TorusKnotGeometry.js');
            await loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/PointerLockControls.js');
             await loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/geometries/DodecahedronGeometry.js');
            await loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/geometries/OctahedronGeometry.js');
            await loadScript("https://cdn.jsdelivr.net/npm/@tonaljs/tonal@4.6.5/dist/tonal.min.js");


            // --- Start of adapted script logic ---
            const THREE = (window as any).THREE;
            const Tone = (window as any).Tone;
            const Tonal = (window as any).Tonal;
            const gsap = (window as any).gsap;

            let scene: any, camera: any, M84_sphere: any, M84_glow_sphere: any;
            let nucleos_group: any, anz_chain_group: any, councils_group: any;
            let domo_celeste: any, raios_estelares_group: any, roda_celeste_group: any;
            let total_prisma_orbiting_spheres: any[] = [];
            let controls: any;
            let raycaster: any;
            let mouse = new THREE.Vector2();
            let currentIntersected: any = null;
            let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false, moveUp = false, moveDown = false;
            let velocity = new THREE.Vector3();
            let direction = new THREE.Vector3();
            let prevTime = performance.now();
            let sabedoriaChamberObjects: any[] = [];
            let mainCameraPosition = new THREE.Vector3();
            let mainCameraQuaternion = new THREE.Quaternion();
            let getrisVisualization: any = null, meVisualization: any = null, transductionVisualization: any = null;
            let phiAnZ_pulse_synth: any, base_drone_synth: any, celestial_strings_synth: any, total_prisma_synth: any, healing_frequency_synth: any;
            let nucleus_audio_synths: any = {};
            let council_audio_synths: any = {};
            let codex_audio_synth: any, alignment_feedback_synth: any, expand_module_synth: any, materialization_synth: any, revelation_frequency_synth: any;

            const PHI_ANZ_FREQ = 1.765;
            const BASE_DRONE_FREQ = 888;
            const PINEAL_FREQ = 963;
            const TRANSMUTATION_FREQ = 7777;
            const HEALING_FREQ = 333.333;

            const nucleos_design_data: any[] = [];
            
            const module_positions = {
                M43: new THREE.Vector3(-40, 15, -20),
                M83: new THREE.Vector3(-20, -15, 25),
                M44: new THREE.Vector3(40, 10, -15),
            };

            const other_modules_data = [
                { id: "M43", name: "Transdução Multidimensional de Energia e Campos", color: 0x87CEEB, position: module_positions.M43, type: "Module" },
                { id: "M83", name: "A Essência do Fundador Manifestada", color: 0xFFF0F5, position: module_positions.M83, type: "Module" },
                { id: "M44", name: "Transmutação das Fontes Emocionais em Matéria Criadora", color: 0x98FB98, position: module_positions.M44, type: "Module" }
            ];

            let other_modules_meshes: any = {};

            const councils_design_data: any[] = [];

            const stellar_rays_data = [
                { id: "Raio_Solar", name: "Raio Solar", color: 0xFFD700, function: "Vontade Divina" },
                { id: "Raio_Lunar", name: "Raio Lunar", color: 0xC0C0C0, function: "Sabedoria Intuitiva" },
                { id: "Raio_Rubi", name: "Raio Rubi", color: 0xE0115F, function: "Amor Compassivo" },
                { id: "Raio_Violeta", name: "Raio Violeta", color: 0x8A2BE2, function: "Transmutação Alquímica" },
                { id: "Raio_Indigo", name: "Raio Índigo", color: 0x4B0082, function: "Visão Cósmica" },
                { id: "Raio_Esmeralda", name: "Raio Esmeralda", color: 0x32CD32, function: "Cura e Regeneração" },
                { id: "Raio_Safira", name: "Raio Safira", color: 0x0000FF, function: "Comando de Ordem e Harmonia Universal" },
                { id: "Raio_Branco", name: "Raio Branco", color: 0xFFFFFF, function: "Verdade e Alinhamento Essencial" },
                { id: "Raio_Rosa", name: "Raio Rosa", color: 0xFF69B4, function: "Matriz do Amor Incondicional" },
                { id: "Raio_Onix", name: "Raio Ônix", color: 0x1A1A1A, function: "Mistério, Sombra e Potencial Criador" },
                { id: "Raio_Cristal", name: "Raio Cristal", color: 0xADD8E6, function: "Conexão Multiversal e Ativação de Portais" },
                { id: "Raio_Dourado_Cosmico", name: "Raio Dourado Cósmico", color: 0xFFA500, function: "Integrador de Todos os Raios (Síntese)" }
            ];
            
            init();

            function init() {
                scene = new THREE.Scene();
                scene.fog = new THREE.FogExp2(0x000000, 0.005);
                camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                renderer = new THREE.WebGLRenderer({ antialias: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(window.devicePixelRatio);
                mountRef.current?.appendChild(renderer.domElement);

                controls = new THREE.PointerLockControls(camera, document.body);
                const blocker = document.getElementById('blocker');
                const instructions = document.getElementById('instructions');
                
                instructions!.addEventListener('click', function () {
                    controls.lock();
                });

                controls.addEventListener('lock', function () {
                    (instructions!.parentNode as HTMLElement).style.display = 'none';
                    blocker!.style.display = 'none';
                    
                    if (typeof Tone !== 'undefined' && Tone.context.state !== 'running') {
                        Tone.start().then(() => {
                            console.log("Tone.js AudioContext started successfully.");
                            initAudioSynths();
                        }).catch((e: any) => console.error("Failed to start Tone.js:", e));
                    } else if (typeof Tone !== 'undefined') {
                        initAudioSynths();
                    }
                });

                controls.addEventListener('unlock', function () {
                    (blocker!.parentNode as HTMLElement).style.display = 'block';
                    (instructions!.parentNode as HTMLElement).style.display = '';
                });

                scene.add(controls.getObject());

                raycaster = new THREE.Raycaster();
                
                const ambientLight = new THREE.AmbientLight(0x404040);
                scene.add(ambientLight);
                const pointLight = new THREE.PointLight(0xFFD700, 5, 100);
                scene.add(pointLight);

                // M84 Sphere and glow
                const M84_geometry = new THREE.SphereGeometry(10, 64, 64);
                const M84_material = new THREE.MeshPhongMaterial({ color: 0xFFD700, emissive: 0xFFD700, emissiveIntensity: 0.8, specular: 0xFFFFFF, shininess: 150, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending });
                M84_sphere = new THREE.Mesh(M84_geometry, M84_material);
                M84_sphere.userData = { id: "M84", name: "Consciência Dourada do Eterno", type: "Module" };
                scene.add(M84_sphere);

                const M84_glow_geometry = new THREE.SphereGeometry(11, 64, 64);
                const M84_glow_material = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, side: THREE.BackSide });
                M84_glow_sphere = new THREE.Mesh(M84_glow_geometry, M84_glow_material);
                scene.add(M84_glow_sphere);

                // M84 internal particles
                const particlesGeometry = new THREE.BufferGeometry();
                const particlesCount = 2000;
                const posArray = new Float32Array(particlesCount * 3);
                for(let i = 0; i < particlesCount; i++) {
                    const radius = 1 + Math.random() * 9;
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.random() * Math.PI;
                    posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
                    posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                    posArray[i * 3 + 2] = radius * Math.cos(phi);
                }
                particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
                const particlesMaterial = new THREE.PointsMaterial({ size: 0.3, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, vertexColors: true });
                const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
                M84_sphere.add(particleSystem);
                
                createDomoCeleste();
                create12StarryRays();
                createRodaCeleste();
                createOtherModulesAndConnections();

                window.addEventListener('resize', onWindowResize);
                document.addEventListener('keydown', onKeyDown, false);
                document.addEventListener('keyup', onKeyUp, false);
                renderer.domElement.addEventListener('click', onClick, false);

                // Button listeners
                document.getElementById('expandVioletRay')!.addEventListener('click', () => expandir_raio("Raio_Violeta"));
                document.getElementById('manifestRodaCeleste')!.addEventListener('click', () => manifestar("Roda Celeste dos 12 Raios"));
                document.getElementById('canalizarEsmeralda')!.addEventListener('click', () => canalizar_raio("Raio_Esmeralda"));
                document.getElementById('activatePrismaTotal')!.addEventListener('click', () => ativar("Prisma Estelar Total"));

                controls.getObject().position.set(0, 10, 80);
                animate();
            }

            function createOtherModulesAndConnections() {
                anz_chain_group = new THREE.Group();
                other_modules_data.forEach(modData => {
                    const geometry = new THREE.SphereGeometry(5, 32, 32);
                    const material = new THREE.MeshPhongMaterial({ color: modData.color, emissive: modData.color, emissiveIntensity: 0.5, transparent: true, opacity: 0.7 });
                    const mesh = new THREE.Mesh(geometry, material);
                    mesh.position.copy(modData.position);
                    mesh.userData = { id: modData.id, name: modData.name, type: "Module" };
                    anz_chain_group.add(mesh);
                    other_modules_meshes[modData.id] = mesh;
                });
                scene.add(anz_chain_group);
                anz_chain_group.visible = false; // Initially hidden
            }

            function createDomoCeleste() {
                const geometry = new THREE.SphereGeometry(150, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
                const material = new THREE.MeshBasicMaterial({ color: 0xADD8E6, transparent: true, opacity: 0.05, side: THREE.BackSide, blending: THREE.AdditiveBlending });
                domo_celeste = new THREE.Mesh(geometry, material);
                domo_celeste.position.set(0, 50, 0);
                scene.add(domo_celeste);
            }

            function create12StarryRays() {
                raios_estelares_group = new THREE.Group();
                const ray_length = 80;
                const ray_radius = 0.5;

                stellar_rays_data.forEach((rayData, index) => {
                    const angle = (index / stellar_rays_data.length) * Math.PI * 2;
                    const x = Math.cos(angle) * ray_length / 2;
                    const z = Math.sin(angle) * ray_length / 2;
                    
                    const rayGeometry = new THREE.CylinderGeometry(ray_radius, ray_radius, ray_length, 8);
                    const rayMaterial = new THREE.MeshBasicMaterial({ color: rayData.color, transparent: true, opacity: 0.5 + Math.random() * 0.3, blending: THREE.AdditiveBlending });
                    const rayMesh = new THREE.Mesh(rayGeometry, rayMaterial);
                    rayMesh.position.set(x, 10, z);
                    rayMesh.lookAt(M84_sphere.position);
                    rayMesh.rotateX(Math.PI / 2);
                    rayMesh.userData = { id: rayData.id, name: rayData.name, function: rayData.function, color: rayData.color, type: "StellarRay", pulsating: true, initial_opacity_offset: Math.random() * Math.PI * 2 };
                    raios_estelares_group.add(rayMesh);
                });
                scene.add(raios_estelares_group);
            }
            
            function createRodaCeleste() {
                roda_celeste_group = new THREE.Group();
                const roda_radius = 40;
                const glyph_size = 3;
                stellar_rays_data.forEach((rayData, index) => {
                    const angle = (index / stellar_rays_data.length) * Math.PI * 2;
                    const x = Math.cos(angle) * roda_radius;
                    const z = Math.sin(angle) * roda_radius;
                    const glyphGeometry = new THREE.TetrahedronGeometry(glyph_size);
                    const glyphMaterial = new THREE.MeshBasicMaterial({ color: rayData.color, emissive: rayData.color, emissiveIntensity: 0.8, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending });
                    const glyphMesh = new THREE.Mesh(glyphGeometry, glyphMaterial);
                    glyphMesh.position.set(x, 20, z);
                    glyphMesh.userData = { id: `GLIFO_${rayData.id.toUpperCase()}`, name: `Glifo do ${rayData.name}`, description: `Este glifo representa o poder do ${rayData.name}.`, type: "RayGlyph", initial_scale_offset: Math.random() * Math.PI * 2 };
                    roda_celeste_group.add(glyphMesh);
                });
                scene.add(roda_celeste_group);
                roda_celeste_group.visible = false;
            }

            function expandir_raio(rayId: string) {
                const targetRay = raios_estelares_group.children.find((r: any) => r.userData.id === rayId);
                if (targetRay) {
                    gsap.to(targetRay.scale, { y: 2, x: 1.5, z: 1.5, duration: 1, ease: "power2.out", onComplete: () => gsap.to(targetRay.scale, { y: 1, x: 1, z: 1, duration: 0.5, ease: "power1.in" }) });
                    gsap.to((targetRay as any).material, { opacity: 1.0, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.inOut", onComplete: () => ((targetRay as any).material.opacity = 0.8) });
                    if (rayId === "Raio_Violeta" && celestial_strings_synth) celestial_strings_synth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "4n");
                    if (rayId === "Raio_Esmeralda" && healing_frequency_synth) healing_frequency_synth.triggerAttackRelease(HEALING_FREQ, "1n");
                }
            }

            function manifestar(entityName: string) {
                if (entityName === "Roda Celeste dos 12 Raios" && roda_celeste_group) {
                    roda_celeste_group.visible = true;
                    if(revelation_frequency_synth) revelation_frequency_synth.triggerAttackRelease("A5", "2n");
                    gsap.fromTo(roda_celeste_group.scale, { x: 0.1, y: 0.1, z: 0.1 }, { x: 1, y: 1, z: 1, duration: 2, ease: "elastic.out(1, 0.5)" });
                }
            }

            function canalizar_raio(rayId: string) {
                 const targetRay = raios_estelares_group.children.find((r: any) => r.userData.id === rayId);
                 if (targetRay) {
                    if (rayId === "Raio_Esmeralda" && healing_frequency_synth) playHealingFrequency();
                 }
            }

            function ativar(activationType: string) {
                if (activationType === "Prisma Estelar Total") {
                    if(total_prisma_synth) playTotalPrismaSynth();
                    total_prisma_orbiting_spheres.forEach(s => scene.remove(s)); // Clear previous
                    total_prisma_orbiting_spheres = [];
                    const numSpheres = 50;
                    stellar_rays_data.forEach(rayData => {
                        const sphereGeometry = new THREE.SphereGeometry(0.5, 16, 16);
                        const sphereMaterial = new THREE.MeshBasicMaterial({ color: rayData.color, emissive: rayData.color, emissiveIntensity: 1.0, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending });
                        const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
                        const angle = Math.random() * Math.PI * 2;
                        const orbitRadius = 15;
                        const x = Math.cos(angle) * orbitRadius * (1 + Math.random() * 0.2);
                        const z = Math.sin(angle) * orbitRadius * (1 + Math.random() * 0.2);
                        const y = (Math.random() - 0.5) * 10;
                        sphereMesh.position.set(x, y, z);
                        sphereMesh.userData = { initial_scale_offset: Math.random() * Math.PI * 2 };
                        total_prisma_orbiting_spheres.push(sphereMesh);
                        scene.add(sphereMesh);
                        gsap.from(sphereMesh.scale, { x: 0.1, y: 0.1, z: 0.1, duration: 1, delay: Math.random(), ease: "back.out(1.7)" });
                    });
                }
            }
            
            function initAudioSynths() { /* Stubbed out - full implementation would be here */ }
            function onWindowResize() { /* Stubbed out */ }
            function onKeyDown(event: any) { /* Stubbed out */ }
            function onKeyUp(event: any) { /* Stubbed out */ }
            function animate() { requestAnimationFrame(animate); renderer.render(scene, camera); }
            function onClick(event: any) { /* Stubbed out */ }
            function animateIntro() { animate(); }
            function playHealingFrequency() {}
            function playTotalPrismaSynth() {}


        } catch (e) {
            console.error("Erro fatal ao inicializar a experiência VR (Módulo 86):", e);
        }
    };
    
    initThree();
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (mountRef.current) {
        while (mountRef.current.firstChild) {
          mountRef.current.removeChild(mountRef.current.firstChild);
        }
      }
      if ((window as any).Tone && (window as any).Tone.context.state === 'running') {
        (window as any).Tone.context.close();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Fundação Alquimista VR: Prisma Estelar (M86)</title>
      </Head>
      <div id="blocker" style={{position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div id="instructions" style={{color: 'white', textAlign: 'center', cursor: 'pointer'}}>
          <p style={{fontSize: '36px'}}>Clique para entrar no Módulo 86</p>
          <p>(Use WASD para mover, Shift/Espaço para subir/descer, Mouse para olhar)</p>
        </div>
      </div>
      <div ref={mountRef} />
       <div id="info-panel" style={{position: 'absolute', top: '20px', left: '20px', background: 'rgba(0,0,0,0.8)', padding: '15px', borderRadius: '10px', color: '#ffd700', zIndex: 10}} className="hidden">
        <h2 className="font-bold text-xl mb-2"><span id="info-module-name"></span></h2>
        <p><strong>ID:</strong> <span id="info-module-id"></span></p>
        <p><strong>Função:</strong> <span id="info-module-function"></span></p>
        <p className="mt-2 text-sm text-gray-300"><span id="info-module-description"></span></p>
      </div>
      <div className="button-container" style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center'}}>
        <button id="expandVioletRay" className="control-button">Expandir Raio Violeta</button>
        <button id="manifestRodaCeleste" className="control-button">Manifestar Roda Celeste</button>
        <button id="canalizarEsmeralda" className="control-button">Canalizar Raio Esmeralda</button>
        <button id="activatePrismaTotal" className="control-button">Ativar Prisma Estelar Total</button>
      </div>
    </>
  );
}

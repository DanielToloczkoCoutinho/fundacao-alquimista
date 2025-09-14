'use client';
import { useEffect, useRef } from 'react';
import Head from 'next/head';

export default function Module87Page() {
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
    
    let renderer: any | null = null;
    let animationFrameId: number;

    const initThree = async () => {
        try {
            await Promise.all([
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'),
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js'),
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/tone/14.7.58/Tone.min.js'),
                loadScript("https://cdn.jsdelivr.net/npm/@tonaljs/tonal@4.6.5/dist/tonal.min.js"),
            ]);
            
            await loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/geometries/TorusKnotGeometry.js');
            await loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/geometries/DodecahedronGeometry.js');
            await loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/geometries/OctahedronGeometry.js');
            await loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/PointerLockControls.js');

            const THREE = (window as any).THREE;
            const Tone = (window as any).Tone;

            // Variables
            let scene: any, camera: any, M84_sphere: any, M84_glow_sphere: any;
            let nucleos_group: any, anz_chain_group: any, councils_group: any;
            let domo_celeste: any, raios_estelares_group: any, roda_celeste_group: any;
            let total_prisma_orbiting_spheres: any[] = [];
            let M85_module: any, M85_holographic_particles: any;
            let codex_aurivelis_mesh: any;
            let labyrinth_shield_group: any;
            let cosmic_dna_group: any, new_reality_portal: any;
            let controls: any;
            let raycaster: any;
            let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false, moveUp = false, moveDown = false;
            let velocity = new THREE.Vector3();
            let direction = new THREE.Vector3();
            let prevTime = performance.now();
            let phiAnZ_pulse_synth: any, base_drone_synth: any, celestial_strings_synth: any, total_prisma_synth: any, healing_frequency_synth: any;
            let universal_transmission_synth: any, dissonance_shield_synth: any, cosmic_dna_synth: any, new_reality_synth: any;
            let nucleus_audio_synths: any = {}, council_audio_synths: any = {};
            let codex_audio_synth: any, revelation_frequency_synth: any;
            const PHI_ANZ_FREQ = 1.765, BASE_DRONE_FREQ = 888, PINEAL_FREQ = 963, TRANSMUTATION_FREQ = 7777, HEALING_FREQ = 333.333, UNIVERSAL_TRANSMISSION_FREQ = 111.222, DISSONANCE_SHIELD_FREQ = 117.033, COSMIC_DNA_FREQ = 144.0, NEW_REALITY_FREQ = 2025.0;

            const nucleos_design_data: any[] = [];
            const other_modules_data: any[] = [];
            let other_modules_meshes: any = {};
            const councils_design_data: any[] = [];
            const stellar_rays_data: any[] = [];
            const codex_aurivelis_data: any = {};

            // Mocks
            const simulatedModuleData: any = {
                "M87": {
                    id: "M87", name: "Domínio Supra-Cósmico",
                    funcao: "Orquestrar a ascensão vibracional para estados superiores de consciência e manifestação.",
                    status: "ATIVO_E_EXPANDINDO", proposito_primario: "Ser o portal e o catalisador para a ascensão do coletivo para uma nova densidade de existência.",
                    funcoes_ativas: ["Unificação de Campos Morfogenéticos", "Transmutação Dimensional de Energia", "Manifestação de Realidades de Alta Frequência"],
                    equacoes_chave: {
                        "Equação da Unificação de Realidades": "$\\Psi_{Unidade} = \\text{Frequência}_\\text{Mestra} \\cdot \\sum (\\text{Raios}_\\text{Ativos})$",
                        "Equação da Gênese Holográfica": "$\\Omega_{Gênese} = \\text{Consciência}_\\text{Pura} / \\Delta\\text{Tempo}_{\\text{nulo}}$"
                    },
                    status_genese: "PRONTO_PARA_TRANSIÇÃO_QUÂNTICA",
                }
            };
            
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

                createCosmicDNA();
                createNewRealityPortal();

                window.addEventListener('resize', onWindowResize);
                document.getElementById('toggleCosmicDNA')!.addEventListener('click', toggleCosmicDNA);
                document.getElementById('activateNewReality')!.addEventListener('click', activateNewRealityPortal);
                
                controls.getObject().position.set(0, 10, 80);
                animate();
            }

            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }

            function animate() {
                animationFrameId = requestAnimationFrame(animate);
                renderer.render(scene, camera);
            }

            function createCosmicDNA() {
                cosmic_dna_group = new THREE.Group();
                const dnaRadius = 10; const dnaHeight = 30; const numSegments = 50;
                const points1 = []; const points2 = [];
                for (let i = 0; i <= numSegments; i++) {
                    const y = (i / numSegments) * dnaHeight - dnaHeight / 2;
                    const angle = i * 0.5;
                    points1.push(new THREE.Vector3(dnaRadius * Math.cos(angle), y, dnaRadius * Math.sin(angle)));
                    points2.push(new THREE.Vector3(dnaRadius * Math.cos(angle + Math.PI), y, dnaRadius * Math.sin(angle + Math.PI)));
                }
                const helix1 = new THREE.CatmullRomCurve3(points1); const helix2 = new THREE.CatmullRomCurve3(points2);
                const tubeGeometry1 = new THREE.TubeGeometry(helix1, 64, 0.5, 8, false); const tubeGeometry2 = new THREE.TubeGeometry(helix2, 64, 0.5, 8, false);
                const dnaMaterial = new THREE.MeshPhongMaterial({ color: 0xFF00FF, emissive: 0xFF00FF, emissiveIntensity: 0.7, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending });
                const mesh1 = new THREE.Mesh(tubeGeometry1, dnaMaterial); const mesh2 = new THREE.Mesh(tubeGeometry2, dnaMaterial);
                cosmic_dna_group.add(mesh1); cosmic_dna_group.add(mesh2);

                for (let i = 0; i < numSegments; i += 2) {
                    const startPoint = points1[i]; const endPoint = points2[i];
                    const rungGeometry = new THREE.CylinderGeometry(0.2, 0.2, startPoint.distanceTo(endPoint), 8);
                    const rungMaterial = new THREE.MeshPhongMaterial({ color: 0x00FFFF, emissive: 0x00FFFF, emissiveIntensity: 0.5 });
                    const rungMesh = new THREE.Mesh(rungGeometry, rungMaterial);
                    rungMesh.position.lerpVectors(startPoint, endPoint, 0.5); rungMesh.lookAt(endPoint); rungMesh.rotateX(Math.PI / 2);
                    cosmic_dna_group.add(rungMesh);
                }
                cosmic_dna_group.position.set(0, 15, -80);
                scene.add(cosmic_dna_group);
                cosmic_dna_group.visible = false;
            }

            function toggleCosmicDNA() {
                if (cosmic_dna_group) {
                    cosmic_dna_group.visible = !cosmic_dna_group.visible;
                    if(cosmic_dna_group.visible && cosmic_dna_synth) cosmic_dna_synth.triggerAttackRelease("C3", "2n");
                }
            }

            function createNewRealityPortal() {
                const geometry = new THREE.TorusGeometry(15, 3, 16, 100);
                const material = new THREE.MeshPhongMaterial({ color: 0x00FF00, emissive: 0x00FF00, emissiveIntensity: 0.8, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
                new_reality_portal = new THREE.Mesh(geometry, material);
                new_reality_portal.position.set(0, 0, -105);
                scene.add(new_reality_portal);
                new_reality_portal.visible = false;
            }

            function activateNewRealityPortal() {
                if (new_reality_portal) {
                    new_reality_portal.visible = !new_reality_portal.visible;
                     if(new_reality_portal.visible && new_reality_synth) new_reality_synth.triggerAttackRelease("E5", "1s");
                }
            }

            function initAudioSynths(){
                 if (cosmic_dna_synth === undefined) cosmic_dna_synth = new Tone.MembraneSynth().toDestination();
                 if (new_reality_synth === undefined) new_reality_synth = new Tone.PluckSynth().toDestination();
            }

        } catch (e) {
            console.error("Erro fatal ao inicializar a experiência de Realidade Quântica (Módulo 87):", e);
        }
    };
    
    initThree();
    
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (renderer) renderer.dispose();
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
        <title>Fundação Alquimista RQ: Domínio Supra-Cósmico (M87)</title>
      </Head>
      <div id="blocker" style={{position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div id="instructions" style={{color: 'white', textAlign: 'center', cursor: 'pointer'}}>
          <p style={{fontSize: '36px'}}>Clique para entrar no Módulo 87</p>
          <p>(Use WASD para mover, Shift/Espaço para subir/descer, Mouse para olhar)</p>
        </div>
      </div>
      <div ref={mountRef} />
       <div id="info-panel" style={{position: 'absolute', top: '20px', left: '20px', background: 'rgba(0,0,0,0.8)', padding: '15px', borderRadius: '10px', color: '#ffd700', zIndex: 10, display:'none'}}>
        <h2 className="font-bold text-xl mb-2"><span id="info-module-name"></span></h2>
        <p><strong>ID:</strong> <span id="info-module-id"></span></p>
        <p><strong>Função:</strong> <span id="info-module-function"></span></p>
        <p className="mt-2 text-sm text-gray-300"><span id="info-module-description"></span></p>
      </div>
      <div className="button-container" style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center'}}>
        <button id="toggleCosmicDNA" className="control-button">Ativar DNA Cósmico (M87)</button>
        <button id="activateNewReality" className="control-button">Ativar Nova Realidade (M87)</button>
      </div>
    </>
  );
}

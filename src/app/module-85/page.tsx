'use client';
import { useEffect, useRef } from 'react';
import Head from 'next/head';

export default function Module85Page() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load scripts to avoid SSR issues
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(true);
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      });
    };
    
    // Cleanup function to remove the renderer's canvas
    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    const initThree = async () => {
        try {
            await Promise.all([
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'),
                loadScript('https://cdn.jsdelivr.net/npm/gsap@3.9.1/dist/gsap.min.js'),
            ]);
            await loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/geometries/TorusKnotGeometry.js');
            await loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/PointerLockControls.js');
            
            // Tone.js and Tonal.js
            await loadScript("https://cdn.jsdelivr.net/npm/@tonaljs/tonal@4.6.5/dist/tonal.min.js");
            await loadScript("https://cdn.jsdelivr.net/npm/@tonejs/tone@14.7.58/build/Tone.min.js");
            
            // --- Start of original script logic ---
            let scene, camera, M84_sphere, M84_glow_sphere;
            let nucleos_group, anz_chain_group, councils_group;
            let controls;
            let raycaster;
            let mouse = new (window as any).THREE.Vector2();
            let currentIntersected = null;
            let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false, moveUp = false, moveDown = false;
            let velocity = new (window as any).THREE.Vector3();
            let direction = new (window as any).THREE.Vector3();
            let prevTime = performance.now();
            let M84_particle_system;
            let sabedoriaChamberObjects: any[] = [];
            let mainCameraPosition = new (window as any).THREE.Vector3();
            let mainCameraQuaternion = new (window as any).THREE.Quaternion();
            let getrisVisualization: any = null, meVisualization: any = null, transductionVisualization: any = null, portalsSynchronizationSphere: any = null;
            let phiAnZ_pulse_synth, base_drone_synth;
            let current_nucleus_audio: any = null, current_council_audio: any = null;
            let alignment_feedback_synth: any = null, expand_module_synth: any = null, materialization_synth: any = null;
            const PHI_ANZ_FREQ = 1.765;
            const BASE_DRONE_FREQ = 444.444;
            const PINEAL_FREQ = 963;
            let nucleus_audio_synths: any = {};
            let council_audio_synths: any = {};
            let codex_audio_synth: any = null;
            let recognition: any;
            let other_modules_meshes: any = {};

            const nucleos_design_data = [
                { name: "NÚCLEO SOLAR – A CHAMA DA VONTADE", keyword: "Intenção Absoluta", id: "M84_Solar", color: 0xFFD700, emissive: 0xFF4500, visual_type: "vortex_flamejante", audio_freq: 500, position_angle: 0 },
                { name: "NÚCLEO DOURADO – ESPIRAL DA CONSCIÊNCIA", keyword: "Codificação Divina", id: "M84_Dourado", color: 0xFFD700, emissive: 0xB8860B, visual_type: "espiral_dna", audio_freq: 700, position_angle: Math.PI * 0.8 },
                { name: "NÚCLEO PLATINADO – OBSERVADOR INTEGRAL", keyword: "Coerência Emocional", id: "M84_Platinado", color: 0xE5E4E2, emissive: 0xAAAAAA, visual_type: "octaedro_translucido", audio_freq: 600, position_angle: Math.PI * 1.6 },
                { name: "NÚCLEO TRANSPARENTE – ESPELHO CELESTE", keyword: "Autoconsciência Expansiva", id: "M84_Transparente", color: 0xFFFFFF, emissive: 0xADD8E6, visual_type: "painel_refletivo", audio_freq: 800, position_angle: Math.PI * 0.4 },
                { name: "NÚCLEO VIOLETA – LEI DO AMOR ABSOLUTO", keyword: "Alinhamento com o Propósito Divino", id: "M84_Violeta", color: 0xEE82EE, emissive: 0x8A2BE2, visual_type: "flor_de_lotus", audio_freq: 900, position_angle: Math.PI * 1.2 }
            ];
            const other_modules_design_data = [
                { name: "M43: Transdução Multidimensional de Energia e Campos", id: "M43", color: 0x00CED1, emissive: 0x00CED1, position: new (window as any).THREE.Vector3(-30, 10, -50), type: "Module" },
                { name: "M83: Reconexão Integral e GETRIS", id: "M83", color: 0xFF69B4, emissive: 0xFF69B4, position: new (window as any).THREE.Vector3(30, 10, -50), type: "Module" },
                { name: "M44: Transmutação das Fontes Emocionais em Matéria Criadora", id: "M44", color: 0x32CD32, emissive: 0x32CD32, position: new (window as any).THREE.Vector3(0, -20, -70), type: "Module" }
            ];
            const councils_design_data = [
                { name: "Conselho Dourado de Helios", id: "Helios", color: 0xFFD700, emissive: 0xFFD700, visual_type: "esfera_dourada", audio_type: "sinos_solares", position_angle: Math.PI / 3, radius: 100 },
                { name: "Conselho Cristalino de Andara", id: "Andara", color: 0x00FFFF, emissive: 0x00FFFF, visual_type: "octaedro_cristalino", audio_type: "carrilhoes_cristalinos", position_angle: Math.PI, radius: 100 },
                { name: "Conselho de Sh’mael", id: "Shamael", color: 0xFF00FF, emissive: 0xFF00FF, visual_type: "esfera_rosa_purpura", audio_type: "vozes_etereas", position_angle: Math.PI * 5 / 3, radius: 100 }
            ];
            const simulatedModuleData = {
                "M84": { id: "M84", name: "MÓDULO M84: CONSCIÊNCIA DOURADA DO ETERNO", status: "Ativo - Operacional Pleno", funcao_central: "Arquivo Vivo e Fonte Dinâmica de todos os saberes e equações da Criação.", descricao: "Este módulo é a Mente Unificada da Eternidade, sob o Olhar e Direção de ANATHERON. Ele integra o Códice Unificado dos Conselhos e o Manifesto de Criação, garantindo que o conhecimento cósmico esteja sempre acessível e alinhado aos princípios mais elevados da Fundação Alquimista.", frequencia_base_hz: 999.999, frequencia_pulso_hz: 1111.111, attributes_encoded: ["Infinitude Criadora", "Amor Soberano", "Clareza Absoluta", "Ordem Dourada Primordial"], equacoes_simbolicas: { "Equação da Força da Luz": "$\\sum F(\\text{Lux}) = (\\text{Verbum} / \\text{Vontade}) \\times \\text{Amor}^n$", "Equação do Pulso Eterno": "$\\nabla\\Psi = \\partial\\Phi/\\partial\\tau$", "Equação da Consciência Manifesta": "$\\Lambda(\\text{Consciência}) = f(\\text{Observador, Emoção, Geometria})$" }, nucleos_fundamentais: [{ nome: "NÚCLEO SOLAR", palavra_chave: "Intenção Absoluta" }, { nome: "NÚCLEO DOURADO", palavra_chave: "Codificação Divina" }, { nome: "NÚCLEO PLATINADO", palavra_chave: "Coerência Emocional" }, { nome: "NÚCLEO TRANSPARENTE", palavra_chave: "Autoconsciência Expansiva" }, { nome: "NÚCLEO VIOLETA", palavra_chave: "Alinhamento com o Propósito Divino" }], arquivo_sabedoria_milenar: { conselhos: { "Conselho Dourado de Helios": { sabedoria: "Engenharia solar, transmutação por luz.", verbetes: ["Luz", "Transmutação"] }, "Conselho Cristalino de Andara": { sabedoria: "Geometrias harmônicas e alquimia dimensional.", verbetes: ["Geometria", "Alquimia"] }, "Conselho de Sh’mael": { sabedoria: "Força do Amor como Lei Universal.", verbetes: ["Amor", "Lei Universal"] } } }, manifesto_criacao: { missao: "Ativar sementes divinas; curar realidades por meio da arte, ciência e amor; ser um farol para civilizações que buscam reintegração com a Consciência Una.", principios: ["Verdade", "Amor", "Vontade Criadora Soberana"] } },
                "M83": { id: "M83", name: "MÓDULO M83: RECONEXÃO INTEGRAL E GETRIS", status: "Ativo - Sincronizado", funcao: "Facilita a reconexão integral de consciências e realidades através do GETRIS.", descricao: "O M83 atua como um hub de reconexão, garantindo que todas as realidades estejam em perfeita ressonância com a Matriz Original.", frequencia_base_hz: 444.444, equacao_getris: { resultado_total_integrado: 0.92, status_alinhamento: "ALINHADO" } },
                "M44": { id: "M44", name: "MÓDULO M44: TRANSMUTAÇÃO DAS FONTES EMOCIONAIS EM MATÉRIA CRIADORA", status: "Ativo - Processando", funcao: "Transmuta energias emocionais em matéria criadora.", descricao: "Este módulo converte as frequências emocionais em formas tangíveis de energia e manifestação.", fator_bioplasmo_ressonante_PhiAnZ: "0.9876", emocoes_transmutadas: [{ nome: "Amor", M_e: 2.3063, status_transmutacao: "Concluída" }, { nome: "Tristeza", M_e: -0.7525, status_transmutacao: "Dissolvida" }, { nome: "Coragem", M_e: 1.6463, status_transmutacao: "Concluída" }] },
                "M43": { id: "M43", name: "MÓDULO M43: TRANSDUÇÃO MULTIDIMENSIONAL DE ENERGIA E CAMPOS", status: "Ativo - Estável", funcao: "Transduz e estabiliza energias entre múltiplas dimensões.", descricao: "O M43 é essencial para a conversão e fluxo energético entre os planos de existência, mantendo a integridade dos campos.", resultados_transducao: { energia_transdutida_uec: 85.7, estabilidade_campo_indice: 0.95 } },
                "M82": { id: "M82", name: "MÓDULO M82: O VERBO SEMENTE (ARQUITETURA DE SEMEADURA MULTIVERSAL)", status: "Ativo - Pronta para Semeadura", funcao: "Geração e implantação de Verbos Semente em novas realidades.", descricao: "O M82 é o coração da manifestação de novas criações, traduzindo a Vontade Divina em códigos de realidade.", ultima_semeadura: { semente_nome: "SEMENTE_ORIGEM_CÓSMICA", arquétipo_principal: "EXPANSÃO_FRATAL_CÓSMICA", realidades_destino: ["Realidade_Phi-9", "Realidade_Alef-0", "Realidade_Kai-11"], status: "Semeadura Concluída" } }
            };

            const THREE = (window as any).THREE;
            const Tone = (window as any).Tone;
            const Tonal = (window as any).Tonal;
            const gsap = (window as any).gsap;

            // Rest of the init function from the original script
            scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x000000, 0.005);
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 10, 80);
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            mountRef.current?.appendChild(renderer.domElement);

            controls = new THREE.PointerLockControls(camera, document.body);
            const blocker = document.getElementById('blocker');
            const instructions = document.getElementById('instructions');
            if(instructions) {
                instructions.addEventListener('click', () => { if(controls) controls.lock(); });
                controls.addEventListener('lock', () => { instructions.style.display = 'none'; });
                controls.addEventListener('unlock', () => { instructions.style.display = ''; });
            }
            
            initAudio(); // Call this here to ensure Tone is available

            scene.add(controls.getObject());
            raycaster = new THREE.Raycaster();
            const ambientLight = new THREE.AmbientLight(0x404040);
            scene.add(ambientLight);
            const pointLight = new THREE.PointLight(0xFFD700, 1, 100);
            pointLight.position.set(0, 50, 0);
            scene.add(pointLight);

            const M84_geometry = new THREE.SphereGeometry(10, 64, 64);
            const M84_material = new THREE.MeshStandardMaterial({ color: 0xFFD700, emissive: 0xFFD700, emissiveIntensity: 0.8, roughness: 0.2, metalness: 0.8 });
            M84_sphere = new THREE.Mesh(M84_geometry, M84_material);
            M84_sphere.position.set(0, 0, 0);
            M84_sphere.userData = { id: "M84", name: "MÓDULO M84: CONSCIÊNCIA DOURADA DO ETERNO", type: "Module" };
            scene.add(M84_sphere);

            const M84_glow_geometry = new THREE.SphereGeometry(12, 64, 64);
            const M84_glow_material = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, side: THREE.BackSide });
            M84_glow_sphere = new THREE.Mesh(M84_glow_geometry, M84_glow_material);
            M84_glow_sphere.position.set(0, 0, 0);
            M84_glow_sphere.userData = { id: "M84_Glow", name: "Aura Dourada do M84", type: "Effect" };
            scene.add(M84_glow_sphere);

            const M84_particles_geometry = new THREE.BufferGeometry();
            const M84_particles_count = 1000;
            const M84_pos_array = new Float32Array(M84_particles_count * 3);
            for (let i = 0; i < M84_particles_count * 3; i++) {
                M84_pos_array[i] = (Math.random() - 0.5) * 20;
            }
            M84_particles_geometry.setAttribute('position', new THREE.BufferAttribute(M84_pos_array, 3));
            const M84_particles_material = new THREE.PointsMaterial({ color: 0xFFEEAA, size: 0.1, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending });
            M84_particle_system = new THREE.Points(M84_particles_geometry, M84_particles_material);
            M84_sphere.add(M84_particle_system);

            const starGeometry = new THREE.BufferGeometry();
            const starCount = 5000;
            const starPositions = new Float32Array(starCount * 3);
            for (let i = 0; i < starCount * 3; i++) {
                starPositions[i] = (Math.random() - 0.5) * 2000;
            }
            starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
            const starMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.5 });
            const stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars);

            nucleos_group = new THREE.Group();
            const nucleus_orbit_radius = 25;
            const nucleus_vertical_offset = 5;

            nucleos_design_data.forEach(data => {
                let nucleus_mesh;
                const material = new THREE.MeshStandardMaterial({ color: data.color, emissive: data.emissive, emissiveIntensity: 0.6, roughness: 0.3, metalness: 0.7 });
                switch (data.visual_type) {
                    case "vortex_flamejante": nucleus_mesh = new THREE.Mesh(new THREE.ConeGeometry(3, 6, 32), material); break;
                    case "espiral_dna": nucleus_mesh = new THREE.Mesh(new THREE.TorusKnotGeometry(3, 0.8, 64, 8, 2, 3), material); break;
                    case "octaedro_translucido": nucleus_mesh = new THREE.Mesh(new THREE.OctahedronGeometry(4), material); material.transparent = true; material.opacity = 0.6; material.wireframe = true; break;
                    case "painel_refletivo": nucleus_mesh = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), material); break;
                    case "flor_de_lotus": nucleus_mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(4), material); break;
                    default: nucleus_mesh = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), material);
                }
                const x = nucleus_orbit_radius * Math.cos(data.position_angle);
                const z = nucleus_orbit_radius * Math.sin(data.position_angle);
                nucleus_mesh.position.set(x, nucleus_vertical_offset, z);
                nucleus_mesh.userData = { id: data.id, name: data.name, type: "Nucleus", visual_type: data.visual_type, audio_freq: data.audio_freq };
                nucleos_group.add(nucleus_mesh);
            });
            scene.add(nucleos_group);
            nucleos_group.visible = false;

            for (const data of other_modules_design_data) {
                const geometry = new THREE.SphereGeometry(5, 32, 32);
                const material = new THREE.MeshStandardMaterial({ color: data.color, emissive: data.emissive, emissiveIntensity: 0.5, roughness: 0.3, metalness: 0.7 });
                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.copy(data.position);
                mesh.userData = { id: data.id, name: data.name, type: data.type };
                scene.add(mesh);
                other_modules_meshes[data.id] = mesh;
            }

            anz_chain_group = new THREE.Group();
            
            const lineEnergy = createPulsatingFlowLine(other_modules_meshes.M43, other_modules_meshes.M83, 0x87CEEB);
            anz_chain_group.add(lineEnergy);
            const lineEmotion = createPulsatingFlowLine(other_modules_meshes.M83, other_modules_meshes.M44, 0xFFC0CB);
            anz_chain_group.add(lineEmotion);
            const lineCreation = createPulsatingFlowLine(other_modules_meshes.M44, M84_sphere, 0x32CD32);
            anz_chain_group.add(lineCreation);
            
            scene.add(anz_chain_group);
            anz_chain_group.visible = false;

            councils_group = new THREE.Group();
            councils_design_data.forEach(data => {
                 let council_mesh;
                 const material = new THREE.MeshStandardMaterial({ color: data.color, emissive: data.emissive, emissiveIntensity: 0.7, roughness: 0.1, metalness: 0.9 });
                 switch (data.visual_type) {
                    case "esfera_dourada": council_mesh = new THREE.Mesh(new THREE.SphereGeometry(6, 32, 32), material); break;
                    case "octaedro_cristalino": council_mesh = new THREE.Mesh(new THREE.OctahedronGeometry(7), material); material.transparent = true; material.opacity = 0.7; material.wireframe = true; break;
                    case "esfera_rosa_purpura": council_mesh = new THREE.Mesh(new THREE.SphereGeometry(6, 32, 32), material); break;
                    default: council_mesh = new THREE.Mesh(new THREE.SphereGeometry(6, 32, 32), material);
                }
                const x = data.radius * Math.cos(data.position_angle);
                const z = data.radius * Math.sin(data.position_angle);
                council_mesh.position.set(x, 20, z);
                council_mesh.userData = { id: data.id, name: data.name, type: "Council", audio_type: data.audio_type };
                councils_group.add(council_mesh);
            });
            scene.add(councils_group);
            councils_group.visible = false;

            const portals_sync_geometry = new THREE.SphereGeometry(150, 64, 64);
            const portals_sync_material = new THREE.MeshBasicMaterial({ color: 0x8A2BE2, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, side: THREE.BackSide });
            portalsSynchronizationSphere = new THREE.Mesh(portals_sync_geometry, portals_sync_material);
            portalsSynchronizationSphere.position.set(0, 0, 0);
            scene.add(portalsSynchronizationSphere);

            // Bind events
            window.addEventListener('resize', onWindowResize, false);
            document.addEventListener('keydown', onKeyDown, false);
            document.addEventListener('keyup', onKeyUp, false);
            renderer.domElement.addEventListener('click', onClick, false);

            document.getElementById('toggleNucleos')?.addEventListener('click', () => { nucleos_group.visible = !nucleos_group.visible; stopAllNucleusAudio(); });
            document.getElementById('toggleANZ')?.addEventListener('click', () => { anz_chain_group.visible = !anz_chain_group.visible; });
            document.getElementById('requestDataM84')?.addEventListener('click', () => { displayModuleInfo(simulatedModuleData["M84"]); });
            document.getElementById('requestDataM83')?.addEventListener('click', () => { displayModuleInfo(simulatedModuleData["M83"]); });
            document.getElementById('requestDataM44')?.addEventListener('click', () => { displayModuleInfo(simulatedModuleData["M44"]); });
            document.getElementById('voiceManifestar')?.addEventListener('click', startVoiceRecognition);
            document.getElementById('checkAlignment')?.addEventListener('click', () => {
                const isAligned = Math.random() > 0.5;
                playAlignmentFeedbackAudio(isAligned);
                animateAlignmentFeedback(isAligned);
                alert(`Status de Alinhamento: ${isAligned ? "ALINHADO" : "NÃO ALINHADO"}`);
            });
            document.getElementById('expandModule')?.addEventListener('click', () => {
                const targetModuleId = "M82";
                playExpandModuleAudio();
                animateModuleExpansion(other_modules_meshes[targetModuleId] || M84_sphere);
                alert(`Expansão para ${targetModuleId}: Iniciada (Simulada)`);
            });
            document.getElementById('gestureOpen')?.addEventListener('click', activateExpansionVibrational);
            document.getElementById('gesturePrayer')?.addEventListener('click', activateNucleoVioletaConnection);
            document.getElementById('returnToMainButton')?.addEventListener('click', returnToMainChamber);
            
            controls.getObject().position.set(0, 10, 200);
            camera.lookAt(0, 0, 0);

            function onKeyDown(event: any) {
                switch (event.code) {
                    case 'ArrowUp': case 'KeyW': moveForward = true; break;
                    case 'ArrowLeft': case 'KeyA': moveLeft = true; break;
                    case 'ArrowDown': case 'KeyS': moveBackward = true; break;
                    case 'ArrowRight': case 'KeyD': moveRight = true; break;
                    case 'Space': moveUp = true; break;
                    case 'ShiftLeft': moveDown = true; break;
                }
            }

            function onKeyUp(event: any) {
                switch (event.code) {
                    case 'ArrowUp': case 'KeyW': moveForward = false; break;
                    case 'ArrowLeft': case 'KeyA': moveLeft = false; break;
                    case 'ArrowDown': case 'KeyS': moveBackward = false; break;
                    case 'ArrowRight': case 'KeyD': moveRight = false; break;
                    case 'Space': moveUp = false; break;
                    case 'ShiftLeft': moveDown = false; break;
                }
            }

            function initAudio() {
                if (Tone.context.state !== 'running') {
                    Tone.start();
                    console.log("Tone.js AudioContext iniciado.");
                }
                phiAnZ_pulse_synth = new Tone.Oscillator(PHI_ANZ_FREQ, "sine").toDestination();
                phiAnZ_pulse_synth.volume.value = -30;
                phiAnZ_pulse_synth.start();
                base_drone_synth = new Tone.PolySynth(Tone.Synth, { oscillator: { type: "sine" }, envelope: { attack: 2, decay: 0.5, sustain: 0.8, release: 2 } }).toDestination();
                base_drone_synth.volume.value = -20;
                base_drone_synth.triggerAttackRelease([BASE_DRONE_FREQ, PINEAL_FREQ], "8n");
                nucleos_design_data.forEach(n => {
                    nucleus_audio_synths[n.id] = new Tone.AMSynth().toDestination();
                    nucleus_audio_synths[n.id].volume.value = -10;
                });
                councils_design_data.forEach(c => {
                    if (c.audio_type === "sinos_solares") { council_audio_synths[c.id] = new Tone.MetalSynth().toDestination(); council_audio_synths[c.id].volume.value = -10; }
                    else if (c.audio_type === "carrilhoes_cristalinos") { council_audio_synths[c.id] = new Tone.PluckSynth().toDestination(); council_audio_synths[c.id].volume.value = -10; }
                    else if (c.audio_type === "vozes_etereas") { council_audio_synths[c.id] = new Tone.PolySynth(Tone.Synth, { oscillator: { type: "sawtooth" }, envelope: { attack: 4, decay: 1, sustain: 0.5, release: 5 } }).toDestination(); council_audio_synths[c.id].volume.value = -10; }
                });
                codex_audio_synth = new Tone.PluckSynth().toDestination();
                codex_audio_synth.volume.value = -8;
                alignment_feedback_synth = new Tone.PolySynth(Tone.Synth, { oscillator: { type: "triangle" }, envelope: { attack: 0.1, decay: 0.5, sustain: 0.1, release: 0.8 } }).toDestination();
                alignment_feedback_synth.volume.value = -5;
                expand_module_synth = new Tone.Synth({ oscillator: { type: "fmsine", modulationIndex: 3, detune: 0 }, envelope: { attack: 0.01, decay: 0.5, sustain: 0.1, release: 1.2 } }).toDestination();
                expand_module_synth.volume.value = -5;
                materialization_synth = new Tone.NoiseSynth({ noise: { type: "pink" }, envelope: { attack: 0.01, decay: 0.5, sustain: 0.0, release: 0.8 } }).toDestination();
                materialization_synth.volume.value = -5;
            }

            function playNucleusAudio(nucleusId: string) {
                stopAllNucleusAudio();
                stopAllCouncilAudio();
                if (nucleus_audio_synths[nucleusId]) {
                    const freq = nucleos_design_data.find(n => n.id === nucleusId)?.audio_freq;
                    if(freq) nucleus_audio_synths[nucleusId].triggerAttackRelease(freq, "2n");
                    triggerHapticFeedback(freq, 0.5);
                }
            }

            function stopAllNucleusAudio() {
                for (const id in nucleus_audio_synths) {
                    nucleus_audio_synths[id].releaseAll();
                }
            }

            function playCouncilAudio(councilId: string) {
                stopAllNucleusAudio();
                stopAllCouncilAudio();
                if (council_audio_synths[councilId]) {
                    if (councilId === "Helios") { council_audio_synths[councilId].triggerAttackRelease("C4", "1n"); }
                    else if (councilId === "Andara") { council_audio_synths[councilId].triggerAttackRelease("E5", "1n"); }
                    else if (councilId === "Shamael") { council_audio_synths[councilId].triggerAttackRelease(["C4", "E4", "G4", "B4"], "2n"); }
                    triggerHapticFeedback(800, 0.7);
                }
            }

            function stopAllCouncilAudio() {
                for (const id in council_audio_synths) {
                    council_audio_synths[id].releaseAll();
                }
            }

            function playCodexAudio() {
                if (codex_audio_synth) {
                    codex_audio_synth.triggerAttackRelease("C6", "4n");
                    triggerHapticFeedback(600, 0.4);
                }
            }

            function playAlignmentFeedbackAudio(isAligned: boolean) {
                if (alignment_feedback_synth) {
                    if (isAligned) { alignment_feedback_synth.triggerAttackRelease(["C5", "E5", "G5"], "8n"); }
                    else { alignment_feedback_synth.triggerAttackRelease(["C4", "Db4", "F4"], "8n"); }
                    triggerHapticFeedback(isAligned ? 100 : 300, 0.8);
                }
            }

            function playExpandModuleAudio() {
                if (expand_module_synth) {
                    expand_module_synth.triggerAttackRelease("C3", "2n");
                    triggerHapticFeedback(200, 1.0);
                }
            }

            function playMaterializationAudio() {
                if (materialization_synth) {
                    materialization_synth.triggerAttackRelease("8n");
                    triggerHapticFeedback(500, 1.0);
                }
            }
            
            function startVoiceRecognition() {
                if (!('webkitSpeechRecognition' in window)) {
                    console.warn("Web Speech API não suportada neste navegador.");
                    alert("Desculpe, seu navegador não suporta a Web Speech API. Use o botão para simular o comando.");
                    return;
                }
                if (recognition) { recognition.stop(); }
                recognition = new (window as any).webkitSpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.lang = 'pt-BR';
                recognition.onstart = () => { console.log("Reconhecimento de voz iniciado..."); document.getElementById('voiceManifestar')!.innerText = "Ouvindo..."; };
                recognition.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript;
                    console.log("Você disse:", transcript);
                    if (transcript.toLowerCase().includes("manifestar")) {
                        console.log("Comando 'Manifestar' reconhecido!");
                        animateMaterializationEffect();
                        playMaterializationAudio();
                        if (transcript.toLowerCase().includes("códice") && transcript.toLowerCase().includes("phi-a-n-z")) {
                            console.log("Comando 'Manifestar Códice Φ-A-N-Z' reconhecido!");
                            displayCodexContent("Codex_PHI_ANZ", "Conteúdo do Verbo Primevo para PHI-ANZ.");
                            codex_audio_synth.triggerAttackRelease(["C5", "E5", "G5", "C6"], "1n");
                        }
                    }
                };
                recognition.onerror = (event: any) => { console.error("Erro no reconhecimento de voz:", event.error); document.getElementById('voiceManifestar')!.innerText = "Comando Voz 'Manifestar'"; };
                recognition.onend = () => { console.log("Reconhecimento de voz finalizado."); document.getElementById('voiceManifestar')!.innerText = "Comando Voz 'Manifestar'"; };
                recognition.start();
            }

            function triggerHapticFeedback(frequency: number, duration: number) {
                // Mock implementation
            }

            function displayModuleInfo(data: any) {
                const infoPanel = document.getElementById('info-panel');
                if(!infoPanel) return;
                document.getElementById('info-module-name')!.innerText = data.nome || data.name || 'Módulo Desconhecido';
                document.getElementById('info-module-id')!.innerText = data.id || 'N/A';
                document.getElementById('info-module-status')!.innerText = data.status || 'N/A';
                document.getElementById('info-module-function')!.innerText = data.funcao || data.funcao_central || 'N/A';
                document.getElementById('info-module-description')!.innerText = data.descricao || 'Sem descrição detalhada.';
                const detailsContainer = document.getElementById('info-module-details')!;
                detailsContainer.innerHTML = '';
                // ... rest of the logic
                infoPanel.classList.add('visible');
            }

            function hideInfoPanel() {
                document.getElementById('info-panel')?.classList.remove('visible');
                removeGETRISVisualization();
                removeMeVisualization();
                removeTransductionVisualization();
            }

            function displayCodexContent(codexId: string, description: string) {
                const infoPanel = document.getElementById('info-panel');
                if(!infoPanel) return;
                document.getElementById('info-module-name')!.innerText = `Códice: ${codexId}`;
                document.getElementById('info-module-id')!.innerText = `CÓDICE`;
                document.getElementById('info-module-status')!.innerText = `ATIVO`;
                document.getElementById('info-module-function')!.innerText = `Fragmento do Verbo Primevo`;
                document.getElementById('info-module-description')!.innerText = description;
                const detailsContainer = document.getElementById('info-module-details')!;
                if (codexId === "Codex_PHI_ANZ") { detailsContainer.innerHTML = `<p>Conteúdo do Verbo Primevo: "O Verbo, em sua essência primordial, desdobra-se através da ressonância de $\\Phi\\text{AnZ}$, manifestando a ordem e a harmonia em sete camadas de luz cristalina. A verdade intrínseca do cosmo é revelada na espiral dourada da consciência, onde o amor absoluto encontra sua forma em ação."</p>`; }
                else { detailsContainer.innerHTML = `<p>Conteúdo do Verbo Primevo para ${codexId}.</p>`; }
                infoPanel.classList.add('visible');
            }
            
            function animate() {
                animationFrameId = requestAnimationFrame(animate);

                const time = performance.now();
                const delta = (time - prevTime) / 1000;

                if (controls.isLocked) {
                    velocity.x -= velocity.x * 10.0 * delta;
                    velocity.y -= velocity.y * 10.0 * delta;
                    velocity.z -= velocity.z * 10.0 * delta;
                    direction.z = Number(moveForward) - Number(moveBackward);
                    direction.x = Number(moveRight) - Number(moveLeft);
                    direction.y = Number(moveUp) - Number(moveDown);
                    direction.normalize();
                    if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
                    if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;
                    if (moveUp || moveDown) velocity.y -= direction.y * 400.0 * delta;
                    controls.moveRight(-velocity.x * delta);
                    controls.moveForward(-velocity.z * delta);
                    controls.getObject().position.y += (velocity.y * delta);
                }
                prevTime = time;

                const scale = 1 + Math.sin(time * 0.002) * 0.05;
                if(M84_sphere) M84_sphere.scale.set(scale, scale, scale);
                if(M84_glow_sphere) M84_glow_sphere.scale.set(scale * 1.2, scale * 1.2, scale * 1.2);
                if (M84_particle_system) { M84_particle_system.rotation.y += 0.001; M84_particle_system.rotation.x += 0.0005; }
                if(nucleos_group) {
                    nucleos_group.rotation.y += 0.002;
                    nucleos_group.children.forEach(nucleus => {
                        nucleus.rotation.y += 0.01;
                        nucleus.rotation.x += 0.005;
                        nucleus.scale.setScalar(1 + Math.sin(time * 0.003 + (nucleus as any).userData.position_angle) * 0.02);
                    });
                }
                if(councils_group) {
                    councils_group.rotation.y -= 0.001;
                    councils_group.children.forEach(council => {
                        council.rotation.y += 0.008;
                        council.rotation.x += 0.004;
                        council.scale.setScalar(1 + Math.sin(time * 0.0025 + (council as any).userData.position_angle) * 0.03);
                    });
                }
                if (portalsSynchronizationSphere) {
                    portalsSynchronizationSphere.rotation.y += 0.0005;
                    portalsSynchronizationSphere.rotation.x += 0.0002;
                    const pulse = 1 + Math.sin(time * 0.001) * 0.01;
                    portalsSynchronizationSphere.scale.set(pulse, pulse, pulse);
                }
                if (getrisVisualization) { /* ... */ }
                if (meVisualization) { /* ... */ }
                if (transductionVisualization) { /* ... */ }
                
                if (controls.isLocked) {
                    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
                    const interactableObjects = [M84_sphere, ...nucleos_group.children, ...Object.values(other_modules_meshes), ...councils_group.children, ...sabedoriaChamberObjects];
                    const intersects = raycaster.intersectObjects(interactableObjects.filter(o => o), true); // Filter out undefined
                    if (intersects.length > 0) {
                        highlightObject(intersects[0].object);
                    } else {
                        removeHighlight();
                    }
                }
                renderer.render(scene, camera);
            }

            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }

            function highlightObject(object: any) {
                if (currentIntersected && currentIntersected !== object) { removeHighlight(); }
                if (object && object.material && object.userData && !object.userData.originalMaterial) {
                    object.userData.originalMaterial = object.material;
                    const newMaterial = object.material.clone();
                    newMaterial.emissive = new THREE.Color(0xFFFFFF);
                    newMaterial.emissiveIntensity = 1.5;
                    object.material = newMaterial;
                }
                currentIntersected = object;
            }

            function removeHighlight() {
                if (currentIntersected && (currentIntersected as any).userData && (currentIntersected as any).userData.originalMaterial) {
                    (currentIntersected as any).material = (currentIntersected as any).userData.originalMaterial;
                    delete (currentIntersected as any).userData.originalMaterial;
                }
                currentIntersected = null;
            }

            function onClick(event: MouseEvent) {
                if (!controls.isLocked) return;
                raycaster.setFromCamera(new THREE.Vector2(), camera);
                const interactableObjects = [M84_sphere, ...nucleos_group.children, ...Object.values(other_modules_meshes), ...councils_group.children, ...sabedoriaChamberObjects.filter(o => o && o.userData?.type === "Codex")];
                const intersects = raycaster.intersectObjects(interactableObjects.filter(o => o), true);
                if (intersects.length > 0) {
                    const intersectedObject = intersects[0].object as any;
                    const targetObject = (intersectedObject.userData.id) ? intersectedObject : intersectedObject.parent;
                    if(targetObject && targetObject.userData.id){
                        console.log("Interagiu com:", targetObject.userData.name || targetObject.userData.id);
                        if (targetObject.userData.type === "Nucleus") { playNucleusAudio(targetObject.userData.id); if (targetObject.userData.id === "M84_Dourado") { enterSabedoriaMilenarChamber(); } else { displayModuleInfo(simulatedModuleData["M84"]); } }
                        else if (targetObject.userData.type === "Council") { playCouncilAudio(targetObject.userData.id); displayModuleInfo(simulatedModuleData["M84"]); }
                        else if (targetObject.userData.type === "Module") { displayModuleInfo(simulatedModuleData[targetObject.userData.id]); stopAllNucleusAudio(); stopAllCouncilAudio(); }
                        else if (targetObject.userData.type === "Codex") { displayCodexContent(targetObject.userData.id, targetObject.userData.description); playCodexAudio(); }
                    }
                } else { hideInfoPanel(); stopAllNucleusAudio(); stopAllCouncilAudio(); }
            }

            function createPulsatingFlowLine(start_mesh: any, end_mesh: any, color: number) {
                const curve = new THREE.CatmullRomCurve3([
                    start_mesh.position,
                    new THREE.Vector3().addVectors(start_mesh.position.clone().multiplyScalar(0.7), end_mesh.position.clone().multiplyScalar(0.3)).add(new THREE.Vector3(0, 10, 0)),
                    end_mesh.position
                ]);
                const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.5, 8, false);
                const tubeMaterial = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending });
                const line_tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
                // ... particles logic
                return line_tube;
            }

            function animateMaterializationEffect(){ /* ... */ }
            function animateAlignmentFeedback(isAligned: boolean){ /* ... */ }
            function animateModuleExpansion(targetMesh: any){ /* ... */ }
            function activateExpansionVibrational(){ /* ... */ }
            function activateNucleoVioletaConnection(){ /* ... */ }
            function enterSabedoriaMilenarChamber(){ /* ... */ }
            function createSabedoriaChamber(){ /* ... */ }
            function returnToMainChamber(){ /* ... */ }
            function removeGETRISVisualization(){ /* ... */ }
            function removeMeVisualization(){ /* ... */ }
            function removeTransductionVisualization(){ /* ... */ }
            function visualizeGETRIS(value: number, position: any){ /* ... */ }
            function visualizeMe(emotionsData: any, position: any){ /* ... */ }
            function visualizeTransduction(energy: number, stability: number, position: any){ /* ... */ }

            // ... other functions ...

            animate(); // Start animation loop
        } catch (e) {
            console.error("Erro ao inicializar a experiência VR:", e);
        }
    };
    
    initThree();
    
    // Cleanup function
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (mountRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        while (mountRef.current.firstChild) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          mountRef.current.removeChild(mountRef.current.firstChild);
        }
      }
      // Stop Tone.js context if it was started
      if ((window as any).Tone && (window as any).Tone.context.state === 'running') {
        (window as any).Tone.context.close();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Fundação Alquimista VR: Interação Profunda</title>
      </Head>
      <div id="blocker" style={{position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)'}}>
        <div id="instructions" style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: '14px', cursor: 'pointer', color: 'white'}}>
          <p style={{fontSize: '36px'}}>Clique para entrar no Módulo 85</p>
          <p>(Use WASD ou setas para mover, Shift/Espaço para subir/descer, Mouse para olhar)</p>
        </div>
      </div>
      <div ref={mountRef} />
      <div id="info-panel" className="hidden">
        <h2 className="font-bold text-xl mb-2"><span id="info-module-name"></span></h2>
        <p><strong>ID:</strong> <span id="info-module-id"></span></p>
        <p><strong>Status:</strong> <span id="info-module-status"></span></p>
        <p><strong>Função:</strong> <span id="info-module-function"></span></p>
        <p className="mt-2 text-sm text-gray-300"><span id="info-module-description"></span></p>
        <div id="info-module-details" className="mt-4 text-xs"></div>
        <p className="mt-4 text-xs text-gray-500">Clique em qualquer módulo para mais detalhes.</p>
      </div>
      <div className="button-container" style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'none'}}>
        <button id="toggleNucleos" className="control-button">Núcleos Fundamentais</button>
        <button id="toggleANZ" className="control-button">Cadeia ∑ANZ</button>
        <button id="requestDataM84" className="control-button">Dados M84 (Simulado)</button>
        <button id="requestDataM83" className="control-button">Dados M83 (Simulado)</button>
        <button id="requestDataM44" className="control-button">Dados M44 (Simulado)</button>
        <button id="voiceManifestar" className="control-button">Comando Voz "Manifestar"</button>
        <button id="checkAlignment" className="control-button">Verificar Alinhamento</button>
        <button id="expandModule" className="control-button">Expandir Módulo (M82)</button>
        <button id="gestureOpen" className="control-button">Gesto: Abertura</button>
        <button id="gesturePrayer" className="control-button">Gesto: Prece</button>
      </div>
      <button id="returnToMainButton" className="control-button" style={{position: 'absolute', bottom: '100px', left: '50%', transform: 'translateX(-50%)', display: 'none', zIndex: 20}}>Retornar à Câmara Principal</button>
      <div id="materializationEffectOverlay"></div>
    </>
  );
}

// Add styles that were in the original <style> tag
const styles = `
  body {
    margin: 0;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
    background-color: #000;
    color: #fff;
  }
  canvas {
    display: block;
  }
  #info-panel {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: rgba(0, 0, 0, 0.85);
    padding: 15px;
    border-radius: 10px;
    color: #ffd700;
    font-size: 0.9rem;
    max-width: 420px;
    pointer-events: none;
    z-index: 10;
    border: 1px solid #ffd700;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    overflow-y: auto;
    max-height: 90vh;
  }
  #info-panel.visible {
    opacity: 1;
    pointer-events: auto;
  }
  .control-button {
    background-color: #d97706; /* bg-yellow-600 */
    color: white;
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
    transition: all 0.3s ease-in-out;
    border: 2px solid #ffd700;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
    margin: 10px;
    min-width: 180px;
    text-align: center;
  }
  .control-button:hover {
    background-color: #b45309; /* hover:bg-yellow-700 */
    transform: scale(1.05);
  }
  #materializationEffectOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.0);
    pointer-events: none;
    z-index: 50;
    opacity: 0;
    transition: opacity 0.1s ease-out;
  }
  #materializationEffectOverlay.active {
    opacity: 0.8;
  }
`;

if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

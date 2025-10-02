
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Definição das tecnologias alvo e métodos de verificação, como proposto.
const TECNOLOGIAS_ALVO = [
    "Apollo GraphQL", "(@apollo/gateway, @apollo/server)", "CI/CD (GitHub Actions)",
    "CSS (Tailwind CSS)", "Docker", "Express.js", "Firebase", "Firestore Functions",
    "Hosting", "Genkit", "Git & GitHub Actions", "GraphQL", "HTML", "JavaScript",
    "JSON (JavaScript Object Notation)", "JWT (JSON Web Tokens)", "Lucide React",
    "MongoDB (com Mongoose)", "NATS", "Next.js", "Playwright", "Python",
    "React", "react-three/fiber", "@react-three/drei", "ShadCN/UI (e Radix UI)",
    "Tailwind CSS", "Three.js / React Three Fiber", "TypeScript", "Vercel KV",
    "Vitest & Playwright", "WebAuthn (Passkeys)", "YAML", "Zod", "WebGPU",
    "WebXR", "WebAssembly", "Quantum Algorithms (Qiskit.js)", "WebAudio API",
    "Web Bluetooth", "Haptic.js", "Spatial Tracking", "Shadcn/UI & Radix",
    "EEG Web Bluetooth", "ML para neurodecodificação", "TensorFlow.js",
    "BrainFlow.js", "Quantum Simulation Libraries", "3D Math", "Recharts",
    "Bibliotecas pip list", "BLOCKCHAIN", "cluster quântico",
    "criptografado com ProtoGlyphs", "Hash", "AES512", "Espectrograma-Scanner",
    "Holo-simulação BioQuântica",
    "Visualizações Interativas (espectrograma TFQM, matrizes EAFR, fractais 4D em WebGL)",
    "Unity ou Unreal Engine", "Scanner de Ressonância e Acesso Ético", "API RESTful",
    "HTML5 e CSS"
];

const MAPA_VERIFICACAO = {
    "GraphQL": { type: "npm", arg: "graphql" },
    "React": { type: "npm", arg: "react" },
    "Express.js": { type: "npm", arg: "express" },
    "TypeScript": { type: "npm", arg: "typescript" },
    "Docker": { type: "file", arg: "Dockerfile" },
    "Python": { type: "command", arg: "python3 --version" },
    "TensorFlow.js": { type: "npm", arg: "@tensorflow/tfjs" },
    "Next.js": { type: "npm", arg: "next" },
    "Apollo GraphQL": { type: "npm", arg: "@apollo/client" },
    "Zod": { type: "npm", arg: "zod" },
    "JWT (JSON Web Tokens)": { type: "npm", arg: "jsonwebtoken" },
    "MongoDB (com Mongoose)": { type: "npm", arg: "mongoose" },
    "Tailwind CSS": { type: "file", arg: "tailwind.config.js" },
    // Este mapa será expandido para cobrir as 61 tecnologias.
};

class SistemaAuditoriaEmpirica {
    constructor() {
        this.totalModulos = 1003;
        this.relatorioDetalhado = {};
        console.log("Sistema de Auditoria Empírica inicializado.");
    }

    verificarPacoteNPM(moduloPath, pacote) {
        try {
            const packageJsonPath = path.join(moduloPath, 'package.json');
            if (!fs.existsSync(packageJsonPath)) {
                return { presente: false, detalhes: "package.json não encontrado." };
            }
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            const presente = (packageJson.dependencies && packageJson.dependencies[pacote]) ||
                             (packageJson.devDependencies && packageJson.devDependencies[pacote]);
            const versao = (packageJson.dependencies && packageJson.dependencies[pacote]) ||
                           (packageJson.devDependencies && packageJson.devDependencies[pacote]);
            return { presente: !!presente, detalhes: `Versão: ${versao || 'N/A'}` };
        } catch (error) {
            return { presente: false, detalhes: `Erro ao ler package.json: ${error.message}` };
        }
    }

    verificarArquivo(moduloPath, arquivo) {
        const presente = fs.existsSync(path.join(moduloPath, arquivo));
        return { presente, detalhes: `Arquivo ${arquivo} ${presente ? 'encontrado' : 'não encontrado'}.` };
    }
    
    verificarComando(moduloPath, comando) {
        try {
            const output = execSync(comando, { cwd: moduloPath, stdio: 'pipe' });
            return { presente: true, detalhes: output.toString().trim() };
        } catch (error) {
            return { presente: false, detalhes: `Comando falhou: ${error.message}` };
        }
    }


    auditarModulo(moduloId) {
        const statusModulo = {};
        console.log(`  Verificando tecnologias em ${moduloId}...`);

        for (const tecnologia of TECNOLOGIAS_ALVO) {
            const metodo = MAPA_VERIFICACAO[tecnologia];
            if (!metodo) {
                statusModulo[tecnologia] = { presente: 'desconhecido', detalhes: "Método de verificação não definido." };
                continue;
            }
            
            let resultado;
            const moduloPath = path.resolve(process.cwd(), moduloId);
            if (!fs.existsSync(moduloPath)) {
                statusModulo[tecnologia] = { presente: false, detalhes: "Diretório do módulo não encontrado." };
                continue;
            }

            switch (metodo.type) {
                case "npm":
                    resultado = this.verificarPacoteNPM(moduloPath, metodo.arg);
                    break;
                case "file":
                    resultado = this.verificarArquivo(moduloPath, metodo.arg);
                    break;
                case "command":
                    resultado = this.verificarComando(moduloPath, metodo.arg);
                    break;
                default:
                    resultado = { presente: 'desconhecido', detalhes: "Tipo de verificação não implementado." };
            }
            statusModulo[tecnologia] = resultado;
        }
        return statusModulo;
    }

    async iniciarAuditoriaCompleta() {
        console.log("==================================================");
        console.log("⚛️   INICIANDO VARREDURA EMPÍRICA COMPLETA   ⚛️");
        console.log("==================================================");

        for (let i = 1; i <= this.totalModulos; i++) {
            const moduloId = `MODULO_${i}`;
            console.log(); // Adiciona uma linha em branco para espaçamento
            console.log(`📁 Analisando ${moduloId} (${i}/${this.totalModulos})...`);
            
            const status = this.auditarModulo(moduloId);
            
            const tecnologiasPresentes = Object.keys(status).filter(t => status[t].presente === true);
            const tecnologiasFaltantes = Object.keys(status).filter(t => status[t].presente === false);
            const tecnologiasDesconhecidas = Object.keys(status).filter(t => status[t].presente === 'desconhecido');

            const totalVerificavel = tecnologiasPresentes.length + tecnologiasFaltantes.length;
            const percentual = totalVerificavel > 0 ? (tecnologiasPresentes.length / totalVerificavel) * 100 : 0;

            this.relatorioDetalhado[moduloId] = {
                status: "Analisado",
                percentualCompleto: percentual.toFixed(2) + '%',
                tecnologias: status,
            };
        }
        
        this.gerarRelatorioConsolidado();
    }

    gerarRelatorioConsolidado() {
        console.log(); // Adiciona uma linha em branco para espaçamento
        console.log("==================================================");
        console.log("💾 Gerando Relatório de Auditoria Consolidado...");
        console.log("==================================================");
        try {
            fs.writeFileSync(
                'relatorio_auditoria_empirica.json', 
                JSON.stringify(this.relatorioDetalhado, null, 2),
                'utf-8'
            );
            console.log("✅ Relatório salvo com sucesso em 'relatorio_auditoria_empirica.json'");
        } catch (error) {
            console.error("❗️ Erro ao salvar o relatório:", error);
        }
    }
}

// Executar imediatamente a auditoria completa.
const auditoria = new SistemaAuditoriaEmpirica();
auditoria.iniciarAuditoriaCompleta().catch(console.error);

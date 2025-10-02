
import os
import subprocess
import json
from datetime import datetime

# A lista completa das 61 tecnologias que a Fundação deve possuir.
TECNOLOGIAS_ALVO = [
    "Apollo GraphQL", "(@apollo/gateway, @apollo/server)", "CI/CD (GitHub Actions)", 
    "CSS (Tailwind CSS)", "Docker", "Express.js", "Firebase", "Firestore Functions", 
    "Hosting", "Genkit", "Git & GitHub Actions", "GraphQL", "HTML", "JavaScript", 
    "JSON (JavaScript Object Notation)", "JWT (JSON Web Tokens)", "Lucide React", 
    "MongoDB (com Mongoose)", "NATS", "Next.js", "Playwright", "Python", "React", 
    "react-three/fiber", "@react-three/drei", "ShadCN/UI (e Radix UI)", 
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
]

# Mapeamento de tecnologias para métodos de verificação
# Chave: Nome da tecnologia (de TECNOLOGIAS_ALVO)
# Valor: (tipo_verificacao, argumento_verificacao)
#   - tipo_verificacao: "npm", "pip", "file"
#   - argumento_verificacao: nome do pacote, nome do arquivo, etc.
MAPA_VERIFICACAO = {
    "GraphQL": ("npm", "graphql"),
    "React": ("npm", "react"),
    "Express.js": ("npm", "express"),
    "TypeScript": ("npm", "typescript"),
    "Docker": ("file", "Dockerfile"),
    "Python": ("file", "requirements.txt"),
    "TensorFlow.js": ("npm", "@tensorflow/tfjs"),
    "Next.js": ("npm", "next"),
    "Apollo GraphQL": ("npm", "@apollo/client"),
    "Zod": ("npm", "zod"),
    "JWT (JSON Web Tokens)": ("npm", "jsonwebtoken"),
    "MongoDB (com Mongoose)": ("npm", "mongoose"),
    "Tailwind CSS": ("file", "tailwind.config.js"),
}

def verificar_tecnologia(modulo_path, tecnologia):
    """Verifica empiricamente a presença de uma tecnologia em um módulo."""
    if not os.path.isdir(modulo_path):
        return {"instalado": False, "detalhes": "Diretório do módulo não encontrado."}

    metodo = MAPA_VERIFICACAO.get(tecnologia)
    if not metodo:
        return {"instalado": "desconhecido", "detalhes": "Método de verificação não definido."}

    tipo_verificacao, arg = metodo
    
    try:
        if tipo_verificacao == "npm":
            # Verifica se o package.json existe antes de rodar o npm
            if not os.path.exists(os.path.join(modulo_path, 'package.json')):
                 return {"instalado": False, "detalhes": "package.json não encontrado."}
            resultado = subprocess.run(
                ["npm", "list", arg, "--depth=0", "--json"], 
                capture_output=True, text=True, cwd=modulo_path, check=True
            )
            data = json.loads(resultado.stdout)
            instalado = arg in data.get("dependencies", {})
            return {"instalado": instalado, "detalhes": f"Versão: {data['dependencies'].get(arg, {}).get('version', 'N/A')}" if instalado else "Pacote não encontrado no package.json"}

        elif tipo_verificacao == "file":
            caminho_arquivo = os.path.join(modulo_path, arg)
            instalado = os.path.exists(caminho_arquivo)
            return {"instalado": instalado, "detalhes": f"Arquivo '{arg}' {'encontrado' if instalado else 'não encontrado'}."}

        # Adicionar outros tipos de verificação (pip, etc.) aqui no futuro.

    except (subprocess.CalledProcessError, FileNotFoundError, json.JSONDecodeError) as e:
        # Se o npm list falha (pacote não instalado), o CalledProcessError é capturado.
        if isinstance(e, subprocess.CalledProcessError) and tipo_verificacao == "npm":
            return {"instalado": False, "detalhes": "Pacote não listado pelo NPM."}
        return {"instalado": False, "detalhes": f"Erro na verificação: {str(e)}"}
        
    return {"instalado": "desconhecido", "detalhes": "Tipo de verificação não implementado."}

def auditar_fundacao():
    """Executa a auditoria completa em todos os módulos para todas as tecnologias-alvo."""
    print("⚛️  Iniciando Auditoria Quântica completa da Fundação...")
    num_modulos = 1003
    modulos = [f"MODULO_{i}" for i in range(1, num_modulos + 1)]
    
    relatorio_completo = {}

    for i, nome_modulo in enumerate(modulos):
        print(f"\n🔬 Analisando {nome_modulo} ({i+1}/{num_modulos})...")
        relatorio_completo[nome_modulo] = {
            "verificado_em": datetime.now().isoformat(),
            "tecnologias": {}
        }
        for tecnologia in TECNOLOGIAS_ALVO:
            resultado = verificar_tecnologia(nome_modulo, tecnologia)
            relatorio_completo[nome_modulo]["tecnologias"][tecnologia] = resultado

    print("\n💾 Salvando relatório completo em relatorio_auditoria_completa.json...")
    with open("relatorio_auditoria_completa.json", "w", encoding="utf-8") as f:
        json.dump(relatorio_completo, f, indent=2, ensure_ascii=False)
        
    print("✅ Auditoria Mestre concluída com sucesso!")

if __name__ == "__main__":
    auditar_fundacao()

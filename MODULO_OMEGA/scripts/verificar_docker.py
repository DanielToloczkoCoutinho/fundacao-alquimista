import subprocess, json
from datetime import datetime

def verificar_docker():
    print("🔍 Verificando Docker...")
    # Cria o diretório de manifestos se ele não existir
    import os
    os.makedirs("MODULO_9/manifestos", exist_ok=True)

    resultado = subprocess.run(["docker", "--version"], capture_output=True, text=True)
    instalado = "Docker version" in resultado.stdout

    artefato = {
        "tecnologia": "Docker",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "versao_detectada": resultado.stdout.strip()
    }

    with open("MODULO_9/manifestos/verificacao_docker.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação do Docker registrada em MODULO_9/manifestos/verificacao_docker.json")

if __name__ == "__main__":
    verificar_docker()

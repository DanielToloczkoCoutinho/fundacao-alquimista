import subprocess
import json
import os
from datetime import datetime

def verificar_docker():
    print("🐳 Verificando Docker...")
    try:
        resultado = subprocess.run(["docker", "--version"], capture_output=True, text=True, check=True)
        versao = resultado.stdout.strip()
        instalado = True
    except (subprocess.CalledProcessError, FileNotFoundError):
        versao = "não instalado"
        instalado = False

    artefato = {
        "tecnologia": "Docker",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "versao_detectada": versao,
        "comentario": "Verifica a presença e a versão do Docker, essencial para a conteinerização dos módulos."
    }
    
    os.makedirs("MODULO_OMEGA/manifestos", exist_ok=True)
    with open("MODULO_OMEGA/manifestos/verificacao_docker.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação do Docker registrada.")

if __name__ == "__main__":
    verificar_docker()

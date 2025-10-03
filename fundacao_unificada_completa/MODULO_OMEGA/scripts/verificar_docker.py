
import subprocess, json
from datetime import datetime

def verificar_docker():
    print("🐳 Verificando Docker...")
    try:
        resultado = subprocess.run(['docker', '--version'], capture_output=True, text=True, check=True)
        instalado = True
        detalhes = resultado.stdout.strip()
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        instalado = False
        detalhes = str(e)

    artefato = {
        "tecnologia": "Docker",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "detalhes": detalhes
    }

    import os
    os.makedirs("MODULO_9/manifestos", exist_ok=True)

    with open("MODULO_9/manifestos/verificacao_docker.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação do Docker registrada.")

if __name__ == "__main__":
    verificar_docker()

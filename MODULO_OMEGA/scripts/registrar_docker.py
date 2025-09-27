import json
from datetime import datetime
import os

def registrar_docker():
    print("📜 Registrando Docker...")
    artefato = {
        "tecnologia": "Docker",
        "módulo_destino": "Todos os Módulos e Raiz do Projeto",
        "artefatos_gerados": [
            ".dockerignore",
            "docker-compose.yml",
            "MODULO_*/Dockerfile",
            "MODULO_OMEGA/Dockerfile"
        ],
        "função": "Conteinerizar cada módulo e orquestrar a Fundação com Docker Compose.",
        "estado": "Verificado e Integrado",
        "timestamp": datetime.now().isoformat(),
        "assinatura": "@Daniel-Anatheron"
    }
    os.makedirs("MODULO_OMEGA/manifestos", exist_ok=True)
    with open("MODULO_OMEGA/manifestos/registro_docker.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Registro do Docker criado em MODULO_OMEGA/manifestos/registro_docker.json")

if __name__ == "__main__":
    registrar_docker()

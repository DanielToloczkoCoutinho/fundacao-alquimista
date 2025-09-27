import json
from datetime import datetime
import os

def registrar_postgresql():
    print("📜 Registrando PostgreSQL...")
    artefato = {
        "tecnologia": "PostgreSQL",
        "módulo_destino": "Todos os Módulos de Serviço",
        "artefatos_gerados": [
            "Atualização no docker-compose.yml",
            "Atualização nos MODULO_*/apollo_server/package.json"
        ],
        "função": "Prover um banco de dados relacional isolado para cada módulo de serviço.",
        "estado": "Verificado e Integrado",
        "timestamp": datetime.now().isoformat(),
        "assinatura": "@Daniel-Anatheron"
    }
    os.makedirs("MODULO_OMEGA/manifestos", exist_ok=True)
    with open("MODULO_OMEGA/manifestos/registro_postgresql.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Registro do PostgreSQL criado em MODULO_OMEGA/manifestos/registro_postgresql.json")

if __name__ == "__main__":
    registrar_postgresql()

import json
from datetime import datetime
import os

def registrar_apollo_server():
    print("📜 Registrando @apollo/server...")
    artefato = {
        "tecnologia": "@apollo/server",
        "módulo_destino": "M9 — O Eremita (YESOD)",
        "artefatos_gerados": ["apollo_server/package.json", "apollo_server/index.js"],
        "função": "Prover um servidor GraphQL autônomo para o módulo.",
        "estado": "Verificado e Integrado",
        "timestamp": datetime.now().isoformat(),
        "assinatura": "@Daniel-Anatheron"
    }
    os.makedirs("MODULO_9/manifestos", exist_ok=True)
    with open("MODULO_9/manifestos/registro_apollo_server.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Registro do @apollo/server criado em MODULO_9/manifestos/registro_apollo_server.json")

if __name__ == "__main__":
    registrar_apollo_server()

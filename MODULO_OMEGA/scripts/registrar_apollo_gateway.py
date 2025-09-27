import json
from datetime import datetime
import os

def registrar_apollo_gateway():
    print("📜 Registrando @apollo/gateway...")
    artefato = {
        "tecnologia": "@apollo/gateway",
        "módulo_destino": "MΩ — A Coroa (KETER)",
        "artefatos_gerados": ["gateway/package.json", "gateway/index.js"],
        "função": "Federar todos os serviços GraphQL em um único supergráfico.",
        "estado": "Verificado e Integrado",
        "timestamp": datetime.now().isoformat(),
        "assinatura": "@Daniel-Anatheron"
    }
    os.makedirs("MODULO_OMEGA/manifestos", exist_ok=True)
    with open("MODULO_OMEGA/manifestos/registro_apollo_gateway.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Registro do @apollo/gateway criado em MODULO_OMEGA/manifestos/registro_apollo_gateway.json")

if __name__ == "__main__":
    registrar_apollo_gateway()

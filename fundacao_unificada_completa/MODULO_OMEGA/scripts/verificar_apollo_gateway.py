import subprocess, json
from datetime import datetime

def verificar_apollo_gateway():
    print("🔍 Verificando Apollo Gateway...")
    resultado = subprocess.run(["npm", "list", "@apollo/gateway", "--depth=0"], capture_output=True, text=True)
    instalado = "@apollo/gateway@" in resultado.stdout

    artefato = {
        "tecnologia": "Apollo Gateway",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "detalhes": resultado.stdout.strip()
    }

    with open("MODULO_OMEGA/manifestos/verificacao_apollo_gateway.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_apollo_gateway()
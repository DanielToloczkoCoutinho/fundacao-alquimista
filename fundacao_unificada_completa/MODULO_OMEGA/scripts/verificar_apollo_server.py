import subprocess, json
from datetime import datetime

def verificar_apollo_server():
    print("🔍 Verificando Apollo Server...")
    resultado = subprocess.run(["npm", "list", "@apollo/server", "--depth=0"], capture_output=True, text=True)
    instalado = "@apollo/server@" in resultado.stdout

    artefato = {
        "tecnologia": "Apollo Server",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "detalhes": resultado.stdout.strip()
    }

    with open("MODULO_9/manifestos/verificacao_apollo_server.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_apollo_server()
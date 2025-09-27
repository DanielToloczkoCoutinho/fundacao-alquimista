import subprocess, json
from datetime import datetime

def verificar_express():
    print("🔍 Verificando Express.js...")
    resultado = subprocess.run(["npm", "list", "express", "--depth=0"], capture_output=True, text=True)
    instalado = "express@" in resultado.stdout

    artefato = {
        "tecnologia": "Express.js",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "detalhes": resultado.stdout.strip()
    }

    with open("MODULO_9/manifestos/verificacao_express.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_express()
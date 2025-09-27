import subprocess, json
from datetime import datetime

def verificar_react():
    print("🔍 Verificando React...")
    resultado = subprocess.run(["npm", "list", "react", "--depth=0"], capture_output=True, text=True)
    instalado = "react@" in resultado.stdout

    artefato = {
        "tecnologia": "React",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "detalhes": resultado.stdout.strip()
    }

    with open("MODULO_9/manifestos/verificacao_react.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_react()
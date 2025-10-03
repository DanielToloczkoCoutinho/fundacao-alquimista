import subprocess, json
from datetime import datetime

def verificar_radix_ui():
    print("🔍 Verificando Radix UI...")
    resultado = subprocess.run(["npm", "list", "@radix-ui/react-tooltip", "--depth=0"], capture_output=True, text=True, cwd="MODULO_9")
    instalado = "@radix-ui/react-tooltip@" in resultado.stdout

    artefato = {
        "tecnologia": "Radix UI",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "detalhes": resultado.stdout.strip()
    }

    import os
    os.makedirs("MODULO_9/manifestos", exist_ok=True)

    with open("MODULO_9/manifestos/verificacao_radix_ui.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_radix_ui()

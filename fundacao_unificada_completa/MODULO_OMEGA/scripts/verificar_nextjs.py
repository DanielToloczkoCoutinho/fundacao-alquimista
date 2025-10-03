import subprocess, json
from datetime import datetime

def verificar_nextjs():
    print("🔍 Verificando Next.js...")
    # Adaptado para verificar dentro do Módulo 9
    resultado_next = subprocess.run(["npm", "list", "next"], capture_output=True, text=True, cwd="MODULO_9")
    next_instalado = "next@" in resultado_next.stdout

    resultado_react = subprocess.run(["npm", "list", "react"], capture_output=True, text=True, cwd="MODULO_9")
    react_instalado = "react@" in resultado_react.stdout

    artefato = {
        "tecnologia": "Next.js",
        "verificado_em": datetime.now().isoformat(),
        "next_instalado": next_instalado,
        "react_instalado": react_instalado
    }

    with open("MODULO_9/manifestos/verificacao_nextjs.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação do Next.js registrada.")

if __name__ == "__main__":
    verificar_nextjs()
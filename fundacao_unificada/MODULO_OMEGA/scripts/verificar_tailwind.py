
import subprocess, json
from datetime import datetime

def verificar_tailwind():
    print("🔍 Verificando Tailwind CSS...")
    # Executa o comando no diretório do Módulo 9
    resultado = subprocess.run(["npm", "list", "tailwindcss", "--depth=0"], capture_output=True, text=True, cwd="MODULO_9")
    instalado = "tailwindcss@" in resultado.stdout

    artefato = {
        "tecnologia": "Tailwind CSS",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "detalhes": resultado.stdout.strip()
    }

    import os
    os.makedirs("MODULO_9/manifestos", exist_ok=True)

    with open("MODULO_9/manifestos/verificacao_tailwind.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação de Tailwind CSS registrada.")

if __name__ == "__main__":
    verificar_tailwind()

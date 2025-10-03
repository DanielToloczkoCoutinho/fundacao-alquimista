import subprocess, json
from datetime import datetime

def verificar_lucide_react():
    print("🔍 Verificando Lucide React...")
    # Executa o comando no diretório do Módulo 9
    resultado = subprocess.run(["npm", "list", "lucide-react", "--depth=0"], capture_output=True, text=True, cwd="MODULO_9")
    instalado = "lucide-react@" in resultado.stdout

    artefato = {
        "tecnologia": "Lucide React",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "detalhes": resultado.stdout.strip()
    }
    
    # Garante que o diretório de manifestos exista
    import os
    os.makedirs("MODULO_9/manifestos", exist_ok=True)

    with open("MODULO_9/manifestos/verificacao_lucide_react.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_lucide_react()
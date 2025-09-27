import subprocess, json
from datetime import datetime

def verificar_typescript():
    print("🔍 Verificando TypeScript...")
    resultado = subprocess.run(["npx", "tsc", "--version"], capture_output=True, text=True)
    instalado = "Version" in resultado.stdout

    artefato = {
        "tecnologia": "TypeScript",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "versao_detectada": resultado.stdout.strip()
    }

    with open("MODULO_9/manifestos/verificacao_typescript.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_typescript()
import subprocess, json
from datetime import datetime

def verificar_shadcn_ui():
    print("🔍 Verificando ShadCN/UI...")
    resultado = subprocess.run(["npm", "list", "tailwindcss", "--depth=0"], capture_output=True, text=True, cwd="MODULO_9")
    tailwind_instalado = "tailwindcss@" in resultado.stdout

    resultado2 = subprocess.run(["npm", "list", "class-variance-authority", "--depth=0"], capture_output=True, text=True, cwd="MODULO_9")
    cva_instalado = "class-variance-authority@" in resultado2.stdout

    artefato = {
        "tecnologia": "ShadCN/UI",
        "verificado_em": datetime.now().isoformat(),
        "tailwindcss_instalado": tailwind_instalado,
        "class_variance_authority_instalado": cva_instalado
    }

    with open("MODULO_9/manifestos/verificacao_shadcn_ui.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_shadcn_ui()
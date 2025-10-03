import subprocess, json
from datetime import datetime

def verificar_react_three_fiber():
    print("🔍 Verificando React Three Fiber...")
    resultado = subprocess.run(["npm", "list", "@react-three/fiber", "--depth=0"], capture_output=True, text=True, cwd="MODULO_9")
    instalado = "@react-three/fiber@" in resultado.stdout

    artefato = {
        "tecnologia": "React Three Fiber",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "detalhes": resultado.stdout.strip()
    }

    import os
    os.makedirs("MODULO_9/manifestos", exist_ok=True)

    with open("MODULO_9/manifestos/verificacao_react_three_fiber.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_react_three_fiber()

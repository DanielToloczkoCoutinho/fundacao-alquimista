
import subprocess
import json
from datetime import datetime

def verificar_gateway():
    print("🔍 Verificando @apollo/gateway...")
    try:
        resultado = subprocess.run(["npm", "list", "@apollo/gateway"], capture_output=True, text=True, check=True)
        versao = resultado.stdout.split("@apollo/gateway@")[1].strip()
        print(f"✅ @apollo/gateway encontrado: Versão {versao}")
        return {"encontrado": True, "versao": versao}
    except (subprocess.CalledProcessError, IndexError):
        print("⚠️ @apollo/gateway não encontrado no ambiente.")
        return {"encontrado": False, "versao": None}

if __name__ == "__main__":
    verificar_gateway()

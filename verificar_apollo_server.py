
import subprocess
import json
from datetime import datetime

def verificar_server():
    print("🔍 Verificando @apollo/server...")
    try:
        resultado = subprocess.run(["npm", "list", "@apollo/server"], capture_output=True, text=True, check=True)
        versao = resultado.stdout.split("@apollo/server@")[1].strip()
        print(f"✅ @apollo/server encontrado: Versão {versao}")
        return {"encontrado": True, "versao": versao}
    except (subprocess.CalledProcessError, IndexError):
        print("⚠️ @apollo/server não encontrado no ambiente.")
        return {"encontrado": False, "versao": None}

if __name__ == "__main__":
    verificar_server()

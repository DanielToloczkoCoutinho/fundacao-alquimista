import subprocess, json
from datetime import datetime
import os

def verificar_apollo_server():
    print("🔍 Verificando @apollo/server...")
    try:
        # Usamos npm para verificar o pacote no ambiente Node.js
        resultado = subprocess.run(["npm", "list", "@apollo/server"], capture_output=True, text=True, check=True)
        versao = "não implementado"
        if "@apollo/server@" in resultado.stdout:
          versao = resultado.stdout.split("@apollo/server@")[1].split()[0]
        instalado = True
    except subprocess.CalledProcessError:
        versao = "não instalado"
        instalado = False

    artefato = {
        "tecnologia": "@apollo/server",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "versao_detectada": versao,
        "comentario": "Verifica a presença do pacote @apollo/server, essencial para rodar um servidor GraphQL independente."
    }
    
    os.makedirs("MODULO_9/manifestos", exist_ok=True)
    with open("MODULO_9/manifestos/verificacao_apollo_server.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação do @apollo/server registrada.")

if __name__ == "__main__":
    verificar_apollo_server()

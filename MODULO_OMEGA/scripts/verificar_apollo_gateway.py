import subprocess
import json
import os
from datetime import datetime

def verificar_apollo_gateway():
    print("🔍 Verificando @apollo/gateway...")
    try:
        # Usamos npm para verificar o pacote no ambiente Node.js
        resultado = subprocess.run(["npm", "list", "@apollo/gateway"], capture_output=True, text=True, check=True)
        versao = "não implementado"
        if "@apollo/gateway@" in resultado.stdout:
          versao = resultado.stdout.split("@apollo/gateway@")[1].split()[0]
        instalado = True
    except subprocess.CalledProcessError:
        versao = "não instalado"
        instalado = False

    artefato = {
        "tecnologia": "@apollo/gateway",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "versao_detectada": versao,
        "comentario": "Verifica a presença do pacote @apollo/gateway, crucial para a federação dos serviços."
    }
    
    os.makedirs("MODULO_OMEGA/manifestos", exist_ok=True)
    with open("MODULO_OMEGA/manifestos/verificacao_apollo_gateway.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação do @apollo/gateway registrada.")

if __name__ == "__main__":
    verificar_apollo_gateway()

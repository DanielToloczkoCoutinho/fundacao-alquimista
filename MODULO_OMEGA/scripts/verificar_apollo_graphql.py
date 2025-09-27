import subprocess, json
from datetime import datetime

def verificar_apollo_graphql():
    print("🔍 Verificando Apollo GraphQL...")
    try:
        # Como Apollo é uma especificação, verificamos a presença de uma biblioteca cliente comum
        resultado = subprocess.run(["pip", "show", "graphql-core"], capture_output=True, text=True, check=True)
        versao = next((linha.split(": ")[1] for linha in resultado.stdout.splitlines() if linha.startswith("Version:")), "não detectado")
        instalado = True
    except subprocess.CalledProcessError:
        versao = "não detectado"
        instalado = False

    artefato = {
        "tecnologia": "Apollo GraphQL",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "versao_detectada": versao,
        "comentario": "Verifica a implementação base do GraphQL em Python, sobre a qual as ferramentas Apollo normalmente operam."
    }

    with open("MODULO_9/manifestos/verificacao_apollo_graphql.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_apollo_graphql()

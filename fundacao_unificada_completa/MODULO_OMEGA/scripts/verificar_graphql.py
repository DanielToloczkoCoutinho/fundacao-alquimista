import subprocess, json
from datetime import datetime

def verificar_graphql():
    print("🔍 Verificando GraphQL...")
    resultado = subprocess.run(["npm", "list", "graphql", "--depth=0"], capture_output=True, text=True)
    instalado = "graphql@" in resultado.stdout

    artefato = {
        "tecnologia": "GraphQL",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "detalhes": resultado.stdout.strip()
    }

    with open("MODULO_9/manifestos/verificacao_graphql.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_graphql()
import subprocess, json
from datetime import datetime

def verificar_mongodb():
    print("🔍 Verificando MongoDB (pymongo)...")
    try:
        import pymongo
        pymongo_instalado = True
    except ImportError:
        pymongo_instalado = False

    artefato = {
        "tecnologia": "MongoDB",
        "verificado_em": datetime.now().isoformat(),
        "pymongo_instalado": pymongo_instalado,
    }

    with open("MODULO_9/manifestos/verificacao_mongodb.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação do MongoDB registrada.")

if __name__ == "__main__":
    verificar_mongodb()
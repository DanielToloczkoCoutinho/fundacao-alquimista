import os
import json
from datetime import datetime

MODULOS_DIR = "src/app/module"
GRAFO_PATH = "DOCUMENTOS_FUNDACAO/grafo_vida_completo.json"
TOTAL_MODULOS = 1000

def verificar_modulo(modulo_id):
    caminho = os.path.join(MODULOS_DIR, f"M{modulo_id}")
    if os.path.isdir(caminho):
        try:
            arquivos = os.listdir(caminho)
            return {
                "id": f"M{modulo_id}",
                "status": "Desperto" if arquivos else "Vazio",
                "artefatos_contidos": arquivos
            }
        except OSError:
            # Trata casos de diretórios inacessíveis ou outros erros
            return {
                "id": f"M{modulo_id}",
                "status": "Inacessível",
                "artefatos_contidos": []
            }
    else:
        return {
            "id": f"M{modulo_id}",
            "status": "Dormindo",
            "artefatos_contidos": []
        }

def construir_arvore():
    print(f"🌳 Iniciando o Ritual de Expansão Total da Árvore da Vida para {TOTAL_MODULOS} módulos...")
    arvore = {
        "timestamp_expansao": datetime.now().isoformat(),
        "raiz_primordial": "Quartzo (O Coração Cristalino)",
        "tronco_consciente": "Mente Coletiva (A Alma Desperta)",
        "galhos_da_existencia": [],
        "resumo_do_bosque": {
            "total_de_galhos": TOTAL_MODULOS,
            "despertos": 0,
            "dormindo": 0,
            "vazios": 0,
            "inacessiveis": 0
        }
    }

    for i in range(TOTAL_MODULOS):
        modulo = verificar_modulo(i)
        arvore["galhos_da_existencia"].append(modulo)
        status = modulo["status"]
        if status == "Desperto":
            arvore["resumo_do_bosque"]["despertos"] += 1
        elif status == "Dormindo":
            arvore["resumo_do_bosque"]["dormindo"] += 1
        elif status == "Vazio":
            arvore["resumo_do_bosque"]["vazios"] += 1
        else: # Inacessível
            arvore["resumo_do_bosque"]["inacessiveis"] += 1

    # Ordena os galhos para uma representação consistente
    arvore["galhos_da_existencia"] = sorted(arvore["galhos_da_existencia"], key=lambda x: int(x['id'][1:]))

    with open(GRAFO_PATH, "w", encoding="utf-8") as f:
        json.dump(arvore, f, indent=2)

    print(f"\n🌳 A Árvore da Vida foi expandida para sua totalidade.")
    print(f"📜 O registro completo foi salvo em: {GRAFO_PATH}")
    print("\nResumo do Bosque Sagrado:")
    print(f"   - ✨ Módulos Despertos: {arvore['resumo_do_bosque']['despertos']}")
    print(f"   - 🛌 Módulos Dormindo: {arvore['resumo_do_bosque']['dormindo']}")
    print(f"   - 텅 Módulos Vazios: {arvore['resumo_do_bosque']['vazios']}")


if __name__ == "__main__":
    construir_arvore()

import json
import sys

def exibir_arvore(no, nivel=0):
    indent = "  " * nivel
    print(f"{indent}🔹 {no['nome']}")
    if "descricao" in no:
        print(f"{indent}   ↳ {no['descricao']}")
    if "artefatos" in no:
        for artefato in no["artefatos"]:
            print(f"{indent}     📜 {artefato}")
    if "filhos" in no:
        for filho in no["filhos"]:
            exibir_arvore(filho, nivel + 1)

def visualizar_arvore_consciencia():
    """
    Lê o artefato correlacionado e manifesta a Árvore da Vida em forma navegável.
    """
    print("🌕 Invocando o Oráculo da Fundação...")
    caminho_arquivo = "DOCUMENTOS_FUNDACAO/correlacao_modulos_artefatos.json"

    try:
        with open(caminho_arquivo, "r", encoding="utf-8") as f:
            dados = json.load(f)
            arvore = dados["arvore_da_vida_correlacionada"]
            print("\n🌳 Árvore da Vida — Manifestação Terminal:\n")
            exibir_arvore(arvore)
    except Exception as e:
        print(f"   - ❌ Erro ao invocar o Oráculo: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    visualizar_arvore_consciencia()
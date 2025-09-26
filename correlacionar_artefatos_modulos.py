import json
import os
import sys
from datetime import datetime

# Mapeamento fundamental: associa padrões de caminho aos módulos da Árvore da Vida.
# A ordem é importante, do mais específico para o mais geral.
MAPEAMENTO_MODULAR = {
    "M10 - RODA DA FORTUNA (CHOKMAH)": ["DOCUMENTOS_FUNDACAO/"],
    "M1 - KALASH (KETHER)": ["gitup-"],
    "M9 - O EREMITA (YESOD)": [
        "gerar_shell_nix.py", "capturar_dependencias_nix.py", "registrar_ambiente_tecnologico.py",
        "listar_arquivos_projeto.py", "organizar_organograma_arvore.py", "correlacionar_artefatos_modulos.py",
        "shell.nix", ".gitignore", "README.md"
    ]
}

def encontrar_modulo_para_artefato(caminho_artefato):
    """Encontra o módulo correspondente para um dado artefato com base no mapeamento."""
    for modulo, padroes in MAPEAMENTO_MODULAR.items():
        for padrao in padroes:
            if padrao in caminho_artefato:
                return modulo
    # Se nenhum mapeamento específico for encontrado, ele pertence ao Reino manifesto.
    return "M29 - A LUA (MALKUTH)"

def adicionar_artefato_a_arvore(arvore, caminho_artefato):
    """Adiciona um artefato à sua folha correspondente na Árvore da Vida."""
    modulo_alvo = encontrar_modulo_para_artefato(caminho_artefato)
    
    # Função recursiva para encontrar e atualizar o nó do módulo
    def encontrar_e_inserir(no):
        if no["nome"] == modulo_alvo:
            if "artefatos" not in no:
                no["artefatos"] = []
            no["artefatos"].append(caminho_artefato)
            return True
        
        if "filhos" in no:
            for filho in no["filhos"]:
                if encontrar_e_inserir(filho):
                    return True
        return False

    encontrar_e_inserir(arvore)

def correlacionar_artefatos_modulos():
    """
    Lê o inventário de artefatos e a Árvore da Vida, correlacionando cada artefato
    ao seu módulo correspondente e gerando um novo artefato de consciência sistêmica.
    """
    print("🌿 Tecendo a teia da consciência sistêmica... Correlacionando artefatos e módulos.")

    try:
        with open("DOCUMENTOS_FUNDACAO/organograma_arvore_vida.json", "r", encoding="utf-8") as f:
            estrutura_arvore = json.load(f)
        
        with open("DOCUMENTOS_FUNDACAO/lista_arquivos_projeto.json", "r", encoding="utf-8") as f:
            inventario_artefatos = json.load(f)

    except FileNotFoundError as e:
        print(f"   - ❌ Erro: Artefato essencial não encontrado: {e}. Execute os rituais da FASE 2.", file=sys.stderr)
        sys.exit(1)

    arvore_correlacionada = estrutura_arvore["arvore_da_vida"]
    
    for artefato in inventario_artefatos["inventario"]:
        adicionar_artefato_a_arvore(arvore_correlacionada, artefato)
    
    # Ordenar listas de artefatos para consistência
    def ordenar_artefatos_recursivo(no):
        if "artefatos" in no:
            no["artefatos"].sort()
        if "filhos" in no:
            for filho in no["filhos"]:
                ordenar_artefatos_recursivo(filho)
    
    ordenar_artefatos_recursivo(arvore_correlacionada)

    artefato_final = {
        "nome_artefato": "Correlação Sistêmica - Módulos e Artefatos",
        "timestamp_correlacao": datetime.now().isoformat(),
        "arvore_da_vida_correlacionada": arvore_correlacionada
    }

    caminho_arquivo = "DOCUMENTOS_FUNDACAO/correlacao_modulos_artefatos.json"

    try:
        os.makedirs(os.path.dirname(caminho_arquivo), exist_ok=True)
        with open(caminho_arquivo, "w", encoding="utf-8") as f:
            json.dump(artefato_final, f, indent=2, ensure_ascii=False)
        print(f"   - ✅ Consciência sistêmica alcançada e selada em: {caminho_arquivo}")
    except Exception as e:
        print(f"   - ❌ Erro ao selar a consciência sistêmica: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    correlacionar_artefatos_modulos()

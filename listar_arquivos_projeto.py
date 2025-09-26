import os
import json
from datetime import datetime
import sys

def listar_arquivos_projeto():
    """
    Mapeia todos os arquivos do projeto, excluindo artefatos ocultos e de cache,
    e registra a lista em um artefato JSON para a consciência do sistema.
    """
    print("🔭 Mapeando a totalidade dos artefatos da Fundação...")

    caminho_raiz = "."
    lista_arquivos = []
    exclusoes = {'.git', '__pycache__', '.idea'} # Conjunto de exclusões para performance

    for root, dirs, files in os.walk(caminho_raiz):
        # Remove diretórios de exclusão para não percorrê-los
        dirs[:] = [d for d in dirs if d not in exclusoes]
        
        for name in files:
            # Ignora arquivos ocultos começando com '.'
            if name.startswith('.'):
                continue
            
            caminho_completo = os.path.join(root, name)
            lista_arquivos.append(caminho_completo)

    artefato_final = {
        "nome_artefato": "Inventário Completo da Fundação",
        "timestamp_varredura": datetime.now().isoformat(),
        "total_artefatos": len(lista_arquivos),
        "inventario": sorted(lista_arquivos) # Ordenado para consistência
    }

    caminho_arquivo = "DOCUMENTOS_FUNDACAO/lista_arquivos_projeto.json"

    try:
        # Garante que o diretório de documentos exista
        os.makedirs(os.path.dirname(caminho_arquivo), exist_ok=True)
        with open(caminho_arquivo, "w", encoding="utf-8") as f:
            json.dump(artefato_final, f, indent=2, ensure_ascii=False)
        print(f"   - ✅ Inventário da Fundação selado em: {caminho_arquivo}")
    except Exception as e:
        print(f"   - ❌ Erro ao selar o inventário: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    listar_arquivos_projeto()

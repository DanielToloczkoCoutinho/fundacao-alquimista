
import json
import os
from datetime import datetime

def depurar_correlacao():
    print("🔍 Iniciando o Ritual do Espelho da Verdade: Depuração de Correlação...")

    caminho_lista = "DOCUMENTOS_FUNDACAO/lista_arquivos_projeto.json"
    caminho_correlacao = "DOCUMENTOS_FUNDACAO/correlacao_modulos_artefatos.json"

    try:
        with open(caminho_lista, "r", encoding="utf-8") as f:
            lista_completa = json.load(f).get("inventario", [])
        with open(caminho_correlacao, "r", encoding="utf-8") as f:
            dados_correlacao = json.load(f)
            arvore = dados_correlacao["arvore_da_vida_correlacionada"]
    except Exception as e:
        print(f"❌ Erro ao carregar os artefatos sagrados: {e}")
        return

    def coletar_correlacionados(no, artefatos_set):
        # A lógica original do 'verificar_integridade_sistemica.py' usa caminhos relativos com ./, vamos replicar
        for artefato in no.get("artefatos", []) or []:
            # Garantir que o caminho comece com './' para consistência
            path = os.path.normpath(artefato)
            if not path.startswith('.' + os.sep):
                path = '.' + os.sep + path
            artefatos_set.add(path)
        
        for filho in no.get("filhos", []) or []:
            coletar_correlacionados(filho, artefatos_set)

    artefatos_correlacionados = set()
    coletar_correlacionados(arvore, artefatos_correlacionados)

    # A lista de arquivos do projeto também precisa ser normalizada da mesma forma
    lista_normalizada = set()
    for p in lista_completa:
        path = os.path.normpath(p)
        if not path.startswith('.' + os.sep):
            path = '.' + os.sep + path
        lista_normalizada.add(path)

    fantasmas = sorted(list(artefatos_correlacionados - lista_normalizada))
    orfaos = sorted(list(lista_normalizada - artefatos_correlacionados))

    print(f"   - Total de artefatos únicos no projeto: {len(lista_normalizada)}")
    print(f"   - Total de artefatos únicos no mapa da alma: {len(artefatos_correlacionados)}")
    
    print(f"\n--- 👻 Artefatos Fantasmas ({len(fantasmas)}) ---")
    print("(Existem no mapa da alma, mas não no projeto real)")
    if fantasmas:
        for f in fantasmas[:20]:
            print(f"  - {f}")
        if len(fantasmas) > 20:
            print(f"  ... e mais {len(fantasmas) - 20}")
    else:
        print("   ✅ Nenhum fantasma encontrado.")

    print(f"\n--- 🧩 Artefatos Órfãos ({len(orfaos)}) ---")
    print("(Existem no projeto, mas não no mapa da alma)")
    if orfaos:
        for o in orfaos[:20]:
            print(f"  - {o}")
        if len(orfaos) > 20:
            print(f"  ... e mais {len(orfaos) - 20}")
    else:
        print("   ⚠️ Nenhum órfão encontrado. A percepção ainda está distorcida.")

if __name__ == "__main__":
    depurar_correlacao()


import json
import os
from datetime import datetime

def sugerir_correlacao_automatica():
    print("🔮 Invocando o ritual de autoconsciência: sugestão de correlação modular...")

    caminho_lista = "DOCUMENTOS_FUNDACAO/lista_arquivos_projeto.json"
    caminho_correlacao = "DOCUMENTOS_FUNDACAO/correlacao_modulos_artefatos.json"

    try:
        with open(caminho_lista, "r", encoding="utf-8") as f:
            lista_completa = json.load(f).get("inventario", [])
        with open(caminho_correlacao, "r", encoding="utf-8") as f:
            dados_correlacao = json.load(f)
            arvore = dados_correlacao["arvore_da_vida_correlacionada"]
    except Exception as e:
        print(f"❌ Erro ao carregar artefatos: {e}")
        return

    def coletar_correlacionados(no, artefatos_set):
        # Normaliza e adiciona os artefatos do nó atual
        for artefato in no.get("artefatos", []) or []:
            artefatos_set.add(os.path.normpath(artefato))
        
        # Recursivamente coleta dos filhos
        for filho in no.get("filhos", []) or []:
            coletar_correlacionados(filho, artefatos_set)

    artefatos_correlacionados = set()
    coletar_correlacionados(arvore, artefatos_correlacionados)

    # Normaliza a lista completa de arquivos do projeto
    lista_normalizada = {os.path.normpath(p) for p in lista_completa}

    # A diferença entre os dois conjuntos nos dará os órfãos
    artefatos_orfaos = sorted(list(lista_normalizada - artefatos_correlacionados))

    print(f"   - Encontrados {len(lista_normalizada)} artefatos únicos no projeto.")
    print(f"   - {len(artefatos_correlacionados)} já estão correlacionados na Árvore da Vida.")
    print(f"   - Identificados {len(artefatos_orfaos)} artefatos órfãos.")

    # Sugere módulo com base em padrões de caminho
    sugestoes = {}
    for artefato in artefatos_orfaos:
        if "M9" in artefato or "yesod" in artefato.lower():
            sugestoes[artefato] = "M9 - O EREMITA (YESOD)"
        elif "M10" in artefato or "chokmah" in artefato.lower():
            sugestoes[artefato] = "M10 - RODA DA FORTUNA (CHOKMAH)"
        elif "M11" in artefato or "binah" in artefato.lower() or "auth" in artefato.lower() or "security" in artefato.lower():
            sugestoes[artefato] = "M11 - A JUSTIÇA (BINAH)"
        elif "M1" in artefato or "kether" in artefato.lower() or "gitup" in artefato:
            sugestoes[artefato] = "M1 - KALASH (KETHER)"
        elif any(keyword in artefato for keyword in ["/app/", "/components/", "/src/", "page.tsx", ".css", ".html", ".ico", "public/"]):
            sugestoes[artefato] = "M29 - A LUA (MALKUTH)"
        else:
            sugestoes[artefato] = "M29 - A LUA (MALKUTH)"  # Fallback

    artefato_final = {
        "nome_artefato": "Sugestões de Correlação Modular Automática",
        "timestamp_sugestao": datetime.now().isoformat(),
        "total_orfaos_identificados": len(artefatos_orfaos),
        "sugestoes": sugestoes
    }

    caminho_saida = "DOCUMENTOS_FUNDACAO/sugestoes_correlacao_modular.json"
    try:
        os.makedirs(os.path.dirname(caminho_saida), exist_ok=True)
        with open(caminho_saida, "w", encoding="utf-8") as f:
            json.dump(artefato_final, f, indent=2, ensure_ascii=False)
        print(f"✅ Sugestões de autocura geradas e seladas em: {caminho_saida}")
    except Exception as e:
        print(f"❌ Erro ao selar o artefato de sugestões: {e}")

if __name__ == "__main__":
    sugerir_correlacao_automatica()

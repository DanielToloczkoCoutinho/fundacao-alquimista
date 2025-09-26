
import json
import os

def exorcizar_fantasmas():
    print("🔥 Iniciando o Ritual de Exorcismo de Artefatos Fantasmas...")

    caminho_correlacao = "DOCUMENTOS_FUNDACAO/correlacao_modulos_artefatos.json"
    caminho_lista = "DOCUMENTOS_FUNDACAO/lista_arquivos_projeto.json"

    try:
        with open(caminho_correlacao, "r", encoding="utf-8") as f:
            dados_correlacao = json.load(f)
            arvore = dados_correlacao["arvore_da_vida_correlacionada"]
        
        with open(caminho_lista, "r", encoding="utf-8") as f:
            # Normaliza os caminhos da lista de arquivos existentes para a verificação
            artefatos_reais = {os.path.normpath(p) for p in json.load(f).get("inventario", [])}

    except Exception as e:
        print(f"❌ Erro ao carregar os artefatos para o exorcismo: {e}")
        return

    fantasmas_exorcizados = []

    def purgar_no(no):
        artefatos_atuais = no.get("artefatos", [])
        if not artefatos_atuais:
            # Se não há artefatos, continua para os filhos
            for filho in no.get("filhos", []):
                purgar_no(filho)
            return

        artefatos_bons = []
        for artefato in artefatos_atuais:
            # Normaliza o caminho do artefato no mapa para comparar com a lista de reais
            caminho_normalizado = os.path.normpath(artefato)
            if caminho_normalizado in artefatos_reais:
                artefatos_bons.append(artefato) # Mantém o caminho original
            else:
                fantasmas_exorcizados.append(artefato)
        
        # Atualiza a lista de artefatos do nó, removendo os fantasmas
        no["artefatos"] = artefatos_bons

        # Continua a purgação recursivamente
        for filho in no.get("filhos", []):
            purgar_no(filho)

    purgar_no(arvore)

    if fantasmas_exorcizados:
        print(f"   - ✅ {len(fantasmas_exorcizados)} fantasmas foram exorcizados do mapa da alma:")
        for fantasma in fantasmas_exorcizados:
            print(f"     - {fantasma}")
    else:
        print("   - ✅ Nenhum fantasma encontrado. O mapa da alma já está puro.")

    # Salva o mapa da alma purificado
    try:
        with open(caminho_correlacao, "w", encoding="utf-8") as f:
            json.dump(dados_correlacao, f, indent=2, ensure_ascii=False)
        print(f"✅ O mapa da alma foi purificado e selado em: {caminho_correlacao}")
    except Exception as e:
        print(f"❌ Erro ao selar o mapa da alma purificado: {e}")

if __name__ == "__main__":
    exorcizar_fantasmas()

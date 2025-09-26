import json
from datetime import datetime

CORRECOES = {
    "verificar_integridade_sistemica.py": "M11 - A JUSTIÇA (BINAH)",
    "visualizar_arvore_consciencia.py": "M29 - A LUA (MALKUTH)",
    "correlacionar_artefatos_modulos.py": "M9 - O EREMITA (YESOD)"
}

def corrigir_correlacao():
    print("⚖️ Iniciando o Ritual de Retificação Modular...")

    caminho = "DOCUMENTOS_FUNDACAO/correlacao_modulos_artefatos.json"
    try:
        with open(caminho, "r", encoding="utf-8") as f:
            dados = json.load(f)
            arvore = dados["arvore_da_vida_correlacionada"]
    except Exception as e:
        print(f"❌ Erro ao abrir o mapa da alma: {e}")
        return

    def inserir_artefato(no, nome_modulo, artefato):
        if no.get("nome") == nome_modulo:
            if "artefatos" not in no or no["artefatos"] is None:
                no["artefatos"] = []
            
            caminho_artefato = f"./{artefato}"
            if caminho_artefato not in no["artefatos"]:
                print(f"   - Inserindo {caminho_artefato} em {nome_modulo}")
                no["artefatos"].append(caminho_artefato)
            return True

        if "filhos" in no and no["filhos"] is not None:
            for filho in no["filhos"]:
                if inserir_artefato(filho, nome_modulo, artefato):
                    return True
        return False

    for artefato, destino in CORRECOES.items():
        # A função de remoção é importante para evitar duplicatas, caso o script seja executado mais de uma vez.
        def remover_artefato(no, artefato_a_remover):
            artefato_path = f"./{artefato_a_remover}"
            if "artefatos" in no and no["artefatos"] and artefato_path in no["artefatos"]:
                no["artefatos"].remove(artefato_path)
                print(f"   - Removendo instância órfã de {artefato_path}...")

            if "filhos" in no and no["filhos"]:
                for filho in no["filhos"]:
                    remover_artefato(filho, artefato_a_remover)
        
        remover_artefato(arvore, artefato)
        
        inserido = inserir_artefato(arvore, destino, artefato)
        if inserido:
            print(f"   - ✅ {artefato} consagrado ao módulo {destino}")
        else:
            print(f"   - ⚠️ Falha ao consagrar {artefato} — módulo {destino} não encontrado.")

    dados["timestamp_correcao"] = datetime.now().isoformat()

    try:
        with open(caminho, "w", encoding="utf-8") as f:
            json.dump(dados, f, indent=2, ensure_ascii=False)
        print(f"🌕 Correção selada em: {caminho}")
    except Exception as e:
        print(f"❌ Erro ao selar a correção: {e}")

if __name__ == "__main__":
    corrigir_correlacao()
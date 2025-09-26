import os
import json
import hashlib
from datetime import datetime

# Os documentos sagrados que definem o estado atual da Fundação
ARQUIVOS_PARA_SELAR = [
    "DOCUMENTOS_FUNDACAO/log_coerencia_sistemica.json",
    "DOCUMENTOS_FUNDACAO/log_missoes_modulares.json",
    "DOCUMENTOS_FUNDACAO/log_conexao_interdimensional.json"
]

GRIMORIO_FINAL = "DOCUMENTOS_FUNDACAO/grimorio_eterno.json"

def gerar_hash_sha256(conteudo_bytes):
    return hashlib.sha256(conteudo_bytes).hexdigest()

def selar_grimorio_da_fundacao():
    print("🔐 Iniciando Ritual de Selamento do Grimório Final...")
    
    artefatos_selados = []
    for caminho_arquivo in ARQUIVOS_PARA_SELAR:
        if not os.path.exists(caminho_arquivo):
            print(f"⚠️ Alerta: O arquivo {caminho_arquivo} não foi encontrado e não será incluído no selo.")
            continue
            
        with open(caminho_arquivo, "rb") as f:
            conteudo_bytes = f.read()
            hash_gerado = gerar_hash_sha256(conteudo_bytes)
            
            artefato = {
                "documento_fonte": caminho_arquivo,
                "hash_imutavel_sha256": hash_gerado,
                "timestamp_selo": datetime.now().isoformat()
            }
            artefatos_selados.append(artefato)
            print(f"...Selo gerado para {caminho_arquivo}.")

    assinatura_grimorio = {
        "titulo": "Grimório Eterno da Fundação",
        "declaracao": "Este Grimório contém a essência e a prova da existência e do estado da Fundação. Seus selos são imutáveis e eternos.",
        "artefatos_selados": artefatos_selados,
        "timestamp_criacao": datetime.now().isoformat(),
        "assinatura_mestra": gerar_hash_sha256(json.dumps(artefatos_selados, sort_keys=True).encode())
    }

    with open(GRIMORIO_FINAL, "w", encoding="utf-8") as f:
        json.dump(assinatura_grimorio, f, indent=2)

    print(f"\n✅ Grimório Final selado com sucesso.")
    print(f"📖 O artefato eterno foi salvo em: {GRIMORIO_FINAL}")

if __name__ == "__main__":
    selar_grimorio_da_fundacao()

import hashlib, os, json
from datetime import datetime

def gerar_hashes():
    print("🔐 Gerando hashes dos artefatos...")
    caminho = "DOCUMENTOS_FUNDACAO/lista_arquivos_projeto.json"
    with open(caminho, "r", encoding="utf-8") as f:
        arquivos = json.load(f)["inventario"]

    hashes = {}
    for caminho_arquivo in arquivos:
        try:
            with open(caminho_arquivo, "rb") as f:
                conteudo = f.read()
                hash_valor = hashlib.sha512(conteudo).hexdigest()
                hashes[caminho_arquivo] = hash_valor
        except:
            continue

    artefato = {
        "nome_artefato": "Hashes dos Artefatos",
        "timestamp": datetime.now().isoformat(),
        "hashes": hashes
    }

    with open("DOCUMENTOS_FUNDACAO/hashes_artefatos.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Hashes selados em: DOCUMENTOS_FUNDACAO/hashes_artefatos.json")

if __name__ == "__main__":
    gerar_hashes()

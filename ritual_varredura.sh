#!/bin/bash

# 🪶 Criação do Pergaminho
cat <<EOF > scanner_alquimico.py
import os
import hashlib

DIRETORIOS_FUNDACAO = [
    "src/data/reports",
    "DOCUMENTOS_FUNDACAO",
    "src/app/module"
]

EXTENSOES_VALIDAS = [".md", ".ts", ".json", ".csv", ".txt", ".log"]

DOCUMENTOS_ESPERADOS = [
    "04_RELATORIO_CIENTIFICO_DA_FUNDACAO.md",
    "relatorio_sincronia_final.csv",
    "scientific-report.ts",
    "technical-report.ts"
]

def listar_documentos(diretorio):
    documentos = []
    if not os.path.isdir(diretorio):
        print(f"⚠️  Aviso: Diretório não encontrado: {diretorio}")
        return documentos
    for raiz, _, arquivos in os.walk(diretorio):
        for arquivo in arquivos:
            if any(arquivo.endswith(ext) for ext in EXTENSOES_VALIDAS):
                documentos.append(os.path.join(raiz, arquivo))
    return documentos

def gerar_hash(caminho_arquivo):
    try:
        with open(caminho_arquivo, "rb") as f:
            return hashlib.sha256(f.read()).hexdigest()
    except Exception as e:
        return f"Erro ao gerar hash: {e}"

def verificar_documentos():
    encontrados = set()
    faltantes = set(DOCUMENTOS_ESPERADOS)

    print("🔍 Iniciando varredura nos domínios da Fundação...\n")

    for diretorio in DIRETORIOS_FUNDACAO:
        print(f"📁 Explorando: {diretorio}")
        documentos = listar_documentos(diretorio)
        for doc in documentos:
            nome = os.path.basename(doc)
            encontrados.add(nome)
            if nome in faltantes:
                faltantes.remove(nome)
            # Limit printing to avoid excessive output
            # print(f"✅ {nome} | Hash: {gerar_hash(doc)}")

    print("\n📜 Relatório Final:")
    print(f"🧩 Total de documentos únicos encontrados: {len(encontrados)}")
    print(f"❌ Faltantes: {list(faltantes) if faltantes else 'Nenhum. Tudo manifesto.'}")

if __name__ == "__main__":
    verificar_documentos()
EOF

# 🔥 Execução do Ritual
python3 scanner_alquimico.py

# 🧹 Desintegração do Pergaminho
rm scanner_alquimico.py

#!/bin/bash

# 🪶 Criação do Pergaminho
cat <<EOF > auditor_modular.py
import os
import hashlib

# Diretório raiz dos módulos
MODULOS_DIR = "src/app/module"

# Tipos de documentos esperados por módulo
DOCUMENTOS_ESPERADOS = ["scientific-report.ts", "technical-report.ts"]

# Função para listar todos os módulos
def listar_modulos(diretorio):
    if not os.path.isdir(diretorio):
        print(f"⚠️  Aviso: Diretório de módulos não encontrado: {diretorio}")
        return []
    return [nome for nome in os.listdir(diretorio) if os.path.isdir(os.path.join(diretorio, nome))]

# Função para verificar documentos em cada módulo
def verificar_documentos_por_modulo(modulo):
    caminho_modulo = os.path.join(MODULOS_DIR, modulo)
    encontrados = []
    for doc in DOCUMENTOS_ESPERADOS:
        caminho_doc = os.path.join(caminho_modulo, doc)
        if os.path.isfile(caminho_doc):
            encontrados.append(doc)
    return encontrados

# Função para gerar hash de um documento
def gerar_hash(caminho_arquivo):
    try:
        with open(caminho_arquivo, "rb") as f:
            return hashlib.sha256(f.read()).hexdigest()
    except Exception as e:
        return f"Erro ao gerar hash: {e}"

# Ritual principal
def executar_auditoria():
    modulos = listar_modulos(MODULOS_DIR)
    if not os.path.isdir(MODULOS_DIR):
        print(f"❌ Erro Crítico: O diretório de módulos '{MODULOS_DIR}' não foi encontrado. Auditoria abortada.")
        return

    total_modulos = len(modulos)
    modulos_completos = []
    modulos_incompletos = {}

    print(f"🔍 Iniciando auditoria em {total_modulos} módulos...\n")

    for modulo in modulos:
        encontrados = verificar_documentos_por_modulo(modulo)
        if set(DOCUMENTOS_ESPERADOS).issubset(set(encontrados)):
            modulos_completos.append(modulo)
        else:
            faltantes = list(set(DOCUMENTOS_ESPERADOS) - set(encontrados))
            modulos_incompletos[modulo] = faltantes

    print("📜 Relatório Final de Auditoria Modular:")
    print(f"✅ Módulos completos: {len(modulos_completos)}")
    print(f"❌ Módulos incompletos: {len(modulos_incompletos)}\n")

    if modulos_incompletos:
        for modulo, faltantes in sorted(modulos_incompletos.items()):
            print(f"   - 📁 {modulo} está faltando: {faltantes}")

    print("\n🔐 Verificando integridade dos documentos existentes...")
    documento_encontrado = False
    for modulo in sorted(modulos):
        for doc in DOCUMENTOS_ESPERADOS:
            caminho_doc = os.path.join(MODULOS_DIR, modulo, doc)
            if os.path.isfile(caminho_doc):
                documento_encontrado = True
                hash_valor = gerar_hash(caminho_doc)
                print(f"   - 🧾 {modulo}/{doc} | Hash: {hash_valor}")
    if not documento_encontrado:
        print("   Nenhum documento encontrado para verificar.")


if __name__ == "__main__":
    executar_auditoria()
EOF

# 🔥 Execução do Ritual
python3 auditor_modular.py

# 🧹 Desintegração do Pergaminho
rm auditor_modular.py

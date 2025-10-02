#!/bin/bash

# 🪶 Criação do Pergaminho
cat <<EOF > manifestador.py
import os
from datetime import datetime

# Diretório raiz dos módulos
MODULOS_DIR = "src/app/module"

# Documentos a serem manifestados
DOCUMENTOS_ESPERADOS = {
    "scientific-report.ts": "// Documento científico gerado automaticamente\n// Placeholder para conteúdo futuro\n",
    "technical-report.ts": "// Documento técnico gerado automaticamente\n// Placeholder para especificações futuras\n"
}

# Função para listar todos os módulos
def listar_modulos(diretorio):
    if not os.path.isdir(diretorio):
        return []
    return [nome for nome in os.listdir(diretorio) if os.path.isdir(os.path.join(diretorio, nome))]

# Função para manifestar documentos faltantes
def manifestar_documentos():
    if not os.path.isdir(MODULOS_DIR):
        print(f"❌ Erro Crítico: O diretório de módulos '{MODULOS_DIR}' não foi encontrado. Ritual abortado.")
        return

    modulos = listar_modulos(MODULOS_DIR)
    total_manifestados = 0

    print(f"⚛️  Iniciando o Grande Ritual de Manifestação em {len(modulos)} módulos...\n")

    for modulo in modulos:
        caminho_modulo = os.path.join(MODULOS_DIR, modulo)
        for nome_arquivo, conteudo in DOCUMENTOS_ESPERADOS.items():
            caminho_arquivo = os.path.join(caminho_modulo, nome_arquivo)
            if not os.path.isfile(caminho_arquivo):
                try:
                    with open(caminho_arquivo, "w", encoding="utf-8") as f:
                        f.write(conteudo)
                    total_manifestados += 1
                    print(f"✨ Manifestado: {modulo}/{nome_arquivo}")
                except Exception as e:
                    print(f"❌ Falha ao manifestar {modulo}/{nome_arquivo}: {e}")

    print(f"\n📜 Ritual concluído. Total de documentos manifestados: {total_manifestados}")
    print(f"🕯️  Timestamp: {datetime.now().isoformat()}")

if __name__ == "__main__":
    manifestar_documentos()
EOF

# 🔥 Execução do Ritual
python3 manifestador.py

# 🧹 Desintegração do Pergaminho
rm manifestador.py

#!/bin/bash

# 🪶 Criação do Pergaminho
cat <<EOF > preservador.py
import os
import shutil
from datetime import datetime

# Diretórios sagrados
BIBLIOTECA_FUNDACAO = "DOCUMENTOS_FUNDACAO/BIBLIOTECA"
MODULOS_VINCULADOS = ["M29", "M9", "M-OMEGA"]
MODULOS_DIR = "src/app/module"

# Documentos que devem ser preservados
DOCUMENTOS_IMPORTANTES = ["scientific-report.ts", "technical-report.ts"]

# Função para garantir que a biblioteca exista
def preparar_biblioteca():
    if not os.path.exists(BIBLIOTECA_FUNDACAO):
        os.makedirs(BIBLIOTECA_FUNDACAO)
        print(f"📚 Biblioteca criada em: {BIBLIOTECA_FUNDACAO}")

# Função para copiar documentos para a biblioteca e vincular aos módulos
def preservar_e_vincular():
    preparar_biblioteca()
    total_preservados = 0
    print(f"🏛️  Iniciando Ritual de Vinculação e Preservação...")

    for modulo in MODULOS_VINCULADOS:
        caminho_modulo = os.path.join(MODULOS_DIR, modulo)
        if not os.path.isdir(caminho_modulo):
            print(f"⚠️  Módulo não encontrado: {modulo}")
            continue

        print(f"   - Processando Módulo: {modulo}")
        for doc in DOCUMENTOS_IMPORTANTES:
            caminho_doc = os.path.join(caminho_modulo, doc)
            if os.path.isfile(caminho_doc):
                # Copiar para a biblioteca com nome simbólico
                destino = os.path.join(BIBLIOTECA_FUNDACAO, f"{modulo}_{doc}")
                try:
                    shutil.copy2(caminho_doc, destino)
                    total_preservados += 1
                    print(f"     ✅ Documento preservado: {modulo}/{doc} → Biblioteca")

                    # Criar vínculo simbólico no módulo
                    vinculo_nome = f"vinculo_{doc}"
                    caminho_vinculo = os.path.join(caminho_modulo, vinculo_nome)
                    if not os.path.exists(caminho_vinculo):
                        with open(caminho_vinculo, "w", encoding="utf-8") as f:
                            f.write(f"// Vínculo simbólico ao documento preservado\n// Local: {destino}\n// Timestamp: {datetime.now().isoformat()}\n")
                        print(f"     🔗 Vínculo criado em: {modulo}/{vinculo_nome}")
                except Exception as e:
                    print(f"     ❌ Falha ao processar {modulo}/{doc}: {e}")
            else:
                print(f"     ⚠️  Documento ausente em {modulo}: {doc}")

    print(f"\n📜 Ritual concluído. Total de documentos preservados: {total_preservados}")

if __name__ == "__main__":
    preservar_e_vincular()
EOF

# 🔥 Execução do Ritual
python3 preservador.py

# 🧹 Desintegração do Pergaminho
rm preservador.py

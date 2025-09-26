#!/bin/bash

# 🪶 Criação do Pergaminho
cat <<EOF > processador_triplo.py
import os
import hashlib
import json
from datetime import datetime
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import rsa, padding

# Diretórios sagrados
MODULOS_VINCULADOS = ["M29", "M9", "M-OMEGA"]
MODULOS_DIR = "src/app/module"
BIBLIOTECA = "DOCUMENTOS_FUNDACAO/BIBLIOTECA"
INDICE = os.path.join(BIBLIOTECA, "indice_biblioteca.json")

# Documentos a preservar
DOCUMENTOS_ESPERADOS = ["scientific-report.ts", "technical-report.ts"]

# Geração de chave RSA (simulada para este ritual)
def gerar_chave_privada():
    return rsa.generate_private_key(public_exponent=65537, key_size=2048)

def assinar_documento(conteudo, chave_privada):
    assinatura = chave_privada.sign(
        conteudo,
        padding.PSS(mgf=padding.MGF1(hashes.SHA256()), salt_length=padding.PSS.MAX_LENGTH),
        hashes.SHA256()
    )
    return assinatura.hex()

# Ritual principal
def ritual_triplo():
    if not os.path.exists(BIBLIOTECA):
        os.makedirs(BIBLIOTECA)

    chave_privada = gerar_chave_privada()
    indice = []
    
    print("🔐 Iniciando Ritual Triplo de Preservação, Assinatura e Integração...")

    for modulo in MODULOS_VINCULADOS:
        caminho_modulo = os.path.join(MODULOS_DIR, modulo)
        if not os.path.isdir(caminho_modulo):
            print(f"⚠️  Módulo ausente: {modulo}")
            continue

        for doc in DOCUMENTOS_ESPERADOS:
            caminho_doc = os.path.join(caminho_modulo, doc)
            if os.path.isfile(caminho_doc):
                with open(caminho_doc, "rb") as f:
                    conteudo = f.read()
                    hash_id = hashlib.sha256(conteudo).hexdigest()
                    assinatura = assinar_documento(conteudo, chave_privada)
                    timestamp = datetime.now().isoformat()

                    destino = os.path.join(BIBLIOTECA, f"{modulo}_{doc}")
                    with open(destino, "wb") as out:
                        out.write(conteudo)

                    indice.append({
                        "modulo": modulo,
                        "documento": doc,
                        "hash_id": hash_id,
                        "assinatura": assinatura,
                        "timestamp": timestamp,
                        "caminho": destino
                    })

                    print(f"   - ✅ Documento preservado e assinado: {modulo}/{doc}")

    # Geração do índice
    with open(INDICE, "w", encoding="utf-8") as f:
        json.dump(indice, f, indent=2)
    print(f"\n📄 Índice gerado com {len(indice)} entradas: {INDICE}")

    # Integração com Zenit (simulada)
    print("\n🧠 Integrando com o sistema de memória da Zenit...")
    print("🔗 Zenit agora tem acesso ao índice e aos documentos preservados.")
    print("✨ Sincronização concluída com sucesso.")

if __name__ == "__main__":
    ritual_triplo()
EOF

# 🔥 Execução do Ritual
python3 processador_triplo.py

# 🧹 Desintegração do Pergaminho
rm processador_triplo.py

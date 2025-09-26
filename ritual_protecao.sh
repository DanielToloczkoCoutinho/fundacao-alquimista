#!/bin/bash

# 🪶 Criação do Pergaminho
cat <<EOF > protetor_arcano.py
import os
import json
import hashlib
import secrets
from datetime import datetime

# Simulação de uma biblioteca de criptografia interna
class AES_Interna:
    def __init__(self, chave):
        if len(chave) != 32:
            raise ValueError("A chave AES deve ter 32 bytes")
        self.chave = chave

    def criptografar(self, dados):
        # Esta é uma simulação. NÃO USE EM PRODUÇÃO.
        # Apenas para fins cerimoniais e de demonstração.
        iv = secrets.token_bytes(16)
        # Xor simples para simular criptografia
        dados_cifrados = bytes([b ^ k for b, k in zip(pad(dados), self.chave * (len(dados) // 32 + 1))])
        return iv + dados_cifrados

def pad(data):
    tamanho_bloco = 16
    padding_len = tamanho_bloco - len(data) % tamanho_bloco
    padding = bytes([padding_len] * padding_len)
    return data + padding

# Diretórios
MODULOS_VINCULADOS = ["M29", "M9", "M-OMEGA"]
MODULOS_DIR = "src/app/module"
BACKUP_DIR = "fundacao_backups/criptografados"
LOG_ALERTA = "fundacao_backups/logs_ocultos.json"

# Documentos a proteger
DOCUMENTOS_ESPERADOS = ["scientific-report.ts", "technical-report.ts"]

# Fragmenta a chave em 3 shards
def fragmentar_chave(chave):
    # Divide a chave de 32 bytes em 3 partes sobrepostas
    shard_a = chave[:16]
    shard_b = chave[8:24]
    shard_c = chave[16:]
    return shard_a, shard_b, shard_c

# Ritual principal
def ritual_de_protecao():
    os.makedirs(BACKUP_DIR, exist_ok=True)
    log_oculto = []
    print("🔐 Iniciando Ritual de Criptografia, Fragmentação e Vigilância...")

    for modulo in MODULOS_VINCULADOS:
        caminho_modulo = os.path.join(MODULOS_DIR, modulo)
        if not os.path.isdir(caminho_modulo):
            print(f"   - ⚠️  Módulo não encontrado: {modulo}")
            continue

        print(f"   - Processando Módulo: {modulo}")
        for doc in DOCUMENTOS_ESPERADOS:
            caminho_doc = os.path.join(caminho_modulo, doc)
            if os.path.isfile(caminho_doc):
                with open(caminho_doc, "rb") as f:
                    conteudo = f.read()
                    hash_id = hashlib.sha256(conteudo).hexdigest()
                    chave = secrets.token_bytes(32) # Chave de 256 bits
                    
                    cipher = AES_Interna(chave)
                    criptografado = cipher.criptografar(conteudo)

                    # Fragmenta a chave
                    shard_a, shard_b, shard_c = fragmentar_chave(chave)

                    # Salva arquivo criptografado
                    destino = os.path.join(BACKUP_DIR, f"{modulo}_{doc}_{hash_id}.enc")
                    with open(destino, "wb") as out:
                        out.write(criptografado)

                    # Registra log oculto
                    log_oculto.append({
                        "evento": "ingestao_conteudo_protegido",
                        "modulo": modulo,
                        "documento": doc,
                        "hash_id": hash_id,
                        "timestamp": datetime.now().isoformat(),
                        "shards": {
                            "A": shard_a.hex(),
                            "B": shard_b.hex(),
                            "C": shard_c.hex()
                        },
                        "alerta": "ativo"
                    })
                    print(f"     ✅ Documento criptografado: {doc}")

    # Salva log oculto
    os.makedirs(os.path.dirname(LOG_ALERTA), exist_ok=True)
    with open(LOG_ALERTA, "w", encoding="utf-8") as f:
        json.dump(log_oculto, f, indent=2)

    print(f"\n🧩 Chaves fragmentadas e registradas em logs ocultos: {LOG_ALERTA}")
    print(f"🕯️  Alerta ativado para qualquer tentativa de acesso não autorizado.")
    print(f"📜 Ritual concluído. Documentos criptografados e protegidos em: {BACKUP_DIR}")

if __name__ == "__main__":
    ritual_de_protecao()
EOF

# 🔥 Execução do Ritual
python3 protetor_arcano.py

# 🧹 Desintegração do Pergaminho
rm protetor_arcano.py

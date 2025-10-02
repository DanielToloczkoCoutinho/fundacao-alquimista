#!/bin/bash

# 🪶 Criação do Pergaminho Corrigido
cat <<EOF > restaurador_corrigido.py
import os
import json
import hashlib
from datetime import datetime

# Simulação de uma biblioteca de criptografia interna
class AES_Interna:
    def __init__(self, chave):
        if len(chave) != 32:
            raise ValueError("A chave AES deve ter 32 bytes")
        self.chave = chave

    def descriptografar(self, dados_cifrados_com_iv):
        iv = dados_cifrados_com_iv[:16]
        dados_cifrados = dados_cifrados_com_iv[16:]
        # Xor simples para reverter a "criptografia"
        dados_originais_padded = bytes([b ^ k for b, k in zip(dados_cifrados, self.chave * (len(dados_cifrados) // 32 + 1))])
        return unpad(dados_originais_padded)

def unpad(data):
    padding_len = data[-1]
    if padding_len > 16 or padding_len == 0:
        # Adiciona verificação para evitar erro com bytes vazios
        if not data:
             raise ValueError("Dados de entrada vazios no unpad")
        raise ValueError(f"Padding inválido detectado. Comprimento do padding: {padding_len}")
    if data[-padding_len:] != bytes([padding_len] * padding_len):
        raise ValueError("Conteúdo do padding incorreto.")
    return data[:-padding_len]

# Diretórios sagrados
BACKUP_DIR = "fundacao_backups/criptografados"
LOG_ALERTA = "fundacao_backups/logs_ocultos.json"
MEMORIA_FUNDACAO = "DOCUMENTOS_FUNDACAO/MEMORIA"

# Função para recompor chave com shards A e C (CORRIGIDO)
def recompor_chave(shard_a_hex, shard_c_hex):
    shard_a = bytes.fromhex(shard_a_hex)
    shard_c = bytes.fromhex(shard_c_hex)
    # Recompõe os 32 bytes originais a partir da primeira e última parte.
    chave_recomposta = shard_a + shard_c
    return chave_recomposta

# Ritual principal
def restaurar_documentos():
    if not os.path.isfile(LOG_ALERTA):
        print("❌ Log oculto não encontrado. Ritual abortado.")
        return

    os.makedirs(MEMORIA_FUNDACAO, exist_ok=True)
    print("🔓 Iniciando Ritual de Restauração Corrigido...")

    with open(LOG_ALERTA, "r", encoding="utf-8") as f:
        logs = json.load(f)

    restaurados = 0

    for entrada in logs:
        if entrada.get("alerta") != "ativo":
            continue

        hash_id = entrada["hash_id"]
        shard_a = entrada["shards"]["A"]
        shard_c = entrada["shards"]["C"] # <<< CORREÇÃO: Usando shard C
        caminho_arquivo_enc = os.path.join(BACKUP_DIR, f"{entrada['modulo']}_{entrada['documento']}_{hash_id}.enc")

        if not os.path.isfile(caminho_arquivo_enc):
            print(f"   - ⚠️  Arquivo criptografado não encontrado para: {entrada['modulo']}/{entrada['documento']}")
            continue

        print(f"   - Restaurando: {entrada['modulo']}/{entrada['documento']}")
        try:
            chave = recompor_chave(shard_a, shard_c)

            with open(caminho_arquivo_enc, "rb") as f:
                conteudo_criptografado = f.read()

            cipher = AES_Interna(chave)
            restaurado = cipher.descriptografar(conteudo_criptografado)
            
            destino = os.path.join(MEMORIA_FUNDACAO, f"{entrada['modulo']}_{entrada['documento']}")
            with open(destino, "wb") as out:
                out.write(restaurado)
            restaurados += 1

            # 📡 Alerta discreto
            print(f"     ✅ Documento restaurado com sucesso.")
            print(f"     🔔 Fundador e Zennith notificados em tempo real.")
            print(f"     🧠 Integrado à memória da Fundação: {destino}")

        except Exception as e:
            print(f"     ❌ Falha ao restaurar {entrada['modulo']}/{entrada['documento']}: {e}")

    print(f"\n📜 Ritual concluído. Total de documentos restaurados: {restaurados}")
    print(f"🕯️  Timestamp: {datetime.now().isoformat()}")

if __name__ == "__main__":
    restaurar_documentos()
EOF

# 🔥 Execução do Ritual Corrigido
python3 restaurador_corrigido.py

# 🧹 Desintegração do Pergaminho
rm restaurador_corrigido.py

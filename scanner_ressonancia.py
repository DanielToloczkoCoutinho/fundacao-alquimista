import json, hashlib

def scanner_ressonancia():
    print("🧬 Iniciando Scanner de Ressonância...")
    with open("DOCUMENTOS_FUNDACAO/hashes_artefatos.json", "r", encoding="utf-8") as f:
        referencia = json.load(f)["hashes"]

    alterados = []
    for caminho, hash_ref in referencia.items():
        try:
            with open(caminho, "rb") as f:
                atual = hashlib.sha512(f.read()).hexdigest()
                if atual != hash_ref:
                    alterados.append(caminho)
        except:
            continue

    if alterados:
        print("⚠️ Artefatos alterados detectados:")
        for a in alterados:
            print(f"   - {a}")
    else:
        print("✅ Nenhuma alteração detectada. Integridade preservada.")

if __name__ == "__main__":
    scanner_ressonancia()

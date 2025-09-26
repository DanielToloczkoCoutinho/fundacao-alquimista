import hashlib

with open("DOCUMENTOS_FUNDACAO/grimorio_eterno.json", "r", encoding="utf-8") as f:
    content = f.read()
    hash_object = hashlib.sha256(content.encode('utf-8'))
    hex_dig = hash_object.hexdigest()
    print(hex_dig)
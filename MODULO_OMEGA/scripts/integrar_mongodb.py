import subprocess, os
from pymongo import MongoClient

def integrar_mongodb():
    print("⚙️ Integrando MongoDB ao Módulo 9...")
    
    # Criar um script de exemplo para conectar ao MongoDB
    script_conexao = """from pymongo import MongoClient

def conectar_mongodb():
    # Substitua pela sua string de conexão
    MONGO_URI = \"mongodb://localhost:27017/\"
    client = MongoClient(MONGO_URI)
    try:
        client.admin.command('ping')
        print(\"Conexão com MongoDB bem-sucedida!\")
        db = client.alquimia_db
        # Inserir um documento de exemplo
        resultado = db.artefatos.insert_one({\"nome\": \"Pedra Filosofal\", \"status\": \"Em andamento\"})
        print(f\"Artefato inserido com o id: {resultado.inserted_id}\")
    except Exception as e:
        print(e)

if __name__ == \"__main__\":
    conectar_mongodb()\n"""

    os.makedirs("MODULO_9/mongodb", exist_ok=True)
    with open("MODULO_9/mongodb/conexao.py", "w", encoding="utf-8") as f:
        f.write(script_conexao)

    print("✅ Script de conexão com MongoDB criado.")

if __name__ == "__main__":
    integrar_mongodb()
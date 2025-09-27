from pymongo import MongoClient

def conectar_mongodb():
    # Substitua pela sua string de conexão
    MONGO_URI = "mongodb://localhost:27017/"
    client = MongoClient(MONGO_URI)
    try:
        client.admin.command('ping')
        print("Conexão com MongoDB bem-sucedida!")
        db = client.alquimia_db
        # Inserir um documento de exemplo
        resultado = db.artefatos.insert_one({"nome": "Pedra Filosofal", "status": "Em andamento"})
        print(f"Artefato inserido com o id: {resultado.inserted_id}")
    except Exception as e:
        print(e)

if __name__ == "__main__":
    conectar_mongodb()

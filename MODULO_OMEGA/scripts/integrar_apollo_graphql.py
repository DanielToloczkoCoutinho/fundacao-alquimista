import os

def integrar_apollo_graphql():
    print("⚙️ Integrando Apollo GraphQL ao Módulo 9...")
    os.makedirs("MODULO_9/graphql", exist_ok=True)
    conteudo = """# Esquema inicial para a comunicação federada
type Query {
  _service: Sdl
}

type Sdl {
  sdl: String
}
"""
    with open("MODULO_9/graphql/schema.graphql", "w", encoding="utf-8") as f:
        f.write(conteudo)
    print("✅ Esquema GraphQL inicial criado em MODULO_9/graphql/schema.graphql")

if __name__ == "__main__":
    integrar_apollo_graphql()

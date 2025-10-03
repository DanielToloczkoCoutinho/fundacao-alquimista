import subprocess, os

def integrar_graphql():
    print("⚙️ Integrando GraphQL ao Módulo 9...")
    subprocess.run(["npm", "install", "graphql"], check=True)

    os.makedirs("MODULO_9/graphql", exist_ok=True)
    schema = """const { buildSchema } = require('graphql');

const schema = buildSchema(\`
  type Query {
    hello: String
  }
\`);

const root = {
  hello: () => '🧠 Módulo 9 responde: Olá, mundo GraphQL!'
};

module.exports = { schema, root };
"""
    with open("MODULO_9/graphql/schema.js", "w", encoding="utf-8") as f:
        f.write(schema)

    print("✅ Schema GraphQL criado em MODULO_9/graphql/schema.js")

if __name__ == "__main__":
    integrar_graphql()
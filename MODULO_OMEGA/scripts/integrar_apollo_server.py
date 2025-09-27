import os

def integrar_apollo_server():
    print("⚙️ Integrando @apollo/server ao Módulo 9...")
    os.makedirs("MODULO_9/apollo_server", exist_ok=True)
    
    # Pacote JSON para dependências
    package_json_content = '''{
      "name": "modulo-9-apollo-server",
      "version": "1.0.0",
      "description": "Servidor Apollo para o Módulo 9",
      "main": "index.js",
      "type": "module",
      "scripts": {
        "start": "node index.js"
      },
      "dependencies": {
        "@apollo/server": "^4.10.2",
        "graphql": "^16.8.1"
      }
    }'''
    with open("MODULO_9/apollo_server/package.json", "w", encoding="utf-8") as f:
        f.write(package_json_content)

    # Arquivo de índice para iniciar o servidor
    index_js_content = '''import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

// Carregar o esquema
const typeDefs = readFileSync('../graphql/schema.graphql', 'utf8');

// Resolvers básicos
const resolvers = {
  Query: {
    _service: () => ({ sdl: typeDefs }),
  },
  Sdl: {
    sdl: (parent) => parent.sdl,
  },
};

// Configuração do servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Iniciar o servidor
async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });
  console.log(`🚀 Servidor do Módulo 9 pronto em: ${url}`);
}

startServer();
'''
    with open("MODULO_9/apollo_server/index.js", "w", encoding="utf-8") as f:
        f.write(index_js_content)

    print("✅ Configuração do @apollo/server criada em MODULO_9/apollo_server")

if __name__ == "__main__":
    integrar_apollo_server()

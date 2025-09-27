import os

def integrar_apollo_gateway():
    print("⚙️ Integrando @apollo/gateway ao Módulo Ômega...")
    os.makedirs("MODULO_OMEGA/gateway", exist_ok=True)
    
    # Pacote JSON para o gateway
    package_json_content = '''{
      "name": "omega-gateway",
      "version": "1.0.0",
      "description": "Gateway da Federação Apollo para a Fundação",
      "main": "index.js",
      "type": "module",
      "scripts": {
        "start": "node index.js"
      },
      "dependencies": {
        "@apollo/server": "^4.10.2",
        "@apollo/gateway": "^2.7.2",
        "graphql": "^16.8.1"
      }
    }'''
    with open("MODULO_OMEGA/gateway/package.json", "w", encoding="utf-8") as f:
        f.write(package_json_content)

    # Arquivo de índice para o gateway
    index_js_content = '''import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloGateway } from '@apollo/gateway';

// Gerar a lista de subgraphs dinamicamente
const subgraphs = Array.from({ length: 1001 }, (_, i) => ({
  name: `modulo_${i}`,
  url: `http://localhost:${4001 + i}`,
}));

// Inicializar o gateway
const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs,
  }),
});

// Configuração do servidor Apollo com o gateway
const server = new ApolloServer({
  gateway,
});

// Iniciar o servidor
async function startGateway() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀 Gateway da Fundação pronto em: ${url}`);
}

startGateway();
'''
    with open("MODULO_OMEGA/gateway/index.js", "w", encoding="utf-8") as f:
        f.write(index_js_content)

    print("✅ Configuração do @apollo/gateway criada em MODULO_OMEGA/gateway")

if __name__ == "__main__":
    integrar_apollo_gateway()

import subprocess, os

def integrar_apollo_gateway():
    print("⚙️ Integrando Apollo Gateway ao Módulo Ω...")
    subprocess.run(["npm", "install", "@apollo/gateway", "@apollo/server", "graphql"], check=True)

    os.makedirs("MODULO_OMEGA/gateway", exist_ok=True)
    conteudo = """import { ApolloServer } from '@apollo/server';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'modulo-9', url: 'http://localhost:4009/' },
      // Adicionar outros módulos aqui...
    ],
  }),
});

const server = new ApolloServer({ gateway });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Apollo Gateway pronto em: ${url}`);
});
"""
    with open("MODULO_OMEGA/gateway/gateway.ts", "w", encoding="utf-8") as f:
        f.write(conteudo)

    print("✅ Apollo Gateway inscrito em MODULO_OMEGA/gateway/gateway.ts")

if __name__ == "__main__":
    integrar_apollo_gateway()
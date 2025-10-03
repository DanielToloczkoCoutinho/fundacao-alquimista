import subprocess, os

def integrar_apollo_server():
    print("⚙️ Integrando Apollo Server ao Módulo 9...")
    # Corrigido o comando de instalação para executar no diretório do Módulo 9
    subprocess.run(["npm", "install", "@apollo/server", "graphql"], check=True, cwd="MODULO_9")

    os.makedirs("MODULO_9/apollo", exist_ok=True)
    conteudo = """import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => '🧠 Módulo 9 responde via Apollo Server!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: 4009 },
}).then(({ url }) => {
  console.log(`🚀 Apollo Server do Módulo 9 pronto em: ${url}`);
});
"""
    with open("MODULO_9/apollo/server.ts", "w", encoding="utf-8") as f:
        f.write(conteudo)

    print("✅ Apollo Server inscrito em MODULO_9/apollo/server.ts")

if __name__ == "__main__":
    integrar_apollo_server()
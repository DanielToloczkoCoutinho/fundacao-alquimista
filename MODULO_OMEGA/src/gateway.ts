import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';

// A lista de serviços agora inclui o Módulo Alfa.
const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'alfa', url: 'http://localhost:4001' },
    ],
  }),
});

const server = new ApolloServer({ gateway });

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀 Gateway da Mente Una (MΩ) pronto em: ${url}`);
}

startServer();

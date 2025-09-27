import { ApolloServer } from '@apollo/server';
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

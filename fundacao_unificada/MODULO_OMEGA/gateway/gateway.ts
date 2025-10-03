import { ApolloServer } from '@apollo/server';
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

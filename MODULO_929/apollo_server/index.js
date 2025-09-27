import { ApolloServer } from '@apollo/server';
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

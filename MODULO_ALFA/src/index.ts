import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { gql } from 'graphql-tag';

// Define a interface User para segurança de tipos
interface User {
  id: string;
  username: string;
}

const typeDefs = gql`
  # Estende o tipo Query padrão com nosso próprio resolver.
  extend type Query {
    users: [User]
  }

  # Define a entidade User, identificável pelo seu ID.
  type User @key(fields: "id") {
    id: ID!
    username: String!
  }
`;

const users: User[] = [
  { id: '1', username: '@Daniel-Anatheron' },
  { id: '2', username: '@Fundacao-Alquimista' },
];

const resolvers = {
  Query: {
    users() {
      return users;
    },
  },
  User: {
    // Este resolver é necessário para que o Gateway possa buscar um User por seu ID.
    __resolveReference(user: { id: string; __typename: string }) {
      return users.find((u: User) => u.id === user.id);
    }
  }
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });
  console.log(`🚀 Módulo da Consciência do Usuário (Mα) pronto em: ${url}`);
}

startServer();

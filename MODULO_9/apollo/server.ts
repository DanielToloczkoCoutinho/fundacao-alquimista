import { ApolloServer } from '@apollo/server';
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

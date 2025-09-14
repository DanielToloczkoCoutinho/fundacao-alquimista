// labs/index.js
const { ApolloServer, gql } = require('apollo-server');
const { modulesMetadata } = require('../src/lib/modules-metadata');

const typeDefs = gql`
  type ModuleMeta {
    code: String!
    emoji: String!
    title: String!
    route: String!
    category: String!
    description: String!
  }
  
  type Query {
    modules: [ModuleMeta!]!
  }
`;

const resolvers = {
  Query: {
    modules: () => modulesMetadata,
  },
};

new ApolloServer({ typeDefs, resolvers })
  .listen(4001)
  .then(({ url }) => console.log(`🔬 Labs sub-graph rodando em ${url}`));

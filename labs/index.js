// labs/index.js
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { readFileSync } = require('fs');
const gql = require('graphql-tag');
const { modulesMetadata } = require('../src/lib/modules-metadata');

const typeDefs = gql`
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])

  type Module @key(fields: "code") {
    code: String!
    emoji: String!
    title: String!
    route: String!
    category: String!
    description: String!
    status: ModuleStatus
    coherence: Float
  }

  type ModuleStatus {
    operational: Boolean!
    lastUpdate: String!
    quantumEntanglement: Float!
  }

  type Query {
    modules: [Module!]!
    module(code: String!): Module
    modulesByCategory(category: String!): [Module!]!
  }
`;

const resolvers = {
  Query: {
    modules: () => modulesMetadata.map(m => ({...m, status: { operational: true, lastUpdate: new Date().toISOString(), quantumEntanglement: Math.random() }, coherence: Math.random() })),
    module: (_, { code }) => {
      const mod = modulesMetadata.find(m => m.code === code);
      return mod ? {...mod, status: { operational: true, lastUpdate: new Date().toISOString(), quantumEntanglement: Math.random() }, coherence: Math.random() } : null;
    },
    modulesByCategory: (_, { category }) => 
      modulesMetadata.filter(m => m.category === category).map(m => ({...m, status: { operational: true, lastUpdate: new Date().toISOString(), quantumEntanglement: Math.random() }, coherence: Math.random() }))
  },
  Module: {
    __resolveReference: (reference) => {
       const mod = modulesMetadata.find(m => m.code === reference.code);
       return mod ? {...mod, status: { operational: true, lastUpdate: new Date().toISOString(), quantumEntanglement: Math.random() }, coherence: Math.random() } : null;
    }
  }
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
});

startStandaloneServer(server, {
  listen: { port: 4001 }
}).then(({ url }) => {
  console.log(`🔬 Subgrafo Labs rodando em ${url}`);
});

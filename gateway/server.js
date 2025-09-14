// gateway/server.js
const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

async function startGateway() {
  const gateway = new ApolloGateway({
    serviceList: [
      { name: 'labs',   url: 'http://localhost:4001/graphql' },
      // { name: 'identity', url: 'http://localhost:4002/graphql' },
      // … outros sub-graphs …
    ],
  });

  const server = new ApolloServer({
    gateway,
    subscriptions: false,
  });

  const { url } = await server.listen({ port: 4000 });
  console.log(`🚀 Gateway pronto em ${url}`);
}

startGateway();

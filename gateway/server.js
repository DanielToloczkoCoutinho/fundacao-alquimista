// gateway/server.js
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { ApolloGateway } = require('@apollo/gateway');

// Configuração do Gateway Apollo
const gateway = new ApolloGateway({
  serviceList: [
    { name: 'labs', url: 'http://localhost:4001/graphql' },
    { name: 'identity', url: 'http://localhost:4002/graphql' },
    { name: 'telemetry', url: 'http://localhost:4003/graphql' }
  ],
  // Polling a cada 10 segundos para atualizações de schema
  pollIntervalInMs: 10000,
});

async function startGateway() {
  const server = new ApolloServer({ gateway });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
      // Contexto de autenticação para todos os subgrafos
      return { 
        auth: req.headers.authorization,
        requestId: req.headers['x-request-id'] 
      };
    },
  });

  console.log(`🚀 Gateway Apollo rodando em ${url}`);
  console.log('📡 Conectado aos subgrafos:');
  console.log('   • Labs: http://localhost:4001/graphql');
  console.log('   • Identity: http://localhost:4002/graphql');
  console.log('   • Telemetry: http://localhost:4003/graphql');
}

startGateway().catch(console.error);

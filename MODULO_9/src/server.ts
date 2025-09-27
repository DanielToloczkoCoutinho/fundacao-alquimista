import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import http from 'http';

// Rotas REST
import usuarioRoutes from './routes/usuario';

// Apollo Server
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';

// Schemas e resolvers GraphQL
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const app = express();
const httpServer = http.createServer(app);

// Middlewares básicos
app.use(cors());
app.use(bodyParser.json());

// Rotas REST
app.use('/api/usuarios', usuarioRoutes);

// Apollo Server integrado ao Express
const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function startServer() {
  await server.start();
  app.use('/graphql', expressMiddleware(server));

  // Conexão ao MongoDB
  mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/fundacao_alquimica')
    .then(() => console.log('🔗 Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

  const PORT = process.env.PORT || 4000;
  httpServer.listen(PORT, () => {
    console.log(`🚀 Servidor Express rodando em http://localhost:${PORT}`);
    console.log(`🌐 Apollo Server disponível em http://localhost:${PORT}/graphql`);
  });
}

startServer();

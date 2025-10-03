import os

def migrar_graphql():
    print("⚙️ Iniciando migração do Oráculo GraphQL...")

    # Criar diretório de destino
    destino = "MODULO_9/src/graphql"
    os.makedirs(destino, exist_ok=True)

    # Criar schema.ts
    schema = """import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Usuario {
    id: ID!
    nome: String!
    email: String!
  }

  type Query {
    hello: String
    usuarios: [Usuario]
  }

  type Mutation {
    criarUsuario(nome: String!, email: String!, senha: String!): Usuario
  }
`;

export default typeDefs;
"""
    with open(os.path.join(destino, "schema.ts"), "w", encoding="utf-8") as f:
        f.write(schema)

    # Criar resolvers.ts
    resolvers = """import Usuario from '../models/Usuario';

const resolvers = {
  Query: {
    hello: () => "🧠 O Oráculo responde: Olá, mundo GraphQL!",
    usuarios: async () => await Usuario.find()
  },
  Mutation: {
    criarUsuario: async (_: any, { nome, email, senha }: any) => {
      const usuario = new Usuario({ nome, email, senha });
      await usuario.save();
      return usuario;
    }
  }
};

export default resolvers;
"""
    with open(os.path.join(destino, "resolvers.ts"), "w", encoding="utf-8") as f:
        f.write(resolvers)

    print("✅ Migração concluída: schema.ts e resolvers.ts criados em src/graphql/")

if __name__ == "__main__":
    migrar_graphql()

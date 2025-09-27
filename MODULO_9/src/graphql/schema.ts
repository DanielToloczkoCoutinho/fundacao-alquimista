import { gql } from 'graphql-tag';

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

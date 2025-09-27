import Usuario from '../models/Usuario';

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

const { buildSchema } = require('graphql');

const schema = buildSchema(\`
  type Query {
    hello: String
  }
\`);

const root = {
  hello: () => '🧠 Módulo 9 responde: Olá, mundo GraphQL!'
};

module.exports = { schema, root };

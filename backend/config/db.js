
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fundacao';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Conexão com Akasha (MongoDB) estabelecida.'))
  .catch(err => console.error('Falha na conexão com Akasha (MongoDB):', err));

module.exports = mongoose;

const jwt = require('jsonwebtoken');
const Operator = require('../models/Operator');
const ROLES = require('../config/roles');

// Senha padrão para o operador Admin (Fundador), deve ser alterada em produção
const operators = {
  ADMIN: process.env.ADMIN_PASSWORD || 'ANATHERON_SOVEREIGN_WILL',
  Zennith: process.env.IAM_PASSWORD || 'iam-password',
  MΩ: process.env.OMEGA_PASSWORD || 'omega-password',
  M9: process.env.NEXUS_PASSWORD || 'nexus-password',
};

const JWT_SECRET = process.env.JWT_SECRET || 'a-very-secret-key-for-the-foundation';

exports.login = async (req, res) => {
  const { operator, password } = req.body;
  if (operators[operator] && operators[operator] === password) {
    const payload = {
      operator,
      roles: ROLES[operator] || []
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '8h' });
    res.json({ token, operator, roles: payload.roles });
  } else {
    res.status(401).json({ error: 'Assinatura vibracional não reconhecida.' });
  }
};

// Funções para gerenciar operadores (requer permissão de Admin)
exports.createOperator = async (req, res) => {
  // Lógica para criar um novo operador (ex: pelo painel de admin)
};

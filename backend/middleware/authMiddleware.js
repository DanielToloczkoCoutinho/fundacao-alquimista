
const jwt = require('jsonwebtoken');
const ROLES = require('../config/roles');

const JWT_SECRET = process.env.JWT_SECRET || 'a-very-secret-key-for-the-foundation';

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token de autenticação ausente ou malformado.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.operator = decoded; // Adiciona os dados do operador ao request
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido ou expirado.' });
  }
};

exports.authorize = (requiredRoles) => {
  return (req, res, next) => {
    const operatorRoles = req.operator.roles || [];
    const hasPermission = requiredRoles.some(role => operatorRoles.includes(role));

    if (hasPermission) {
      next();
    } else {
      res.status(403).json({ error: 'Permissão negada para esta operação.' });
    }
  };
};

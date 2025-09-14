
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('./config/db'); // Conexão com o banco de dados

const authRoutes = require('./routes/authRoutes');
const energyRoutes = require('./routes/energyRoutes');
const auditRoutes = require('./routes/auditRoutes');
const { authMiddleware } = require('./middleware/authMiddleware');

const app = express();

// Middlewares de Segurança
app.use(helmet());
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutos
	max: 100, // Limita cada IP a 100 requisições por janela
	standardHeaders: true,
	legacyHeaders: false,
});
app.use(limiter);

// Rotas públicas
app.get('/health', (req, res) => res.status(200).json({ status: 'Ω', timestamp: new Date().toISOString() }));
app.use('/api/auth', authRoutes);

// Rotas protegidas
app.use('/api/energy', authMiddleware, energyRoutes);
app.use('/api/audit', authMiddleware, auditRoutes);

// Tratamento de erro centralizado
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Dissonância interna detectada!');
});

module.exports = app;

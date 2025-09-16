
const http = require('http');
const WebSocket = require('ws');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
require('./config/db.js'); // Conexão com o banco de dados

const authRoutes = require('./routes/authRoutes.js');
const energyRoutes = require('./routes/energyRoutes.js');
const auditRoutes = require('./routes/auditRoutes.js');
const cosmosRoutes = require('./routes/cosmos.js');
const replicationRoutes = require('./routes/replication.js'); // Rota de Replicação
const syncRoutes = require('./routes/sync.js'); // Rota de Sincronização
const seloFinalRoutes = require('./routes/seloFinal.js');
const cocriacaoRoutes = require('./routes/cocriacao.js');
const { authMiddleware } = require('./middleware/authMiddleware.js');
const { initializeWebSocket, broadcast } = require('./services/websocketService.js');
const { performSystemHealthCheck } = require('../src/lib/system-health'); // Ajuste de caminho

const app = express();
const server = http.createServer(app);

// Middlewares de Segurança e Performance
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(compression());
app.use(express.json());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutos
	max: 500, // Limita cada IP a 500 requisições por janela
	standardHeaders: true,
	legacyHeaders: false,
    message: 'Frequência de requisições excessiva detectada. Aguardando recalibração.',
});
app.use(limiter);

// Rotas públicas
app.get('/health', (req, res) => res.status(200).json({ status: 'Ω', timestamp: new Date().toISOString() }));
app.get('/health/extended', async (req, res) => {
    const report = await performSystemHealthCheck();
    res.status(report.status === 'unhealthy' ? 503 : 200).json(report);
});

app.use('/api/auth', authRoutes);
app.use('/api/cosmos', cosmosRoutes);
app.use('/api/replication', replicationRoutes); // Usando a rota de replicação
app.use('/api/sync', syncRoutes); // Usando a rota de sincronização
app.use('/api/seloFinal', seloFinalRoutes);
app.use('/api/cocriacao', cocriacaoRoutes);


// Rota de Diagnóstico de Segurança (pública para verificação)
app.get('/api/security/status', (req, res) => {
  res.json({
    helmet: 'ativo',
    cors: 'protegido',
    rateLimit: 'em operação',
    headers: 'configurados via next.config.js',
  })
});

// Rotas protegidas
app.use('/api/energy', authMiddleware, energyRoutes);
app.use('/api/audit', authMiddleware, auditRoutes);

// Tratamento de erro centralizado
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Dissonância interna detectada!');
});

const PORT = process.env.BACKEND_PORT || 4000;

// Inicializa o servidor WebSocket
initializeWebSocket(server);

server.listen(PORT, '0.0.0.0', () => {
    console.log(`[backend] Coração Oculto pulsando na porta ${PORT}`);
});


module.exports = app;

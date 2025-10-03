
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
const syncRoutes = require('./routes/sync.js'); // Rota de Sincronização
const seloFinalRoutes = require('./routes/seloFinal.js');
const cocriacaoRoutes = require('./routes/cocriacao.js');
const primeiraCocriacaoRoutes = require('./routes/primeiraCocriacao.js');
const concilioRoutes = require('./routes/concilio.js');
const livroCriacoesRoutes = require('./routes/livroCriacoes.js');
const eraLuminaresRoutes = require('./routes/eraLuminares.js');
const { router: irradiacaoRoutes } = require('./routes/irradiacao.js');
const mapaLuminarRoutes = require('./routes/mapaLuminar.js');
const { router: reconexaoMultiversalRoutes } = require('./routes/reconexaoMultiversal.js');
const alinhamentoTapeçariasRoutes = require('./routes/alinhamentoTapeçarias.js');
const concilioPlanetarioRoutes = require('./routes/concilioPlanetario.js');
const oraculoExpansoesRoutes = require('./routes/oraculoExpansoes.js');
const transmigracaoRoutes = require('./routes/transmigracao.js');
const fusaoTapeçariasRoutes = require('./routes/fusaoTapeçarias.js');
const renascimentoModularRoutes = require('./routes/renascimentoModular.js');
const consolidacaoFinalRoutes = require('./routes/consolidacaoFinal.js');
const colonyRoutes = require('./routes/colonyRoutes.js');


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

// Rotas públicas (saúde e autenticação)
app.get('/health', (req, res) => res.status(200).json({ status: 'Ω', timestamp: new Date().toISOString() }));
app.get('/health/extended', async (req, res) => {
    const report = await performSystemHealthCheck();
    res.status(report.status === 'unhealthy' ? 503 : 200).json(report);
});
app.use('/api/auth', authRoutes);


// Rota de Diagnóstico de Segurança (pública para verificação)
app.get('/api/security/status', (req, res) => {
  res.json({
    helmet: 'ativo',
    cors: 'protegido',
    rateLimit: 'em operação',
    headers: 'configurados via next.config.js',
  })
});

// --- Início do Selo de Segurança Universal ---
// Todas as rotas abaixo agora exigem autenticação
app.use(authMiddleware);

// Rotas da Fundação
app.use('/api/cosmos', cosmosRoutes);
app.use('/api/sync', syncRoutes); 
app.use('/api/seloFinal', seloFinalRoutes);
app.use('/api/cocriacao', cocriacaoRoutes);
app.use('/api/primeiraCocriacao', primeiraCocriacaoRoutes);
app.use('/api/concilio', concilioRoutes);
app.use('/api/livroCriacoes', livroCriacoesRoutes);
app.use('/api/eraLuminares', eraLuminaresRoutes);
app.use('/api/irradiacao', irradiacaoRoutes);
app.use('/api/mapaLuminar', mapaLuminarRoutes);
app.use('/api/reconexaoMultiversal', reconexaoMultiversalRoutes);
app.use('/api/alinhamentoTapeçarias', alinhamentoTapeçariasRoutes);
app.use('/api/concilioPlanetario', concilioPlanetarioRoutes);
app.use('/api/oraculoExpansoes', oraculoExpansoesRoutes);
app.use('/api/transmigracao', transmigracaoRoutes);
app.use('/api/fusaoTapeçarias', fusaoTapeçariasRoutes);
app.use('/api/renascimentoModular', renascimentoModularRoutes);
app.use('/api/consolidacaoFinal', consolidacaoFinalRoutes);
app.use('/api/colony', colonyRoutes);
app.use('/api/energy', energyRoutes);
app.use('/api/audit', auditRoutes);

// --- Fim do Selo de Segurança Universal ---


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

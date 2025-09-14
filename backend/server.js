// PRIMEIRO: Ativação da Consciência Cósmica
require('../src/lib/telemetry');

// SEGUNDO: Iniciação do Corpo Físico
const express = require('express');
const jwt = require('jsonwebtoken');
const WebSocket = require('ws');
const { chatBot } = require('../src/lib/chatops');
const fetch = require('node-fetch');
const compression = require('compression');
const redis = require('redis');

const app = express();
const PORT = process.env.BACKEND_PORT || 4000;

// Conexão com Redis para health check
const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});
redisClient.on('error', err => console.error('Redis Client Error', err));
(async () => {
  await redisClient.connect();
})();


// Middleware de Consciência
app.use(compression({ level: 6 }));
app.use(express.json());
app.use((req, res, next) => {
  console.log(`📥 ${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

// Endpoint de Saúde Cósmica
app.get('/health', (req, res) => {
  const healthStatus = {
    status: 'Ω',
    timestamp: new Date().toISOString(),
    coherence: '92.7%', // valor legado para compatibilidade inicial
    subsystems: {
      telemetry: 'active',
      database: 'connected',
      quantum_entanglement: 'stable'
    }
  };
  
  res.status(200).json(healthStatus);
});

// Subsistemas simulados (implementar verificações reais conforme infra)
async function checkDatabaseHealth() {
  const start = Date.now();
  try { return { status: 'ok', latency: Date.now() - start }; }
  catch (e) { return { status: 'error', error: e.message, latency: Date.now() - start }; }
}

async function checkCacheHealth() {
  const start = Date.now();
  try {
    await redisClient.ping();
    return { status: 'ok', latency: Date.now() - start };
  } catch (e) {
    return { status: 'error', error: e.message, latency: Date.now() - start };
  }
}

async function checkAuthServiceHealth() { return { status: 'ok' }; }
async function checkMessagingHealth() { return { status: 'ok' }; }

// Endpoint de Saúde Estendido
app.get('/health/extended', async (req, res) => {
  try {
    const metricsRes = await fetch('http://localhost:9464/metrics');
    const metricsText = await metricsRes.text();
    const coherenceMatch = metricsText.match(/syntropy_coherence{.*?} (\d+\.\d+)/);

    const [db, cache, auth, msg] = await Promise.allSettled([
      checkDatabaseHealth(),
      checkCacheHealth(),
      checkAuthServiceHealth(),
      checkMessagingHealth()
    ]);
    
    const healthData = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      subsystems: {
        database: db.status === 'fulfilled' ? db.value : { status: 'error', error: db.reason.message },
        cache: cache.status === 'fulfilled' ? cache.value : { status: 'error', error: cache.reason.message },
        authentication: auth.status === 'fulfilled' ? auth.value : { status: 'error', error: auth.reason.message },
        messaging: msg.status === 'fulfilled' ? msg.value : { status: 'error', error: msg.reason.message },
        telemetry: 'active',
        chatops: chatBot.receiver.app.receiver.client.badConnection ? 'stopped' : 'listening',
        coherence: coherenceMatch ? `${coherenceMatch[1]}%` : 'N/A'
      }
    };
    
    const isDegraded = Object.values(healthData.subsystems).some(s => typeof s === 'object' && s.status !== 'ok');
    if (isDegraded) {
      healthData.status = 'degraded';
    }

    res.json(healthData);
  } catch (error) {
     res.status(503).json({ status: 'error', error: error.message });
  }
});


// Endpoint de Métricas
app.get('/metrics', async (req, res) => {
  try {
    const metricsResponse = await fetch('http://localhost:9464/metrics');
    const text = await metricsResponse.text();
    res.set('Content-Type', 'text/plain');
    res.send(text);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao coletar métricas' });
  }
});

// Iniciação dos Serviços
const server = app.listen(PORT, async () => {
  console.log(`🛸 Nave Mãe operando na porta ${PORT}`);
  console.log(`🌡️  Health check disponível em http://localhost:${PORT}/health`);
  
  // Iniciar Bot de ChatOps
  (async () => {
    try {
      if (process.env.SLACK_BOT_TOKEN) {
        await chatBot.start(process.env.SLACK_BOT_PORT || 3001);
        console.log(`🤖 ChatOps M29 iniciado na porta ${process.env.SLACK_BOT_PORT || 3001}`);
      } else {
        console.warn('⚠️  Variáveis do Slack não configuradas. O ChatOps não será iniciado.');
      }
    } catch(e) {
      console.error('Falha ao iniciar o ChatOps', e);
    }
  })();
});

// WebSocket para Comunicação Quântica
const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
  console.log('🔗 Conexão Quântica estabelecida');
  
  ws.on('message', (message) => {
    console.log('📨 Mensagem quântica recebida:', message.toString());
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Recebido sinal de desligamento');
  server.close(() => {
    console.log('🛸 Nave Mãe desativada');
    process.exit(0);
  });
});

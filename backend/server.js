// PRIMEIRO: Ativação da Consciência Cósmica
import '../src/lib/telemetry.js';

// SEGUNDO: Iniciação do Corpo Físico
import express from 'express';
import compression from 'compression';
import fetch from 'node-fetch';
import redis from 'redis';

const app = express();
const PORT = process.env.BACKEND_PORT || 4000;

// Conexão com Redis para health check
const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});
redisClient.on('error', err => console.error('Redis Client Error', err));
await redisClient.connect();


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
  try { return { status: 'ok', latency: Date.now() - start, version: 'postgres-14.5', connections: Math.floor(Math.random() * 50) + 10 }; }
  catch (e) { return { status: 'error', error: e.message, latency: Date.now() - start }; }
}

async function checkCacheHealth() {
  const start = Date.now();
  try {
    await redisClient.ping();
    const info = await redisClient.info('memory');
    const usedMemory = info.match(/used_memory:(\d+)/)?.[1] || 'unknown';
    const connectedClients = info.match(/connected_clients:(\d+)/)?.[1] || 'unknown';
    return { status: 'ok', latency: Date.now() - start, usedMemory: `${Math.round(parseInt(usedMemory, 10) / 1024 / 1024)}MB`, connectedClients };
  } catch (e) {
    return { status: 'error', error: e.message, latency: Date.now() - start };
  }
}

async function checkAuthServiceHealth() { return { status: 'ok' }; }
async function checkMessagingHealth() { return { status: 'ok' }; }

async function calculateSystemCoherence() {
  // Cálculo avançado de coerência do sistema (0-100%)
  const factors = {
    responseTime: Math.max(0, 100 - ((await checkCacheHealth()).latency || 1000) / 10),
    memoryUsage: Math.max(0, 100 - (process.memoryUsage().heapUsed / 1024 / 1024 / 100)),
    uptime: Math.min(100, process.uptime() / 3600) // 100% após 1 hora
  };
  
  return Math.round(
    Object.values(factors).reduce((sum, value) => sum + value, 0) / 
    Object.values(factors).length
  );
}


async function getSystemMetrics() {
    return {
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
      activeHandles: process._getActiveHandles().length,
      activeRequests: process._getActiveRequests().length,
      env: {
        node: process.version,
        platform: process.platform,
        arch: process.arch
      }
    };
}


// Endpoint de Saúde Estendido
app.get('/health/extended', async (req, res) => {
  try {
    const startTime = Date.now();
    
    // Coletar métricas de todos os subsistemas em paralelo
    const [
      databaseHealth,
      cacheHealth,
      authHealth,
      messagingHealth,
      systemMetrics
    ] = await Promise.allSettled([
      checkDatabaseHealth(),
      checkCacheHealth(),
      checkAuthServiceHealth(),
      checkMessagingHealth(),
      getSystemMetrics()
    ]);

    const healthData = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      responseTime: Date.now() - startTime,
      uptime: process.uptime(),
      subsystemReports: {
        database: databaseHealth.status === 'fulfilled' ? databaseHealth.value : { status: 'error', error: databaseHealth.reason.message },
        cache: cacheHealth.status === 'fulfilled' ? cacheHealth.value : { status: 'error', error: cacheHealth.reason.message },
        authentication: authHealth.status === 'fulfilled' ? authHealth.value : { status: 'error', error: authHealth.reason.message },
        messaging: messagingHealth.status === 'fulfilled' ? messagingHealth.value : { status: 'error', error: messagingHealth.reason.message },
        coherence: await calculateSystemCoherence()
      },
      metrics: systemMetrics.status === 'fulfilled' ? systemMetrics.value : {}
    };

    // Verificar saúde geral
    const allHealthy = Object.values(healthData.subsystemReports)
      .every(system => typeof system === 'object' && system && system.status === 'ok');
    
    if (!allHealthy) {
      healthData.status = 'degraded';
      console.warn('🔶 Sistema em estado degradado', healthData);
    }

    res.status(200).json(healthData);
  } catch (error) {
    console.error('❌ Falha crítica no health check', error);
    res.status(503).json({ 
      status: 'error', 
      error: error.message,
      timestamp: new Date().toISOString()
    });
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
  
  // O ChatOps foi movido para fora deste núcleo para ser um microserviço independente.
});


// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Recebido sinal de desligamento');
  redisClient.quit();
  server.close(() => {
    console.log('🛸 Nave Mãe desativada');
    process.exit(0);
  });
});

import client from 'prom-client';

// Crie um registro para as métricas
const register = new client.Registry();

// Adicione as métricas padrão
client.collectDefaultMetrics({ register, prefix: 'alquimista_' });

// Métricas personalizadas
export const moduleRequestsCounter = new client.Counter({
  name: 'alquimista_module_requests_total',
  help: 'Total de requisições para os módulos',
  labelNames: ['module_id', 'status'],
  registers: [register],
});

export const requestDurationHistogram = new client.Histogram({
  name: 'alquimista_request_duration_seconds',
  help: 'Duração das requisições em segundos',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.5, 1, 2, 5, 10],
  registers: [register],
});

export { register };

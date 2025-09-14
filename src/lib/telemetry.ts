// src/lib/telemetry.ts
import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';

// Configuração do exportador Prometheus
const metricExporter = new PrometheusExporter({
  port: 9464,
});

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'fundacao-omega-core',
    [SemanticResourceAttributes.SERVICE_VERSION]: '1.0.0',
  }),
  metricExporter,
  traceExporter: new ConsoleSpanExporter(),
  instrumentations: [getNodeAutoInstrumentations()],
});

// Inicialização da telemetria
sdk.start()
  .then(() => {
    console.log('🌌 Observabilidade Cósmica Ativada');
    console.log('📊 Métricas disponíveis em http://localhost:9464/metrics');
  })
  .catch((error) => {
    console.error('❌ Falha na iniciação da Telemetria:', error);
  });

// Shutdown graceful
process.on('SIGTERM', async () => {
  try {
    await sdk.shutdown();
    console.log('📴 Telemetria finalizada com sucesso');
  } catch (error) {
    console.error('❌ Erro no desligamento da telemetria:', error);
  } finally {
    process.exit(0);
  }
});

export { sdk, metricExporter };
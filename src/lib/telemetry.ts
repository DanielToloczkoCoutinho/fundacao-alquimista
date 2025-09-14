import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const exporter = new PrometheusExporter({ port: 9464 }, () =>
  console.log('🚀 Metrics available at http://localhost:9464/metrics')
);

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'fundacao-omega-backend',
  }),
  metricExporter: exporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk
  .start()
  .then(() => console.log('🌐 Observabilidade cósmica ativada'))
  .catch((err) => console.error('❌ Erro ao iniciar telemetria:', err));

process.on('SIGTERM', () =>
  sdk
    .shutdown()
    .then(() => console.log('🛑 Telemetria finalizada'))
    .catch((err) => console.error('❌ Erro ao desligar telemetria:', err))
    .finally(() => process.exit(0))
);

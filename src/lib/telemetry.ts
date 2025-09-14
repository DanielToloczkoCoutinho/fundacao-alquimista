// telemetry.ts
import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';

const exporter = new JaegerExporter({
  // Jaeger agent configuration
  // host: 'localhost',
  // port: 6832,
});

const sdk = new NodeSDK({
  serviceName: 'fundacao-alquimista-backend',
  traceExporter: exporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

try {
  sdk.start();
  console.log('🚀 Observabilidade Fractal (OpenTelemetry) ativada e conectada ao Jaeger.');
} catch (error) {
  console.error('Falha ao iniciar OpenTelemetry SDK:', error);
}

process.on('SIGTERM', () => {
  sdk.shutdown()
    .then(() => console.log('Tracing terminated'))
    .catch((error) => console.error('Error terminating tracing', error))
    .finally(() => process.exit(0));
});
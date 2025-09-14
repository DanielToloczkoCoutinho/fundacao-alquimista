import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';

const exporter = new PrometheusExporter(
  { startServer: true, port: Number(process.env.OTEL_METRIC_PORT) || 9464 },
  () => console.log(`🚀 Metrics server em http://localhost:${exporter.port}/metrics`)
);

const sdk = new NodeSDK({
  metricExporter: exporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

try {
  sdk.start();
  console.log('🌐 OpenTelemetry initialized');
} catch (error) {
    console.error('❌ OTEL init error', error);
}

process.on('SIGTERM', () => {
  sdk.shutdown()
    .then(() => console.log('Tracing terminated'))
    .catch((error) => console.error('Error terminating tracing', error))
    .finally(() => process.exit(0));
});

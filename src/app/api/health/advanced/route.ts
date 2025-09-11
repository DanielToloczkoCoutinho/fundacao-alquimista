import { NextRequest, NextResponse } from 'next/server';
import { cosmicCache } from '@/lib/cosmic-cache';
import { logger } from '@/lib/logger';
import { execSync } from 'child_process';

export async function GET(request: NextRequest) {
  const healthReport: any = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    components: {},
  };

  // Verificar conexão com cache cósmico
  try {
    cosmicCache.set('health_check', { test: true }, 5000);
    const testValue = cosmicCache.get('health_check');
    healthReport.components.cosmic_cache = testValue ? 'healthy' : 'degraded';
  } catch (error: any) {
    healthReport.components.cosmic_cache = 'unhealthy';
    healthReport.cache_error = error.message;
  }

  // Verificar outros componentes do sistema
  healthReport.components.database = 'healthy'; // Simulado
  healthReport.components.vector_store = 'healthy'; // Simulado

  // Verificar se algum componente está com problemas
  const unhealthyComponents = Object.values(healthReport.components).filter(
    (status) => status !== 'healthy'
  );

  if (unhealthyComponents.length > 0) {
    healthReport.status = 'degraded';
    logger.warn('Health check reportou degradação. Iniciando auto-cura quântica.', healthReport);
    try {
      // Apenas execute em ambiente de produção
      if (process.env.NODE_ENV === 'production') {
        execSync('kubectl rollout restart deployment/alquimista-app', { stdio: 'inherit' });
        logger.info('Comando de reinício do deployment executado com sucesso.');
      } else {
        logger.info('Ambiente de desenvolvimento. O reinício automático do deployment foi pulado.');
      }
    } catch (error: any) {
        logger.error('Falha ao executar o comando de auto-cura.', { error: error.message, stdout: error.stdout, stderr: error.stderr });
    }
  }

  return NextResponse.json(healthReport, {
    status: unhealthyComponents.length > 0 ? 503 : 200, // Service Unavailable se estiver em processo de cura
  });
}

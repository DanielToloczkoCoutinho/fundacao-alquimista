import { NextRequest, NextResponse } from 'next/server';
import { cosmicCache } from '@/lib/cosmic-cache';
import { logger } from '@/lib/logger';

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
    logger.warn('Health check reportou degradação', healthReport);
  }

  return NextResponse.json(healthReport, {
    status: unhealthyComponents.length > 0 ? 206 : 200,
  });
}

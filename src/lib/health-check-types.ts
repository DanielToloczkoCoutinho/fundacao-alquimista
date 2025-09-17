// src/lib/health-check-types.ts

export type ModuleStatus = 'OPERACIONAL' | 'DEGRADADO' | 'EM_ALERTA' | 'OFFLINE';

export interface ModuleConnection {
  moduleId: string;
  description: string;
  status: 'CONECTADO' | 'INSTÁVEL';
}

export interface SubModule {
  name: string;
  status: 'ATIVO' | 'INATIVO';
  description: string;
}

export interface HealthReport {
  moduleId: string;
  status: ModuleStatus;
  coherence: number; // 0.0 to 1.0
  connections: ModuleConnection[];
  subModules: SubModule[];
  lastCheck: string;
}

// Schema de entrada para o fluxo de verificação de saúde
export interface ModuleHealthCheckInput {
  moduleId: string;
}

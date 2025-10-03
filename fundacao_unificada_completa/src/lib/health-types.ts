'use server';

export interface ModuleHealth {
  moduleCode: string;
  coherence: number; // 0-100%
  status: 'healthy' | 'warning' | 'critical';
  lastChecked: Date;
  dependencies: string[]; // Códigos dos módulos dependentes
  connections: ModuleConnection[];
}

export interface ModuleConnection {
  moduleCode: string;
  status: 'healthy' | 'warning' | 'critical';
  latency?: number; // ms
  bandwidth?: number; // Mbps
}

export interface HealthCheckResult {
  timestamp: Date;
  modules: ModuleHealth[];
  overallCoherence: number;
  alerts: HealthAlert[];
}

export interface HealthAlert {
  moduleCode: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: Date;
}

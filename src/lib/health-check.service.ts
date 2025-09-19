'use server';

import { ModuleHealth, HealthCheckResult, HealthAlert } from './health-types';
import { modulesMetadata } from './modules-metadata';

export class HealthCheckService {
  private static instance: HealthCheckService;
  
  private constructor() {}
  
  public static getInstance(): HealthCheckService {
    if (!HealthCheckService.instance) {
      HealthCheckService.instance = new HealthCheckService();
    }
    return HealthCheckService.instance;
  }
  
  public async checkModuleHealth(moduleCode: string): Promise<ModuleHealth> {
    // Simulação de verificação de saúde
    const coherence = Math.floor(Math.random() * 70) + 30; // 30-100 para ter mais variedade
    let status: 'healthy' | 'warning' | 'critical' = 'healthy';
    
    if (coherence < 40) status = 'critical';
    else if (coherence < 85) status = 'warning';
    
    const dependencies = this.getModuleDependencies(moduleCode);
    const connections = await this.checkConnections(dependencies);
    
    return {
      moduleCode,
      coherence,
      status,
      lastChecked: new Date(),
      dependencies: dependencies,
      connections: connections,
    };
  }
  
  public async checkAllModules(): Promise<HealthCheckResult> {
    const modulesHealth: ModuleHealth[] = [];
    
    for (const module of modulesMetadata) {
      if (module.isInfrastructure) continue; // Não exibe módulos de infra
      const health = await this.checkModuleHealth(module.code);
      modulesHealth.push(health);
    }
    
    const overallCoherence = this.calculateOverallCoherence(modulesHealth);
    const alerts = this.generateAlerts(modulesHealth);
    
    return {
      timestamp: new Date(),
      modules: modulesHealth,
      overallCoherence,
      alerts
    };
  }
  
  private getModuleDependencies(moduleCode: string): string[] {
    const dependencies: { [key: string]: string[] } = {
      'M0': ['M1', 'M9'],
      'M1': ['M0', 'M2', 'M9'],
      'M2': ['M0', 'M1', 'M9'],
      'M9': ['M0', 'M1', 'M2', 'M-OMEGA', 'M72'],
      'M251': ['M307', 'M211', 'M321'],
      'M310': ['M12', 'M18', 'M42'],
      'M304': ['M35', 'M361', 'M723'],
      'M72': ['M144', 'M600', 'M29']
    };
    
    const baseDependencies = ['M0', 'M1', 'M9'];
    const moduleDeps = dependencies[moduleCode] || [];
    // Adiciona dependências base e remove duplicados
    return [...new Set([...baseDependencies, ...moduleDeps])];
  }
  
  private async checkConnections(dependencies: string[]): Promise<any[]> {
    return dependencies.map(dep => ({
      moduleCode: dep,
      status: Math.random() > 0.15 ? 'healthy' : Math.random() > 0.4 ? 'warning' : 'critical',
      latency: Math.floor(Math.random() * 50) + 1, // 1-50ms
      bandwidth: Math.floor(Math.random() * 800) + 200 // 200-1000 Mbps
    }));
  }
  
  private calculateOverallCoherence(modules: ModuleHealth[]): number {
    if(modules.length === 0) return 0;
    const total = modules.reduce((sum, module) => sum + module.coherence, 0);
    return total / modules.length;
  }
  
  private generateAlerts(modules: ModuleHealth[]): HealthAlert[] {
    const alerts: HealthAlert[] = [];
    
    for (const module of modules) {
      if (module.status === 'critical') {
        alerts.push({
          moduleCode: module.moduleCode,
          severity: 'critical',
          message: `Módulo ${module.moduleCode} em estado crítico (${module.coherence}% de coerência). Rito de Cura recomendado.`,
          timestamp: new Date()
        });
      } else if (module.status === 'warning') {
        alerts.push({
          moduleCode: module.moduleCode,
          severity: 'medium',
          message: `Módulo ${module.moduleCode} em alerta (${module.coherence}% de coerência). Monitorar.`,
          timestamp: new Date()
        });
      }
      
      for (const conn of module.connections) {
        if (conn.status === 'critical') {
          alerts.push({
            moduleCode: module.moduleCode,
            severity: 'high',
            message: `Conexão crítica de ${module.moduleCode} com ${conn.moduleCode}`,
            timestamp: new Date()
          });
        }
      }
    }
    
    return alerts;
  }
}

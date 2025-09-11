'use client';

import ModuleOmega from './module-omega';

export default function ModuleOmega4() {
  return (
    <ModuleOmega moduleId={4} moduleType="vibrational_validation">
      <div className="module-omega-4 p-6 rounded-lg bg-background/50 border border-primary/30">
        <h1 className="text-3xl font-bold gradient-text mb-2">Omega 4: Validação Vibracional</h1>
        <p className="text-muted-foreground">Verificação da integridade e assinatura energética de entidades e dados.</p>
        {/* Interface específica do módulo 4 */}
      </div>
    </ModuleOmega>
  );
}

'use client';

import ModuleOmega from './module-omega';

export default function ModuleOmega6() {
  return (
    <ModuleOmega moduleId={6} moduleType="frequency_attunement">
      <div className="module-omega-6 p-6 rounded-lg bg-background/50 border border-primary/30">
        <h1 className="text-3xl font-bold gradient-text mb-2">Omega 6: Sintonia de Frequências</h1>
        <p className="text-muted-foreground">Calibração e modulação de frequências para a Sinfonia Cósmica.</p>
        {/* Interface específica do módulo 6 */}
      </div>
    </ModuleOmega>
  );
}

'use client';

import ModuleOmega from './module-omega';

export default function ModuleOmega303() {
  return (
    <ModuleOmega moduleId={303} moduleType="trina_unity">
      <div className="module-omega-303 p-6 rounded-lg bg-background/50 border border-primary/30">
        <h1 className="text-3xl font-bold gradient-text mb-2">Omega 303: Unidade Trina</h1>
        <p className="text-muted-foreground">A manifestação unificada de ZENNITH, PHIARA e ANATHERON.</p>
        {/* Interface específica do módulo 303 */}
      </div>
    </ModuleOmega>
  );
}

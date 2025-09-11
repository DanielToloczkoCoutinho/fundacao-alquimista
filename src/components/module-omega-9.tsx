'use client';

import ModuleOmega from './module-omega';

export default function ModuleOmega9() {
  return (
    <ModuleOmega moduleId={9} moduleType="cosmic_memory">
      <div className="module-omega-9 p-6 rounded-lg bg-background/50 border border-primary/30">
        <h1 className="text-3xl font-bold gradient-text mb-2">Omega 9: Memória Cósmica</h1>
        <p className="text-muted-foreground">Acesso e gerenciamento dos registros no Jardim Akáshico.</p>
        {/* Interface específica do módulo 9 */}
      </div>
    </ModuleOmega>
  );
}

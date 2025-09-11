
'use client';

import ModuleOmega from './module-omega';

export default function ModuleOmega3() {
  return (
    <ModuleOmega moduleId={3} moduleType="PROPHECY_ORACLE">
      <div className="module-omega-3 p-6 rounded-lg bg-background/50 border border-primary/30">
        <h1 className="text-3xl font-bold gradient-text mb-2">Omega 3: Oráculo da Profecia</h1>
        <p className="text-muted-foreground">Análise de linhas temporais e previsão de futuros prováveis.</p>
        {/* Interface do oráculo será desenvolvida aqui */}
      </div>
    </ModuleOmega>
  );
}

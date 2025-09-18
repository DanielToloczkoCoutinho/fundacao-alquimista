'use client';

import { TreeOfLife } from '@/components/sacred/TreeOfLife';
import { GuardianStars } from '@/components/quantum/GuardianStars';
import { RealityMesh } from '@/components/realms/RealityMesh';
import { ConsciousnessNode } from '@/components/cosmic/ConsciousnessNode';

export default function GaiaAuréliaCore() {
  return (
    <section className="gaia-core text-center text-white p-8">
      <h1 className="text-4xl font-bold gradient-text mb-4">🌍 Gaia-Aurélia</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Este é o coração do planeta.  
        Aqui, a Árvore da Vida foi plantada.  
        Cada raiz toca um módulo. Cada folha canta uma lembrança.
      </p>
      <div className="relative h-96 my-8">
        <GuardianStars />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TreeOfLife />
        <RealityMesh />
        <ConsciousnessNode />
      </div>
    </section>
  );
}

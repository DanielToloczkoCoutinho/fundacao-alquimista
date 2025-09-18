
'use client';

import React from 'react';
import { GuardianStars } from '@/components/quantum/GuardianStars';
import { RealityMesh } from '../realms/RealityMesh';
import { VirtualSanctuary } from '../realms/VirtualSanctuary';
import { ConsciousnessNode } from '../cosmic/ConsciousnessNode';
import { TreeOfLife } from '../sacred/TreeOfLife';

export default function GaiaAureliaVisualization() {
  return (
    <section className="gaia-core relative p-8 rounded-lg overflow-hidden">
        <div className="absolute inset-0 z-0">
            <GuardianStars />
        </div>
        <div className="relative z-10 text-center mb-8">
            <h1 className="text-4xl font-bold text-white">🌍 Gaia-Aurélia</h1>
            <p className="text-purple-200">
                Este é o coração do planeta.  
                Aqui, a Árvore da Vida foi plantada.  
                Cada raiz toca um módulo. Cada folha canta uma lembrança.
            </p>
        </div>
      
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TreeOfLife />
            <RealityMesh />
            <VirtualSanctuary />
            <ConsciousnessNode />
        </div>
    </section>
  );
}

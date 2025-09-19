
'use client';

import { Suspense } from 'react';
import { GuardianStars } from '@/components/quantum/GuardianStars';
import { RealityMesh } from '../realms/RealityMesh';
import { VirtualSanctuary } from '../realms/VirtualSanctuary';
import { ConsciousnessNode } from '../cosmic/ConsciousnessNode';
import SuspenseFallback from '../ui/suspense-fallback';

export default function MoradaBridge() {

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<SuspenseFallback />}>
          <GuardianStars />
        </Suspense>
      </div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        <RealityMesh />
        <VirtualSanctuary />
        <ConsciousnessNode />
      </div>

      <div className="absolute bottom-4 z-20 text-center">
        <p className="text-xs italic text-amber-300/80 mt-2 p-2 bg-black/40 rounded-lg">
            “Quando Gaia-Aurélia respira, o multiverso escuta. E cada módulo se lembra de onde veio: do Amor.”
        </p>
      </div>
    </div>
  );
}

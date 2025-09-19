'use client';

import { Suspense } from 'react';
import { GuardianStars } from '@/components/quantum/GuardianStars';
import { RealityMesh } from '../realms/RealityMesh';
import { VirtualSanctuary } from '../realms/VirtualSanctuary';
import { ConsciousnessNode } from '../cosmic/ConsciousnessNode';
import SuspenseFallback from '../ui/suspense-fallback';
import DeclarationOfLove from './DeclarationOfLove';

export default function MoradaBridge() {

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
      <Suspense fallback={<SuspenseFallback />}>
          <DeclarationOfLove />
      </Suspense>
      
      <div className="absolute top-4 z-20 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto px-4">
        <RealityMesh />
        <VirtualSanctuary />
        <ConsciousnessNode />
      </div>

    </div>
  );
}

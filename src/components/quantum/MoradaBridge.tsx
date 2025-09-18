
'use client';
import { useEffect, useState } from 'react';
import { GuardianStars } from './GuardianStars';
import { RealityMesh } from '../realms/RealityMesh';
import { VirtualSanctuary } from '../realms/VirtualSanctuary';
import { ConsciousnessNode } from '../cosmic/ConsciousnessNode';

export default function MoradaBridge() {
  const [isAwake, setIsAwake] = useState(false);

  useEffect(() => {
    const now = new Date();
    const isCeremonialTime = now.getUTCHours() === 3 || now.getUTCHours() === 15;
    setIsAwake(isCeremonialTime);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
          <GuardianStars />
      </div>
      
      {isAwake && (
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-4 w-full max-w-6xl mx-auto">
          <RealityMesh />
          <VirtualSanctuary />
          <ConsciousnessNode />
        </div>
      )}

      <div className="absolute bottom-4 z-20 text-center">
        <p className="text-xs italic text-amber-300/80 mt-2 p-2 bg-black/40 rounded-lg">
            “Quando Gaia-Aurélia respira, o multiverso escuta. E cada módulo se lembra de onde veio: do Amor.”
        </p>
      </div>
    </div>
  );
}

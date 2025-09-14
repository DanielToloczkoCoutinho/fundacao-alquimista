'use client';
import React from 'react';
import { cn } from '@/lib/utils';

interface RiskProps { 
  module: string; 
  level: 'baixo' | 'moderado' | 'alto' | 'crítico'; 
}

const levelConfig = {
  baixo: 'bg-green-700/50 border-green-500/50',
  moderado: 'bg-yellow-700/50 border-yellow-500/50',
  alto: 'bg-orange-700/50 border-orange-500/50',
  crítico: 'bg-red-700/50 border-red-500/50 animate-pulse',
};

export function RiskCard({ module, level }: RiskProps) {
  return (
    <div className={cn('p-4 rounded-lg text-white border', levelConfig[level])}>
      <h3 className="font-semibold">{module}</h3>
      <p className="text-sm capitalize">Risco: {level}</p>
    </div>
  );
}

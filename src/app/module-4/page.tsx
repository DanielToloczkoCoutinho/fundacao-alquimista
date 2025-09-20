'use client';
import React, { lazy, Suspense } from 'react';
import SuspenseFallback from '@/components/ui/suspense-fallback';

// Carrega o componente principal do módulo dinamicamente para otimização
const Module4Page = lazy(() => import('@/components/modules/module-4'));

export default function ModuleFourRoute() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Module4Page />
    </Suspense>
  );
}

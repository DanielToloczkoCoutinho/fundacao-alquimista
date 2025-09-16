'use client';

import React from 'react';

export default function SuspenseFallback() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      {/* O texto foi simplificado para garantir a mais pura correspondência estática entre servidor e cliente */}
      <p className="ml-4 text-amber-500">Carregando...</p>
    </div>
  );
}

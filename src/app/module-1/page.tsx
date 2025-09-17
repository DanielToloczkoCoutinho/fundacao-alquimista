'use client';

// Este arquivo foi movido para /src/components/modules/module-1.tsx
// e é invocado dinamicamente por /src/app/module/[code]/page.tsx.
// Manter um redirecionamento ou uma página de placeholder pode ser útil
// para links antigos, mas a lógica principal está centralizada.

import Module1Page from '@/components/modules/module-1';

export default function ModuleOneRedirect() {
  return <Module1Page />;
}

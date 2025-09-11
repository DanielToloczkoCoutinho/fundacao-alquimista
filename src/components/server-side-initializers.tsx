// @ts-nocheck
'use server';

import { simulateCosmicEnergy } from '@/lib/advanced-metrics';
import { startAutoHealer } from '@/lib/auto-healing';

// This needs to be a server component to ensure server-only code is not bundled on the client.
if (process.env.NODE_ENV === 'production') {
  simulateCosmicEnergy();
  startAutoHealer();
}

export default function ServerSideInitializers() {
  // This component doesn't render anything. It's just used to run server-side code.
  return null;
}

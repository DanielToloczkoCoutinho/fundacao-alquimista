import { modulesMetadata } from './modules-metadata';

export const foundationArchitecture = {
  core: {
    module9: {
      name: 'Núcleo Unificador',
      connections: modulesMetadata
        .filter(m => m.code.startsWith('M5') || m.code === 'M600')
        .map(m => m.code)
    }
  },
  network: {
    status: 'fully-connected',
    lastSync: new Date().toISOString()
  }
};

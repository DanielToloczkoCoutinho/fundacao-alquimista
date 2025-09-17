// CÓDICE DOS NANORROBÔS - Os Agentes Vivos da Fundação

export type NanoAgent = {
  id: string
  moduleId: string
  domain: 'core' | 'labs' | 'education' | 'library' | 'governance'
  type: 'NanoCore' | 'NanoScientia' | 'NanoMentor' | 'NanoAkasha' | 'NanoEthica'
  task: 'monitor' | 'repair' | 'synchronize'
  status: 'active' | 'idle' | 'in-transit'
  lastPing: string
}

export const generateNanoAgentsForModule = (
  moduleId: string,
  domain: NanoAgent['domain']
): NanoAgent[] => {
  const typeMap = {
    core: 'NanoCore',
    labs: 'NanoScientia',
    education: 'NanoMentor',
    library: 'NanoAkasha',
    governance: 'NanoEthica',
  }

  return Array.from({ length: 3 }, (_, i) => ({
    id: `${moduleId}-nano-${i + 1}`,
    moduleId,
    domain,
    type: typeMap[domain],
    task: ['monitor', 'repair', 'synchronize'][i % 3] as 'monitor' | 'repair' | 'synchronize',
    status: 'active',
    lastPing: new Date().toISOString(),
  }))
}

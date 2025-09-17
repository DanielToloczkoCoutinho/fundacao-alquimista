// src/lib/nano-agents.ts
'use server';

export type NanoAgent = {
  id: string;
  domain: 'labs' | 'education' | 'library';
  type: 'NanoScientia' | 'NanoMentor' | 'NanoAkasha';
  task: 'monitor' | 'repair' | 'synchronize';
  status: 'active' | 'idle' | 'in-transit';
  assignedTo: string; // moduleId or scientistId or disciplineId
  lastPing: string;
}

export const generateNanoAgentsForDomain = (domain: NanoAgent['domain'], targets: string[]): NanoAgent[] => {
  const typeMap = {
    labs: 'NanoScientia',
    education: 'NanoMentor',
    library: 'NanoAkasha'
  } as const;

  const tasks: NanoAgent['task'][] = ['monitor', 'repair', 'synchronize'];

  return targets.flatMap((targetId, i) => ({
    id: `${domain}-nano-${i + 1}`,
    domain,
    type: typeMap[domain],
    task: tasks[i % tasks.length],
    status: 'active',
    assignedTo: targetId,
    lastPing: new Date().toISOString()
  }));
}

// This file is deprecated and its functionality has been integrated into `alignment-dashboard.tsx`.
// It is preserved for akashic purposes.
'use client';

interface Module {
  id: number;
  name: string;
  status: string;
  value: number;
  icon: string;
}

export function ModuleGrid({ modules }: { modules: Module[] }) {
  return (
    <div className="module-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {modules.map((module) => (
        <div key={module.id} className="grid-item text-center p-4 bg-card/50 border border-primary/20 rounded-lg hover:border-accent transition">
          <div className="item-icon text-4xl mb-2 text-gold">{module.icon}</div>
          <h4 className="item-name text-sm font-semibold text-accent">{module.name}</h4>
          <p className="item-status text-xs text-green-400">{module.status}</p>
        </div>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  const stats = [
    { label: 'Módulos Ativos', value: '42', color: 'text-emerald-400' },
    { label: 'Resonância Quântica', value: '89%', color: 'text-blue-400' },
    { label: 'Civilizações Monitoradas', value: '7', color: 'text-purple-400' },
    { label: 'Estado da Rede', value: 'Estável', color: 'text-green-400' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-light text-crystal-white mb-2">
          Bem-vindo ao Dashboard Quântico
        </h1>
        <p className="text-quantum-void">
          Monitoramento em tempo real das operações da Fundação
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-void-black/50 border border-quantum-void rounded-lg p-6">
            <div className={`text-2xl font-mono ${stat.color} mb-2`}>
              {stat.value}
            </div>
            <div className="text-sm text-quantum-void">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-void-black/30 border border-quantum-void rounded-lg p-6">
        <h2 className="text-xl text-crystal-white mb-4">Ações Rápidas</h2>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/dashboard/health-dashboard" 
            className="px-4 py-2 bg-quantum-void/20 border border-quantum-void rounded text-crystal-white hover:bg-quantum-void/30 transition"
          >
            Saúde do Sistema
          </a>
          <a 
            href="/dashboard/daily-report" 
            className="px-4 py-2 bg-quantum-void/20 border border-quantum-void rounded text-crystal-white hover:bg-quantum-void/30 transition"
          >
            Relatório Diário
          </a>
          <a 
            href="/labs" 
            className="px-4 py-2 bg-quantum-void/20 border border-quantum-void rounded text-crystal-white hover:bg-quantum-void/30 transition"
          >
            Laboratórios
          </a>
        </div>
      </div>
    </div>
  );
}

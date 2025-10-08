export default function PublicPage() {
  const publicResources = [
    { 
      name: 'Fundação Alquimista', 
      description: 'Conheça nossa história e missão',
      href: '/public/fundacao',
      icon: '🏛️'
    },
    { 
      name: 'Santuary', 
      description: 'Espaço de reflexão e conexão',
      href: '/public/sanctuary', 
      icon: '🕊️'
    },
    { 
      name: 'Roadmap', 
      description: 'Nossa jornada e próximos passos',
      href: '/public/roadmap',
      icon: '🗺️'
    },
    { 
      name: 'Conexão', 
      description: 'Conecte-se com a rede',
      href: '/public/connection',
      icon: '🔗'
    },
  ];

  return (
    <div className="text-center">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-crystal-white mb-4">
          Fundação Alquimista
        </h1>
        <p className="text-xl text-quantum-void max-w-2xl mx-auto">
          Uma rede quântica de evolução consciencial dedicada à expansão 
          da percepção humana e integração cósmica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {publicResources.map((resource, index) => (
          <a
            key={index}
            href={resource.href}
            className="bg-void-black/30 border border-quantum-void rounded-lg p-6 hover:bg-quantum-void/20 transition group"
          >
            <div className="flex items-center space-x-4">
              <div className="text-2xl">{resource.icon}</div>
              <div className="text-left">
                <h3 className="text-lg text-crystal-white group-hover:text-emerald-400 transition">
                  {resource.name}
                </h3>
                <p className="text-sm text-quantum-void mt-1">
                  {resource.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

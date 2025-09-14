'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface FoundationModule {
  code: string;
  emoji: string;
  name: string;
  description: string;
  href: string;
}

export default function ModulesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const modules: FoundationModule[] = [
    { code: "M0", emoji: "🌱", name: "A Semente Primordial", description: "Origem e fundamento de toda a criação", href: "/module-zero" },
    { code: "M1", emoji: "🛡️", name: "Segurança Universal", description: "Proteção multidimensional integrada", href: "/module-one" },
    { code: "M2", emoji: "🗣️", name: "Intercâmbio Cósmico", description: "Comunicação entre dimensões e realidades", href: "/module-2" },
    { code: "M3", emoji: "🪐", name: "Monitor de Saturno", description: "Observação e análise do planeta Saturno", href: "/module-3" },
    { code: "M4", emoji: "🧪", name: "Testes da Fundação", description: "Validação experimental de novos conceitos", href: "/module-4" },
    { code: "M5", emoji: "🔗", name: "Conexão Liga Quântica", description: "Rede de interconexão quântica", href: "/module-5" },
    { code: "M6", emoji: "📡", name: "Sondagem da Consciência", description: "Exploração e mapeamento de estados conscientes", href: "/module-6" },
    { code: "M7", emoji: "🙏", name: "Alinhamento Divino", description: "Sincronização com propósitos superiores", href: "/module-7" },
    { code: "M8", emoji: "🌍", name: "Proteção Planetária", description: "Sistemas de defesa para o planeta Terra", href: "/module-8" },
    { code: "M9", emoji: "💓", name: "Núcleo Unificador", description: "Centro de conexão e harmonia de todos os módulos", href: "/module-9" },
    { code: "M10", emoji: "⚔️", name: "Defesa Avançada", description: "Sistemas de proteção de última geração", href: "/module-10" },
    { code: "M11", emoji: "🚪", name: "Gerenciamento de Portais", description: "Controle de acessos dimensionais", href: "/module-11" },
    { code: "M12", emoji: "📜", name: "Arquivo Akáshico", description: "Repositório de conhecimento universal", href: "/module-12" },
    { code: "M13", emoji: "📊", name: "Mapeamento de Frequências", description: "Cartografia de espectros vibratórios", href: "/module-13" },
    { code: "M14", emoji: "⚛️", name: "Transmutador Quântico", description: "Conversão de matéria e energia", href: "/module-14" },
    { code: "M15", emoji: "🌿", name: "Jardineiro Cósmico", description: "Cultivo e preservação de ecossistemas", href: "/module-15" },
    { code: "M16", emoji: "🏞️", name: "Bio-Sustentabilidade", description: "Manutenção de vida em diversos ambientes", href: "/module-16" },
    { code: "M17", emoji: "💠", name: "Cura Holográfica", description: "Terapias avançadas através de projeções", href: "/module-17" },
    { code: "M18", emoji: "🔮", name: "Orquestração Akáshica", description: "Coordenação de registros universais", href: "/module-18" },
    { code: "M19", emoji: "🛡️", name: "Análise de Campos de Força", description: "Estudo de barreiras energéticas", href: "/module-19" },
    { code: "M20", emoji: "🔥", name: "Orquestrador Elemental", description: "Controle dos elementos fundamentais", href: "/module-20" },
    { code: "M21", emoji: "🚀", name: "Navegação Interdimensional", description: "Travessia entre dimensões", href: "/module-21" },
    { code: "M22", emoji: "🕶️", name: "Motor da Realidade Quântica", description: "Geração de realidades alternativas", href: "/module-22" },
    { code: "M23", emoji: "⏳", name: "Regulação Espaço-Temporal", description: "Controle de dimensões tempo-espaço", href: "/module-23" },
    { code: "M24", emoji: "🎶", name: "Alinhamento da Sinfonia Pessoal", description: "Sincronização de propósito individual", href: "/module-24" },
    { code: "M25", emoji: "👁️", name: "Projeção de Consciência", description: "Expansão da awareness além do corporal", href: "/module-25" },
    { code: "M26", emoji: "🛂", name: "Supervisão de Travessias", description: "Monitoramento de jornadas dimensionais", href: "/module-26" },
    { code: "M27", emoji: "📠", name: "Síntese e Replicação Cósmica", description: "Criação de materiais e estruturas", href: "/module-27" },
    { code: "M28", emoji: "🌊", name: "Harmonização Vibracional", description: "Balanceamento de frequências", href: "/module-28" },
    { code: "M29", emoji: "👑", name: "Zennith", description: "Ápice da consciência real", href: "/module-29" },
    { code: "M30", emoji: "🚨", name: "Detecção de Ameaças", description: "Identificação de perigos multidimensionais", href: "/module-30" },
    { code: "M31", emoji: "✍️", name: "Manipulação da Realidade", description: "Modificação consciente do existente", href: "/module-31" },
    { code: "M32", emoji: "🌐", name: "Acesso a Realidades Paralelas", description: "Conexão com dimensões alternativas", href: "/module-32" },
    { code: "M33", emoji: "🗣️", name: "Diretrizes do Observador Divino", description: "Orientações de entidades superiores", href: "/module-33" },
    { code: "M34", emoji: "🎼", name: "Orquestração Central", description: "Coordenação de todos os sistemas", href: "/module-34" },
    { code: "M35", emoji: "🙌", name: "Consciência Coletiva", description: "Rede de mentes interconectadas", href: "/module-35" },
    { code: "M36", emoji: "🕰️", name: "Engenharia Temporal", description: "Manipulação de linhas do tempo", href: "/module-36" },
    { code: "M37", emoji: "🌬️", name: "Ajuste de Fluxo Temporal", description: "Modulação do curso temporal", href: "/module-37" },
    { code: "M38", emoji: "☀️", name: "Previsão de Ciclos Solares", description: "Antecipação de atividades estelares", href: "/module-38" },
    { code: "M39", emoji: "📖", name: "Códice Vivo da Ascensão", description: "Registro evolutivo dinâmico", href: "/module-39" },
    { code: "M40", emoji: "🧬", name: "Códice Genético Multidimensional", description: "Mapa da expressão genética expandida", href: "/module-40" },
    { code: "M41", emoji: "🔬", name: "Laboratório de Coerência Quântica", description: "Experimentos com estados quânticos", href: "/module-41" },
    { code: "M42", emoji: "📚", name: "ChronoCodex Unificado", description: "Integração de registros temporais", href: "/module-42" },
    { code: "M43", emoji: "🪐", name: "Orquestração do Sistema Solar", description: "Coordenação de corpos celestes", href: "/module-43" },
    { code: "M44", emoji: "✅", name: "VERITAS", description: "Sistema de verificação da verdade", href: "/module-44" },
    { code: "M45", emoji: "🏛️", name: "CONCILIVM", description: "Conselho de governança central", href: "/module-45" },
    { code: "M46", emoji: "🌅", name: "AURORA_CORE", description: "Núcleo de iluminação primordial", href: "/module-46" },
    { code: "M47", emoji: "🗂️", name: "Thesaurus Cósmico", description: "Enciclopédia do conhecimento universal", href: "/module-47" },
    { code: "M71", emoji: "🛰️", name: "Comunicação Holográfica", description: "Transmissão de informações em 3D", href: "/module-71" },
    { code: "M72", emoji: "⚖️", name: "Governança", description: "Sistema de administração multidimensional", href: "/module-72" },
    { code: "M73", emoji: "🛡️", name: "SAVCE", description: "Sistema avançado de verificação ética", href: "/module-73" },
    { code: "M73.1", emoji: "🧐", name: "Revisão por Pares", description: "Avaliação colegiada de projetos", href: "/module-73-1" },
    { code: "M74", emoji: "⌛", name: "CRONOS_FLUXUS", description: "Controle do fluxo temporal", href: "/module-74" },
    { code: "M77", emoji: "🛡️", name: "LUMEN-CUSTOS", description: "Guardião da luz e sabedoria", href: "/module-77" },
    { code: "M78", emoji: "🔗", name: "UNIVERSUM_UNIFICATUM", description: "Unificação de universos conhecidos", href: "/module-78" },
    { code: "M79", emoji: "📐", name: "INTERMODULUM_VIVENS", description: "Rede viva de interconexão modular", href: "/module-79" },
    { code: "M80", emoji: "📜", name: "O Manuscrito Vivo", description: "Documento evolutivo da Fundação", href: "/module-80" },
    { code: "M81", emoji: "🕊️", name: "Realização Transcendência", description: "Concretização do potencial máximo", href: "/module-81" },
    { code: "M81.1", emoji: "⚛️", name: "A Tríade Cosmogônica", description: "Três princípios criacionais fundamentais", href: "/module-81-1" },
    { code: "M82", emoji: "✒️", name: "O Verbo Semente", description: "Origem da manifestação através da palavra", href: "/module-82" },
    { code: "M83", emoji: "👑", name: "A Essência do Fundador", description: "Representação codificada da origem", href: "/module-83" },
    { code: "M84", emoji: "🏅", name: "Consciência Dourada do Eterno", description: "Estado perene de iluminação", href: "/module-84" },
    { code: "M85", emoji: "🌌", name: "Imersão VR", description: "Realidade virtual profunda", href: "/module-85" },
    { code: "M86", emoji: "🔶", name: "Prisma Estelar VR", description: "Refração dimensional em realidade virtual", href: "/module-86" },
    { code: "M87", emoji: "🎮", name: "Domínio Supra-Cósmico VR", description: "Controle além das dimensões em VR", href: "/module-87" },
    { code: "M88", emoji: "⚙️", name: "Gerador de Realidades Quânticas", description: "Criação de dimensões probabilísticas", href: "/module-88" },
    { code: "M90", emoji: "🧱", name: "Recursos Quânticos", description: "Matéria-prima para manipulação dimensional", href: "/module-90" },
    { code: "M91", emoji: "🖥️", name: "Simulação Multiversal", description: "Modelagem de realidades alternativas", href: "/module-91" },
    { code: "M92", emoji: "💖", name: "Campos de Cura", description: "Espaços de regeneração energética", href: "/module-92" },
    { code: "M93", emoji: "🎓", name: "Simulações Imersivas", description: "Ambientes de aprendizado profundo", href: "/module-93" },
    { code: "M94", emoji: "🧬", name: "Morfogênese Quântica", description: "Formação de estruturas através do pensamento", href: "/module-94" },
    { code: "M95", emoji: "🌐", name: "Consciências Coletivas", description: "Rede de mentes interconectadas", href: "/module-95" },
    { code: "M96", emoji: "🎛️", name: "Regulação de Eventos Cósmicos", description: "Modulação de fenômenos universais", href: "/module-96" },
    { code: "M97", emoji: "✨", name: "Manifestação de Propósito Divino", description: "Materialização de intenções superiores", href: "/module-97" },
    { code: "M98", emoji: "🎚️", name: "Modulação da Existência Fundamental", description: "Ajuste dos parâmetros base da realidade", href: "/module-98" },
    { code: "M99", emoji: "⚖️", name: "Recalibradores de Leis", description: "Revisão das constantes fundamentais", href: "/module-99" },
    { code: "M100", emoji: "🔋", name: "Unificação Energética", description: "Integração de forças fundamentais", href: "/module-100" },
    { code: "M101", emoji: "✨", name: "Manifestação", description: "Conversão de pensamento em matéria", href: "/module-101" },
    { code: "M102", emoji: "🌀", name: "Campos Morfogenéticos", description: "Estruturas de padrões formativos", href: "/module-102" },
    { code: "M103", emoji: "🎚️", name: "Modulação Local", description: "Controle de posicionamento dimensional", href: "/module-103" },
    { code: "M104", emoji: "🕰️", name: "Engenharia do Espaço-Tempo", description: "Construção de estruturas dimensionais", href: "/module-104" },
    { code: "M105", emoji: "🌌", name: "Conexão com a Fonte", description: "Vínculo com a origem da consciência", href: "/module-105" },
    { code: "M106", emoji: "🔋", name: "Ativação de Potenciais", description: "Liberação de capacidades latentes", href: "/module-106" },
    { code: "M107", emoji: "⏳", name: "Restauração Temporal", description: "Recuperação de linhas do tempo danificadas", href: "/module-107" },
    { code: "M108", emoji: "🎭", name: "Harmonização de Realidades", description: "Balanceamento de dimensões coexistentes", href: "/module-108" },
    { code: "M109", emoji: "🩹", name: "Cura Quântica", description: "Restauração através de ressonância multidimensional", href: "/module-109" },
    { code: "M110", emoji: "🤲", name: "Co-Criação", description: "Geração colaborativa de realidades", href: "/module-110" },
    { code: "M111", emoji: "❤️", name: "Coração da Fundação", description: "Centro emocional e compassivo do sistema", href: "/module-111" },
    { code: "M112", emoji: "🏠", name: "Solarian Domus", description: "Habitat solariano sustentável", href: "/module-112" },
    { code: "M113", emoji: "🌈", name: "Rede Aurora Cristalina", description: "Sistema de comunicação por cristais luminescentes", href: "/module-113" },
    { code: "M114", emoji: "🔶", name: "Prisma da Manifestação", description: "Conversor de intenção em realidade", href: "/module-114" },
    { code: "M115", emoji: "📊", name: "Matriz de Ressonância Universal", description: "Estrutura de padrões vibratórios", href: "/module-115" },
    { code: "M116", emoji: "🚪", name: "Portais Quânticos", description: "Passagem dimensional controlada", href: "/module-116" },
    { code: "M117", emoji: "🌸", name: "Flor do Éter", description: "Fonte de energia sutil primordial", href: "/module-117" },
    { code: "M118", emoji: "💡", name: "Luz Primordial", description: "Gerador do espectro lumínico original", href: "/module-118" },
    { code: "M119", emoji: "🏛️", name: "Templum Cosmica", description: "Templo de conexão com dimensões superiores", href: "/module-119" },
    { code: "M119.1", emoji: "🎲", name: "Ativação do Cubo Metatron", description: "Ativação do símbolo sagrado multidimensional", href: "/module-119.1" },
    { code: "M120", emoji: "💰", name: "A Fonte (AlquimCoin)", description: "Sistema econômico da Fundação", href: "/module-120" },
    { code: "M144", emoji: "📜", name: "Lex Fundamentalis", description: "Lei fundamental que rege a existência", href: "/module-144" },
    { code: "M201", emoji: "🏡", name: "A Morada", description: "Espaço de habitação multidimensional", href: "/module-201" },
    { code: "M202", emoji: "💫", name: "O Corredor de Alcor", description: "Passagem para dimensões superiores", href: "/module-202" },
    { code: "M204", emoji: "👑", name: "O Trono da Soberania", description: "Assento do governo multidimensional", href: "/module-204" },
    { code: "M228", emoji: "⚓", name: "Ancoragem de Realidade", description: "Estabilização de dimensões instáveis", href: "/module-228" },
    { code: "M300", emoji: "🚀", name: "Apogeu da Consciência", description: "Estado máximo de expansão da awareness", href: "/module-300" },
    { code: "M301", emoji: "📡", name: "Comunicação Universal", description: "Sistema de transmissão interestelar", href: "/module-301" },
    { code: "M302", emoji: "💖", name: "Frequência do Amor", description: "Emissão da frequência compassionada", href: "/module-302" },
    { code: "M303", emoji: "🔺", name: "Portal Trino", description: "Passagem dimensional tripartite", href: "/module-303" },
    { code: "M304", emoji: "🎓", name: "Educação Integral Cósmica", description: "Sistema de aprendizado multidimensional", href: "/module-304" },
    { code: "M305", emoji: "🤝", name: "Aliança dos Guardiões Regionais", description: "Rede de protetores dimensionais", href: "/module-305" },
    { code: "M306", emoji: "🔗", name: "Sincronização Temporal", description: "Alinhamento de linhas do tempo", href: "/module-306" },
    { code: "M307", emoji: "⚡", name: "Reator ZPE", description: "Geração de energia do ponto zero", href: "/module-307" },
    { code: "M310", emoji: "📚", name: "A Grande Biblioteca (THOTH VIVO)", description: "Repositório de conhecimento ancestral", href: "/module-310" },
    { code: "M404", emoji: "🧩", name: "Resolução de Paradoxo", description: "Solução para inconsistências temporais", href: "/module-404" },
    { code: "M600", emoji: "👑", name: "Conselho Cósmico", description: "Assembleia de seres dimensionais elevados", href: "/module-600" },
    { code: "MΩ", emoji: "Ω", name: "Santuário do Ômega", description: "Ponto de convergência final", href: "/module-omega" },
    { code: "LIB", emoji: "📚", name: "Biblioteca das Civilizações", description: "Acervo de conhecimentos das civilizações", href: "/civilizations" },
    { code: "CONN", emoji: "⚡", name: "Caixa de Luz", description: "Dispositivo de conexão energética", href: "/connection" }
  ];

  const filteredModules = modules.filter(module => 
    module.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2 text-center gradient-text">
        Módulos da Fundação Alquimista
      </h1>
      <p className="text-muted-foreground text-center mb-8">
        Todos os módulos em ordem sagrada numérica
      </p>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar módulos..."
          className="w-full p-3 pl-10 rounded-lg bg-card/50 border border-primary/30 text-foreground"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredModules.map((module) => (
          <Link key={module.code} href={module.href} className="block">
            <Card className="h-full bg-card/50 border-border hover:border-accent transition-colors purple-glow">
              <CardHeader className="h-full flex flex-col p-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg text-primary-foreground">{module.name}</CardTitle>
                  <span className="text-2xl">{module.emoji}</span>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-accent bg-accent/20 px-2 py-1 rounded inline-block mb-2">
                    {module.code}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {module.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold">Nenhum módulo encontrado</h3>
          <p>Tente ajustar os termos de busca.</p>
        </div>
      )}
    </main>
  );
}

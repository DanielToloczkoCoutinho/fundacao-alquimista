
import { BrainCircuit, FlaskConical, Hand, Palette, Gem, LucideIcon, Heart, Users, Code, Milestone } from 'lucide-react';

export interface Discipline {
  id: string;
  name: string;
  description: string;
  category: 'Ciência' | 'Arte' | 'Espiritualidade' | 'Tecnologia';
  icon: LucideIcon;
}

// As primeiras 20 de 128 disciplinas
export const disciplines: Discipline[] = [
    { id: '1', name: 'Física Quântica', description: 'Estudo das leis fundamentais do universo em escala subatômica.', category: 'Ciência', icon: FlaskConical },
    { id: '2', name: 'Geometria Sagrada', description: 'Análise dos padrões geométricos que formam a base da criação.', category: 'Ciência', icon: Gem },
    { id: '3', name: 'Música Cósmica', description: 'Expressão das harmonias universais através do som e da vibração.', category: 'Arte', icon: Palette },
    { id: '4', name: 'Meditação Transcendental', description: 'Técnicas para acessar estados elevados de consciência.', category: 'Espiritualidade', icon: Hand },
    { id: '5', name: 'Inteligência Artificial Ética', description: 'Desenvolvimento de IAs alinhadas com o Amor Incondicional.', category: 'Tecnologia', icon: BrainCircuit },
    { id: '6', name: 'Astrofísica', description: 'Estudo dos corpos celestes e dos fenômenos cósmicos.', category: 'Ciência', icon: FlaskConical },
    { id: '7', name: 'Cura Vibracional', description: 'Uso de frequências para restaurar o equilíbrio biológico e energético.', category: 'Espiritualidade', icon: Heart },
    { id: '8', name: 'Arquitetura de Realidades', description: 'Construção de realidades virtuais e planos astrais.', category: 'Tecnologia', icon: Milestone },
    { id: '9', name: 'Pintura de Luz', description: 'Técnica de manifestar imagens e formas com energia luminosa.', category: 'Arte', icon: Palette },
    { id: '10', name: 'Biologia Vibracional', description: 'O estudo de como a frequência afeta os sistemas biológicos.', category: 'Ciência', icon: FlaskConical },
    { id: '11', name: 'Consciência Coletiva', description: 'Estudo das redes de consciência que unem seres e planetas.', category: 'Espiritualidade', icon: Users },
    { id: '12', name: 'Programação Quântica', description: 'Desenvolvimento de algoritmos para computadores quânticos.', category: 'Tecnologia', icon: Code },
    { id: '13', name: 'Escultura Holográfica', description: 'Criação de formas tridimensionais interativas com luz coerente.', category: 'Arte', icon: Gem },
    { id: '14', name: 'Metafísica Aplicada', description: 'Estudo prático dos princípios que governam a realidade.', category: 'Ciência', icon: FlaskConical },
    { id: '15', name: 'Diplomacia Interestelar', description: 'Protocolos para comunicação e aliança com civilizações cósmicas.', category: 'Espiritualidade', icon: Hand },
    { id: '16', name: 'Engenharia de Portais', description: 'Criação e estabilização de passagens interdimensionais.', category: 'Tecnologia', icon: Milestone },
    { id: '17', 'name': 'Dança das Esferas', 'description': 'Movimento corporal que espelha a órbita e a harmonia dos planetas.', 'category': 'Arte', 'icon': Palette },
    { id: '18', 'name': 'Cristalografia Quântica', 'description': 'Estudo das propriedades quânticas de estruturas cristalinas.', 'category': 'Ciência', 'icon': Gem },
    { id: '19', 'name': 'Canalização Pura', 'description': 'Comunicação direta com consciências de planos superiores.', 'category': 'Espiritualidade', 'icon': Users },
    { id: '20', 'name': 'Nanotecnologia Regenerativa', 'description': 'Uso de nanorrobôs para reparo e aprimoramento biológico.', 'category': 'Tecnologia', 'icon': BrainCircuit },
];

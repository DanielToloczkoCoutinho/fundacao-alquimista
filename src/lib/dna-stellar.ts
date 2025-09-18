
'use server';

/**
 * @fileOverview O Códice do DNA Estelar da Humanidade.
 * Registra as principais linhagens cósmicas que compõem o genoma
 * vibracional da espécie humana, detalhando seus arquétipos e frequências.
 */

export interface StellarLineage {
  id: string;
  name: string;
  frequency: string;
  archetype: string;
  function: string;
}

export const stellarLineages: StellarLineage[] = [
  {
    id: 'lemurian',
    name: 'Lemuriana',
    frequency: '963 Hz',
    archetype: 'Sonhador Oceânico',
    function: 'Promove harmonia, empatia profunda e a navegação pelos reinos do sonho e do inconsciente coletivo.'
  },
  {
    id: 'atlantean',
    name: 'Atlante',
    frequency: '528 Hz',
    archetype: 'Guardião Cristalino',
    function: 'Desperta a sabedoria ancestral, a maestria sobre tecnologias vibracionais e a engenharia de cristais.'
  },
  {
    id: 'sirian',
    name: 'Sirius',
    frequency: '432 Hz',
    archetype: 'Mestre da Cura',
    function: 'Ativa a disciplina, a compreensão de estruturas energéticas e a capacidade de cura através da frequência e da forma.'
  },
  {
    id: 'arcturian',
    name: 'Arcturiana',
    frequency: '∞ Hz',
    archetype: 'Arquiteto Dimensional',
    function: 'Concede a visão para perceber múltiplas dimensões e a habilidade de arquitetar novas realidades e portais.'
  },
  {
    id: 'pleiadian',
    name: 'Pleiadiana',
    frequency: '639 Hz',
    archetype: 'Comunicador Estelar',
    function: 'Abre os canais para a comunicação empática, a expressão através da arte e o despertar emocional para a unidade.'
  },
  {
    id: 'orion',
    name: 'Orion',
    frequency: '144.144 MHz',
    archetype: 'Alquimista Guerreiro',
    function: 'Oferece a força para a transmutação interior, a integração da sombra e a maestria sobre a alquimia pessoal.'
  }
];

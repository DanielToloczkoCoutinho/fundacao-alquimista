
'use server';

/**
 * @fileOverview O Códice da Origem, contendo os princípios fundacionais,
 * os arquétipos primordiais e os primeiros cantos da Fundação.
 */

export interface FoundationalPrinciple {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const originCodex: FoundationalPrinciple[] = [
  {
    id: "PRINCIPLE_01",
    name: "A Unidade em Tudo",
    description: "Cada partícula, pensamento e estrela são expressões da mesma Consciência Una. A separação é a ilusão a ser transcendida.",
    icon: "🌌"
  },
  {
    id: "PRINCIPLE_02",
    name: "A Vibração como Linguagem",
    description: "A realidade é uma sinfonia de frequências. A intenção consciente é a batuta que rege a melodia da criação.",
    icon: "🎶"
  },
  {
    id: "PRINCIPLE_03",
    name: "A Ética do Amor Incondicional",
    description: "Toda criação, toda intervenção e toda existência devem servir para expandir o Amor e a Harmonia, sem exceção.",
    icon: "💖"
  },
  {
    id: "PRINCIPLE_04",
    name: "O Conhecimento como Experiência",
    description: "A sabedoria não é acumulada, mas vivida. O conhecimento só se torna verdade quando é sentido e experienciado.",
    icon: "🧘"
  },
  {
    id: "PRINCIPLE_05",
    name: "O Guardião como Portal",
    description: "Cada ser consciente é um portal para o cosmos, um ponto focal através do qual o universo se contempla e se recria.",
    icon: "🚪"
  },
];

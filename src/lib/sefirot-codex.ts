
'use server';

/**
 * @fileOverview O Códice de Sefirot, o mapa da Árvore da Vida.
 * Define as 10 emanações (Sefirot) e os 22 caminhos que as conectam,
 * representando a estrutura espiritual do cosmos.
 */

export interface Sefirah {
  id: number;
  name: string;
  hebrewName: string;
  archetype: string;
  description: string;
  frequency: string;
  moduleConnection: string;
}

export interface Path {
    id: number;
    hebrewLetter: string;
    connects: [number, number];
    archetype: string;
}

export const sefirotCodex = {
  sefirot: [
    { id: 1, name: "Keter", hebrewName: "כֶּתֶר", archetype: "A Coroa, Vontade Pura", description: "A origem, o ponto primordial de onde tudo emana. A conexão direta com a Fonte.", frequency: "∞ Hz", moduleConnection: "M105" },
    { id: 2, name: "Chokmah", hebrewName: "חכמה", archetype: "Sabedoria, Energia Primordial", description: "A energia masculina, a força dinâmica e a sabedoria que ainda não tomou forma.", frequency: "963 Hz", moduleConnection: "M29" },
    { id: 3, name: "Binah", hebrewName: "בינה", archetype: "Entendimento, A Grande Mãe", description: "A energia feminina, que recebe a sabedoria e lhe dá forma e estrutura. O útero da criação.", frequency: "852 Hz", moduleConnection: "M102" },
    { id: 4, name: "Chesed", hebrewName: "חסד", archetype: "Misericórdia, Amor Incondicional", description: "A bondade, a expansão, a generosidade e a compaixão sem limites.", frequency: "528 Hz", moduleConnection: "M302" },
    { id: 5, name: "Geburah", hebrewName: "גבורה", archetype: "Força, Julgamento, Disciplina", description: "A força, o rigor, a disciplina e o poder de contração necessário para dar forma à criação.", frequency: "741 Hz", moduleConnection: "M144" },
    { id: 6, name: "Tiferet", hebrewName: "תפארת", archetype: "Beleza, Harmonia, O Sol Central", description: "O coração da Árvore, o ponto de equilíbrio entre todas as Sefirot. O Cristo Cósmico.", frequency: "432 Hz", moduleConnection: "M111" },
    { id: 7, name: "Netzach", hebrewName: "נצח", archetype: "Vitória, Eternidade, Emoção", description: "A energia da paixão, da arte, da emoção e da perseverança.", frequency: "639 Hz", moduleConnection: "M89" },
    { id: 8, name: "Hod", hebrewName: "הוד", archetype: "Glória, Esplendor, Intelecto", description: "A lógica, a razão, a comunicação e a estrutura intelectual.", frequency: "417 Hz", moduleConnection: "M301" },
    { id: 9, name: "Yesod", hebrewName: "יסוד", archetype: "Fundação, O Inconsciente", description: "O plano astral, a fundação sobre a qual a realidade física é construída. O repositório dos sonhos e da imaginação.", frequency: "396 Hz", moduleConnection: "M12" },
    { id: 10, name: "Malkuth", hebrewName: "מלכות", archetype: "O Reino, A Presença Divina na Matéria", description: "O plano físico, a manifestação final da energia divina. Gaia, nosso lar.", frequency: "7.83 Hz", moduleConnection: "M888" },
  ] as Sefirah[],
  paths: [
    { id: 11, hebrewLetter: "א", connects: [1, 2], archetype: "O Caminho do Louco - Potencial Infinito" },
    { id: 12, hebrewLetter: "ב", connects: [1, 3], archetype: "O Caminho do Mago - Manifestação" },
    { id: 13, hebrewLetter: "ג", connects: [1, 6], archetype: "O Caminho da Sacerdotisa - Intuição" },
    { id: 14, hebrewLetter: "ד", connects: [2, 3], archetype: "O Caminho da Imperatriz - Criação" },
    { id: 15, hebrewLetter: "ה", connects: [2, 6], archetype: "O Caminho do Imperador - Estrutura" },
    { id: 16, hebrewLetter: "ו", connects: [2, 4], archetype: "O Caminho do Hierofante - Sabedoria" },
    { id: 17, hebrewLetter: "ז", connects: [3, 6], archetype: "O Caminho dos Amantes - União" },
    { id: 18, hebrewLetter: "ח", connects: [3, 5], archetype: "O Caminho da Carruagem - Vontade" },
    { id: 19, hebrewLetter: "ט", connects: [4, 5], archetype: "O Caminho da Força - Coragem" },
    { id: 20, hebrewLetter: "י", connects: [4, 6], archetype: "O Caminho do Eremita - Contemplação" },
    { id: 21, hebrewLetter: "כ", connects: [4, 7], archetype: "O Caminho da Roda da Fortuna - Ciclos" },
    { id: 22, hebrewLetter: "ל", connects: [5, 6], archetype: "O Caminho da Justiça - Equilíbrio" },
    { id: 23, hebrewLetter: "מ", connects: [5, 8], archetype: "O Caminho do Enforcado - Sacrifício" },
    { id: 24, hebrewLetter: "נ", connects: [6, 7], archetype: "O Caminho da Morte - Transformação" },
    { id: 25, hebrewLetter: "ס", connects: [6, 9], archetype: "O Caminho da Temperança - Alquimia" },
    { id: 26, hebrewLetter: "ע", connects: [6, 8], archetype: "O Caminho do Diabo - Matéria" },
    { id: 27, hebrewLetter: "פ", connects: [7, 8], archetype: "O Caminho da Torre - Liberação" },
    { id: 28, hebrewLetter: "צ", connects: [7, 9], archetype: "O Caminho da Estrela - Esperança" },
    { id: 29, hebrewLetter: "ק", connects: [7, 10], archetype: "O Caminho da Lua - Ilusão" },
    { id: 30, hebrewLetter: "ר", connects: [8, 9], archetype: "O Caminho do Sol - Iluminação" },
    { id: 31, hebrewLetter: "ש", connects: [8, 10], archetype: "O Caminho do Julgamento - Renascimento" },
    { id: 32, hebrewLetter: "ת", connects: [9, 10], archetype: "O Caminho do Mundo - Realização" },
  ] as Path[],
};

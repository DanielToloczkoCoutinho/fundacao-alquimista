
'use server';

export const gaiaModuleCodex = {
  chakras: [
    { name: 'Monte Shasta', role: 'Raiz', coordinates: '41.409° N, 122.194° W', frequency: '396 Hz', archetype: 'Segurança e Força Ancestral' },
    { name: 'Lago Titicaca', role: 'Sacral', coordinates: '15.765° S, 69.535° W', frequency: '417 Hz', archetype: 'Criatividade e Fluxo Emocional' },
    { name: 'Uluru', role: 'Plexo Solar', coordinates: '25.344° S, 131.036° E', frequency: '528 Hz', archetype: 'Poder Pessoal e Vitalidade' },
    { name: 'Glastonbury & Shaftesbury', role: 'Coração', coordinates: '51.145° N, 2.714° W', frequency: '639 Hz', archetype: 'Amor Universal e Conexão' },
    { name: 'Pirâmides de Gizé', role: 'Garganta', coordinates: '29.979° N, 31.134° E', frequency: '741 Hz', archetype: 'Comunicação Cósmica e Expressão' },
    { name: 'Kuh-e Malek Siah', role: 'Terceiro Olho', coordinates: '30.000° N, 60.000° E', frequency: '852 Hz', archetype: 'Intuição e Visão Espiritual' },
    { name: 'Monte Kailash', role: 'Coroa', coordinates: '31.067° N, 81.311° E', frequency: '963 Hz', archetype: 'Iluminação e Transcendência' }
  ],
  leyLines: [
    { name: 'Linha Solar', connects: ['Uluru', 'Gizé'], frequency: '528 Hz' },
    { name: 'Linha do Dragão', connects: ['Stonehenge', 'Glastonbury'], frequency: '963 Hz' },
    { name: 'Grande Diagonal Global', connects: ['Gizé', 'Machu Picchu'], frequency: '∞ Hz' }
  ],
  monuments: [
    // Portais do Sul ao Norte
    { name: 'Antártida - Portal do Silêncio', location: 'Antártida', function: 'Recalibração dimensional e pureza vibracional.', frequency: '174 Hz', archetype: 'Ponto Zero' },
    { name: 'Uluru', location: 'Austrália (25.3444° S, 131.0369° E)', function: 'Portal do Plexo Solar, centro de vitalidade e força ancestral.', frequency: '528 Hz', archetype: 'Guardião da Terra' },
    { name: 'Machu Picchu', location: 'Peru (13.1631° S, 72.5450° W)', function: 'Portal Solar Inca para transmutação e ascensão.', frequency: '528 Hz', archetype: 'Altar Solar' },
    { name: 'Monte Shasta', location: 'EUA (41.409° N, 122.194° W)', function: 'Portal Raiz, conectando com a origem telúrica e Lemuriana.', frequency: '396 Hz', archetype: 'Força Ancestral' },
    { name: 'Stonehenge', location: 'Inglaterra (51.1789° N, 1.8262° W)', function: 'Portal do Coração, alinhamento solar/lunar e observatório cósmico.', frequency: '432 Hz', archetype: 'Observatório Cósmico' },
    { name: 'Pirâmides de Gizé', location: 'Egito (29.9792° N, 31.1342° E)', function: 'Portal da Garganta, para comunicação cósmica e ascensão.', frequency: '741 Hz', archetype: 'Códice de Ascensão' },
    { name: 'Monte Kailash', location: 'Tibete (31.067° N, 81.311° E)', function: 'Portal da Coroa para iluminação e transcendência espiritual.', frequency: '963 Hz', archetype: 'Ponte para o Cosmos' },
    { name: 'Pólo Norte Ártico - Portal do Éter', location: 'Ártico', function: 'Dissolução dimensional e acesso ao plano infinito.', frequency: '∞ Hz', archetype: 'Limiar do Vazio' },

    // Portais do Leste a Oeste
    { name: 'Monte Fuji', location: 'Japão', function: 'Portal da Introspecção, para silêncio e refinamento espiritual.', frequency: '852 Hz', archetype: 'Santuário da Mente' },
    { name: 'Konark Sun Temple', location: 'Konark, Odisha, Índia (19.89°N, 86.10°E)', function: 'Templo solar em forma de carruagem (Origem: ~1250 d.C.).', frequency: '888Hz', archetype: 'Iluminação' },
    { name: 'Rila', location: 'Bulgária', function: 'Portal da Sabedoria, para transmissão espiritual e cura vibracional.', frequency: '741 Hz', archetype: 'Fonte da Sabedoria Branca' },
    { name: 'Teotihuacan', location: 'México', function: 'Portal Quetzal para ascensão e conexão com civilizações estelares.', frequency: '852 Hz', archetype: 'Calçada dos Deuses' },
    { name: 'Ilha de Páscoa', location: 'Chile', function: 'Portal Moai, guardião da memória planetária e vigilância dimensional.', frequency: '639 Hz', archetype: 'Vigias Silenciosos' },
    { name: 'Serra do Roncador', location: 'Brasil', function: 'Portal Xamânico para comunicação interdimensional e cura ancestral.', frequency: '432 Hz', archetype: 'Coração da Terra' },
    { name: 'Monte Sinai', location: 'Egito', function: 'Portal da Aliança, para revelação da Lei Cósmica e da ética universal.', frequency: '741 Hz', archetype: 'Altar da Lei' },
    { name: 'Pirâmides da Bósnia', location: 'Visoko, Bósnia', function: 'Portal de Regeneração, para purificação celular e cura profunda.', frequency: '285 Hz', archetype: 'Fonte da Cura' },

    // Templos da Índia (com localizações e origens precisas)
    { name: 'Templo Dourado (Harmandir Sahib)', location: 'Amritsar, Punjab, Índia', function: 'Centro de luz e pureza Sikh, irradiando paz e serviço.', frequency: '432 Hz', archetype: 'Unidade e Serviço' },
    { name: 'Tirupati Balaji Temple', location: 'Andhra Pradesh, Índia (13.68°N, 79.42°E)', function: 'Vórtice de devoção e abundância universal (Origem: ~300 a.C.).', frequency: '528 Hz', archetype: 'Abundância Divina' },
    { name: 'Meenakshi Amman Temple', location: 'Madurai, Tamil Nadu, Índia (9.92°N, 78.12°E)', function: 'Portal da Deusa e geometria cósmica (Origem: ~6º século d.C.).', frequency: '963Hz', archetype: 'Criação' },
    { name: 'Jagannath Temple', location: 'Puri, Odisha, Índia (19.81°N, 85.83°E)', function: 'Portal de Krishna como Senhor do Universo (Origem: ~1100 a.C.).', frequency: '432Hz', archetype: 'Unidade' },
    { name: 'Mahakaleshwar Temple', location: 'Ujjain, MP, Índia', function: 'Jyotirlinga de Shiva e portal do tempo, regendo os ciclos de criação e dissolução.', frequency: '144 Hz', archetype: 'Ciclos do Tempo' },
    { name: 'Badrinath Temple', location: 'Uttarakhand, Índia (30.74°N, 79.48°E)', function: 'Portal Vishnu auto-manifestado (Origem: ~9º século d.C.).', frequency: '528Hz', archetype: 'Preservação' },
    { name: 'Kedarnath Temple', location: 'Uttarakhand, Índia (30.73°N, 79.07°E)', function: 'Guardião de Shiva nas montanhas (Origem: ~8º século d.C.).', frequency: '144Hz', archetype: 'Transmutação' },
    { name: 'Ramanathaswamy Temple', location: 'Rameswaram, Tamil Nadu, Índia (9.37°N, 79.31°E)', function: 'Portal de Shiva e ponte vibracional (Origem: ~12º século d.C.).', frequency: '432Hz', archetype: 'Conexão' },
    { name: 'Khajuraho Temples', location: 'Madhya Pradesh, Índia (24.85°N, 79.93°E)', function: 'Arte cerimonial e união espiritual (Origem: ~950–1050 d.C.).', frequency: '639Hz', archetype: 'União' },
    { name: 'Somnath Temple', location: 'Gujarat, Índia (20.89°N, 70.40°E)', function: 'Primeiro dos Jyotirlingas de Shiva (Origem: ~500 a.C.).', frequency: '144Hz', archetype: 'Origem' },
    { name: 'Padmanabhaswamy Temple', location: 'Kerala, Índia (8.48°N, 76.95°E)', function: 'Vishnu em repouso cósmico (Origem: ~8º século d.C.).', frequency: '528Hz', archetype: 'Potencial' },
    { name: 'Dilwara Jain Temples', location: 'Mount Abu, Rajasthan, Índia (24.59°N, 72.70°E)', function: 'Pureza geométrica e ascensão jainista (Origem: ~11º–13º século d.C.).', frequency: '963Hz', archetype: 'Pureza' },
    { name: 'Vaishno Devi Temple', location: 'Jammu, Índia (33.03°N, 74.95°E)', function: 'Portal da Mãe Divina (Origem: ~1º milênio d.C.).', frequency: '639Hz', archetype: 'Nutrição' },
  ],
  layers: [
    { name: 'Núcleo Interno', function: 'Pulso magnético e alquimia gravitacional' },
    { name: 'Crosta', function: 'Interface vibracional e memória geológica' },
    { name: 'Atmosfera', function: 'Proteção e comunicação' },
    { name: 'Camada de Ozônio', function: 'Filtro cerimonial e escudo de radiação' }
  ],
  oceans: [
    { name: 'Atlântico', role: 'Canal de memória vibracional' },
    { name: 'Pacífico', role: 'Espelho de expansão e profundidade' },
    { name: 'Índico', role: 'Vórtice de cura e regeneração' }
  ]
};

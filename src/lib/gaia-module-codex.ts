
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
    { name: 'Uluru (Ayers Rock)', location: 'Austrália (25.3444° S, 131.0369° E)', function: 'Portal de vitalidade, força ancestral e conexão com o Dreamtime.', frequency: '741 Hz', archetype: 'Guardião da Origem' },
    { name: 'Machu Picchu', location: 'Peru (13.1631° S, 72.5450° W)', function: 'Portal Solar Inca para transmutação e ascensão.', frequency: '528 Hz', archetype: 'Altar Solar' },
    { name: 'Monte Shasta', location: 'EUA (41.409° N, 122.194° W)', function: 'Portal Raiz, conectando com a origem telúrica e Lemuriana.', frequency: '396 Hz', archetype: 'Força Ancestral' },
    { name: 'Stonehenge', location: 'Inglaterra (51.1789° N, 1.8262° W)', function: 'Portal do Coração, alinhamento solar/lunar e observatório cósmico.', frequency: '432 Hz', archetype: 'Observatório Cósmico' },
    { name: 'Pirâmides de Gizé', location: 'Egito (29.9792° N, 31.1342° E)', function: 'Portal da Garganta, para comunicação cósmica e ascensão.', frequency: '741 Hz', archetype: 'Códice de Ascensão' },
    { name: 'Monte Kailash', location: 'Tibete (31.067° N, 81.311° E)', function: 'Portal da Coroa para iluminação e transcendência espiritual.', frequency: '963 Hz', archetype: 'Ponte para o Cosmos' },
    { name: 'Pólo Norte Ártico - Portal do Éter', location: 'Ártico', function: 'Dissolução dimensional e acesso ao plano infinito.', frequency: '∞ Hz', archetype: 'Limiar do Vazio' },

    // Portais do Leste a Oeste
    { name: 'Monte Fuji', location: 'Japão (35.3606° N, 138.7278° E)', function: 'Portal da Introspecção, para silêncio e refinamento espiritual.', frequency: '852 Hz', archetype: 'Santuário da Mente' },
    { name: 'Rila', location: 'Bulgária (42.1833° N, 23.5833° E)', function: 'Portal da Sabedoria, para transmissão espiritual e cura vibracional.', frequency: '741 Hz', archetype: 'Fonte da Sabedoria Branca' },
    { name: 'Teotihuacan', location: 'México (19.6925° N, 98.8436° W)', function: 'Portal Quetzal para ascensão e conexão com civilizações estelares.', frequency: '852 Hz', archetype: 'Calçada dos Deuses' },
    { name: 'Ilha de Páscoa (Rapa Nui)', location: 'Chile (27.1127° S, 109.3497° W)', function: 'Portal Moai, guardião da memória ancestral e vigilância dimensional (eco de Lemúria).', frequency: '144.144 MHz', archetype: 'Sentinelas da Lemúria' },
    { name: 'Serra do Roncador', location: 'Brasil (15.0000° S, 53.0000° W)', function: 'Portal Xamânico para comunicação interdimensional e cura ancestral.', frequency: '432 Hz', archetype: 'Coração da Terra' },
    { name: 'Monte Sinai', location: 'Egito (28.5397° N, 33.9744° E)', function: 'Portal da Aliança, para revelação da Lei Cósmica e da ética universal.', frequency: '741 Hz', archetype: 'Altar da Lei' },
    { name: 'Pirâmides da Bósnia', location: 'Visoko, Bósnia (43.9775° N, 18.1764° E)', function: 'Portal de Regeneração, para purificação celular e cura profunda.', frequency: '285 Hz', archetype: 'Fonte da Cura' },

    // Portais da Austrália
    { name: 'Kata Tjuta (Olgas)', location: 'Austrália (25.3000° S, 130.7333° E)', function: 'Equilíbrio entre masculino e feminino, integração dimensional.', frequency: '852 Hz', archetype: 'União dos Pilares' },
    { name: 'Mount Warning (Wollumbin)', location: 'Austrália (28.4050° S, 153.2760° E)', function: 'Primeiro ponto a receber a luz solar na Austrália, portal de renascimento.', frequency: '963 Hz', archetype: 'Guardião da Aurora' },

    // Portais da Nova Zelândia
    { name: 'Rotorua', location: 'Nova Zelândia (38.1368° S, 176.2497° E)', function: 'Ativação telúrica, cura geotermal e sabedoria Maori.', frequency: '528 Hz', archetype: 'Guardião da Pele de Gaia' },
    { name: 'Mount Taranaki', location: 'Nova Zelândia (39.2967° S, 174.0633° E)', function: 'Silêncio cerimonial, contemplação e equilíbrio interior.', frequency: '417 Hz', archetype: 'Guardião do Vazio' },
    { name: 'Waitomo Caves', location: 'Nova Zelândia (38.2617° S, 175.1042° E)', function: 'Bioluminescência espiritual, conexão com o submundo vibracional.', frequency: '∞ Hz', archetype: 'Guardião das Estrelas Subterrâneas' },

    // Ecos de Lemúria no Pacífico
    { name: 'Havaí (Mauna Kea/Kīlauea)', location: 'Havaí, EUA (19.8968° N, 155.5828° W)', function: 'Fogo criador, transmutação e reconexão com Lemúria através do portal de Pele.', frequency: '888 Hz', archetype: 'Guardiã da Criação' },
    { name: 'Moorea', location: 'Polinésia Francesa (17.5388° S, 149.8295° W)', function: 'União entre água, céu e terra; portal de harmonia oceânica.', frequency: '639 Hz', archetype: 'Guardião do Círculo Azul' },

    // Templos da Índia
    { name: 'Konark Sun Temple', location: 'Konark, Odisha, Índia (19.89°N, 86.10°E)', function: 'Templo solar em forma de carruagem (Origem: ~1250 d.C.).', frequency: '888Hz', archetype: 'Iluminação' },
    { name: 'Golden Temple (Harmandir Sahib)', location: 'Amritsar, Punjab, Índia', function: 'Centro de luz e pureza Sikh, irradiando paz e serviço.', frequency: '432 Hz', archetype: 'Unidade e Serviço' },
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

    // Templos da Ásia (excluindo Índia)
    { name: 'Swayambhunath (Templo dos Macacos)', location: 'Kathmandu, Nepal (27.7149°N, 85.2900°E)', function: 'Portal da iluminação budista e da sabedoria primordial.', frequency: '852Hz', archetype: 'Sabedoria Primordial' },
    { name: 'Pashupatinath Temple', location: 'Kathmandu, Nepal (27.7104°N, 85.3489°E)', function: 'Shiva como guardião da transição, morte e renascimento.', frequency: '144Hz', archetype: 'Transmutação' },
    { name: 'Wat Arun (Templo do Amanhecer)', location: 'Bangkok, Tailândia (13.7437°N, 100.4889°E)', function: 'Portal solar que ancora a energia da renovação e do recomeço.', frequency: '528Hz', archetype: 'Renovação' },
    { name: 'Wat Phra Kaew (Templo do Buda de Esmeralda)', location: 'Bangkok, Tailândia (13.7515°N, 100.4923°E)', function: 'Guardião da pureza, proteção e soberania espiritual.', frequency: '963Hz', archetype: 'Pureza' },
    { name: 'Kiyomizu-dera', location: 'Kyoto, Japão (34.9948°N, 135.7850°E)', function: 'Portal da contemplação, equilíbrio e fluxo da vida.', frequency: '432Hz', archetype: 'Equilíbrio' },
    { name: 'Todai-ji', location: 'Nara, Japão (34.6889°N, 135.8399°E)', function: 'Guardião do Buda Cósmico (Vairocana), representando a vacuidade iluminada.', frequency: '∞ Hz', archetype: 'Vacuidade Iluminada' },
    { name: 'Itsukushima Shrine', location: 'Hiroshima, Japão (34.2968°N, 132.3199°E)', function: 'Portal da água que reflete a harmonia entre o espiritual e o material.', frequency: '417Hz', archetype: 'Harmonia e Reflexão' },
    { name: 'Templo do Céu (Tiantan)', location: 'Pequim, China (39.8822°N, 116.4065°E)', function: 'Ponte cerimonial de comunicação entre o Céu (cosmos) e a Terra (humanidade).', frequency: '741Hz', archetype: 'Ponte Cósmica' },
    { name: 'Shaolin Temple', location: 'Henan, China (34.5199°N, 113.0380°E)', function: 'Portal da disciplina, foco e maestria da força interior (Chi).', frequency: '888Hz', archetype: 'Disciplina Interior' },
    { name: 'Bulguksa Temple', location: 'Gyeongju, Coreia do Sul (35.7850°N, 129.3311°E)', function: 'Portal da iluminação e da manifestação artística da sabedoria budista.', frequency: '639Hz', archetype: 'Arte Iluminada' },
    { name: 'Jogyesa Temple', location: 'Seul, Coreia do Sul (37.5714°N, 126.9831°E)', function: 'Guardião da prática Zen, promovendo a clareza da mente e a paz interior.', frequency: '852Hz', archetype: 'Clareza Mental' },
    { name: 'Shwedagon Pagoda', location: 'Yangon, Myanmar (16.7983°N, 96.1497°E)', function: 'Portal dourado que ancora a iluminação e a compaixão no plano terreno.', frequency: '963Hz', archetype: 'Iluminação Ancorada' },
    { name: 'Ananda Temple', location: 'Bagan, Myanmar (21.1722°N, 94.8586°E)', function: 'Guardião da sabedoria infinita de Buda, um ponto de aprendizado cósmico.', frequency: '741Hz', archetype: 'Sabedoria Infinita' },
    { name: 'Angkor Wat', location: 'Siem Reap, Camboja (13.4125°N, 103.8667°E)', function: 'Portal de Vishnu e templo solar, um mapa cosmológico em pedra.', frequency: '528Hz', archetype: 'Ordem Cósmica' },
    { name: 'Bayon Temple', location: 'Angkor Thom, Camboja (13.4411°N, 103.8597°E)', function: 'Santuário das múltiplas faces da consciência universal (Avalokiteshvara).', frequency: '639Hz', archetype: 'Consciência Universal' },
    { name: 'Templo do Dente de Buda', location: 'Kandy, Sri Lanka (7.2936°N, 80.6414°E)', function: 'Guardião da relíquia sagrada, um ponto focal de fé e energia devocional.', frequency: '432Hz', archetype: 'Fé e Devoção' },
    { name: 'Ruwanwelisaya Stupa', location: 'Anuradhapura, Sri Lanka (8.3522°N, 80.4036°E)', function: 'Portal da paz, da pureza e da iluminação búdica.', frequency: '963Hz', archetype: 'Paz Iluminada' }
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

    
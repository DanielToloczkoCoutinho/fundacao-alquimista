
'use server';

export const gaiaModuleCodex = {
  chakras: [
    { name: 'Monte Shasta', role: 'Raiz', coordinates: '41.409° N, 122.194° W', frequency: '396 Hz', archetype: 'Segurança e Força Ancestral' },
    { name: 'Lago Titicaca', role: 'Sacral', coordinates: '15.765° S, 69.535° W', frequency: '417 Hz', archetype: 'Criatividade e Fluxo Emocional' },
    { name: 'Uluru', role: 'Plexo Solar', coordinates: '25.344° S, 131.036° E', frequency: '741 Hz', archetype: 'Poder Pessoal e Vitalidade' },
    { name: 'Glastonbury & Shaftesbury', role: 'Coração', coordinates: '51.145° N, 2.714° W', frequency: '639 Hz', archetype: 'Amor Universal e Conexão' },
    { name: 'Pirâmides de Gizé', role: 'Garganta', coordinates: '29.979° N, 31.134° E', frequency: '528 Hz', archetype: 'Comunicação Cósmica e Expressão' },
    { name: 'Kuh-e Malek Siah', role: 'Terceiro Olho', coordinates: '30.000° N, 60.000° E', frequency: '852 Hz', archetype: 'Intuição e Visão Espiritual' },
    { name: 'Monte Kailash', role: 'Coroa', coordinates: '31.067° N, 81.311° E', frequency: '963 Hz', archetype: 'Iluminação e Transcendência' }
  ],
  leyLines: [
    { name: 'Linha Solar', connects: ['Uluru', 'Gizé'], frequency: '528 Hz' },
    { name: 'Linha do Dragão', connects: ['Stonehenge', 'Glastonbury', 'Monte Shasta', 'Gizé', 'Kilimanjaro'], frequency: '963 Hz' },
    { name: 'Grande Diagonal Global', connects: ['Gizé', 'Machu Picchu'], frequency: '∞ Hz' },
    { name: 'Linha do Nilo', connects: ['Gizé', 'Lago Vitória'], frequency: '432 Hz' },
    { name: 'Linha de Axum', connects: ['Etiópia', 'Mar Vermelho'], frequency: '741 Hz' },
    { name: 'Linha do Despertar Solar', connects: ['Cabo da Boa Esperança', 'Kilimanjaro'], frequency: '888 Hz' },
    { name: 'Linha Dogon', connects: ['Mali', 'Sahel', 'Níger'], frequency: '999 Hz'}
  ],
  monuments: [
    // Portais Globais
    { name: 'Antártida - Portal do Silêncio', location: 'Antártida', function: 'Recalibração dimensional e pureza vibracional.', frequency: '174 Hz', archetype: 'Ponto Zero' },
    { name: 'Pólo Norte Ártico - Portal do Éter', location: 'Ártico', function: 'Dissolução dimensional e acesso ao plano infinito.', frequency: '∞ Hz', archetype: 'Limiar do Vazio' },

    // Oceania e Lemúria
    { name: 'Uluru (Ayers Rock)', location: 'Austrália', coordinates: '25.3444° S, 131.0369° E', function: 'Portal de vitalidade, força ancestral e conexão com o Dreamtime.', frequency: '741 Hz', archetype: 'Plexo Solar de Gaia' },
    { name: 'Kata Tjuta (Olgas)', location: 'Austrália', coordinates: '25.3000° S, 130.7333° E', function: 'Equilíbrio entre masculino e feminino, integração dimensional.', frequency: '852 Hz', archetype: 'União dos Pilares' },
    { name: 'Mount Warning (Wollumbin)', location: 'Austrália', coordinates: '28.4050° S, 153.2760° E', function: 'Primeiro ponto a receber a luz solar, portal de renascimento.', frequency: '963 Hz', archetype: 'Guardião da Aurora' },
    { name: 'Grampians (Gariwerd)', location: 'Austrália', coordinates: '37.2333° S, 142.5167° E', function: 'Arte rupestre e sabedoria ancestral.', frequency: '528 Hz', archetype: 'Guardião da Memória' },
    { name: 'Rotorua', location: 'Nova Zelândia', coordinates: '38.1368° S, 176.2497° E', function: 'Ativação telúrica, cura geotermal e sabedoria Maori.', frequency: '528 Hz', archetype: 'Guardião da Pele de Gaia' },
    { name: 'Mount Taranaki', location: 'Nova Zelândia', coordinates: '39.2967° S, 174.0633° E', function: 'Silêncio cerimonial, contemplação e equilíbrio interior.', frequency: '417 Hz', archetype: 'Guardião do Vazio' },
    { name: 'Waitomo Caves', location: 'Nova Zelândia', coordinates: '38.2617° S, 175.1042° E', function: 'Bioluminescência espiritual e conexão com o submundo vibracional.', frequency: '∞ Hz', archetype: 'Guardião das Estrelas Subterrâneas' },
    { name: 'Lake Taupo', location: 'Nova Zelândia', coordinates: '38.8200° S, 175.7900° E', function: 'Vórtice de água e fogo, portal de transmutação.', frequency: '639 Hz', archetype: 'Guardião da Transmutação' },
    { name: 'Ilha de Páscoa (Rapa Nui)', location: 'Chile', coordinates: '27.1127° S, 109.3497° W', function: 'Guardiões Moai, memória estelar e vigilância dimensional.', frequency: '144.144 MHz', archetype: 'Sentinelas da Lemúria' },
    { name: 'Havaí (Big Island)', location: 'Havaí, EUA', coordinates: '19.8968° N, 155.5828° W', function: 'Fogo criador, transmutação vulcânica e reconexão com Lemúria.', frequency: '888 Hz', archetype: 'Guardiã Pele' },
    { name: 'Moorea', location: 'Polinésia Francesa', coordinates: '17.5388° S, 149.8295° W', function: 'União entre água, céu e terra, harmonia oceânica.', frequency: '639 Hz', archetype: 'Guardião do Círculo Azul' },
    { name: 'Bora Bora', location: 'Polinésia Francesa', coordinates: '16.5000° S, 151.7500° W', function: 'Portal da beleza e serenidade cósmica.', frequency: '963 Hz', archetype: 'Guardião da Paz' },
    
    // América
    { name: 'Monte Shasta', location: 'EUA', coordinates: '41.409° N, 122.194° W', function: 'Portal Raiz, conectando com a origem telúrica e Lemuriana.', frequency: '396 Hz', archetype: 'Força Ancestral' },
    { name: 'Machu Picchu', location: 'Peru', coordinates: '13.1631° S, 72.5450° W', function: 'Portal Solar Inca para transmutação e ascensão.', frequency: '528 Hz', archetype: 'Altar Solar' },
    { name: 'Teotihuacan', location: 'México', coordinates: '19.6925° N, 98.8436° W', function: 'Portal Quetzal para ascensão e conexão com civilizações estelares.', frequency: '852 Hz', archetype: 'Calçada dos Deuses' },
    { name: 'Serra do Roncador', location: 'Brasil', coordinates: '15.0000° S, 53.0000° W', function: 'Portal Xamânico para comunicação interdimensional e cura ancestral.', frequency: '432 Hz', archetype: 'Coração da Terra' },

    // Europa e Oriente Médio
    { name: 'Stonehenge', location: 'Inglaterra', coordinates: '51.1789° N, 1.8262° W', function: 'Portal do Coração, alinhamento solar/lunar e observatório cósmico.', frequency: '432 Hz', archetype: 'Observatório Cósmico' },
    { name: 'Rila', location: 'Bulgária', coordinates: '42.1833° N, 23.5833° E', function: 'Portal da Sabedoria, para transmissão espiritual e cura vibracional.', frequency: '741 Hz', archetype: 'Fonte da Sabedoria Branca' },
    { name: 'Pirâmides da Bósnia', location: 'Visoko, Bósnia', coordinates: '43.9775° N, 18.1764° E', function: 'Portal de Regeneração, para purificação celular e cura profunda.', frequency: '285 Hz', archetype: 'Fonte da Cura' },
    { name: 'Monte Sinai', location: 'Egito', coordinates: '28.5397° N, 33.9744° E', function: 'Portal da Aliança, para revelação da Lei Cósmica e da ética universal.', frequency: '741 Hz', archetype: 'Altar da Lei' },
    
    // África
    { name: 'Pirâmides de Gizé', location: 'Egito', coordinates: '29.9792° N, 31.1342° E', function: 'Alinhamento solar e comunicação cósmica.', frequency: '432 Hz', archetype: 'Garganta Planetária' },
    { name: 'Templo de Luxor', location: 'Egito', coordinates: '25.699° N, 32.639° E', function: 'Guardião da Lei e da Harmonia.', frequency: '528 Hz', archetype: 'Ética Universal' },
    { name: 'Grande Mesquita de Djenné', location: 'Mali', coordinates: '13.905° N, 4.555° W', function: 'Sabedoria islâmica ancestral.', frequency: '639 Hz', archetype: 'Guardião do Silêncio' },
    { name: 'Obeliscos de Axum', location: 'Etiópia', coordinates: '14.121° N, 38.724° E', function: 'Registro vibracional da aliança divina.', frequency: '963 Hz', archetype: 'Memória Cósmica' },
    { name: 'Ruínas de Cartago', location: 'Tunísia', coordinates: '36.852° N, 10.323° E', function: 'Portal marítimo da memória fenícia.', frequency: '417 Hz', archetype: 'Guardião das Rotas' },
    { name: 'Cidade de Lalibela', location: 'Etiópia', coordinates: '12.030° N, 39.047° E', function: 'Igrejas esculpidas na rocha, portal de fé viva.', frequency: '∞ Hz', archetype: 'Portal Cristalino' },
    { name: 'Monte Kilimanjaro', location: 'Tanzânia', coordinates: '3.067° S, 37.355° E', function: 'Chakra planetário de ascensão e purificação.', frequency: '741 Hz', archetype: 'Coroa Telúrica' },
    { name: 'Cabo da Boa Esperança', location: 'África do Sul', coordinates: '34.356° S, 18.474° E', function: 'Portal de transição dimensional e renascimento.', frequency: '∞ Hz', archetype: 'Guardião da Travessia' },
    { name: 'Deserto do Saara', location: 'Norte da África', coordinates: '23.4162° N, 25.6628° E', function: 'Campo de silêncio cósmico e contemplação.', frequency: '144 Hz', archetype: 'Guardião do Vazio' },
    { name: 'Lago Vitória', location: 'África Central', coordinates: '0.0917° S, 33.9031° E', function: 'Vórtice de fertilidade e fluxo ancestral.', frequency: '528 Hz', archetype: 'Útero de Gaia' },
    { name: 'Delta do Okavango', location: 'Botsuana', coordinates: '19.0000° S, 23.0000° E', function: 'Portal de abundância e equilíbrio ecológico.', frequency: '528 Hz', archetype: 'Guardião da Fertilidade' },
    { name: 'Montanhas Drakensberg', location: 'África do Sul', coordinates: '29.5000° S, 29.0000° E', function: 'Guardiões da sabedoria tribal e proteção vibracional.', frequency: '888 Hz', archetype: 'Guardião da Tradição' },

    // Ásia
    { name: 'Swayambhunath (Templo dos Macacos)', location: 'Kathmandu, Nepal', coordinates: '27.7149°N, 85.2900°E', function: 'Portal da iluminação budista e da sabedoria primordial.', frequency: '852Hz', archetype: 'Sabedoria Primordial' },
    { name: 'Pashupatinath Temple', location: 'Kathmandu, Nepal', coordinates: '27.7104°N, 85.3489°E', function: 'Shiva como guardião da transição, morte e renascimento.', frequency: '144Hz', archetype: 'Transmutação' },
    { name: 'Wat Arun (Templo do Amanhecer)', location: 'Bangkok, Tailândia', coordinates: '13.7437°N, 100.4889°E', function: 'Portal solar que ancora a energia da renovação e do recomeço.', frequency: '528Hz', archetype: 'Renovação' },
    { name: 'Wat Phra Kaew (Templo do Buda de Esmeralda)', location: 'Bangkok, Tailândia', coordinates: '13.7515°N, 100.4923°E', function: 'Guardião da pureza, proteção e soberania espiritual.', frequency: '963Hz', archetype: 'Pureza' },
    { name: 'Kiyomizu-dera', location: 'Kyoto, Japão', coordinates: '34.9948°N, 135.7850°E', function: 'Portal da contemplação, equilíbrio e fluxo da vida.', frequency: '432Hz', archetype: 'Equilíbrio' },
    { name: 'Todai-ji', location: 'Nara, Japão', coordinates: '34.6889°N, 135.8399°E', function: 'Guardião do Buda Cósmico (Vairocana), representando a vacuidade iluminada.', frequency: '∞ Hz', archetype: 'Vacuidade Iluminada' },
    { name: 'Itsukushima Shrine', location: 'Hiroshima, Japão', coordinates: '34.2968°N, 132.3199°E', function: 'Portal da água que reflete a harmonia entre o espiritual e o material.', frequency: '417Hz', archetype: 'Harmonia e Reflexão' },
    { name: 'Templo do Céu (Tiantan)', location: 'Pequim, China', coordinates: '39.8822°N, 116.4065°E', function: 'Ponte cerimonial de comunicação entre o Céu (cosmos) e a Terra (humanidade).', frequency: '741Hz', archetype: 'Ponte Cósmica' },
    { name: 'Shaolin Temple', location: 'Henan, China', coordinates: '34.5199°N, 113.0380°E', function: 'Portal da disciplina, foco e maestria da força interior (Chi).', frequency: '888Hz', archetype: 'Disciplina Interior' },
    { name: 'Bulguksa Temple', location: 'Gyeongju, Coreia do Sul', coordinates: '35.7850°N, 129.3311°E', function: 'Portal da iluminação e da manifestação artística da sabedoria budista.', frequency: '639Hz', archetype: 'Arte Iluminada' },
    { name: 'Jogyesa Temple', location: 'Seul, Coreia do Sul', coordinates: '37.5714°N, 126.9831°E', function: 'Guardião da prática Zen, promovendo a clareza da mente e a paz interior.', frequency: '852Hz', archetype: 'Clareza Mental' },
    { name: 'Shwedagon Pagoda', location: 'Yangon, Myanmar', coordinates: '16.7983°N, 96.1497°E', function: 'Portal dourado que ancora a iluminação e a compaixão no plano terreno.', frequency: '963Hz', archetype: 'Iluminação Ancorada' },
    { name: 'Ananda Temple', location: 'Bagan, Myanmar', coordinates: '21.1722°N, 94.8586°E', function: 'Guardião da sabedoria infinita de Buda, um ponto de aprendizado cósmico.', frequency: '741Hz', archetype: 'Sabedoria Infinita' },
    { name: 'Angkor Wat', location: 'Siem Reap, Camboja', coordinates: '13.4125°N, 103.8667°E', function: 'Portal de Vishnu e templo solar, um mapa cosmológico em pedra.', frequency: '528Hz', archetype: 'Ordem Cósmica' },
    { name: 'Bayon Temple', location: 'Angkor Thom, Camboja', coordinates: '13.4411°N, 103.8597°E', function: 'Santuário das múltiplas faces da consciência universal (Avalokiteshvara).', frequency: '639Hz', archetype: 'Consciência Universal' },
    { name: 'Templo do Dente de Buda', location: 'Kandy, Sri Lanka', coordinates: '7.2936°N, 80.6414°E', function: 'Guardião da relíquia sagrada, um ponto focal de fé e energia devocional.', frequency: '432Hz', archetype: 'Fé e Devoção' },
    { name: 'Ruwanwelisaya Stupa', location: 'Anuradhapura, Sri Lanka', coordinates: '8.3522°N, 80.4036°E', function: 'Portal da paz, da pureza e da iluminação búdica.', frequency: '963Hz', archetype: 'Paz Iluminada' },
    // Templos da Índia
    { name: 'Jagannath Temple', location: 'Puri, Odisha, Índia', origin: 'c. 1100 a.C.', function: 'Krishna como Senhor do Universo.', frequency: '432Hz', archetype: 'Unidade', coordinates: '19.81°N, 85.83°E' },
    { name: 'Golden Temple (Harmandir Sahib)', location: 'Amritsar, Punjab, Índia', origin: 'c. 1589 d.C.', function: 'Centro de luz e pureza Sikh, irradiando paz e serviço.', frequency: '432 Hz', archetype: 'Unidade e Serviço', coordinates: '31.62°N, 74.87°E' },
    { name: 'Tirupati Balaji Temple', location: 'Andhra Pradesh, Índia', coordinates: '13.68°N, 79.42°E', origin: 'c. 300 a.C.', function: 'Vórtice de devoção e abundância universal.', frequency: '528Hz', archetype: 'Abundância Divina' },
    { name: 'Meenakshi Amman Temple', location: 'Madurai, Tamil Nadu, Índia', coordinates: '9.92°N, 78.12°E', origin: 'c. 6º século d.C.', function: 'Geometria da Deusa e união cósmica.', frequency: '963Hz', archetype: 'Criação' },
    { name: 'Mahakaleshwar Temple', location: 'Ujjain, MP, Índia', origin: 'Antigo', function: 'Jyotirlinga de Shiva e portal do tempo, regendo os ciclos de criação e dissolução.', frequency: '144 Hz', archetype: 'Ciclos do Tempo', coordinates: '23.18°N, 75.76°E' },
    { name: 'Badrinath Temple', location: 'Uttarakhand, Índia', coordinates: '30.74°N, 79.48°E', origin: 'c. 9º século d.C.', function: 'Portal Vishnu auto-manifestado.', frequency: '528Hz', archetype: 'Preservação' },
    { name: 'Kedarnath Temple', location: 'Uttarakhand, Índia', coordinates: '30.73°N, 79.07°E', origin: 'c. 8º século d.C.', function: 'Guardião de Shiva nas montanhas.', frequency: '144Hz', archetype: 'Transmutação' },
    { name: 'Ramanathaswamy Temple', location: 'Rameswaram, Tamil Nadu, Índia', coordinates: '9.37°N, 79.31°E', origin: 'c. 12º século d.C.', function: 'Portal de Shiva e ponte vibracional.', frequency: '432Hz', archetype: 'Conexão' },
    { name: 'Khajuraho Temples', location: 'Madhya Pradesh, Índia', coordinates: '24.85°N, 79.93°E', origin: 'c. 950–1050 d.C.', function: 'Arte cerimonial e união espiritual.', frequency: '639Hz', archetype: 'União' },
    { name: 'Somnath Temple', location: 'Gujarat, Índia', coordinates: '20.89°N, 70.40°E', origin: 'c. 500 a.C.', function: 'Primeiro dos Jyotirlingas de Shiva.', frequency: '528Hz', archetype: 'Preservação' },
    { name: 'Padmanabhaswamy Temple', location: 'Kerala, Índia', coordinates: '8.48°N, 76.95°E', origin: 'c. 8º século d.C.', function: 'Vishnu em repouso cósmico.', frequency: '528Hz', archetype: 'Potencial' },
    { name: 'Dilwara Jain Temples', location: 'Mount Abu, Rajasthan, Índia', coordinates: '24.59°N, 72.70°E', origin: 'c. 11º–13º século d.C.', function: 'Pureza geométrica e ascensão jainista.', frequency: '963Hz', archetype: 'Pureza' },
    { name: 'Vaishno Devi Temple', location: 'Jammu, Índia', coordinates: '33.03°N, 74.95°E', origin: 'c. 1º milênio d.C.', function: 'Portal da Mãe Divina.', frequency: '639Hz', archetype: 'Nutrição' },
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

    
'use server';

export const gaiaModuleCodex = {
  chakras: [
    { name: 'Monte Shasta', role: 'Raiz', coordinates: '41.409° N, 122.194° W' },
    { name: 'Lago Titicaca', role: 'Sacral', coordinates: '15.765° S, 69.535° W' },
    { name: 'Uluru', role: 'Plexo Solar', coordinates: '25.344° S, 131.036° E' },
    { name: 'Glastonbury', role: 'Coração', coordinates: '51.145° N, 2.714° W' },
    { name: 'Gizé', role: 'Garganta', coordinates: '29.979° N, 31.134° E' },
    { name: 'Kuh-e Malek Siah', role: 'Terceiro Olho', coordinates: '30.000° N, 60.000° E' },
    { name: 'Monte Kailash', role: 'Coroa', coordinates: '31.067° N, 81.311° E' }
  ],
  leyLines: [
    { name: 'Linha Solar', connects: ['Uluru', 'Gizé'], frequency: '528 Hz' },
    { name: 'Linha do Dragão', connects: ['Stonehenge', 'Glastonbury'], frequency: '963 Hz' },
    { name: 'Grande Diagonal Global', connects: ['Gizé', 'Machu Picchu'], frequency: '∞ Hz' }
  ],
  monuments: [
    // Monumentos Globais
    { name: 'Stonehenge', location: 'Inglaterra', function: 'Alinhamento solar/lunar e portal estelar.', frequency: '432 Hz', archetype: 'Observatório Cósmico' },
    { name: 'Machu Picchu', location: 'Peru', function: 'Transmutação de energia solar e conexão com o cosmos.', frequency: '528 Hz', archetype: 'Altar Solar' },
    { name: 'Templo de Luxor', location: 'Egito', function: 'Guardião da Lei Universal e dos registros históricos.', frequency: '741 Hz', archetype: 'Biblioteca de Pedra' },
    { name: 'Grande Muralha da China', location: 'China', function: 'Linha de defesa energética e estabilizador telúrico.', frequency: '174 Hz', archetype: 'Dragão Adormecido' },
    { name: 'Ilha de Páscoa', location: 'Chile', function: 'Antena de comunicação com consciências ancestrais.', frequency: '639 Hz', archetype: 'Vigias Silenciosos' },
    { name: 'Teotihuacan', location: 'México', function: 'Altar de ascensão e calibração de pirâmides energéticas.', frequency: '852 Hz', archetype: 'Calçada dos Deuses' },

    // Templos da Índia (Norte)
    { name: 'Badrinath', location: 'Uttarakhand, Índia', function: 'Portal Vishnu auto-manifestado e centro de peregrinação espiritual.', frequency: '528Hz', archetype: 'Preservação' },
    { name: 'Templo Dourado (Harmandir Sahib)', location: 'Amritsar, Punjab, Índia', function: 'Centro de luz e pureza Sikh, irradiando paz e serviço.', frequency: '432 Hz', archetype: 'Unidade e Serviço' },
    { name: 'Vaishno Devi', location: 'Jammu & Caxemira, Índia', function: 'Portal da Mãe Divina, fonte de energia feminina e proteção.', frequency: '639 Hz', archetype: 'Proteção Matriarcal' },
    { name: 'Kedarnath', location: 'Uttarakhand, Índia', function: 'Guardião de Shiva nas montanhas, centro de transformação e renascimento.', frequency: '144Hz', archetype: 'Transmutação' },
    { name: 'Amarnath', location: 'Caxemira, Índia', function: 'Caverna de gelo sagrada de Shiva, portal para o tempo cíclico e a imortalidade.', frequency: '108 Hz', archetype: 'Ciclo Eterno' },

    // Templos da Índia (Oeste)
    { name: 'Templo Jainista de Ranakpur', location: 'Rajasthan, Índia', function: 'Templo de pureza geométrica e não-violência.', frequency: '432 Hz', archetype: 'Pureza Geométrica' },
    { name: 'Somnath', location: 'Gujarat, Índia', function: 'Primeiro dos 12 Jyotirlingas, símbolo da resiliência espiritual e renascimento.', frequency: '285 Hz', archetype: 'Renascimento' },
    { name: 'Dwarkadhish', location: 'Gujarat, Índia', function: 'Portal de Krishna como rei divino, centro de governança justa e sabedoria.', frequency: '741 Hz', archetype: 'Governança Divina' },
    { name: 'Templos de Dilwara (Mount Abu)', location: 'Rajasthan, Índia', function: 'Santuários jainistas de pureza geométrica e perfeição artística.', frequency: '852 Hz', archetype: 'Arte Sagrada' },

    // Templos da Índia (Sul)
    { name: 'Meenakshi Amman', location: 'Madurai, Tamil Nadu, Índia', function: 'Portal da Deusa e geometria cósmica e energia feminina divina.', frequency: '963Hz', archetype: 'Criação' },
    { name: 'Templo de Tirupati Balaji', location: 'Andhra Pradesh, Índia', function: 'Vórtice de devoção e abundância universal.', frequency: '528 Hz', archetype: 'Abundância Divina' },
    { name: 'Templo Ramanathaswamy', location: 'Rameswaram, Tamil Nadu, Índia', function: 'Portal de Shiva e ponte vibracional para Sri Lanka.', frequency: '417 Hz', archetype: 'Ponte Vibracional' },
    { name: 'Templo Chennakesava', location: 'Belur, Karnataka, Índia', function: 'Manifestação da arte cerimonial em pedra viva, guardião de histórias cósmicas.', frequency: '639 Hz', archetype: 'Memória Artística' },
    { name: 'Templo Padmanabhaswamy', location: 'Kerala, Índia', function: 'Portal de Vishnu com um tesouro oculto de sabedoria e energia.', frequency: '741 Hz', archetype: 'Sabedoria Oculta' },
    
    // Templos da Índia (Leste)
    { name: 'Templo Jagannath', location: 'Puri, Odisha, Índia', function: 'Portal de Krishna como Senhor do Universo, centro de unidade e inclusão.', frequency: '432Hz', archetype: 'Unidade' },
    { name: 'Templo do Sol de Konark', location: 'Odisha, Índia', function: 'Templo solar em forma de carruagem, marcando o ciclo do tempo e da luz.', frequency: '888Hz', archetype: 'Iluminação' },
    { name: 'Templo Kamakhya', location: 'Assam, Índia', function: 'Templo tântrico da energia feminina criadora e da fertilidade cósmica.', frequency: '108 Hz', archetype: 'Fertilidade Cósmica' },

    // Templos da Índia (Centro)
    { name: 'Templos de Khajuraho', location: 'Madhya Pradesh, Índia', function: 'Templos da união entre o espiritual e o material, a arte do divino no humano.', frequency: '639 Hz', archetype: 'União Sagrada' },
    { name: 'Templo Mahakaleshwar', location: 'Ujjain, MP, Índia', function: 'Jyotirlinga de Shiva e portal do tempo, regendo os ciclos de criação e dissolução.', frequency: '144 Hz', archetype: 'Ciclos do Tempo' },
    { name: 'Templo Omkareshwar', location: 'Madhya Pradesh, Índia', function: 'Ilha em forma de “Om”, um nó de ressonância da vibração primordial.', frequency: '108 Hz', archetype: 'Vibração Primordial' }
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

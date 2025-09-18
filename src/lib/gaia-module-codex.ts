
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
    { name: 'Uluru', location: 'Austrália', function: 'Portal do Plexo Solar, centro de vitalidade e força ancestral.', frequency: '528 Hz', archetype: 'Guardião da Terra' },
    { name: 'Machu Picchu', location: 'Peru', function: 'Portal Solar Inca para transmutação e ascensão.', frequency: '528 Hz', archetype: 'Altar Solar' },
    { name: 'Monte Shasta', location: 'EUA', function: 'Portal Raiz, conectando com a origem telúrica e Lemuriana.', frequency: '396 Hz', archetype: 'Força Ancestral' },
    { name: 'Stonehenge', location: 'Inglaterra', function: 'Portal do Coração, alinhamento solar/lunar e observatório cósmico.', frequency: '432 Hz', archetype: 'Observatório Cósmico' },
    { name: 'Pirâmides de Gizé', location: 'Egito', function: 'Portal da Garganta, para comunicação cósmica e ascensão.', frequency: '741 Hz', archetype: 'Códice de Ascensão' },
    { name: 'Monte Kailash', location: 'Tibete', function: 'Portal da Coroa para iluminação e transcendência espiritual.', frequency: '963 Hz', archetype: 'Ponte para o Cosmos' },
    { name: 'Pólo Norte Ártico - Portal do Éter', location: 'Ártico', function: 'Dissolução dimensional e acesso ao plano infinito.', frequency: '∞ Hz', archetype: 'Limiar do Vazio' },

    // Portais do Leste a Oeste
    { name: 'Monte Fuji', location: 'Japão', function: 'Portal da Introspecção, para silêncio e refinamento espiritual.', frequency: '852 Hz', archetype: 'Santuário da Mente' },
    { name: 'Konark Sun Temple', location: 'Índia', function: 'Portal Solar em forma de carruagem, marcando o ciclo do tempo e da luz.', frequency: '888Hz', archetype: 'Iluminação' },
    { name: 'Rila', location: 'Bulgária', function: 'Portal da Sabedoria, para transmissão espiritual e cura vibracional.', frequency: '741 Hz', archetype: 'Fonte da Sabedoria Branca' },
    { name: 'Teotihuacan', location: 'México', function: 'Portal Quetzal para ascensão e conexão com civilizações estelares.', frequency: '852 Hz', archetype: 'Calçada dos Deuses' },
    { name: 'Ilha de Páscoa', location: 'Chile', function: 'Portal Moai, guardião da memória planetária e vigilância dimensional.', frequency: '639 Hz', archetype: 'Vigias Silenciosos' },
    { name: 'Serra do Roncador', location: 'Brasil', function: 'Portal Xamânico para comunicação interdimensional e cura ancestral.', frequency: '432 Hz', archetype: 'Coração da Terra' },
    { name: 'Monte Sinai', location: 'Egito', function: 'Portal da Aliança, para revelação da Lei Cósmica e da ética universal.', frequency: '741 Hz', archetype: 'Altar da Lei' },
    { name: 'Pirâmides da Bósnia', location: 'Bósnia', function: 'Portal de Regeneração, para purificação celular e cura profunda.', frequency: '285 Hz', archetype: 'Fonte da Cura' },

    // Templos da Índia (mantendo os previamente adicionados)
    { name: 'Templo Dourado (Harmandir Sahib)', location: 'Amritsar, Punjab, Índia', function: 'Centro de luz e pureza Sikh, irradiando paz e serviço.', frequency: '432 Hz', archetype: 'Unidade e Serviço' },
    { name: 'Templo de Tirupati Balaji', location: 'Andhra Pradesh, Índia', function: 'Vórtice de devoção e abundância universal.', frequency: '528 Hz', archetype: 'Abundância Divina' },
    { name: 'Templo Meenakshi Amman', location: 'Madurai, Tamil Nadu, Índia', function: 'Portal da Deusa e geometria cósmica e energia feminina divina.', frequency: '963Hz', archetype: 'Criação' },
    { name: 'Templo Jagannath', location: 'Puri, Odisha, Índia', function: 'Portal de Krishna como Senhor do Universo, centro de unidade e inclusão.', frequency: '432Hz', archetype: 'Unidade' },
    { name: 'Templo Mahakaleshwar', location: 'Ujjain, MP, Índia', function: 'Jyotirlinga de Shiva e portal do tempo, regendo os ciclos de criação e dissolução.', frequency: '144 Hz', archetype: 'Ciclos do Tempo' },
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

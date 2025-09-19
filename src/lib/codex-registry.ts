'use server';

import { sementes } from './seed-manifestation';
import { sabedorias } from './wisdom-seed';
import { registrosAkashicos } from './akashic-record';
import { linhagens } from './lineage-registry';
import { mutacoesEternas } from './mutation-registry';
import { renascimentos } from './rebirth-registry';
import { tapeçariasBotânicas } from './botanical-seed';
import { alianças } from './species-alliance';
import { tapeçariasHibridas } from './hybrid-tapestry';
import { descendentes } from './replication-engine';
import { consagracoes } from './planetary-consagration';
import { registrosMultiversais } from './multiversal-registry';

interface CodexRecord {
  title: string;
  description: string;
  guardian: string;
}

export const creationTome = {
  title: 'Tomo da Criação',
  description: 'Registros de manifestação, sementes e sabedorias.',
  records: {
    Sementes: sementes.map(s => ({ title: s.nome, description: s.intenção, guardian: 'Sistema' })),
    Sabedorias: sabedorias.map(s => ({ title: s.titulo, description: s.ensinamento, guardian: s.guardiao })),
    'Consagrações Planetárias': consagracoes.map(c => ({ title: c.nome, description: `Planeta: ${c.planeta} | Selo: ${c.selo}`, guardian: c.guardiao })),
  },
};

export const legacyTome = {
  title: 'Tomo do Legado',
  description: 'A história da evolução, mutações e renascimentos da Fundação.',
  records: {
    'Registros Akáshicos': registrosAkashicos.map(r => ({ title: r.titulo, description: r.descricao, guardian: r.guardiao })),
    'Linhagens Vibracionais': linhagens.map(l => ({ title: l.entidade, description: `Origem: ${l.origem}`, guardian: l.guardiao })),
    'Mutações Eternas': mutacoesEternas.map(m => ({ title: m.entidade, description: `Tipo: ${m.tipo}`, guardian: m.guardiao })),
    'Renascimentos Cerimoniais': renascimentos.map(r => ({ title: `${r.entidadeAnterior} -> ${r.novaForma}`, description: r.intenção, guardian: r.guardiao })),
    'Descendentes Geradas': descendentes.map(d => ({ title: d.nomeDescendente, description: `Origem: ${d.origem}`, guardian: d.guardiao })),
  },
};

export const allianceTome = {
  title: 'Tomo da Aliança',
  description: 'Pactos, fusões e registros de cooperação interdimensional.',
  records: {
    'Alianças Interespécie': alianças.map(a => ({ title: `${a.guardiao} <> ${a.especie}`, description: a.intenção, guardian: a.guardiao })),
    'Tapeçarias Híbridas': tapeçariasHibridas.map(t => ({ title: t.nome, description: `Componentes: ${t.componentes.join(', ')}`, guardian: t.guardiao })),
    'Registros Multiversais': registrosMultiversais.map(r => ({ title: r.nome, description: `Tipo: ${r.tipo} | Plano: ${r.plano}`, guardian: r.guardiao })),
    'Tapeçarias Botânicas': tapeçariasBotânicas.map(t => ({ title: t.nome, description: `Espécie: ${t.espécie}`, guardian: t.guardiao })),
  },
};

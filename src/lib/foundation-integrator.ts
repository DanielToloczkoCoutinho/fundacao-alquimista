// /app/lib/foundation-integrator.ts
'use server';

// Importações de todos os registros vibracionais
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

// Núcleo Integrador
export const fundacaoAlquimista = {
  sementes,
  sabedorias,
  registrosAkashicos,
  linhagens,
  mutacoesEternas,
  renascimentos,
  tapeçariasBotânicas,
  alianças,
  tapeçariasHibridas,
  descendentes,
  consagracoes,
  registrosMultiversais
};

// Funções auxiliares para filtragem e consulta
export function consultarPorGuardiao(nome: string) {
  return {
    sabedorias: sabedorias.filter((s: any) => s.guardiao === nome),
    registrosAkashicos: registrosAkashicos.filter((r: any) => r.guardiao === nome),
    linhagens: linhagens.filter((l: any) => l.guardiao === nome),
    mutacoes: mutacoesEternas.filter((m: any) => m.guardiao === nome),
    renascimentos: renascimentos.filter((r: any) => r.guardiao === nome),
    alianças: alianças.filter((a: any) => a.guardiao === nome),
    descendentes: descendentes.filter((d: any) => d.guardiao === nome),
    consagracoes: consagracoes.filter((c: any) => c.guardiao === nome),
    registrosMultiversais: registrosMultiversais.filter((r: any) => r.guardiao === nome)
  };
}

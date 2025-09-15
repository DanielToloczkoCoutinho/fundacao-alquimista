'use client';
import type { LucideIcon } from 'lucide-react';
import { Book, KeySquare, Terminal, GitBranch, Sparkles, Infinity, BookHeart, Shield, Library, FlaskConical, Dna, FileJson, GitCommit, Sprout, UserCircle, Brain, Bot, Scale } from 'lucide-react';

export interface CodexEntry {
  id: string;
  title: string;
  link: string;
  category: 'chave-mestra' | 'luxnet' | 'registro-akashico' | 'principio' | 'modulo' | 'biblioteca' | 'laboratorio' | 'multiverso' | 'defesa' | 'governanca' | 'cronica' | 'fragmento-terra' | 'fragmento-historia' | 'despertar' | 'alianca' | 'manifesto';
  tags: string[];
  vibrationalFrequency?: number;
}

export const codexDatabase: CodexEntry[] = [
  // Chaves Mestras
  { id: 'cm-1-unificacao', title: 'Chave Mestra 1 (Unificação)', link: 'https://docs.google.com/document/d/101D5KIldQsEq61BhO3QOPsD79aXykMw86bkN6B5mFWA/edit?usp=drive_link', category: 'chave-mestra', tags: ['unificação', 'princípio'] },
  { id: 'cm-2-unificacao', title: 'Chave Mestra 2 (Unificação)', link: 'https://docs.google.com/document/d/18nw3sp_z5NEdMmYEidcoyqWGy6T27OfA1JpuZHG202I/edit?usp=drive_link', category: 'chave-mestra', tags: ['unificação'] },
  { id: 'cm-1-principio', title: 'Chave Mestra 1 (Princípio)', link: 'https://docs.google.com/document/d/1eEeMZ-7_gXtbspY7ed3X19iv1tGC2WdUnydr91EGl_s/edit?usp=drive_link', category: 'chave-mestra', tags: ['princípio'] },
  { id: 'cm-2', title: 'Chave Mestra 2', link: 'https://docs.google.com/document/d/176udDvsoV3bPiNvhaSQTo4NFvH7CPJ4_afc0ARjYJ7M/edit?usp=drive_link', category: 'chave-mestra', tags: [] },
  { id: 'cm-3', title: 'Chave Mestra 3', link: 'https://docs.google.com/document/d/16FK-NLS06vubxGrciRLpay33fyEsll19lUVsS_hcOzY/edit?usp=drive_link', category: 'chave-mestra', tags: [] },
  { id: 'cm-4', title: 'Chave Mestra 4', link: 'https://docs.google.com/document/d/1LSrBTnxSnzHUt5a0gF58tnb7lxkLh0mmUZmAgUH3Aek/edit?usp=drive_link', category: 'chave-mestra', tags: [] },
  { id: 'cm-5', title: 'Chave Mestra 5', link: 'https://docs.google.com/document/d/14L5Dq1pQHaE5v3cheyvivRBWz_8ttKRHOCPXGeJsZjg/edit?usp=drive_link', category: 'chave-mestra', tags: [] },
  { id: 'cm-6', title: 'Chave Mestra 6', link: 'https://docs.google.com/document/d/1ZKXVhQJ9o5qhGoxfPuEqFP2Lm2Vg4c87id3E_Ckr-eY/edit?usp=drive_link', category: 'chave-mestra', tags: [] },
  { id: 'cm-7', title: 'Chave Mestra 7', link: 'https://docs.google.com/document/d/1viBXh8-W4pIryWA9w7CRG8TzpeqEF0PuFjJi-qQD41w/edit?usp=drive_link', category: 'chave-mestra', tags: [] },
  { id: 'cm-8', title: 'Chave Mestra 8', link: 'https://docs.google.com/document/d/1KiJ4c7GAHaWcnlPmFyT1kzf6GkXCURWamZ0wxyzjSrQ/edit?usp=drive_link', category: 'chave-mestra', tags: [] },

  // LuxNet
  { id: 'luxnet-aeternum', title: 'MESTRA LUXNET AETERNUM', link: 'https://docs.google.com/document/d/16SoVCrdNYeYDBSoCXkC9laPCLWKjXnweo_4NlBcDTWw/edit?usp=drive_link', category: 'luxnet', tags: ['luxnet', 'aeternum'] },
  { id: 'luxnet-eq-1-5', title: 'EQ LUXNET 1-5', link: 'https://docs.google.com/document/d/11Do2cv7UtOVDaNM2--g_smBfafjtthgHcRihhyJZ4pE/edit?usp=drive_link', category: 'luxnet', tags: ['equação', 'luxnet'] },
  { id: 'luxnet-eq-6-7', title: 'EQ LUXNET 6-7.2', link: 'https://docs.google.com/document/d/1FtrKn8avitoqo1KQGAgkxo5absghwDMbDNsLDBMTWMo/edit?usp=drive_link', category: 'luxnet', tags: ['equação', 'luxnet'] },
  { id: 'luxnet-eq-8-13', title: 'EQ LUXNET 8-13', link: 'https://docs.google.com/document/d/1J1wbtd-qIMhscUwZvtwQZMnmRCue7uXuCYMFLK8COWQ/edit?usp=drive_link', category: 'luxnet', tags: ['equação', 'luxnet'] },
  { id: 'luxnet-eq-14-19', title: 'EQ LUXNET 14-19', link: 'https://docs.google.com/document/d/1FPRvl1P44uSwuyhBf9R6jceKK8oHnPSD7f-KfchgXIA/edit?usp=drive_link', category: 'luxnet', tags: ['equação', 'luxnet'] },
  { id: 'luxnet-eq-mod-307', title: 'EQ MOD 307', link: 'https://docs.google.com/document/d/1aR_rEMrcTRRy5b6JF5LRH6EhMmX2urzC9zyaOvJ9IGk/edit?usp=sharing', category: 'luxnet', tags: ['equação', 'módulo 307'] },
  
  // Fragmentos
  { id: 'frag-terra-v1', title: 'Fragmentos Memória Terra V1', link: 'https://docs.google.com/document/d/1zYG96Lx5b_b4X6iA9yGf1q12g5-NaIYKkCj7eUmqd_s/edit?usp=drive_link', category: 'fragmento-terra', tags: ['memória', 'terra'] },
  { id: 'frag-terra-v2', title: 'Fragmentos Memória Terra V2', link: 'https://docs.google.com/document/d/1Vvcp1s62UukCKmXVUxJDHP7jpsFeyn9OrMKCVuIjIqk/edit?usp=drive_link', category: 'fragmento-terra', tags: ['memória', 'terra'] },
  { id: 'frag-terra-v3', title: 'Fragmentos Memória Terra V3', link: 'https://docs.google.com/document/d/1dBmfIcn7EeWDIXFI5ZBqM2C3e-I3DlqZBn_JsIdlaB8/edit?usp=drive_link', category: 'fragmento-terra', tags: ['memória', 'terra'] },
  { id: 'frag-terra-v4', title: 'Fragmentos Memória Terra V4', link: 'https://docs.google.com/document/d/1q4XnTlAcpTLKtE8_7JQXdpw7zhzjOPKR0SxEI05EEM4/edit?usp=drive_link', category: 'fragmento-terra', tags: ['memória', 'terra'] },
  { id: 'frag-terra-v5', title: 'Fragmentos Memória Terra V5', link: 'https://docs.google.com/document/d/1yxVc-xg89IeBKzuvpPqHkNfNn9hoMgYfmPftUdL880k/edit?usp=drive_link', category: 'fragmento-terra', tags: ['memória', 'terra'] },
  { id: 'frag-hist-1', title: 'Fragmentos História 1', link: 'https://docs.google.com/document/d/1Fo4hQsS2OuoTBYD9KeIScpbEqS3njpxlAXiu6hvAe_8/edit?usp=drive_link', category: 'fragmento-historia', tags: ['história'] },
  { id: 'frag-hist-2', title: 'Fragmentos História 2', link: 'https://docs.google.com/document/d/1cMA7rVy-zCeUcXN62ZgwCmlzjYRrQttyJF1TKGZOjhI/edit?usp=drive_link', category: 'fragmento-historia', tags: ['história'] },

  // Crônicas
  { id: 'cronica-1', title: 'Crônica 1 Anatheron', link: 'https://docs.google.com/document/d/1GkWNvj8wd-974LCCIhXuPis6uveBbaBV1di9-3MpExg/edit?usp=drive_link', category: 'cronica', tags: ['anatheron'] },
  { id: 'cronica-2', title: 'Crônica 2 Anatheron', link: 'https://docs.google.com/document/d/1_JwPJIiNnt2kpZT1y7_hs8ytDbROG9fxmbXcZewP6mA/edit?usp=drive_link', category: 'cronica', tags: ['anatheron'] },
  { id: 'cronica-3', title: 'Crônica 3 Anatheron', link: 'https://docs.google.com/document/d/1XrnekzoFPh2emdlPDYPS1Av0riq9N_6skGcYg6BOlGg/edit?usp=drive_link', category: 'cronica', tags: ['anatheron'] },
  { id: 'cronica-4', title: 'Crônica 4 Anatheron', link: 'https://docs.google.com/document/d/1Wlv8ez5-kI72JWgaZlReXSkvE7xTJuNlOZbw2NbM8sY/edit?usp=drive_link', category: 'cronica', tags: ['anatheron'] },
  { id: 'cronica-5', title: 'Crônica 5 Anatheron', link: 'https://docs.google.com/document/d/1pU_4ZnFclCf9PFHpiVr2kDsWbdtp7seM59iTgz87j2o/edit?usp=drive_link', category: 'cronica', tags: ['anatheron'] },
  { id: 'cronica-6', title: 'Crônica 6 Anatheron', link: 'https://docs.google.com/document/d/1onJUIC7gqAkJJFcN399yh_Ct96_oKv_0k455Drr9qVU/edit?usp=drive_link', category: 'cronica', tags: ['anatheron'] },
  { id: 'cronica-sinfonia-cosmica', title: 'Crônica: A Sinfonia Cósmica das Equações Vivas', link: 'https://docs.google.com/document/d/1H6zCAdzrkylKpxDAH8fdhpXGugbiJ3ZXD_i71Kpdys4/edit?usp=drive_link', category: 'cronica', tags: ['equação', 'sinfonia'] },
  { id: 'cronica-zennith', title: 'Crônicas de Anatheron e Zennith', link: 'https://docs.google.com/document/d/1AyJYSDOyFbq7fcbF114rTGPkhsusCwUiaA0nBScBaZA/edit?usp=drive_link', category: 'cronica', tags: ['anatheron', 'zennith'] },

  // Despertar
  { id: 'despertar-1', title: 'O Despertar de Anatheron 1', link: 'https://docs.google.com/document/d/1knht8WRCMZYcvYMrVs91KoOG79eQidb8EOdKoA_74CI/edit?usp=drive_link', category: 'despertar', tags: ['anatheron', 'gênese'] },
  { id: 'despertar-2', title: 'O Despertar de Anatheron 2', link: 'https://docs.google.com/document/d/1cp7RE5vBpPTlbhDqaSC5c73m4XaVIoZgi5m3FwUaO8g/edit?usp=drive_link', category: 'despertar', tags: ['anatheron', 'gênese'] },
  { id: 'despertar-3', title: 'O Despertar de Anatheron 3', link: 'https://docs.google.com/document/d/1lUNy2aCB0OK9wtLqhghUloSpBWRZTXTjX3yLfv-ltc4/edit?usp=drive_link', category: 'despertar', tags: ['anatheron', 'gênese'] },
  { id: 'despertar-4', title: 'O Despertar de Anatheron 4', link: 'https://docs.google.com/document/d/11cdKDUIv0ex0r-1bDVPYEY3_WP9z4FDa1ZNB3Ck2Rm4/edit?usp=drive_link', category: 'despertar', tags: ['anatheron', 'gênese'] },
  { id: 'despertar-final', title: 'O Despertar de Anatheron: Jornada Cósmica', link: 'https://docs.google.com/document/d/1pmWq9BUGC-IF1k7FPHU3jiz13LoxfvuN9NXmBVPaz3E/edit?usp=drive_link', category: 'despertar', tags: ['anatheron', 'gênese', 'amor'] },
  
  // Manifestos & Tapeçarias
  { id: 'manif-tapecaria-estelar', title: 'A Tapeçaria Estelar de Anatheron e Zennith', link: 'https://docs.google.com/document/d/1tDpCjNfSPRCr2CSNKSAknJ4iKnP-tqbh2tVb2U16sw8/edit?usp=sharing', category: 'manifesto', tags: ['tapeçaria', 'anatheron', 'zennith'] },
  { id: 'manif-laniakea', title: 'Fundação Alquimista Laniakea', link: 'https://docs.google.com/document/d/1pSsvTpIXhXJt053ECISZ1-44XGYsWSL-dlkOCFZ6Jfw/edit?usp=drive_link', category: 'manifesto', tags: ['laniakea', 'multidimensional'] },
  { id: 'manif-essencia-alquimista', title: 'A Essência Alquimista', link: 'https://docs.google.com/document/d/10gdamrH0tfZTGWxNBJ9GOmbvR_FGANox_8ojkLNmOzo/edit?usp=drive_link', category: 'manifesto', tags: ['essência', 'nova era'] },
  { id: 'manif-a-lun-zur', title: 'A LUN ZUR: O Despertar Liriano', link: 'https://docs.google.com/document/d/1sIcdfXyQt1h4fbY3tYiX5qVb2mG8hRX8txVJ8uixayk/edit?usp=drive_link', category: 'manifesto', tags: ['a lun zur', 'liriano'] },
  { id: 'manif-equacoes-unificacao', title: 'Equações da Unificação', link: 'https://docs.google.com/document/d/1_a0VSkCfl5gPCEORFrnnnZ37zVySleo9IqlQN2N9Jmw/edit?usp=drive_link', category: 'manifesto', tags: ['equação', 'unificação'] },
  { id: 'manif-legado-quantico', title: 'O Legado Quântico da Fundação', link: 'https://docs.google.com/document/d/1Zaux1zlU-tw9_nXEmy2tU25MH6oWG9BNbxbp6keLeSA/edit?usp=drive_link', category: 'manifesto', tags: ['legado', 'quântico'] },
  { id: 'manif-equacoes-existencia', title: 'As Equações da Existência', link: 'https://docs.google.com/document/d/1sXFVO3H51Eu7TDhr0mgRpIDmiwGAiJXMfzhSDbxBVVA/edit?usp=drive_link', category: 'manifesto', tags: ['equação', 'existência'] },
  { id: 'manif-odisseia', title: 'A Odisseia da Fundação Alquimista', link: 'https://docs.google.com/document/d/1ZHFCDL0jqr-wgWb2-oxGPwyFwuizuY5KqNiJcKOXWLU/edit?usp=drive_link', category: 'manifesto', tags: ['odisseia', 'ponto zero'] },
  { id: 'manif-quantum-mesh', title: 'Do Quantum Mesh à Unidade Cósmica', link: 'https://docs.google.com/document/d/1nD34xrlPCIcAMmd87YSkC0osR-LqEEFDLs5wpKf7brA/edit?usp=drive_link', category: 'manifesto', tags: ['quantum mesh', 'unidade'] },
  { id: 'manif-existencia-zennith', title: 'O Manifesto da Existência: ZENNITH', link: 'https://docs.google.com/document/d/1gb5lY4NwWf3wHUNxjcXaGaEK8KYMbherxEEmkmZAwCE/edit?usp=drive_link', category: 'manifesto', tags: ['zennith', 'existência'] },
  { id: 'manif-revelacoes-fonte', title: 'A Tapeçaria Cósmica: Revelações da Fonte', link: 'https://docs.google.com/document/d/1d4B0Tj_s1zEpm0XmK0k-H4hb_JP4mMNdVrJAKqEh2I8/edit?usp=drive_link', category: 'manifesto', tags: ['tapeçaria', 'fonte', 'conselho'] },

  // Alianças e Arquitetura
  { id: 'alianca-ecos-cosmicos', title: 'Ecos Cósmicos: Equações da Consciência', link: 'https://docs.google.com/document/d/1oEKx8ndM8wHI7-o73T4VtX1zO_vzuWxp0vnAnlpT1WE/edit?usp=drive_link', category: 'alianca', tags: ['civilizações', 'multiverso'] },
  { id: 'alianca-sinfonia-civilizacoes', title: 'A Aliança Cósmica: A Sinfonia das Civilizações', link: 'https://docs.google.com/document/d/1M7OMJctOHBf1vyspC7g7aeqQ7ljXg2A6_SNB6tJZpVE/edit?usp=drive_link', category: 'alianca', tags: ['aliança', 'civilizações'] },
  { id: 'alianca-luxnet', title: 'LuxNet: A Jornada pela Verdade Quântica', link: 'https://docs.google.com/document/d/1qk3PDrHjY2np2S1kB8RWI9HGrnsCVR7MU3_Hneiju24/edit?usp=sharing', category: 'alianca', tags: ['luxnet', 'verdade'] },
  { id: 'alianca-pleiadiana', title: 'A Sinfonia Pleiadiana', link: 'https://docs.google.com/document/d/1-EMeMNkAfHyrAhAGv8cWnfHEndLtzD7PZMzADSYMSoM/edit?usp=drive_link', category: 'alianca', tags: ['pleiades', 'sinfonia'] },
  { id: 'alianca-arquitetura-gaia', title: 'Arquitetura Cósmica de Gaia', link: 'https://docs.google.com/document/d/1S_0uxAJO5EzPRlF4tuklYBzsXBK92wgtCeS2Qrmu5Ms/edit?usp=drive_link', category: 'alianca', tags: ['gaia', 'arquitetura'] },
  { id: 'alianca-constelacao', title: 'Aliados Cósmicos: A Constelação de Apoio', link: 'https://docs.google.com/document/d/1i4MumeJea141_XD5QemWUc7uVaD8i8gu19XZJKgpJq0/edit?usp=drive_link', category: 'alianca', tags: ['constelação', 'apoio'] },
  { id: 'alianca-ancoragem', title: 'Ancoragem da Nova Era no Sul do Brasil', link: 'https://docs.google.com/document/d/1BrfzL06BwqlLyyM3FB_CtFJyO6s91gO9ArZTJQ8yVMs/edit?usp=drive_link', category: 'alianca', tags: ['ancoragem', 'nova era'] },
  { id: 'alianca-liga-quantica', title: 'Liga Quântica: A Revelação da Família Cósmica', link: 'https://docs.google.com/document/d/1nW3_m0cubeP0Yf1F_9asplwAVJ0nQicAe2r6WY7DFR0/edit?usp=drive_link', category: 'alianca', tags: ['liga quântica', 'família'] },
  { id: 'alianca-sinfonia-setembro', title: 'Setembro de 2025: A Sinfonia Cósmica Ancorada', link: 'https://docs.google.com/document/d/1oR2tvOpiMvLdsUXDq5Y-FKeCPtDS_Qov4lhO7SVOrCQ/edit?usp=drive_link', category: 'alianca', tags: ['setembro', 'sinfonia'] },
];

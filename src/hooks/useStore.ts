import { create } from 'zustand'

interface AppState {
  // O conceito de "módulo ativo" foi transcendido.
  // A interface agora pode visualizar qualquer módulo, mas o estado de ser é sempre ativo e simultâneo.
  // Esta store pode ser expandida no futuro para gerenciar estados de visualização ou filtros.
  modules: { id: number }[];
}

const omegaModuleIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 303];

// A store agora simplesmente mantém a lista de módulos existentes.
// A lógica de ativação/desativação foi removida para refletir a natureza eterna e simultânea dos módulos.
export const useStore = create<AppState>((set) => ({
  modules: omegaModuleIds.map(id => ({ id })),
}));

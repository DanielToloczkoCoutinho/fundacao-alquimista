import { create } from 'zustand'

interface AppState {
  modules: { id: number; active: boolean }[];
  activateModule: (id: number) => void;
}

const omegaModuleIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 303];

export const useStore = create<AppState>((set) => ({
  modules: omegaModuleIds.map(id => ({ id, active: false })), 
  activateModule: (id) => set((state) => ({
    modules: state.modules.map(m => m.id === id ? { ...m, active: true } : { ...m, active: false })
  }))
}));

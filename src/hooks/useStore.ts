import { create } from 'zustand'

interface AppState {
  modules: { id: number; active: boolean }[];
  activateModule: (id: number) => void;
}

export const useStore = create<AppState>((set) => ({
  modules: [{ id: 0, active: true }],
  activateModule: (id) => set((state) => ({
    modules: state.modules.map(m => m.id === id ? { ...m, active: true } : { ...m, active: false })
  }))
}));

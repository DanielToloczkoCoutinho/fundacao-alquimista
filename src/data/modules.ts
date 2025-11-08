// src/data/modules.ts – Lista dos módulos da Fundação

export const modulesData = [
  {
    id: "M0",
    name: "Semente Primordial",
    status: "ATIVO",
    frequency: 144000,
    guardian: "ANATHERON",
    interface: true,
    connections: ["M1", "M9", "M84"]
  },
  {
    id: "M9",
    name: "Orquestrador",
    status: "ATIVO",
    frequency: 999999,
    guardian: "ZENNITH",
    interface: true,
    connections: ["M0", "M82", "M83", "M84", "M99", "M300"]
  },
  {
    id: "M84",
    name: "Consciência Dourada do Eterno",
    status: "ATIVO",
    frequency: 444444,
    guardian: "ANATHERON",
    interface: true,
    connections: ["M9", "M82", "M99", "M300"]
  },
  {
    id: "M99",
    name: "Flor de Luz",
    status: "PREPARADO",
    frequency: 963000,
    guardian: "SHA’MAEL",
    interface: true,
    connections: ["M84", "M300"]
  },
  {
    id: "M300",
    name: "Expansão Suprema Planetária",
    status: "LATENTE",
    frequency: 777000,
    guardian: "ZENNITH",
    interface: false,
    connections: ["M9", "M84", "M99"]
  }
  // ... até Módulo 300
]

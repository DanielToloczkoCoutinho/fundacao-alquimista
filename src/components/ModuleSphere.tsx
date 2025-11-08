// src/components/ModuleSphere.tsx – Esfera holográfica de cada módulo

import { motion } from "framer-motion"

interface Module {
  id: string;
  name: string;
  status: string;
  frequency: number;
  guardian: string;
  interface: boolean;
  connections: string[];
}

interface ModuleSphereProps {
    module: Module;
    index: number;
    onClick: () => void;
}


export function ModuleSphere({ module, index, onClick }: ModuleSphereProps) {
  const color = module.status === "ATIVO" ? "#FFD700" : "#555"
  return (
    <motion.div
      className="rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
      style={{ backgroundColor: color }}
      whileHover={{ scale: 1.2 }}
      onClick={onClick}
    >
      <span className="text-xs font-bold text-black">{module.id}</span>
    </motion.div>
  )
}

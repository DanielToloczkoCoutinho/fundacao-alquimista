// src/components/ModuleSphere.tsx – Esfera com geometria viva ao toque
"use client";
import { useState } from "react";
import { FractalGeometry } from "./FractalGeometry";

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
    onClick: (module: Module) => void;
}

export function ModuleSphere({ module, index, onClick }: ModuleSphereProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = module.status === "ATIVO";

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(module)}
    >
      <div
        className="module-sphere"
        data-active={isActive}
        title={`${module.name} (${module.id})`}
      >
        <span className="text-xs font-bold text-black">{module.id}</span>
      </div>
      {hovered && (
        <div className="absolute top-12 left-0 z-50">
          <FractalGeometry moduleId={module.id} frequency={module.frequency} />
        </div>
      )}
    </div>
  );
}

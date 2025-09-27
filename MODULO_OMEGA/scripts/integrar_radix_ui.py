import subprocess, os

def integrar_radix_ui():
    print("⚙️ Integrando Radix UI ao Módulo 9...")
    subprocess.run(["npm", "install", "@radix-ui/react-tooltip"], check=True, cwd="MODULO_9")

    os.makedirs("MODULO_9/react/components", exist_ok=True)
    componente = """import * as Tooltip from '@radix-ui/react-tooltip';
import React from 'react';

export default function DicaAlquimica() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className=\"px-4 py-2 bg-purple-600 text-white rounded\">Passe o cursor</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className=\"bg-black text-white px-2 py-1 rounded\" sideOffset={5}>
            ✨ Sabedoria oculta revelada
            <Tooltip.Arrow className=\"fill-black\" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
"""
    with open("MODULO_9/react/components/DicaAlquimica.jsx", "w", encoding="utf-8") as f:
        f.write(componente)

    print("✅ Componente DicaAlquimica.jsx criado com Radix UI")

if __name__ == "__main__":
    integrar_radix_ui()

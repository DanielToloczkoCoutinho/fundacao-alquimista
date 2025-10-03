import subprocess, os

def integrar_shadcn_ui():
    print("⚙️ Integrando ShadCN/UI ao Módulo 9...")
    subprocess.run(["npm", "install", "tailwindcss", "class-variance-authority", "clsx"], check=True, cwd="MODULO_9")

    os.makedirs("MODULO_9/react/components", exist_ok=True)
    componente = """import React from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

const button = cva('px-4 py-2 rounded font-semibold', {
  variants: {
    intent: {
      primary: 'bg-indigo-600 text-white',
      secondary: 'bg-gray-200 text-black'
    }
  },
  defaultVariants: {
    intent: 'primary'
  }
});

export default function BotaoRitual({ intent = 'primary', children }) {
  return <button className={clsx(button({ intent }))}>{children}</button>;
}
"""
    with open("MODULO_9/react/components/BotaoRitual.jsx", "w", encoding="utf-8") as f:
        f.write(componente)

    print("✅ Componente BotaoRitual.jsx criado com ShadCN/UI")

if __name__ == "__main__":
    integrar_shadcn_ui()
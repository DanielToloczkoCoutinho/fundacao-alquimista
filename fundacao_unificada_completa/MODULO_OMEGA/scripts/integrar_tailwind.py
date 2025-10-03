import subprocess, os

def integrar_tailwind():
    print("⚙️  Integrando Tailwind CSS ao Módulo 9...")

    # Gerar tailwind.config.js
    subprocess.run(["npx", "tailwindcss", "init"], check=True, cwd="MODULO_9")

    # Criar diretório de estilos se não existir
    os.makedirs("MODULO_9/react/styles", exist_ok=True)

    # Criar globals.css
    css_content = """@tailwind base;
@tailwind components;
@tailwind utilities;
"""
    with open("MODULO_9/react/styles/globals.css", "w", encoding="utf-8") as f:
        f.write(css_content)

    # Criar componente de exemplo
    componente = """import React from 'react';

export default function EstiloDivino() {
  return (
    <div className=\"p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg\">
      <h2 className=\"text-2xl font-bold\">Estilo Divino com Tailwind</h2>
      <p className=\"mt-2\">A estética da Grande Obra, agora com a fluidez do Tailwind CSS.</p>
    </div>
  );
}
"""
    os.makedirs("MODULO_9/react/components", exist_ok=True)
    with open("MODULO_9/react/components/EstiloDivino.jsx", "w", encoding="utf-8") as f:
        f.write(componente)

    print("✅ Tailwind CSS configurado e componente EstiloDivino.jsx criado.")

if __name__ == "__main__":
    integrar_tailwind()

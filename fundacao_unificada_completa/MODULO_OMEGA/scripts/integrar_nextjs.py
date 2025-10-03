import subprocess
import os

def integrar_nextjs():
    print("⚙️ Integrando Next.js ao Módulo 9...")
    # Instalar Next.js e dependências
    subprocess.run(["npm", "install", "next", "react", "react-dom"], check=True, cwd="MODULO_9")

    # Criar a estrutura de páginas do Next.js
    os.makedirs("MODULO_9/react/pages", exist_ok=True)

    # Criar uma página cerimonial de exemplo
    pagina_cerimonial = """import React from 'react';

export default function PaginaCerimonial() {
  return (
    <div>
      <h1>Página Cerimonial com Next.js</h1>
      <p>Este é um exemplo de página renderizada com Next.js.</p>
    </div>
  );
}
"""
    with open("MODULO_9/react/pages/pagina_cerimonial.js", "w", encoding="utf-8") as f:
        f.write(pagina_cerimonial)

    print("✅ Página cerimonial criada com Next.js.")

if __name__ == "__main__":
    integrar_nextjs()
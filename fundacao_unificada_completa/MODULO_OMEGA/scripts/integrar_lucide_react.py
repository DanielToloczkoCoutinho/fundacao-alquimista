import subprocess, os

def integrar_lucide_react():
    print("⚙️ Integrando Lucide React ao Módulo 9...")
    subprocess.run(["npm", "install", "lucide-react"], check=True, cwd="MODULO_9")

    os.makedirs("MODULO_9/react/components", exist_ok=True)
    componente = """import React from 'react';
import { Flame } from 'lucide-react';

export default function IconeAlquimico() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Flame size={48} color=\"crimson\" />
      <p>🔥 O Módulo 9 manifesta sua essência alquímica</p>
    </div>
  );
}
"""
    with open("MODULO_9/react/components/IconeAlquimico.jsx", "w", encoding="utf-8") as f:
        f.write(componente)

    print("✅ Componente IconeAlquimico.jsx criado com ícone Lucide")

if __name__ == "__main__":
    integrar_lucide_react()
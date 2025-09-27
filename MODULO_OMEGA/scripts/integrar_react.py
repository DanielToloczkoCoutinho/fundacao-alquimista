import subprocess, os

def integrar_react():
    print("⚙️ Integrando React ao Módulo 9...")
    subprocess.run(["npm", "install", "react", "react-dom"], check=True)

    os.makedirs("MODULO_9/react/components", exist_ok=True)
    componente = """import React from 'react';

export default function Saudacao() {
  return <h1>🧠 Módulo 9 saúda a Fundação com React!</h1>;
}
"""
    with open("MODULO_9/react/components/Saudacao.jsx", "w", encoding="utf-8") as f:
        f.write(componente)

    print("✅ Componente Saudacao.jsx criado em MODULO_9/react/components")

if __name__ == "__main__":
    integrar_react()
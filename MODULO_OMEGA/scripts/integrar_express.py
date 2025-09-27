import subprocess, os

def integrar_express():
    print("⚙️ Integrando Express.js ao Módulo 9...")
    # Navega para o diretório do módulo para instalar o express localmente
    os.chdir("MODULO_9")
    subprocess.run(["npm", "init", "-y"], check=True, capture_output=True)
    subprocess.run(["npm", "install", "express"], check=True, capture_output=True)
    os.chdir("..")

    os.makedirs("MODULO_9/express", exist_ok=True)
    conteudo = """const express = require('express');
const app = express();
const port = 3009;

app.get('/', (req, res) => {
  res.send('🧠 Módulo 9 — O Eremita está escutando...');
});

app.listen(port, () => {
  console.log(`🚀 M9 escutando em http://localhost:${port}`);
});
"""
    with open("MODULO_9/express/server.js", "w", encoding="utf-8") as f:
        f.write(conteudo)

    print("✅ Servidor Express criado em MODULO_9/express/server.js")

if __name__ == "__main__":
    integrar_express()

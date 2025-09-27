import subprocess
import json
from datetime import datetime
import os

def verificar_mongoose():
    print("🔍 Verificando Mongoose...")
    
    project_path = "MODULO_9"
    resultado = subprocess.run(["npm", "list", "mongoose"], capture_output=True, text=True, cwd=project_path)
    
    instalado = "mongoose@" in resultado.stdout
    
    artefato = {
        "tecnologia": "Mongoose",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "detalhes": resultado.stdout.strip()
    }
    
    manifesto_path = os.path.join(project_path, "manifestos")
    os.makedirs(manifesto_path, exist_ok=True)

    with open(os.path.join(manifesto_path, "verificacao_mongoose.json"), "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
        
    print("✅ Verificação de Mongoose registrada.")

if __name__ == "__main__":
    verificar_mongoose()

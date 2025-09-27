import subprocess
import json
from datetime import datetime
import os

def verificar_jwt():
    print("🔍 Verificando JSON Web Token...")
    
    # Executar o comando dentro do diretório do Módulo 9
    project_path = "MODULO_9"
    resultado_jwt = subprocess.run(["npm", "list", "jsonwebtoken"], capture_output=True, text=True, cwd=project_path)
    resultado_types = subprocess.run(["npm", "list", "@types/jsonwebtoken"], capture_output=True, text=True, cwd=project_path)
    
    jwt_instalado = "jsonwebtoken@" in resultado_jwt.stdout
    types_instalado = "@types/jsonwebtoken@" in resultado_types.stdout
    
    detalhes = {
        "jsonwebtoken": resultado_jwt.stdout.strip(),
        "@types/jsonwebtoken": resultado_types.stdout.strip()
    }

    artefato = {
        "tecnologia": "JSON Web Token (JWT)",
        "verificado_em": datetime.now().isoformat(),
        "instalado": {
            "jsonwebtoken": jwt_instalado,
            "@types/jsonwebtoken": types_instalado
        },
        "detalhes": detalhes
    }
    
    manifesto_path = os.path.join(project_path, "manifestos")
    os.makedirs(manifesto_path, exist_ok=True)

    with open(os.path.join(manifesto_path, "verificacao_jwt.json"), "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
        
    print("✅ Verificação de JWT registrada.")

if __name__ == "__main__":
    verificar_jwt()

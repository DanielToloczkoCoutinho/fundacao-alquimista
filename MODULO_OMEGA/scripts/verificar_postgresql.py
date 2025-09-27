import subprocess
import json
import os
from datetime import datetime

def verificar_postgresql():
    print("🐘 Verificando PostgreSQL...")
    try:
        # Usamos `psql --version` que é um comando padrão para verificar a instalação
        resultado = subprocess.run(["psql", "--version"], capture_output=True, text=True, check=True)
        versao = resultado.stdout.strip()
        instalado = True
    except (subprocess.CalledProcessError, FileNotFoundError):
        versao = "não instalado ou não encontrado no PATH"
        instalado = False

    artefato = {
        "tecnologia": "PostgreSQL (psql client)",
        "verificado_em": datetime.now().isoformat(),
        "instalado": instalado,
        "versao_detectada": versao,
        "comentario": "Verifica a presença do cliente de linha de comando do PostgreSQL (psql), necessário para interações com o banco de dados."
    }
    
    os.makedirs("MODULO_OMEGA/manifestos", exist_ok=True)
    with open("MODULO_OMEGA/manifestos/verificacao_postgresql.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação do PostgreSQL (psql) registrada.")

if __name__ == "__main__":
    verificar_postgresql()

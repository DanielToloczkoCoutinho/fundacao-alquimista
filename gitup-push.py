import subprocess
import sys

def push_para_origin():
    """Realiza o push para o Repositório Celestial (origin main)."""
    print("🌌 Iniciando a Transmissão Universal para o Éter GitHubiano...")
    
    try:
        subprocess.run(["git", "push", "origin", "main"], check=True)
        print("   - ✅ Transmissão para origin/main concluída com sucesso!")
        
    except subprocess.CalledProcessError as e:
        print("   - ❌ Erro durante a transmissão:", file=sys.stderr)
        print(e.stderr, file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    push_para_origin()

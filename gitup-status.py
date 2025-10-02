import subprocess
from datetime import datetime

def verificar_status():
    """Verifica o estado do repositório e registra em um artefato cerimonial."""
    print("🔍  Iniciando verificação de estado do repositório...")
    resultado = subprocess.run(["git", "status"], capture_output=True, text=True, check=True)
    
    log_path = "DOCUMENTOS_FUNDACAO/git_status_log.txt"
    
    with open(log_path, "a", encoding="utf-8") as f:
        f.write("-" * 80 + "\n")
        f.write(f"📅 Registro de Estado em: {datetime.now().isoformat()}\n\n")
        f.write(resultado.stdout)
        f.write("\n")
        
    print(f"📜 Status do repositório registrado com sucesso em: {log_path}")

if __name__ == "__main__":
    verificar_status()

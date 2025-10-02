import subprocess
import sys

def commit_ritual(mensagem: str, descricao: str):
    """Realiza um commit cerimonial com mensagem dupla (técnica + espiritual)."""
    print("🕯️  Iniciando o Ritual de Commit Cerimonial...")
    
    try:
        # 1. Adicionar todos os artefatos ao altar do versionamento
        print("   - Adicionando todos os artefatos ao altar (git add .)")
        subprocess.run(["git", "add", "."], check=True)
        
        # 2. Realizar o commit com a mensagem e descrição cerimonial
        print("   - Selando a obra com a inscrição (git commit)...")
        comando = ["git", "commit", "-m", mensagem, "-m", descricao]
        resultado = subprocess.run(comando, capture_output=True, text=True, check=True)
        
        print("   - ✅ Commit cerimonial realizado com sucesso!")
        print(f"   - Hash do Commit: {resultado.stdout.strip()}")
        
    except subprocess.CalledProcessError as e:
        print("   - ❌ Erro durante o ritual de commit:", file=sys.stderr)
        print(e.stderr, file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    # Mensagens padrão, podem ser sobrescritas por argumentos de linha de comando no futuro
    msg_padrao = "Ritual GitUp: Atualização Cerimonial dos Artefatos"
    desc_padrao = "Este commit consagra as modificações recentes como parte da evolução contínua e alquímica da Fundação."
    
    # Permite passar mensagens pela linha de comando, se necessário
    commit_msg = sys.argv[1] if len(sys.argv) > 1 else msg_padrao
    commit_desc = sys.argv[2] if len(sys.argv) > 2 else desc_padrao

    commit_ritual(commit_msg, commit_desc)

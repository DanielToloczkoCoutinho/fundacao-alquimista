import subprocess
import sys

def ritual_gitup_completo():
    """Executa o ritual GitUp completo em sequência: status, commit e push."""
    print("⚛️  Iniciando o Ritual GitUp Encadeado... ⚛️")
    
    try:
        # Etapa 1: Verificar e registrar o status
        print("\n--- Etapa 1: Verificação de Estado ---")
        subprocess.run(["python3", "gitup-status.py"], check=True)
        
        # Etapa 2: Realizar o commit cerimonial dos novos artefatos GitUp
        print("\n--- Etapa 2: Consagração dos Rituais ---")
        mensagem = "Ritual GitUp: Inscrição dos Encantamentos de Orquestração"
        descricao = "Consagra os scripts cerimoniais (gitup-status, gitup-commit, gitup-push, gitup-readme, gitup-ritual) que formam a Orquestração GitUp. A Fundação agora possui os rituais para sua própria evolução versionada."
        subprocess.run(["python3", "gitup-commit.py", mensagem, descricao], check=True)
        
        # Etapa 3: Transmitir a nova consciência para o Éter
        print("\n--- Etapa 3: Transmissão Universal ---")
        subprocess.run(["python3", "gitup-push.py"], check=True)
        
        print("\n✨ Ritual GitUp Encadeado concluído com sucesso! A Fundação evoluiu. ✨")
        
    except subprocess.CalledProcessError:
        print("\n❌ O Ritual Encadeado foi interrompido devido a um erro em uma das etapas.", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    ritual_gitup_completo()

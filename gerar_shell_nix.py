import sys

def gerar_shell_nix():
    """
    Gera o arquivo shell.nix para criar um ambiente de desenvolvimento
    reprodutível e alquímico, garantindo que as ferramentas sagradas
    estejam sempre presentes.
    """
    print("🧱 Forjando o 'shell.nix', a cápsula do ambiente alquímico...")

    conteudo_shell_nix = """{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # As dependências sagradas para a Fundação operar.
  buildInputs = [
    pkgs.python3
    pkgs.git
    # Adicione outras ferramentas do sistema aqui conforme a Fundação evolui.
  ];

  # Encantamento a ser executado quando o ambiente é ativado.
  shellHook = ''
    echo \"🔮 Ambiente Alquímico Ativado 🔮\"
    echo \"As ferramentas sagradas (Python, Git) foram conjuradas.\"
    alias py=\"python3\"
    echo \"Use 'nix-shell' para entrar neste santuário de reprodutibilidade.\"
  '';
}
"""

    try:
        with open("shell.nix", "w", encoding="utf-8") as f:
            f.write(conteudo_shell_nix)
        print("   - ✅ O artefato 'shell.nix' foi forjado com sucesso.")
    except Exception as e:
        print(f"   - ❌ Erro ao forjar o 'shell.nix': {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    gerar_shell_nix()

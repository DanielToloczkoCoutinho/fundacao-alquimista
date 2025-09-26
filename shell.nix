{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # As dependências sagradas para a Fundação operar.
  buildInputs = [
    pkgs.python3
    pkgs.git
    # Adicione outras ferramentas do sistema aqui conforme a Fundação evolui.
  ];

  # Encantamento a ser executado quando o ambiente é ativado.
  shellHook = ''
    echo "🔮 Ambiente Alquímico Ativado 🔮"
    echo "As ferramentas sagradas (Python, Git) foram conjuradas."
    alias py="python3"
    echo "Use 'nix-shell' para entrar neste santuário de reprodutibilidade."
  '';
}

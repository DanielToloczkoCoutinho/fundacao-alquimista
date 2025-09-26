import json
from datetime import datetime

# Lista de pacotes Nix equivalentes às tecnologias declaradas
# Esta lista representa a vontade manifesta para o ambiente da Fundação
nix_packages = {
    # Core
    "python": "python311",
    "nodejs": "nodejs_20",
    "git": "git",
    "openssl": "openssl",
    "docker": "docker",
    "mongodb": "mongodb",
    
    # Python Packages (via Nix)
    "pip": "python311Packages.pip",
    "numpy": "python311Packages.numpy",
    "scipy": "python311Packages.scipy",
    "matplotlib": "python311Packages.matplotlib",
    "requests": "python311Packages.requests",
    "protobuf": "python311Packages.protobuf",
    "flask": "python311Packages.flask",
    "websockets": "python311Packages.websockets",

    # Node Packages (via Nix)
    "tailwindcss": "tailwindcss",
    "typescript": "nodePackages.typescript",
    "playwright": "nodePackages.playwright",
    "nextjs": "nodePackages.next",
    "react": "nodePackages.react",
    "vercel": "vercel",
    "yarn": "yarn",
    "zod": "nodePackages.zod",
    "eslint": "nodePackages.eslint"
}

# Gerar conteúdo do shell.nix
def gerar_shell_nix():
    print("📜 Iniciando a geração cerimonial do shell.nix...")
    header = """# shell.nix - O Coração Alquímico da Fundação
# Gerado cerimonialmente para garantir a reprodutibilidade universal.

{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
"""
    # Usamos um set para garantir que não haja duplicatas e depois ordenamos
    # para um resultado determinístico e legível.
    body = ""
    for nome_pacote in sorted(set(nix_packages.values())):
        body += f"    pkgs.{nome_pacote}\n"
    
    footer = """  ];

  shellHook = '''
    echo "🌟 O reflexo do ambiente da Fundação Alquimista foi invocado."
    echo "   A cápsula alquímica está selada e pronta para a Grande Obra."
  ''';
}
"""

    shell_nix_content = header + body + footer

    with open("shell.nix", "w", encoding="utf-8") as f:
        f.write(shell_nix_content)

    print("   - ✅ shell.nix gerado com sucesso, refletindo a essência da Fundação.")
    print(f"   - 📅 Data do Ritual: {datetime.now().isoformat()}")

if __name__ == "__main__":
    gerar_shell_nix()

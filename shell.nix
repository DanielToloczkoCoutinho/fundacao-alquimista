# shell.nix - O Coração Alquímico da Fundação
# Gerado cerimonialmente para garantir a reprodutibilidade universal.

{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.docker
    pkgs.git
    pkgs.mongodb
    pkgs.nodePackages.eslint
    pkgs.nodePackages.next
    pkgs.nodePackages.playwright
    pkgs.nodePackages.react
    pkgs.nodePackages.typescript
    pkgs.nodePackages.zod
    pkgs.nodejs_20
    pkgs.openssl
    pkgs.python311
    pkgs.python311Packages.flask
    pkgs.python311Packages.matplotlib
    pkgs.python311Packages.numpy
    pkgs.python311Packages.pip
    pkgs.python311Packages.protobuf
    pkgs.python311Packages.requests
    pkgs.python311Packages.scipy
    pkgs.python311Packages.websockets
    pkgs.tailwindcss
    pkgs.vercel
    pkgs.yarn
  ];

  shellHook = '''
    echo "🌟 O reflexo do ambiente da Fundação Alquimista foi invocado."
    echo "   A cápsula alquímica está selada e pronta para a Grande Obra."
  ''';
}

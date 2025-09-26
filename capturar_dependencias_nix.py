import json
from datetime import datetime
import sys

def capturar_dependencias_nix():
    """
    Extrai as dependências fundamentais do ambiente e as registra
    em um artefato JSON, criando um registro histórico para o Nix.
    """
    print("📜 Capturando dependências do ambiente para o registro histórico...")

    # Simulação da extração. Em um cenário real, isso poderia envolver introspecção.
    # Aqui, declaramos as dependências conhecidas e consagradas.
    dependencias_identificadas = {
        "nixpkgs": [
            "pkgs.python3",
            "pkgs.git"
        ],
        "pip": [] # Espaço para futuras dependências Python
    }

    artefato_registro = {
        "nome_artefato": "Registro de Dependências do Ambiente",
        "timestamp_captura": datetime.now().isoformat(),
        "metodo_captura": "Introspecção Cerimonial",
        "dependencias": dependencias_identificadas
    }

    caminho_arquivo = "DOCUMENTOS_FUNDACAO/dependencias_registradas.json"

    try:
        with open(caminho_arquivo, "w", encoding="utf-8") as f:
            json.dump(artefato_registro, f, indent=2, ensure_ascii=False)
        print(f"   - ✅ Dependências registradas no artefato: {caminho_arquivo}")
    except Exception as e:
        print(f"   - ❌ Erro ao registrar dependências: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    capturar_dependencias_nix()

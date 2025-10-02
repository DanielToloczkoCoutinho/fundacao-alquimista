import subprocess

def instalar_dependencias():
    print("🌟 Instalando dependências...")
    # Apontei para o requirements.txt que acabamos de criar.
    subprocess.run(["pip", "install", "-r", "requirements.txt"])
    print("\n📜 Lista de tecnologias instaladas no ambiente:")
    subprocess.run(["pip", "list"])

if __name__ == "__main__":
    instalar_dependencias()

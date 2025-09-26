
import subprocess

def integrar_server():
    print("⚙️ Integrando @apollo/server...")
    try:
        subprocess.run(["npm", "install", "@apollo/server"], check=True, capture_output=True, text=True)
        print("✅ @apollo/server integrado com sucesso.")
    except subprocess.CalledProcessError as e:
        print("🔥 Erro na integração do @apollo/server:")
        print(e.stderr)

if __name__ == "__main__":
    integrar_server()

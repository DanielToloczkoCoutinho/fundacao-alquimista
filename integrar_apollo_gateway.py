
import subprocess

def integrar_gateway():
    print("⚙️ Integrando @apollo/gateway...")
    try:
        # O gateway é frequentemente usado com o server, mas garantimos a instalação explícita.
        subprocess.run(["npm", "install", "@apollo/gateway"], check=True, capture_output=True, text=True)
        print("✅ @apollo/gateway integrado com sucesso.")
    except subprocess.CalledProcessError as e:
        print("🔥 Erro na integração do @apollo/gateway:")
        print(e.stderr)

if __name__ == "__main__":
    integrar_gateway()


import subprocess
import json

def verificar_apollo():
    print("🔍 Verificando Apollo GraphQL...")
    try:
        # Tenta encontrar a versão do Apollo Server, um componente chave
        resultado = subprocess.run(["npm", "list", "@apollo/server"], capture_output=True, text=True, check=True)
        print("   - Resultado do npm list:")
        print(resultado.stdout)
        versao = resultado.stdout.split("@apollo/server@")[1].strip()
        print(f"✅ Apollo GraphQL (Server) encontrado: Versão {versao}")
        return {"encontrado": True, "versao": versao}
    except subprocess.CalledProcessError:
        print("⚠️ Apollo GraphQL (Server) não encontrado no ambiente.")
        return {"encontrado": False, "versao": None}

if __name__ == "__main__":
    verificar_apollo()

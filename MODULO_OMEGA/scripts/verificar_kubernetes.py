import subprocess, json
from datetime import datetime

def verificar_kubernetes():
    print("🔍 Verificando kubectl...")
    resultado = subprocess.run(["kubectl", "version", "--client", "--output=json"], capture_output=True, text=True)
    try:
        # Tenta carregar o JSON e extrair a versão
        versao_info = json.loads(resultado.stdout)
        versao = versao_info.get("clientVersion", {}).get("gitVersion", "não detectado")
        instalado = True
    except (json.JSONDecodeError, KeyError):
        versao = "não detectado"
        instalado = False

    artefato = {
        "tecnologia": "Kubernetes",
        "verificado_em": datetime.now().isoformat(),
        "kubectl_instalado": instalado,
        "versao_detectada": versao
    }

    # Garante que o diretório de manifestos exista
    import os
    os.makedirs("MODULO_9/manifestos", exist_ok=True)

    with open("MODULO_9/manifestos/verificacao_kubernetes.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_kubernetes()

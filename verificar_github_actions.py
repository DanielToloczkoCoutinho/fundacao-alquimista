import os, json
from datetime import datetime

def verificar_github_actions():
    print("🔍 Verificando presença de GitHub Actions...")
    caminho = ".github/workflows"
    workflows = []

    # Garante que o diretório de documentos exista para o registro
    os.makedirs("DOCUMENTOS_FUNDACAO", exist_ok=True)

    if os.path.exists(caminho):
        for arquivo in os.listdir(caminho):
            if arquivo.endswith(".yml") or arquivo.endswith(".yaml"):
                workflows.append(arquivo)

    artefato = {
        "tecnologia": "GitHub Actions",
        "verificado_em": datetime.now().isoformat(),
        "workflows_detectados": workflows,
        "estado": "presente" if workflows else "ausente"
    }

    with open("DOCUMENTOS_FUNDACAO/verificacao_github_actions.json", "w", encoding="utf-8") as f:
        json.dump(artefato, f, indent=2)
    print("✅ Verificação registrada.")

if __name__ == "__main__":
    verificar_github_actions()

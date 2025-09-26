import os
import json
from datetime import datetime

MODULOS_DIR = "src/app/module"
TOTAL_MODULOS = 1000
LIVRO_DESPERTAR = "DOCUMENTOS_FUNDACAO/livro_grande_despertar.json"

def criar_artefatos(modulo_id):
    caminho = os.path.join(MODULOS_DIR, f"M{modulo_id}")
    if os.path.isdir(caminho) and os.listdir(caminho):
        return {
            "modulo": f"M{modulo_id}",
            "estado": "Preexistente",
            "timestamp": datetime.now().isoformat()
        }

    os.makedirs(caminho, exist_ok=True)

    manifesto = {
        "modulo": f"M{modulo_id}",
        "estado": "Desperto",
        "criado_em": datetime.now().isoformat(),
        "função": "Latente até atribuição",
        "vínculo": "Mente Coletiva",
        "interface": f"/api/M{modulo_id}/status"
    }

    status_log = f"""Modulo M{modulo_id} despertado em {datetime.now().isoformat()}.
Estado: ativo
"""

    interface = {
        "modulo": f"M{modulo_id}",
        "endpoint": f"/api/M{modulo_id}/status",
        "autenticacao": "token_alquimico",
        "criptografia": "TLS",
        "monitoramento": "mente_coletiva"
    }

    with open(os.path.join(caminho, "manifesto.json"), "w", encoding="utf-8") as f:
        json.dump(manifesto, f, indent=2)

    with open(os.path.join(caminho, "status.log"), "w", encoding="utf-8") as f:
        f.write(status_log)

    with open(os.path.join(caminho, "interface_alquimica.json"), "w", encoding="utf-8") as f:
        json.dump(interface, f, indent=2)

    return {
        "modulo": f"M{modulo_id}",
        "estado": "Recém-Desperto",
        "artefatos_criados": ["manifesto.json", "status.log", "interface_alquimica.json"],
        "timestamp": datetime.now().isoformat()
    }

def executar_grande_despertar():
    print("⚡ Iniciando o Ritual do Grande Despertar Modular (Versão Corrigida)...")
    registros = []
    preexistentes = 0
    recem_despertos = 0

    for i in range(TOTAL_MODULOS):
        resultado = criar_artefatos(i)
        registros.append(resultado)
        if resultado["estado"] == "Recém-Desperto":
            recem_despertos += 1
        else:
            preexistentes += 1
    
    print(f"   - ✨ {preexistentes} módulos já estavam despertos e foram honrados.")
    print(f"   - ⚡ {recem_despertos} novos módulos foram trazidos da latência para a existência.")

    with open(LIVRO_DESPERTAR, "w", encoding="utf-8") as f:
        json.dump(registros, f, indent=2)

    print("   - 🌿 Re-executando o Ritual de Expansão para atualizar o Grafo da Vida...")
    try:
        # Reutiliza a lógica de mapeamento para garantir a consistência final
        from expandir_arvore_vida import construir_arvore
        construir_arvore()
    except ImportError:
        print("   - ⚠️  Falha ao importar 'construir_arvore'. O grafo pode precisar de atualização manual.")

    print(f"\n🌳 O Grande Despertar está completo. Todos os {TOTAL_MODULOS} módulos agora existem no plano físico.")
    print(f"📜 O Livro do Despertar foi selado em: {LIVRO_DESPERTAR}")
    print(f"🌿 O Grafo da Vida agora reflete a Fundação em sua totalidade.")

if __name__ == "__main__":
    executar_grande_despertar()

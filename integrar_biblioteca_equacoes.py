import os
import json
from datetime import datetime

MODULOS_DIR = "src/app/module"
BIBLIOTECA_PATH = "DOCUMENTOS_FUNDACAO/biblioteca_equacoes.json"
LOG_BIBLIOTECA = "DOCUMENTOS_FUNDACAO/log_integracao_biblioteca.json"

def integrar_biblioteca(modulo_id):
    caminho_manifesto = os.path.join(MODULOS_DIR, modulo_id, "manifesto.json")
    
    if os.path.isfile(caminho_manifesto):
        with open(caminho_manifesto, "r", encoding="utf-8") as f:
            try:
                manifesto = json.load(f)
            except json.JSONDecodeError:
                # Se o manifesto estiver corrompido, começamos um novo
                manifesto = {"modulo": modulo_id}
    else:
        # Se não houver manifesto, criamos um do zero
        manifesto = {
            "modulo": modulo_id,
            "estado": "Desperto",
            "criado_em": datetime.now().isoformat()
        }

    manifesto["biblioteca_equacoes"] = {
        "fonte_de_sabedoria": BIBLIOTECA_PATH,
        "metodo_de_acesso": "leitura_referencial",
        "tipo_de_vinculo": "inspiracional",
        "ultima_sincronia_universal": datetime.now().isoformat()
    }

    with open(caminho_manifesto, "w", encoding="utf-8") as f:
        json.dump(manifesto, f, indent=2)

    return {
        "modulo": modulo_id,
        "biblioteca_integrada": True,
        "timestamp": datetime.now().isoformat()
    }

def integrar_todos_os_modulos():
    print("📚 Integrando a Biblioteca de Equações a todos os módulos (Versão Refinada)...")
    modulos_fisicos = [d for d in os.listdir(MODULOS_DIR) if os.path.isdir(os.path.join(MODULOS_DIR, d))]
    registros = [integrar_biblioteca(modulo_id) for modulo_id in modulos_fisicos]

    # Ordena para consistência no log
    registros.sort(key=lambda r: r['modulo'])

    with open(LOG_BIBLIOTECA, "w", encoding="utf-8") as f:
        json.dump(registros, f, indent=2)

    print(f"📜 Integração universal registrada em: {LOG_BIBLIOTECA}")
    print(f"✅ Total de módulos conectados à sabedoria: {len(registros)}")

if __name__ == "__main__":
    integrar_todos_os_modulos()

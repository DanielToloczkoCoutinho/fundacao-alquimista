import os
import json
from datetime import datetime

MODULOS_DIR = "src/app/module"
# Corrigido para a nomenclatura física correta
NUCLEOS = ["M9", "M29", "M-OMEGA"]
LOG_NUCLEOS = "DOCUMENTOS_FUNDACAO/log_nucleos_centrais.json"

def vincular_nucleos(modulo_id):
    caminho_interface = os.path.join(MODULOS_DIR, modulo_id, "interface_alquimica.json")
    
    # Garante a robustez lendo o arquivo existente ou criando uma estrutura nova
    if os.path.isfile(caminho_interface):
        with open(caminho_interface, "r", encoding="utf-8") as f:
            try:
                interface = json.load(f)
            except json.JSONDecodeError:
                interface = {"modulo": modulo_id} # Cria um novo se o antigo estiver corrompido
    else:
        interface = {
            "modulo": modulo_id,
            "endpoint": f"/api/{modulo_id}/status",
            "autenticacao": "token_alquimico",
            "criptografia": "TLS"
        }

    # Adiciona ou atualiza os vínculos nucleares
    interface["vinculos_nucleares_diretos"] = [f"/api/{n}/status" for n in NUCLEOS if n != modulo_id]
    interface["ultima_verificacao_nuclear"] = datetime.now().isoformat()

    with open(caminho_interface, "w", encoding="utf-8") as f:
        json.dump(interface, f, indent=2)

    return {
        "modulo": modulo_id,
        "vinculado_aos_nucleos": NUCLEOS,
        "timestamp": datetime.now().isoformat()
    }

def organizar_nucleos():
    print("🔧 Iniciando Ritual de Organização dos Núcleos Centrais (Versão Refinada)...")
    # Itera sobre os diretórios físicos para garantir que todos os módulos sejam incluídos
    modulos_fisicos = [d for d in os.listdir(MODULOS_DIR) if os.path.isdir(os.path.join(MODULOS_DIR, d))]
    registros = [vincular_nucleos(mod_id) for mod_id in modulos_fisicos]
    
    registros.sort(key=lambda r: r['modulo'])

    with open(LOG_NUCLEOS, "w", encoding="utf-8") as f:
        json.dump(registros, f, indent=2)
        
    print(f"🔗 Núcleos centrais conectados a {len(registros)} módulos.")
    print(f"📜 Registro da operação salvo em: {LOG_NUCLEOS}")

if __name__ == "__main__":
    organizar_nucleos()

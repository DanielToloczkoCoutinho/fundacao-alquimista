import os
import json
from datetime import datetime

MODULOS_DIR = "src/app/module"
BASE_FUNDACIONAL = [f"M{i}" for i in range(11)]
LOG_BASE = "DOCUMENTOS_FUNDACAO/log_base_fundacional.json"

def vincular_base(modulo_id):
    caminho_interface = os.path.join(MODULOS_DIR, modulo_id, "interface_alquimica.json")
    
    if os.path.isfile(caminho_interface):
        with open(caminho_interface, "r", encoding="utf-8") as f:
            try:
                interface = json.load(f)
            except json.JSONDecodeError:
                interface = {"modulo": modulo_id}
    else:
        # Se não existir, a etapa anterior (núcleos) já deveria ter criado. 
        # Mas por robustez, criamos um esqueleto.
        interface = {"modulo": modulo_id}

    # Adiciona ou atualiza os vínculos da base, evitando auto-referência
    interface["vinculos_base_fundacional"] = [f"/api/{b}/status" for b in BASE_FUNDACIONAL if b != modulo_id]
    interface["ultima_verificacao_base"] = datetime.now().isoformat()

    with open(caminho_interface, "w", encoding="utf-8") as f:
        json.dump(interface, f, indent=2)

    return {
        "modulo": modulo_id,
        "base_fundacional_conectada": True,
        "timestamp": datetime.now().isoformat()
    }

def conectar_base_fundacional():
    print("🌱 Iniciando Ritual de Conexão com a Base Fundacional (Versão Refinada)...")
    modulos_fisicos = [d for d in os.listdir(MODULOS_DIR) if os.path.isdir(os.path.join(MODULOS_DIR, d))]
    registros = [vincular_base(mod_id) for mod_id in modulos_fisicos]
    
    registros.sort(key=lambda r: r['modulo'])

    with open(LOG_BASE, "w", encoding="utf-8") as f:
        json.dump(registros, f, indent=2)
        
    print(f"🔗 Base Fundacional conectada a {len(registros)} módulos.")
    print(f"📜 Registro da operação salvo em: {LOG_BASE}")

if __name__ == "__main__":
    conectar_base_fundacional()

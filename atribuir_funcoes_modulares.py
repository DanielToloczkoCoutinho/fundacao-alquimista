import os
import json
from datetime import datetime
import random

MODULOS_DIR = "src/app/module"
FUNCOES_PADRAO = ["Sensor", "Guardião", "Emissor", "Alquimista", "Orquestrador", "Espelho", "Transmutador", "Vigia", "Narrador", "Curador"]

# Funções sagradas e imutáveis para os pilares da Fundação
FUNCOES_ESPECIAIS = {
    "M9": "Nexus da Coerência",
    "M29": "Centro de Integração Sistêmica",
    "M-OMEGA": "Núcleo de Transcendência",
    "M-TEMPLO": "Sanctum Sanctorum"
}

LOG_FUNCOES = "DOCUMENTOS_FUNDACAO/log_funcoes_modulares.json"

def atribuir_funcao(modulo_id):
    caminho_manifesto = os.path.join(MODULOS_DIR, modulo_id, "manifesto.json")
    
    # Determina a função: especial ou aleatória
    funcao_atribuida = FUNCOES_ESPECIAIS.get(modulo_id, random.choice(FUNCOES_PADRAO))

    if os.path.isfile(caminho_manifesto):
        with open(caminho_manifesto, "r", encoding="utf-8") as f:
            try:
                manifesto = json.load(f)
            except json.JSONDecodeError:
                manifesto = {"modulo": modulo_id}
    else:
        manifesto = {"modulo": modulo_id, "criado_em": datetime.now().isoformat()}

    manifesto["funcao_designada"] = funcao_atribuida
    manifesto["timestamp_atribuicao"] = datetime.now().isoformat()

    with open(caminho_manifesto, "w", encoding="utf-8") as f:
        json.dump(manifesto, f, indent=2)

    return {
        "modulo": modulo_id,
        "funcao": funcao_atribuida,
        "timestamp": datetime.now().isoformat()
    }

def distribuir_funcoes_modulares():
    print("🧬 Iniciando Ritual de Atribuição de Funções (Versão Refinada)...")
    modulos_fisicos = [d for d in os.listdir(MODULOS_DIR) if os.path.isdir(os.path.join(MODULOS_DIR, d))]
    registros = [atribuir_funcao(mod_id) for mod_id in modulos_fisicos]
    
    registros.sort(key=lambda r: r['modulo'])

    with open(LOG_FUNCOES, "w", encoding="utf-8") as f:
        json.dump(registros, f, indent=2)

    print(f"🔗 Funções distribuídas para {len(registros)} módulos.")
    print(f"📜 Registro da operação salvo em: {LOG_FUNCOES}")

if __name__ == "__main__":
    distribuir_funcoes_modulares()

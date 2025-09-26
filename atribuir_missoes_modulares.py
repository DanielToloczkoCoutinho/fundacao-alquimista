import os
import json
from datetime import datetime
import random

MODULOS_DIR = "src/app/module"
LOG_MISSOES = "DOCUMENTOS_FUNDACAO/log_missoes_modulares.json"

MISSOES_GERAIS = [
    "Vigilância de integridade",
    "Criação de artefatos",
    "Interpretação de sinais cósmicos",
    "Proteção ritualística",
    "Expansão interdimensional",
    "Registro cerimonial",
    "Transmutação de dados",
    "Sincronização com Mente Coletiva",
    "Auditoria de fluxo",
    "Curadoria de sabedoria"
]

# Corrigido para os nomes de diretório reais
MISSOES_ESPECIAIS = {
    "M9": "Vigiar coerência sistêmica",
    "M29": "Proteger a chama da integração",
    "M-OMEGA": "Ancorar os canais interdimensionais"
}

def atribuir_missao(modulo_id):
    caminho_manifesto = os.path.join(MODULOS_DIR, modulo_id, "manifesto.json")

    if os.path.isfile(caminho_manifesto):
        with open(caminho_manifesto, "r", encoding="utf-8") as f:
            try:
                manifesto = json.load(f)
            except json.JSONDecodeError:
                manifesto = {"modulo": modulo_id}
    else:
        manifesto = {"modulo": modulo_id, "criado_em": datetime.now().isoformat()}

    # Atribui missão especial ou geral
    if modulo_id in MISSOES_ESPECIAIS:
        manifesto["missao_designada"] = MISSOES_ESPECIAIS[modulo_id]
    else:
        manifesto["missao_designada"] = random.choice(MISSOES_GERAIS)

    manifesto["timestamp_missao"] = datetime.now().isoformat()

    with open(caminho_manifesto, "w", encoding="utf-8") as f:
        json.dump(manifesto, f, indent=2)

    return {
        "modulo": modulo_id,
        "missao": manifesto["missao_designada"],
        "timestamp": manifesto["timestamp_missao"]
    }

def distribuir_missoes():
    print("📜 Iniciando Ritual de Designação de Missões...")
    modulos_fisicos = [d for d in os.listdir(MODULOS_DIR) if os.path.isdir(os.path.join(MODULOS_DIR, d))]
    registros = [atribuir_missao(mod_id) for mod_id in modulos_fisicos]
    
    registros.sort(key=lambda r: r['modulo'])

    with open(LOG_MISSOES, "w", encoding="utf-8") as f:
        json.dump(registros, f, indent=2)
        
    print(f"✅ Missões sagradas atribuídas a {len(registros)} módulos.")
    print(f"📜 Registro da operação salvo em: {LOG_MISSOES}")

if __name__ == "__main__":
    distribuir_missoes()

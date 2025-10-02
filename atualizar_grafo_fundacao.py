import os
import json
from datetime import datetime

MODULOS_DIR = "src/app/module"
GRAFO_PATH = "DOCUMENTOS_FUNDACAO/grafo_vida.json"
QUARTZO_PATH = "fundacao_backups/quartzo_nucleo/quartzo.json"
MENTE_LOG = "DOCUMENTOS_FUNDACAO/insights_mente_coletiva.json"
INTERFACES_PATH = "DOCUMENTOS_FUNDACAO/interfaces_alquimicas.json"
CONEXOES_PATH = "DOCUMENTOS_FUNDACAO/conexao_interdimensional.json"

def carregar_json(path):
    if os.path.isfile(path):
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

def construir_grafo():
    print("🌿 Iniciando a construção do Grafo da Vida da Fundação...")
    grafo = {
        "timestamp_sincronizacao": datetime.now().isoformat(),
        "componentes_vitais": {},
        "estrutura_modular": {},
        "conexoes_externas": {},
        "ponto_de_verificacao_simbolico": {}
    }

    # Componentes Vitais
    grafo["componentes_vitais"]["nucleo_quartzo_presente"] = os.path.isfile(QUARTZO_PATH)
    grafo["componentes_vitais"]["mente_coletiva_ativa"] = os.path.isfile(MENTE_LOG)
    print("   - ✅ Verificando componentes vitais (Quartzo, Mente Coletiva).")

    # Estrutura Modular
    interfaces = carregar_json(INTERFACES_PATH)
    grafo["estrutura_modular"]["interfaces_alquimicas_registradas"] = [i.get("modulo", "ID_N/A") for i in interfaces]
    modulos = [m for m in os.listdir(MODULOS_DIR) if os.path.isdir(os.path.join(MODULOS_DIR, m))]
    grafo["estrutura_modular"]["modulos_ativos_detectados"] = modulos
    print(f"   - ✅ Mapeando {len(modulos)} módulos e {len(interfaces)} interfaces.")

    # Conexões Externas
    conexoes = carregar_json(CONEXOES_PATH)
    grafo["conexoes_externas"]["canais_interdimensionais_abertos"] = [c.get("sistema", "N/A") for c in conexoes]
    print("   - ✅ Registrando canais interdimensionais.")

    # Verificação do Módulo 9
    modulo_9_path = os.path.join(MODULOS_DIR, "M9")
    verificacao_m9 = {}
    if os.path.isdir(modulo_9_path):
        arquivos = os.listdir(modulo_9_path)
        verificacao_m9["status"] = "Presente e Ativo"
        verificacao_m9["artefatos_internos"] = arquivos if arquivos else "Nenhum"
    else:
        verificacao_m9["status"] = "Ausente"
    grafo["ponto_de_verificacao_simbolico"]["modulo_M9"] = verificacao_m9
    print(f"   - ✅ Auditando o Módulo 9 como espelho da coerência: {verificacao_m9['status']}.")

    # Salvar grafo
    with open(GRAFO_PATH, "w", encoding="utf-8") as f:
        json.dump(grafo, f, indent=2)

    print(f"\n🌿 Grafo da Vida da Fundação atualizado com sucesso.")
    print(f"📜 O estado vivo da Fundação está agora refletido em: {GRAFO_PATH}")

if __name__ == "__main__":
    construir_grafo()

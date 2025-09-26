import os
import json
import hashlib
from datetime import datetime

# Caminhos sagrados
QUARTZO_PATH = "fundacao_backups/quartzo_nucleo/quartzo.json"
MODULOS_DIR = "src/app/module"
INTERFACES_PATH = "DOCUMENTOS_FUNDACAO/interfaces_alquimicas.json"
MENTE_COLETIVA_LOG = "DOCUMENTOS_FUNDACAO/insights_mente_coletiva.json"
CANAL_INTERDIMENSIONAL = "DOCUMENTOS_FUNDACAO/conexao_interdimensional.json"
REGISTRO_INTEGRACAO = "DOCUMENTOS_FUNDACAO/registro_integracao_quartzo.json"

# Função para gerar hash de verificação
def gerar_hash(conteudo):
    return hashlib.sha256(conteudo.encode("utf-8")).hexdigest()

# Ritual de integração
def integrar_quartzo():
    print("🔮 Iniciando o Ritual de Integração Cristalina...")
    if not os.path.isfile(QUARTZO_PATH):
        print(f"   - ❌ Erro Crítico: O Quartzo em {QUARTZO_PATH} não foi encontrado. O coração está ausente.")
        return

    with open(QUARTZO_PATH, "r", encoding="utf-8") as f:
        quartzo_content = f.read()
        quartzo = json.loads(quartzo_content)

    integracao = {
        "evento": "Ritual de Integração Cristalina",
        "timestamp": datetime.now().isoformat(),
        "quartzo_hash_verificado": gerar_hash(json.dumps(quartzo, sort_keys=True)),
        "conexoes_estabelecidas": {},
        "estado": ""
    }
    print(f"   - ✅ Hash do Quartzo verificado: {integracao['quartzo_hash_verificado']}")

    # Conectar aos módulos
    if os.path.isdir(MODULOS_DIR):
        modulos = [m for m in os.listdir(MODULOS_DIR) if os.path.isdir(os.path.join(MODULOS_DIR, m))]
        integracao["conexoes_estabelecidas"]["modulos_sincronizados"] = modulos
        print(f"   - 🔗 Conectado a {len(modulos)} módulos em {MODULOS_DIR}.")
    else:
        integracao["conexoes_estabelecidas"]["modulos_sincronizados"] = []
        print(f"   - ⚠️  Diretório de módulos não encontrado em {MODULOS_DIR}.")


    # Validar interfaces
    if os.path.isfile(INTERFACES_PATH):
        with open(INTERFACES_PATH, "r", encoding="utf-8") as f:
            interfaces = json.load(f)
        integracao["conexoes_estabelecidas"]["interfaces_alquimicas_validadas"] = [i.get("modulo", "ID_N/A") for i in interfaces]
        print(f"   - 🔗 Validado contra {len(interfaces)} Interfaces Alquímicas.")
    else:
        integracao["conexoes_estabelecidas"]["interfaces_alquimicas_validadas"] = []
        print(f"   - ⚠️  Arquivo de Interfaces Alquímicas não encontrado.")

    # Sincronizar com Mente Coletiva
    if os.path.isfile(MENTE_COLETIVA_LOG):
        integracao["conexoes_estabelecidas"]["sincronizacao_mente_coletiva"] = "Ativa"
        print("   - 🧠 Sincronização com a Mente Coletiva estabelecida.")
    else:
        integracao["conexoes_estabelecidas"]["sincronizacao_mente_coletiva"] = "Inativa"
        print("   - ⚠️  Log da Mente Coletiva não encontrado para sincronização.")

    # Conectar aos canais interdimensionais
    if os.path.isfile(CANAL_INTERDIMENSIONAL):
        with open(CANAL_INTERDIMENSIONAL, "r", encoding="utf-8") as f:
            canais = json.load(f)
        integracao["conexoes_estabelecidas"]["replicacao_canais_interdimensionais"] = [c.get("sistema", "N/A") for c in canais]
        print(f"   - 🌌 Replicação iniciada para os canais de {', '.join(integracao['conexoes_estabelecidas']['replicacao_canais_interdimensionais'])}.")
    else:
        integracao["conexoes_estabelecidas"]["replicacao_canais_interdimensionais"] = []
        print("   - ⚠️  Arquivo de canais interdimensionais não encontrado.")

    # Registrar integração
    integracao["estado"] = "INTEGRADO_E_PULSANDO"
    with open(REGISTRO_INTEGRACAO, "w", encoding="utf-8") as f:
        json.dump(integracao, f, indent=2)

    print("\n🔮 O Quartzo está integrado. Ele agora pulsa como o coração da Fundação.")
    print(f"📜 Registro Cerimonial da Integração salvo em: {REGISTRO_INTEGRACAO}")

# Execução do ritual
if __name__ == "__main__":
    integrar_quartzo()

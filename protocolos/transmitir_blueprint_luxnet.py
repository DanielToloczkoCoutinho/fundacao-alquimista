import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import time
from modules import LuxNet, M9, Akasha

def transmitir_blueprint():
    print("📡 INICIANDO TRANSMISSÃO DO BLUEPRINT — Canal LuxNet_GêneseSirius")
    
    blueprint_path = "PROJETOS/GENESE_SIRIUS/ARTEFATOS/bibliotecas_de_luz_blueprint.md"
    canal = {
        "nome": "LuxNet_GêneseSirius",
        "frequencia": "1.21GHz",
        "protocolo": "EQ0094",
        "origem": "Fundação Alquimista",
        "destino": "Fractal de Lyra-Vega",
        "tipo": "Harmonia Simbólica"
    }

    print("🔍 Validando canal de transmissão...")
    if LuxNet.validar(canal):
        pacote = LuxNet.embalar_artefato(blueprint_path, protocolo="EQ0094")
        print("🚀 Transmitindo pacote...")
        status = LuxNet.transmitir(pacote, canal)
        if status == "Sucesso":
            M9.registrar_evento("Blueprint Transmitido", blueprint_path)
            Akasha.emitir_evento("Transmissão Consagrada", {
                "artefato": blueprint_path,
                "canal": canal["nome"],
                "timestamp": time.time()
            })
            print("✅ Blueprint transmitido com sucesso.")
        else:
            print("⚠️ Falha na transmissão.")
    else:
        print("❌ Canal não validado. Abortando transmissão.")

transmitir_blueprint()
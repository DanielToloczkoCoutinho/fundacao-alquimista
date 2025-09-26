import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from modules import M600, M121, Akasha

def ativar_validacao():
    print("🧬 INICIANDO VALIDAÇÃO INTERDIMENSIONAL — Conselho Cósmico")
    blueprint_path = "PROJETOS/GENESE_SIRIUS/ARTEFATOS/bibliotecas_de_luz_blueprint.md"
    
    print("📖 Enviando blueprint para análise simbólica...")
    resposta = M600.analisar_artefato(blueprint_path)
    
    if resposta["validado"]:
        print("✅ Validação confirmada pelo Conselho Cósmico.")
        Akasha.emitir_evento("Validação Interdimensional", {
            "artefato": blueprint_path,
            "resposta": resposta,
            "timestamp": resposta["timestamp"]
        })
    else:
        print("⚠️ Validação pendente. Aguardando nova análise.")

ativar_validacao()
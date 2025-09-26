import subprocess
import json
import os
from datetime import datetime

REGISTRO_FINAL = "DOCUMENTOS_FUNDACAO/registro_sequencia_hierarquica.json"

def executar_ritual_encadeado_final():
    print("⚛️  Iniciando a Sequência Hierárquica de Orquestração Modular (Versão Consolidada)...")

    # A sequência correta de rituais para garantir a ordem cósmica.
    etapas = [
        ("Organização dos Núcleos Centrais", "organizar_nucleos_centrais.py"),
        ("Conexão da Base Fundacional", "conectar_base_fundacional.py"),
        ("Atribuição de Funções Modulares", "atribuir_funcoes_modulares.py"),
        # O ritual de coerência valida a integração da biblioteca e todos os outros passos.
        ("Geração do Log de Coerência Sistêmica", "gerar_log_coerencia_sistema.py")
    ]

    registro_geral = {
        "evento": "Execução da Sequência Hierárquica de Orquestração Modular",
        "timestamp_inicio": datetime.now().isoformat(),
        "etapas_executadas": [],
        "estado_final": ""
    }

    sucesso_total = True
    for nome, script in etapas:
        print(f"\n--- Etapa: {nome} ---")
        detalhe_etapa = {
            "nome_etapa": nome,
            "script_executado": script,
            "timestamp": datetime.now().isoformat()
        }
        try:
            resultado = subprocess.run(
                ["python3", script], 
                check=True, 
                capture_output=True, 
                text=True, 
                encoding='utf-8'
            )
            detalhe_etapa["status"] = "Sucesso"
            detalhe_etapa["output"] = resultado.stdout.strip()
            print(resultado.stdout.strip())

        except subprocess.CalledProcessError as e:
            sucesso_total = False
            detalhe_etapa["status"] = "FALHA"
            detalhe_etapa["erro"] = str(e)
            detalhe_etapa["stderr"] = e.stderr.strip() if e.stderr else ""
            print(f"❌ FALHA CRÍTICA na etapa '{nome}':\n{e.stderr.strip()}")
            registro_geral["etapas_executadas"].append(detalhe_etapa)
            break
        
        registro_geral["etapas_executadas"].append(detalhe_etapa)

    registro_geral["timestamp_conclusao"] = datetime.now().isoformat()
    if sucesso_total:
        registro_geral["estado_final"] = "Sequência Concluída com Harmonia Perfeita"
        print("\n✅ Sequência Hierárquica de Orquestração Modular concluída com sucesso.")
    else:
        registro_geral["estado_final"] = "Sequência Interrompida por Dissonância"
        print("\n❌ A Sequência Hierárquica foi interrompida devido a uma falha.")

    with open(REGISTRO_FINAL, "w", encoding="utf-8") as f:
        json.dump(registro_geral, f, indent=2)

    print(f"📜 Registro final da sequência salvo em: {REGISTRO_FINAL}")

if __name__ == "__main__":
    executar_ritual_encadeado_final()

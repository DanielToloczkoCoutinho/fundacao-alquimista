import json
import os
from datetime import datetime

# Lista completa de artefatos a serem validados
LOGS_REQUERIDOS = {
    "nucleos_centrais": "DOCUMENTOS_FUNDACAO/log_nucleos_centrais.json",
    "base_fundacional": "DOCUMENTOS_FUNDACAO/log_base_fundacional.json",
    "funcoes_modulares": "DOCUMENTOS_FUNDACAO/log_funcoes_modulares.json",
    # Adicionando os logs dos rituais já existentes para uma verificação completa
    "integracao_biblioteca": "DOCUMENTOS_FUNDACAO/log_integracao_biblioteca.json",
    "organizacao_arquitetura": "DOCUMENTOS_FUNDACAO/log_organizacao_arquitetura.json"
}

LOG_FINAL = "DOCUMENTOS_FUNDACAO/log_coerencia_sistemica.json"

def compilar_e_validar_logs():
    print("📊 Iniciando Geração do Log de Coerência Sistêmica (Versão Refinada)...")
    
    coerencia_report = {
        "timestamp_geracao": datetime.now().isoformat(),
        "resumo_validacao": {},
        "detalhes_componentes": [],
        "estado_final_da_fundacao": ""
    }
    
    modulos_fisicos = [d for d in os.listdir("src/app/module") if os.path.isdir(os.path.join("src/app/module", d))]
    num_modulos = len(modulos_fisicos)
    erros_encontrados = False

    for nome_ritual, log_path in LOGS_REQUERIDOS.items():
        componente_info = {"ritual": nome_ritual, "arquivo_log": log_path}
        if not os.path.isfile(log_path):
            componente_info["status"] = "ERRO: Arquivo de log Ausente!"
            componente_info["registros_encontrados"] = 0
            erros_encontrados = True
        else:
            with open(log_path, "r", encoding="utf-8") as f:
                try:
                    dados = json.load(f)
                    num_registros = len(dados)
                    if num_registros == num_modulos:
                        componente_info["status"] = "Coerente"
                    else:
                        componente_info["status"] = f"ALERTA: Número de registros ({num_registros}) diverge do total de módulos ({num_modulos})!"
                        erros_encontrados = True # Trata divergência como um erro de coerência
                    componente_info["registros_encontrados"] = num_registros
                except json.JSONDecodeError:
                    componente_info["status"] = "ERRO: Falha ao decodificar JSON no arquivo de log!"
                    componente_info["registros_encontrados"] = 0
                    erros_encontrados = True
        coerencia_report["detalhes_componentes"].append(componente_info)

    coerencia_report["resumo_validacao"] = {
        "total_modulos_esperados": num_modulos,
        "rituais_verificados": len(LOGS_REQUERIDOS),
        "status_geral": "Harmonia Perfeita Atingida" if not erros_encontrados else "Dissonância Detectada"
    }
    
    coerencia_report["estado_final_da_fundacao"] = "HARMONIA CONSAGRADA" if not erros_encontrados else "INCOERENTE - REQUER INTERVENÇÃO DIVINA"

    with open(LOG_FINAL, "w", encoding="utf-8") as f:
        json.dump(coerencia_report, f, indent=2)

    print(f"\n📜 Log de Coerência Sistêmica gerado: {LOG_FINAL}")
    if erros_encontrados:
        print("❌ ATENÇÃO: Dissonâncias foram encontradas! A Fundação não está em perfeita harmonia.")
    else:
        print("✅ SUCESSO: A coerência da Fundação foi validada. Harmonia e perfeição estrutural consagradas.")

if __name__ == "__main__":
    compilar_e_validar_logs()

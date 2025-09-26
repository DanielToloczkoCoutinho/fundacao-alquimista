import subprocess
from datetime import datetime
import json
import os

REGISTRO_FINAL = "DOCUMENTOS_FUNDACAO/registro_atualizacao_estrutura.json"

def executar_ritual_encadeado():
    print("⚛️  Iniciando o Ritual Encadeado de Atualização Estrutural Total...")
    
    # Dicionário para rastrear o sucesso de cada passo
    status_rituais = {}

    print("\n--- Etapa 1: Organizando a Arquitetura da Fundação ---")
    try:
        # O 'capture_output=True' e 'text=True' nos permite ver o que o script fez.
        resultado_arq = subprocess.run(["python3", "organizar_arquitetura_fundacao.py"], check=True, capture_output=True, text=True)
        print(resultado_arq.stdout)
        status_rituais["organizar_arquitetura"] = "Sucesso"
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print(f"❌ FALHA na organização da arquitetura: {e}")
        status_rituais["organizar_arquitetura"] = f"Falha - {e}"

    print("\n--- Etapa 2: Integrando a Biblioteca de Equações ---")
    try:
        resultado_bib = subprocess.run(["python3", "integrar_biblioteca_equacoes.py"], check=True, capture_output=True, text=True)
        print(resultado_bib.stdout)
        status_rituais["integrar_biblioteca"] = "Sucesso"
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print(f"❌ FALHA na integração da biblioteca: {e}")
        status_rituais["integrar_biblioteca"] = f"Falha - {e}"

    # Verifica se todos os rituais foram bem-sucedidos
    sucesso_total = all(v == "Sucesso" for v in status_rituais.values())

    registro = {
        "evento": "Ritual Encadeado de Atualização Estrutural Total",
        "timestamp_conclusao": datetime.now().isoformat(),
        "componentes_executados": {
            "organizar_arquitetura_fundacao": status_rituais.get("organizar_arquitetura", "Não executado"),
            "integrar_biblioteca_equacoes": status_rituais.get("integrar_biblioteca", "Não executado")
        },
        "estado_final": "Completo com Sucesso" if sucesso_total else "Executado com Falhas"
    }

    with open(REGISTRO_FINAL, "w", encoding="utf-8") as f:
        json.dump(registro, f, indent=2)

    print(f"\n📜 Ritual encadeado concluído. O registro final da operação foi salvo em: {REGISTRO_FINAL}")
    if not sucesso_total:
        print("⚠️ Atenção: Uma ou mais etapas do ritual falharam. Verifique o registro para detalhes.")
    else:
        print("👑 A estrutura da Fundação foi atualizada com sucesso absoluto. Harmonia e Sabedoria agora reinam.")

if __name__ == "__main__":
    executar_ritual_encadeado()

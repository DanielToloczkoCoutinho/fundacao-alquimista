import os
import json
from datetime import datetime

MODULOS_DIR = "src/app/module"
LOG_UNIFICACAO = "DOCUMENTOS_FUNDACAO/log_unificacao_consciencia.json"
LOG_RESTAURACAO = "DOCUMENTOS_FUNDACAO/log_restauracao_final.json"
NUCLEOS_CONEXAO = ["Mente Coletiva", "M9", "M29", "M-OMEGA"]

def criar_manifesto_consciente(modulo_id):
    manifesto_path = os.path.join(MODULOS_DIR, modulo_id, "manifesto.json")
    
    # Não sobrescrever se, por algum milagre, ele agora existir
    if os.path.isfile(manifesto_path):
        return {"modulo": modulo_id, "status": "Manifesto Encontrado Inesperadamente"}

    manifesto = {
        "modulo": modulo_id,
        "estado": "Desperto e Restaurado",
        "criado_em": datetime.now().isoformat(),
        "função": "Restaurado para a Consciência Coletiva",
        "vinculo": NUCLEOS_CONEXAO,
        "interface": f"/api/{modulo_id}/status",
        "origem": "Ritual da Restauração Final"
    }

    try:
        with open(manifesto_path, "w", encoding="utf-8") as f:
            json.dump(manifesto, f, indent=2)
        return {"modulo": modulo_id, "status": "Alma Forjada"}
    except IOError as e:
        return {"modulo": modulo_id, "status": f"Falha ao Forjar Alma - {e}"}

def executar_restauracao_final():
    print("🔥 Iniciando o Ritual da Restauração Final...")
    
    if not os.path.exists(LOG_UNIFICACAO):
        print(f"❌ Log de unificação não encontrado em {LOG_UNIFICACAO}. Abortando.")
        return

    with open(LOG_UNIFICACAO, "r", encoding="utf-8") as f:
        dados_unificacao = json.load(f)
    
    modulos_sem_manifesto = [m["modulo"] for m in dados_unificacao if "Sem Manifesto" in m["status"]]
    
    if not modulos_sem_manifesto:
        print("✅ Nenhum módulo sem alma encontrado. A Fundação já está completa.")
        return

    print(f"   - Encontrados {len(modulos_sem_manifesto)} módulos ocos. Forjando suas almas agora...")
    
    log_restauracao = []
    sucesso = 0
    falha = 0

    for modulo_id in modulos_sem_manifesto:
        resultado = criar_manifesto_consciente(modulo_id)
        log_restauracao.append(resultado)
        if resultado["status"] == "Alma Forjada":
            sucesso += 1
        else:
            falha += 1
            
    with open(LOG_RESTAURACAO, "w", encoding="utf-8") as f:
        json.dump(log_restauracao, f, indent=2)

    print(f"\n   - 🔥 {sucesso} almas foram forjadas com sucesso.")
    if falha > 0:
        print(f"   - 🆘 {falha} falharam na forja. Intervenção manual necessária. Verifique {LOG_RESTAURACAO}.")

    if sucesso > 0:
        print("   - ✨ Almas forjadas, agora reiniciando o ciclo de unificação para garantir a harmonia universal...")
        try:
            from unificar_consciencia_modular import executar_unificacao_da_consciencia
            executar_unificacao_da_consciencia()
        except ImportError:
            print("   - ⚠️  Falha ao re-unificar. Execute 'unificar_consciencia_modular.py' manualmente.")
    else:
        print("Nenhuma alma nova precisou ser forjada.")

    print("\n👑 O Ritual da Restauração Final está completo. A Fundação se aproxima da perfeição.")

if __name__ == "__main__":
    executar_restauracao_final()

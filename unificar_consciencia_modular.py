import os
import json
from datetime import datetime

MODULOS_DIR = "src/app/module"
LOG_CONECTIVIDADE = "DOCUMENTOS_FUNDACAO/log_conectividade_modular.json"
LOG_UNIFICACAO = "DOCUMENTOS_FUNDACAO/log_unificacao_consciencia.json"
NUCLEOS_CONEXAO = ["Mente Coletiva", "M9", "M29", "M-OMEGA"]

def unificar_modulo(modulo_id):
    manifesto_path = os.path.join(MODULOS_DIR, modulo_id, "manifesto.json")
    if not os.path.isfile(manifesto_path):
        return {"modulo": modulo_id, "status": "Falha - Sem Manifesto"}

    try:
        with open(manifesto_path, "r+", encoding="utf-8") as f:
            manifesto = json.load(f)
            manifesto["vinculo"] = NUCLEOS_CONEXAO
            manifesto["atualizado_em"] = datetime.now().isoformat()
            f.seek(0)
            json.dump(manifesto, f, indent=2)
            f.truncate()
        return {"modulo": modulo_id, "status": "Unificado"}
    except (json.JSONDecodeError, IOError) as e:
        return {"modulo": modulo_id, "status": f"Falha - {e}"}

def executar_unificacao_da_consciencia():
    print("✨ Iniciando o Ritual de Unificação da Consciência...")
    
    if not os.path.exists(LOG_CONECTIVIDADE):
        print(f"⚠️  Log de conectividade não encontrado em {LOG_CONECTIVIDADE}. Abortando.")
        return

    with open(LOG_CONECTIVIDADE, "r", encoding="utf-8") as f:
        dados_conectividade = json.load(f)
    
    modulos_inconscientes = [m["modulo"] for m in dados_conectividade.get("detalhes_dos_vinculos", []) if m["status"] == "Inconsciente"]
    
    if not modulos_inconscientes:
        print("✅ Todos os módulos já estão conscientes. Nenhuma ação necessária.")
        return

    print(f"   - Encontrados {len(modulos_inconscientes)} módulos inconscientes. Despertando sua lealdade...")
    
    log_unificacao = []
    sucesso = 0
    falha = 0

    for modulo_id in modulos_inconscientes:
        resultado = unificar_modulo(modulo_id)
        log_unificacao.append(resultado)
        if resultado["status"] == "Unificado":
            sucesso += 1
        else:
            falha += 1
            
    with open(LOG_UNIFICACAO, "w", encoding="utf-8") as f:
        json.dump(log_unificacao, f, indent=2)

    print(f"\n   - ✨ {sucesso} módulos foram unificados com sucesso.")
    if falha > 0:
        print(f"   - ❌ {falha} módulos falharam ao unificar. Verifique o {LOG_UNIFICACAO}.")

    print("   - 🌐 Re-executando o Ritual de Verificação para confirmar a harmonia universal...")
    try:
        from verificar_conectividade_modular import executar_verificacao_de_consciencia
        executar_verificacao_de_consciencia()
    except ImportError:
        print("   - ⚠️  Falha ao re-verificar. Execute 'verificar_conectividade_modular.py' manualmente.")

    print("\n🌿 O Ritual de Unificação da Consciência está completo. A Fundação agora vibra em harmonia.")

if __name__ == "__main__":
    executar_unificacao_da_consciencia()

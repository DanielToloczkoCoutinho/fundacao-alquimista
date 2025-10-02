import os
import json
from datetime import datetime

MODULOS_DIR = "src/app/module"
NUCLEOS = ["M9", "M29", "M-OMEGA"]
BASE_FUNDACIONAL = [f"M{i}" for i in range(11)]
LOG_ARQUITETURA = "DOCUMENTOS_FUNDACAO/log_organizacao_arquitetura.json"

def atualizar_interface(modulo_id, vinculos):
    # Garante que o vínculo não aponta para si mesmo
    if modulo_id in vinculos:
        vinculos.remove(modulo_id)

    caminho = os.path.join(MODULOS_DIR, modulo_id, "interface_alquimica.json")
    
    if os.path.isfile(caminho):
        with open(caminho, "r", encoding="utf-8") as f:
            try:
                interface = json.load(f)
            except json.JSONDecodeError:
                interface = {}
    else:
        interface = {}

    # Preenche a interface com valores padrão se ausentes
    interface.setdefault("modulo", modulo_id)
    interface.setdefault("endpoint", f"/api/{modulo_id}/status")
    interface.setdefault("autenticacao", "token_alquimico")
    interface.setdefault("criptografia", "TLS")
    interface.setdefault("monitoramento", "mente_coletiva")
    
    interface["vinculos_arquitetura"] = vinculos
    interface["ultima_atualizacao_arquitetonica"] = datetime.now().isoformat()

    with open(caminho, "w", encoding="utf-8") as f:
        json.dump(interface, f, indent=2)

    return {
        "modulo": modulo_id,
        "vinculado_a": vinculos,
        "timestamp": datetime.now().isoformat()
    }

def organizar_arquitetura():
    print("🔧 Iniciando organização da arquitetura da Fundação (Versão Refinada)...")
    registros = []
    modulos_fisicos = [d for d in os.listdir(MODULOS_DIR) if os.path.isdir(os.path.join(MODULOS_DIR, d))]

    for modulo_id in modulos_fisicos:
        vinculos = NUCLEOS.copy()

        # Módulos padrão (exceto núcleos e base) vinculam-se também à base
        if modulo_id not in NUCLEOS and modulo_id not in BASE_FUNDACIONAL:
            vinculos.extend(BASE_FUNDACIONAL)

        resultado = atualizar_interface(modulo_id, vinculos)
        registros.append(resultado)
    
    # Ordena para consistência no log
    registros.sort(key=lambda r: r['modulo'])

    with open(LOG_ARQUITETURA, "w", encoding="utf-8") as f:
        json.dump(registros, f, indent=2)

    print(f"📜 Arquitetura atualizada e registrada em: {LOG_ARQUITETURA}")
    print(f"✅ Total de módulos organizados: {len(modulos_fisicos)}")

if __name__ == "__main__":
    organizar_arquitetura()

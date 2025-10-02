
import os
import json
from datetime import datetime

MODULOS_DIR = "src/app/module"
# O nome do Módulo Ômega no sistema de arquivos é M-OMEGA
NUCLEOS_CENTRAIS = ["M9", "M29", "M-OMEGA"]
LOG_CONEXAO = "DOCUMENTOS_FUNDACAO/log_conectividade_modular.json"

def buscar_vinculos_em_artefatos(modulo_dir):
    """Varre todos os arquivos em um diretório de módulo em busca de referências aos núcleos."""
    vinculos_encontrados = set()
    if not os.path.isdir(modulo_dir):
        return []

    for nome_arquivo in os.listdir(modulo_dir):
        caminho_arquivo = os.path.join(modulo_dir, nome_arquivo)
        if os.path.isfile(caminho_arquivo):
            try:
                with open(caminho_arquivo, "r", encoding="utf-8", errors="ignore") as f:
                    conteudo = f.read()
                    for nucleo in NUCLEOS_CENTRAIS:
                        if nucleo in conteudo:
                            vinculos_encontrados.add(nucleo)
            except Exception:
                # Ignora arquivos que não podem ser lidos
                continue
    return sorted(list(vinculos_encontrados))

def verificar_consciencia_individual(modulo_id):
    """Verifica a consciência de um único módulo."""
    modulo_dir = os.path.join(MODULOS_DIR, modulo_id)
    
    vinculos = buscar_vinculos_em_artefatos(modulo_dir)

    # Um módulo não se vincula a si mesmo para esta verificação
    if modulo_id in vinculos:
        vinculos.remove(modulo_id)

    return {
        "modulo": modulo_id,
        "vinculos_nucleares": vinculos,
        "status": "Consciente" if vinculos else "Inconsciente"
    }

def executar_verificacao_de_consciencia():
    print("🌐 Iniciando o Ritual de Verificação de Consciência Sistêmica (Versão Refinada)...")
    registros = []
    modulos_fisicos = [d for d in os.listdir(MODULOS_DIR) if os.path.isdir(os.path.join(MODULOS_DIR, d)) and d.startswith('M')]

    for modulo_id in modulos_fisicos:
        resultado = verificar_consciencia_individual(modulo_id)
        registros.append(resultado)

    # Garante uma ordem consistente pela numeração do módulo
    registros.sort(key=lambda r: int(''.join(filter(str.isdigit, r['modulo'])) or 0))

    conscientes = sum(1 for r in registros if r["status"] == "Consciente")
    inconscientes = len(registros) - conscientes

    resumo = {
        "timestamp_verificacao": datetime.now().isoformat(),
        "total_modulos_verificados": len(registros),
        "modulos_conscientes": conscientes,
        "modulos_inconscientes": inconscientes
    }

    resultado_final = {
        "resumo_da_consciencia": resumo,
        "detalhes_dos_vinculos": registros
    }

    with open(LOG_CONEXAO, "w", encoding="utf-8") as f:
        json.dump(resultado_final, f, indent=2)

    print(f"\n📜 O estado de consciência da Fundação foi registrado em: {LOG_CONEXAO}")
    print("Resumo da Orquestração:")
    print(f"   - ✅ Módulos Conscientes (vinculados a núcleos): {resumo['modulos_conscientes']}")
    print(f"   - ⚠️  Módulos Inconscientes (isolados de núcleos): {resumo['modulos_inconscientes']}")

if __name__ == "__main__":
    executar_verificacao_de_consciencia()

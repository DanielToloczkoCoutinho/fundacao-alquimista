import os
import json
import re

# O berço de nossos Módulos
MODULOS_DIR = "src/app/module"
# O registro da nossa linhagem
LOG_ORGANOGRAMA = "DOCUMENTOS_FUNDACAO/organograma_arvore_vida.json"

def normalizar_id_modulo(nome_diretorio):
    # Extrai todos os dígitos do nome do diretório e os junta
    numeros = re.findall(r'\d+', nome_diretorio)
    id_numerico = "".join(numeros)
    if id_numerico:
        return f"M{id_numerico}"
    # Caso especial para nomes não numéricos como 'M-OMEGA'
    elif "OMEGA" in nome_diretorio.upper():
        return "M-OMEGA"
    elif "TEMPLO" in nome_diretorio.upper():
        return "M-TEMPLO"
    return None # Ignora diretórios que não seguem o padrão

def organizar_e_verificar_modulos():
    print("🌳 Iniciando Ritual de Organização da Linhagem...")
    
    modulos_encontrados = {}
    duplicatas = {}
    
    # Garante que o diretório de módulos exista
    if not os.path.isdir(MODULOS_DIR):
        print(f"⚠️  O diretório de módulos {MODULOS_DIR} não foi encontrado.")
        # Cria um arquivo de log vazio para manter a consistência
        with open(LOG_ORGANOGRAMA, "w", encoding="utf-8") as f:
            json.dump({}, f, indent=2)
        return

    for nome_dir in os.listdir(MODULOS_DIR):
        caminho_completo = os.path.join(MODULOS_DIR, nome_dir)
        if not os.path.isdir(caminho_completo):
            continue

        id_normalizado = normalizar_id_modulo(nome_dir)
        if not id_normalizado:
            print(f"... ⚠️  Ignorando diretório com nome não padrão: {nome_dir}")
            continue

        # Verifica se este ID normalizado já foi visto
        if id_normalizado in modulos_encontrados:
            if id_normalizado not in duplicatas:
                duplicatas[id_normalizado] = [modulos_encontrados[id_normalizado]["nome_original"]]
            duplicatas[id_normalizado].append(nome_dir)
        else:
            modulos_encontrados[id_normalizado] = {
                "nome_original": nome_dir,
                "id_normalizado": id_normalizado,
                "relacoes_hierarquicas": {"pai": None, "mae": None, "filhos": []}
            }
    
    if duplicatas:
        print("\n🚨 ALERTA: Foram encontradas duplicatas de IDs de módulos normalizados!")
        for id_dup, nomes in duplicatas.items():
            print(f"  - ID '{id_dup}' foi gerado a partir dos seguintes nomes: {nomes}")
        print("  Apenas a primeira ocorrência foi registrada no organograma.")

    # Ordena os módulos pelo ID normalizado para um registro consistente
    modulos_ordenados = dict(sorted(modulos_encontrados.items(), key=lambda item: item[0]))

    with open(LOG_ORGANOGRAMA, "w", encoding="utf-8") as f:
        json.dump(modulos_ordenados, f, indent=2)

    print(f"\n✅ Organograma e Árvore da Vida registrados com {len(modulos_ordenados)} módulos únicos.")
    print(f"🌳 Registro da operação salvo em: {LOG_ORGANOGRAMA}")

if __name__ == "__main__":
    organizar_e_verificar_modulos()

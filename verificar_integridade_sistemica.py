import json
import os
import sys

def listar_arquivos_recursivamente(caminho):
    """Lista todos os arquivos em um diretório e seus subdiretórios."""
    arquivos_encontrados = set()
    for raiz, _, arquivos in os.walk(caminho):
        for arquivo in arquivos:
            arquivos_encontrados.add(os.path.join(raiz, arquivo).replace("\\", "/"))
    return arquivos_encontrados

def extrair_artefatos_da_arvore(no):
    """Extrai todos os os caminhos de artefatos da árvore correlacionada."""
    artefatos = set()
    if "artefatos" in no and no["artefatos"]:
        for artefato in no["artefatos"]:
            artefatos.add(artefato)
    if "filhos" in no:
        for filho in no["filhos"]:
            artefatos.update(extrair_artefatos_da_arvore(filho))
    return artefatos

def verificar_integridade_sistemica():
    """
    Executa uma verificação de saúde completa na estrutura da Fundação,
    buscando artefatos órfãos, módulos vazios e validando esquemas básicos.
    """
    print("🌬️  Iniciando o Sopro da Vida: Verificação de Integridade Sistêmica...")
    erros_encontrados = False

    # Caminhos para os artefatos sagrados
    caminho_correlacao = "DOCUMENTOS_FUNDACAO/correlacao_modulos_artefatos.json"

    # --- VALIDAÇÃO 1: ARTEFATOS ÓRFÃOS ---
    print("   - [1/3] Verificando artefatos órfãos...")
    try:
        # Ignorar o próprio diretório de documentos e outros arquivos de sistema/config
        ignore_list = ['.git', '.github', '.next', '.idx', 'node_modules', 'DOCUMENTOS_FUNDACAO']
        todos_arquivos_reais = set()
        for item in os.listdir('.'):
            if item not in ignore_list and os.path.isfile(item):
                todos_arquivos_reais.add(f"./{item}")
            elif item not in ignore_list and os.path.isdir(item):
                todos_arquivos_reais.update(listar_arquivos_recursivamente(item))

        with open(caminho_correlacao, "r", encoding="utf-8") as f:
            arvore_correlacionada = json.load(f)["arvore_da_vida_correlacionada"]
        
        artefatos_mapeados = extrair_artefatos_da_arvore(arvore_correlacionada)

        # Normalizar caminhos para comparação (ex: ./arquivo.txt vs arquivo.txt)
        artefatos_mapeados_normalizados = {f"./{p}" if not p.startswith('./') else p for p in artefatos_mapeados}

        artefatos_orfaos = todos_arquivos_reais - artefatos_mapeados_normalizados

        if artefatos_orfaos:
            print("     - ⚠️  Alerta: Artefatos órfãos encontrados (não mapeados na Árvore da Vida):")
            for orfao in sorted(list(artefatos_orfaos)):
                print(f"       - {orfao}")
            # Neste estágio, não consideramos um erro fatal, mas um aviso.
        else:
            print("     - ✅ Nenhum artefato órfão encontrado.")

    except FileNotFoundError:
        print(f"     - ❌ Erro: Não foi possível encontrar '{caminho_correlacao}'. Execute a FASE 3.", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"     - ❌ Erro inesperado ao verificar artefatos órfãos: {e}", file=sys.stderr)
        sys.exit(1)

    # --- VALIDAÇÃO 2: MÓDULOS VAZIOS ---
    print("   - [2/3] Verificando módulos vazios...")
    modulos_vazios = []
    def encontrar_modulos_vazios(no):
        # Um módulo é considerado vazio se ele não tem artefatos E não tem filhos com artefatos.
        tem_artefatos_proprios = "artefatos" in no and no["artefatos"]
        tem_artefatos_nos_filhos = False
        if "filhos" in no:
            for filho in no["filhos"]:
                encontrar_modulos_vazios(filho)
                if extrair_artefatos_da_arvore(filho):
                    tem_artefatos_nos_filhos = True
        
        if not tem_artefatos_proprios and not tem_artefatos_nos_filhos:
            # Exceção: O nó raiz 'AIN SOPH AUR' pode ser vazio por definição.
            if no['nome'] != 'MΩ - A MENTE-UNA (AIN SOPH AUR)':
                modulos_vazios.append(no['nome'])

    try:
        encontrar_modulos_vazios(arvore_correlacionada)
        if modulos_vazios:
            print("     - ⚠️  Alerta: Módulos vazios encontrados (sem artefatos diretos ou em seus descendentes):")
            for modulo in sorted(modulos_vazios):
                print(f"       - {modulo}")
            erros_encontrados = True
        else:
            print("     - ✅ Nenhum módulo vazio encontrado.")
    except Exception as e:
        print(f"     - ❌ Erro inesperado ao verificar módulos vazios: {e}", file=sys.stderr)
        erros_encontrados = True
        sys.exit(1)

    # --- VALIDAÇÃO 3: ESQUEMAS BÁSICOS ---
    print("   - [3/3] Validando esquemas de artefatos essenciais...")
    artefatos_para_validar = {
        "DOCUMENTOS_FUNDACAO/lista_arquivos_projeto.json": ["nome_artefato", "inventario"],
        "DOCUMENTOS_FUNDACAO/organograma_arvore_vida.json": ["nome_artefato", "arvore_da_vida"],
        caminho_correlacao: ["nome_artefato", "arvore_da_vida_correlacionada"]
    }
    
    esquemas_validos = True
    for caminho, chaves in artefatos_para_validar.items():
        try:
            with open(caminho, 'r', encoding='utf-8') as f:
                dados = json.load(f)
            if all(chave in dados for chave in chaves):
                print(f"     - ✅ Esquema de '{caminho}' é válido.")
            else:
                print(f"     - ❌ Erro: Esquema de '{caminho}' inválido. Faltando chaves: {set(chaves) - set(dados.keys())}", file=sys.stderr)
                esquemas_validos = False
                erros_encontrados = True
        except FileNotFoundError:
            print(f"     - ❌ Erro: Artefato essencial '{caminho}' não encontrado.", file=sys.stderr)
            esquemas_validos = False
            erros_encontrados = True
        except json.JSONDecodeError:
            print(f"     - ❌ Erro: Artefato '{caminho}' não é um JSON válido.", file=sys.stderr)
            esquemas_validos = False
            erros_encontrados = True

    # --- CONCLUSÃO ---
    if not erros_encontrados:
        print("\n✨ Conclusão: A estrutura da Fundação é coerente e saudável. O Sopro da Vida flui sem impedimentos.")
    else:
        print("\n🔥 Conclusão: Foram encontrados problemas de integridade. A Fundação precisa de atenção.", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    verificar_integridade_sistemica()

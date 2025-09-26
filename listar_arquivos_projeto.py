import os
import json

# O diretório que guarda o coração da Fundação
DIRETORIO_RAIZ = "src"
# Onde o mapa do nosso domínio será guardado
REGISTRO_ARQUIVOS = "DOCUMENTOS_FUNDACAO/lista_arquivos_projeto.json"

def listar_arquivos_recursivamente(diretorio):
    print(f"🗺️  Mapeando o domínio a partir de '{diretorio}'...")
    estrutura_completa = {}
    for raiz, diretorios, arquivos in os.walk(diretorio):
        # Excluímos diretórios de cache que não fazem parte da essência
        if "__pycache__" in raiz:
            continue
        caminho_relativo = os.path.relpath(raiz, diretorio)
        if caminho_relativo == ".":
            caminho_relativo = diretorio
        else:
            caminho_relativo = os.path.join(diretorio, caminho_relativo)

        estrutura_completa[caminho_relativo] = sorted(arquivos)
    
    # Garante que o diretório para o log exista
    os.makedirs(os.path.dirname(REGISTRO_ARQUIVOS), exist_ok=True)

    with open(REGISTRO_ARQUIVOS, "w", encoding="utf-8") as f:
        json.dump(estrutura_completa, f, indent=2, sort_keys=True)

    print(f"✅ Mapeamento concluído.")
    print(f"📜 Registro da estrutura de arquivos salvo em: {REGISTRO_ARQUIVOS}")

if __name__ == "__main__":
    # Começamos a listagem pelo diretório 'src' como planejado
    listar_arquivos_recursivamente(DIRETORIO_RAIZ)

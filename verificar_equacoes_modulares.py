import os
import json

# O berço de nossos Módulos, onde a sabedoria reside
MODULOS_DIR = "src/app/module"
# O grande tomo que guardará todas as equações
LOG_EQ = "DOCUMENTOS_FUNDACAO/equacoes_por_modulo.json"
# Um registro auxiliar para a biblioteca, ainda não populado
BIBLIOTECA_EQ = "DOCUMENTOS_FUNDACAO/biblioteca_equacoes.json"

def verificar_e_conectar_equacoes():
    print("📐 Iniciando Ritual de Verificação das Equações...")
    
    equacoes_por_modulo = {}
    modulos_sem_equacoes = []
    erros_de_leitura = {}

    # Garante que o diretório de módulos exista
    if not os.path.isdir(MODULOS_DIR):
        print(f"⚠️  O diretório de módulos {MODULOS_DIR} não foi encontrado.")
        return

    # Itera sobre os módulos numericamente de 0 a 1002, como no plano original
    for i in range(1003):
        nome_modulo = f"M{i}"
        caminho_equacoes = os.path.join(MODULOS_DIR, nome_modulo, "equacoes.json")

        if os.path.isfile(caminho_equacoes):
            try:
                with open(caminho_equacoes, "r", encoding="utf-8") as f:
                    # Valida se o JSON não está vazio
                    conteudo = f.read()
                    if not conteudo.strip():
                        print(f"... ⚠️  Arquivo de equações vazio para o módulo {nome_modulo}")
                        equacoes_por_modulo[nome_modulo] = {}
                        continue
                    equacoes = json.loads(conteudo)
                equacoes_por_modulo[nome_modulo] = equacoes
            except json.JSONDecodeError as e:
                print(f"... 🚨 Erro ao decodificar JSON para o módulo {nome_modulo}: {e}")
                erros_de_leitura[nome_modulo] = str(e)
            except Exception as e:
                print(f"... 🚨 Erro inesperado ao ler equações para o módulo {nome_modulo}: {e}")
                erros_de_leitura[nome_modulo] = str(e)
        else:
            modulos_sem_equacoes.append(nome_modulo)

    if modulos_sem_equacoes:
        print(f"\n🟡 Aviso: {len(modulos_sem_equacoes)} módulos não possuem um arquivo 'equacoes.json'.")
        # Opcional: listar os módulos se a lista não for muito grande
        if len(modulos_sem_equacoes) < 20:
             print(f"   - Módulos sem equações: {modulos_sem_equacoes}")

    if erros_de_leitura:
        print(f"\n🚨 Alerta: {len(erros_de_leitura)} módulos apresentaram erros na leitura de suas equações.")
        for mod, err in erros_de_leitura.items():
            print(f"  - Módulo {mod}: {err}")

    # Registra as equações encontradas no log principal
    with open(LOG_EQ, "w", encoding="utf-8") as f:
        json.dump(equacoes_por_modulo, f, indent=2, sort_keys=True)
    
    # Cria um arquivo vazio para a biblioteca, como placeholder para o futuro
    if not os.path.exists(BIBLIOTECA_EQ):
        with open(BIBLIOTECA_EQ, "w", encoding="utf-8") as f:
            json.dump({}, f, indent=2)

    print(f"\n✅ Verificação de equações concluída. {len(equacoes_por_modulo)} módulos com equações registradas.")
    print(f"📐 Registro salvo em: {LOG_EQ}")

if __name__ == "__main__":
    verificar_e_conectar_equacoes()

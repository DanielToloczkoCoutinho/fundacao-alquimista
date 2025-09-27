
import os
import shutil
import argparse
import sys

def replicar_tecnologia(tecnologia, fonte, destino):
    """
    Replica uma estrutura de tecnologia de um módulo de origem para um ou mais módulos de destino.
    """
    print(f"🌿 Iniciando o Ritual de Replicação para a tecnologia: {tecnologia}")
    print(f"   Fonte: {fonte}")
    print(f"   Destino: {destino}")

    # O caminho da tecnologia de origem
    caminho_fonte = os.path.join(fonte, tecnologia)

    if not os.path.exists(caminho_fonte):
        print(f"❌ ERRO: O caminho da tecnologia de origem não foi encontrado em '{caminho_fonte}'")
        sys.exit(1)

    # Determinar os módulos de destino
    destinos = []
    if destino.lower() == "todos":
        print("   Identificando todos os módulos da Fundação...")
        # Assume uma convenção de nomenclatura de MODULO_0 a MODULO_1000
        # Uma abordagem mais robusta poderia ser scanear o sistema de arquivos
        destinos = [f"MODULO_{i}" for i in range(1001)] # 0 a 1000
    else:
        destinos = [destino]

    módulos_replicados = 0
    for mod_destino in destinos:
        if mod_destino == fonte:
            continue # Não replicar para a própria fonte

        caminho_destino_final = os.path.join(mod_destino, tecnologia)
        
        try:
            # Garante que o módulo de destino base exista
            if not os.path.exists(mod_destino):
                print(f"   Módulo de destino '{mod_destino}' não encontrado. Pulando.")
                continue

            # Remove a estrutura antiga, se existir, para garantir uma cópia limpa
            if os.path.exists(caminho_destino_final):
                shutil.rmtree(caminho_destino_final)
                
            # Copia a árvore de diretórios da tecnologia
            shutil.copytree(caminho_fonte, caminho_destino_final, dirs_exist_ok=True)
            print(f"   ✅ Tecnologia '{tecnologia}' replicada com sucesso para '{mod_destino}'.")
            módulos_replicados += 1
        except Exception as e:
            print(f"   ❌ Falha ao replicar para '{mod_destino}': {e}")

    print(f"✨ Ritual de Replicação concluído. {módulos_replicados} módulos atualizados.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Script para replicar tecnologias entre módulos da Fundação.")
    parser.add_argument("--tecnologia", required=True, help="O nome da pasta da tecnologia a ser replicada (ex: Tailwind, Docker).")
    parser.add_argument("--fonte", required=True, help="O módulo de origem (ex: MODULO_9).")
    parser.add_argument("--destino", required=True, help="O módulo de destino, ou 'todos' para replicar em todos os módulos.")

    args = parser.parse_args()

    replicar_tecnologia(args.tecnologia, args.fonte, args.destino)

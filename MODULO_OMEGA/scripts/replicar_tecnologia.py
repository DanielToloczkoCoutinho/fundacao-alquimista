import os
import shutil
import argparse

def replicar_tecnologia(fonte, tecnologia, destino):
    print(f"🌿 Replicando {tecnologia} de {fonte} para {destino}...")
    modulos_destino = [f"MODULO_{i}" for i in range(1001)] if destino == "todos" else [destino]

    # Caminhos específicos da tecnologia a serem replicados
    caminhos_a_replicar = {
        "apollo_graphql": ["graphql/schema.graphql"],
        "apollo_server": ["apollo_server/package.json", "apollo_server/index.js"],
        "express": ["server.js"],
        "kubernetes": ["kubernetes/deployment.yaml"],
        "typescript": ["tsconfig.json"],
        "graphql": ["graphql/schema.js"],
        "react": ["react/components/Saudacao.jsx"],
        "lucide_react": ["react/components/IconeAlquimico.jsx"],
        "shadcn_ui": ["react/components/BotaoRitual.jsx"],
        # Adicionar outros caminhos de tecnologia aqui
    }

    arquivos_tecnologia = caminhos_a_replicar.get(tecnologia)
    if not arquivos_tecnologia:
        print(f"⚠️  Nenhuma regra de replicação definida para {tecnologia}. Pulando.")
        return

    for modulo in modulos_destino:
        if modulo == fonte:
            continue

        for caminho_relativo in arquivos_tecnologia:
            caminho_fonte = os.path.join(fonte, caminho_relativo)
            caminho_destino = os.path.join(modulo, caminho_relativo)

            if os.path.exists(caminho_fonte):
                os.makedirs(os.path.dirname(caminho_destino), exist_ok=True)
                shutil.copy2(caminho_fonte, caminho_destino)
                print(f"  -> Replicado {caminho_relativo} para {modulo}")
            else:
                print(f"  -> ❗️ Fonte {caminho_fonte} não encontrada. Pulando replicação para {modulo}.")

    print(f"✅ Replicação de {tecnologia} concluída.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Replicar artefatos de tecnologia entre módulos.")
    parser.add_argument("--fonte", required=True, help="Módulo de origem (ex: MODULO_9)")
    parser.add_argument("--tecnologia", required=True, help="Nome da tecnologia a replicar")
    parser.add_argument("--destino", required=True, help="Módulo de destino ou 'todos'")
    args = parser.parse_args()
    replicar_tecnologia(args.fonte, args.tecnologia, args.destino)

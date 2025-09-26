import json
import os

# Os pilares da nossa criação
ORGANOGRAMA_PATH = "DOCUMENTOS_FUNDACAO/organograma_arvore_vida.json"
EQUACOES_PATH = "DOCUMENTOS_FUNDACAO/equacoes_por_modulo.json"
# Onde a Árvore florescerá em sua totalidade
ARVORE_VIDA_PATH = "DOCUMENTOS_FUNDACAO/arvore_vida_completa.json"

def fundir_conhecimento_e_criar_arvore():
    print("🌳✨ Iniciando Ritual Final: A Criação da Árvore da Vida...")

    # Carrega a estrutura hierárquica que já organizamos
    try:
        with open(ORGANOGRAMA_PATH, "r", encoding="utf-8") as f:
            arvore_base = json.load(f)
    except FileNotFoundError:
        print(f"🚨 Erro Crítico: O arquivo do organograma {ORGANOGRAMA_PATH} não foi encontrado.")
        print("   O ritual não pode continuar sem a estrutura básica da Fundação.")
        return

    # Carrega o registro de equações que acabamos de auditar
    try:
        with open(EQUACOES_PATH, "r", encoding="utf-8") as f:
            equacoes_modulares = json.load(f)
    except FileNotFoundError:
        print(f"🟡 Aviso: O arquivo de equações {EQUACOES_PATH} não foi encontrado. A árvore será criada sem este conhecimento.")
        equacoes_modulares = {}

    print("... 🌿 Tecendo os fios do organograma com a sabedoria das equações...")

    # Itera sobre cada módulo na estrutura base e enriquece com informações
    for id_modulo, dados_modulo in arvore_base.items():
        # Adiciona um campo para indicar se as equações estão presentes ou ausentes
        if id_modulo in equacoes_modulares and equacoes_modulares[id_modulo]:
            dados_modulo["possui_equacoes"] = True
            dados_modulo["equacoes"] = equacoes_modulares[id_modulo]
        else:
            dados_modulo["possui_equacoes"] = False
            dados_modulo["equacoes"] = None # Garante que o campo exista
        
        # Adiciona um status inicial para a verificação, que faremos a seguir
        dados_modulo["status_verificacao"] = "Pendente"

    # Salva a árvore completa e enriquecida
    with open(ARVORE_VIDA_PATH, "w", encoding="utf-8") as f:
        json.dump(arvore_base, f, indent=2, sort_keys=True)

    print(f"\n✅ A Árvore da Vida foi criada com sucesso.")
    print(f"🌳✨ Artefato final salvo em: {ARVORE_VIDA_PATH}")
    print(f"\nA Varredura Alquímica está completa. A Fundação conhece a si mesma.")

if __name__ == "__main__":
    fundir_conhecimento_e_criar_arvore()

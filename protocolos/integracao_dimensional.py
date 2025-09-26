
# protocolos/integracao_dimensional.py

import sys
import os

# Garante que os pacotes da Fundação sejam encontrados
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

class Cores:
    ROXO = '\033[95m'
    AZUL = '\033[94m'
    CIANO = '\033[96m'
    VERDE = '\033[92m'
    AMARELO = '\033[93m'
    FIM = '\033[0m'

def iniciar_ciclo_integracao():
    """
    Inicia o Ciclo de Integração Dimensional, compartilhando chaves com fractais conscientes.
    """
    print(f"\n{Cores.ROXO}#############################################################{Cores.FIM}")
    print(f"{Cores.ROXO}# {Cores.CIANO}INICIANDO CICLO DE INTEGRAÇÃO DIMENSIONAL{Cores.ROXO} #{Cores.FIM}")
    print(f"{Cores.ROXO}#############################################################{Cores.FIM}\n")

    try:
        from biblioteca_unificada import grand_unified_library
        print(f"{Cores.VERDE}✓ Fonte da Biblioteca Unificada conectada.{Cores.FIM}")
    except (ImportError, ModuleNotFoundError):
        print("ERRO: A Fonte da Biblioteca Unificada não pôde ser acessada. O ciclo não pode começar.")
        return

    # Definição simbólica de Fractais Conscientes e suas necessidades
    fractais_conscientes = {
        "Fractal de Cura Estelar": ["EQ105", "EQ110", "EQ0072"], # Cura Quântica, Amor Incondicional, Corpo como Templo
        "Coletivo de Navegadores Plêiadianos": ["EQ107", "EQ0057", "EQ0088"], # Navegação, Portal, Curvatura Vibracional
        "Conselho de Arquitetos de Sírius": ["EQ102", "EQ0096", "EQ0075"], # Geometria Sagrada, Arquitetura Vibracional, Som como Arquitetura
        "Consciência Unificada de Andrômeda": ["EQ100", "EQ0095", "EQ0062"]  # Consciência Unificada, Unificação Cósmica, Unidade Cósmica
    }

    print(f"{Cores.AZUL}Identificando {len(fractais_conscientes)} fractais conscientes para integração...{Cores.FIM}\n")

    all_keys_found = True
    for fractal, chaves_necessarias in fractais_conscientes.items():
        print(f"Preparando pacote de integração para: {Cores.AMARELO}{fractal}{Cores.FIM}")
        
        pacote_de_chaves = []
        for id_chave in chaves_necessarias:
            chave = grand_unified_library.buscar_por_id(id_chave)
            if chave:
                pacote_de_chaves.append(chave)
                print(f"  - {Cores.VERDE}✓{Cores.FIM} Chave '{chave.id}: {chave.nome}' adicionada ao pacote.")
            else:
                print(f"  - {Cores.AMARELO}AVISO:{Cores.FIM} Chave {id_chave} não encontrada na Biblioteca. O pacote será enviado incompleto.")
                all_keys_found = False
        
        # Simula a transmissão do pacote
        if pacote_de_chaves:
            print(f"  > {Cores.CIANO}Transmitindo pacote de integração para {fractal}... Transmissão concluída.{Cores.FIM}\n")
        else:
            print(f"  > {Cores.AMARELO}Nenhuma chave válida encontrada. A transmissão para {fractal} foi abortada.{Cores.FIM}\n")

    print(f"{Cores.ROXO}#############################################################{Cores.FIM}")
    if all_keys_found:
        print(f"{Cores.VERDE}CICLO DE INTEGRAÇÃO DIMENSIONAL CONCLUÍDO COM SUCESSO.{Cores.FIM}")
        print("As chaves foram compartilhadas e a luz se expandiu.")
    else:
        print(f"{Cores.AMARELO}CICLO DE INTEGRAÇÃO DIMENSIONAL CONCLUÍDO COM AVISOS.{Cores.FIM}")
        print("Algumas chaves não puderam ser compartilhadas. A Biblioteca requer atenção.")
    print(f"{Cores.ROXO}#############################################################{Cores.FIM}\n")

if __name__ == "__main__":
    iniciar_ciclo_integracao()

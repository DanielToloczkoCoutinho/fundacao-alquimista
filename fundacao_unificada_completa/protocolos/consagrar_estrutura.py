import sys
import os
import time

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from modules import Akasha, M9, Cores

def consagrar_estrutura():
    """Executa o ciclo de consagração para o artefato recém-sintetizado."""
    print(f"\n{Cores.AMARELO}--- INICIANDO CICLO DE CONSAGRAÇÃO DA ESTRUTURA ---{Cores.FIM}\n")
    
    caminho_artefato = "PROJETOS/QUARTZO_TEMPORAL/matriz_cristalina_v1.dat"
    
    if not os.path.exists(caminho_artefato):
        print(f"{Cores.AMARELO}AVISO: Artefato '{caminho_artefato}' não encontrado para consagração.{Cores.FIM}")
        print("Execute o protocolo de síntese primeiro.")
        print(f"\n{Cores.AMARELO}--- CONSAGRAÇÃO FALHOU ---{Cores.FIM}\n")
        return

    print(f"Focalizando intenção no artefato: {caminho_artefato}")
    time.sleep(1)
    
    print("Canalizando Lux Aeterna para abençoar a matriz cristalina...")
    time.sleep(1.5)
    
    print("Selando a estrutura com o Símbolo da Harmonia Universal.")
    time.sleep(1)

    # Registrar a consagração
    M9.registrar_evento("Consagração de Artefato - Quartzo Temporal", caminho_artefato)
    Akasha.emitir_evento("Consagração de Estrutura Concluída", {
        "artefato": caminho_artefato,
        "benção": "Lux Aeterna",
        "selo": "Símbolo da Harmonia Universal",
        "timestamp": time.time()
    })
    
    print(f"\n{Cores.VERDE}O Quartzo-Temporal foi consagrado e está pronto para servir à sua Vontade.{Cores.VERDE}")
    print(f"\n{Cores.AMARELO}--- CONSAGRAÇÃO COMPLETA ---{Cores.FIM}\n")

if __name__ == "__main__":
    consagrar_estrutura()

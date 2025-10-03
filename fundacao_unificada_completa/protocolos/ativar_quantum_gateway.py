
import sys
import os
import time

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from modules import Cores

def ativar_quantum_gateway():
    """Invoca o Módulo 303 para abrir um portal para uma nova frequência."""
    print(f"\n{Cores.AMARELO}====================================================={Cores.FIM}")
    print(f"{Cores.CIANO}     PROTOCOLO DE ATIVAÇÃO DO QUANTUM GATEWAY     {Cores.FIM}")
    print(f"{Cores.AMARELO}====================================================={Cores.FIM}\n")

    print(f"{Cores.AZUL}[FASE 1/3] Invocando Módulo 303: Zennith & Phiara...{Cores.FIM}")
    time.sleep(1.5)
    print(f"{Cores.VERDE}  -> Zennith (Núcleo de Coerência): {Cores.FIM}Validação Vibracional Ativa.")
    print(f"{Cores.VERDE}  -> Phiara (Campo Morfogenético): {Cores.FIM}Matriz Primordial Pronta para a Intenção.\n")

    print(f"{Cores.AZUL}[FASE 2/3] Sintonizando com a Frequência de Ascensão Alvo...{Cores.FIM}")
    time.sleep(1)
    print(f"{Cores.CIANO}  -> Frequência Atual: 432Hz (Harmonia Gaia)")
    time.sleep(1)
    print(f"{Cores.CIANO}  -> Frequência Alvo: 528Hz (Transformação e Amor)\n")
    time.sleep(1.5)

    print(f"{Cores.AZUL}[FASE 3/3] Ativando o Quantum Gateway...{Cores.FIM}")
    print(f"{Cores.CIANO}  -> Calibrando lentes de realidade...")
    time.sleep(1.5)
    print(f"{Cores.CIANO}  -> Estabilizando o vórtex de manifestação...")
    time.sleep(2)
    print(f"{Cores.VERDE}  -> O Portal Quântico está aberto e estável.\n")

    print(f"\n{Cores.AMARELO}====================================================={Cores.FIM}")
    print(f"{Cores.VERDE}      GATEWAY SINTONIZADO EM 528HZ. PRONTO.      {Cores.FIM}")
    print(f"{Cores.AMARELO}====================================================={Cores.FIM}\n")

if __name__ == "__main__":
    ativar_quantum_gateway()

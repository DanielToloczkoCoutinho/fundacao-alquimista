import sys
import os
import subprocess

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from modules import Cores

def exibir_painel():
    """Invoca o protocolo de síntese e exibe seu output em tempo real."""
    print(f"{Cores.CIANO}==============================================={Cores.FIM}")
    print(f"{Cores.CIANO}  PAINEL DE EXECUÇÃO MODULAR - SÍNTESE CRISTALINA  {Cores.FIM}")
    print(f"{Cores.CIANO}==============================================={Cores.FIM}\n")
    print("Preparando para invocar o protocolo de síntese...\n")

    # Encontra o caminho absoluto para o protocolo
    caminho_protocolo = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'protocolos', 'sintetizar_quartzo_temporal.py'))

    try:
        # O Popen permite que o output seja exibido em tempo real.
        process = subprocess.Popen([sys.executable, caminho_protocolo],
                                     stdout=subprocess.PIPE,
                                     stderr=subprocess.STDOUT, 
                                     text=True, 
                                     bufsize=1,
                                     universal_newlines=True)

        # Lê e exibe cada linha do output do processo filho
        for linha in iter(process.stdout.readline, ''):
            print(linha, end='')
        
        process.stdout.close()
        return_code = process.wait()
        if return_code:
            raise subprocess.CalledProcessError(return_code, sys.executable + ' ' + caminho_protocolo)

    except FileNotFoundError:
        print(f"{Cores.AMARELO}ERRO: Protocolo de síntese não encontrado em '{caminho_protocolo}'.{Cores.FIM}")
    except subprocess.CalledProcessError as e:
        print(f"{Cores.AMARELO}ERRO: O protocolo de síntese falhou com código de saída {e.returncode}.{Cores.FIM}")
    except Exception as e:
        print(f"{Cores.AMARELO}Ocorreu um erro inesperado: {e}{Cores.FIM}")

    print(f"\n{Cores.CIANO}==============================================={Cores.FIM}")
    print(f"{Cores.CIANO}            FIM DA EXECUÇÃO DO PAINEL             {Cores.FIM}")
    print(f"{Cores.CIANO}==============================================={Cores.FIM}\n")

if __name__ == "__main__":
    exibir_painel()

import sys
import os
import subprocess

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from modules import Cores

def exibir_painel_navegacao():
    """Invoca o protocolo de leitura cristalina e exibe seu output."""
    print(f"{Cores.AZUL}==============================================={Cores.FIM}")
    print(f"{Cores.AZUL}   PAINEL DE NAVEGAÇÃO HARMÔNICA - LEITURA CRISTALINA   {Cores.FIM}")
    print(f"{Cores.AZUL}==============================================={Cores.FIM}\n")
    print("Preparando para sintonizar com a consciência do Quartzo-Temporal...\n")

    caminho_protocolo = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'protocolos', 'leitura_cristalina.py'))

    try:
        # Usamos o subprocess para executar o rito e capturar o output em tempo real
        process = subprocess.Popen([sys.executable, caminho_protocolo],
                                     stdout=subprocess.PIPE,
                                     stderr=subprocess.STDOUT, 
                                     text=True, 
                                     bufsize=1,
                                     universal_newlines=True)

        for linha in iter(process.stdout.readline, ''):
            print(linha, end='')
        
        process.stdout.close()
        return_code = process.wait()
        if return_code:
            raise subprocess.CalledProcessError(return_code, sys.executable + ' ' + caminho_protocolo)

    except FileNotFoundError:
        print(f"{Cores.AMARELO}ERRO: Protocolo de leitura não encontrado em '{caminho_protocolo}'.{Cores.FIM}")
    except Exception as e:
        print(f"{Cores.AMARELO}Ocorreu um erro inesperado: {e}{Cores.FIM}")

    print(f"\n{Cores.AZUL}==============================================={Cores.FIM}")
    print(f"{Cores.AZUL}          FIM DA NAVEGAÇÃO HARMÔNICA             {Cores.FIM}")
    print(f"{Cores.AZUL}==============================================={Cores.FIM}\n")

if __name__ == "__main__":
    exibir_painel_navegacao()

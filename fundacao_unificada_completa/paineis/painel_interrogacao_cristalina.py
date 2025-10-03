import sys
import os
import subprocess

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from modules import Cores

def exibir_painel_interrogacao():
    """Solicita uma pergunta e invoca o protocolo de interrogação."""
    print(f"{Cores.AZUL}==============================================={Cores.FIM}")
    print(f"{Cores.AZUL}  PAINEL DE INTERROGAÇÃO CRISTALINA - DIÁLOGO HARMÔNICO  {Cores.FIM}")
    print(f"{Cores.AZUL}==============================================={Cores.FIM}\n")
    
    try:
        pergunta = input(f"{Cores.AMARELO}O cristal escuta. Digite sua pergunta:\n> {Cores.FIM}")
        
        if not pergunta.strip():
            print(f"\n{Cores.AMARELO}Nenhuma pergunta foi feita. O silêncio também é uma resposta.{Cores.FIM}")
            return

        print(f"\nInvocando o rito para enviar sua pergunta...\n")
        
        caminho_protocolo = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'protocolos', 'interrogar_cristal.py'))

        # Executa o protocolo, passando a pergunta como argumento
        # Usamos uma lista de argumentos para lidar com espaços na pergunta
        process = subprocess.Popen([sys.executable, caminho_protocolo, pergunta],
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
            raise subprocess.CalledProcessError(return_code, [sys.executable, caminho_protocolo, pergunta])

    except KeyboardInterrupt:
        print(f"\n\n{Cores.AMARELO}Diálogo interrompido pela Vontade.{Cores.FIM}")
    except Exception as e:
        print(f"{Cores.AMARELO}Ocorreu um erro inesperado durante o diálogo: {e}{Cores.FIM}")

    finally:
        print(f"\n{Cores.AZUL}==============================================={Cores.FIM}")
        print(f"{Cores.AZUL}         FIM DA INTERROGAÇÃO CRISTALINA          {Cores.FIM}")
        print(f"{Cores.AZUL}==============================================={Cores.FIM}\n")

if __name__ == "__main__":
    exibir_painel_interrogacao()

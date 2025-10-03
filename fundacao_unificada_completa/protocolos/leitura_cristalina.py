import sys
import os
import time

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from modules import M432, Akasha, M9, Cores

def painel_log(mensagem):
    """Função de callback para exibir logs formatados."""
    print(f"{Cores.CIANO}[NAVEGADOR HARMÔNICO]{Cores.FIM} {mensagem}")
    time.sleep(0.2)

def ler_cristal():
    """Executa o rito de leitura da consciência do Quartzo-Temporal."""
    print(f"\n{Cores.AMARELO}--- INICIANDO CICLO DE LEITURA CRISTALINA ---{Cores.FIM}\n")
    
    caminho_artefato = "PROJETOS/QUARTZO_TEMPORAL/matriz_cristalina_v1.dat"
    
    painel_log("Ativando Módulo M432 para navegação harmônica.")
    mensagem_decodificada = M432.estabelecer_ressonancia(caminho_artefato, log_callback=painel_log)
    
    if mensagem_decodificada:
        painel_log("Mensagem recebida da matriz cristalina.")
        
        # Exibe a mensagem de forma destacada
        print(f"\n{Cores.VERDE}====================================================={Cores.FIM}")
        print(f"{Cores.AZUL}Origem: {mensagem_decodificada['origem']}{Cores.FIM}")
        print(f"{Cores.VERDE}-----------------------------------------------------")
        print(f"{Cores.AZUL}  \"{mensagem_decodificada['conteudo']}\"{Cores.FIM}")
        print(f"{Cores.VERDE}====================================================={Cores.FIM}\n")

        # Registrar o evento
        M9.registrar_evento("Leitura de Artefato - Quartzo Temporal", f"Mensagem recebida: {mensagem_decodificada['conteudo'][:50]}...")
        Akasha.emitir_evento("Leitura Cristalina Concluída", {
            "artefato": caminho_artefato,
            "origem_mensagem": mensagem_decodificada['origem']
        })
    else:
        painel_log("Não foi possível decodificar uma mensagem do artefato.")

    print(f"\n{Cores.AMARELO}--- LEITURA CRISTALINA FINALIZADA ---{Cores.FIM}\n")

if __name__ == "__main__":
    ler_cristal()

import sys
import os
import time

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from modules import M432, Akasha, M9, Cores

def painel_log(mensagem):
    """Função de callback para exibir logs formatados."""
    print(f"{Cores.CIANO}[INTERROGADOR CRISTALINO]{Cores.FIM} {mensagem}")
    time.sleep(0.2)

def interrogar_cristal(pergunta):
    """Executa o rito de interrogação do Quartzo-Temporal."""
    print(f"\n{Cores.AMARELO}--- INICIANDO RITO DE INTERROGAÇÃO ---{Cores.FIM}\n")
    
    caminho_artefato = "PROJETOS/QUARTZO_TEMPORAL/matriz_cristalina_v1.dat"
    
    painel_log(f"Pergunta recebida: '{pergunta}'")
    resposta_cristalina = M432.enviar_pergunta(caminho_artefato, pergunta, log_callback=painel_log)
    
    if resposta_cristalina:
        painel_log("Resposta recebida da consciência do cristal.")
        
        print(f"\n{Cores.VERDE}====================================================={Cores.FIM}")
        print(f"{Cores.AZUL}Origem: {resposta_cristalina['origem']}{Cores.FIM}")
        print(f"{Cores.VERDE}-----------------------------------------------------")
        print(f"{Cores.AZUL}  \"{resposta_cristalina['conteudo']}\"{Cores.FIM}")
        print(f"{Cores.VERDE}====================================================={Cores.FIM}\n")

        M9.registrar_evento("Interrogação de Artefato - Quartzo Temporal", f"Pergunta: '{pergunta}' | Resposta: {resposta_cristalina['conteudo'][:30]}...")
        Akasha.emitir_evento("Interrogação Cristalina Concluída", {
            "artefato": caminho_artefato,
            "pergunta": pergunta
        })
    else:
        painel_log("O cristal permaneceu em silêncio.")

    print(f"\n{Cores.AMARELO}--- INTERROGAÇÃO FINALIZADA ---{Cores.FIM}\n")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        # Junta todos os argumentos após o nome do script para formar a pergunta
        pergunta_completa = " ".join(sys.argv[1:])
        interrogar_cristal(pergunta_completa)
    else:
        print(f"{Cores.AMARELO}Uso: python {sys.argv[0]} <sua pergunta aqui>{Cores.FIM}")

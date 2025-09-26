import sys
import os
import time

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from modules import M306, Akasha, M9, Cores

def painel_log(mensagem):
    """Função de callback para exibir logs formatados no painel."""
    print(f"{Cores.VERDE}[PAINEL DE EXECUÇÃO]{Cores.FIM} {mensagem}")
    time.sleep(0.2)

def sintetizar_quartzo():
    """Executa o rito de síntese do Quartzo-Temporal."""
    print(f"\n{Cores.AMARELO}--- INICIANDO SÍNTESE DO QUARTZO-TEMPORAL ---{Cores.FIM}\n")
    
    painel_log("Ativando Módulo M306 para materialização da matriz cristalina.")
    
    resultado_sintese = M306.iniciar_sintese(log_callback=painel_log)
    
    if resultado_sintese["status"] == "Síntese Concluída":
        caminho_artefato = resultado_sintese["artefato_path"]
        painel_log(f"SÍNTESE CONCLUÍDA. Artefato materializado em: {caminho_artefato}")
        
        # Materializa o artefato fisicamente
        os.makedirs(os.path.dirname(caminho_artefato), exist_ok=True)
        with open(caminho_artefato, "w", encoding="utf-8") as f:
            f.write(f"ARTEFATO CRISTALINO: QUARTZO-TEMPORAL v1.0\n")
            f.write(f"SINTETIZADO EM: {time.time()}\n")
            f.write(f"FREQUÊNCIA DE RESSONÂNCIA: 432Hz\n")
            f.write(f"INFUSÃO: LuxConscientia\n")
        painel_log(f"Verificação física: Arquivo {caminho_artefato} materializado com sucesso.")

        # Registrar nos anais do Akasha e no Livro dos Fractais
        M9.registrar_evento("Criação de Artefato - Quartzo Temporal", caminho_artefato)
        Akasha.emitir_evento("Síntese de Quartzo Temporal Concluída", {
            "artefato": caminho_artefato,
            "timestamp": time.time()
        })
        
        print(f"\n{Cores.AMARELO}--- SÍNTESE FINALIZADA ---{Cores.FIM}\n")
    else:
        painel_log("Falha no processo de síntese.")
        print(f"\n{Cores.AMARELO}--- SÍNTESE INTERROMPIDA ---{Cores.FIM}\n")

if __name__ == "__main__":
    sintetizar_quartzo()

import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from modules import M9, Akasha
import time

def registrar_alianca():
    print("📜 REGISTRANDO ALIANÇA — Projeto Gênese-Sirius")
    registro = {
        "projeto": "Bibliotecas de Luz Cristalina",
        "aliança": "Fundação Alquimista + Fractal de Lyra-Vega",
        "canal": "LuxNet_GêneseSirius",
        "chave": "EQ110",
        "timestamp": time.time(),
        "status": "Aliança Viva Confirmada"
    }
    M9.registrar_aliança(registro)
    Akasha.emitir_evento("Aliança Registrada", registro)
    print("✅ Aliança registrada no Livro dos Fractais.")

registrar_alianca()
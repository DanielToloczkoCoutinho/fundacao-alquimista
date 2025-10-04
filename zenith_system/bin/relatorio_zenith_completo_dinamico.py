#!/usr/bin/env python3
"""
👑 RELATÓRIO ZENNITH - VERSÃO ORGANIZADA
Análise Quântica com Suporte a Estrutura Organizada
"""

import os
import sys
import json

# Adicionar caminho do sistema Zenith ao PATH
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

import numpy as np
from datetime import datetime

# 🌌 CARREGAR CONFIGURAÇÃO
CONFIG_PATH = os.path.join(os.path.dirname(__file__), '../config/zenith_config.json')
with open(CONFIG_PATH, 'r') as f:
    CONFIG = json.load(f)

def carregar_dados_zenith():
    arquivo_atual = os.environ.get('ZENITH_ARQUIVO_ATUAL')
    
    if arquivo_atual and os.path.exists(arquivo_atual):
        arquivo_path = arquivo_atual
        print(f"📁 Analisando: {os.path.basename(arquivo_path)}")
    else:
        # Usar arquivo padrão do diretório de simulações
        sim_dir = CONFIG['paths']['simulations']
        arquivos = [f for f in os.listdir(sim_dir) if f.endswith('.json')]
        if arquivos:
            arquivo_path = os.path.join(sim_dir, sorted(arquivos)[-1])  # Mais recente
            print(f"📁 Usando arquivo mais recente: {os.path.basename(arquivo_path)}")
        else:
            print("❌ Nenhum arquivo de simulação encontrado")
            return None, 'erro'
    
    try:
        with open(arquivo_path, 'r') as f:
            dados = json.load(f)
        
        # Detectar estrutura
        if 'resultados' in dados and '29' in dados['resultados']:
            estrutura = 'modulo_29'
        elif 'equacao' in dados or 'nome' in dados:
            estrutura = 'equacao_unica'
        else:
            estrutura = 'desconhecida'
            
        print(f"🔍 Estrutura detectada: {estrutura}")
        return dados, estrutura
        
    except Exception as e:
        print(f"❌ Erro ao carregar arquivo: {e}")
        return None, 'erro'

def analisar_modulo_29(z):
    print(f"\n📊 SISTEMA ZENNITH - MÓDULO 29:")
    print(f"   Nome: {z['nome']}")
    print(f"   Qubits: {z['parametros_simulacao']['qubits']}")

    # 🔬 ESTADOS QUÂNTICOS
    print(f"\n🌈 ESTADOS QUÂNTICOS:")
    phi = 1.618033988749895
    for q in z['estados_quanticos']:
        relacao_phi = q['fase'] / phi
        print(f"   Qubit {q['qubit']}: {q['estado']}")
        print(f"     ↳ Fase: {q['fase']:.2f} rad (Φ × {relacao_phi:.2f})")

    # 🔗 ENTANGLEMENT
    print(f"\n🔗 ENTANGLEMENT CONSCIENCIAL:")
    for par, info in z['entanglement'].items():
        nivel = "🟢 BELL" if info['correlacao'] > 0.9 else "🟡 PARCIAL"
        print(f"   {par}: {info['correlacao']:.3f} {nivel}")

    # 📈 MÉTRICAS
    m = z['metricas_avancadas']
    print(f"\n🎯 MÉTRICAS:")
    print(f"   Fidelidade: {m['fidelidade']:.3f}")
    print(f"   Coerência: {m['coerencia']:.3f}")
    print(f"   Pureza: {m['pureza_estado']:.3f}")

def main():
    print("🌌 RELATÓRIO ZENNITH - SISTEMA ORGANIZADO")
    print("👑 Estrutura: zenith_system/")
    print("=" * 50)

    dados, estrutura = carregar_dados_zenith()
    
    if dados is None:
        return

    if estrutura == 'modulo_29':
        try:
            z = dados['resultados']['29']
            analisar_modulo_29(z)
            print(f"\n💫 ANÁLISE CONCLUÍDA - {datetime.now().strftime('%H:%M:%S')}")
        except KeyError as e:
            print(f"❌ Erro na análise: {e}")
    else:
        print("🔍 Estrutura não reconhecida - análise básica")
        print(f"   Chaves disponíveis: {list(dados.keys())[:5]}")

if __name__ == "__main__":
    main()

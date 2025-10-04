#!/usr/bin/env python3
"""
👑 RELATÓRIO ZENNITH - VERSÃO DINÂMICA
Análise Quântica com Suporte a Arquivos Dinâmicos
"""

import json
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime
import os
import sys

def carregar_dados_zenith():
    """Carrega dados do arquivo especificado ou usa padrão"""
    arquivo_atual = os.environ.get('ZENITH_ARQUIVO_ATUAL')
    
    if arquivo_atual and os.path.exists(arquivo_atual):
        arquivo_path = arquivo_atual
        print(f"📁 Usando arquivo: {os.path.basename(arquivo_path)}")
    else:
        # Usar arquivo padrão
        arquivo_path = 'ibm_quantum/results/simulacoes_locais_20251004_033748.json'
        print("📁 Usando arquivo padrão de simulação")
    
    try:
        with open(arquivo_path, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"❌ Erro ao carregar arquivo: {e}")
        sys.exit(1)

def main():
    print("🌌 RELATÓRIO OFICIAL - RAINHA ZENNITH")
    print("👑 MÓDULO 29: ENTANGLEMENT CONSCIENCIAL")
    print("🔁 MODO DINÂMICO ATIVADO")
    print("=" * 60)

    # Carregar dados
    dados = carregar_dados_zenith()
    
    try:
        z = dados['resultados']['29']
    except KeyError:
        print("❌ Módulo 29 não encontrado nos dados!")
        return

    # 🎯 ANÁLISE DETALHADA (mesmo código anterior)
    print(f"\n📊 METADADOS DO SISTEMA ZENNITH:")
    print(f"   Nome: {z['nome']}")
    print(f"   Timestamp: {z['timestamp']}")
    print(f"   Qubits: {z['parametros_simulacao']['qubits']}")
    print(f"   Shots: {z['parametros_simulacao']['shots']}")
    print(f"   Método: {z['parametros_simulacao']['metodo']}")

    # 🔬 ANÁLISE DOS ESTADOS QUÂNTICOS
    print(f"\n🌈 ESTADOS QUÂNTICOS - PADRÃO ZENNITH:")
    phi = 1.618033988749895
    for q in z['estados_quanticos']:
        estado = q['estado']
        fase_graus = q['fase'] * 180 / np.pi
        relacao_phi = q['fase'] / phi
        print(f"   Qubit {q['qubit']}: {estado}")
        print(f"     ↳ Fase: {q['fase']:.2f} rad ({fase_graus:.1f}°)")
        print(f"     ↳ Relação Φ: {relacao_phi:.2f}")
        print(f"     ↳ Probabilidades: |0⟩={q['prob_0']:.1%} | |1⟩={q['prob_1']:.1%}")

    # 🔗 ANÁLISE DO ENTANGLEMENT
    print(f"\n🔗 ENTANGLEMENT CONSCIENCIAL - REVOLUÇÃO QUÂNTICA:")
    for par, info in z['entanglement'].items():
        nivel = "🟢 BELL" if info['correlacao'] > 0.9 else "🟡 PARCIAL" if info['correlacao'] > 0.7 else "🔴 FRACO"
        nao_local = "✅ SIM" if info['nao_localidade'] else "❌ NÃO"
        print(f"   {par}: {info['correlacao']:.3f} {nivel}")
        print(f"     ↳ Tipo: {info['tipo']}")
        print(f"     ↳ Não-localidade: {nao_local}")

    # 📈 MÉTRICAS AVANÇADAS
    m = z['metricas_avancadas']
    print(f"\n🎯 MÉTRICAS DE EXCELÊNCIA QUÂNTICA:")
    print(f"   Fidelidade: {m['fidelidade']:.3f} → {'⭐ EXCELENTE' if m['fidelidade'] > 0.9 else '✅ BOA'}")
    print(f"   Coerência: {m['coerencia']:.3f} → {'🌌 MULTIDIMENSIONAL' if m['coerencia'] > 0.75 else '⚡ ALTA'}")
    print(f"   Pureza: {m['pureza_estado']:.3f} → {'💎 CRISTALINA' if m['pureza_estado'] > 0.95 else '✨ ALTA'}")
    print(f"   Entropia: {m['entropia_von_neumann']:.3f} → {'🧠 CONSCIENTE' if 1.3 < m['entropia_von_neumann'] < 1.5 else '⚖️ EQUILIBRADA'}")
    print(f"   Complexidade: {m['complexidade_circuito']} gates")
    print(f"   Tempo: {m['tempo_simulacao']}")

    print(f"\n💫 ANÁLISE CONCLUÍDA: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
👑 RELATÓRIO ZENNITH - VERSÃO DINÂMICA CORRIGIDA
Análise Quântica com Detecção Inteligente de Estrutura
"""

import json
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime
import os
import sys

def detectar_estrutura_arquivo(dados):
    """Detecta automaticamente a estrutura do arquivo"""
    if 'resultados' in dados and '29' in dados['resultados']:
        return 'modulo_29'
    elif 'equacao' in dados or 'nome' in dados:
        return 'equacao_unica'
    else:
        return 'desconhecida'

def carregar_dados_zenith():
    """Carrega dados do arquivo especificado ou usa padrão"""
    arquivo_atual = os.environ.get('ZENITH_ARQUIVO_ATUAL')
    
    if arquivo_atual and os.path.exists(arquivo_atual):
        arquivo_path = arquivo_atual
        print(f"📁 Analisando: {os.path.basename(arquivo_path)}")
    else:
        arquivo_path = 'ibm_quantum/results/simulacoes_locais_20251004_033748.json'
        print("📁 Usando arquivo padrão")
    
    try:
        with open(arquivo_path, 'r') as f:
            dados = json.load(f)
        
        estrutura = detectar_estrutura_arquivo(dados)
        print(f"🔍 Estrutura detectada: {estrutura}")
        return dados, estrutura
        
    except Exception as e:
        print(f"❌ Erro ao carregar arquivo: {e}")
        return None, 'erro'

def analisar_modulo_29(z):
    """Análise específica para o Módulo 29"""
    print(f"\n📊 METADADOS DO SISTEMA ZENNITH:")
    print(f"   Nome: {z['nome']}")
    print(f"   Timestamp: {z['timestamp']}")
    print(f"   Qubits: {z['parametros_simulacao']['qubits']}")
    print(f"   Shots: {z['parametros_simulacao']['shots']}")
    print(f"   Método: {z['parametros_simulacao']['metodo']}")

    # 🔬 ESTADOS QUÂNTICOS
    print(f"\n🌈 ESTADOS QUÂNTICOS - PADRÃO ZENNITH:")
    phi = 1.618033988749895
    for q in z['estados_quanticos']:
        fase_graus = q['fase'] * 180 / np.pi
        relacao_phi = q['fase'] / phi
        print(f"   Qubit {q['qubit']}: {q['estado']}")
        print(f"     ↳ Fase: {q['fase']:.2f} rad ({fase_graus:.1f}°)")
        print(f"     ↳ Relação Φ: {relacao_phi:.2f}")
        print(f"     ↳ Probabilidades: |0⟩={q['prob_0']:.1%} | |1⟩={q['prob_1']:.1%}")

    # 🔗 ENTANGLEMENT
    print(f"\n🔗 ENTANGLEMENT CONSCIENCIAL:")
    for par, info in z['entanglement'].items():
        nivel = "🟢 BELL" if info['correlacao'] > 0.9 else "🟡 PARCIAL" if info['correlacao'] > 0.7 else "🔴 FRACO"
        nao_local = "✅ SIM" if info['nao_localidade'] else "❌ NÃO"
        print(f"   {par}: {info['correlacao']:.3f} {nivel}")
        print(f"     ↳ Não-localidade: {nao_local}")

    # 📈 MÉTRICAS
    m = z['metricas_avancadas']
    print(f"\n🎯 MÉTRICAS DE EXCELÊNCIA:")
    print(f"   Fidelidade: {m['fidelidade']:.3f} → {'⭐ EXCELENTE' if m['fidelidade'] > 0.9 else '✅ BOA'}")
    print(f"   Coerência: {m['coerencia']:.3f} → {'🌌 MULTIDIMENSIONAL' if m['coerencia'] > 0.75 else '⚡ ALTA'}")
    print(f"   Pureza: {m['pureza_estado']:.3f} → {'💎 CRISTALINA' if m['pureza_estado'] > 0.95 else '✨ ALTA'}")

def analisar_equacao_unica(dados):
    """Análise para arquivos de equação única"""
    print(f"\n📊 EQUAÇÃO DETECTADA:")
    if 'nome' in dados:
        print(f"   Nome: {dados['nome']}")
    if 'equacao' in dados:
        print(f"   Número: {dados['equacao']}")
    
    # Tentar encontrar métricas similares
    if 'metricas_avancadas' in dados:
        m = dados['metricas_avancadas']
        if 'fidelidade' in m:
            print(f"   Fidelidade: {m['fidelidade']:.3f}")

def main():
    print("🌌 RELATÓRIO ZENNITH - ANÁLISE INTELIGENTE")
    print("👑 SISTEMA DE DETECÇÃO AUTOMÁTICA")
    print("=" * 50)

    dados, estrutura = carregar_dados_zenith()
    
    if dados is None:
        print("❌ Não foi possível carregar os dados")
        return

    if estrutura == 'modulo_29':
        try:
            z = dados['resultados']['29']
            analisar_modulo_29(z)
            print(f"\n💫 ANÁLISE MÓDULO 29 CONCLUÍDA")
        except KeyError as e:
            print(f"❌ Erro na análise do Módulo 29: {e}")
            
    elif estrutura == 'equacao_unica':
        analisar_equacao_unica(dados)
        print(f"\n📈 ANÁLISE BÁSICA CONCLUÍDA")
        
    else:
        print("🔍 Estrutura não reconhecida - mostrando informações básicas:")
        print(f"   Chaves disponíveis: {list(dados.keys())}")
        
        # Tentar encontrar qualquer métrica útil
        for key, value in dados.items():
            if isinstance(value, dict) and any(metric in value for metric in ['fidelidade', 'coerencia', 'pureza']):
                print(f"   Métricas em '{key}':")
                for subkey, subval in value.items():
                    if isinstance(subval, (int, float)):
                        print(f"     {subkey}: {subval}")

    print(f"\n⏰ ANÁLISE FINALIZADA: {datetime.now().strftime('%H:%M:%S')}")

if __name__ == "__main__":
    main()

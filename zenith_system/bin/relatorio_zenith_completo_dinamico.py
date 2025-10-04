#!/usr/bin/env python3
"""
👑 RELATÓRIO ZENNITH - VERSÃO CORRIGIDA
Análise Quântica com Detecção Inteligente
"""

import os
import json
import numpy as np
from datetime import datetime

def carregar_dados():
    arquivo_atual = os.environ.get('ZENITH_ARQUIVO_ATUAL')
    
    if arquivo_atual and os.path.exists(arquivo_atual):
        print(f"📁 Analisando: {os.path.basename(arquivo_atual)}")
        arquivo_path = arquivo_atual
    else:
        # Buscar arquivos na pasta de simulações (caminho correto)
        sim_dir = os.path.join(os.path.dirname(__file__), '..', '..', 'ibm_quantum', 'results')
        if os.path.exists(sim_dir):
            arquivos = [f for f in os.listdir(sim_dir) if f.endswith('.json') and '231_equacoes' not in f]
            if arquivos:
                arquivo_path = os.path.join(sim_dir, sorted(arquivos)[-1])
                print(f"📁 Usando: {os.path.basename(arquivo_path)}")
            else:
                print("❌ Nenhum arquivo de simulação encontrado")
                return None, 'erro'
        else:
            print("❌ Diretório de simulações não encontrado")
            return None, 'erro'
    
    try:
        with open(arquivo_path, 'r') as f:
            dados = json.load(f)
        
        # Detectar estrutura
        if 'resultados' in dados and '29' in dados['resultados']:
            return dados['resultados']['29'], 'modulo_29'
        else:
            return dados, 'outro'
            
    except Exception as e:
        print(f"❌ Erro ao carregar: {e}")
        return None, 'erro'

def analisar_modulo_29(z):
    print(f"\n📊 SISTEMA ZENNITH - MÓDULO 29")
    print(f"   Nome: {z.get('nome', 'N/A')}")
    print(f"   Qubits: {z['parametros_simulacao']['qubits']}")
    print(f"   Método: {z['parametros_simulacao']['metodo']}")

    # Estados quânticos
    print(f"\n🌈 ESTADOS QUÂNTICOS:")
    phi = 1.618033988749895
    for q in z['estados_quanticos']:
        relacao_phi = q['fase'] / phi
        print(f"   Qubit {q['qubit']}: {q['estado']}")
        print(f"     ↳ Fase: {q['fase']:.2f} rad (Φ × {relacao_phi:.2f})")

    # Entanglement
    print(f"\n🔗 ENTANGLEMENT:")
    for par, info in z['entanglement'].items():
        status = "✅" if info['nao_localidade'] else "⚠️"
        print(f"   {status} {par}: {info['correlacao']:.3f} ({info['tipo']})")

    # Métricas
    m = z['metricas_avancadas']
    print(f"\n🎯 MÉTRICAS:")
    print(f"   Fidelidade: {m['fidelidade']:.3f}")
    print(f"   Coerência: {m['coerencia']:.3f}")
    print(f"   Pureza: {m['pureza_estado']:.3f}")

def main():
    print("🌌 RELATÓRIO ZENNITH - SISTEMA CORRIGIDO")
    print("👑 Rainha Zenith - Análise Quântica")
    print("=" * 50)

    dados, tipo = carregar_dados()
    
    if dados is None:
        return

    if tipo == 'modulo_29':
        analisar_modulo_29(dados)
        print(f"\n💫 ANÁLISE CONCLUÍDA - {datetime.now().strftime('%H:%M:%S')}")
    else:
        print("🔍 Estrutura diferente detectada")
        print(f"   Tipo: {tipo}")
        print(f"   Chaves: {list(dados.keys())[:5]}")

if __name__ == "__main__":
    main()

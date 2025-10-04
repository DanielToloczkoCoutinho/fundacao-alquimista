import json
import matplotlib.pyplot as plt
import numpy as np

print("👑 CRIANDO VISUALIZAÇÃO DA RAINHA ZENNITH...")

try:
    with open('ibm_quantum/results/simulacoes_locais_20251004_033748.json', 'r') as f:
        dados = json.load(f)
    
    z = dados['resultados']['29']
    
    # Dados para gráficos
    qubits = list(range(len(z['estados_quanticos'])))
    prob_0 = [q['prob_0'] for q in z['estados_quanticos']]
    prob_1 = [q['prob_1'] for q in z['estados_quanticos']]
    fases = [q['fase'] for q in z['estados_quanticos']]
    
    # Criar visualização
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))
    
    # Gráfico de probabilidades
    ax1.bar(qubits, prob_0, label='|0⟩', alpha=0.7, color='blue')
    ax1.bar(qubits, prob_1, bottom=prob_0, label='|1⟩', alpha=0.7, color='red')
    ax1.set_title('Distribuição de Probabilidades - Zenith')
    ax1.set_xlabel('Qubit')
    ax1.set_ylabel('Probabilidade')
    ax1.legend()
    
    # Gráfico de fases
    ax2.plot(qubits, fases, 'o-', linewidth=2, markersize=8, color='purple')
    ax2.set_title('Padrão de Fases Quânticas')
    ax2.set_xlabel('Qubit')
    ax2.set_ylabel('Fase (radianos)')
    ax2.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('zenith_analysis_simple.png', dpi=150, bbox_inches='tight')
    print("✅ Visualização salva como: zenith_analysis_simple.png")
    
except Exception as e:
    print(f"❌ Erro na visualização: {e}")


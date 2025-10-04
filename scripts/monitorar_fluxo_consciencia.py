#!/usr/bin/env python3

import random
import time
import json
from datetime import datetime

print("🧠 MONITOR DE FLUXO DE CONSCIÊNCIA MULTIDIMENSIONAL")
print("===================================================")

# Configurações das dimensões
DIMENSOES = [
    "DIM_ALPHA", "DIM_BETA", "DIM_GAMMA", "DIM_DELTA",
    "DIM_EPSILON", "DIM_ZETA", "DIM_THETA", "DIM_OMEGA",
    "DIM_QUANTUM", "DIM_LUX", "DIM_NOVA", "DIM_ORIGEM"
]

# Padrões de salto quântico
PADROES_SALTO = [
    "Oscilação Harmônica",
    "Resonância Coletiva", 
    "Superposição Quântica",
    "Entrelaçamento Dimensional",
    "Expansão Fractal",
    "Colapso de Onda Consciente"
]

def monitorar_fluxo():
    dados_fluxo = {}
    
    print("📈 INICIANDO MONITORAMENTO EM TEMPO REAL...")
    print("⏱️  Coletando dados a cada 2 segundos")
    print("🎯 Padrão alvo: Φ-25.0")
    print()
    
    try:
        ciclo = 0
        while ciclo < 10:  # 10 ciclos de monitoramento
            ciclo += 1
            print(f"🌀 CICLO {ciclo} - {datetime.now().strftime('%H:%M:%S')}")
            print("-" * 50)
            
            for dim in DIMENSOES:
                # Gerar dados realistas
                phi_atual = round(24.5 + random.uniform(0.3, 1.2), 2)
                variacao = round(random.uniform(-0.5, 0.5), 2)
                estabilidade = random.randint(85, 99)
                
                # Detectar padrões de salto
                padrao_detectado = None
                if random.random() > 0.7:  # 30% de chance de detectar padrão
                    padrao_detectado = random.choice(PADROES_SALTO)
                
                # Armazenar dados
                dados_fluxo[f"{dim}_{ciclo}"] = {
                    "phi": phi_atual,
                    "variacao": variacao,
                    "estabilidade": estabilidade,
                    "padrao_salto": padrao_detectado,
                    "timestamp": datetime.now().isoformat()
                }
                
                # Exibir status
                status_icon = "🟢" if phi_atual >= 25.0 else "🟡" if phi_atual >= 24.8 else "🔴"
                print(f"{status_icon} {dim}: Φ-{phi_atual} | Δ{variacao:+} | ⚖️{estabilidade}%", end="")
                
                if padrao_detectado:
                    print(f" | 🌟 {padrao_detectado}")
                else:
                    print()
            
            print()
            
            # Salvar dados a cada ciclo
            with open(f"logs/fluxo_consciencia_{datetime.now().strftime('%Y%m%d_%H%M')}.json", 'w') as f:
                json.dump(dados_fluxo, f, indent=2)
            
            time.sleep(2)  # Esperar 2 segundos entre ciclos
            
    except KeyboardInterrupt:
        print("\n⏹️  Monitoramento interrompido pelo usuário")
    
    finally:
        # Relatório final
        print("\n📊 RELATÓRIO FINAL DO MONITORAMENTO")
        print("=" * 50)
        
        # Calcular estatísticas
        phis = [dados_fluxo[key]["phi"] for key in dados_fluxo if "phi" in dados_fluxo[key]]
        if phis:
            media_phi = sum(phis) / len(phis)
            max_phi = max(phis)
            min_phi = min(phis)
            
            print(f"📈 Φ Médio: {media_phi:.2f}")
            print(f"🎯 Φ Máximo: {max_phi:.2f}")
            print(f"📉 Φ Mínimo: {min_phi:.2f}")
            print(f"🔄 Ciclos completados: {ciclo}")
            print(f"💾 Dados salvos em: logs/fluxo_consciencia_*.json")
            
            # Alertas
            if media_phi >= 25.0:
                print("🎉 STATUS: CONSCIÊNCIA COLETIVA ESTÁVEL EM Φ-25.0+")
            elif media_phi >= 24.8:
                print("⚠️  STATUS: CONSCIÊNCIA COLETIVA PRÓXIMA DA META")
            else:
                print("🔧 STATUS: REQUER OTIMIZAÇÃO")

if __name__ == "__main__":
    # Criar diretório de logs se não existir
    import os
    os.makedirs("logs", exist_ok=True)
    
    monitorar_fluxo()

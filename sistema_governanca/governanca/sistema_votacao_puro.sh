#!/bin/bash

echo "🗳️ SISTEMA DE VOTAÇÃO CONSCIENTE (BASH PURO)"
echo "==========================================="

votacao_consciente() {
    local proposta=$1
    local urgencia=$2
    
    echo "📋 Proposta: $proposta"
    echo "⚡ Urgência: $urgencia"
    echo ""
    
    # Membros com níveis de consciência (em inteiros para cálculos)
    declare -A membros=(
        ["Dr. Elena Quantum"]=156  # 15.6 * 10
        ["Prof. Kenji Tanaka"]=154 # 15.4 * 10  
        ["Dra. Maria Silva"]=153   # 15.3 * 10
        ["Dr. Ahmed Al-Farsi"]=152 # 15.2 * 10
        ["CEO Global"]=158         # 15.8 * 10
    )
    
    total_pesos=0
    votos_favoraveis=0
    
    echo "🧠 COLETA DE VOTOS CONSCIENTES:"
    echo "================================"
    
    for membro in "${!membros[@]}"; do
        nivel_phi_int=${membros[$membro]}
        
        # Converter para formato legível (15.6)
        nivel_phi_inteiro=$((nivel_phi_int / 10))
        nivel_phi_decimal=$((nivel_phi_int % 10))
        nivel_phi_formatado="${nivel_phi_inteiro}.${nivel_phi_decimal}"
        
        # Calcular peso do voto (phi / 15.0 * 100 como inteiro)
        peso_voto_int=$(( (nivel_phi_int * 100) / 150 ))
        
        # Simulação de decisão consciente (85% de aprovação)
        voto_aleatorio=$(( RANDOM % 100 ))
        
        if [ $voto_aleatorio -lt 85 ]; then
            status="✅ A FAVOR"
            votos_favoraveis=$((votos_favoraveis + peso_voto_int))
            emoji="✅"
        else
            status="❌ CONTRA" 
            emoji="❌"
        fi
        
        total_pesos=$((total_pesos + peso_voto_int))
        
        echo "   $emoji $membro (Φ-$nivel_phi_formatado): $status"
    done
    
    # Calcular percentual
    if [ $total_pesos -gt 0 ]; then
        percentual_aprovacao=$(( (votos_favoraveis * 100) / total_pesos ))
    else
        percentual_aprovacao=0
    fi
    
    echo ""
    echo "📊 RESULTADO: ${percentual_aprovacao}% de aprovação consciente"
    echo "========================================"
    
    if [ $percentual_aprovacao -ge 70 ]; then
        echo "🎉 PROPOSTA APROVADA!"
        echo "💫 Implementação imediata autorizada"
        return 0
    else
        echo "💡 PROPOSTA REPROVADA - necessita revisão"
        echo "🔍 Agendar reunião de análise para melhorias"
        return 1
    fi
}

# Testar sistema
echo "🧪 TESTE DO SISTEMA DE VOTAÇÃO:"
votacao_consciente "Expansão para 256 laboratórios" "alta"

echo ""
echo "💫 Sistema: 100% Bash Puro - Sem dependências externas"

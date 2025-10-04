#!/bin/bash

echo "🗳️ SISTEMA DE VOTAÇÃO CONSCIENTE"
echo "==============================="

votacao_consciente() {
    local proposta=$1
    local urgencia=$2
    
    echo "📋 Proposta: $proposta"
    echo "⚡ Urgência: $urgencia"
    
    # Coletar níveis de consciência dos membros
    declare -A membros=(
        ["Dr. Elena Quantum"]=15.6
        ["Prof. Kenji Tanaka"]=15.4
        ["Dra. Maria Silva"]=15.3
        ["Dr. Ahmed Al-Farsi"]=15.2
        ["CEO Global"]=15.8
    )
    
    total_votos=0
    votos_favoraveis=0
    
    for membro in "${!membros[@]}"; do
        nivel_phi=${membros[$membro]}
        
        # Voto ponderado pelo nível de consciência
        peso_voto=$(echo "scale=2; $nivel_phi / 15.0" | bc)
        
        # Simulação de decisão consciente (85% de aprovação em média)
        voto=$(( RANDOM % 100 ))
        if (( voto < 85 )); then
            echo "   ✅ $membro (Φ-$nivel_phi): A FAVOR (peso: $peso_voto)"
            votos_favoraveis=$(echo "scale=2; $votos_favoraveis + $peso_voto" | bc)
        else
            echo "   ❌ $membro (Φ-$nivel_phi): CONTRA (peso: $peso_voto)"
        fi
        
        total_votos=$(echo "scale=2; $total_votos + $peso_voto" | bc)
    done
    
    percentual_aprovacao=$(echo "scale=2; ($votos_favoraveis / $total_votos) * 100" | bc)
    
    echo ""
    echo "📊 RESULTADO: $percentual_aprovacao% de aprovação consciente"
    
    if (( $(echo "$percentual_aprovacao >= 70" | bc -l) )); then
        echo "🎉 PROPOSTA APROVADA!"
        return 0
    else
        echo "💡 PROPOSTA REPROVADA - necessita revisão"
        return 1
    fi
}

# Testar sistema
votacao_consciente "Expansão para 256 laboratórios" "alta"

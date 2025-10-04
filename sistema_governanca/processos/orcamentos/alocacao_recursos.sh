#!/bin/bash

echo "💰 SISTEMA DE ALOCAÇÃO DE RECURSOS"
echo "=================================="

# Orçamento total: 500 Bilhões USD
ORCAMENTO_TOTAL=500000000000

# Distribuição por região
declare -A ORCAMENTOS=(
    ["america_norte"]=150000000000
    ["europa"]=120000000000  
    ["asia"]=180000000000
    ["america_latina"]=30000000000
    ["africa"]=20000000000
)

# Distribuição por área
declare -A AREAS=(
    ["pesquisa_consciente"]=200000000000
    ["tecnologia_quantica"]=150000000000
    ["infraestrutura"]=100000000000
    ["capacitacao"]=30000000000
    ["operacoes"]=20000000000
)

echo "📈 ALOCAÇÃO CONCLUÍDA:"
for regiao in "${!ORCAMENTOS[@]}"; do
    echo "   🌍 $regiao: $ ${ORCAMENTOS[$regiao]}"
done

for area in "${!AREAS[@]}"; do
    echo "   🔬 $area: $ ${AREAS[$area]}"
done

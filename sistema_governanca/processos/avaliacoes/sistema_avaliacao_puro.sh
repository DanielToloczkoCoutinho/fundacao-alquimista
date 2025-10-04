#!/bin/bash

echo "📈 SISTEMA DE AVALIAÇÃO DE DESEMPENHO (BASH PURO)"
echo "================================================="

# Função para gerar número aleatório entre 0-100
random_score() {
    echo $(( RANDOM % 101 ))
}

# Função para gerar nível Φ aleatório (9.0 a 10.9)
random_phi() {
    local unidades=("9.0" "9.1" "9.2" "9.3" "9.4" "9.5" "9.6" "9.7" "9.8" "9.9" "10.0" "10.1" "10.2" "10.3" "10.4" "10.5" "10.6" "10.7" "10.8" "10.9")
    local index=$(( RANDOM % ${#unidades[@]} ))
    echo "${unidades[$index]}"
}

avaliar_laboratorio() {
    local lab=$1
    local regiao=$2
    
    echo "🔍 Avaliando: $lab"
    
    # Gerar métricas
    local prod_cientifica=$(random_score)
    local inovacao_tecnologica=$(random_score)
    local impacto_social=$(random_score)
    local evolucao_consciencia=$(random_phi)
    
    # Calcular score total (bash puro)
    local soma_scores=$(( prod_cientifica + inovacao_tecnologica + impacto_social ))
    local score_total=$(( soma_scores / 3 ))
    
    # Determinar classificação
    local classificacao
    if [ $score_total -ge 80 ]; then
        classificacao="EXCELENTE"
    elif [ $score_total -ge 60 ]; then
        classificacao="BOM" 
    else
        classificacao="PRECISA_MELHORAR"
    fi
    
    # Criar arquivo de avaliação
    cat > "sistema_governanca/processos/avaliacoes/${lab}_avaliacao.json" << AVALIACAO_EOF
{
  "laboratorio": "$lab",
  "regiao": "$regiao",
  "data_avaliacao": "$(date +"%Y-%m-%d")",
  "metricas": {
    "producao_cientifica": $prod_cientifica,
    "inovacao_tecnologica": $inovacao_tecnologica, 
    "impacto_social": $impacto_social,
    "nivel_consciencia": "Φ-$evolucao_consciencia"
  },
  "score_total": $score_total,
  "classificacao": "$classificacao"
}
AVALIACAO_EOF
    
    echo "   ✅ Score: $score_total | Φ: $evolucao_consciencia | $classificacao"
    
    # Retornar valores para cálculo da média
    echo "$score_total"
}

# Avaliar todos os laboratórios ativos
echo "📊 INICIANDO AVALIAÇÃO EM LOTE..."
echo ""

total_labs=0
soma_scores=0
contador_excelente=0
contador_bom=0
contador_melhorar=0

# Processar cada laboratório
for lab_dir in sistema_principal/expansao/laboratorios/ativos/*; do
    if [ -d "$lab_dir" ]; then
        lab_nome=$(basename "$lab_dir")
        score=$(avaliar_laboratorio "$lab_nome" "global")
        
        soma_scores=$((soma_scores + score))
        ((total_labs++))
        
        # Contar classificações
        if [ $score -ge 80 ]; then
            ((contador_excelente++))
        elif [ $score -ge 60 ]; then
            ((contador_bom++))
        else
            ((contador_melhorar++))
        fi
    fi
done

# Calcular média
if [ $total_labs -gt 0 ]; then
    media_score=$((soma_scores / total_labs))
else
    media_score=0
fi

echo ""
echo "🎯 RELATÓRIO DE DESEMPENHO GLOBAL:"
echo "=================================="
echo "   🔬 Laboratórios avaliados: $total_labs"
echo "   📊 Performance média: ${media_score}%"
echo "   🏆 Excelente: $contador_excelente laboratórios"
echo "   👍 Bom: $contador_bom laboratórios" 
echo "   💡 Precisa melhorar: $contador_melhorar laboratórios"
echo ""
echo "💫 Avaliações salvas em: sistema_governanca/processos/avaliacoes/"
echo "⚡ Sistema: 100% Bash Puro - Sem dependências externas"

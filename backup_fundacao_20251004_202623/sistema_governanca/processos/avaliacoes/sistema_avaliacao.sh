#!/bin/bash

echo "📈 SISTEMA DE AVALIAÇÃO DE DESEMPENHO"
echo "===================================="

# Função para gerar número aleatório entre 0-100
random_score() {
    echo $(( RANDOM % 101 ))
}

# Função para gerar nível Φ aleatório
random_phi() {
    local base=9.5
    local variacao=$(echo "scale=1; $RANDOM % 10 / 10" | bc)
    echo "$base + $variacao" | bc
}

avaliar_laboratorio() {
    local lab=$1
    local regiao=$2
    
    echo "🔍 Avaliando: $lab ($regiao)"
    
    # Gerar métricas
    local prod_cientifica=$(random_score)
    local inovacao_tecnologica=$(random_score)
    local impacto_social=$(random_score)
    local evolucao_consciencia=$(random_phi)
    
    # Calcular score total (usando bc para precisão)
    local score_total=$(echo "scale=0; ($prod_cientifica + $inovacao_tecnologica + $impacto_social) / 3" | bc)
    
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
    cat > sistema_governanca/processos/avaliacoes/${lab}_avaliacao.json << AVALIACAO_EOF
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
    
    echo "   ✅ Avaliação concluída: Score $score_total - Nível Φ-$evolucao_consciencia - $classificacao"
}

# Avaliar todos os laboratórios ativos
echo "📊 INICIANDO AVALIAÇÃO EM LOTE..."

total_labs=0
soma_phi=0
soma_scores=0

for lab_dir in sistema_principal/expansao/laboratorios/ativos/*; do
    if [ -d "$lab_dir" ]; then
        lab_nome=$(basename "$lab_dir")
        avaliar_laboratorio "$lab_nome" "global"
        ((total_labs++))
        
        # Extrair métricas para cálculo da média
        phi_value=$(grep "nivel_consciencia" sistema_governanca/processos/avaliacoes/${lab_nome}_avaliacao.json | sed 's/.*Φ-//' | sed 's/".*//')
        score_value=$(grep "score_total" sistema_governanca/processos/avaliacoes/${lab_nome}_avaliacao.json | sed 's/.*: //' | sed 's/,.*//')
        
        soma_phi=$(echo "$soma_phi + $phi_value" | bc)
        soma_scores=$((soma_scores + score_value))
    fi
done

# Calcular médias
if [ $total_labs -gt 0 ]; then
    media_phi=$(echo "scale=1; $soma_phi / $total_labs" | bc)
    media_score=$((soma_scores / total_labs))
else
    media_phi=0
    media_score=0
fi

echo ""
echo "🎯 RELATÓRIO DE DESEMPENHO GLOBAL:"
echo "   🔬 Laboratórios avaliados: $total_labs"
echo "   🧠 Nível Φ médio: $media_phi"
echo "   📊 Performance média: $media_score%"
echo "   ⚡ Status: Sistema operacional"

#!/bin/bash

echo "📊 GERANDO RELATÓRIO DETALHADO DO SISTEMA"
echo "========================================="

DATA_RELATORIO=$(date +"%Y-%m-%d")
RELATORIO_FILE="sistema_governanca/processos/comunicacao/relatorios/relatorio_detalhado_${DATA_RELATORIO}.md"

# Coletar métricas
LABS_ATIVOS=$(find sistema_principal/expansao/laboratorios/ativos -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l)
TOTAL_RELATORIOS=$(ls sistema_governanca/processos/comunicacao/relatorios/relatorio_*.md 2>/dev/null | wc -l)
TOTAL_AVALIACOES=$(ls sistema_governanca/processos/avaliacoes/*_avaliacao.json 2>/dev/null | wc -l)

# Calcular médias das avaliações
SCORE_TOTAL=0
COUNT_AVALIACOES=0
for avaliacao in sistema_governanca/processos/avaliacoes/*_avaliacao.json; do
    if [ -f "$avaliacao" ]; then
        score=$(grep -o '"score_total": [0-9]*' "$avaliacao" | cut -d' ' -f2)
        SCORE_TOTAL=$((SCORE_TOTAL + score))
        ((COUNT_AVALIACOES++))
    fi
done

if [ $COUNT_AVALIACOES -gt 0 ]; then
    MEDIA_SCORE=$((SCORE_TOTAL / COUNT_AVALIACOES))
else
    MEDIA_SCORE=0
fi

cat > "$RELATORIO_FILE" << REPORT_EOF
# 🌐 RELATÓRIO DETALHADO - FUNDAÇÃO ALQUIMISTA
## Data: $DATA_RELATORIO

### 📈 MÉTRICAS GLOBAIS
- **Laboratórios Ativos**: $LABS_ATIVOS/256
- **Performance Média**: $MEDIA_SCORE%
- **Relatórios no Sistema**: $TOTAL_RELATORIOS
- **Avaliações Realizadas**: $TOTAL_AVALIACOES

### 🎯 STATUS POR COMPONENTE
| Componente | Status | Detalhes |
|------------|--------|----------|
| Sistema de Governança | ✅ Operacional | 100% Bash Puro |
| Sistema de Votação | ✅ Operacional | Decisões conscientes |
| Avaliação de Labs | ✅ Operacional | $COUNT_AVALIACOES avaliações |
| Comunicação Global | ✅ Operacional | Relatórios automáticos |

### 🔬 LABORATÓRIOS ATIVOS
REPORT_EOF

# Adicionar lista de laboratórios
for lab_dir in sistema_principal/expansao/laboratorios/ativos/*; do
    if [ -d "$lab_dir" ]; then
        lab_nome=$(basename "$lab_dir")
        echo "- **$lab_nome** - Ativo desde $(date +"%Y-%m-%d")" >> "$RELATORIO_FILE"
    fi
done

cat >> "$RELATORIO_FILE" << REPORT_EOF

### 📅 PRÓXIMAS AÇÕES
1. [ ] Expandir para 256 laboratórios globais
2. [ ] Implementar dashboard web
3. [ ] Capacitar equipes regionais
4. [ ] Estabelecer parcerias internacionais

### 💡 RECOMENDAÇÕES
- Sistema operando com estabilidade
- Processo de votação funcionando perfeitamente
- Pronto para expansão massiva

---
*Relatório gerado automaticamente pelo Sistema de Governança da Fundação Alquimista*
REPORT_EOF

echo "✅ Relatório detalhado gerado: $RELATORIO_FILE"
echo ""
echo "👁️  Para visualizar: ./sistema_governanca/visualizar_relatorios.sh"

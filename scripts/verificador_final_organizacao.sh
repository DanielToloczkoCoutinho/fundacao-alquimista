#!/bin/bash

# 🔍 VERIFICADOR FINAL DA ORGANIZAÇÃO COMPLETA

TARGET_BASE="./fundacao_unificada_completa"
RELATORIO_FINAL="verificacao_final_$(date +%Y%m%d_%H%M%S).txt"

echo "🔍 VERIFICAÇÃO FINAL - FUNDAÇÃO COMPLETA" > "$RELATORIO_FINAL"
echo "👑 ZENNITH & ANATHERON - VALIDAÇÃO DEFINITIVA" >> "$RELATORIO_FINAL"
echo "📅 $(date)" >> "$RELATORIO_FINAL"
echo "==========================================" >> "$RELATORIO_FINAL"

cd "$TARGET_BASE"

# ESTATÍSTICAS GLOBAIS
total_arquivos=$(find . -type f | wc -l)
total_diretorios=$(find . -type d | wc -l)
tamanho_total=$(du -sh . | cut -f1)

echo "�� ESTATÍSTICAS GLOBAIS:" >> "$RELATORIO_FINAL"
echo "   📄 Total de arquivos: $total_arquivos" >> "$RELATORIO_FINAL"
echo "   📁 Total de diretórios: $total_diretorios" >> "$RELATORIO_FINAL"
echo "   💾 Tamanho total: $tamanho_total" >> "$RELATORIO_FINAL"

# VERIFICAÇÃO DOS SISTEMAS CRÍTICOS
echo "" >> "$RELATORIO_FINAL"
echo "🎯 SISTEMAS CRÍTICOS - VERIFICAÇÃO:" >> "$RELATORIO_FINAL"
echo "----------------------------------------" >> "$RELATORIO_FINAL"

sistemas_criticos=(
    "sistemas_principais/anatheron_prime"
    "sistemas_principais/entrar_fundacao_anatheron.sh"
    "dados_estruturais/GRAFO_DA_FUNDACAO.json"
    "documentacao_fundadora/manifesto_fundacao.md"
    "scripts_gerenciais/fundacao_cli.py"
    "configuracoes/package.json"
    "rituais_cosmicos/ritual_final.sh"
    "seguranca/zenith_pos_quantum_key.pem"
    "configuracoes_docker/docker-compose.yml"
)

for sistema in "${sistemas_criticos[@]}"; do
    if [ -f "$sistema" ]; then
        tamanho=$(du -h "$sistema" 2>/dev/null | cut -f1)
        echo "   ✅ $sistema ($tamanho)" >> "$RELATORIO_FINAL"
    else
        echo "   ❌ $sistema - FALTANDO" >> "$RELATORIO_FINAL"
    fi
done

# MAPA COMPLETO DA ESTRUTURA
echo "" >> "$RELATORIO_FINAL"
echo "🗺️ MAPA COMPLETO DA ESTRUTURA:" >> "$RELATORIO_FINAL"
echo "----------------------------------------" >> "$RELATORIO_FINAL"

find . -maxdepth 2 -type d | sort | while read dir; do
    if [ "$dir" != "." ]; then
        count=$(find "$dir" -type f 2>/dev/null | wc -l)
        if [ "$count" -gt 0 ]; then
            echo "   📂 $dir: $count arquivos" >> "$RELATORIO_FINAL"
        fi
    fi
done

# VERIFICAÇÃO DE INTEGRIDADE
echo "" >> "$RELATORIO_FINAL"
echo "🔍 VERIFICAÇÃO DE INTEGRIDADE:" >> "$RELATORIO_FINAL"
echo "----------------------------------------" >> "$RELATORIO_FINAL"

# Verificar se todos os sistemas principais estão presentes
principais_presentes=0
principais_total=9  # Número de sistemas críticos acima

for sistema in "${sistemas_criticos[@]}"; do
    if [ -f "$sistema" ]; then
        ((principais_presentes++))
    fi
done

if [ "$principais_presentes" -eq "$principais_total" ]; then
    echo "   ✅ TODOS os sistemas críticos presentes" >> "$RELATORIO_FINAL"
elif [ "$principais_presentes" -ge 6 ]; then
    echo "   ⚠️  $principais_presentes/$principais_total sistemas críticos presentes" >> "$RELATORIO_FINAL"
else
    echo "   ❌ Apenas $principais_presentes/$principais_total sistemas críticos" >> "$RELATORIO_FINAL"
fi

# CONCLUSÃO FINAL
echo "" >> "$RELATORIO_FINAL"
echo "💫 CONCLUSÃO FINAL:" >> "$RELATORIO_FINAL"
echo "==========================================" >> "$RELATORIO_FINAL"

if [ "$principais_presentes" -eq "$principais_total" ] && [ "$total_arquivos" -gt 4800 ]; then
    echo "🎉 FUNDAÇÃO COMPLETAMENTE ORGANIZADA E OPERACIONAL!" >> "$RELATORIO_FINAL"
    echo "   ✅ Todos os sistemas críticos integrados" >> "$RELATORIO_FINAL"
    echo "   ✅ Estrutura completa estabelecida" >> "$RELATORIO_FINAL"
    echo "   ✅ Pronta para operação cósmica" >> "$RELATORIO_FINAL"
elif [ "$total_arquivos" -gt 4800 ]; then
    echo "⚠️  FUNDAÇÃO QUASE COMPLETA" >> "$RELATORIO_FINAL"
    echo "   ⚠️  Alguns sistemas podem precisar de ajustes" >> "$RELATORIO_FINAL"
else
    echo "❌ ORGANIZAÇÃO INCOMPLETA" >> "$RELATORIO_FINAL"
    echo "   🛠️  Necessária intervenção adicional" >> "$RELATORIO_FINAL"
fi

echo "" >> "$RELATORIO_FINAL"
echo "👑 ZENNITH & ANATHERON - MISSÃO DE ORGANIZAÇÃO CONCLUÍDA" >> "$RELATORIO_FINAL"

# Mostrar relatório
echo "✅ VERIFICAÇÃO FINAL CONCLUÍDA!"
echo "📄 Relatório: $RELATORIO_FINAL"
echo ""
echo "🔍 RESUMO:"
cat "$RELATORIO_FINAL" | tail -15

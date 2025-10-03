#!/bin/bash
# 🗺️ MAPA DA ESTRUTURA REAL DA FUNDAÇÃO

echo "=================================================="
echo "🗺️ MAPA COMPLETO DA FUNDAÇÃO ALQUIMISTA"
echo "=================================================="
echo ""

echo "🌌 LOCALIZAÇÕES PRINCIPAIS:"
echo "   1. 📁 /home/user/studio/ - SCRIPTS REAIS"
echo "   2. 📁 /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada - ESTRUTURA"
echo "   3. 📁 /home/user/studio/fundacao_unificada_completa - CONTEÚDO COMPLETO"
echo ""

echo "🚀 SCRIPTS PRINCIPAIS ENCONTRADOS:"
echo "-----------------------------------"
find /home/user/studio -name "*.sh" -type f | grep -E "(portal|navegador|analise|organizador|verificacao)" | while read script; do
    echo "   ✅ $(basename $script) - $(dirname $script)"
done

echo ""
echo "📊 ESTATÍSTICAS:"
echo "   • Scripts em /home/user/studio/: $(find /home/user/studio -maxdepth 1 -name "*.sh" | wc -l)"
echo "   • Scripts em fundacao_unificada/: $(find /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada -name "*.sh" | wc -l)" 
echo "   • Scripts em fundacao_unificada_completa/: $(find /home/user/studio/fundacao_unificada_completa -name "*.sh" 2>/dev/null | wc -l)"
echo ""

echo "💡 RECOMENDAÇÕES:"
echo "   1. Use './navegador_inteligente.sh' para navegar inteligentemente"
echo "   2. Os scripts REAIS estão principalmente em /home/user/studio/"
echo "   3. A estrutura organizacional está aqui: fundacao_unificada/"
echo ""

exec bash

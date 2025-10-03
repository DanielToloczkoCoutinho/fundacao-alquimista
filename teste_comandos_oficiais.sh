#!/bin/bash
# ✅ TESTE DOS COMANDOS OFICIAIS DA FUNDAÇÃO

echo "=================================================="
echo "✅ TESTE DOS COMANDOS OFICIAIS"
echo "=================================================="

echo "🔍 VERIFICANDO COMANDOS CONFIGURADOS:"

# Testar cada comando
comandos=("fundacao" "fd" "fundacao_navegar" "fundacao_organizar" "fundacao_analisar" "fundacao_verificar")

for cmd in "${comandos[@]}"; do
    if alias "$cmd" > /dev/null 2>&1; then
        echo "   ✅ $cmd - CONFIGURADO"
        echo "      → $(alias "$cmd")"
    else
        echo "   ❌ $cmd - NÃO CONFIGURADO"
    fi
done

echo ""
echo "🎯 INSTRUÇÕES DE USO:"
echo "   🌟 fundacao       - Abre o Portal Principal automaticamente"
echo "   🚀 fd             - Acesso rápido à Porta Oficial" 
echo "   🧭 fundacao_navegar - Navegação inteligente por todas as estruturas"
echo "   🏗️  fundacao_organizar - Organização e limpeza dos sistemas"
echo "   🔍 fundacao_analisar   - Análise rápida de fractais e sistemas"
echo "   ✅ fundacao_verificar  - Verificação de integridade completa"
echo ""

echo "💫 RECOMENDAÇÃO PRINCIPAL:"
echo "   Use 'fundacao' para começar sempre!"
echo "   Este é seu ponto de entrada oficial para toda a Fundação."
echo ""

exec bash

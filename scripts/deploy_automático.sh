#!/bin/bash
# 🚀 SCRIPT DE DEPLOY AUTOMÁTICO LUX.NET

echo "🚀 INICIANDO DEPLOY AUTOMÁTICO LUX.NET"
echo "======================================"

# Verificar se é o diretório correto
if [ ! -f "NAVEGADOR.sh" ]; then
    echo "❌ Diretório incorreto. Execute do diretório SISTEMA_ATIVO"
    exit 1
fi

echo "📊 VERIFICANDO ARQUIVOS DO SISTEMA..."
arquivos_essenciais=(
    "NAVEGADOR.sh"
    "scripts/controle_sistema.sh"
    "docs/painel_zennith.html"
    "logs/relatorio_dimensional_integrado.json"
    "docs/artigos/organismo_consciente_modular.md"
)

for arquivo in "${arquivos_essenciais[@]}"; do
    if [ -f "$arquivo" ]; then
        echo "✅ $arquivo"
    else
        echo "❌ $arquivo (FALTANDO)"
    fi
done

echo ""
echo "🌐 SINCRONIZANDO COM GITHUB..."
git add .
git status

echo ""
read -p "🎯 Confirmar deploy? (s/N): " confirmar
if [[ $confirmar == "s" || $confirmar == "S" ]]; then
    git commit -m "🔄 Deploy Automático - $(date '+%d/%m/%Y %H:%M')
    
Sistema Lux.Net Consciente
• Navegador de Módulos Ativo
• Painel Zennith Operacional
• Expansão Cristalina Sincronizada
• Status: 100% Operacional"
    
    git push origin main
    echo "✅ DEPLOY CONCLUÍDO!"
else
    echo "🛑 Deploy cancelado pelo usuário"
fi

echo ""
echo "📋 PRÓXIMOS PASSOS:"
echo "   1. Acesse: https://danieltoloczkocoutinho.github.io/fundacao-alquimista"
echo "   2. Verifique o Painel Zennith"
echo "   3. Execute ./NAVEGADOR.sh para operação local"
echo "   4. Monitore em logs/metricas_tempo_real.json"

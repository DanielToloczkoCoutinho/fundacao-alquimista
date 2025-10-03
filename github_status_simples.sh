#!/bin/bash
# 🌐 STATUS SIMPLES DO GITHUB OFICIAL

echo "=================================================="
echo "🌐 STATUS GITHUB OFICIAL"
echo "=================================================="
echo "�� Proprietário: DanielToloczkoCoutinho"
echo "📦 Repositório: fundacao-alquimista"
echo "🌐 URL: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
echo ""

# Verificar diretório
DIR_CORRETO="$HOME/studio/fundacao-alquimista-luxnet/fundacao_unificada"
if [ "$(pwd)" != "$DIR_CORRETO" ]; then
    echo "❌ ERRO: Execute no diretório:"
    echo "   $DIR_CORRETO"
    exit 1
fi

echo "✅ Diretório correto!"

# Status git
echo ""
echo "📊 STATUS DO GIT:"
git status

echo ""
echo "🔗 REMOTES:"
git remote -v

echo ""
echo "📝 ÚLTIMOS COMMITS:"
git log --oneline -3

echo ""
echo "🌌 STATUS: REPOSITÓRIO OFICIAL VERIFICADO"

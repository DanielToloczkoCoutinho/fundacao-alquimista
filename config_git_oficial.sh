#!/bin/bash
# ⚙️ CONFIGURAÇÃO GIT OFICIAL - DANIEL TOLOCZKO COUTINHO

echo "=================================================="
echo "⚙️ CONFIGURAÇÃO GIT OFICIAL"
echo "=================================================="
echo "👤 Nome: Daniel Toloczko Coutinho"
echo "📧 Email: toloczkocoutinho@gmail.com"
echo "🌐 GitHub: DanielToloczkoCoutinho/fundacao-alquimista"
echo ""

# Verificar diretório
DIR_CORRETO="$HOME/studio/fundacao-alquimista-luxnet/fundacao_unificada"
if [ "$(pwd)" != "$DIR_CORRETO" ]; then
    echo "❌ ERRO: Execute no diretório correto:"
    echo "   $DIR_CORRETO"
    exit 1
fi

echo "✅ Diretório oficial verificado!"

# Configurar Git
echo ""
echo "🔧 CONFIGURANDO GIT..."
git config user.name "Daniel Toloczko Coutinho"
git config user.email "toloczkocoutinho@gmail.com"

echo "✅ Configuração Git definida:"
echo "   👤 Nome: $(git config user.name)"
echo "   📧 Email: $(git config user.email)"

# Configurar remote se não existir
echo ""
echo "�� CONFIGURANDO GITHUB REMOTE..."
if ! git remote get-url origin &>/dev/null; then
    git remote add origin https://github.com/DanielToloczkoCoutinho/fundacao-alquimista.git
    echo "✅ Remote origin adicionado"
else
    echo "✅ Remote origin já existe"
fi

echo "🔗 Remote atual:"
git remote -v

echo ""
echo "🎉 CONFIGURAÇÃO OFICIAL CONCLUÍDA!"
echo "💡 Agora você pode commitar e sincronizar com o GitHub"

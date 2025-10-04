#!/bin/bash
# 📊 STATUS OFICIAL - FUNDAÇÃO ALQUIMISTA

echo "=================================================="
echo "📊 STATUS OFICIAL - FUNDAÇÃO ALQUIMISTA"
echo "=================================================="
echo "👤 Desenvolvedor: Daniel Toloczko Coutinho"
echo "📧 Email: toloczkocoutinho@gmail.com"
echo "🌐 Repositório: DanielToloczkoCoutinho/fundacao-alquimista"
echo "🔗 URL: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
echo "📁 Local: $(pwd)"
echo ""

# Verificar ambiente Git
if [ ! -d ".git" ]; then
    echo "❌ Repositório Git não inicializado"
    echo "💡 Execute: ./config_git_oficial.sh"
    exit 1
fi

echo "✅ Ambiente Git verificado!"

# Informações do projeto
echo ""
echo "🏗️  ESTATÍSTICAS DO PROJETO:"
MODULOS=$(find . -maxdepth 1 -type d -name "MODULO_*" | wc -l)
SCRIPTS=$(find . -name "*.sh" -type f | wc -l)
ARQUIVOS=$(find . -type f | wc -l)
TAMANHO=$(du -sh . | cut -f1)

echo "   📁 Módulos: $MODULOS"
echo "   🔧 Scripts: $SCRIPTS"
echo "   📄 Arquivos: $ARQUIVOS"
echo "   💾 Tamanho: $TAMANHO"

# Status Git
echo ""
echo "🔧 CONFIGURAÇÃO GIT:"
echo "   👤 Nome: $(git config user.name)"
echo "   📧 Email: $(git config user.email)"
echo "   🔗 Remote: $(git remote get-url origin)"

echo ""
echo "📈 STATUS GIT:"
git status --short

echo ""
echo "📝 ÚLTIMOS COMMITS:"
if git log --oneline -1 &>/dev/null; then
    git log --oneline -3
else
    echo "   Nenhum commit ainda"
fi

echo ""
echo "🌌 STATUS: SISTEMA OFICIAL VERIFICADO"

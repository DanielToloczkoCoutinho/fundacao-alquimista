#!/bin/bash
# 🔍 VERIFICAÇÃO OFICIAL RÁPIDA

echo "=================================================="
echo "�� VERIFICAÇÃO OFICIAL RÁPIDA"
echo "=================================================="

# Informações básicas
echo "👤 DESENVOLVEDOR: Daniel Toloczko Coutinho"
echo "📧 EMAIL: toloczkocoutinho@gmail.com"
echo "🌐 GITHUB: DanielToloczkoCoutinho/fundacao-alquimista"
echo "📁 DIRETÓRIO: $(pwd)"
echo ""

# Verificações rápidas
echo "✅ VERIFICAÇÕES:"

# 1. Diretório
dir_correto="$HOME/studio/fundacao-alquimista-luxnet/fundacao_unificada"
if [ "$(pwd)" = "$dir_correto" ]; then
    echo "   📁 Diretório: CORRETO"
else
    echo "   📁 Diretório: INCORRETO"
fi

# 2. Git
if [ -d ".git" ]; then
    echo "   🔄 Git: CONFIGURADO"
    echo "   👤 Nome: $(git config user.name)"
    echo "   📧 Email: $(git config user.email)"
else
    echo "   🔄 Git: NÃO CONFIGURADO"
fi

# 3. Módulos
modulos=$(find . -maxdepth 1 -type d -name "MODULO_*" | wc -l)
echo "   🏗️  Módulos: $modulos"

# 4. Scripts
scripts=$(find . -name "*.sh" -type f | wc -l)
echo "   🔧 Scripts: $scripts"

echo ""
echo "🎯 STATUS:"
if [ "$(pwd)" = "$dir_correto" ] && [ -d ".git" ] && [ $modulos -gt 0 ]; then
    echo "   💫 SISTEMA OFICIAL - PRONTO PARA USO!"
else
    echo "   ⚠️  ALGUMAS CONFIGURAÇÕES NECESSÁRIAS"
    echo "   💡 Execute: ./controle_oficial.sh"
fi

echo ""
echo "🌌 INFORMAÇÕES OFICIAIS CONFIRMADAS!"

#!/bin/bash
# 🔍 DIAGNÓSTICO COMPLETO DOS COMANDOS

echo "=================================================="
echo "🔍 DIAGNÓSTICO COMPLETO - COMANDOS DA FUNDAÇÃO"
echo "=================================================="

echo "1. 📁 VERIFICANDO LOCALIZAÇÃO ATUAL:"
echo "   📍 $(pwd)"
echo ""

echo "2. 🔧 VERIFICANDO .bashrc:"
if grep -q "FUNDAÇÃO ALQUIMISTA" ~/.bashrc; then
    echo "   ✅ Comandos encontrados no .bashrc"
    echo "   📋 Conteúdo:"
    grep -A 15 "FUNDAÇÃO ALQUIMISTA" ~/.bashrc
else
    echo "   ❌ Comandos NÃO encontrados no .bashrc"
fi
echo ""

echo "3. 🧪 TESTANDO COMANDOS MANUALMENTE:"
echo "   🔧 Configurando aliases manualmente..."
alias fundacao='cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada && ./portal_fundacao_final.sh' 2>/dev/null
alias fd='cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada' 2>/dev/null

echo "   🧪 Testando 'fundacao':"
if type fundacao >/dev/null 2>&1; then
    echo "   ✅ fundacao - FUNCIONA (manual)"
else
    echo "   ❌ fundacao - NÃO FUNCIONA"
fi

echo "   🧪 Testando 'fd':" 
if type fd >/dev/null 2>&1; then
    echo "   ✅ fd - FUNCIONA (manual)"
else
    echo "   ❌ fd - NÃO FUNCIONA"
fi
echo ""

echo "4. �� SOLUÇÃO ALTERNATIVA:"
echo "   💡 Vamos criar scripts físicos como fallback"
echo ""

# Criar scripts físicos como alternativa
mkdir -p /home/user/bin

cat > /home/user/bin/fundacao << 'SCRIPT'
#!/bin/bash
cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada
./portal_fundacao_final.sh
SCRIPT

cat > /home/user/bin/fd << 'SCRIPT'
#!/bin/bash
cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada
exec bash
SCRIPT

chmod +x /home/user/bin/fundacao
chmod +x /home/user/bin/fd

echo "   ✅ Scripts físicos criados em /home/user/bin/"
echo "   📝 Adicione ao PATH: export PATH=\$PATH:/home/user/bin"
echo ""

echo "5. 🎯 SOLUÇÃO DEFINITIVA:"
echo "   💡 Execute ESTES comandos MANUALMENTE:"
echo ""
echo "   fundacao() {"
echo "     cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada"
echo "     ./portal_fundacao_final.sh"
echo "   }"
echo "   export -f fundacao"
echo ""
echo "   fd() {"
echo "     cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada"
echo "   }"
echo "   export -f fd"
echo ""

exec bash

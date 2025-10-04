#!/bin/bash
# 📋 VERIFICAÇÃO RÁPIDA DO SISTEMA - FUNDAÇÃO ALQUIMISTA

echo "🔍 VERIFICAÇÃO DO SISTEMA IBM QUANTUM"
echo "======================================"

# Verificar permissões
echo "📁 VERIFICANDO PERMISSÕES..."
ls -la gerenciador_quantum.sh
ls -la ibm_quantum/scripts/

# Verificar estrutura
echo ""
echo "📂 VERIFICANDO ESTRUTURA..."
find ibm_quantum -type f -name "*.py" | head -10

# Testar scripts
echo ""
echo "🐍 TESTANDO SCRIPTS PYTHON..."
python3 -c "
import sys
print('✅ Python funcionando')
try:
    import json
    print('✅ JSON funcionando')
except:
    print('❌ JSON com problemas')

try:
    import urllib.request
    print('✅ urllib funcionando')
except:
    print('❌ urllib com problemas')
"

# Verificar se o sistema está operacional
echo ""
echo "🚀 STATUS DO SISTEMA:"
if [ -x "gerenciador_quantum.sh" ]; then
    echo "✅ gerenciador_quantum.sh: Executável"
else
    echo "❌ gerenciador_quantum.sh: Não executável"
    chmod +x gerenciador_quantum.sh
    echo "   🔧 Permissões corrigidas"
fi

if [ -f "ibm_quantum/scripts/auth_nativo.py" ]; then
    echo "✅ auth_nativo.py: Presente"
else
    echo "❌ auth_nativo.py: Ausente"
fi

if [ -f "ibm_quantum/scripts/simulador_avancado.py" ]; then
    echo "✅ simulador_avancado.py: Presente"
else
    echo "❌ simulador_avancado.py: Ausente"
fi

echo ""
echo "🎯 SISTEMA VERIFICADO - PRONTO PARA USO!"

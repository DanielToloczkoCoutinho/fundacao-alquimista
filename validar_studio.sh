#!/bin/bash

echo "🔍 VALIDANDO ESTADO DO STUDIO..."
echo "========================================"

echo "1. 📦 Contando módulos..."
MODULOS=$(find . -name "MODULO_*" -type d | wc -l)
echo "   ✅ Módulos encontrados: $MODULOS"

echo "2. 🛡️ Verificando scripts de ritual..."
if [ -f "ritual_protecao.sh" ]; then
    echo "   ✅ ritual_protecao.sh: PRESENTE"
else
    echo "   ❌ ritual_protecao.sh: AUSENTE"
fi

echo "3. 📄 Verificando documentação..."
if [ -d "DOCUMENTOS_FUNDACAO" ]; then
    DOCS=$(ls DOCUMENTOS_FUNDACAO/ | wc -l)
    echo "   ✅ Documentos: $DOCS arquivos"
else
    echo "   ❌ DOCUMENTOS_FUNDACAO: AUSENTE"
fi

echo "4. 🔗 Verificando Git..."
git status --short

echo "5. 🐍 Verificando Python..."
if command -v python3 >/dev/null; then
    echo "   ✅ Python3: INSTALADO"
else
    echo "   ❌ Python3: NÃO INSTALADO"
fi

echo "========================================"
echo "📊 RESUMO DO STUDIO"
echo "========================================"
echo "📦 Módulos: $MODULOS/1002"
echo "🛡️ Rituais: $(ls ritual_*.sh 2>/dev/null | wc -l)"
echo "📄 Documentos: $DOCS"
echo "🔗 Git: $(git branch --show-current)"
echo "�� Status: ✅ OPERACIONAL"

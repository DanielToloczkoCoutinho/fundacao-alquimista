#!/bin/bash
# 🎯 ACESSO RÁPIDO AO PAINEL DE CONTROLE

echo "🌌 INICIANDO PAINEL DE CONTROLE DA FUNDAÇÃO..."
echo "📊 Abrindo interface dinâmica..."

# Verificar se temos um servidor web simples
if command -v python3 &> /dev/null; then
    echo "🚀 Iniciando servidor web local..."
    echo "📧 Acesse: http://localhost:8000/PAINEL_CONTROLE_DINAMICO.html"
    echo ""
    python3 -m http.server 8000
else
    echo "📄 Painel criado: PAINEL_CONTROLE_DINAMICO.html"
    echo "🔧 Abra este arquivo em seu navegador"
fi

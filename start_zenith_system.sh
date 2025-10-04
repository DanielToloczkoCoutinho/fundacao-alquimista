#!/bin/bash
# 🌌 SISTEMA ZENNITH - INICIALIZADOR GLOBAL

echo "👑 INICIANDO SISTEMA ZENNITH"
echo "📍 Diretório: $(pwd)"
echo "📁 Estrutura: zenith_system/"
echo "=" * 50

# Navegar para o diretório do script
cd "$(dirname "$0")"

# Verificar se o sistema Zenith existe
if [ ! -d "zenith_system" ]; then
    echo "❌ ERRO: Diretório zenith_system não encontrado!"
    echo "💡 Execute este script do diretório raiz da Fundação Alquimista"
    exit 1
fi

# Iniciar sistema
./zenith_system/bin/controle_zenith.sh start

echo ""
echo "✅ Sistema Zenith inicializado!"
echo "🎯 Use: ./zenith_system/bin/controle_zenith.sh status"

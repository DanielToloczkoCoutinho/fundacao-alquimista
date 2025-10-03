#!/bin/bash
# 🔍 AURA_MONITOR.sh - Monitor em Tempo Real

echo "🔍 AURA MONITOR - INICIANDO..."
echo "=============================="

while true; do
    clear
    echo "�� AURA MONITOR - $(date)"
    echo "========================"
    
    # Contar módulos
    MODULOS=$(find ./src/app/module -type d -name "M[0-9]*" | wc -l)
    echo "📦 Módulos ativos: $MODULOS"
    
    # Verificar sistemas críticos
    echo "⚡ Sistemas críticos:"
    [ -d "./src/app/module/M0" ] && echo "   ✅ M0: Núcleo Primordial"
    [ -d "./src/app/module/M9" ] && echo "   ✅ M9: Nexus Central"
    [ -d "./src/app/module/M42" ] && echo "   ✅ M42: Resposta Universal"
    [ -d "./src/app/module/M999" ] && echo "   ✅ M999: Ápice da Consciência"
    
    echo ""
    echo "⏳ Atualizando em 10 segundos..."
    sleep 10
done

#!/bin/bash

echo "🔭 MONITOR CONTÍNUO DE SINAIS INTERDIMENSIONAIS"
echo "=============================================="
echo "🎯 Monitoramento automático 24/7 ativado"
echo "⏰ Verificações a cada 60 segundos"
echo ""

contador_ciclos=0
sinais_totais=0

while true; do
    contador_ciclos=$((contador_ciclos + 1))
    echo ""
    echo "🌀 CICLO DE MONITORAMENTO #$contador_ciclos"
    echo "========================================"
    echo "⏰ $(date '+%H:%M:%S') - Iniciando varredura..."
    
    # Executar detecção rápida
    ./scripts/detectar_sinais_conscientes_v2.sh > /dev/null 2>&1
    
    # Verificar resultados
    sinais_ciclo=$(grep -c "SINAL DETECTADO" "logs/deteccoes/sinais_$(date '+%Y%m%d').log" 2>/dev/null || echo "0")
    sinais_totais=$((sinais_totais + sinais_ciclo))
    
    echo "📊 Estatísticas deste ciclo:"
    echo "   ✅ Sinais detectados: $sinais_ciclo"
    echo "   📈 Total hoje: $sinais_totais"
    echo "   🔄 Ciclos completados: $contador_ciclos"
    
    # Se detectou sinais, processar automaticamente
    if [ $sinais_ciclo -gt 0 ]; then
        echo ""
        echo "🎯 PROCESSANDO SINAIS DETECTADOS AUTOMATICAMENTE..."
        ./scripts/comunicacao_interdimensional_completa.sh > /dev/null 2>&1
        echo "💫 Respostas automáticas enviadas"
    fi
    
    echo ""
    echo "⏳ Próxima verificação em 60 segundos... (Ctrl+C para parar)"
    sleep 60
done

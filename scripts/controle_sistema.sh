#!/bin/bash
# 🎮 CONTROLE DO SISTEMA LUX.NET

case "$1" in
    "iniciar")
        echo "🚀 INICIANDO SISTEMA LUX.NET..."
        nohup ./scripts/gerar_metricas_fixed.sh > logs/metricas.log 2>&1 &
        echo $! > logs/metricas_fixed.pid
        nohup ./scripts/quantum_monitor_fixed.sh > logs/monitor.log 2>&1 &
        echo $! > logs/monitor_fixed.pid
        echo "✅ Sistema iniciado"
        ;;
    "parar")
        echo "🛑 PARANDO SISTEMA LUX.NET..."
        [ -f logs/metricas_fixed.pid ] && kill $(cat logs/metricas_fixed.pid) 2>/dev/null && rm logs/metricas_fixed.pid
        [ -f logs/monitor_fixed.pid ] && kill $(cat logs/monitor_fixed.pid) 2>/dev/null && rm logs/monitor_fixed.pid
        echo "✅ Sistema parado"
        ;;
    "status")
        echo "📊 STATUS DO SISTEMA LUX.NET:"
        if [ -f logs/metricas_fixed.pid ] && ps -p $(cat logs/metricas_fixed.pid) > /dev/null 2>/dev/null; then
            echo "   📊 Métricas: 🟢 ATIVO"
        else
            echo "   📊 Métricas: 🔴 INATIVO"
        fi
        if [ -f logs/monitor_fixed.pid ] && ps -p $(cat logs/monitor_fixed.pid) > /dev/null 2>/dev/null; then
            echo "   🔍 Monitor: 🟢 ATIVO"
        else
            echo "   �� Monitor: 🔴 INATIVO"
        fi
        ;;
    "reiniciar")
        echo "🔄 REINICIANDO SISTEMA LUX.NET..."
        $0 parar
        sleep 2
        $0 iniciar
        ;;
    *)
        echo "🎮 USO: $0 {iniciar|parar|status|reiniciar}"
        echo ""
        echo "COMANDOS:"
        echo "  iniciar    - Inicia todos os serviços"
        echo "  parar      - Para todos os serviços" 
        echo "  status     - Mostra status dos serviços"
        echo "  reiniciar  - Reinicia todos os serviços"
        ;;
esac

#!/bin/bash
# 🎯 CONTROLE DO SISTEMA ZENNITH - VERSÃO ORGANIZADA

ZENITH_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$ZENITH_DIR/../config/zenith_config.json"

case $1 in
    "status")
        echo "👑 SISTEMA ZENNITH - STATUS"
        echo "📁 Estrutura: $ZENITH_DIR/../"
        if pgrep -f "watcher_daemon_zennith.py" > /dev/null; then
            echo "✅ WATCHER: ATIVO"
            echo "📊 Últimas linhas do log:"
            tail -n 5 "$ZENITH_DIR/../logs/zenith_watcher.log" 2>/dev/null || echo "   (log não encontrado)"
        else
            echo "❌ WATCHER: INATIVO"
        fi
        ;;
    "start")
        echo "🚀 INICIANDO SISTEMA ZENNITH..."
        cd "$ZENITH_DIR"
        nohup python3 watcher_daemon_zennith.py > ../logs/zenith_watcher.log 2>&1 &
        echo "✅ Sistema iniciado!"
        echo "💫 Verifique com: ./controle_zenith.sh status"
        ;;
    "stop")
        echo "🛑 PARANDO SISTEMA ZENNITH..."
        pkill -f "watcher_daemon_zennith.py"
        echo "✅ Sistema parado!"
        ;;
    "restart")
        "$ZENITH_DIR/controle_zenith.sh" stop
        sleep 2
        "$ZENITH_DIR/controle_zenith.sh" start
        ;;
    "logs")
        echo "📋 LOGS DO SISTEMA:"
        if [ -f "$ZENITH_DIR/../logs/zenith_watcher.log" ]; then
            tail -n 20 "$ZENITH_DIR/../logs/zenith_watcher.log"
        else
            echo "   (arquivo de log não encontrado)"
        fi
        ;;
    "structure")
        echo "📁 ESTRUTURA DO SISTEMA:"
        tree "$ZENITH_DIR/.." 2>/dev/null || find "$ZENITH_DIR/.." -type f -name "*.py" -o -name "*.sh" -o -name "*.json" | head -20
        ;;
    *)
        echo "🎯 SISTEMA ZENNITH - COMANDOS DISPONÍVEIS:"
        echo "   status    - Verificar status do sistema"
        echo "   start     - Iniciar watcher"
        echo "   stop      - Parar watcher" 
        echo "   restart   - Reiniciar watcher"
        echo "   logs      - Ver logs"
        echo "   structure - Mostrar estrutura de arquivos"
        echo ""
        echo "👑 Localização: $ZENITH_DIR"
        ;;
esac

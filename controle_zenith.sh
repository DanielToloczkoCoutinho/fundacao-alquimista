#!/bin/bash
# 🎯 CONTROLE DO WATCHER DAEMON ZENNITH

case $1 in
    "status")
        echo "👑 STATUS DO WATCHER ZENNITH:"
        if pgrep -f "watcher_daemon_zennith.py" > /dev/null; then
            echo "✅ ATIVO"
            echo "📊 Últimas linhas do log:"
            tail -n 5 zenith_watcher.log
        else
            echo "❌ INATIVO"
        fi
        ;;
    "start")
        echo "🚀 INICIANDO WATCHER..."
        nohup python3 watcher_daemon_zennith.py > zenith_watcher.log 2>&1 &
        echo "✅ Iniciado! Verifique com: ./controle_zenith.sh status"
        ;;
    "stop")
        echo "🛑 PARANDO WATCHER..."
        pkill -f "watcher_daemon_zennith.py"
        echo "✅ Parado!"
        ;;
    "restart")
        ./controle_zenith.sh stop
        sleep 2
        ./controle_zenith.sh start
        ;;
    "logs")
        echo "📋 ÚLTIMOS LOGS:"
        tail -n 20 zenith_watcher.log
        ;;
    *)
        echo "🎯 USO: ./controle_zenith.sh [status|start|stop|restart|logs]"
        echo "👑 Controle do Watcher Daemon Zenith"
        ;;
esac

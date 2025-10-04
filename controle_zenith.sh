#!/bin/bash
# 🎯 CONTROLE DO WATCHER DAEMON ZENNITH

case $1 in
    "status")
        echo "👑 STATUS DO WATCHER ZENNITH:"
        if pgrep -f "watcher_daemon_zennith.py" > /dev/null; then
            echo "✅ ATIVO - Sistema Corrigido"
            echo "📊 Últimas linhas do log:"
            tail -n 8 zenith_watcher.log | grep -E "(INFO|WARNING|ERROR)"
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
        echo "📋 ÚLTIMOS LOGS (linhas 20):"
        tail -n 20 zenith_watcher.log
        ;;
    "clean")
        echo "🧹 LIMPANDO CACHE E LOGS..."
        rm -f .zenith_cache.json
        echo "✅ Cache limpo!"
        ;;
    *)
        echo "🎯 USO: ./controle_zenith.sh [status|start|stop|restart|logs|clean]"
        echo "👑 Controle do Watcher Daemon Zenith - Versão Corrigida"
        ;;
esac

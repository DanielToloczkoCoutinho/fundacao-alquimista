#!/bin/bash
# 🎯 CONTROLE DO SISTEMA ZENNITH - VERSÃO CORRIGIDA

ZENITH_BIN="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ZENITH_ROOT="$(dirname "$ZENITH_BIN")"

# Garantir que diretórios existam
mkdir -p "$ZENITH_ROOT/logs"
mkdir -p "$ZENITH_ROOT/cache"
mkdir -p "$ZENITH_ROOT/reports"

case $1 in
    "status")
        echo "👑 SISTEMA ZENNITH - STATUS CORRIGIDO"
        echo "📍 Localização: $ZENITH_ROOT"
        echo "📁 Estrutura:"
        find "$ZENITH_ROOT" -type f | head -10 | sed 's/^/   /'
        
        if pgrep -f "watcher_daemon_zennith.py" > /dev/null; then
            echo "✅ WATCHER: ATIVO"
            echo "📊 Últimas linhas do log:"
            if [ -f "$ZENITH_ROOT/logs/zenith_watcher.log" ]; then
                tail -n 5 "$ZENITH_ROOT/logs/zenith_watcher.log" | sed 's/^/   /'
            else
                echo "   (log vazio ou não criado)"
            fi
        else
            echo "❌ WATCHER: INATIVO"
        fi
        ;;
    "start")
        echo "🚀 INICIANDO SISTEMA ZENNITH..."
        cd "$ZENITH_BIN"
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
        "$0" stop
        sleep 2
        "$0" start
        ;;
    "logs")
        echo "📋 LOGS DO SISTEMA:"
        if [ -f "$ZENITH_ROOT/logs/zenith_watcher.log" ]; then
            tail -n 20 "$ZENITH_ROOT/logs/zenith_watcher.log"
        else
            echo "   (arquivo de log não encontrado)"
        fi
        ;;
    "test")
        echo "🧪 TESTANDO SISTEMA ZENNITH..."
        cd "$ZENITH_BIN"
        python3 relatorio_zenith_completo_dinamico.py
        ;;
    *)
        echo "🎯 SISTEMA ZENNITH - COMANDOS CORRIGIDOS:"
        echo "   status    - Verificar status do sistema"
        echo "   start     - Iniciar watcher"
        echo "   stop      - Parar watcher"
        echo "   restart   - Reiniciar watcher"
        echo "   logs      - Ver logs"
        echo "   test      - Testar análise"
        echo ""
        echo "👑 Localização: $ZENITH_BIN"
        ;;
esac

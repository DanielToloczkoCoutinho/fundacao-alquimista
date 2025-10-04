#!/bin/bash
# 🎯 CONTROLE DO SISTEMA ZENNITH MELHORADO

case $1 in
    "status")
        echo "👑 SISTEMA ZENNITH MELHORADO - STATUS"
        echo "===================================="
        
        # Verificar processos
        if pgrep -f "watcher_daemon_zennith_enhanced.py" > /dev/null; then
            echo "✅ WATCHER MELHORADO: ATIVO"
            echo "   🆔 PID: $(pgrep -f 'watcher_daemon_zennith_enhanced.py')"
        else
            echo "❌ WATCHER MELHORADO: INATIVO"
        fi
        
        if pgrep -f "watcher_daemon_zennith.py" > /dev/null; then
            echo "⚠️  WATCHER ORIGINAL: ATIVO (concorrente)"
        else
            echo "✅ WATCHER ORIGINAL: INATIVO"
        fi
        
        # Verificar logs
        echo ""
        echo "📋 LOGS DISPONÍVEIS:"
        for log in zenith_system/logs/zenith_enhanced.log zenith_system/logs/zenith_watcher.log; do
            if [ -f "$log" ]; then
                lines=$(wc -l < "$log" 2>/dev/null || echo "0")
                echo "   $log: $lines linhas"
            fi
        done
        
        # Verificar relatórios
        echo ""
        echo "📊 RELATÓRIOS GERADOS:"
        find firebase_integration/reports test_reports -name "*.md" -o -name "*.png" 2>/dev/null | head -5 | while read file; do
            echo "   📄 $(basename "$file")"
        done
        ;;
    
    "start")
        echo "🚀 INICIANDO SISTEMA ZENNITH MELHORADO..."
        # Parar watchers concorrentes
        pkill -f "watcher_daemon_zennith.py"
        
        # Iniciar watcher melhorado
        cd zenith_system/bin
        nohup python3 watcher_daemon_zennith_enhanced.py > ../logs/zenith_enhanced.log 2>&1 &
        cd ../..
        echo "✅ Sistema iniciado!"
        ;;
    
    "stop")
        echo "🛑 PARANDO SISTEMA ZENNITH..."
        pkill -f "watcher_daemon_zennith_enhanced.py"
        pkill -f "watcher_daemon_zennith.py"
        echo "✅ Sistema parado!"
        ;;
    
    "logs")
        echo "📋 LOGS DO SISTEMA MELHORADO:"
        if [ -f "zenith_system/logs/zenith_enhanced.log" ]; then
            tail -n 20 "zenith_system/logs/zenith_enhanced.log"
        else
            echo "   (arquivo de log não encontrado)"
        fi
        ;;
    
    "test")
        echo "🧪 TESTANDO FUNCIONALIDADES..."
        # Testar Firebase (modo simulação)
        python3 -c "
import sys
sys.path.append('firebase_integration/config')
try:
    from firebase_config import FirebaseManager
    fb = FirebaseManager()
    print('✅ Firebase: Configurado (modo simulação)')
except Exception as e:
    print(f'❌ Firebase: {e}')
        "
        
        # Testar gerador de relatórios
        python3 -c "
import sys
sys.path.append('firebase_integration/reports')
try:
    from markdown_generator import ReportGenerator
    gen = ReportGenerator()
    print('✅ Gerador de Relatórios: Operacional')
except Exception as e:
    print(f'❌ Gerador de Relatórios: {e}')
        "
        ;;
    
    *)
        echo "🎯 SISTEMA ZENNITH MELHORADO - COMANDOS:"
        echo "   status  - Verificar status do sistema"
        echo "   start   - Iniciar watcher melhorado"
        echo "   stop    - Parar todos os watchers"
        echo "   logs    - Ver logs do sistema melhorado"
        echo "   test    - Testar funcionalidades"
        echo ""
        echo "🌌 Estrutura:"
        echo "   firebase_integration/ - Registro e relatórios"
        echo "   react_dashboard/      - Visualização em tempo real"
        echo "   zenith_system/        - Núcleo do sistema"
        ;;
esac

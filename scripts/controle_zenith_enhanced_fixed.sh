#!/bin/bash
# 🎯 CONTROLE DO SISTEMA ZENNITH CORRIGIDO

case $1 in
    "status")
        echo "👑 SISTEMA ZENNITH CORRIGIDO - STATUS"
        echo "===================================="
        
        # Verificar processos
        if pgrep -f "watcher_daemon_zennith_enhanced_fixed.py" > /dev/null; then
            echo "✅ WATCHER CORRIGIDO: ATIVO"
            echo "   🆔 PID: $(pgrep -f 'watcher_daemon_zennith_enhanced_fixed.py')"
        else
            echo "❌ WATCHER CORRIGIDO: INATIVO"
        fi
        
        # Verificar logs
        echo ""
        echo "📋 LOGS DISPONÍVEIS:"
        for log in zenith_system/logs/zenith_enhanced_fixed.log zenith_system/logs/zenith_enhanced.log; do
            if [ -f "$log" ]; then
                lines=$(wc -l < "$log" 2>/dev/null || echo "0")
                echo "   $log: $lines linhas"
            fi
        done
        
        # Verificar relatórios
        echo ""
        echo "📊 RELATÓRIOS GERADOS:"
        find firebase_integration/reports test_reports -name "*.md" -o -name "*.png" 2>/dev/null | head -5 | while read file; do
            if [ -f "$file" ]; then
                echo "   📄 $(basename "$file")"
            fi
        done
        ;;
    
    "start")
        echo "🚀 INICIANDO SISTEMA ZENNITH CORRIGIDO..."
        # Parar watchers antigos
        pkill -f "watcher_daemon_zennith_enhanced.py"
        pkill -f "watcher_daemon_zennith.py"
        
        # Iniciar watcher corrigido
        cd zenith_system/bin
        nohup python3 watcher_daemon_zennith_enhanced_fixed.py > ../logs/zenith_enhanced_fixed.log 2>&1 &
        cd ../..
        echo "✅ Sistema corrigido iniciado!"
        echo "💫 Verifique com: ./controle_zenith_enhanced_fixed.sh status"
        ;;
    
    "stop")
        echo "🛑 PARANDO SISTEMA ZENNITH..."
        pkill -f "watcher_daemon_zennith_enhanced"
        pkill -f "watcher_daemon_zennith.py"
        echo "✅ Sistema parado!"
        ;;
    
    "logs")
        echo "📋 LOGS DO SISTEMA CORRIGIDO:"
        if [ -f "zenith_system/logs/zenith_enhanced_fixed.log" ]; then
            tail -n 20 "zenith_system/logs/zenith_enhanced_fixed.log"
        else
            echo "   (arquivo de log não encontrado)"
        fi
        ;;
    
    "test-modules")
        echo "🧪 TESTANDO MÓDULOS CORRIGIDOS..."
        # Testar gerador de relatórios
        python3 -c "
import sys
sys.path.append('firebase_integration/reports')
try:
    from markdown_generator import ReportGenerator
    gen = ReportGenerator('test_reports_fixed')
    test_data = {
        'module_name': 'Módulo 29 - Teste',
        'qubit_count': 4,
        'fidelity': 0.932,
        'coherence': 0.782,
        'timestamp': '2025-10-04T04:00:00'
    }
    result = gen.generate_markdown_report(test_data, 'test_fixed.md')
    print('✅ Gerador de Relatórios: FUNCIONANDO')
    print(f'   Arquivo: {result}')
except Exception as e:
    print(f'❌ Gerador de Relatórios: {e}')
    import traceback
    traceback.print_exc()
        "
        
        # Testar estrutura do watcher
        echo ""
        echo "🔧 TESTANDO ESTRUTURA DO WATCHER:"
        python3 -c "
import os
import sys
BASE_DIR = os.path.dirname(os.path.abspath('.'))
print(f'📁 BASE_DIR: {BASE_DIR}')

paths = [
    'firebase_integration/config',
    'firebase_integration/reports', 
    'zenith_system/bin'
]

for path in paths:
    full_path = os.path.join(BASE_DIR, path)
    exists = os.path.exists(full_path)
    print(f'{"✅" if exists else "❌"} {path}: {full_path}')
        "
        ;;
    
    *)
        echo "🎯 SISTEMA ZENNITH CORRIGIDO - COMANDOS:"
        echo "   status        - Verificar status do sistema"
        echo "   start         - Iniciar watcher corrigido"
        echo "   stop          - Parar todos os watchers"
        echo "   logs          - Ver logs do sistema corrigido"
        echo "   test-modules  - Testar módulos corrigidos"
        echo ""
        echo "🔧 Esta versão tem:"
        echo "   ✅ Caminhos de importação corrigidos"
        echo "   ✅ Módulos Python funcionais"
        echo "   ✅ Sistema de relatórios operacional"
        ;;
esac

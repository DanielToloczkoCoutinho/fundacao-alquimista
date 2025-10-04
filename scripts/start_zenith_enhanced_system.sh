#!/bin/bash
# 🚀 SISTEMA ZENNITH MELHORADO - INICIALIZADOR COMPLETO

echo "🌌 INICIANDO SISTEMA ZENNITH MELHORADO"
echo "🔥 Funcionalidades: Firebase + Relatórios + Dashboard"
echo "===================================================="

# Verificar estrutura
echo "📁 Verificando estrutura..."
for dir in firebase_integration react_dashboard zenith_system; do
    if [ -d "$dir" ]; then
        echo "✅ $dir/"
    else
        echo "❌ $dir/ - FALTANDO"
    fi
done

# Iniciar Watcher Melhorado
echo ""
echo "🚀 INICIANDO WATCHER MELHORADO..."
cd zenith_system/bin
nohup python3 watcher_daemon_zennith_enhanced.py > ../logs/zenith_enhanced.log 2>&1 &

echo "✅ Sistema Zenith Melhorado iniciado!"
echo ""
echo "🎯 NOVAS FUNCIONALIDADES ATIVAS:"
echo "   🔥 Registro automático no Firebase"
echo "   📝 Geração de relatórios Markdown"
echo "   🎨 Relatórios visuais em PNG"
echo "   📊 Dashboard React Flow em tempo real"
echo ""
echo "💫 Comandos disponíveis:"
echo "   ./zenith_system/bin/controle_zenith.sh status"
echo "   tail -f zenith_system/logs/zenith_enhanced.log"

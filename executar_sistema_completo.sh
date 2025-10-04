#!/bin/bash
echo "🚀 EXECUTANDO SISTEMA ZENITH COMPLETO..."

# Encontrar arquivos principais
WATCHER=$(find . -name "watcher_daemon_zennith_enhanced_fixed.py" -type f | head -1)
ORCHESTRATOR=$(find . -name "orchestrator.py" -type f | head -1) 
DASHBOARD=$(find . -name "conscious_dashboard_fixed.py" -type f | head -1)
INTEGRATOR=$(find . -name "zenith_integrator_fixed.py" -type f | head -1)

echo "📍 Arquivos encontrados:"
echo "Watcher: $WATCHER"
echo "Orchestrator: $ORCHESTRATOR"
echo "Dashboard: $DASHBOARD"
echo "Integrator: $INTEGRATOR"

# Executar se encontrados
if [ -n "$ORCHESTRATOR" ]; then
    echo "🎯 Executando Orchestrator..."
    python "$ORCHESTRATOR"
fi

if [ -n "$DASHBOARD" ]; then
    echo "📊 Executando Dashboard..."
    python "$DASHBOARD"
fi

if [ -n "$INTEGRATOR" ]; then
    echo "🔗 Executando Integrador..."
    python "$INTEGRATOR"
fi

if [ -n "$WATCHER" ]; then
    echo "👁️ Executando Watcher..."
    python "$WATCHER"
fi

echo "✅ Sistema Zenith executado!"

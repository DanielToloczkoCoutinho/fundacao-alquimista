#!/bin/bash
# Laboratório 1 - IBM Research Quantum

echo "🔬 INICIANDO LABORATÓRIO 1 - IBM RESEARCH QUANTUM"
echo "================================================"

# Configurar ambiente
export LAB_NAME="IBM_Quantum_Research"
export PYTHONPATH="/home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada:$PYTHONPATH"

# Executar integrador IBM
python3 laboratorios/lab1_ibm/ibm_quantum_integrator.py

# Verificar resultados
if [ -f "laboratorios/lab1_ibm/daily_report.json" ]; then
    echo "✅ Laboratório 1 executado com sucesso!"
    echo "📊 Relatório: laboratorios/lab1_ibm/daily_report.json"
else
    echo "❌ Erro na execução do Laboratório 1"
    exit 1
fi

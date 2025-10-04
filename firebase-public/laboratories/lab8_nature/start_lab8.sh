#!/bin/bash
# Laboratório 8 - Nature Quantum Information

echo "🏆 INICIANDO LABORATÓRIO 8 - NATURE QUANTUM INFORMATION"
echo "======================================================"

python3 laboratorios/lab8_nature/nature_quantum_validator.py

if [ -f "laboratorios/lab8_nature/nature_analysis_report.json" ]; then
    echo "✅ Laboratório 8 executado com sucesso!"
    echo "📊 Relatório: laboratorios/lab8_nature/nature_analysis_report.json"
else
    echo "❌ Erro na execução do Laboratório 8"
    exit 1
fi

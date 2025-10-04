#!/bin/bash
# Laboratório 4 - Google Quantum AI

echo "🔄 INICIANDO LABORATÓRIO 4 - GOOGLE QUANTUM AI"
echo "=============================================="

python3 laboratorios/lab4_google/google_quantum_ai.py

if [ -f "laboratorios/lab4_google/google_analysis_report.json" ]; then
    echo "✅ Laboratório 4 executado com sucesso!"
    echo "📊 Relatório: laboratorios/lab4_google/google_analysis_report.json"
else
    echo "❌ Erro na execução do Laboratório 4"
    exit 1
fi

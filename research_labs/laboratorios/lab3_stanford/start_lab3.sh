#!/bin/bash
# Laboratório 3 - Stanford Quantum Engineering

echo "🔧 INICIANDO LABORATÓRIO 3 - STANFORD QUANTUM ENGINEERING"
echo "========================================================"

python3 laboratorios/lab3_stanford/stanford_engineering.py

if [ -f "laboratorios/lab3_stanford/stanford_analysis_report.json" ]; then
    echo "✅ Laboratório 3 executado com sucesso!"
    echo "📊 Relatório: laboratorios/lab3_stanford/stanford_analysis_report.json"
else
    echo "❌ Erro na execução do Laboratório 3"
    exit 1
fi

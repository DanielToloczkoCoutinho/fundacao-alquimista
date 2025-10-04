#!/bin/bash
# Laboratório 5 - NASA Advanced Supercomputing

echo "🌌 INICIANDO LABORATÓRIO 5 - NASA ADVANCED SUPERCOMPUTING"
echo "========================================================"

python3 laboratorios/lab5_nasa/nasa_supercomputing.py

if [ -f "laboratorios/lab5_nasa/nasa_analysis_report.json" ]; then
    echo "✅ Laboratório 5 executado com sucesso!"
    echo "📊 Relatório: laboratorios/lab5_nasa/nasa_analysis_report.json"
else
    echo "❌ Erro na execução do Laboratório 5"
    exit 1
fi

#!/bin/bash
# Laboratório 7 - arXiv Quantum Physics

echo "📊 INICIANDO LABORATÓRIO 7 - ARXIV QUANTUM PHYSICS"
echo "=================================================="

python3 laboratorios/lab7_arxiv/arxiv_quantum_monitor.py

if [ -f "laboratorios/lab7_arxiv/arxiv_analysis_report.json" ]; then
    echo "✅ Laboratório 7 executado com sucesso!"
    echo "📊 Relatório: laboratorios/lab7_arxiv/arxiv_analysis_report.json"
else
    echo "❌ Erro na execução do Laboratório 7"
    exit 1
fi

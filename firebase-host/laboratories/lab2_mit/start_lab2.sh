#!/bin/bash
# Laboratório 2 - MIT CSAIL

echo "🧠 INICIANDO LABORATÓRIO 2 - MIT CSAIL"
echo "======================================"

# Executar laboratório MIT
python3 laboratorios/lab2_mit/mit_ai_quantum.py

# Verificar resultados
if [ -f "laboratorios/lab2_mit/mit_analysis_report.json" ]; then
    echo "✅ Laboratório 2 executado com sucesso!"
    echo "📊 Relatório: laboratorios/lab2_mit/mit_analysis_report.json"
else
    echo "❌ Erro na execução do Laboratório 2"
    exit 1
fi

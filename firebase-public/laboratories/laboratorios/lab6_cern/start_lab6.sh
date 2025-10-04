#!/bin/bash
# Laboratório 6 - CERN Open Data

echo "🔬 INICIANDO LABORATÓRIO 6 - CERN PARTICLE PHYSICS"
echo "=================================================="

python3 laboratorios/lab6_cern/cern_particle_physics.py

if [ -f "laboratorios/lab6_cern/cern_analysis_report.json" ]; then
    echo "✅ Laboratório 6 executado com sucesso!"
    echo "📊 Relatório: laboratorios/lab6_cern/cern_analysis_report.json"
else
    echo "❌ Erro na execução do Laboratório 6"
    exit 1
fi

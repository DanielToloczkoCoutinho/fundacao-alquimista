#!/bin/bash
# SISTEMA DE LABORATÓRIOS - FUNDAÇÃO ALQUIMISTA

echo "🌌 INICIANDO SISTEMA DE LABORATÓRIOS ESPECIALIZADOS"
echo "=================================================="

# Criar estrutura de diretórios
echo "📁 Criando estrutura de diretórios..."
mkdir -p laboratorios/{lab1_ibm,lab2_mit,lab3_stanford,lab4_google,lab5_nasa,lab6_cern,lab7_arxiv,lab8_nature}
mkdir -p laboratorios/shared/{apis,data,scripts,reports}

# Executar orquestrador
echo "🚀 Executando orquestrador de laboratórios..."
python3 laboratorios/orchestrator.py

# Verificar resultados
if [ -f "laboratorios/consolidated_lab_report.json" ]; then
    echo ""
    echo "✅ SISTEMA DE LABORATÓRIOS EXECUTADO COM SUCESSO!"
    echo ""
    echo "📊 RELATÓRIOS GERADOS:"
    find laboratorios/ -name "*.json" -type f | head -10
else
    echo "❌ Erro na execução do sistema de laboratórios"
    exit 1
fi

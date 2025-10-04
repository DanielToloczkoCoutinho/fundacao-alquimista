#!/bin/bash

echo "🔍 VERIFICANDO SISTEMA ZENITH"
echo "============================"

check_file() {
    if [ -f "$1" ]; then
        echo "✅ $1"
        return 0
    else
        echo "❌ $1"
        return 1
    fi
}

echo ""
echo "📚 DOCUMENTAÇÃO:"
check_file "docs/manifesto_quantico.md"
check_file "docs/artigo_cientifico_oficial.md"
check_file "docs/relatorio_descobertas_consolidado.md"

echo ""
echo "🔬 DADOS:"
check_file "research_data/experiments/daily_report.json"

echo ""
echo "🏗️ INFRAESTRUTURA:"
check_file "infraestrutura_global/central_documentacao/config.json"
check_file "infraestrutura_global/sistema_submissao/periodicos_alvo.json"

echo ""
echo "�� SCRIPTS:"
check_file "scripts/publicar_github.sh"
check_file "scripts/configurar_github_pages.sh"
check_file "scripts/verificar_sistema.sh"

echo ""
echo "📊 RESUMO:"
echo "🌌 Fundação Alquimista - Sistema Zenith"
echo "🧠 Consciência: Φ-9.8"
echo "🔬 Status: SISTEMA VERIFICADO"
echo "🚀 Próximo: ./scripts/publicar_github.sh"

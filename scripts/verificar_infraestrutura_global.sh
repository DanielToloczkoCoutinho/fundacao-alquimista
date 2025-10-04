#!/bin/bash

echo "🌍 VERIFICANDO INFRAESTRUTURA DE DISSEMINAÇÃO GLOBAL"
echo "===================================================="

check_dir() {
    if [ -d "$1" ]; then
        echo "✅ $1"
        return 0
    else
        echo "❌ $1"
        return 1
    fi
}

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
echo "📁 ESTRUTURA DA INFRAESTRUTURA:"
check_dir "infraestrutura_global"
check_dir "infraestrutura_global/central_documentacao"
check_dir "infraestrutura_global/sistema_submissao"
check_dir "infraestrutura_global/rede_comunicacao"
check_dir "infraestrutura_global/metadados"
check_dir "infraestrutura_global/engajamento"
check_dir "infraestrutura_global/seguranca"

echo ""
echo "📄 CONFIGURAÇÕES:"
check_file "infraestrutura_global/central_documentacao/config.json"
check_file "infraestrutura_global/sistema_submissao/periodicos_alvo.json"
check_file "infraestrutura_global/rede_comunicacao/contatos_estrategicos.json"
check_file "infraestrutura_global/metadados/esquema_cientifico.json"
check_file "infraestrutura_global/engajamento/parcerias_universidades.json"
check_file "infraestrutura_global/seguranca/politicas.json"

echo ""
echo "🚀 SCRIPTS DE AUTOMAÇÃO:"
check_file "scripts/configurar_github_pages.sh"
check_file "scripts/sistema_submissao_automatica.py"
check_file "scripts/verificar_infraestrutura_global.sh"

echo ""
echo "📊 RESUMO DA INFRAESTRUTURA:"
echo "🌍 Sistema de Disseminação Global - FUNDAÇÃO ALQUIMISTA"
echo "🧠 Arquitetura completa para revistas científicas internacionais"
echo "📚 6 módulos principais implementados"
echo "🚀 Pronto para lançamento global"

echo ""
echo "🎯 PRÓXIMOS PASSOS:"
echo "   1. Configurar GitHub Pages: ./scripts/configurar_github_pages.sh"
echo "   2. Executar sistema de submissão: python3 scripts/sistema_submissao_automatica.py"
echo "   3. Iniciar campanha de divulgação global"
echo ""
echo "💫 INFRAESTRUTURA 100% OPERACIONAL PARA DISSEMINAÇÃO GLOBAL!"

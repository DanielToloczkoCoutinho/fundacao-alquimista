#!/bin/bash

# =============================================
# 🚀 DEPLOY COMPLETO - FUNDAÇÃO ALQUIMISTA
# =============================================

set -e  # Para em caso de erro

echo "🧪 INICIANDO DEPLOY COMPLETO..."
echo "========================================"

# Funções de utilidade
check_command() {
    if ! command -v $1 &> /dev/null; then
        echo "❌ $1 não encontrado. Instale antes de continuar."
        exit 1
    fi
}

# Verificar dependências
check_command git
check_command python3

# 1. Validar integridade do studio
echo "1. 🧪 Validando integridade do studio..."
python3 verificar_integridade_sistemica.py

# 2. Executar rituais de proteção
echo "2. 🛡️ Executando rituais de proteção..."
./ritual_protecao.sh

# 3. Verificar módulos
echo "3. 📦 Verificando módulos..."
./validar-modulos.sh

# 4. Atualizar GitHub
echo "4. 🔄 Atualizando GitHub..."
./atualizar_github.sh

# 5. Gerar relatório final
echo "5. 📊 Gerando relatório final..."
{
    echo "DEPLOY COMPLETO - FUNDAÇÃO ALQUIMISTA"
    echo "========================================"
    echo "Data: $(date)"
    echo "Branch: $(git branch --show-current)"
    echo "Commit: $(git log -1 --oneline)"
    echo "Módulos: $(find . -name 'MODULO_*' -type d | wc -l)"
    echo "Status: ✅ CONCLUÍDO COM SUCESSO"
} > relatorio_deploy_$(date +%Y%m%d_%H%M%S).txt

echo "========================================"
echo "🎉 DEPLOY CONCLUÍDO COM SUCESSO!"
echo "📁 Relatório salvo em: relatorio_deploy_*.txt"

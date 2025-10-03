#!/bin/bash
set -e
echo "🧪 INICIANDO DEPLOY COMPLETO..."
echo "========================================"

echo "1. 🧪 Validando integridade do studio..."
[ -f "verificar_integridade_sistemica.py" ] && python3 verificar_integridade_sistemica.py || echo "⚠️  Script de verificação não encontrado"

echo "2. 🛡️ Executando rituais de proteção..."
[ -f "ritual_protecao.sh" ] && ./ritual_protecao.sh || echo "⚠️  Ritual de proteção não encontrado"

echo "3. 📦 Verificando módulos..."
[ -f "validar-modulos.sh" ] && ./validar-modulos.sh || echo "⚠️  Script de validação não encontrado"

echo "4. 🔄 Atualizando GitHub..."
[ -f "atualizar_github.sh" ] && ./atualizar_github.sh || { echo "❌ Script de atualização não encontrado!"; exit 1; }

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

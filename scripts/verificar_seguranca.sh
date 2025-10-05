#!/bin/bash
# 🔒 VERIFICAÇÃO DE SEGURANÇA CONTÍNUA

echo "🛡️ VERIFICAÇÃO DE SEGURANÇA - $(date)"
echo "===================================="

# Verificar dependências vulneráveis
if command -v npm &> /dev/null; then
    echo "📦 Verificando vulnerabilidades NPM..."
    npm audit --audit-level moderate 2>/dev/null || echo "⚠️  NPM audit não disponível"
fi

# Verificar arquivos sensíveis
echo "🔍 Verificando arquivos sensíveis..."
find . -name "*.env*" -o -name "*config*.json" -o -name "*.key*" 2>/dev/null | head -5

# Verificar permissões
echo "📋 Verificando permissões de arquivos..."
find . -type f -name "*.sh" -exec ls -la {} \; | head -5

echo "✅ Verificação de segurança concluída!"

#!/bin/bash
# ⚡ SALVAMENTO RÁPIDO - 1 CLIQUE

echo "⚡ SALVAMENTO RÁPIDO - $(date '+%H:%M:%S')"
echo "========================================"

# Verificar Git
if [ ! -d ".git" ]; then
    echo "❌ Git não configurado!"
    exit 1
fi

# Salvar rapidamente
git add . >/dev/null 2>&1
git commit -m "⚡ SALVAMENTO RÁPIDO - $(date '+%d/%m/%Y %H:%M:%S')" >/dev/null 2>&1

if [ $? -eq 0 ]; then
    echo "✅ Salvo! $(date '+%H:%M:%S')"
    # Tentar push em segundo plano
    git push origin main >/dev/null 2>&1 &
    echo "�� GitHub: Sincronizando em background..."
else
    echo "✅ Alterações já salvas"
fi

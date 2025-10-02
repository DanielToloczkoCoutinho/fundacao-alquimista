#!/bin/bash
echo "🚨 INICIANDO LIMPEZA DE EMERGÊNCIA DO SISTEMA..."
echo "Liberando espaço crítico em disco..."

# Limpar caches
rm -rf ~/studio/node_modules/.cache 2>/dev/null
rm -rf ~/studio/.next/cache 2>/dev/null
rm -rf ~/.npm 2>/dev/null
rm -rf ~/.pnpm-store 2>/dev/null

# Remover arquivos SWC duplicados
find ~/studio -name "next-swc.linux-x64-*.node" -size +50M -delete 2>/dev/null

echo "✅ Limpeza de emergência concluída!"
df -h /home

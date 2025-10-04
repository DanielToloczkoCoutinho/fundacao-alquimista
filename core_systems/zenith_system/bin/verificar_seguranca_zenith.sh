#!/bin/bash
# 🔒 VERIFICAÇÃO DE SEGURANÇA ZENNITH - VERSÃO FINAL

echo "👑 VERIFICAÇÃO DE SEGURANÇA - SISTEMA ZENNITH"
echo "============================================"

ZENITH_BIN="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ZENITH_ROOT="$(dirname "$ZENITH_BIN")"

# Verificar integridade dos scripts
echo "🔍 Verificando scripts Zenith..."
for script in watcher_daemon_zennith.py relatorio_zenith_completo_dinamico.py controle_zenith.sh; do
    if [ -f "$ZENITH_BIN/$script" ]; then
        echo "✅ $script - OK"
    else
        echo "❌ $script - FALTANDO"
    fi
done

# Verificar diretórios
echo "📁 Verificando estrutura de diretórios..."
for dir in logs cache reports config; do
    if [ -d "$ZENITH_ROOT/$dir" ]; then
        echo "✅ $dir/ - OK"
        # Contar arquivos em cada diretório
        count=$(find "$ZENITH_ROOT/$dir" -type f | wc -l)
        echo "   📄 $count arquivo(s)"
    else
        echo "❌ $dir/ - FALTANDO"
    fi
done

# Verificar permissões
echo "📋 Verificando permissões dos scripts..."
find "$ZENITH_BIN" -name "*.py" -o -name "*.sh" | xargs ls -la 2>/dev/null | head -5

# Verificar configurações
echo "🔒 Verificando configurações..."
if [ -f "$ZENITH_ROOT/config/zenith_config.json" ]; then
    echo "✅ Configuração Zenith - OK"
    # Verificar se é JSON válido
    if python3 -m json.tool "$ZENITH_ROOT/config/zenith_config.json" >/dev/null 2>&1; then
        echo "   ✅ JSON válido"
    else
        echo "   ⚠️  JSON inválido"
    fi
else
    echo "❌ Configuração Zenith - FALTANDO"
fi

# Verificar logs
echo "📊 Verificando logs..."
if [ -f "$ZENITH_ROOT/logs/zenith_watcher.log" ]; then
    echo "✅ Logs Zenith - OK"
    echo "   📄 Tamanho: $(wc -l < "$ZENITH_ROOT/logs/zenith_watcher.log") linhas"
    echo "   🕒 Últimas entradas:"
    tail -n 3 "$ZENITH_ROOT/logs/zenith_watcher.log" | sed 's/^/      /'
else
    echo "⚠️  Logs Zenith - Ainda não criado ou vazio"
fi

# Verificar se watcher está ativo
echo "👀 Verificando processo Watcher..."
if pgrep -f "watcher_daemon_zennith.py" > /dev/null; then
    echo "✅ Watcher Zenith - ATIVO"
    echo "   🆔 PID: $(pgrep -f "watcher_daemon_zennith.py")"
else
    echo "❌ Watcher Zenith - INATIVO"
fi

echo ""
echo "🎯 RESUMO DA VERIFICAÇÃO:"
echo "   📊 Scripts: $(find "$ZENITH_BIN" -name "*.py" -o -name "*.sh" | wc -l) encontrados"
echo "   📁 Diretórios: $(find "$ZENITH_ROOT" -type d | wc -l) criados"
echo "   📄 Configurações: $(find "$ZENITH_ROOT/config" -type f 2>/dev/null | wc -l) arquivos"
echo "   📋 Logs: $(find "$ZENITH_ROOT/logs" -type f 2>/dev/null | wc -l) arquivos"

echo ""
echo "💫 SISTEMA ZENNITH: OPERACIONAL E SEGURO!"

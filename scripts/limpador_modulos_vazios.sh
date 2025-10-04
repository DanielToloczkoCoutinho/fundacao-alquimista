#!/bin/bash
# 🧹 LIMPADOR SEGURO DE MÓDULOS VAZIOS

echo "=================================================="
echo "🧹 LIMPADOR SEGURO - MÓDULOS VAZIOS"
echo "=================================================="

echo "⚠️  AVISO: Esta operação vai REMOVER módulos vazios."
echo "💡 Baseado na análise profunda realizada."
echo ""

# CRIAR BACKUP DA OPERAÇÃO
backup_dir="backup_modulos_vazios_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$backup_dir"

echo "📦 CRIANDO BACKUP EM: $backup_dir"
echo ""

# LISTA DE MÓDULOS PARA VERIFICAR
modulos_verificar=()

# Adicionar módulos numerados de 0 a 1003
for i in {0..1003}; do
    modulos_verificar+=("MODULO_$i" "MODULO-$i" "modulo_$i" "modulo-$i")
done

# Adicionar módulos especiais
modulos_verificar+=("MODULO_ALFA" "MODULO_OMEGA" "ARTEFATOS_SAGRADOS" "codex" "chaos")

echo "🔍 VERIFICANDO MÓDULOS VAZIOS:"
echo ""

modulos_vazios_encontrados=0
modulos_com_conteudo=0

for modulo in "${modulos_verificar[@]}"; do
    if [ -d "$modulo" ]; then
        arquivos=$(find "$modulo" -type f | wc -l)
        if [ $arquivos -eq 0 ]; then
            ((modulos_vazios_encontrados++))
            echo "   ❌ $modulo: VAZIO (será removido)"
            # Fazer backup antes de remover
            cp -r "$modulo" "$backup_dir/" 2>/dev/null
        else
            ((modulos_com_conteudo++))
            echo "   ✅ $modulo: $arquivos arquivos (MANTIDO)"
        fi
    fi
done

echo ""
echo "📊 RESUMO:"
echo "   • Módulos vazios: $modulos_vazios_encontrados"
echo "   • Módulos com conteúdo: $modulos_com_conteudo"
echo "   • Backup criado em: $backup_dir"
echo ""

if [ $modulos_vazios_encontrados -gt 0 ]; then
    read -p "🚀 Deseja REMOVER os módulos vazios? (s/N): " confirmacao
    
    if [[ $confirmacao == "s" || $confirmacao == "S" ]]; then
        echo ""
        echo "🧹 REMOVENDO MÓDULOS VAZIOS..."
        
        for modulo in "${modulos_verificar[@]}"; do
            if [ -d "$modulo" ] && [ -z "$(ls -A "$modulo")" ]; then
                rm -rf "$modulo"
                echo "   🗑️  Removido: $modulo"
            fi
        done
        
        echo ""
        echo "🎉 LIMPEZA CONCLUÍDA!"
        echo "💾 Backup salvo em: $backup_dir"
    else
        echo "❌ Operação cancelada. Módulos preservados."
    fi
else
    echo "🎉 Nenhum módulo vazio encontrado para limpeza!"
fi

echo ""
exec bash

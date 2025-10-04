#!/bin/bash
# 📍 VERIFICADOR DOS DIRETÓRIOS REAIS COM CONTEÚDO

echo "=================================================="
echo "📍 VERIFICADOR - DIRETÓRIOS REAIS COM CONTEÚDO"
echo "=================================================="

# LISTA DE DIRETÓRIOS REAIS PARA VERIFICAR
diretorios_reais=(
    "/home/user/studio/fundacao-alquimista-luxnet/src"
    "/home/user/studio/app" 
    "/home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada"
    "/home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada_completa"
    "/home/user/studio"
    "/home/user/studio/fundacao-alquimista-luxnet"
)

echo "🔍 VERIFICANDO DIRETÓRIOS REAIS:"
echo ""

for dir in "${diretorios_reais[@]}"; do
    if [ -d "$dir" ]; then
        arquivos=$(find "$dir" -type f 2>/dev/null | wc -l)
        tamanho=$(du -sh "$dir" 2>/dev/null | cut -f1 || echo "N/A")
        echo "   ✅ $dir"
        echo "      📊 $arquivos arquivos"
        echo "      💾 $tamanho"
        
        # Mostrar tecnologias principais
        if [ $arquivos -gt 0 ]; then
            echo "      🔧 Principais tecnologias:"
            find "$dir" -type f -name "*.*" 2>/dev/null | sed 's/.*\.//' | sort | uniq -c | sort -nr | head -3 | while read count ext; do
                echo "         • $ext ($count)"
            done
        fi
    else
        echo "   ❌ $dir - NÃO ENCONTRADO"
    fi
    echo ""
done

echo "📈 RESUMO DA SITUAÇÃO REAL:"
echo "   • Diretórios com conteúdo real identificados"
echo "   • Módulos vazios podem ser limpos"
echo "   • Foco nos diretórios verificados acima"
echo ""

exec bash

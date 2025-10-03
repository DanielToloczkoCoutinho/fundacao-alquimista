#!/bin/bash

# 🌌 NAVEGADOR DA FUNDAÇÃO COMPLETA
# Para a pasta onde os arquivos REALMENTE estão

echo "🌌 NAVEGADOR - FUNDAÇÃO COMPLETA TRANSFERIDA"
echo "═══════════════════════════════════════════════════"
echo "👑 ZENNITH & ANATHERON"
echo "📊 $(find . -type f | wc -l) arquivos | $(find . -type d | wc -l) diretórios"
echo ""

while true; do
    echo "🎯 DIRETÓRIOS DISPONÍVEIS:"
    echo "----------------------------------------"
    ls -d */ 2>/dev/null | head -20
    
    echo ""
    echo -n "👉 Digite o nome do diretório (ou 'sair'): "
    read choice
    
    if [ "$choice" == "sair" ]; then
        echo "✨ Exploração concluída!"
        break
    fi
    
    if [ -d "$choice" ]; then
        echo ""
        echo "📁 CONTEÚDO DE: $choice"
        echo "----------------------------------------"
        file_count=$(find "$choice" -type f 2>/dev/null | wc -l)
        echo "📊 Total de arquivos: $file_count"
        echo ""
        echo "🎯 ARQUIVOS PRINCIPAIS:"
        find "$choice" -type f \( -name "*.py" -o -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.sh" -o -name "*.md" \) 2>/dev/null | head -10 | while read file; do
            size=$(du -h "$file" 2>/dev/null | cut -f1)
            echo "   📄 $(basename "$file") ($size)"
        done
        
        if [ "$file_count" -gt 10 ]; then
            echo "   ... e mais $(($file_count - 10)) arquivos"
        fi
    else
        echo "❌ Diretório não encontrado: $choice"
    fi
    
    echo ""
done

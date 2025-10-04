#!/bin/bash
# 🔢 ANALISADOR ESPECÍFICO DE MÓDULOS 0-1003

echo "=================================================="
echo "🔢 ANALISADOR DE MÓDULOS 0-1003"
echo "=================================================="

# Criar relatório detalhado
relatorio="relatorio_modulos_$(date +%Y%m%d_%H%M%S).txt"

{
    echo "RELATÓRIO DE MÓDULOS - FUNDAÇÃO ALQUIMISTA"
    echo "Data: $(date)"
    echo "Localização: $(pwd)"
    echo "=========================================="
    echo ""
    
    # Analisar cada módulo de 0 a 1003
    modulos_encontrados=0
    modulos_vazios=0
    total_arquivos=0
    
    for i in {0..1003}; do
        modulo="MODULO_$i"
        if [ -d "$modulo" ]; then
            ((modulos_encontrados++))
            arquivos=$(find "$modulo" -type f | wc -l)
            total_arquivos=$((total_arquivos + arquivos))
            tamanho=$(du -sh "$modulo" 2>/dev/null | cut -f1 || echo "0K")
            
            if [ $arquivos -eq 0 ]; then
                ((modulos_vazios++))
                echo "🧩 $modulo: VAZIO ($tamanho)"
            else
                echo "🧩 $modulo: $arquivos arquivos ($tamanho)"
                # Detalhar tipos de arquivos
                find "$modulo" -type f -name "*.*" | sed 's/.*\.//' | sort | uniq | while read ext; do
                    count=$(find "$modulo" -name "*.$ext" -type f | wc -l)
                    echo "   🔧 .$ext: $count"
                done
            fi
        fi
    done
    
    echo ""
    echo "=========================================="
    echo "📊 ESTATÍSTICAS FINAIS:"
    echo "   • Módulos encontrados: $modulos_encontrados/1004"
    echo "   • Módulos vazios: $modulos_vazios"
    echo "   • Total de arquivos: $total_arquivos"
    echo "   • Taxa de preenchimento: $((modulos_encontrados * 100 / 1004))%"
    
} | tee "$relatorio"

echo ""
echo "📄 Relatório salvo em: $relatorio"
echo "🎯 Use 'cat $relatorio' para ver o relatório completo"

exec bash

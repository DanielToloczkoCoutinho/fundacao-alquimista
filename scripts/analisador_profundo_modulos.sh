#!/bin/bash
# 🔍 ANALISADOR PROFUNDO DE MÓDULOS E DUPLICATAS
# 👑 Verifica CADA arquivo entre os 5.230 para organizar a Fundação

echo "========================================================"
echo "🔍 ANALISADOR PROFUNDO - MÓDULOS E DUPLICATAS"
echo "========================================================"
echo "👑 Zennith & Anatheron - Análise Microscópica Iniciada"
echo "📍 Localização: $(pwd)"
echo ""

# RELATÓRIO COMPLETO
relatorio="analise_profunda_$(date +%Y%m%d_%H%M%S).txt"

{
    echo "RELATÓRIO DE ANÁLISE PROFUNDA - FUNDAÇÃO ALQUIMISTA"
    echo "Data: $(date)"
    echo "Total de arquivos analisados: $(find . -type f | wc -l)"
    echo "========================================================"
    echo ""

    # 1. ANALISAR DUPLICATAS POR CONTEÚDO (não apenas nome)
    echo "1. 🔍 BUSCANDO DUPLICATAS POR CONTEÚDO:"
    echo "   -----------------------------------------"
    
    # Encontrar possíveis duplicatas por padrão de nome
    echo "   📊 ANALISANDO PADRÕES DE NOME:"
    
    padroes=("MODULO" "modulo" "MODULO-" "modulo-" "MODULO_" "modulo_" "MODULO " "modulo ")
    
    for padrao in "${padroes[@]}"; do
        echo ""
        echo "   🔎 Padrão: '$padrao'"
        find . -type d -name "*${padrao}*" | while read dir; do
            arquivos=$(find "$dir" -type f | wc -l)
            echo "      📁 $dir - $arquivos arquivos"
        done | head -10
    done
    
    # 2. VERIFICAR CONTEÚDO REAL DOS DIRETÓRIOS
    echo ""
    echo "2. 📂 CONTEÚDO REAL DOS DIRETÓRIOS PRINCIPAIS:"
    echo "   -----------------------------------------"
    
    diretorios_chave=("fundacao_unificada" "fundacao_unificada_completa" "src" "app")
    
    for dir in "${diretorios_chave[@]}"; do
        if [ -d "$dir" ]; then
            echo ""
            echo "   �� $dir/:"
            echo "      📊 Arquivos: $(find "$dir" -type f | wc -l)"
            echo "      💾 Tamanho: $(du -sh "$dir" | cut -f1)"
            echo "      🔧 Tecnologias:"
            find "$dir" -type f -name "*.*" | sed 's/.*\.//' | sort | uniq -c | sort -nr | head -5 | while read count ext; do
                echo "         • $ext: $count arquivos"
            done
        fi
    done

    # 3. ANALISAR MÓDULOS NUMERADOS ESPECIFICAMENTE
    echo ""
    echo "3. 🔢 ANÁLISE DETALHADA DOS MÓDULOS NUMERADOS:"
    echo "   -----------------------------------------"
    
    # Verificar TODOS os módulos de 0 a 1003
    modulos_com_conteudo=0
    modulos_vazios=0
    
    for i in {0..1003}; do
        variacoes=("MODULO_$i" "MODULO-$i" "modulo_$i" "modulo-$i" "MODULO $i" "modulo $i")
        
        for modulo in "${variacoes[@]}"; do
            if [ -d "$modulo" ]; then
                arquivos=$(find "$modulo" -type f | wc -l)
                if [ $arquivos -gt 0 ]; then
                    ((modulos_com_conteudo++))
                    echo "   ✅ $modulo: $arquivos arquivos"
                    # Listar tipos de arquivos
                    find "$modulo" -type f -name "*.*" | sed 's/.*\.//' | sort | uniq | while read ext; do
                        count=$(find "$modulo" -name "*.$ext" -type f | wc -l)
                        echo "      🔧 .$ext: $count"
                    done
                else
                    ((modulos_vazios++))
                    echo "   ❌ $modulo: VAZIO"
                fi
            fi
        done
    done | head -50  # Mostrar apenas os primeiros 50 resultados

    # 4. VERIFICAR DIRETÓRIOS REAIS COM CONTEÚDO
    echo ""
    echo "4. 🏗️ DIRETÓRIOS REAIS COM CONTEÚDO:"
    echo "   -----------------------------------------"
    
    echo "   🔍 Verificando /home/user/studio/fundacao-alquimista-luxnet/src:"
    if [ -d "/home/user/studio/fundacao-alquimista-luxnet/src" ]; then
        echo "      ✅ EXISTE - $(find "/home/user/studio/fundacao-alquimista-luxnet/src" -type f | wc -l) arquivos"
    else
        echo "      ❌ NÃO ENCONTRADO"
    fi
    
    echo "   �� Verificando /home/user/studio/app:"
    if [ -d "/home/user/studio/app" ]; then
        echo "      ✅ EXISTE - $(find "/home/user/studio/app" -type f | wc -l) arquivos"
    else
        echo "      ❌ NÃO ENCONTRADO"
    fi

    # 5. MAPEAR TODAS AS TECNOLOGIAS
    echo ""
    echo "5. 🔧 MAPEAMENTO COMPLETO DE TECNOLOGIAS:"
    echo "   -----------------------------------------"
    
    find . -type f -name "*.*" | sed 's/.*\.//' | sort | uniq -c | sort -nr | while read count ext; do
        echo "   🔧 $ext: $count arquivos"
    done | head -20

    # RESUMO FINAL
    echo ""
    echo "========================================================"
    echo "📊 RESUMO FINAL DA ANÁLISE PROFUNDA:"
    echo "   • Total de arquivos analisados: $(find . -type f | wc -l)"
    echo "   • Módulos com conteúdo: $modulos_com_conteudo"
    echo "   • Módulos vazios: $modulos_vazios"
    echo "   • Diretórios principais verificados: ${#diretorios_chave[@]}"
    echo ""
    echo "🎯 RECOMENDAÇÕES:"
    echo "   1. Focar nos diretórios REAIS com conteúdo"
    echo "   2. Limpar módulos vazios duplicados"
    echo "   3. Consolidar estrutura baseada na análise"
    echo "   4. Preservar apenas o que tem conteúdo real"

} | tee "$relatorio"

echo ""
echo "📄 RELATÓRIO COMPLETO SALVO EM: $relatorio"
echo "🎯 Use 'cat $relatorio' para análise detalhada"
echo ""

exec bash

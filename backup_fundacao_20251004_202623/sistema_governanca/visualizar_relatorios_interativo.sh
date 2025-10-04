#!/bin/bash

echo "📊 VISUALIZADOR DE RELATÓRIOS INTERATIVO"
echo "========================================"

visualizar_relatorio_global() {
    local relatorio_file="$1"
    
    if [ ! -f "$relatorio_file" ]; then
        echo "❌ Relatório não encontrado: $relatorio_file"
        return 1
    fi
    
    echo ""
    echo "📖 CONTEÚDO DO RELATÓRIO:"
    echo "========================="
    cat "$relatorio_file"
    echo ""
    echo "📁 Local: $relatorio_file"
}

listar_todos_relatorios() {
    echo "📋 TODOS OS RELATÓRIOS DISPONÍVEIS:"
    echo "=================================="
    
    echo ""
    echo "📊 RELATÓRIOS DE GOVERNANÇA:"
    echo "---------------------------"
    local count_gov=1
    for relatorio in sistema_governanca/processos/comunicacao/relatorios/relatorio_*.md; do
        if [ -f "$relatorio" ]; then
            relatorio_name=$(basename "$relatorio")
            echo "   $count_gov. 📅 $relatorio_name"
            ((count_gov++))
        fi
    done
    
    echo ""
    echo "🌟 RELATÓRIOS ZENITH:"
    echo "-------------------"
    local count_zen=1
    for relatorio in sistema_principal/conexao_zenith/relatorio_evolucao_*.md; do
        if [ -f "$relatorio" ]; then
            relatorio_name=$(basename "$relatorio")
            echo "   $count_zen. 🌌 $relatorio_name"
            ((count_zen++))
        fi
    done
    
    echo ""
    echo "🔬 AVALIAÇÕES DE LABORATÓRIOS:"
    echo "----------------------------"
    local count_aval=1
    for avaliacao in sistema_governanca/processos/avaliacoes/*_avaliacao.json; do
        if [ -f "$avaliacao" ]; then
            avaliacao_name=$(basename "$avaliacao")
            echo "   $count_aval. 📈 $avaliacao_name"
            ((count_aval++))
        fi
    done
}

get_relatorio_by_number() {
    local numero=$1
    local count=1
    
    # Procurar nos relatórios de governança
    for relatorio in sistema_governanca/processos/comunicacao/relatorios/relatorio_*.md; do
        if [ -f "$relatorio" ]; then
            if [ $count -eq $numero ]; then
                echo "$relatorio"
                return 0
            fi
            ((count++))
        fi
    done
    
    # Procurar nos relatórios Zenith
    for relatorio in sistema_principal/conexao_zenith/relatorio_evolucao_*.md; do
        if [ -f "$relatorio" ]; then
            if [ $count -eq $numero ]; then
                echo "$relatorio"
                return 0
            fi
            ((count++))
        fi
    done
    
    # Procurar nas avaliações
    for avaliacao in sistema_governanca/processos/avaliacoes/*_avaliacao.json; do
        if [ -f "$avaliacao" ]; then
            if [ $count -eq $numero ]; then
                echo "$avaliacao"
                return 0
            fi
            ((count++))
        fi
    done
    
    echo ""
    return 1
}

# Menu interativo
while true; do
    echo ""
    echo "🎯 MENU DE RELATÓRIOS"
    echo "===================="
    echo "1. 📋 Listar Todos os Relatórios"
    echo "2. 📖 Visualizar Relatório por Número"
    echo "3. 📊 Relatório Mais Recente"
    echo "4. 🔍 Procurar Relatórios por Data"
    echo "5. 🏠 Voltar ao Menu Principal"
    echo ""

    read -p "👉 Escolha uma opção (1-5): " opcao

    case $opcao in
        1)
            echo ""
            listar_todos_relatorios
            ;;
        2)
            echo ""
            listar_todos_relatorios
            echo ""
            read -p "👉 Digite o número do relatório: " num_relatorio
            relatorio_file=$(get_relatorio_by_number "$num_relatorio")
            if [ -n "$relatorio_file" ] && [ -f "$relatorio_file" ]; then
                visualizar_relatorio_global "$relatorio_file"
            else
                echo "❌ Relatório não encontrado"
            fi
            ;;
        3)
            echo ""
            # Encontrar relatório mais recente
            latest_report=$(ls -t sistema_governanca/processos/comunicacao/relatorios/relatorio_*.md sistema_principal/conexao_zenith/relatorio_evolucao_*.md 2>/dev/null | head -1)
            if [ -n "$latest_report" ]; then
                echo "📅 Relatório mais recente: $(basename "$latest_report")"
                visualizar_relatorio_global "$latest_report"
            else
                echo "❌ Nenhum relatório encontrado"
            fi
            ;;
        4)
            echo ""
            read -p "👉 Digite a data (YYYY-MM-DD): " data_busca
            encontrados=0
            for relatorio in sistema_governanca/processos/comunicacao/relatorios/relatorio_${data_busca}.md sistema_principal/conexao_zenith/relatorio_evolucao_${data_busca}.md; do
                if [ -f "$relatorio" ]; then
                    echo "✅ Encontrado: $(basename "$relatorio")"
                    visualizar_relatorio_global "$relatorio"
                    encontrados=1
                fi
            done
            if [ $encontrados -eq 0 ]; then
                echo "❌ Nenhum relatório encontrado para a data $data_busca"
            fi
            ;;
        5)
            echo ""
            echo "🏠 Retornando ao menu principal..."
            break
            ;;
        *)
            echo "❌ Opção inválida"
            ;;
    esac

    echo ""
    read -p "👉 Pressione ENTER para continuar..."
    clear
    echo "📊 VISUALIZADOR DE RELATÓRIOS INTERATIVO"
    echo "========================================"
done

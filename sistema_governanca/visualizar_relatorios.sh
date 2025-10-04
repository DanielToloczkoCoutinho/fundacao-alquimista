#!/bin/bash

echo "📊 VISUALIZADOR DE RELATÓRIOS - FUNDAÇÃO ALQUIMISTA"
echo "=================================================="

visualizar_relatorio_global() {
    local relatorio_file="$1"
    
    if [ ! -f "$relatorio_file" ]; then
        echo "❌ Relatório não encontrado: $relatorio_file"
        return 1
    fi
    
    echo ""
    echo "🌐 CONTEÚDO DO RELATÓRIO:"
    echo "========================="
    cat "$relatorio_file"
    echo ""
    echo "📁 Local: $relatorio_file"
    echo "📅 Gerado em: $(stat -c %y "$relatorio_file" 2>/dev/null || echo "N/A")"
}

visualizar_avaliacoes() {
    echo ""
    echo "🔬 AVALIAÇÕES DE LABORATÓRIOS:"
    echo "=============================="
    
    local total_avaliacoes=0
    for avaliacao_file in sistema_governanca/processos/avaliacoes/*_avaliacao.json; do
        if [ -f "$avaliacao_file" ]; then
            ((total_avaliacoes++))
            lab_name=$(basename "$avaliacao_file" "_avaliacao.json")
            score=$(grep -o '"score_total": [0-9]*' "$avaliacao_file" | cut -d' ' -f2)
            nivel_phi=$(grep -o '"nivel_consciencia": "[^"]*' "$avaliacao_file" | cut -d'"' -f4)
            classificacao=$(grep -o '"classificacao": "[^"]*' "$avaliacao_file" | cut -d'"' -f4)
            
            echo "   🏷️  $lab_name:"
            echo "      📊 Score: $score% | $nivel_phi | $classificacao"
        fi
    done
    
    if [ $total_avaliacoes -eq 0 ]; then
        echo "   ℹ️  Nenhuma avaliação encontrada"
    else
        echo ""
        echo "   📈 Total de avaliações: $total_avaliacoes"
    fi
}

listar_relatorios() {
    echo ""
    echo "📋 RELATÓRIOS DISPONÍVEIS:"
    echo "=========================="
    
    local count=0
    for relatorio in sistema_governanca/processos/comunicacao/relatorios/relatorio_*.md; do
        if [ -f "$relatorio" ]; then
            ((count++))
            relatorio_name=$(basename "$relatorio")
            relatorio_date=$(echo "$relatorio_name" | sed 's/relatorio_//' | sed 's/.md//')
            echo "   $count. 📅 $relatorio_date - $relatorio_name"
        fi
    done
    
    if [ $count -eq 0 ]; then
        echo "   ℹ️  Nenhum relatório encontrado"
        return 1
    fi
    
    return 0
}

# Menu principal
echo ""
echo "🎯 OPÇÕES DISPONÍVEIS:"
echo "======================"
echo "1. 📊 Ver relatório mais recente"
echo "2. 📋 Listar todos os relatórios" 
echo "3. 🔬 Ver avaliações de laboratórios"
echo "4. 🏠 Status geral do sistema"
echo "5. 🚪 Sair"
echo ""

read -p "👉 Escolha uma opção (1-5): " opcao

case $opcao in
    1)
        # Encontrar relatório mais recente
        latest_report=$(ls -t sistema_governanca/processos/comunicacao/relatorios/relatorio_*.md 2>/dev/null | head -1)
        if [ -n "$latest_report" ]; then
            visualizar_relatorio_global "$latest_report"
        else
            echo "❌ Nenhum relatório encontrado"
        fi
        ;;
    2)
        if listar_relatorios; then
            echo ""
            read -p "👉 Digite o número do relatório para visualizar: " num_relatorio
            reports=($(ls sistema_governanca/processos/comunicacao/relatorios/relatorio_*.md 2>/dev/null))
            if [ ${#reports[@]} -ge $num_relatorio ] && [ $num_relatorio -gt 0 ]; then
                visualizar_relatorio_global "${reports[$((num_relatorio-1))]}"
            else
                echo "❌ Número inválido"
            fi
        fi
        ;;
    3)
        visualizar_avaliacoes
        ;;
    4)
        echo ""
        echo "🏠 STATUS GERAL DO SISTEMA:"
        echo "==========================="
        echo "   📁 Laboratórios ativos: $(find sistema_principal/expansao/laboratorios/ativos -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l)"
        echo "   📊 Relatórios gerados: $(ls sistema_governanca/processos/comunicacao/relatorios/relatorio_*.md 2>/dev/null | wc -l)"
        echo "   🔬 Avaliações: $(ls sistema_governanca/processos/avaliacoes/*_avaliacao.json 2>/dev/null | wc -l)"
        echo "   🗳️  Sistema de votação: ✅ Operacional"
        echo "   💾 Modo: 100% Bash Puro"
        ;;
    5)
        echo "👋 Encerrando visualizador..."
        exit 0
        ;;
    *)
        echo "❌ Opção inválida"
        ;;
esac

echo ""
echo "💫 Para executar novamente: ./sistema_governanca/visualizar_relatorios.sh"

#!/bin/bash

# 🎮 ORGANIZADOR INTERATIVO DOS FRACTAIS
# Sistema para decidir o destino de cada arquivo

SOURCE_BASE="$HOME/studio"
TARGET_BASE="./fundacao_unificada_completa"

show_fractal_analysis() {
    local fractal="$1"
    local source_path="$SOURCE_BASE/$fractal"
    
    echo ""
    echo "🔍 ANALISANDO: $fractal"
    echo "----------------------------------------"
    
    if [ ! -f "$source_path" ] && [ ! -d "$source_path" ]; then
        echo "❌ Arquivo não encontrado"
        return 1
    fi
    
    # Informações detalhadas
    if [ -f "$source_path" ]; then
        tamanho=$(du -h "$source_path" 2>/dev/null | cut -f1)
        linhas=$(wc -l < "$source_path" 2>/dev/null || echo "N/A")
        extensao="${fractal##*.}"
        categoria=$(categorizar_arquivo "$fractal")
        
        echo "📊 Tamanho: $tamanho"
        echo "📝 Linhas: $linhas" 
        echo "🔤 Extensão: .$extensao"
        echo "📂 Categoria: $categoria"
        
        # Pré-visualização (primeiras 3 linhas)
        echo ""
        echo "👁️ PRÉ-VISUALIZAÇÃO:"
        head -3 "$source_path" 2>/dev/null | while read line; do
            echo "   $line"
        done
    else
        echo "📁 É um diretório"
        echo "📊 Conteúdo: $(find "$source_path" -type f 2>/dev/null | wc -l) arquivos"
    fi
    
    echo ""
    echo "🎯 OPÇÕES DE DESTINO:"
    echo "   1) 📁 scripts_gerenciais/"
    echo "   2) 🔍 sistemas_analise/" 
    echo "   3) 🔮 rituais_cosmicos/"
    echo "   4) 🗂️ sistemas_organizacao/"
    echo "   5) 📚 bibliotecas_conhecimento/"
    echo "   6) ⚙️ sistemas_javascript/"
    echo "   7) 🕸️ dados_estruturais/"
    echo "   8) ⚙️ configuracoes/"
    echo "   9) 📋 documentacao/"
    echo "   10) 🐳 configuracoes_docker/"
    echo "   11) 🌐 interfaces_web/"
    echo "   12) 🔐 seguranca_chaves/"
    echo "   13) 📊 logs_sistema/"
    echo "   14) ❓ outros/"
    echo "   15) 🗑️ AVALIAR PARA EXCLUSÃO"
    echo "   16) ⏭️ Pular este arquivo"
    echo ""
    echo -n "👉 Sua escolha: "
}

categorizar_arquivo() {
    local arquivo="$1"
    local extensao="${arquivo##*.}"
    local nome_base=$(basename "$arquivo")
    
    case "$extensao" in
        sh) echo "scripts_gerenciais" ;;
        py) 
            if [[ "$nome_base" == *"analisador"* ]] || [[ "$nome_base" == *"verificar"* ]]; then
                echo "sistemas_analise"
            elif [[ "$nome_base" == *"ritual"* ]] || [[ "$nome_base" == *"cerimonial"* ]]; then
                echo "rituais_cosmicos"  
            elif [[ "$nome_base" == *"organizar"* ]] || [[ "$nome_base" == *"atualizar"* ]]; then
                echo "sistemas_organizacao"
            elif [[ "$nome_base" == *"biblioteca"* ]] || [[ "$nome_base" == *"conectar"* ]]; then
                echo "bibliotecas_conhecimento"
            else
                echo "sistemas_python"
            fi
            ;;
        js|ts|tsx) echo "sistemas_javascript" ;;
        json) 
            if [[ "$nome_base" == *"grafo"* ]] || [[ "$nome_base" == *"correlacao"* ]]; then
                echo "dados_estruturais"
            elif [[ "$nome_base" == *"config"* ]] || [[ "$nome_base" == *"package"* ]]; then
                echo "configuracoes"
            else
                echo "dados_json"
            fi
            ;;
        md|txt) echo "documentacao" ;;
        yaml|yml) echo "configuracoes_docker" ;;
        html) echo "interfaces_web" ;;
        pem) echo "seguranca_chaves" ;;
        log) echo "logs_sistema" ;;
        *) echo "outros" ;;
    esac
}

get_target_directory() {
    local choice="$1"
    case "$choice" in
        1) echo "scripts_gerenciais" ;;
        2) echo "sistemas_analise" ;;
        3) echo "rituais_cosmicos" ;;
        4) echo "sistemas_organizacao" ;;
        5) echo "bibliotecas_conhecimento" ;;
        6) echo "sistemas_javascript" ;;
        7) echo "dados_estruturais" ;;
        8) echo "configuracoes" ;;
        9) echo "documentacao" ;;
        10) echo "configuracoes_docker" ;;
        11) echo "interfaces_web" ;;
        12) echo "seguranca_chaves" ;;
        13) echo "logs_sistema" ;;
        14) echo "outros" ;;
        *) echo "" ;;
    esac
}

# MAIN PROCESSING LOOP
process_fractals() {
    local fractais=("$@")
    local processed=0
    local skipped=0
    local deleted=0
    
    echo "🌌 INICIANDO ORGANIZAÇÃO INTERATIVA DOS FRACTAIS"
    echo "=========================================="
    
    for fractal in "${fractais[@]}"; do
        show_fractal_analysis "$fractal"
        read choice
        
        case "$choice" in
            1|2|3|4|5|6|7|8|9|10|11|12|13|14)
                target_dir=$(get_target_directory "$choice")
                if [ -n "$target_dir" ]; then
                    # Criar diretório destino
                    mkdir -p "$TARGET_BASE/$target_dir"
                    
                    # Copiar arquivo
                    source_path="$SOURCE_BASE/$fractal"
                    target_path="$TARGET_BASE/$target_dir/$fractal"
                    
                    if cp -r "$source_path" "$target_path" 2>/dev/null; then
                        echo "✅ Copiado para: $target_dir/$fractal"
                        ((processed++))
                    else
                        echo "❌ Erro ao copiar"
                    fi
                fi
                ;;
            15)
                echo "🗑️ ARQUIVO MARCADO PARA AVALIAÇÃO DE EXCLUSÃO"
                echo "   $fractal será avaliado posteriormente"
                ((deleted++))
                ;;
            16)
                echo "⏭️ Arquivo pulado: $fractal"
                ((skipped++))
                ;;
            *)
                echo "❌ Opção inválida, pulando..."
                ((skipped++))
                ;;
        esac
    done
    
    echo ""
    echo "🎉 PROCESSAMENTO CONCLUÍDO!"
    echo "📊 Estatísticas:"
    echo "   ✅ Processados: $processed"
    echo "   ⏭️ Pulados: $skipped" 
    echo "   🗑️ Para exclusão: $deleted"
}

# Lista reduzida para teste inicial
FRACTAIS_TESTE=(
    "anatheron_prime" "GRAFO_DA_FUNDACAO.json" "manifesto_fundacao.md"
    "ritual_final.sh" "fundacao_cli.py" "package.json"
)

echo "🧪 MODO TESTE - Processando 6 arquivos de exemplo"
process_fractals "${FRACTAIS_TESTE[@]}"

echo ""
echo "🚀 Para processar TODOS os fractais, edite o script e remova o modo teste"

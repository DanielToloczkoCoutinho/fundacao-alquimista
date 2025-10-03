#!/bin/bash

# 🎯 ORGANIZADOR DEFINITIVO DOS FRACTAIS
# Sistema final para integrar TODOS os arquivos soltos

SOURCE_BASE="$HOME/studio"
TARGET_BASE="./fundacao_unificada_completa"
LOG_ORGANIZACAO="log_organizacao_definitiva_$(date +%Y%m%d_%H%M%S).txt"

echo "🎯 ORGANIZAÇÃO DEFINITIVA DOS FRACTAIS" > "$LOG_ORGANIZACAO"
echo "👑 ZENNITH & ANATHERON - INTEGRAÇÃO FINAL" >> "$LOG_ORGANIZACAO"
echo "📅 $(date)" >> "$LOG_ORGANIZACAO"
echo "==========================================" >> "$LOG_ORGANIZACAO"

# MAPEAMENTO DEFINITIVO - Onde cada fractal deve ir
declare -A MAPA_DESTINOS=(
    # SISTEMAS PRINCIPAIS
    ["anatheron_prime"]="sistemas_principais"
    ["entrar_fundacao_anatheron.sh"]="sistemas_principais"
    ["entrar_fundacao_permanente.sh"]="sistemas_principais"
    ["entrar_fundacao.sh"]="sistemas_principais"
    
    # GRAFOS E ESTRUTURAS
    ["GRAFO_DA_FUNDACAO.json"]="dados_estruturais"
    ["grafo.json"]="dados_estruturais"
    ["correlacao_modulos_artefatos.json"]="dados_estruturais"
    ["tecnologias_implementadas.json"]="dados_estruturais"
    
    # DOCUMENTAÇÃO FUNDADORA
    ["manifesto_fundacao.md"]="documentacao_fundadora"
    ["ARQUITETURA_VIVA.md"]="documentacao_fundadora"
    ["CÓDICE_DOS_MÓDULOS.md"]="documentacao_fundadora"
    ["manifesto_eternidade.json"]="documentacao_fundadora"
    
    # RITUAIS E CERIMONIAIS
    ["ritual_final.sh"]="rituais_cosmicos"
    ["ritual_final_encadeado.sh"]="rituais_cosmicos"
    ["ritual_final_eternizacao.sh"]="rituais_cosmicos"
    ["ritual_manifestacao.sh"]="rituais_cosmicos"
    ["cerimonial-alianca.sh"]="rituais_cosmicos"
    
    # SCRIPTS DE GESTÃO
    ["fundacao_cli.py"]="scripts_gerenciais"
    ["sync_fundacao_completo.sh"]="scripts_gerenciais"
    ["deploy_completo.sh"]="scripts_gerenciais"
    ["atualizar_github.sh"]="scripts_gerenciais"
    
    # CONFIGURAÇÕES
    ["package.json"]="configuracoes"
    ["docker-compose.yml"]="configuracoes_docker"
    ["Dockerfile"]="configuracoes_docker"
    
    # SEGURANÇA
    ["zenith_pos_quantum_key.pem"]="seguranca"
    
    # ANALISADORES
    ["analisador_estrutura.py"]="sistemas_analise"
    ["analisador_fundacao.py"]="sistemas_analise"
    
    # BIBLIOTECAS
    ["biblioteca_chave_mestra_mod307.py"]="bibliotecas"
    ["biblioteca_unificada.py"]="bibliotecas"
)

# FUNÇÃO PARA ORGANIZAR UM FRACTAL
organizar_fractal() {
    local fractal="$1"
    local source_path="$SOURCE_BASE/$fractal"
    local destino="${MAPA_DESTINOS[$fractal]}"
    
    echo "🔮 PROCESSANDO: $fractal" | tee -a "$LOG_ORGANIZACAO"
    
    # Verificar se existe
    if [ ! -f "$source_path" ] && [ ! -d "$source_path" ]; then
        echo "   ❌ NÃO ENCONTRADO" | tee -a "$LOG_ORGANIZACAO"
        return 1
    fi
    
    # Determinar destino se não mapeado
    if [ -z "$destino" ]; then
        destino=$(categorizar_automaticamente "$fractal")
        echo "   🔍 Categoria automática: $destino" | tee -a "$LOG_ORGANIZACAO"
    else
        echo "   🎯 Destino mapeado: $destino" | tee -a "$LOG_ORGANIZACAO"
    fi
    
    # Criar diretório destino
    local target_dir="$TARGET_BASE/$destino"
    mkdir -p "$target_dir"
    
    # Copiar arquivo
    if cp -r "$source_path" "$target_dir/" 2>/dev/null; then
        local tamanho=$(du -h "$source_path" 2>/dev/null | cut -f1)
        echo "   ✅ COPIADO: $destino/ ($tamanho)" | tee -a "$LOG_ORGANIZACAO"
        return 0
    else
        echo "   ❌ ERRO NA CÓPIA" | tee -a "$LOG_ORGANIZACAO"
        return 1
    fi
}

# CATEGORIZAÇÃO AUTOMÁTICA PARA ARQUIVOS NÃO MAPEADOS
categorizar_automaticamente() {
    local fractal="$1"
    local extensao="${fractal##*.}"
    
    case "$extensao" in
        sh) echo "scripts_diversos" ;;
        py) 
            if [[ "$fractal" == *"analisador"* ]] || [[ "$fractal" == *"verificar"* ]]; then
                echo "sistemas_analise"
            elif [[ "$fractal" == *"ritual"* ]]; then
                echo "rituais_cosmicos"
            else
                echo "sistemas_python"
            fi
            ;;
        js) echo "sistemas_javascript" ;;
        json) echo "dados_estruturais" ;;
        md|txt) echo "documentacao" ;;
        yaml|yml) echo "configuracoes" ;;
        pem) echo "seguranca" ;;
        log) echo "logs" ;;
        *) echo "outros" ;;
    esac
}

# LISTA COMPLETA DE FRACTAIS PARA ORGANIZAR
FRACTAIS_TODOS=(
    "anatheron_prime" "GRAFO_DA_FUNDACAO.json" "manifesto_fundacao.md"
    "fundacao_cli.py" "package.json" "ritual_final.sh" "zenith_pos_quantum_key.pem"
    "docker-compose.yml" "entrar_fundacao_anatheron.sh" "entrar_fundacao_permanente.sh"
    "entrar_fundacao.sh" "grafo.json" "ARQUITETURA_VIVA.md" "CÓDICE_DOS_MÓDULOS.md"
    "sync_fundacao_completo.sh" "deploy_completo.sh" "analisador_estrutura.py"
    "analisador_fundacao.py" "biblioteca_chave_mestra_mod307.py" "biblioteca_unificada.py"
    "ritual_final_encadeado.sh" "ritual_final_eternizacao.sh" "ritual_manifestacao.sh"
    "cerimonial-alianca.sh" "atualizar_github.sh" "tecnologias_implementadas.json"
    "manifesto_eternidade.json" "correlacao_modulos_artefatos.json"
)

# EXECUÇÃO PRINCIPAL
echo "🚀 INICIANDO ORGANIZAÇÃO DEFINITIVA..." | tee -a "$LOG_ORGANIZACAO"
echo "📍 Source: $SOURCE_BASE" | tee -a "$LOG_ORGANIZACAO"
echo "🎯 Target: $TARGET_BASE" | tee -a "$LOG_ORGANIZACAO"
echo "" | tee -a "$LOG_ORGANIZACAO"

sucessos=0
erros=0

for fractal in "${FRACTAIS_TODOS[@]}"; do
    if organizar_fractal "$fractal"; then
        ((sucessos++))
    else
        ((erros++))
    fi
    echo "" | tee -a "$LOG_ORGANIZACAO"
done

# RELATÓRIO FINAL
echo "🎉 ORGANIZAÇÃO DEFINITIVA CONCLUÍDA!" | tee -a "$LOG_ORGANIZACAO"
echo "📊 ESTATÍSTICAS:" | tee -a "$LOG_ORGANIZACAO"
echo "   ✅ Sucessos: $sucessos" | tee -a "$LOG_ORGANIZACAO"
echo "   ❌ Erros: $erros" | tee -a "$LOG_ORGANIZACAO"
echo "   📁 Total processado: ${#FRACTAIS_TODOS[@]}" | tee -a "$LOG_ORGANIZACAO"

# VERIFICAÇÃO FINAL
echo "" | tee -a "$LOG_ORGANIZACAO"
echo "🔍 VERIFICANDO ORGANIZAÇÃO FINAL..." | tee -a "$LOG_ORGANIZACAO"
cd "$TARGET_BASE"

echo "�� ESTRUTURA CRIADA:" | tee -a "$LOG_ORGANIZACAO"
find . -maxdepth 2 -type d | sort | while read dir; do
    count=$(find "$dir" -type f 2>/dev/null | wc -l)
    if [ "$count" -gt 0 ]; then
        echo "   📁 $dir: $count arquivos" | tee -a "$LOG_ORGANIZACAO"
    fi
done

echo "" | tee -a "$LOG_ORGANIZACAO"
echo "👑 ZENNITH & ANATHERON - FUNDAÇÃO COMPLETAMENTE ORGANIZADA!" | tee -a "$LOG_ORGANIZACAO"

# Mostrar resumo na tela
echo ""
echo "🔍 RESUMO DA EXECUÇÃO:"
cat "$LOG_ORGANIZACAO" | grep -E "(🔮|✅|❌|📊)" | tail -20

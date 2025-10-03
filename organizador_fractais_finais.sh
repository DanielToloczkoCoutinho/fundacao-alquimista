#!/bin/bash

# 🌌 ORGANIZADOR DOS FRACTAIS FINAIS DA FUNDAÇÃO
# Análise inteligente e organização dos ~50 arquivos soltos

SOURCE_BASE="$HOME/studio"
TARGET_BASE="./fundacao_unificada_completa"
RELATORIO_FRACTAIS="analise_fractais_finais_$(date +%Y%m%d_%H%M%S).txt"

echo "🌌 ANÁLISE DOS FRACTAIS FINAIS DA FUNDAÇÃO" > "$RELATORIO_FRACTAIS"
echo "�� ZENNITH & ANATHERON - ORGANIZAÇÃO CÓSMICA" >> "$RELATORIO_FRACTAIS"
echo "📅 $(date)" >> "$RELATORIO_FRACTAIS"
echo "==========================================" >> "$RELATORIO_FRACTAIS"

# Lista COMPLETA dos arquivos fractais
FRACTAIS=(
    ".fundacao_prompt" ".gitignore" "absorcao_conhecimento_20251002_183614.log"
    "absorver_conhecimento_corrigido.sh" "analisador_estrutura.py" "analisador_fundacao.py"
    "analisador_rapido.sh" "analise_fundacao.json" "anatheron_prime" 
    "aplicar-equacoes-fundamentais.sh" "apphosting.emulator.yaml" "apphosting.yaml"
    "ARQUITETURA_VIVA.md" "ativar_conexao_interdimensional.py" "atribuir_funcoes_modulares.py"
    "atribuir_missoes_modulares.py" "atualizar_estrutura_total.py" "atualizar_github.sh"
    "atualizar_grafo_fundacao.py" "atualizar_modulo_zero.py" "atualizar-fundacao-universal.sh"
    "auditor_mestre.py" "auditoria.js" "AURA_CONNECTOR.sh" "AURA_MONITOR.sh"
    "biblioteca_chave_mestra_mod307.py" "biblioteca_unificada.py" "celebrar_fundacao.sh"
    "cerimonial-alianca.sh" "CÓDICE_DOS_MÓDULOS.md" "components.json" "conectar_base_fundacional.py"
    "correlacao_modulos_artefatos.json" "correlacionar_artefatos_modulos.py" "corrigir_correlacao_modular.py"
    "createEQ0112.js" "criar_arvore_vida.py" "database.rules.json" "decodificar-intencao.sh"
    "deploy_completo.sh" "depurar_correlacao.py" "docker-compose.yml" "Dockerfile"
    "emitir-pulso-expansao.sh" "emitir-pulso-universal.sh" "entrar_fundacao_anatheron.sh"
    "entrar_fundacao_permanente.sh" "entrar_fundacao.sh" "execucao-sequencial-total.sh"
    "executar_fases_7_8_9.py" "executar_sequencia_hierarquica.py" "exorcizar_fantasmas.py"
    "expandir_arvore_vida.py" "expansao-harmonica.sh" "explorador_interativo.sh"
    "explorar_rapido.sh" "firebase-sync.js" "firebase.json" "firestore.indexes.json"
    "fundacao" "fundacao_anatheron_nix" "fundacao_cli.py" "fundacao_navigator.sh"
    "fundacao_permanente" "gerar_hashes_artefatos.py" "gerar_log_coerencia_sistema.py"
    "github_manager_simple.py" "github_manager.py" "github_status.sh" "github_sync.sh"
    "gitup-commit.py" "gitup-push.py" "gitup-readme.py" "gitup-ritual.py" "gitup-status.py"
    "GRAFO_DA_FUNDACAO.json" "grafo.json" "grande_despertar_modular.py" "instalar_ai_ml.sh"
    "instalar_backend.sh" "instalar_frontend.sh" "instalar_massa.sh" "instalar_tecnologias_criticas.sh"
    "instalar_tecnologias.py" "integrar_apollo_gateway.py" "integrar_apollo_graphql.py"
    "integrar_apollo_server.py" "integrar_biblioteca_equacoes.py" "integrar_github_actions.py"
    "integrar_quartzo.py" "interconectar-modulos-cientificos.sh" "LICENSE" "listar_arquivos_projeto.py"
    "localizar-e-cadastrar-universo.sh" "manifesto_eternidade.json" "manifesto_fundacao.md"
    "mapeamento-cosmico.sh" "mapear-frequencias.sh" "mestra_luxnet_aeternum.html" "missoes_futuras.sh"
    "modulos_requisitos.json" "next-env.d.ts" "next.config.js" "next.config.ts"
    "organizar_arquitetura_fundacao.py" "organizar_nucleos_centrais.py" "organizar_organograma_arvore.py"
    "package-lock.json" "package.json" "plano_acao_auditoria.txt" "pnpm-lock.yaml"
    "postcss.config.js" "postcss.config.mjs" "README.md" "registrar_ambiente_tecnologico.py"
    "registrar_apollo_gateway.json" "registrar_apollo_graphql.json" "registrar_apollo_server.json"
    "registrar_github_actions.json" "relatorio_auditoria_empirica.json" "relatorio_auditoria.json"
    "relatorio_deploy_20251002_181134.txt" "relatorio_deploy_20251002_181206.txt" "relatorio-estado.sh"
    "remoteconfig.template.json" "requirements.txt" "restaurar_manifestos_faltantes.py"
    "resumo_fundacao.sh" "ritual_auditoria.sh" "ritual_evolucao_quantica.sh"
    "ritual_final_encadeado_corrigido.sh" "ritual_final_encadeado.sh" "ritual_final_eternizacao.sh"
    "ritual_final.sh" "ritual_implantacao_final_corrigido.sh" "ritual_implantacao_final.sh"
    "ritual_manifestacao.sh" "ritual_materializacao_mente.sh" "ritual_materializacao_simulada.sh"
    "ritual_preservacao.sh" "ritual_protecao.sh" "ritual_restauracao_corrigido.sh"
    "ritual_restauracao.sh" "ritual_triplo.sh" "ritual_varredura.sh" "scanner_ressonancia.py"
    "SCRIPT_PREPARACAO.sh" "SECURITY.md" "selar_grimorio_fundacao.py" "shell.nix"
    "sintonizar-simbiose.sh" "sistema_auditoria_empirica.js" "sugerir_correlacao_automatica.py"
    "sync_fundacao_completo.sh" "tailwind.config.js" "tailwind.config.ts" "tecnologias_implementadas.json"
    "transferencia_inteligente.sh" "tsconfig.json" "unificar_consciencia_modular.py"
    "updateEQ0112.js" "validar_capacidades_avancadas.sh" "validar_studio.sh" "validar-existencia.sh"
    "validar-modulos-tecnicos.sh" "validar-modulos.sh" "verificacao_completa_20251003_174837.txt"
    "verificacao_completa_fundacao.sh" "verificar_apollo_gateway.py" "verificar_apollo_graphql.py"
    "verificar_apollo_server.py" "verificar_conectividade_modular.py" "verificar_equacoes_modulares.py"
    "verificar_github_actions.py" "verificar_integridade_sistemica.py" "VISUALIZADOR_DO_GRAFO.py"
    "visualizar_arvore_consciencia.py" "zenith_pos_quantum_key.pem"
)

# CATEGORIZAÇÃO INTELIGENTE DOS ARQUIVOS
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

# ANALISAR CADA FRACTAL
echo "🔍 ANALISANDO FRACTAIS INDIVIDUALMENTE:" >> "$RELATORIO_FRACTAIS"
echo "----------------------------------------" >> "$RELATORIO_FRACTAIS"

declare -A categorias
declare -A arquivos_por_categoria

for fractal in "${FRACTAIS[@]}"; do
    source_path="$SOURCE_BASE/$fractal"
    
    if [ ! -f "$source_path" ] && [ ! -d "$source_path" ]; then
        echo "❌ $fractal - NÃO ENCONTRADO" >> "$RELATORIO_FRACTAIS"
        continue
    fi
    
    # Determinar categoria
    categoria=$(categorizar_arquivo "$fractal")
    categorias["$categoria"]=$((categorias["$categoria"] + 1))
    arquivos_por_categoria["$categoria"]+="$fractal"$'\n'
    
    # Informações do arquivo
    if [ -f "$source_path" ]; then
        tamanho=$(du -h "$source_path" 2>/dev/null | cut -f1)
        linhas=$(wc -l < "$source_path" 2>/dev/null || echo "N/A")
        echo "✅ $fractal - $categoria ($tamanho, $linhas linhas)" >> "$RELATORIO_FRACTAIS"
    else
        echo "📁 $fractal - DIRETÓRIO ($categoria)" >> "$RELATORIO_FRACTAIS"
    fi
done

# RELATÓRIO DE CATEGORIAS
echo "" >> "$RELATORIO_FRACTAIS"
echo "📊 DISTRIBUIÇÃO POR CATEGORIAS:" >> "$RELATORIO_FRACTAIS"
echo "----------------------------------------" >> "$RELATORIO_FRACTAIS"

for categoria in "${!categorias[@]}"; do
    echo "   📂 $categoria: ${categorias[$categoria]} arquivos" >> "$RELATORIO_FRACTAIS"
done

# ESTRATÉGIA DE ORGANIZAÇÃO
echo "" >> "$RELATORIO_FRACTAIS"
echo "�� ESTRATÉGIA DE ORGANIZAÇÃO PROPOSTA:" >> "$RELATORIO_FRACTAIS"
echo "==========================================" >> "$RELATORIO_FRACTAIS"

cat >> "$RELATORIO_FRACTAIS" << 'STRATEGY'
1. 📁 scripts_gerenciais/ - Scripts shell de gestão
2. 📁 sistemas_analise/ - Analisadores e verificadores Python  
3. 📁 rituais_cosmicos/ - Rituais e cerimoniais
4. 📁 sistemas_organizacao/ - Organizadores e atualizadores
5. 📁 bibliotecas_conhecimento/ - Bibliotecas Python
6. 📁 sistemas_javascript/ - Código JS/TS
7. 📁 dados_estruturais/ - Grafos e estruturas JSON
8. 📁 configuracoes/ - Configurações e packages
9. 📁 documentacao/ - Documentação MD/TXT
10. 📁 configuracoes_docker/ - Docker e deployment
11. �� interfaces_web/ - HTML e interfaces
12. 📁 seguranca_chaves/ - Chaves de segurança
13. 📁 logs_sistema/ - Logs e relatórios
14. 📁 outros/ - Itens diversos

CRITÉRIOS:
- ✅ MANTER: Arquivos únicos e essenciais
- 🔄 MOVER: Para diretórios específicos  
- 🗑️  AVALIAR: Duplicatas ou temporários
- 🔗 INTEGRAR: Com sistemas existentes
STRATEGY

# CRIAR SISTEMA DE ORGANIZAÇÃO INTERATIVO
cat > organizador_interativo_fractais.sh << 'ORGANIZADOR'
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
ORGANIZADOR

chmod +x organizador_interativo_fractais.sh

echo "🧪 ORGANIZADOR INTERATIVO CRIADO!"
echo "🚀 Execute: ./organizador_interativo_fractais.sh"
echo ""
echo "📋 RELATÓRIO DE ANÁLISE GERADO: $RELATORIO_FRACTAIS"

# Mostrar resumo
echo ""
echo "🔍 RESUMO DA ANÁLISE DOS FRACTAIS:"
cat "$RELATORIO_FRACTAIS" | grep -E "(✅|❌|📂)" | head -20

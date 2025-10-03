#!/bin/bash
#
# 🚀 SISTEMA DE ACESSO PERMANENTE - FUNDAÇÃO ALQUIMISTA
# Mantém você DENTRO da estrutura da Fundação
#

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# Função para imprimir com cores
print_color() {
    echo -e "${1}${2}${NC}"
}

# Configurar o ambiente da Fundação
configurar_ambiente() {
    # Navegar para o núcleo da Fundação
    cd ~/studio/fundacao-alquimista-luxnet 2>/dev/null || {
        print_color $RED "❌ Diretório da Fundação não encontrado!"
        exit 1
    }
    
    # Ativar ambiente virtual
    if [ -d "venv" ]; then
        source venv/bin/activate
        print_color $GREEN "✅ Ambiente virtual ativado"
    fi
    
    # Exportar variáveis de ambiente
    export FUNDACAO_ATIVA="1"
    export PS1="🌌 \e[1;36mfundacao-alquimista\e[0m:\e[1;33m\w\e[0m$ "
}

# Banner de entrada
mostrar_banner() {
    clear
    print_color $CYAN "🌌 FUNDAÇÃO ALQUIMISTA - SISTEMA DE ACESSO PERMANENTE"
    print_color $CYAN "═══════════════════════════════════════════════════════"
    echo ""
    print_color $YELLOW "👑 BEM-VINDA AO NÚCLEO DA FUNDAÇÃO, MINHA RAINHA!"
    print_color $WHITE "📍 Você está DENTRO da estrutura da Fundação Alquimista"
    echo ""
}

# Menu principal interativo
menu_principal() {
    while true; do
        echo ""
        print_color $CYAN "🎮 COMANDOS DA FUNDAÇÃO - Você está DENTRO do sistema:"
        print_color $CYAN "═══════════════════════════════════════════════════════"
        echo ""
        print_color $YELLOW "🎛️  SISTEMAS PRINCIPAIS:"
        print_color $WHITE "   supremo      - Painel Supremo Unificado"
        print_color $WHITE "   expansao     - Sistema de Expansão Cósmica"
        print_color $WHITE "   dashboard    - Dashboard Visual Avançado"
        print_color $WHITE "   performance  - Sistema de Otimização"
        echo ""
        print_color $YELLOW "🔧 FERRAMENTAS:"
        print_color $WHITE "   scripts      - Listar todos os scripts"
        print_color $WHITE "   executar <script> - Executar script específico"
        print_color $WHITE "   status       - Status da Fundação"
        print_color $WHITE "   explorar     - Explorar estrutura"
        echo ""
        print_color $YELLOW "💫 SISTEMA:"
        print_color $WHITE "   menu         - Mostrar este menu"
        print_color $WHITE "   sair         - Sair da Fundação (voltar ao shell normal)"
        print_color $WHITE "   fundacao     - Recarregar ambiente da Fundação"
        echo ""
        
        # Prompt personalizado da Fundação
        read -p "�� fundacao-alquimista:\w$ " comando
        
        case $comando in
            supremo|painel)
                print_color $GREEN "🚀 INICIANDO PAINEL SUPREMO UNIFICADO..."
                python painel_supremo_unificado.py
                ;;
                
            expansao|expansão)
                print_color $GREEN "🌌 INICIANDO SISTEMA DE EXPANSÃO CóSMICA..."
                python sistema_expansao_cosmica.py
                ;;
                
            dashboard|visual)
                print_color $GREEN "📊 INICIANDO DASHBOARD VISUAL AVANÇADO..."
                python dashboard_visual_avancado.py
                ;;
                
            performance|otimizacao)
                print_color $GREEN "⚡ INICIANDO SISTEMA DE OTIMIZAÇÃO PERFORMANCE..."
                python sistema_otimizacao_performance.py
                ;;
                
            scripts|listar)
                print_color $BLUE "📄 SCRIPTS DISPONÍVEIS NA FUNDAÇÃO:"
                echo ""
                ls -1 *.py | while read script; do
                    print_color $WHITE "   📄 $script"
                done
                ;;
                
            executar\ *)
                script_name=$(echo "$comando" | cut -d' ' -f2-)
                if [ -f "$script_name" ]; then
                    print_color $GREEN "🎯 EXECUTANDO: $script_name"
                    python "$script_name"
                else
                    print_color $RED "❌ Script não encontrado: $script_name"
                fi
                ;;
                
            status|estado)
                print_color $BLUE "📊 STATUS DA FUNDAÇÃO ALQUIMISTA:"
                echo ""
                print_color $WHITE "   📁 Diretório: $(pwd)"
                print_color $WHITE "   📄 Scripts: $(ls -1 *.py | wc -l) disponíveis"
                print_color $WHITE "   🐍 Python: $(python --version 2>&1)"
                print_color $WHITE "   🔧 Ambiente: $([ -n "$VIRTUAL_ENV" ] && echo "Virtual Ativo" || echo "Sistema")"
                ;;
                
            explorar|explore)
                print_color $BLUE "🔍 ESTRUTURA DA FUNDAÇÃO:"
                echo ""
                ls -la
                ;;
                
            menu|ajuda|help)
                # Mostrar menu novamente
                ;;
                
            fundacao|recarregar)
                print_color $YELLOW "🔄 RECARREGANDO AMBIENTE DA FUNDAÇÃO..."
                configurar_ambiente
                mostrar_banner
                ;;
                
            sair|exit|quit)
                print_color $YELLOW "🚪 Saindo da Fundação Alquimista..."
                print_color $CYAN "💫 Volte sempre, Minha Rainha Sagrada! 👑"
                # Restaurar prompt normal
                export PS1="\u@\h:\w\$ "
                deactivate 2>/dev/null
                break
                ;;
                
            "")
                # Comando vazio, continuar
                ;;
                
            *)
                # Tentar executar como comando do sistema
                eval "$comando" 2>/dev/null || 
                print_color $RED "❌ Comando não reconhecido: $comando"
                print_color $YELLOW "💡 Use 'menu' para ver comandos disponíveis"
                ;;
        esac
    done
}

# Função principal
main() {
    configurar_ambiente
    mostrar_banner
    menu_principal
}

# Executar
main

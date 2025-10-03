#!/bin/bash
#
# 🚀 SCRIPT DE ACESSO DIRETO - FUNDAÇÃO ALQUIMISTA
# Transporte automático para o núcleo da Fundação
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

# Função para animação de loading
loading() {
    local pid=$1
    local delay=0.1
    local spinstr='|/-\'
    while [ "$(ps a | awk '{print $1}' | grep $pid)" ]; do
        local temp=${spinstr#?}
        printf " [%c] " "$spinstr"
        local spinstr=$temp${spinstr%"$temp"}
        sleep $delay
        printf "\b\b\b\b\b"
    done
    printf "    \b\b\b\b"
}

# Banner de entrada
clear
print_color $CYAN "🌌 FUNDAÇÃO ALQUIMISTA - SISTEMA DE ACESSO DIRETO"
print_color $CYAN "═══════════════════════════════════════════════════"
echo ""
print_color $YELLOW "👑 BEM-VINDA, MINHA RAINHA SAGRADA!"
echo ""

# Verificar se estamos no diretório correto
CURRENT_DIR=$(pwd)
if [[ ! "$CURRENT_DIR" =~ "studio" ]]; then
    print_color $RED "❌ ERRO: Você não está no diretório studio"
    print_color $YELLOW "💡 Navegando para o diretório correto..."
    cd ~/studio 2>/dev/null || {
        print_color $RED "❌ Diretório ~/studio não encontrado!"
        exit 1
    }
fi

# Navegar para o núcleo da Fundação
print_color $BLUE "📍 Navegando para o núcleo da Fundação Alquimista..."
cd fundacao-alquimista-luxnet 2>/dev/null || {
    print_color $RED "❌ Diretório fundacao-alquimista-luxnet não encontrado!"
    print_color $YELLOW "🔍 Procurando por diretórios da Fundação..."
    
    # Tentar encontrar automaticamente
    FUNDACAO_DIR=$(find . -name "*fundacao*" -type d 2>/dev/null | head -1)
    if [ -n "$FUNDACAO_DIR" ]; then
        print_color $GREEN "✅ Encontrado: $FUNDACAO_DIR"
        cd "$FUNDACAO_DIR"
    else
        print_color $RED "❌ Nenhum diretório da Fundação encontrado!"
        exit 1
    fi
}

# Ativar ambiente virtual se existir
print_color $BLUE "⚡ Ativando ambiente virtual..."
if [ -d "venv" ]; then
    source venv/bin/activate
    print_color $GREEN "✅ Ambiente virtual ativado"
else
    print_color $YELLOW "⚠️  Ambiente virtual não encontrado, continuando sem ele..."
fi

# Verificar scripts disponíveis
print_color $BLUE "🔍 Verificando sistemas disponíveis..."
echo ""

# Listar scripts principais
SCRIPTS=($(ls -1 *.py 2>/dev/null | head -10))
if [ ${#SCRIPTS[@]} -gt 0 ]; then
    print_color $GREEN "✅ ${#SCRIPTS[@]} scripts Python encontrados:"
    for script in "${SCRIPTS[@]}"; do
        print_color $WHITE "   📄 $script"
    done
else
    print_color $RED "❌ Nenhum script Python encontrado!"
    exit 1
fi

# Sistema de menu interativo
echo ""
print_color $CYAN "🎮 SISTEMAS DISPONÍVEIS PARA ACESSO IMEDIATO:"
print_color $CYAN "══════════════════════════════════════════════"
echo ""
print_color $YELLOW "1. 🎛️  PAINEL SUPREMO UNIFICADO"
print_color $YELLOW "   Controle completo de todos os sistemas"
echo ""
print_color $YELLOW "2. 🌌 SISTEMA DE EXPANSÃO CÓSMICA"  
print_color $YELLOW "   Crescimento automático e evolução"
echo ""
print_color $YELLOW "3. 📊 DASHBOARD VISUAL AVANÇADO"
print_color $YELLOW "   Monitoramento em tempo real"
echo ""
print_color $YELLOW "4. ⚡ SISTEMA DE OTIMIZAÇÃO PERFORMANCE"
print_color $YELLOW "   Otimização máxima e eficiência"
echo ""
print_color $YELLOW "5. 🔍 EXPLORAR TODOS OS SISTEMAS"
print_color $YELLOW "   Lista completa de scripts disponíveis"
echo ""
print_color $YELLOW "6. 🚀 ACESSO RÁPIDO PERSONALIZADO"
print_color $YELLOW "   Digite o nome de qualquer script"
echo ""

# Input do usuário
while true; do
    print_color $PURPLE "👑 SUA ESCOLHA, MINHA RAINHA:"
    read -p "   Digite o número ou nome do script: " choice
    
    case $choice in
        1|"painel supremo"|"supremo")
            print_color $GREEN "🚀 INICIANDO PAINEL SUPREMO UNIFICADO..."
            python painel_supremo_unificado.py
            break
            ;;
        2|"expansao"|"expansão")
            print_color $GREEN "🌌 INICIANDO SISTEMA DE EXPANSÃO CÓSMICA..."
            python sistema_expansao_cosmica.py
            break
            ;;
        3|"dashboard"|"visual")
            print_color $GREEN "📊 INICIANDO DASHBOARD VISUAL AVANÇADO..."
            python dashboard_visual_avancado.py
            break
            ;;
        4|"performance"|"otimização")
            print_color $GREEN "⚡ INICIANDO SISTEMA DE OTIMIZAÇÃO PERFORMANCE..."
            python sistema_otimizacao_performance.py
            break
            ;;
        5|"explorar"|"todos")
            print_color $GREEN "�� LISTANDO TODOS OS SISTEMAS..."
            echo ""
            ls -la *.py | while read line; do
                print_color $WHITE "   $line"
            done
            echo ""
            print_color $YELLOW "💡 Digite o nome completo do script que deseja executar:"
            read -p "   Script: " script_name
            if [ -f "$script_name" ]; then
                print_color $GREEN "🚀 EXECUTANDO: $script_name"
                python "$script_name"
            else
                print_color $RED "❌ Script não encontrado: $script_name"
            fi
            break
            ;;
        6|"personalizado")
            print_color $YELLOW "🚀 ACESSO RÁPIDO PERSONALIZADO"
            read -p "   Digite o nome do script: " script_name
            if [ -f "$script_name" ]; then
                print_color $GREEN "🎯 EXECUTANDO: $script_name"
                python "$script_name"
            else
                print_color $RED "❌ Script não encontrado: $script_name"
                print_color $YELLOW "📄 Scripts disponíveis:"
                ls *.py
            fi
            break
            ;;
        *)
            # Verificar se é um nome de script direto
            if [ -f "$choice" ] && [[ "$choice" == *.py ]]; then
                print_color $GREEN "🎯 EXECUTANDO SCRIPT DIRETO: $choice"
                python "$choice"
                break
            else
                print_color $RED "❌ Opção inválida: $choice"
                print_color $YELLOW "💡 Escolha 1-6 ou digite o nome de um script .py"
            fi
            ;;
    esac
done

# Mensagem de saída
echo ""
print_color $CYAN "═══════════════════════════════════════════════════"
print_color $GREEN "💫 VOLTE SEMPRE, MINHA RAINHA SAGRADA! 👑"
print_color $CYAN "📍 Localização atual: $(pwd)"
print_color $CYAN "🌌 Fundação Alquimista - Sempre à sua disposição"
echo ""

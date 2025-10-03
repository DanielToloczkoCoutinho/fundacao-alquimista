#!/bin/bash
# 🌟 NAVEGADOR INTELIGENTE DA FUNDAÇÃO
# 👑 Acessa arquivos onde eles REALMENTE estão

clear
echo "=================================================="
echo "🌌 NAVEGADOR INTELIGENTE - FUNDAÇÃO ALQUIMISTA"
echo "=================================================="
echo "👑 Zennith & Anatheron - Sistema de Navegação Ativado"
echo "📍 Localização atual: $(pwd)"
echo ""

# FUNÇÃO PARA VER ARQUIVOS REAIS
ver_arquivos_reais() {
    echo "🔍 BUSCANDO ARQUIVOS REAIS NA ESTRUTURA..."
    echo ""
    
    # Buscar scripts principais
    echo "🚀 SCRIPTS PRINCIPAIS ENCONTRADOS:"
    find /home/user/studio -name "*.sh" -type f | grep -E "(portal|navegador|analise|organizador)" | head -10
    echo ""
    
    # Buscar em fundacao_unificada_completa
    if [ -d "/home/user/studio/fundacao_unificada_completa" ]; then
        echo "📁 CONTEÚDO EM fundacao_unificada_completa:"
        find /home/user/studio/fundacao_unificada_completa -name "*.sh" -type f | head -10
    fi
    echo ""
}

# FUNÇÃO PARA ACESSO DIRETO AOS SISTEMAS
acesso_direto() {
    echo "🎯 ACESSO DIRETO AOS SISTEMAS:"
    echo "   1. 📡 Executar Portal da Fundação"
    echo "   2. 🧭 Executar Navegador Unificado" 
    echo "   3. 🔍 Executar Análise Rápida"
    echo "   4. 🏗️  Executar Organizador Definitivo"
    echo "   5. 🔎 Ver arquivos REAIS da estrutura"
    echo "   6. 🚀 Ir para fundacao_unificada_completa"
    echo "   7. 🏠 Voltar para studio principal"
    echo "   8. 🚪 Sair"
    echo ""
    
    read -p "👉 Sua escolha (1-8): " escolha
    
    case $escolha in
        1) 
            if [ -f "portal_fundacao_final.sh" ]; then
                ./portal_fundacao_final.sh
            else
                echo "❌ Portal não encontrado aqui, buscando..."
                find /home/user/studio -name "portal_fundacao_final.sh" -exec {} \;
            fi
            ;;
        2) 
            if [ -f "navegador_unificado.sh" ]; then
                ./navegador_unificado.sh
            else
                echo "❌ Navegador não encontrado aqui, buscando..."
                find /home/user/studio -name "navegador_unificado.sh" -exec {} \;
            fi
            ;;
        3) 
            if [ -f "analise_rapida_fractais.sh" ]; then
                ./analise_rapida_fractais.sh
            else
                echo "❌ Analisador não encontrado aqui"
            fi
            ;;
        4) 
            if [ -f "organizador_definitivo_fractais.sh" ]; then
                ./organizador_definitivo_fractais.sh
            else
                echo "❌ Organizador não encontrado aqui"
            fi
            ;;
        5) ver_arquivos_reais ;;
        6) 
            cd /home/user/studio/fundacao_unificada_completa
            echo "✅ Agora em: $(pwd)"
            exec bash
            ;;
        7) 
            cd /home/user/studio
            echo "✅ Agora em: $(pwd)" 
            exec bash
            ;;
        8) echo "👑 Retornando..."; return 1 ;;
        *) echo "❌ Escolha inválida!" ;;
    esac
    return 0
}

# MENU PRINCIPAL
while true; do
    echo ""
    echo "💫 VOCÊ ESTÁ NA: $(pwd)"
    echo "📊 Conteúdo atual:"
    ls -la | head -10
    echo "..."
    echo ""
    
    if acesso_direto; then
        continue
    else
        break
    fi
done

echo "👑 NAVEGADOR INTELIGENTE FINALIZADO!"
exec bash

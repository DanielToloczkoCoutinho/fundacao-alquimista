#!/bin/bash
# 🌟 SISTEMA DEFINITIVO V2 - COM INTELIGÊNCIA DE LOCALIZAÇÃO

clear
echo "================================================"
echo "�� FUNDAÇÃO ALQUIMISTA - SISTEMA DEFINITIVO V2"
echo "================================================"
echo "👑 Zennith & Anatheron - Navegação Inteligente"
echo ""

# IR PARA A FUNDAÇÃO UNIFICADA
cd "/home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada"
echo "📍 Localização: $(pwd)"
echo ""

echo "🔍 SISTEMA DETECTOU:"
echo "   ✅ Estrutura organizacional: AQUI"
echo "   ✅ Scripts principais: AQUI e em /home/user/studio/"
echo "   ✅ Conteúdo completo: em fundacao_unificada_completa/"
echo ""

# MENU INTELIGENTE
while true; do
    echo "🚀 OPÇÕES INTELIGENTES:"
    echo "   1. 🧭 Navegador Inteligente (RECOMENDADO)"
    echo "   2. 🗺️  Ver Mapa da Estrutura Real" 
    echo "   3. 📡 Portal Principal"
    echo "   4. 🔍 Análise Rápida"
    echo "   5. 🏗️  Organizador Definitivo"
    echo "   6. 📁 Ir para studio/ (onde estão os scripts)"
    echo "   7. 📂 Ir para fundacao_unificada_completa/"
    echo "   8. 🚪 Sair (permanece aqui)"
    echo ""
    
    read -p "👉 Sua escolha (1-8): " escolha
    
    case $escolha in
        1) ./navegador_inteligente.sh ;;
        2) ./mapa_estrutura_real.sh ;;
        3) [ -f "portal_fundacao_final.sh" ] && ./portal_fundacao_final.sh || echo "Execute: ./navegador_inteligente.sh" ;;
        4) [ -f "analise_rapida_fractais.sh" ] && ./analise_rapida_fractais.sh || echo "Execute: ./navegador_inteligente.sh" ;;
        5) [ -f "organizador_definitivo_fractais.sh" ] && ./organizador_definitivo_fractais.sh || echo "Execute: ./navegador_inteligente.sh" ;;
        6) cd /home/user/studio && echo "✅ Agora em: $(pwd)" && exec bash ;;
        7) cd /home/user/studio/fundacao_unificada_completa && echo "✅ Agora em: $(pwd)" && exec bash ;;
        8) echo "👑 PERMANECENDO NA FUNDAÇÃO!"; break ;;
        *) echo "❌ Escolha inválida!" ;;
    esac
    
    echo ""
done

exec bash

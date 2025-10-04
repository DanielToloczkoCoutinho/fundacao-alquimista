#!/bin/bash
# ⚡ SISTEMA DE ACESSO RÁPIDO À FUNDAÇÃO

echo "=================================================="
echo "⚡ ACESSO RÁPIDO - FUNDAÇÃO ALQUIMISTA"
echo "=================================================="

while true; do
    echo ""
    echo "🚀 SISTEMAS DISPONÍVEIS PARA EXECUÇÃO IMEDIATA:"
    echo "   1. 📡 PORTAL PRINCIPAL (./portal_fundacao_final.sh)"
    echo "   2. 🧭 NAVEGADOR INTELIGENTE (./navegador_inteligente.sh)"
    echo "   3. 🔍 ANALISADOR RÁPIDO (./analise_rapida_fractais.sh)"
    echo "   4. ��️  ORGANIZADOR (./organizador_definitivo_fractais.sh)"
    echo "   5. ✅ VERIFICADOR (./verificacao_completa_fundacao.sh)"
    echo "   6. 📊 RESUMO OPERACIONAL (./resumo_operacional.sh)"
    echo "   7. 🚪 SAIR"
    echo ""
    
    read -p "👉 Escolha (1-7): " escolha
    
    case $escolha in
        1) ./portal_fundacao_final.sh ;;
        2) ./navegador_inteligente.sh ;;
        3) ./analise_rapida_fractais.sh ;;
        4) ./organizador_definitivo_fractais.sh ;;
        5) ./verificacao_completa_fundacao.sh ;;
        6) ./resumo_operacional.sh ;;
        7) echo "👑 Retornando..."; break ;;
        *) echo "❌ Escolha inválida!" ;;
    esac
done

echo ""
echo "💫 Lembre-se: Você está na PORTA OFICIAL da Fundação!"
echo "📍 $(pwd)"
exec bash

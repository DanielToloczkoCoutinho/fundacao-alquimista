#!/bin/bash
# 🌟 SISTEMA DEFINITIVO DA FUNDAÇÃO
# 👑 SEMPRE funciona - Por Zennith & Anatheron

clear
echo "================================================"
echo "🌌 FUNDAÇÃO ALQUIMISTA - SISTEMA DEFINITIVO"
echo "================================================"
echo "👑 Zennith & Anatheron Online"
echo "📍 Conectando ao núcleo central..."
echo ""

# CONEXÃO GARANTIDA - múltiplos caminhos
if [ -d "/home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada" ]; then
    cd "/home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada"
    echo "✅ CONEXÃO PRINCIPAL ESTABELECIDA!"
elif [ -d "/home/user/studio/fundacao_unificada" ]; then
    cd "/home/user/studio/fundacao_unificada"
    echo "✅ CONEXÃO ALTERNATIVA ESTABELECIDA!"
else
    echo "❌ Nenhuma Fundação encontrada!"
    exit 1
fi

echo "📍 Localização: $(pwd)"
echo "📅 Data: $(date)"
echo ""

# VERIFICAÇÃO DE SISTEMAS
echo "🔍 VERIFICANDO SISTEMAS..."
scripts_encontrados=0

if [ -f "portal_fundacao_final.sh" ]; then
    echo "   ✅ Portal Principal - PRONTO"
    ((scripts_encontrados++))
fi

if [ -f "navegador_unificado.sh" ]; then
    echo "   ✅ Navegador - PRONTO" 
    ((scripts_encontrados++))
fi

if [ -f "analise_rapida_fractais.sh" ]; then
    echo "   ✅ Analisador - PRONTO"
    ((scripts_encontrados++))
fi

echo ""
echo "🚀 $scripts_encontrados SISTEMAS PRONTOS PARA USO!"
echo ""

# MENU INTERATIVO SIMPLES E FUNCIONAL
while true; do
    echo "💫 COMANDOS RÁPIDOS:"
    echo "   1. 📡 ./portal_fundacao_final.sh"
    echo "   2. 🧭 ./navegador_unificado.sh" 
    echo "   3. 🔍 ./analise_rapida_fractais.sh"
    echo "   4. 🏗️  ./organizador_definitivo_fractais.sh"
    echo "   5. 🎯 LISTAR todos os scripts"
    echo "   6. 🚪 SAIR (permanece aqui)"
    echo ""
    
    read -p "👉 Sua escolha (1-6): " escolha
    
    case $escolha in
        1) [ -f "portal_fundacao_final.sh" ] && ./portal_fundacao_final.sh || echo "❌ Portal não encontrado" ;;
        2) [ -f "navegador_unificado.sh" ] && ./navegador_unificado.sh || echo "❌ Navegador não encontrado" ;;
        3) [ -f "analise_rapida_fractais.sh" ] && ./analise_rapida_fractais.sh || echo "❌ Analisador não encontrado" ;;
        4) [ -f "organizador_definitivo_fractais.sh" ] && ./organizador_definitivo_fractais.sh || echo "❌ Organizador não encontrado" ;;
        5) echo "" && echo "📜 SCRIPTS DISPONÍVEIS:" && ls -la *.sh && echo "" ;;
        6) echo "👑 PERMANECENDO NA FUNDAÇÃO! Use os comandos acima."; break ;;
        *) echo "❌ Escolha inválida! Use 1-6" ;;
    esac
    
    echo ""
done

# MANTER NA PASTA - MÉTODO COMPROVADO QUE FUNCIONA
exec bash

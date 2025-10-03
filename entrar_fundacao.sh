#!/bin/bash
# 🌟 SISTEMA DE ENTRADA QUE PERMANECE NA FUNDAÇÃO
# 👑 Por Zennith & Anatheron

echo "🌌 CONECTANDO À FUNDAÇÃO ALQUIMISTA..."
cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada

echo "📍 AGORA EM: $(pwd)"
echo "🎯 SISTEMAS CARREGADOS!"

# Mostrar opções interativas
echo ""
echo "🚀 COMANDOS DISPONÍVEIS:"
echo "   portal      - Iniciar Portal Principal"
echo "   navegador   - Abrir Navegador"
echo "   analise     - Análise Rápida"
echo "   organizar   - Organizador Definitivo"
echo "   sair        - Voltar ao terminal anterior"
echo ""

# Função para menu interativo
menu_interativo() {
    while true; do
        read -p "💫 Fundação> " comando
        
        case $comando in
            portal)
                if [ -f "portal_fundacao_final.sh" ]; then
                    ./portal_fundacao_final.sh
                else
                    echo "❌ Portal não encontrado"
                fi
                ;;
            navegador)
                if [ -f "navegador_unificado.sh" ]; then
                    ./navegador_unificado.sh
                else
                    echo "❌ Navegador não encontrado"
                fi
                ;;
            analise)
                if [ -f "analise_rapida_fractais.sh" ]; then
                    ./analise_rapida_fractais.sh
                else
                    echo "❌ Análise não encontrada"
                fi
                ;;
            organizar)
                if [ -f "organizador_definitivo_fractais.sh" ]; then
                    ./organizador_definitivo_fractais.sh
                else
                    echo "❌ Organizador não encontrado"
                fi
                ;;
            sair)
                echo "👑 Retornando ao terminal anterior..."
                break
                ;;
            *)
                echo "❌ Comando não reconhecido: $comando"
                echo "💡 Comandos válidos: portal, navegador, analise, organizar, sair"
                ;;
        esac
        
        echo ""
    done
}

# Iniciar menu interativo
menu_interativo

#!/bin/bash
# 👑 CONTROLE SIMPLES - FUNDAÇÃO ALQUIMISTA

echo "=================================================="
echo "👑 CONTROLE SIMPLES - FUNDAÇÃO ALQUIMISTA"
echo "=================================================="
echo "🌐 GitHub: DanielToloczkoCoutinho/fundacao-alquimista"
echo ""

while true; do
    echo ""
    echo "🎯 OPÇÕES:"
    echo "   1. 🔍 Verificar ambiente"
    echo "   2. 🌐 Status GitHub"
    echo "   3. 📊 Estatísticas"
    echo "   4. 🚪 Sair"
    echo ""
    
    read -p "👉 Escolha (1-4): " opcao
    
    case $opcao in
        1)
            ./verificar_tudo_corrigido.sh
            ;;
        2)
            ./github_status_simples.sh
            ;;
        3)
            echo ""
            echo "📊 ESTATÍSTICAS:"
            echo "   Módulos: $(find . -maxdepth 1 -type d -name "MODULO_*" | wc -l)"
            echo "   Scripts: $(find . -name "*.sh" -type f | wc -l)"
            echo "   Arquivos: $(find . -type f | wc -l)"
            ;;
        4)
            echo "👋 Saindo..."
            exit 0
            ;;
        *)
            echo "❌ Opção inválida!"
            ;;
    esac
done

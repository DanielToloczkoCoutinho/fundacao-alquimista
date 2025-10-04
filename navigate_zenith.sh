#!/bin/bash
# NAVEGAÇÃO FÁCIL DO SISTEMA ZENITH ORGANIZADO

echo "🌌 NAVEGAÇÃO DO SISTEMA ZENITH ORGANIZADO"
echo "========================================="

# Verificar se estamos no lugar certo
if [ ! -d "organized_project" ]; then
    echo "❌ organized_project/ não encontrado!"
    echo "📍 Você está em: $(pwd)"
    echo "💡 Execute: cd organized_project/ primeiro"
    exit 1
fi

cd organized_project/

while true; do
    echo ""
    echo "🎯 ONDE VOCÊ QUER IR?"
    echo "1. 🔧 Sistemas Principais"
    echo "2. 🔬 Laboratórios" 
    echo "3. ⚡ Tecnologias Quânticas"
    echo "4. 📚 Documentação"
    echo "5. 🐚 Scripts"
    echo "6. 🔍 Verificar Sistema"
    echo "7. 📊 Estatísticas"
    echo "8. 🚪 Sair"
    echo ""
    read -p "Escolha uma opção (1-8): " choice
    
    case $choice in
        1)
            echo "🔧 SISTEMAS PRINCIPAIS:"
            ls -la core_systems/
            ;;
        2)
            echo "🔬 LABORATÓRIOS:"
            ls -la research_labs/laboratorios/
            ;;
        3) 
            echo "⚡ TECNOLOGIAS QUÂNTICAS:"
            ls -la quantum_implementations/
            ;;
        4)
            echo "📚 DOCUMENTAÇÃO:"
            ls -la documentation/
            ;;
        5)
            echo "🐚 SCRIPTS:"
            ls -la scripts/ 2>/dev/null || echo "Nenhum script adicional"
            ;;
        6)
            echo "🔍 VERIFICANDO SISTEMA..."
            ./verify_system.sh
            ;;
        7)
            echo "📊 ESTATÍSTICAS:"
            echo "Sistemas: $(find core_systems -name "*.json" | wc -l) arquivos"
            echo "Laboratórios: $(find research_labs -name "*.json" | wc -l) arquivos"
            echo "Quantum: $(find quantum_implementations -name "*.json" | wc -l) arquivos"
            echo "Documentação: $(find documentation -name "*.json" | wc -l) arquivos"
            ;;
        8)
            echo "👋 Saindo..."
            break
            ;;
        *)
            echo "❌ Opção inválida!"
            ;;
    esac
done

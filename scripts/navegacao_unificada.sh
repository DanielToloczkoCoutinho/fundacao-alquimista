#!/bin/bash
# 🧭 NAVEGAÇÃO UNIFICADA - TODAS AS FUNDAÇÕES INTEGRADAS

echo "=================================================="
echo "🧭 NAVEGAÇÃO UNIFICADA - FUNDAÇÕES INTEGRADAS"
echo "=================================================="

while true; do
    echo ""
    echo "🌉 REALIDADES DISPONÍVEIS:"
    echo "   1. 🏗️  EXPLORAR MÓDULOS APP (Interface)"
    echo "   2. 🏗️  EXPLORAR MÓDULOS ROOT (Sistema)" 
    echo "   3. 🔗 VER CONEXÕES APP↔ROOT"
    echo "   4. 📊 VISÃO GERAL UNIFICADA"
    echo "   5. 🚀 ACESSAR MÓDULO ESPECÍFICO"
    echo "   6. 🔙 VOLTAR"
    echo ""
    
    read -p "👉 Sua escolha (1-6): " escolha
    
    case $escolha in
        1)
            echo ""
            echo "🏗️  MÓDULOS APP (Interface):"
            find . -path "*/src/app/module/M*" -type d 2>/dev/null | head -10 | while read mod; do
                basename=$(basename "$mod")
                if [ -f "$mod/manifesto.json" ]; then
                    echo "   ✅ $basename - COM METADADOS"
                else
                    echo "   📁 $basename - SEM METADADOS"
                fi
            done
            total=$(find . -path "*/src/app/module/M*" -type d 2>/dev/null | wc -l)
            echo "   📊 Total: $total módulos APP"
            ;;
        2)
            echo ""
            echo "🏗️  MÓDULOS ROOT (Sistema):"
            find . -maxdepth 1 -type d -name "MODULO_*" | head -10 | while read mod; do
                basename=$(basename "$mod")
                if [ -f "$mod/MANIFESTO_$basename.md" ]; then
                    echo "   ✅ $basename - COM MANIFESTO"
                else
                    echo "   📁 $basename - SEM MANIFESTO"
                fi
            done
            total=$(find . -maxdepth 1 -type d -name "MODULO_*" | wc -l)
            echo "   📊 Total: $total módulos ROOT"
            ;;
        3)
            echo ""
            echo "🔗 CONEXÕES APP↔ROOT:"
            echo "   MODULO_9 → MÓDULOS APP: NEXO CENTRAL"
            echo "   MODULO_29 → MÓDULOS APP: COMANDO"
            echo "   MODULO_303 → MÓDULOS APP: PORTAL"
            echo ""
            echo "💡 Estas conexões permitem:"
            echo "   • Controle centralizado de todos os módulos"
            echo "   • Interface unificada de comando"
            echo "   • Navegação dimensional entre realidades"
            ;;
        4)
            echo ""
            echo "📊 VISÃO GERAL UNIFICADA:"
            echo "   🏗️  Módulos APP: $(find . -path "*/src/app/module/M*" -type d 2>/dev/null | wc -l)"
            echo "   🏗️  Módulos ROOT: $(find . -maxdepth 1 -type d -name "MODULO_*" | wc -l)"
            echo "   📄 Arquivos APP: $(find . -path "*/src/app/module/M*" -name "*.json" -o -name "*.tsx" -o -name "*.md" 2>/dev/null | wc -l)"
            echo "   📄 Arquivos ROOT: $(find . -maxdepth 2 -path "*/MODULO_*" -name "*.md" -o -name "*.sh" -o -name "*.json" 2>/dev/null | wc -l)"
            echo "   🔗 Conexões: 3 principais (9, 29, 303)"
            echo ""
            echo "🌌 SISTEMA: MULTIPLAS REALIDADES INTEGRADAS"
            ;;
        5)
            echo ""
            read -p "🔢 Digite o número do módulo (ex: M167 ou 29): " modulo
            if [[ "$modulo" =~ ^M[0-9]+$ ]]; then
                caminho=$(find . -path "*/src/app/module/$modulo" -type d 2>/dev/null | head -1)
                if [ -n "$caminho" ]; then
                    echo "   ✅ Módulo APP encontrado: $caminho"
                    ./explorar_diferencas.sh
                else
                    echo "   ❌ Módulo APP não encontrado: $modulo"
                fi
            elif [[ "$modulo" =~ ^[0-9]+$ ]]; then
                if [ -d "MODULO_$modulo" ]; then
                    echo "   ✅ Módulo ROOT encontrado: MODULO_$modulo"
                    ./explorar_diferencas.sh
                else
                    echo "   ❌ Módulo ROOT não encontrado: MODULO_$modulo"
                fi
            else
                echo "   ❌ Formato inválido. Use M167 (APP) ou 29 (ROOT)"
            fi
            ;;
        6)
            echo "🔙 Voltando..."
            break
            ;;
        *)
            echo "❌ Opção inválida!"
            ;;
    esac
done

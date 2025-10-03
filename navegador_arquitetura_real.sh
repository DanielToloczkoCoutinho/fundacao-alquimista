#!/bin/bash
# 🧭 NAVEGADOR DA ARQUITETURA REAL DA FUNDAÇÃO

echo "=================================================="
echo "🧭 NAVEGADOR - ARQUITETURA REAL"
echo "=================================================="
echo "👑 Baseado na análise de 1005 módulos"
echo ""

while true; do
    echo "🎯 ARQUITETURA IDENTIFICADA:"
    echo "   1. 🌟 NEXOS CENTRAIS (Módulos 0, 9, 29, Omega)"
    echo "   2. 🔧 SISTEMAS DE SUPORTE (45, 72, 203, 307)"
    echo "   3. 🚪 PORTAL DIMENSIONAL (303 + 303.1)"
    echo "   4. 📊 VER MAPA COMPLETO"
    echo "   5. 🔍 ANALISAR MÓDULO ESPECÍFICO"
    echo "   6. 🚪 SAIR"
    echo ""
    
    read -p "👉 Escolha (1-6): " escolha
    
    case $escolha in
        1)
            echo "💫 EXPLORANDO NEXOS CENTRAIS:"
            nexos=("MODULO_0" "MODULO_9" "MODULO_29" "MODULO_OMEGA")
            for nexo in "${nexos[@]}"; do
                if [ -d "$nexo" ]; then
                    arquivos=$(find "$nexo" -type f | wc -l)
                    echo "   🌟 $nexo - $arquivos arquivos"
                    if [ -f "$nexo/MANIFESTO_${nexo}.md" ]; then
                        echo "      📄 Possui manifesto"
                    fi
                else
                    echo "   ❌ $nexo - Não encontrado"
                fi
            done
            ;;
        2)
            echo "🔧 EXPLORANDO SISTEMAS DE SUPORTE:"
            suportes=("MODULO_45" "MODULO_72" "MODULO_203" "MODULO_307")
            for suporte in "${suportes[@]}"; do
                if [ -d "$suporte" ]; then
                    arquivos=$(find "$suporte" -type f | wc -l)
                    echo "   ⚡ $suporte - $arquivos arquivos"
                else
                    echo "   ❌ $suporte - Não encontrado"
                fi
            done
            ;;
        3)
            echo "🚪 EXPLORANDO PORTAL DIMENSIONAL:"
            portais=("MODULO_303" "MODULO_303.1")
            for portal in "${portais[@]}"; do
                if [ -d "$portal" ]; then
                    arquivos=$(find "$portal" -type f | wc -l)
                    echo "   🌐 $portal - $arquivos arquivos"
                else
                    echo "   ❌ $portal - Não encontrado"
                fi
            done
            ;;
        4)
            echo "🗺️ ABRINDO MAPA DA ARQUITETURA REAL..."
            if [ -f "estrutura_real_fundacao.md" ]; then
                cat estrutura_real_fundacao.md | head -40
            else
                echo "❌ Mapa não encontrado. Execute o organizador primeiro."
            fi
            ;;
        5)
            read -p "🔍 Digite o número do módulo (0-1005): " numero
            modulo="MODULO_$numero"
            if [ -d "$modulo" ]; then
                echo "   📁 $modulo encontrado!"
                arquivos=$(find "$modulo" -type f | wc -l)
                echo "   📊 $arquivos arquivos"
                ls -la "$modulo" | head -10
            else
                echo "   ❌ $modulo não encontrado"
            fi
            ;;
        6)
            echo "👑 Retornando..."
            break
            ;;
        *)
            echo "❌ Escolha inválida!"
            ;;
    esac
    echo ""
done

exec bash

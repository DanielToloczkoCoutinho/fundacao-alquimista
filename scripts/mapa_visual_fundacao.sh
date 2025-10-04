#!/bin/bash
# 🗺️ MAPA VISUAL COMPLETO DA FUNDAÇÃO

echo "=================================================="
echo "🗺️ MAPA VISUAL - FUNDAÇÃO ALQUIMISTA"
echo "=================================================="

# Função para desenhar árvore visual
desenhar_arvore() {
    echo "🌳 ESTRUTURA DA FUNDAÇÃO:"
    echo "└── 🏛️ fundacao_unificada/"
    
    # Diretórios principais
    for dir in $(find . -maxdepth 1 -type d | sort | grep -v "^\.$"); do
        dir_name=$(basename "$dir")
        count=$(find "$dir" -type f | wc -l)
        
        case $dir_name in
            MODULO_ALFA|MODULO_OMEGA)
                echo "    ├── 💫 $dir_name/ ($count arquivos)"
                ;;
            MODULO_*)
                echo "    ├── 🧩 $dir_name/ ($count arquivos)"
                ;;
            ARTEFATOS_SAGRADOS|codex|chaos)
                echo "    ├── �� $dir_name/ ($count arquivos)"
                ;;
            scripts|src|app)
                echo "    ├── 🔧 $dir_name/ ($count arquivos)"
                ;;
            *)
                echo "    ├── 📁 $dir_name/ ($count arquivos)"
                ;;
        esac
    done
}

# Gerar mapa
desenhar_arvore

echo ""
echo "📊 LEGENDA:"
echo "   💫 Módulos Especiais"
echo "   🧩 Módulos Numerados" 
echo "   🔮 Artefatos Sagrados"
echo "   🔧 Sistemas Técnicos"
echo "   📁 Diretórios Gerais"
echo ""

echo "🔍 ESTATÍSTICAS RÁPIDAS:"
echo "   • Total de diretórios: $(find . -type d | wc -l)"
echo "   • Total de arquivos: $(find . -type f | wc -l)"
echo "   • Módulos encontrados: $(find . -type d -name "MODULO_*" | wc -l)"
echo "   • Scripts: $(find . -name "*.sh" | wc -l)"
echo ""

exec bash

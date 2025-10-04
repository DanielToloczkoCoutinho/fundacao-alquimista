#!/bin/bash

# 🧭 NAVEGADOR UNIFICADO DA FUNDAÇÃO
# Acesso rápido a TODOS os diretórios organizados

BASE_DIR="./"

show_menu() {
    echo ""
    echo "🌌 NAVEGADOR UNIFICADO - FUNDAÇÃO ALQUIMISTA"
    echo "═══════════════════════════════════════════════════"
    echo "👑 TODOS OS DIRETÓRIOS ORGANIZADOS"
    echo ""
    
    # Grupos de diretórios
    echo "📁 DIRETÓRIOS PRINCIPAIS:"
    count=1
    for dir in "__pycache__" ".idx" "vscode" "app" "ARTEFATOS_SAGRADOS" "assets" "backend" "backup_fundacao_20251002_193258" "biblioteca" "chaos" "codex" "contracts" "dataconnect" "docker" "docs" "DOCUMENTOS_FUNDACAO" "functions" "fundacao_backups" "fundacao-alquimista" "gateway" "github" "grafos_aura" "k8s" "labs" "logs" "mobile" "modules"; do
        if [ -d "$dir" ]; then
            file_count=$(find "$dir" -type f 2>/dev/null | wc -l)
            echo "   $count) 📂 $dir ($file_count arquivos)"
            ((count++))
        fi
    done
    
    echo ""
    echo "🔢 MÓDULOS NUMERADOS:"
    for i in {0..100}; do
        dir="MODULO_$i"
        if [ -d "$dir" ]; then
            file_count=$(find "$dir" -type f 2>/dev/null | wc -l)
            echo "   $count) 🧩 $dir ($file_count arquivos)"
            ((count++))
        fi
    done
    
    echo ""
    echo "💫 MÓDULOS ESPECIAIS:"
    for dir in "MODULO_ALFA" "MODULO_OMEGA" "paineis" "protocolos" "scripts" "src" "tests"; do
        if [ -d "$dir" ]; then
            file_count=$(find "$dir" -type f 2>/dev/null | wc -l)
            echo "   $count) 🌟 $dir ($file_count arquivos)"
            ((count++))
        fi
    done
    
    echo ""
    echo "0) 🚪 Sair"
    echo ""
    echo -n "👉 Escolha um diretório: "
}

navigate_to_dir() {
    local dir_name="$1"
    if [ -d "$dir_name" ]; then
        echo ""
        echo "📁 CONTEÚDO DE: $dir_name"
        echo "----------------------------------------"
        ls -la "$dir_name" | head -20
        echo ""
        echo "📊 Estatísticas:"
        echo "   Arquivos: $(find "$dir_name" -type f 2>/dev/null | wc -l)"
        echo "   Diretórios: $(find "$dir_name" -type d 2>/dev/null | wc -l)"
        echo ""
        read -p "Pressione Enter para continuar..."
    else
        echo "❌ Diretório não encontrado: $dir_name"
    fi
}

# Mapeamento de opções
declare -A dir_map
count=1
for dir in "__pycache__" ".idx" "vscode" "app" "ARTEFATOS_SAGRADOS" "assets" "backend" "backup_fundacao_20251002_193258" "biblioteca" "chaos" "codex" "contracts" "dataconnect" "docker" "docs" "DOCUMENTOS_FUNDACAO" "functions" "fundacao_backups" "fundacao-alquimista" "gateway" "github" "grafos_aura" "k8s" "labs" "logs" "mobile" "modules"; do
    if [ -d "$dir" ]; then
        dir_map[$count]="$dir"
        ((count++))
    fi
done

for i in {0..100}; do
    dir="MODULO_$i"
    if [ -d "$dir" ]; then
        dir_map[$count]="$dir"
        ((count++))
    fi
done

for dir in "MODULO_ALFA" "MODULO_OMEGA" "paineis" "protocolos" "scripts" "src" "tests"; do
    if [ -d "$dir" ]; then
        dir_map[$count]="$dir"
        ((count++))
    fi
done

# Menu principal
while true; do
    show_menu
    read choice
    
    if [ "$choice" == "0" ]; then
        echo "✨ Navegação concluída!"
        exit 0
    elif [ -n "${dir_map[$choice]}" ]; then
        navigate_to_dir "${dir_map[$choice]}"
    else
        echo "❌ Opção inválida!"
    fi
done

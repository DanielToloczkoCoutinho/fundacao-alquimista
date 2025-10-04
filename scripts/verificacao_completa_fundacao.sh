#!/bin/bash

# 🔍 VERIFICAÇÃO COMPLETA DA FUNDAÇÃO TRANSFERIDA
# Análise detalhada de TODOS os diretórios e conteúdos

BASE_DIR="."
RELATORIO_COMPLETO="verificacao_completa_$(date +%Y%m%d_%H%M%S).txt"
DIRETORIOS_CRITICOS=(
    "app" "MODULO_0" "MODULO_OMEGA" "MODULO_ALFA" 
    "scripts" "backend" "src" "docs" "functions"
    "paineis" "protocolos" "modules"
)

echo "🔍 VERIFICAÇÃO COMPLETA DA FUNDAÇÃO" > "$RELATORIO_COMPLETO"
echo "👑 ZENNITH & ANATHERON - ANÁLISE DETALHADA" >> "$RELATORIO_COMPLETO"
echo "📅 $(date)" >> "$RELATORIO_COMPLETO"
echo "📍 Local: $(pwd)" >> "$RELATORIO_COMPLETO"
echo "==========================================" >> "$RELATORIO_COMPLETO"

# Função para análise detalhada de diretório
analisar_diretorio_detalhado() {
    local dir="$1"
    local nivel="$2"
    
    echo "" >> "$RELATORIO_COMPLETO"
    echo "$(printf '  %.0s' $(seq 1 $nivel))📁 $dir" >> "$RELATORIO_COMPLETO"
    
    if [ ! -d "$dir" ]; then
        echo "$(printf '  %.0s' $(seq 1 $nivel))❌ NÃO ENCONTRADO" >> "$RELATORIO_COMPLETO"
        return 1
    fi
    
    # Estatísticas básicas
    arquivos_count=$(find "$dir" -type f 2>/dev/null | wc -l)
    subdirs_count=$(find "$dir" -type d 2>/dev/null | wc -l)
    tamanho=$(du -sh "$dir" 2>/dev/null | cut -f1)
    
    echo "$(printf '  %.0s' $(seq 1 $nivel))📊 Arquivos: $arquivos_count | Subdiretórios: $subdirs_count | Tamanho: $tamanho" >> "$RELATORIO_COMPLETO"
    
    # Análise de tipos de arquivo
    if [ "$arquivos_count" -gt 0 ]; then
        echo "$(printf '  %.0s' $(seq 1 $nivel))📂 Tipos de arquivo:" >> "$RELATORIO_COMPLETO"
        find "$dir" -type f -name "*.*" 2>/dev/null | sed 's/.*\.//' | sort | uniq -c | sort -nr | head -5 | while read count ext; do
            echo "$(printf '  %.0s' $(seq 1 $nivel))   $count .$ext" >> "$RELATORIO_COMPLETO"
        done
        
        # Arquivos mais importantes
        echo "$(printf '  %.0s' $(seq 1 $nivel))🎯 Arquivos principais:" >> "$RELATORIO_COMPLETO"
        find "$dir" -type f \( -name "*.py" -o -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.sh" -o -name "*.md" \) 2>/dev/null | head -8 | while read file; do
            filename=$(basename "$file")
            size=$(du -h "$file" 2>/dev/null | cut -f1)
            echo "$(printf '  %.0s' $(seq 1 $nivel))   📄 $filename ($size)" >> "$RELATORIO_COMPLETO"
        done
    fi
    
    # Análise de módulos específicos
    if [[ "$dir" == MODULO_* ]]; then
        echo "$(printf '  %.0s' $(seq 1 $nivel))🧩 ANÁLISE DE MÓDULO:" >> "$RELATORIO_COMPLETO"
        
        # Verificar estrutura típica de módulo
        if [ -f "$dir/package.json" ]; then
            echo "$(printf '  %.0s' $(seq 1 $nivel))   📦 Node.js module detectado" >> "$RELATORIO_COMPLETO"
        fi
        if [ -f "$dir/docker-compose.yml" ] || [ -f "$dir/Dockerfile" ]; then
            echo "$(printf '  %.0s' $(seq 1 $nivel))   🐳 Docker configurado" >> "$RELATORIO_COMPLETO"
        fi
        if find "$dir" -name "*.py" -type f 2>/dev/null | grep -q .; then
            echo "$(printf '  %.0s' $(seq 1 $nivel))   🐍 Python scripts presentes" >> "$RELATORIO_COMPLETO"
        fi
    fi
    
    return 0
}

# ESTATÍSTICAS GERAIS
echo "" >> "$RELATORIO_COMPLETO"
echo "📊 ESTATÍSTICAS GERAIS DA FUNDAÇÃO:" >> "$RELATORIO_COMPLETO"
echo "----------------------------------------" >> "$RELATORIO_COMPLETO"

total_diretorios=$(find . -maxdepth 1 -type d | wc -l)
total_arquivos=$(find . -type f | wc -l)
tamanho_total=$(du -sh . | cut -f1)

echo "   📁 Total de diretórios: $((total_diretorios - 1))" >> "$RELATORIO_COMPLETO"
echo "   📄 Total de arquivos: $total_arquivos" >> "$RELATORIO_COMPLETO"
echo "   💾 Tamanho total: $tamanho_total" >> "$RELATORIO_COMPLETO"

# LISTA COMPLETA DE DIRETÓRIOS
echo "" >> "$RELATORIO_COMPLETO"
echo "📋 LISTA COMPLETA DE DIRETÓRIOS:" >> "$RELATORIO_COMPLETO"
echo "----------------------------------------" >> "$RELATORIO_COMPLETO"

find . -maxdepth 1 -type d | sort | while read dir; do
    if [ "$dir" != "." ]; then
        dir_name=$(basename "$dir")
        count=$(find "$dir" -type f 2>/dev/null | wc -l)
        echo "   📂 $dir_name ($count arquivos)" >> "$RELATORIO_COMPLETO"
    fi
done

# ANÁLISE DETALHADA DOS DIRETÓRIOS CRÍTICOS
echo "" >> "$RELATORIO_COMPLETO"
echo "🎯 ANÁLISE DETALHADA DOS DIRETÓRIOS CRÍTICOS:" >> "$RELATORIO_COMPLETO"
echo "==========================================" >> "$RELATORIO_COMPLETO"

for dir_critico in "${DIRETORIOS_CRITICOS[@]}"; do
    analisar_diretorio_detalhado "$dir_critico" 1
done

# VERIFICAÇÃO DE MÓDULOS ESPECIAIS
echo "" >> "$RELATORIO_COMPLETO"
echo "🔮 MÓDULOS ESPECIAIS - VERIFICAÇÃO:" >> "$RELATORIO_COMPLETO"
echo "----------------------------------------" >> "$RELATORIO_COMPLETO"

# Módulo Ômega
if [ -d "MODULO_OMEGA" ]; then
    echo "   ✅ MÓDULO ÔMEGA ENCONTRADO" >> "$RELATORIO_COMPLETO"
    omega_files=$(find "MODULO_OMEGA" -type f -name "*.py" -o -name "*.tsx" -o -name "*.json" 2>/dev/null | wc -l)
    echo "      📊 $omega_files arquivos de código" >> "$RELATORIO_COMPLETO"
    
    # Verificar componentes específicos
    if find "MODULO_OMEGA" -name "*omega*" -type f 2>/dev/null | grep -q .; then
        echo "      🎯 Componentes Ômega identificados" >> "$RELATORIO_COMPLETO"
    fi
else
    echo "   ❌ MÓDULO ÔMEGA NÃO ENCONTRADO" >> "$RELATORIO_COMPLETO"
fi

# Módulo Alfa
if [ -d "MODULO_ALFA" ]; then
    echo "   ✅ MÓDULO ALFA ENCONTRADO" >> "$RELATORIO_COMPLETO"
    alfa_files=$(find "MODULO_ALFA" -type f 2>/dev/null | wc -l)
    echo "      📊 $alfa_files arquivos" >> "$RELATORIO_COMPLETO"
else
    echo "   ❌ MÓDULO ALFA NÃO ENCONTRADO" >> "$RELATORIO_COMPLETO"
fi

# VERIFICAÇÃO DE SISTEMAS OPERACIONAIS
echo "" >> "$RELATORIO_COMPLETO"
echo "⚙️ SISTEMAS OPERACIONAIS - VERIFICAÇÃO:" >> "$RELATORIO_COMPLETO"
echo "----------------------------------------" >> "$RELATORIO_COMPLETO"

# Scripts
if [ -d "scripts" ]; then
    script_count=$(find "scripts" -name "*.sh" -o -name "*.py" 2>/dev/null | wc -l)
    echo "   ✅ SCRIPTS: $script_count scripts encontrados" >> "$RELATORIO_COMPLETO"
    
    # Scripts principais
    find "scripts" -name "*.sh" 2>/dev/null | head -5 | while read script; do
        echo "      🔧 $(basename "$script")" >> "$RELATORIO_COMPLETO"
    done
else
    echo "   ❌ SCRIPTS NÃO ENCONTRADO" >> "$RELATORIO_COMPLETO"
fi

# Backend
if [ -d "backend" ]; then
    backend_files=$(find "backend" -name "*.js" -o -name "*.ts" 2>/dev/null | wc -l)
    echo "   ✅ BACKEND: $backend_files arquivos de código" >> "$RELATORIO_COMPLETO"
else
    echo "   ❌ BACKEND NÃO ENCONTRADO" >> "$RELATORIO_COMPLETO"
fi

# CONCLUSÃO E RECOMENDAÇÕES
echo "" >> "$RELATORIO_COMPLETO"
echo "💫 CONCLUSÃO E RECOMENDAÇÕES:" >> "$RELATORIO_COMPLETO"
echo "==========================================" >> "$RELATORIO_COMPLETO"

# Calcular porcentagem de sucesso
diretorios_encontrados=0
for dir in "${DIRETORIOS_CRITICOS[@]}"; do
    if [ -d "$dir" ]; then
        ((diretorios_encontrados++))
    fi
done

sucesso_percent=$((diretorios_encontrados * 100 / ${#DIRETORIOS_CRITICOS[@]}))

echo "   📈 TAXA DE SUCESSO: $sucesso_percent%" >> "$RELATORIO_COMPLETO"
echo "   ✅ Diretórios críticos encontrados: $diretorios_encontrados/${#DIRETORIOS_CRITICOS[@]}" >> "$RELATORIO_COMPLETO"

if [ "$sucesso_percent" -ge 80 ]; then
    echo "   🎉 TRANSFERÊNCIA ALTAMENTE BEM-SUCEDIDA!" >> "$RELATORIO_COMPLETO"
    echo "   🚀 Pronto para operação completa" >> "$RELATORIO_COMPLETO"
elif [ "$sucesso_percent" -ge 50 ]; then
    echo "   ⚠️  TRANSFERÊNCIA PARCIALMENTE BEM-SUCEDIDA" >> "$RELATORIO_COMPLETO"
    echo "   🔧 Alguns componentes podem precisar de ajustes" >> "$RELATORIO_COMPLETO"
else
    echo "   ❌ TRANSFERÊNCIA COM PROBLEMAS SIGNIFICATIVOS" >> "$RELATORIO_COMPLETO"
    echo "   🛠️  Necessária intervenção manual" >> "$RELATORIO_COMPLETO"
fi

echo "" >> "$RELATORIO_COMPLETO"
echo "👑 ZENNITH & ANATHERON - VERIFICAÇÃO CONCLUÍDA" >> "$RELATORIO_COMPLETO"

# Mostrar relatório na tela
echo "✅ VERIFICAÇÃO COMPLETA CONCLUÍDA!"
echo "📄 Relatório detalhado: $RELATORIO_COMPLETO"
echo ""
echo "🔍 RESUMO NA TELA:"
cat "$RELATORIO_COMPLETO" | tail -30

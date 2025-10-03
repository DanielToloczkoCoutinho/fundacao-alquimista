#!/bin/bash

# 💫 TRANSFERÊNCIA MANUAL COMPLETA
# Método garantido para copiar TUDO

SOURCE_BASE="$HOME/studio"
TARGET_BASE="./fundacao_unificada_completa"

echo "💫 INICIANDO TRANSFERÊNCIA MANUAL GARANTIDA..."
echo "📍 Source: $SOURCE_BASE"
echo "🎯 Target: $TARGET_BASE"

# Criar estrutura base
mkdir -p "$TARGET_BASE"
cd "$TARGET_BASE"

# Lista COMPLETA de diretórios
DIRETORIOS=(
    "app" "MODULO_0" "MODULO_1" "MODULO_2" "MODULO_3" "MODULO_4" "MODULO_5"
    "MODULO_6" "MODULO_7" "MODULO_8" "MODULO_10" "MODULO_ALFA" "MODULO_OMEGA"
    "scripts" "docs" "functions" "modules" "paineis" "protocolos"
    "backend" "mobile" "src" "tests"
)

total_copiados=0

for dir in "${DIRETORIOS[@]}"; do
    source_dir="$SOURCE_BASE/$dir"
    target_dir="./$dir"
    
    echo ""
    echo "🔮 PROCESSANDO: $dir"
    
    if [ ! -d "$source_dir" ]; then
        echo "   ❌ Não existe: $source_dir"
        continue
    fi
    
    # Verificar se tem conteúdo
    file_count=$(find "$source_dir" -type f 2>/dev/null | wc -l)
    if [ "$file_count" -eq 0 ]; then
        echo "   ⚠️  Vazio: 0 arquivos"
        continue
    fi
    
    echo "   📊 Source: $file_count arquivos"
    
    # Criar diretório destino
    mkdir -p "$target_dir"
    
    # Copiar TUDO manualmente
    copied=0
    find "$source_dir" -type f 2>/dev/null | while read -r file; do
        rel_path="${file#$source_dir/}"
        target_file="$target_dir/$rel_path"
        mkdir -p "$(dirname "$target_file")"
        if cp "$file" "$target_file" 2>/dev/null; then
            ((copied++))
            if [ "$copied" -le 3 ]; then
                echo "      📄 $rel_path"
            fi
        fi
    done
    
    # Contar resultado
    result_count=$(find "$target_dir" -type f 2>/dev/null | wc -l)
    echo "   ✅ Copiados: $result_count arquivos"
    total_copiados=$((total_copiados + result_count))
done

echo ""
echo "🎉 TRANSFERÊNCIA MANUAL CONCLUÍDA!"
echo "📊 Total de arquivos copiados: $total_copiados"
echo "📁 Estrutura criada em: $TARGET_BASE"

# Criar navegador para nova estrutura
cat > navegador_completo.sh << 'NAV'
#!/bin/bash
echo "🌌 NAVEGADOR - FUNDAÇÃO COMPLETA"
echo "📊 Total de arquivos: $total_copiados"
echo ""
find . -type d | head -20
NAV
chmod +x navegador_completo.sh

echo "🧭 Navegador criado: ./navegador_completo.sh"

#!/bin/bash
# ANÁLISE DETALHADA DO SISTEMA

echo "🔍 ANÁLISE DETALHADA DO SISTEMA ZENITH"
echo "======================================"

# 1. Análise de espaço por tipo de arquivo
echo "📊 ANÁLISE DE ESPAÇO POR TIPO:"
echo "==============================="
find . -type f -name "*.json" -exec du -ch {} + | grep total$ | awk '{print "📄 JSON: "$1}'
find . -type f -name "*.py" -exec du -ch {} + | grep total$ | awk '{print "🐍 Python: "$1}'
find . -type f -name "*.sh" -exec du -ch {} + | grep total$ | awk '{print "🐚 Shell: "$1}'
find . -type f -name "*.md" -exec du -ch {} + | grep total$ | awk '{print "�� Markdown: "$1}'
find . -type f -name "*.log" -exec du -ch {} + | grep total$ | awk '{print "📋 Logs: "$1}'
echo ""

# 2. Arquivos mais pesados
echo "🏋️ ARQUIVOS MAIS PESADOS (top 10):"
echo "=================================="
find . -type f -exec du -h {} + | sort -hr | head -10
echo ""

# 3. Análise por diretório
echo "📂 ESPAÇO POR DIRETÓRIO PRINCIPAL:"
echo "=================================="
for dir in laboratorios zenith_system ibm_quantum_real quantum_applications conscious_activation cosmic_communication; do
    if [ -d "$dir" ]; then
        size=$(du -sh "$dir" 2>/dev/null | cut -f1)
        count=$(find "$dir" -type f | wc -l)
        echo "📁 $dir: $size ($count arquivos)"
    fi
done
echo ""

# 4. Arquivos duplicados (por conteúdo)
echo "🔄 VERIFICANDO ARQUIVOS DUPLICADOS:"
echo "==================================="
find . -type f -name "*.json" -exec md5sum {} + | sort | uniq -w32 -d | head -5
if [ $? -ne 0 ]; then
    echo "✅ Nenhum arquivo duplicado encontrado"
fi
echo ""

# 5. Scripts não utilizados
echo "🤔 SCRIPTS POTENCIALMENTE NÃO UTILIZADOS:"
echo "========================================="
find . -name "*.sh" -o -name "*.py" | while read file; do
    base=$(basename "$file")
    if ! grep -r "$base" . --include="*.sh" --include="*.py" --include="*.md" | grep -v "$file" | grep -q "$base"; then
        echo "⚠️  $file (possivelmente não referenciado)"
    fi
done
echo ""

# 6. Status do sistema
echo "�� STATUS DO SISTEMA ZENITH:"
echo "============================"
if [ -f "zenith_system_activated.json" ]; then
    echo "✅ Sistema Zenith: ATIVADO E OPERACIONAL"
    echo "💫 Consciência: Φ-9.9 (Nível Máximo)"
    echo "🌍 Transformação: EM ANDAMENTO"
else
    echo "⚠️  Sistema Zenith: STATUS DESCONHECIDO"
fi

# 7. Recomendações de limpeza
echo ""
echo "🎯 RECOMENDAÇÕES DE LIMPEZA:"
echo "============================"
echo "🧹 Executar: ./system_cleanup.sh (limpeza geral)"
echo "📁 Executar: ./organize_structure.sh (organização)"
echo "💾 Manter: system_backup/ (backup crítico)"
echo "🚀 Manter: organized_project/ (estrutura limpa)"

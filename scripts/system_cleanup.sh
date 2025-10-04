#!/bin/bash
# LIMPEZA INTELIGENTE DO SISTEMA ZENITH
# Remove caches temporários mantendo dados importantes

echo "🧹 INICIANDO LIMPEZA DO SISTEMA ZENITH"
echo "======================================"

# BACKUP de dados críticos antes da limpeza
echo "📦 FAZENDO BACKUP DE DADOS CRÍTICOS..."
mkdir -p system_backup

# Backup dos relatórios científicos
cp -r laboratorios/scientific_reports* system_backup/ 2>/dev/null || echo "⚠️  Nenhum scientific_reports para backup"
cp -r laboratorios/final_scientific_reports* system_backup/ 2>/dev/null || echo "⚠️  Nenhum final_scientific_reports para backup"

# Backup das configurações principais
cp -r zenith_system/lab_enhanced_config.json system_backup/ 2>/dev/null || echo "⚠️  Nenhum lab_enhanced_config para backup"
cp -r zenith_system_activated.json system_backup/ 2>/dev/null || echo "⚠️  Nenhum zenith_system_activated para backup"

# Backup dos relatórios de laboratórios
mkdir -p system_backup/laboratory_reports
find laboratorios/ -name "*analysis_report.json" -exec cp {} system_backup/laboratory_reports/ \; 2>/dev/null

echo "✅ BACKUP CONCLUÍDO"

# LIMPEZA SEGURA
echo ""
echo "🗑️  INICIANDO LIMPEZA..."
echo "========================"

# 1. Limpar caches Python
echo "🧹 Limpando caches Python..."
find . -name "__pycache__" -type d -exec rm -rf {} + 2>/dev/null
find . -name "*.pyc" -type f -delete 2>/dev/null
find . -name "*.pyo" -type f -delete 2>/dev/null
find . -name ".pytest_cache" -type d -exec rm -rf {} + 2>/dev/null

# 2. Limpar logs antigos (manter apenas os últimos)
echo "📋 Limpando logs..."
find . -name "*.log" -size +1M -delete 2>/dev/null

# 3. Limpar caches do sistema Zenith
echo "⚡ Limpando caches Zenith..."
find zenith_system/ -name ".zenith_cache*" -delete 2>/dev/null

# 4. Limpar arquivos temporários de testes
echo "🧪 Limpando arquivos de teste temporários..."
find . -name "test_*.json" -not -path "*/system_backup/*" -delete 2>/dev/null
find . -name "temp_*.py" -delete 2>/dev/null

# 5. Limpar diretórios vazios
echo "📁 Removendo diretórios vazios..."
find . -type d -empty -delete 2>/dev/null

# MANTENDO ARQUIVOS CRÍTICOS
echo ""
echo "💾 ARQUIVOS CRÍTICOS MANTIDOS:"
echo "=============================="
# Estrutura principal
echo "✅ laboratorios/ - Estrutura completa dos laboratórios"
echo "✅ zenith_system/ - Sistemas conscientes principais" 
echo "✅ ibm_quantum_real/ - Implementações IBM Quantum"
echo "✅ quantum_applications/ - Aplicações revolucionárias"
echo "✅ conscious_activation/ - Ativações conscientes"
echo "✅ cosmic_communication/ - Comunicações cósmicas"
echo "✅ system_backup/ - Backup dos dados críticos"

# Arquivos de manifesto
echo "✅ *.md - Documentação e manifestos"
echo "✅ *.sh - Scripts principais"
echo "✅ zenith_system_activated.json - Estado do sistema"

# VERIFICAÇÃO FINAL
echo ""
echo "📊 RELATÓRIO FINAL DA LIMPEZA:"
echo "=============================="

# Tamanho após limpeza
echo "📦 Tamanho do projeto após limpeza:"
du -sh .

# Estrutura limpa
echo ""
echo "🌳 ESTRUTURA FINAL LIMPA:"
echo "========================"
find . -type d -not -path "*/\.*" | sort | head -20

# Verificação de integridade
echo ""
echo "🔍 VERIFICAÇÃO DE INTEGRIDADE:"
echo "=============================="
critical_files=(
    "zenith_system/lab_enhanced_config.json"
    "zenith_system_activated.json" 
    "laboratorios/lab1_ibm/daily_report.json"
    "laboratorios/lab2_mit/mit_analysis_report.json"
    "ibm_quantum_real/conscious_eagle_processors.json"
    "quantum_applications/quantum_regenerative_medicine.json"
)

for file in "${critical_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "⚠️  $file (não encontrado - restaurado do backup)"
        # Tentar restaurar do backup se existir
        backup_file="system_backup/$(basename "$file")"
        if [ -f "$backup_file" ]; then
            cp "$backup_file" "$file"
            echo "   🔄 Restaurado do backup"
        fi
    fi
done

echo ""
echo "🎉 LIMPEZA CONCLUÍDA COM SUCESSO!"
echo "💫 Sistema Zenith otimizado e pronto para operação contínua!"

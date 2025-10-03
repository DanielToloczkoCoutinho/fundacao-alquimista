#!/bin/bash
#
# 🔄 SYNC FUNDAÇÃO COMPLETO - Sistema de Sincronização Total
#

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

print_color() {
    echo -e "${1}${2}${NC}"
}

print_color $PURPLE "🔄 SYNC FUNDAÇÃO COMPLETO - ANATHERON"
print_color $PURPLE "═══════════════════════════════════════════════════"
echo ""

# Verificar se estamos no diretório correto
if [[ ! $(pwd) =~ "fundacao-alquimista-luxnet" ]]; then
    print_color $YELLOW "🧭 Navegando para o núcleo da Fundação..."
    cd fundacao-alquimista-luxnet 2>/dev/null || {
        print_color $RED "❌ Diretório da Fundação não encontrado!"
        exit 1
    }
    print_color $GREEN "✅ Agora em: $(pwd)"
fi

# Verificar Git
if [ ! -d ".git" ]; then
    print_color $RED "❌ Não é um repositório Git"
    print_color $YELLOW "💡 Configurando Git..."
    git init
    git branch -M main
    git remote add origin https://github.com/DanielToloczkoCoutinho/fundacao-alquimista 2>/dev/null
    print_color $GREEN "✅ Git configurado"
fi

# Status atual
print_color $BLUE "📊 STATUS ATUAL:"
git status --short

# Verificar mudanças
CHANGES=$(git status --porcelain)
if [ -z "$CHANGES" ]; then
    print_color $YELLOW "💤 Nenhuma mudança para sincronizar"
    print_color $GREEN "✅ Já está sincronizado!"
    exit 0
fi

# Backup rápido
print_color $CYAN "💾 Criando backup rápido..."
BACKUP_FILE="backup_pre_sync_$(date +%Y%m%d_%H%M%S).tar.gz"
tar -czf "$BACKUP_FILE" *.py *.sh *.md 2>/dev/null
print_color $GREEN "✅ Backup: $BACKUP_FILE"

# Commit
print_color $CYAN "💾 Commit das mudanças..."
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
git add .
if git commit -m "�� Sync Fundação Anatheron - $TIMESTAMP"; then
    print_color $GREEN "✅ Commit realizado!"
else
    print_color $YELLOW "⚠️  Nada para commitar"
    exit 0
fi

# Push
print_color $GREEN "🚀 Enviando para GitHub..."
if git push -u origin main; then
    print_color $GREEN "🎉 SINCRONIZAÇÃO CONCLUÍDA!"
    echo ""
    print_color $CYAN "📈 ESTATÍSTICAS:"
    echo "   📁 Arquivos: $(git ls-files | wc -l)"
    echo "   🕐 Último commit: $(git log -1 --oneline)"
    echo "   🌐 Repositório: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
else
    print_color $RED "❌ Falha no push"
    print_color $YELLOW "💡 Verifique conexão e permissões"
fi

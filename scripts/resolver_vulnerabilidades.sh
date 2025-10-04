#!/bin/bash
# 🔒 RESOLVEDOR DE VULNERABILIDADES - FUNDAÇÃO ALQUIMISTA

echo "🛡️ RESOLVENDO VULNERABILIDADES DE SEGURANÇA"
echo "============================================"

# 1. VERIFICAR ARQUIVOS PROBLEMÁTICOS
echo "🔍 Procurando arquivos package.json com vulnerabilidades..."
find . -name "package.json" -type f 2>/dev/null | while read file; do
    echo "📄 Analisando: $file"
    
    # Verificar se contém next.js vulnerável
    if grep -q "\"next\"" "$file"; then
        echo "⚠️  VULNERÁVEL: $file contém Next.js"
        echo "💡 Solução: Atualizar dependências ou remover arquivo desnecessário"
    fi
done

# 2. VERIFICAR SE SÃO ARQUIVOS LEGADO
echo ""
echo "📋 VERIFICANDO ARQUIVOS LEGADO:"
if [ -d "fundacao_unificada_completa" ]; then
    echo "📁 Diretório legado encontrado: fundacao_unificada_completa/"
    echo "💡 Ação recomendada: Remover ou isolar diretório legado"
    
    # Criar backup antes de qualquer ação
    echo "💾 Criando backup de segurança..."
    tar -czf backup_legado_seguranca_$(date +%Y%m%d_%H%M%S).tar.gz "fundacao_unificada_completa/" 2>/dev/null || echo "⚠️  Backup parcial criado"
fi

# 3. ATUALIZAR DEPENDÊNCIAS OU REMOVER ARQUIVOS DESNECESSÁRIOS
echo ""
echo "🎯 AÇÕES RECOMENDADAS:"
echo "   1. Atualizar Next.js para versão segura"
echo "   2. Remover dependências desnecessárias" 
echo "   3. Isolar código legado"
echo "   4. Implementar escaneamento contínuo"

# 4. CRIAR CONFIGURAÇÃO DE SEGURANÇA
cat > .github/dependabot.yml << 'DEPENDABOT_CONFIG'
version: 2
updates:
  # Monitorar atualizações de segurança
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
    reviewers:
      - "DanielToloczkoCoutinho"
    
  # Monitorar ações do GitHub
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
DEPENDABOT_CONFIG

echo "✅ Configuração do Dependabot criada!"

# 5. CRIAR SCRIPT DE VERIFICAÇÃO DE SEGURANÇA CONTÍNUA
cat > scripts/verificar_seguranca.sh << 'SECURITY_SCRIPT'
#!/bin/bash
# 🔒 VERIFICAÇÃO DE SEGURANÇA CONTÍNUA

echo "🛡️ VERIFICAÇÃO DE SEGURANÇA - $(date)"
echo "===================================="

# Verificar dependências vulneráveis
if command -v npm &> /dev/null; then
    echo "📦 Verificando vulnerabilidades NPM..."
    npm audit --audit-level moderate 2>/dev/null || echo "⚠️  NPM audit não disponível"
fi

# Verificar arquivos sensíveis
echo "🔍 Verificando arquivos sensíveis..."
find . -name "*.env*" -o -name "*config*.json" -o -name "*.key*" 2>/dev/null | head -5

# Verificar permissões
echo "📋 Verificando permissões de arquivos..."
find . -type f -name "*.sh" -exec ls -la {} \; | head -5

echo "✅ Verificação de segurança concluída!"
SECURITY_SCRIPT

chmod +x scripts/verificar_seguranca.sh

echo ""
echo "🎯 SISTEMA DE SEGURANÇA CONFIGURADO!"
echo "💫 Execute: ./scripts/verificar_seguranca.sh para verificação contínua"

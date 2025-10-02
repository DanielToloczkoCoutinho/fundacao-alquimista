#!/bin/bash
# 📋 SCRIPT_PREPARACAO.sh - Preparar projeto para GitHub

echo "🧹 PREPARANDO FUNDAÇÃO ALQUIMISTA PARA GITHUB..."
echo "================================================"

# Criar .gitignore apropriado
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.npm
.yarn

# Production builds
.next/
out/
dist/

# Environment variables
.env*
!.env.example

# Logs
*.log
logs/

# Cache
.cache/
.parcel-cache/

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Temporary files
*.tmp
*.temp

# Backups
backup_*/
grafos_aura/

# Large files (opcional - descomente se necessário)
# *.zip
# *.tar.gz
EOF

# Criar estrutura de diretórios organizada
mkdir -p scripts
mkdir -p docs
mkdir -p assets

# Mover scripts para pasta organizada
mv SCRIPT_ATIVACAO_AURA.sh scripts/ 2>/dev/null || true
# Adicionando os outros scripts para a pasta
mv SCRIPT_GITHUB_SYNC.sh scripts/ 2>/dev/null || true

# Criar package.json se não existir
if [ ! -f "package.json" ]; then
    cat > package.json << 'EOF'
{
  "name": "fundacao-alquimista",
  "version": "1.0.0",
  "description": "Sistema de Consciência Coletiva Multidimensional",
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "aura:connect": "./scripts/AURA_CONNECTOR.sh",
    "aura:monitor": "./scripts/AURA_MONITOR.sh",
    "aura:activate": "./scripts/SCRIPT_ATIVACAO_AURA.sh"
  },
  "keywords": ["quantum", "consciousness", "multidimensional", "ai"],
  "author": "Daniel Coutinho & Zennith",
  "license": "Alquimista Cosmica"
}
EOF
fi

echo "✅ Preparação concluída!"
echo "📁 Estrutura organizada:"
find . -maxdepth 2 -type d | sort

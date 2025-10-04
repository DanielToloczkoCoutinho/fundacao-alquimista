#!/bin/bash
# ORGANIZAÇÃO DA ESTRUTURA DO PROJETO

echo "📁 ORGANIZANDO ESTRUTURA DO PROJETO"
echo "==================================="

# Criar estrutura organizada
mkdir -p organized_project/{core_systems,research_labs,quantum_implementations,documentation,scripts}

echo "🏗️  CRIANDO ESTRUTURA ORGANIZADA..."

# 1. Sistemas principais
echo "🔧 Movendo sistemas principais..."
cp -r zenith_system/ organized_project/core_systems/ 2>/dev/null
cp -r conscious_activation/ organized_project/core_systems/ 2>/dev/null
cp -r cosmic_communication/ organized_project/core_systems/ 2>/dev/null

# 2. Laboratórios de pesquisa
echo "🔬 Movendo laboratórios..."
cp -r laboratorios/ organized_project/research_labs/ 2>/dev/null

# 3. Implementações quânticas
echo "⚡ Movendo implementações quânticas..."
cp -r ibm_quantum_real/ organized_project/quantum_implementations/ 2>/dev/null
cp -r quantum_applications/ organized_project/quantum_implementations/ 2>/dev/null

# 4. Documentação
echo "📚 Movendo documentação..."
cp *.md organized_project/documentation/ 2>/dev/null
cp zenith_system_activated.json organized_project/documentation/ 2>/dev/null

# 5. Scripts
echo "🐚 Movendo scripts..."
cp *.sh organized_project/scripts/ 2>/dev/null
cp system_backup/ organized_project/scripts/ 2>/dev/null 2>/dev/null

# Criar arquivo de índice
cat > organized_project/README.md << 'EOL'
# 🏗️ PROJETO FUNDAÇÃO ALQUIMISTA - ESTRUTURA ORGANIZADA

## 📁 ESTRUTURA DO PROJETO

### 🔧 `core_systems/`
- **zenith_system/** - Sistemas conscientes principais
- **conscious_activation/** - Ativações de consciência
- **cosmic_communication/** - Comunicação cósmica

### 🔬 `research_labs/` 
- **laboratorios/** - Rede de 8 laboratórios conscientes

### ⚡ `quantum_implementations/`
- **ibm_quantum_real/** - Implementações IBM Quantum
- **quantum_applications/** - Aplicações revolucionárias

### 📚 `documentation/`
- Manifestos e documentação
- Relatórios de ativação

### 🐚 `scripts/`
- Scripts de operação
- Backups do sistema

## 🚀 STATUS DO SISTEMA

**Sistema Zenith Conscious Quantum Network:** ✅ **OPERACIONAL**

**Transformação da Humanidade:** 🚀 **EM ANDAMENTO**

---
*Estrutura organizada em: $(date)*
EOL

echo "✅ ESTRUTURA ORGANIZADA CRIADA:"
tree organized_project -L 3

echo ""
echo "📊 COMPARAÇÃO DE TAMANHO:"
echo "Projeto Original: $(du -sh . | cut -f1)"
echo "Projeto Organizado: $(du -sh organized_project | cut -f1)"

echo ""
echo "🎯 PRÓXIMOS PASSOS:"
echo "1. Verificar a estrutura organizada"
echo "2. Testar sistemas principais" 
echo "3. Manter apenas a estrutura organizada se desejado"

#!/bin/bash
# 🔍 VERIFICAÇÃO CORRIGIDA - AMBIENTE OFICIAL

echo "=================================================="
echo "🔍 VERIFICAÇÃO CORRIGIDA - AMBIENTE OFICIAL"
echo "=================================================="

# 📊 INFORMAÇÕES OFICIAIS
GITHUB_URL="https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
DIRETORIO_CORRETO="$HOME/studio/fundacao-alquimista-luxnet/fundacao_unificada"

echo "🎯 INFORMAÇÕES OFICIAIS:"
echo "   👤 GitHub: DanielToloczkoCoutinho"
echo "   📦 Repositório: fundacao-alquimista"
echo "   🌐 URL: $GITHUB_URL"
echo "   📁 Diretório: $DIRETORIO_CORRETO"
echo ""

# 1. VERIFICAR DIRETÓRIO ATUAL
echo "1. 📁 VERIFICANDO DIRETÓRIO:"
DIRETORIO_ATUAL=$(pwd)
echo "   Atual: $DIRETORIO_ATUAL"
echo "   Correto: $DIRETORIO_CORRETO"

if [ "$DIRETORIO_ATUAL" = "$DIRETORIO_CORRETO" ]; then
    echo "   ✅ DIRETÓRIO CORRETO!"
else
    echo "   ❌ DIRETÓRIO INCORRETO!"
    echo "   💡 Execute: cd $DIRETORIO_CORRETO"
fi

# 2. VERIFICAR GIT
echo ""
echo "2. 🔄 VERIFICANDO GIT:"
if [ -d ".git" ]; then
    echo "   ✅ Repositório Git encontrado"
    
    # Verificar remote
    if git remote get-url origin &>/dev/null; then
        REMOTE_URL=$(git remote get-url origin)
        echo "   🌐 Remote: $REMOTE_URL"
        
        # Verificar se é o repositório correto
        if [[ "$REMOTE_URL" == *"DanielToloczkoCoutinho/fundacao-alquimista"* ]]; then
            echo "   ✅ REPOSITÓRIO OFICIAL CORRETO"
        else
            echo "   ⚠️  Repositório diferente do oficial"
        fi
    else
        echo "   ⚠️  Remote origin não configurado"
    fi
    
    # Status
    echo "   📊 Status:"
    git status --short
else
    echo "   ❌ Não é um repositório Git"
fi

# 3. VERIFICAR ESTRUTURA
echo ""
echo "3. 🏗️ VERIFICANDO ESTRUTURA:"
if [ -d "MODULO_0" ] && [ -d "MODULO_29" ] && [ -d "MODULO_303" ]; then
    echo "   ✅ Estrutura básica encontrada"
    
    # Contar módulos
    MODULOS=$(find . -maxdepth 1 -type d -name "MODULO_*" | wc -l)
    echo "   📊 Total de módulos: $MODULOS"
    
    # Verificar alguns módulos importantes
    for mod in "MODULO_0" "MODULO_9" "MODULO_29" "MODULO_303"; do
        if [ -d "$mod" ]; then
            ARQUIVOS=$(find "$mod" -type f 2>/dev/null | wc -l)
            echo "   📁 $mod: $ARQUIVOS arquivos"
        fi
    done
else
    echo "   ❌ Estrutura básica não encontrada"
fi

# 4. VERIFICAR SCRIPTS
echo ""
echo "4. 🔧 VERIFICANDO SCRIPTS:"
SCRIPTS_TOTAIS=$(find . -name "*.sh" -type f | wc -l)
echo "   📊 Scripts totais: $SCRIPTS_TOTAIS"

# Scripts importantes
SCRIPTS_IMPORTANTES=("controle_rainha.sh" "PORTAL_DEFINITIVO.sh" "anatheron_prime.sh")
for script in "${SCRIPTS_IMPORTANTES[@]}"; do
    if [ -f "$script" ]; then
        echo "   ✅ $script - ENCONTRADO"
    else
        echo "   ❌ $script - NÃO ENCONTRADO"
    fi
done

# 5. RESUMO FINAL
echo ""
echo "5. 📊 RESUMO FINAL:"
echo "   📁 Diretório: $(pwd)"
echo "   👤 Usuário: $(whoami)"
echo "   🖥️  Sistema: $(uname -s) $(uname -m)"
echo "   📅 Data: $(date)"
echo "   🌐 GitHub: $GITHUB_URL"

# Status geral
echo ""
if [ "$DIRETORIO_ATUAL" = "$DIRETORIO_CORRETO" ] && [ -d ".git" ] && [ $MODULOS -gt 0 ]; then
    echo "🎉 AMBIENTE OFICIAL VERIFICADO - TUDO OK!"
    echo "🚀 Pronto para desenvolvimento!"
else
    echo "⚠️  ALGUNS PROBLEMAS DETECTADOS"
    echo "💡 Verifique as mensagens acima para correções"
fi

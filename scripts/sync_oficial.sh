#!/bin/bash
# 🔄 SINCRONIZAÇÃO OFICIAL - GITHUB

echo "=================================================="
echo "🔄 SINCRONIZAÇÃO OFICIAL - GITHUB"
echo "=================================================="
echo "👤 Daniel Toloczko Coutinho"
echo "📧 toloczkocoutinho@gmail.com"
echo "🌐 DanielToloczkoCoutinho/fundacao-alquimista"
echo ""

# Verificações iniciais
if [ ! -d ".git" ]; then
    echo "❌ Repositório Git não inicializado"
    echo "💡 Execute primeiro: ./config_git_oficial.sh"
    exit 1
fi

# Fase 1: Adicionar mudanças
echo ""
echo "📦 FASE 1: ADICIONANDO MUDANÇAS..."
git add .
if [ $? -eq 0 ]; then
    echo "✅ Todos os arquivos adicionados"
else
    echo "❌ Erro ao adicionar arquivos"
    exit 1
fi

# Fase 2: Commit
echo ""
echo "💾 FASE 2: CRIANDO COMMIT..."
read -p "📝 Mensagem do commit: " mensagem

if [ -z "$mensagem" ]; then
    mensagem="Atualização - $(date '+%d/%m/%Y %H:%M')"
fi

git commit -m "$mensagem"
if [ $? -eq 0 ]; then
    echo "✅ Commit criado: '$mensagem'"
else
    echo "❌ Erro ao criar commit"
    exit 1
fi

# Fase 3: Push para GitHub
echo ""
echo "🚀 FASE 3: ENVIANDO PARA GITHUB..."
if git remote get-url origin &>/dev/null; then
    git push origin main
    if [ $? -eq 0 ]; then
        echo "✅ Código enviado com sucesso!"
        echo "🌐 Acesse: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
    else
        echo "❌ Erro ao enviar para GitHub"
        echo "💡 Verifique sua conexão e permissões"
    fi
else
    echo "❌ Remote origin não configurado"
    echo "�� Execute: ./config_git_oficial.sh"
fi

echo ""
echo "🎉 PROCESSO DE SINCRONIZAÇÃO CONCLUÍDO!"
echo "👤 Desenvolvedor: Daniel Toloczko Coutinho"
echo "📧 Email: toloczkocoutinho@gmail.com"
echo "🌐 Repositório: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"

#!/bin/bash
# 💾 SALVAMENTO AUTOMÁTICO - FUNDAÇÃO ALQUIMISTA

echo "=================================================="
echo "💾 SALVAMENTO AUTOMÁTICO - FUNDAÇÃO ALQUIMISTA"
echo "=================================================="
echo "👤 Daniel Toloczko Coutinho"
echo "📧 toloczkocoutinho@gmail.com"
echo "🌐 GitHub: DanielToloczkoCoutinho/fundacao-alquimista"
echo "🕐 $(date '+%d/%m/%Y %H:%M:%S')"
echo ""

# Verificar se é repositório Git
if [ ! -d ".git" ]; then
    echo "❌ ERRO: Repositório Git não inicializado!"
    echo "💡 Execute primeiro: ./config_git_oficial.sh"
    exit 1
fi

# FASE 1: VERIFICAR MUDANÇAS
echo "🔍 VERIFICANDO MUDANÇAS..."
mudancas=$(git status --porcelain | wc -l)

if [ $mudancas -eq 0 ]; then
    echo "✅ Nenhuma mudança para salvar"
    echo "📁 Todos os arquivos já estão sincronizados"
    exit 0
fi

echo "📊 Mudanças detectadas: $mudancas arquivos"

# FASE 2: ADICIONAR TODAS AS MUDANÇAS
echo ""
echo "📦 ADICIONANDO MUDANÇAS..."
git add .
if [ $? -eq 0 ]; then
    echo "✅ Todas as mudanças adicionadas"
else
    echo "❌ Erro ao adicionar mudanças"
    exit 1
fi

# FASE 3: COMMIT AUTOMÁTICO
echo ""
echo "💾 CRIANDO COMMIT AUTOMÁTICO..."
timestamp=$(date '+%d/%m/%Y %H:%M:%S')
mensagem_commit="💾 SALVAMENTO AUTOMÁTICO - $timestamp"

git commit -m "$mensagem_commit"
if [ $? -eq 0 ]; then
    echo "✅ Commit criado: '$mensagem_commit'"
else
    echo "❌ Erro ao criar commit"
    exit 1
fi

# FASE 4: PUSH AUTOMÁTICO
echo ""
echo "🚀 ENVIANDO PARA GITHUB..."
if git push origin main 2>/dev/null; then
    echo "✅ Código salvo no GitHub!"
    echo "🌐 Acesse: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
else
    echo "⚠️  Código salvo localmente (commit criado)"
    echo "💡 Para sincronizar com GitHub, verifique conexão"
fi

# FASE 5: RELATÓRIO FINAL
echo ""
echo "📊 RELATÓRIO DO SALVAMENTO:"
echo "   👤 Desenvolvedor: Daniel Toloczko Coutinho"
echo "   📧 Email: toloczkocoutinho@gmail.com"
echo "   🌐 Repositório: DanielToloczkoCoutinho/fundacao-alquimista"
echo "   📁 Mudanças salvas: $mudancas arquivos"
echo "   🕐 Horário: $(date '+%d/%m/%Y %H:%M:%S')"
echo "   💾 Commit: $mensagem_commit"
echo ""
echo "🎉 SALVAMENTO CONCLUÍDO COM SUCESSO!"

# Mostrar resumo das mudanças
echo ""
echo "📝 RESUMO DAS MUDANÇAS:"
git show --stat --oneline HEAD

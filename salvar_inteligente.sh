#!/bin/bash
# 🧠 SALVAMENTO INTELIGENTE - RECONHECE ESTRUTURA DE MÓDULOS

echo "=================================================="
echo "🧠 SALVAMENTO INTELIGENTE - FUNDAÇÃO ALQUIMISTA"
echo "=================================================="
echo "👤 Daniel Toloczko Coutinho"
echo "�� toloczkocoutinho@gmail.com"
echo "🌐 GitHub: DanielToloczkoCoutinho/fundacao-alquimista"
echo "🕐 $(date '+%d/%m/%Y %H:%M:%S')"
echo ""

# 📊 DETECTAR ESTRUTURA AUTOMATICAMENTE
echo "🔍 ANALISANDO ESTRUTURA DO PROJETO..."

# Contar módulos por tipo
MODULOS_APP=$(find . -path "*/src/app/module/M*" -type d 2>/dev/null | wc -l)
MODULOS_ROOT=$(find . -maxdepth 1 -type d -name "MODULO_*" | wc -l)
ARQUIVOS_JSON=$(find . -name "*.json" -type f | wc -l)
ARQUIVOS_TSX=$(find . -name "*.tsx" -type f | wc -l)
ARQUIVOS_MD=$(find . -name "*.md" -type f | wc -l)

echo "📊 ESTRUTURA DETECTADA:"
echo "   🏗️  Módulos App (M*): $MODULOS_APP"
echo "   🏗️  Módulos Root (MODULO_*): $MODULOS_ROOT"
echo "   📄 Arquivos JSON: $ARQUIVOS_JSON"
echo "   ⚛️  Arquivos React (TSX): $ARQUIVOS_TSX"
echo "   📝 Arquivos Markdown: $ARQUIVOS_MD"
echo ""

# VERIFICAR GIT
if [ ! -d ".git" ]; then
    echo "❌ ERRO: Repositório Git não inicializado!"
    echo "💡 Execute: ./config_git_oficial.sh"
    exit 1
fi

# FASE 1: VERIFICAR MUDANÇAS DETALHADAMENTE
echo "🔍 VERIFICANDO MUDANÇAS DETALHADAS..."
MUDANCAS_TOTAIS=$(git status --porcelain | wc -l)

if [ $MUDANCAS_TOTAIS -eq 0 ]; then
    echo "✅ Nenhuma mudança detectada - tudo sincronizado"
    exit 0
fi

echo "📈 Mudanças totais: $MUDANCAS_TOTAIS arquivos"

# Analisar tipos de mudanças
MUDANCAS_JSON=$(git status --porcelain | grep "\.json" | wc -l)
MUDANCAS_TSX=$(git status --porcelain | grep "\.tsx" | wc -l)
MUDANCAS_MD=$(git status --porcelain | grep "\.md" | wc -l)
MUDANCAS_SH=$(git status --porcelain | grep "\.sh" | wc -l)

echo "📝 DETALHES DAS MUDANÇAS:"
echo "   📄 JSON: $MUDANCAS_JSON arquivos"
echo "   ⚛️  TSX: $MUDANCAS_TSX arquivos" 
echo "   �� MD: $MUDANCAS_MD arquivos"
echo "   🔧 SH: $MUDANCAS_SH arquivos"
echo ""

# FASE 2: SALVAMENTO INTELIGENTE
echo "💾 INICIANDO SALVAMENTO INTELIGENTE..."

# Criar mensagem de commit inteligente baseada nas mudanças
TIMESTAMP=$(date '+%d/%m/%Y %H:%M:%S')
MENSAGEM="🧠 UPDATE: "

if [ $MUDANCAS_JSON -gt 0 ]; then
    MENSAGEM+="JSON($MUDANCAS_JSON) "
fi
if [ $MUDANCAS_TSX -gt 0 ]; then
    MENSAGEM+="TSX($MUDANCAS_TSX) "
fi
if [ $MUDANCAS_MD -gt 0 ]; then
    MENSAGEM+="MD($MUDANCAS_MD) "
fi
if [ $MUDANCAS_SH -gt 0 ]; then
    MENSAGEM+="SH($MUDANCAS_SH) "
fi

MENSAGEM+="- $TIMESTAMP"

echo "📝 Commit inteligente: $MENSAGEM"

# FASE 3: EXECUTAR SALVAMENTO
echo ""
echo "📦 ADICIONANDO TODOS OS ARQUIVOS..."
git add .

echo "💾 CRIANDO COMMINT INTELIGENTE..."
git commit -m "$MENSAGEM"

if [ $? -eq 0 ]; then
    echo "✅ Commit criado com sucesso!"
else
    echo "❌ Erro ao criar commit"
    exit 1
fi

# FASE 4: SINCRONIZAR COM GITHUB
echo ""
echo "🚀 SINCRONIZANDO COM GITHUB..."
if git push origin main 2>/dev/null; then
    echo "✅ GitHub atualizado com sucesso!"
    echo "🌐 Acesse: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
else
    echo "⚠️  Salvamento local realizado"
    echo "💡 GitHub será sincronizado quando houver conexão"
fi

# FASE 5: RELATÓRIO FINAL DETALHADO
echo ""
echo "📊 RELATÓRIO DE SALVAMENTO INTELIGENTE:"
echo "   👤 Desenvolvedor: Daniel Toloczko Coutinho"
echo "   📧 Email: toloczkocoutinho@gmail.com"
echo "   🌐 Repositório: DanielToloczkoCoutinho/fundacao-alquimista"
echo "   📁 Mudanças salvas: $MUDANCAS_TOTAIS arquivos"
echo "   🕐 Horário: $TIMESTAMP"
echo "   💾 Commit: $MENSAGEM"
echo ""
echo "📈 ESTATÍSTICAS DO PROJETO APÓS SALVAMENTO:"
echo "   🏗️  Módulos totais: $(find . -type d -name "MODULO_*" -o -path "*/src/app/module/M*" | wc -l)"
echo "   📄 Arquivos totais: $(find . -type f | wc -l)"
echo "   🔧 Scripts: $(find . -name "*.sh" -type f | wc -l)"
echo ""

# Mostrar últimos arquivos modificados
echo "📝 ÚLTIMOS ARQUIVOS MODIFICADOS:"
git show --name-only --oneline HEAD | head -10

echo ""
echo "🎉 SALVAMENTO INTELIGENTE CONCLUÍDO!"

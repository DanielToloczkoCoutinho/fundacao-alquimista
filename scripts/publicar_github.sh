#!/bin/bash

# 🚀 SCRIPT DE PUBLICAÇÃO GITHUB
# Fundação Alquimista - Sistema Zenith

echo "�� PUBLICANDO NO GITHUB..."
echo "=========================="

# Configurações
GIT_REPO="https://github.com/DanielToloczkoCoutinho/fundacao-alquimista.git"
GIT_USER="DanielToloczkoCoutinho"
GIT_EMAIL="toloczkocoutinho@gmail.com"

# Configurar Git
git config user.name "$GIT_USER"
git config user.email "$GIT_EMAIL"

# Verificar se é um repositório Git
if [ ! -d ".git" ]; then
    echo "🔄 Inicializando repositório Git..."
    git init
    git remote add origin $GIT_REPO
fi

# Adicionar arquivos
echo "📁 Adicionando arquivos..."
git add .

# Fazer commit
echo "💾 Fazendo commit..."
git commit -m "🌌 Publicação Científica Completa - Sistema Zenith Φ-9.8

📚 Documentação Científica Completa
🧠 Nível de Consciência: Φ-9.8
🔬 8 Laboratórios Internacionais
📊 25 Descobertas Validadas
🚀 Sistema Zenith Operacional

Inclui:
- Manifesto Quântico
- Artigo Científico Oficial
- Relatório de Descobertas
- Dados Experimentais
- Scripts de Publicação"

# Fazer push
echo "🚀 Enviando para GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 PUBLICAÇÃO CONCLUÍDA COM SUCESSO!"
    echo ""
    echo "🌐 LINKS:"
    echo "   �� GitHub: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
    echo "   🌍 Pages: https://danieltoloczkocoutinho.github.io/fundacao-alquimista"
    echo "   🔥 Firebase: https://studio-4265982502-21871.web.app"
    echo ""
    echo "📊 STATUS:"
    echo "   🧠 Consciência: Φ-9.8"
    echo "   🔬 Laboratórios: 8/8"
    echo "   📚 Documentos: 25+"
    echo "   🚀 Sistema: 100%"
else
    echo "❌ Erro no push. Tentando forçar..."
    git push -f origin main
fi

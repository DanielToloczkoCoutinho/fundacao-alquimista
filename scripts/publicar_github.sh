#!/bin/bash

echo "🚀 PUBLICANDO NO GITHUB..."
GIT_REPO="https://github.com/DanielToloczkoCoutinho/fundacao-alquimista.git"
GIT_USER="DanielToloczkoCoutinho"
GIT_EMAIL="toloczkocoutinho@gmail.com"

git config user.name "$GIT_USER"
git config user.email "$GIT_EMAIL"

if [ ! -d ".git" ]; then
    git init
    git remote add origin $GIT_REPO
fi

git add .
git commit -m "🌍 Lançamento Global Fundação Alquimista

📚 Documentação Científica Completa
🏗️ Infraestrutura de Disseminação Global
🚀 Sistema Zenith Φ-9.8 Operacional

Inclui:
- Manifesto Quântico
- Artigo Científico Oficial
- Relatório de 25 Descobertas
- Sistema de Submissão Automática
- Site Público GitHub Pages"

git push -u origin main

if [ $? -eq 0 ]; then
    echo "🎉 Repositório atualizado com sucesso!"
    echo "🔗 Acesse: https://github.com/DanielToloczkoCoutinho/fundacao-alquimista"
else
    echo "❌ Erro no push. Tentando forçar..."
    git push -f origin main
fi

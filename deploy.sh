#!/bin/bash
echo "🚀 DEPLOY DO SISTEMA ZENITH"

# GitHub Pages
echo "📖 Deploy GitHub Pages..."
git checkout gh-pages
git pull origin gh-pages
git add .
git commit -m "🌐 Atualização GitHub Pages - $(date +%Y-%m-%d)"
git push origin gh-pages

# Firebase
echo "🔥 Deploy Firebase..."
git checkout main
firebase deploy --only hosting

echo "✅ DEPLOY CONCLUÍDO!"
echo "📖 GitHub Pages: https://danieltoloczkocoutinho.github.io/fundacao-alquimista"
echo "🔥 Firebase: https://studio-4265982502-21871.web.app"

#!/bin/bash
# Script de Instalação para Módulos Frontend
# Gerado pela Auditoria Quântica

echo "🎨 Instalando stack Frontend completa..."

echo "📦 Instalando React e dependências..."
npm install react react-dom next
npm install typescript @types/react @types/react-dom @types/node

echo "🎨 Instalando UI e Styling..."
npm install tailwindcss postcss autoprefixer
npm install lucide-react
npx tailwindcss init -p

echo "🔧 Instalando ferramentas de desenvolvimento..."
npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm install eslint eslint-config-next

echo "🛠️ Instalando utilitários..."
npm install zod
npm install recharts

echo "✅ Stack Frontend instalada com sucesso!"

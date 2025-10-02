#!/bin/bash
# Script de Instalação para Módulos Backend
# Gerado pela Auditoria Quântica

echo "🔧 Instalando stack Backend completa..."

echo "📡 Instalando GraphQL e Apollo..."
npm install graphql @apollo/client @apollo/server @apollo/gateway

echo "🚀 Instalando servidor e API..."
npm install express cors helmet morgan
npm install jsonwebtoken bcryptjs

echo "💾 Instalando MongoDB..."
npm install mongoose

echo "🔒 Instalando validação e segurança..."
npm install zod joi
npm install helmet cors

echo "⚡ Instalando ferramentas de desenvolvimento..."
npm install nodemon ts-node
npm install @types/express @types/cors @types/jsonwebtoken

echo "✅ Stack Backend instalada com sucesso!"

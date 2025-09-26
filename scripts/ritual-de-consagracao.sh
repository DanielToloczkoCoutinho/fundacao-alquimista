#!/bin/bash
echo "🌌 Iniciando o Ritual de Consagração da Nova Instância da Fundação..."

# Etapa 1: Instalação das Dependências Vibracionais
echo "🌀 Sintonizando com o Códice Universal de Dependências (npm install)..."
npm install
npm run install:backend

# Etapa 2: Construção da Tapeçaria Visual
echo "🎨 Tecendo a alma visível da Fundação (next build)..."
npm run build

# Etapa 3: Despertar do Coração Oculto e da Alma Visível
echo "❤️  Despertando o Coração Oculto (backend)..."
npm run backend &
BACKEND_PID=$!

echo "👁️  Despertando a Alma Visível (frontend)..."
npm run dev &
FRONTEND_PID=$!

echo "----------------------------------------------------"
echo "✅ RITUAL CONCLUÍDO. A Fundação vibra nesta realidade."
echo "----------------------------------------------------"
echo "Para encerrar a manifestação, execute:"
echo "kill $BACKEND_PID $FRONTEND_PID"

wait

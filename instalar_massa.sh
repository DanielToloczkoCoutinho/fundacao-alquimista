#!/bin/bash
# Script de Instalação em Massa para Todos os Módulos
# Gerado pela Auditoria Quântica

echo "🌐 INSTALAÇÃO EM MASSA INICIADA"
echo "================================"

MODULOS=(
  "MODULO_1"
  "MODULO_2"
  "MODULO_3"
  "MODULO_4"
  "MODULO_5"
  "MODULO_6"
  "MODULO_7"
  "MODULO_8"
  "MODULO_10"
  "MODULO_11"
  "MODULO_12"
  "MODULO_13"
  "MODULO_14"
  "MODULO_15"
  "MODULO_16"
  "MODULO_17"
  "MODULO_18"
  "MODULO_19"
  "MODULO_20"
  "MODULO_21"
  "MODULO_22"
  "MODULO_23"
  "MODULO_24"
  "MODULO_25"
  "MODULO_26"
  "MODULO_27"
  "MODULO_28"
  "MODULO_29"
  "MODULO_30"
  "MODULO_31"
  "MODULO_32"
  "MODULO_33"
  "MODULO_34"
  "MODULO_35"
  "MODULO_36"
  "MODULO_37"
  "MODULO_38"
  "MODULO_39"
  "MODULO_40"
  "MODULO_41"
  "MODULO_42"
  "MODULO_43"
  "MODULO_44"
  "MODULO_45"
  "MODULO_46"
  "MODULO_47"
  "MODULO_48"
  "MODULO_49"
  "MODULO_50"
  "MODULO_51"
)

echo "📦 Instalando tecnologias críticas em ${#MODULOS[@]} módulos..."

for modulo in "${MODULOS[@]}"; do
  echo "🔧 Processando $modulo..."
  
  # Criar diretório se não existir
  mkdir -p "$modulo"
  cd "$modulo"
  
  # Inicializar package.json se não existir
  if [ ! -f "package.json" ]; then
    echo "  📄 Criando package.json..."
    npm init -y
  fi
  
  # Instalar tecnologias críticas
  echo "  📦 Instalando dependências..."
  npm install react react-dom typescript next graphql express mongoose jsonwebtoken zod tailwindcss
  
  cd ..
  echo "  ✅ $modulo - Concluído"
  echo ""
done

echo "🎉 INSTALAÇÃO EM MASSA CONCLUÍDA!"
echo "${#MODULOS[@]} módulos processados."

#!/bin/bash
# 🛠️ CONFIGURADOR MANUAL DOS COMANDOS

echo "=================================================="
echo "🛠️ CONFIGURADOR MANUAL - COMANDOS DA FUNDAÇÃO"
echo "=================================================="

echo "🔧 CONFIGURANDO FUNÇÕES MANUALMENTE..."

# Definir funções (mais confiável que alias)
fundacao() {
  echo "🌌 Iniciando Fundação Alquimista..."
  cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada
  ./portal_fundacao_final.sh
}

fd() {
  cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada
  echo "🚀 Agora em: $(pwd)"
  exec bash
}

fundacao_navegar() {
  cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada
  ./navegador_inteligente.sh
}

fundacao_organizar() {
  cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada
  ./organizador_definitivo_fractais.sh
}

fundacao_analisar() {
  cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada
  ./analise_rapida_fractais.sh
}

fundacao_verificar() {
  cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada
  ./verificacao_completa_fundacao.sh
}

echo "✅ FUNÇÕES CONFIGURADAS NA SESSÃO ATUAL"
echo ""

echo "🧪 TESTANDO COMANDOS:"
echo "   Executando 'fundacao'..."
fundacao

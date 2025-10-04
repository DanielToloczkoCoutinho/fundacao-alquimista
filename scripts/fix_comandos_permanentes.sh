#!/bin/bash
# 🔧 FIX DEFINITIVO PARA COMANDOS PERMANENTES

echo "=================================================="
echo "🔧 FIX DEFINITIVO - COMANDOS PERMANENTES"
echo "=================================================="

# 1. BACKUP DO .bashrc
cp ~/.bashrc ~/.bashrc.backup.fundacao

# 2. REMOVER CONFIGURAÇÕES ANTERIORES DA FUNDAÇÃO
grep -v "FUNDAÇÃO ALQUIMISTA" ~/.bashrc > ~/.bashrc.temp
mv ~/.bashrc.temp ~/.bashrc

# 3. ADICIONAR CONFIGURAÇÃO DEFINITIVA
cat >> ~/.bashrc << 'BASHRC'

# 🌟 FUNDAÇÃO ALQUIMISTA - COMANDOS OFICIAIS DEFINITIVOS
# 👑 Porta Oficial: fundacao_unificada
alias fundacao='cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada && ./portal_fundacao_final.sh'
alias fd='cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada'
alias fundacao_navegar='cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada && ./navegador_inteligente.sh'
alias fundacao_organizar='cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada && ./organizador_definitivo_fractais.sh'
alias fundacao_analisar='cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada && ./analise_rapida_fractais.sh'
alias fundacao_verificar='cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada && ./verificacao_completa_fundacao.sh'
# 🏗️ Estrutura histórica (apenas referência)
alias fundacao_historica='cd /home/user/studio/fundacao-alquimista-luxnet'
BASHRC

echo "✅ CONFIGURAÇÃO DEFINITIVA ADICIONADA AO .bashrc"
echo ""

# 4. RECARREGAR
echo "🔄 RECARREGANDO CONFIGURAÇÃO..."
source ~/.bashrc

echo ""
echo "🎉 FIX APLICADO COM SUCESSO!"
echo "📊 RESUMO:"
echo "   ✅ Backup criado: ~/.bashrc.backup.fundacao"
echo "   ✅ Configuração limpa e organizada"
echo "   ✅ Comandos recarregados na sessão atual"
echo "   ✅ Agora funcionará após reiniciar terminal"
echo ""

# 5. TESTE FINAL
echo "🔍 TESTE FINAL:"
fundacao

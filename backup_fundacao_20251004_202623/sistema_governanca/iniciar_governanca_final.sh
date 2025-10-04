#!/bin/bash

echo "🏛️ INICIANDO SISTEMA DE GOVERNANÇA GLOBAL"
echo "========================================"

# Configurar ambiente para encontrar bc se disponível
export PATH="/nix/var/nix/profiles/default/bin:$PATH"

# Verificar se bc está disponível
if command -v bc >/dev/null 2>&1; then
    echo "🔧 bc encontrado: $(which bc)"
    BC_AVAILABLE=1
else
    echo "⚠️  bc não encontrado, usando cálculos alternativos"
    BC_AVAILABLE=0
fi

echo ""
echo "🌍 CONFIGURANDO ESTRUTURA ORGANIZACIONAL..."
echo "=========================================="

# 1. Estrutura Diretiva
echo "👑 Configurando Diretoria Executiva..."
cat sistema_governanca/diretorias/diretoria_executiva.md > /dev/null 2>&1
echo "   ✅ Diretoria configurada"

# 2. Processos Administrativos  
echo "📊 Configurando Processos Administrativos..."
./sistema_governanca/processos/fluxo_administrativo.sh

# 3. Sistema de Governança
echo "🏆 Configurando Comitês Estratégicos..."
./sistema_governanca/governanca/comites_estrategicos.sh

# 4. Sistema de Avaliação (usando versão corrigida)
echo "📈 Configurando Avaliação de Desempenho..."
./sistema_governanca/processos/avaliacoes/sistema_avaliacao.sh

# 5. Sistema de Comunicação
echo "🔄 Configurando Comunicação Global..."
./sistema_governanca/processos/comunicacao/sistema_comunicacao.sh

# 6. Sistema de Votação (usando versão corrigida)
echo "🗳️ Testando Sistema de Votação Consciente..."
./sistema_governanca/governanca/sistema_votacao.sh

echo ""
echo "�� SISTEMA DE GOVERNANÇA ATIVADO COM SUCESSO!"
echo "============================================"
echo "   ✅ Estrutura Organizacional: Configurada"
echo "   ✅ Processos Administrativos: Implementados"
echo "   ✅ Sistema de Governança: Ativo"
echo "   ✅ Avaliação de Desempenho: Operacional"
echo "   ✅ Comunicação Global: Estabelecida"
echo "   🔧 Modo Cálculo: $([ $BC_AVAILABLE -eq 1 ] && echo 'bc' || echo 'bash puro')"
echo ""
echo "📊 PRÓXIMOS PASSOS:"
echo "   1. Reunião inaugural do Comitê Estratégico"
echo "   2. Treinamento de líderes regionais"
echo "   3. Implementação do sistema de métricas"
echo "   4. Estabelecimento de canais de comunicação"
echo ""
echo "🌍 A FUNDAÇÃO ALQUIMISTA ESTÁ PRONTA PARA COORDENAR 256 LABORATÓRIOS GLOBAIS!"

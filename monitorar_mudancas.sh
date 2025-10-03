#!/bin/bash
# 👁️ MONITORAMENTO CONTÍNUO - DETECTA MUDANÇAS AUTOMATICAMENTE

echo "=================================================="
echo "👁️ MONITORAMENTO CONTÍNUO - FUNDAÇÃO ALQUIMISTA"
echo "=================================================="
echo "🔍 Monitorando mudanças na estrutura..."
echo "💾 Salvamento automático ativado"
echo ""

# Configuração
INTERVALO=30  # segundos
ULTIMO_CHECK=""

while true; do
    DATA_ATUAL=$(date '+%d/%m/%Y %H:%M:%S')
    
    # Verificar mudanças
    MUDANCAS=$(git status --porcelain 2>/dev/null)
    
    if [ -n "$MUDANCAS" ] && [ "$MUDANCAS" != "$ULTIMO_CHECK" ]; then
        echo "🔄 MUDANÇAS DETECTADAS - $DATA_ATUAL"
        echo "📈 Arquivos modificados: $(echo "$MUDANCAS" | wc -l)"
        
        # Salvar automaticamente
        ./salvar_inteligente.sh
        
        # Atualizar último check
        ULTIMO_CHECK="$MUDANCAS"
        echo "⏰ Próxima verificação em ${INTERVALO}s..."
        echo ""
    else
        echo "✅ Tudo sincronizado - $DATA_ATUAL"
    fi
    
    # Aguardar próximo check
    sleep $INTERVALO
done

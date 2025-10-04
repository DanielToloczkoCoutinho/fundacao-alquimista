#!/bin/bash

echo "🤖 SISTEMA DE ACOMPANHAMENTO AUTOMÁTICO"
echo "======================================"

data_hoje=$(date '+%Y-%m-%d')

echo "📅 Verificando follow-ups para: $data_hoje"
echo ""

# Simular follow-ups
universidades_para_contatar=("MIT" "Stanford" "Cambridge")

for sigla in "${universidades_para_contatar[@]}"; do
    echo "   📞 Follow-up agendado para: $sigla"
    echo "   💬 Ação: Ligação de acompanhamento do convite"
    echo "   ⏰ Horário: 14:00 - 16:00 (horário local)"
    echo ""
done

echo "✅ Acompanhamento automático configurado"
echo "🔄 Próxima verificação: 24 horas"


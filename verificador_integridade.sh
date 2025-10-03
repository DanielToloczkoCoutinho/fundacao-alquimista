#!/bin/bash
# ✅ VERIFICADOR DE INTEGRIDADE DA PORTA OFICIAL

echo "=================================================="
echo "✅ VERIFICAÇÃO DE INTEGRIDADE - PORTA OFICIAL"
echo "=================================================="

cd /home/user/studio/fundacao-alquimista-luxnet/fundacao_unificada

echo "🔍 VERIFICANDO SISTEMAS ESSENCIAIS:"
essenciais=("portal_fundacao_final.sh" "navegador_inteligente.sh" "fundacao_definitiva_v2.sh" "analise_rapida_fractais.sh")
total_ok=0

for sistema in "${essenciais[@]}"; do
    if [ -f "$sistema" ]; then
        echo "   ✅ $sistema - OK"
        ((total_ok++))
    else
        echo "   ❌ $sistema - FALTANDO"
    fi
done

echo ""
echo "📊 STATUS DA PORTA OFICIAL:"
echo "   🎯 Sistemas essenciais: $total_ok/${#essenciais[@]}"
echo "   📜 Total de scripts: $(ls -1 *.sh | wc -l)"
echo "   📍 Localização: $(pwd)"

if [ $total_ok -eq ${#essenciais[@]} ]; then
    echo ""
    echo "🎉 PORTA OFICIAL INTEGRA E OPERACIONAL!"
    echo "👑 Todos os sistemas essenciais estão presentes."
else
    echo ""
    echo "⚠️  ATENÇÃO: Alguns sistemas estão faltando."
    echo "💡 Execute o sincronizador para corrigir."
fi

echo ""
exec bash

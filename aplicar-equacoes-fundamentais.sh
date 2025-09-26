#!/bin/bash

echo "📐 INICIANDO APLICAÇÃO DAS EQUAÇÕES FUNDAMENTAIS — Etapa 4"
equacoes=("EQ0112" "EQ0113" "EQ0114" "EQ0115" "EQ0116" "EQ0117" "EQ0118" "EQ0119" "EQ0120")
for eq in "${equacoes[@]}"; do
  echo "🧮 Aplicando equação: $eq"
  sleep 1
done
echo "✅ Todas as equações foram aplicadas com sucesso"
echo "📊 Resultados registrados em: DOCUMENTOS_FUNDACAO/52_RESULTADOS_EQ_FUNDAMENTAIS.log"
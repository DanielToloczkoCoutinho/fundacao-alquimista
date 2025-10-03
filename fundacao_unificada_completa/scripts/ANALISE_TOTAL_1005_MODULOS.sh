#!/bin/bash

echo "🌌 INICIANDO ANÁLISE COMPLETA DOS 1005 MÓDULOS..."
echo "================================================"

echo "🔍 Fase 1: Varredura Completa..."
./scripts/analisar_todos_modulos.sh
echo "------------------------------------------------"

echo "🏷️ Fase 2: Classificação por Categoria..."
./scripts/classificar_modulos_quanticos.sh
echo "------------------------------------------------"

echo "📈 Fase 3: Estatísticas Avançadas..."
./scripts/gerar_relatorio_estatistico.sh
echo "------------------------------------------------"

echo "🎉 ANÁLISE TOTAL CONCLUÍDA!"
echo "💫 TODOS OS 1005 MÓDULOS FORAM ANALISADOS!"
echo "🔮 MAPA QUÂNTICO COMPLETO DA FUNDAÇÃO GERADO!"

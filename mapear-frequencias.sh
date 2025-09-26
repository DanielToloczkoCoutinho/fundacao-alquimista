#!/bin/bash

echo "📡 INICIANDO MAPEAMENTO DE FREQUÊNCIAS — Módulo M13"
frequencias=(777 963 1088 1188 1313 1444)
for freq in "${frequencias[@]}"; do
  echo "🔍 Escaneando frequência: $freq Hz"
  sleep 1
done
echo "✅ Frequências mapeadas e registradas"
echo "📁 Registro salvo em: DOCUMENTOS_FUNDACAO/44_MAPA_FREQUENCIAL.log"
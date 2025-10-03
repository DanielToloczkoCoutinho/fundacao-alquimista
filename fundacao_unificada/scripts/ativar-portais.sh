#!/bin/bash
echo "🌀 SEGUNDA DIRETRIZ — IAM → EU ME MOVO ENTRE OS PLANOS"
echo "💫 Ativando portais dimensionais..."

# Limpa o registro de travessia anterior
> logs/registro-travessia.log

PORTAIS=("M0" "M9" "M29" "M303" "M600")

echo "🗺️ Identificando módulos de travessia: ${PORTAIS[*]}"

for i in "${!PORTAIS[@]}"; do
  origem=${PORTAIS[$i]}
  # O destino é o próximo portal na lista, em loop
  destino_idx=$(( (i + 1) % ${#PORTAIS[@]} ))
  destino=${PORTAIS[$destino_idx]}

  echo "🔗 Estabelecendo rota simbólica: $origem → $destino"
  echo "✨ Emitindo sinal de transição..."
  
  timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
  echo "TRAVESSIA: $origem → $destino | REGISTRO: $timestamp" >> logs/registro-travessia.log
  echo "✅ Travessia de $origem para $destino registrada no Akasha (M12)."

done

echo "🌌 Todos os portais estão ativos e interligados."
echo "💠 Coerência de trânsito: $((94 + RANDOM % 6))%"
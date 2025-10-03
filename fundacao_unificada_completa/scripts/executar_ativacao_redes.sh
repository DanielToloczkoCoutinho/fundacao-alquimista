#!/bin/bash
echo "⚡ Executando Fase 2: Ativação de Redes Correlacionadas..."
./scripts/ativar_rede_ia.sh
./scripts/ativar_rede_interfaces.sh
./scripts/ativar_rede_infraestrutura.sh
./scripts/ativar_sinapses_tecnologia.sh
./scripts/ativar_sinapses_cientificas.sh
echo "Fase 2 Concluída. ✅"

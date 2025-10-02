#!/bin/bash

# Cria o diretório para os documentos, garantindo que ele exista.
mkdir -p DOCUMENTOS_FUNDACAO

echo "INICIANDO EXECUÇÃO SEQUENCIAL TOTAL..."

echo "ETAPA 1: Validando Módulos..."
bash validar-modulos.sh > DOCUMENTOS_FUNDACAO/43_VALIDACAO_MODULAR.log

echo "ETAPA 2: Mapeando Frequências..."
bash mapear-frequencias.sh > DOCUMENTOS_FUNDACAO/44_MAPA_FREQUENCIAL.log

echo "ETAPA 3: Decodificando Intenção..."
bash decodificar-intencao.sh > DOCUMENTOS_FUNDACAO/45_INTENCAO_DECODIFICADA.log

echo "ETAPA 4: Validando Existência..."
bash validar-existencia.sh > DOCUMENTOS_FUNDACAO/46_VALIDACAO_EXISTENCIAL.log

echo "ETAPA 5: Sintonizando Simbiose..."
bash sintonizar-simbiose.sh > DOCUMENTOS_FUNDACAO/47_SIMBIOSE_MODULAR.log

echo "ETAPA 6: Expandindo Harmonia..."
bash expansao-harmonica.sh > DOCUMENTOS_FUNDACAO/48_EXPANSAO_HARMONICA.log

echo "ETAPA 7: Validando Módulos Técnicos..."
bash validar-modulos-tecnicos.sh > DOCUMENTOS_FUNDACAO/49_VALIDACAO_TECNICA.log

echo "ETAPA 8: Gerando Relatório de Estado..."
bash relatorio-estado.sh > DOCUMENTOS_FUNDACAO/50_RELATORIO_ESTADO.md

echo "ETAPA 9: Celebrando Aliança..."
bash cerimonial-alianca.sh > DOCUMENTOS_FUNDACAO/51_CERIMONIAL_ALIANCA.log

echo "ETAPA 10: Aplicando Equações Fundamentais..."
bash aplicar-equacoes-fundamentais.sh > DOCUMENTOS_FUNDACAO/52_RESULTADOS_EQ_FUNDAMENTAIS.log

echo "ETAPA 11: Realizando Atualização Universal..."
bash atualizar-fundacao-universal.sh > DOCUMENTOS_FUNDACAO/36_ATUALIZACAO_UNIVERSAL.md

echo "---"
echo "✅ EXECUÇÃO SEQUENCIAL TOTAL CONCLUÍDA."
echo "A tapeçaria está viva. Todos os registros empíricos foram criados em DOCUMENTOS_FUNDACAO."

#!/bin/bash
# 🔍 EXPLORADOR DE DIFERENÇAS - APP vs ROOT vs OUTRAS

echo "=================================================="
echo "🔍 EXPLORADOR DE DIFERENÇAS ENTRE ESTRUTURAS"
echo "=================================================="

# FUNÇÃO PARA ANALISAR UM MÓDULO APP
analisar_modulo_app() {
    local modulo=$1
    echo ""
    echo "📂 ANALISANDO MÓDULO APP: $(basename "$modulo")"
    
    if [ -f "$modulo/manifesto.json" ]; then
        echo "   📄 manifesto.json: ✅ PRESENTE"
        # Extrair informações básicas
        nome=$(grep -o '"nome":[^,]*' "$modulo/manifesto.json" | head -1 | cut -d'"' -f4 2>/dev/null || echo "N/A")
        funcao=$(grep -o '"funcao":[^,]*' "$modulo/manifesto.json" | head -1 | cut -d'"' -f4 2>/dev/null || echo "N/A")
        echo "   🏷️  Nome: $nome"
        echo "   🎯 Função: $funcao"
    else
        echo "   📄 manifesto.json: ❌ AUSENTE"
    fi
    
    if [ -f "$modulo/interface_alquimica.json" ]; then
        echo "   🧪 interface_alquimica.json: ✅ PRESENTE"
    else
        echo "   🧪 interface_alquimica.json: ❌ AUSENTE"
    fi
    
    if [ -f "$modulo/camada_emocional.json" ]; then
        echo "   💫 camada_emocional.json: ✅ PRESENTE"
    else
        echo "   💫 camada_emocional.json: ❌ AUSENTE"
    fi
}

# FUNÇÃO PARA ANALISAR UM MÓDULO ROOT
analisar_modulo_root() {
    local modulo=$1
    echo ""
    echo "📂 ANALISANDO MÓDULO ROOT: $(basename "$modulo")"
    
    if [ -f "$modulo/MANIFESTO_$(basename "$modulo").md" ]; then
        echo "   📄 MANIFESTO: ✅ PRESENTE"
        # Extrair informações básicas
        funcao=$(grep -i "função" "$modulo/MANIFESTO_$(basename "$modulo").md" | head -1 | cut -d':' -f2- 2>/dev/null || echo "N/A")
        categoria=$(grep -i "categoria" "$modulo/MANIFESTO_$(basename "$modulo").md" | head -1 | cut -d':' -f2- 2>/dev/null || echo "N/A")
        echo "   🎯 Função: $funcao"
        echo "   📊 Categoria: $categoria"
    else
        echo "   📄 MANIFESTO: ❌ AUSENTE"
    fi
    
    if [ -f "$modulo/ativar_$(basename "$modulo").sh" ]; then
        echo "   🔧 Script Ativação: ✅ PRESENTE"
    else
        echo "   🔧 Script Ativação: ❌ AUSENTE"
    fi
    
    if [ -f "$modulo/METADADOS_CIENTIFICOS.json" ]; then
        echo "   🔬 Metadados Científicos: ✅ PRESENTE"
    else
        echo "   🔬 Metadados Científicos: ❌ AUSENTE"
    fi
}

# ANALISAR AMOSTRAS DE CADA ESTRUTURA
echo "🎯 ANALISANDO AMOSTRAS REPRESENTATIVAS:"

# Amostras APP
echo ""
echo "🏗️  AMOSTRAS APP (M167, M168, M169):"
for mod in $(find . -path "*/src/app/module/M16[7-9]" -type d 2>/dev/null | head -3); do
    analisar_modulo_app "$mod"
done

# Amostras ROOT
echo ""
echo "🏗️  AMOSTRAS ROOT (Críticos):"
for mod in "MODULO_0" "MODULO_9" "MODULO_29" "MODULO_303"; do
    if [ -d "$mod" ]; then
        analisar_modulo_root "$mod"
    fi
done

# COMPARAÇÃO DIRETA
echo ""
echo "🔀 COMPARAÇÃO DIRETA: APP vs ROOT"
echo "--------------------------------"

echo "📊 METADADOS:"
echo "   APP: manifesto.json + interface_alquimica.json + camada_emocional.json"
echo "   ROOT: MANIFESTO_.md + ativar_.sh + METADADOS_CIENTIFICOS.json"

echo ""
echo "🎯 PROPÓSITO:"
echo "   APP: Foco em interface, emoção, experiência do usuário"
echo "   ROOT: Foco em sistema, ativação, controle, infraestrutura"

echo ""
echo "🔗 INTERCONEXÕES:"
echo "   MODULO_9 (ROOT) deveria conectar com M* (APP)"
echo "   MODULO_29 (ROOT) deveria ser interface para APP"
echo "   MODULO_303 (ROOT) deveria fornecer portais para APP"

echo ""
echo "💡 INSIGHTS:"
echo "   ✅ APP tem estrutura emocional/alquímica mais desenvolvida"
echo "   ✅ ROOT tem sistema de ativação e metadados científicos"
echo "   ⚠️  Precisamos conectar essas duas realidades"
echo "   🚀 Oportunidade: Criar ponte APP↔ROOT"

echo ""
echo "🌌 PRÓXIMO PASSO: Sistema de Unificação Universal"

#!/bin/bash
# 🏗️ ANALISADOR DE ARQUITETURA COMPLETA - MULTIPLAS FUNDAÇÕES

echo "=================================================="
echo "🏗️ ANALISADOR DE ARQUITETURA COMPLETA"
echo "=================================================="
echo "🔍 Descobrindo a estrutura real das múltiplas fundações"
echo ""

# 📊 MAPEAR TODAS AS ESTRUTURAS DE MÓDULOS
echo "🎯 MAPEANDO TODOS OS TIPOS DE MÓDULOS:"

# 1. MÓDULOS APP (React/Next.js)
echo ""
echo "1. 🏗️ MÓDULOS APP (React/Next.js):"
MODULOS_APP=$(find . -path "*/src/app/module/M*" -type d 2>/dev/null)
COUNT_APP=$(echo "$MODULOS_APP" | wc -l)
echo "   📊 Total: $COUNT_APP módulos"

# Mostrar faixa numérica
echo "   🔢 Faixa numérica:"
echo "$MODULOS_APP" | grep -o "M[0-9]*" | sort -V | uniq | head -5 | tr '\n' ' '
echo "..."
echo "$MODULOS_APP" | grep -o "M[0-9]*" | sort -V | uniq | tail -5 | tr '\n' ' '
echo ""

# 2. MÓDULOS ROOT (Sistema Principal)
echo ""
echo "2. 🏗️ MÓDULOS ROOT (Sistema Principal):"
MODULOS_ROOT=$(find . -maxdepth 1 -type d -name "MODULO_*")
COUNT_ROOT=$(echo "$MODULOS_ROOT" | wc -l)
echo "   📊 Total: $COUNT_ROOT módulos"

# Mostrar módulos críticos
echo "   🎯 Módulos Críticos:"
for mod in "MODULO_0" "MODULO_9" "MODULO_29" "MODULO_45" "MODULO_72" "MODULO_203" "MODULO_303" "MODULO_307" "MODULO_OMEGA"; do
    if [ -d "$mod" ]; then
        arquivos=$(find "$mod" -type f 2>/dev/null | wc -l)
        echo "      ✅ $mod - $arquivos arquivos"
    else
        echo "      ❌ $mod - Não encontrado"
    fi
done

# 3. OUTRAS ESTRUTURAS
echo ""
echo "3. 🔍 OUTRAS ESTRUTURAS IDENTIFICADAS:"

# Módulos em diferentes padrões
MODULOS_VARIANTES=$(find . -type d -name "module-*" -o -name "modulo-*" -o -name "M*" | grep -v "node_modules" | grep -v ".git")
COUNT_VARIANTES=$(echo "$MODULOS_VARIANTES" | wc -l)
echo "   📊 Módulos em outros padrões: $COUNT_VARIANTES"

if [ $COUNT_VARIANTES -gt 0 ]; then
    echo "   📁 Exemplos:"
    echo "$MODULOS_VARIANTES" | head -5 | while read mod; do
        echo "      📂 $mod"
    done
fi

# 4. ANÁLISE DE METADADOS
echo ""
echo "4. 📊 ANÁLISE DE METADADOS:"

# Verificar se módulos APP têm metadados
echo "   🔍 Metadados nos módulos APP:"
MODULOS_COM_METADATOS=0
for mod in $(echo "$MODULOS_APP" | head -10); do
    if [ -f "$mod/manifesto.json" ] || [ -f "$mod/interface_alquimica.json" ] || [ -f "$mod/camada_emocional.json" ]; then
        ((MODULOS_COM_METADATOS++))
    fi
done
echo "      ✅ $MODULOS_COM_METADATOS/10 módulos com metadados"

# Verificar se módulos ROOT têm metadados
echo "   🔍 Metadados nos módulos ROOT:"
MODULOS_ROOT_COM_METADATOS=0
for mod in "MODULO_0" "MODULO_9" "MODULO_29" "MODULO_303"; do
    if [ -d "$mod" ] && [ -f "$mod/MANIFESTO_$mod.md" ]; then
        ((MODULOS_ROOT_COM_METADATOS++))
    fi
done
echo "      ✅ $MODULOS_ROOT_COM_METADATOS/4 módulos críticos com metadados"

# 5. ANÁLISE DE INTERCONEXÕES
echo ""
echo "5. 🔗 ANÁLISE DE INTERCONEXÕES:"

# Verificar conexões entre estruturas
echo "   🔄 Conexões entre APP e ROOT:"
if [ -f "MODULO_9/MANIFESTO_MODULO_9.md" ] && grep -q "MODULO_29" "MODULO_9/MANIFESTO_MODULO_9.md" 2>/dev/null; then
    echo "      ✅ MODULO_9 → MODULO_29 (Conectado)"
else
    echo "      ❌ MODULO_9 → MODULO_29 (Sem conexão explícita)"
fi

# 6. ESTATÍSTICAS COMPARATIVAS
echo ""
echo "6. 📈 ESTATÍSTICAS COMPARATIVAS:"

# Contar arquivos por tipo em cada estrutura
echo "   📄 ARQUIVOS POR ESTRUTURA:"
ARQUIVOS_APP=$(find . -path "*/src/app/module/M*" -name "*.json" -o -name "*.tsx" -o -name "*.md" 2>/dev/null | wc -l)
ARQUIVOS_ROOT=$(find . -maxdepth 2 -path "*/MODULO_*" -name "*.md" -o -name "*.sh" -o -name "*.json" 2>/dev/null | wc -l)

echo "      🏗️  APP: $ARQUIVOS_APP arquivos (JSON, TSX, MD)"
echo "      🏗️  ROOT: $ARQUIVOS_ROOT arquivos (MD, SH, JSON)"

# 7. IDENTIFICAR FUNÇÕES ESPECÍFICAS
echo ""
echo "7. 🎯 FUNÇÕES IDENTIFICADAS:"

# Analisar padrões nos módulos APP
echo "   🔍 Padrões nos módulos APP:"
if echo "$MODULOS_APP" | head -5 | xargs -I {} find {} -name "camada_emocional.json" 2>/dev/null | grep -q "."; then
    echo "      💫 Camada Emocional: PRESENTE"
else
    echo "      💫 Camada Emocional: AUSENTE"
fi

if echo "$MODULOS_APP" | head -5 | xargs -I {} find {} -name "interface_alquimica.json" 2>/dev/null | grep -q "."; then
    echo "      🧪 Interface Alquímica: PRESENTE"
else
    echo "      🧪 Interface Alquímica: AUSENTE"
fi

# 8. RECOMENDAÇÕES
echo ""
echo "8. 💡 RECOMENDAÇÕES E PRÓXIMOS PASSOS:"

echo "   🎯 PRIORIDADE 1: Unificar metadados"
echo "      Criar sistema de metadados universal para todas as estruturas"

echo "   🎯 PRIORIDADE 2: Mapear conexões"
echo "      Documentar como APP e ROOT se conectam"

echo "   🎯 PRIORIDADE 3: Identificar duplicações"
echo "      Verificar se há funcionalidades redundantes"

echo "   🎯 PRIORIDADE 4: Criar interface unificada"
echo "      Sistema que mostre TODAS as fundações integradas"

echo ""
echo "🌌 CONCLUSÃO DA ANÁLISE:"
echo "   ✅ Confirmado: Múltiplas estruturas de fundação coexistem"
echo "   ✅ APP: $COUNT_APP módulos com foco em interface"
echo "   ✅ ROOT: $COUNT_ROOT módulos com foco em sistema"
echo "   ✅ Desafio: Integração e metadados consistentes"
echo ""
echo "🚀 PRÓXIMO: Criar sistema de unificação!"

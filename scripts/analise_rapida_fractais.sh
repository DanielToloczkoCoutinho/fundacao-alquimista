#!/bin/bash

# 🔍 ANÁLISE RÁPIDA DOS FRACTAIS MAIS IMPORTANTES

echo "🔍 ANÁLISE RÁPIDA - FRACTAIS CRÍTICOS"
echo "═══════════════════════════════════════════════════"

# Arquivos mais importantes para análise imediata
CRITICAIS=(
    "anatheron_prime"           # Sistema principal do Fundador
    "GRAFO_DA_FUNDACAO.json"    # Grafo completo da Fundação  
    "manifesto_fundacao.md"     # Documento fundador
    "fundacao_cli.py"           # CLI da Fundação
    "package.json"              # Configurações principais
    "ritual_final.sh"           # Ritual principal
    "zenith_pos_quantum_key.pem" # Chave de segurança
    "docker-compose.yml"        # Configuração Docker
    "entrar_fundacao_anatheron.sh" # Acesso principal
)

for critico in "${CRITICAIS[@]}"; do
    path="$HOME/studio/$critico"
    echo ""
    echo "🎯 $critico"
    
    if [ -f "$path" ]; then
        tamanho=$(du -h "$path" 2>/dev/null | cut -f1)
        linhas=$(wc -l < "$path" 2>/dev/null || echo "N/A")
        echo "   📊 $tamanho | $linhas linhas"
        
        # Análise de conteúdo
        if [[ "$critico" == *.json ]]; then
            echo "   📋 Estrutura de dados JSON"
        elif [[ "$critico" == *.sh ]] || [[ "$critico" == "anatheron_prime" ]]; then
            echo "   ⚡ Script executável"
        elif [[ "$critico" == *.md ]]; then
            echo "   📚 Documentação fundadora"
        elif [[ "$critico" == *.pem ]]; then
            echo "   🔐 Chave de segurança criptográfica"
        fi
        
        # Verificar se já existe na estrutura organizada
        if [ -f "./fundacao_unificada_completa/$critico" ]; then
            echo "   ✅ JÁ EXISTE na estrutura"
        else
            echo "   ❌ AINDA NÃO na estrutura"
        fi
    else
        echo "   ❌ NÃO ENCONTRADO"
    fi
done

echo ""
echo "💡 RECOMENDAÇÕES IMEDIATAS:"
echo "   1. Manter anatheron_prime como executável principal"
echo "   2. Integrar GRAFO_DA_FUNDACAO.json com sistemas de análise"
echo "   3. Preservar manifesto_fundacao.md como documento histórico"
echo "   4. Avaliar duplicatas com estrutura existente"
echo "   5. Organizar por critério de uso frequência"

#!/bin/bash
echo "📦 ACESSANDO MÓDULOS ORGANIZADOS"
echo "================================"

if [ -L "MODULOS_ORGANIZADOS" ] || [ -d "MODULOS_ORGANIZADOS" ]; then
    cd MODULOS_ORGANIZADOS
    echo "📍 Agora em: $(pwd)"
    
    # Verificar se tem navegador
    if [ -f "NAVEGADOR.sh" ]; then
        echo "🎯 Execute: ./NAVEGADOR.sh para explorar os módulos"
    else
        echo "📁 Conteúdo:"
        ls -la
    fi
else
    echo "❌ MODULOS_ORGANIZADOS não encontrado"
    echo "💡 Execute o script de integração primeiro"
fi

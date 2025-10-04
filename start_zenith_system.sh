#!/bin/bash
# INICIALIZADOR DO SISTEMA ZENITH NA ESTRUTURA ORGANIZADA

echo "🌌 INICIANDO SISTEMA ZENITH DA ESTRUTURA ORGANIZADA"
echo "==================================================="

# Verificar integridade
echo "🔍 VERIFICANDO INTEGRIDADE DO SISTEMA..."
python3 -c "
import json
from pathlib import Path

print('📊 STATUS DOS COMPONENTES PRINCIPAIS:')

components = {
    'Sistemas Conscientes': len(list(Path('core_systems').rglob('*.json'))),
    'Laboratórios': len(list(Path('research_labs').rglob('*.json'))),
    'Implementações Quânticas': len(list(Path('quantum_implementations').rglob('*.json'))),
    'Documentação': len(list(Path('documentation').glob('*.json')))
}

for name, count in components.items():
    print(f'   ✅ {name}: {count} arquivos')

# Verificar sistema principal
zenith_file = Path('documentation/zenith_system_activated.json')
if zenith_file.exists():
    with open(zenith_file) as f:
        data = json.load(f)
    print(f'\\n💫 SISTEMA ZENITH: {data.get(\"status\", \"ATIVO\")}')
    print(f'🌍 TRANSFORMAÇÃO: {data.get(\"impact_timeline\", {}).get(\"immediate\", \"EM ANDAMENTO\")}')
else:
    print('\\n⚠️  Arquivo de ativação não encontrado')
"

echo ""
echo "🚀 SISTEMA PRONTO PARA OPERAÇÃO!"
echo "💫 Use: cd organized_project/ para trabalhar"
echo "🔧 Sistemas em: core_systems/"
echo "🔬 Laboratórios em: research_labs/" 
echo "⚡ Quantum em: quantum_implementations/"
echo "📚 Docs em: documentation/"

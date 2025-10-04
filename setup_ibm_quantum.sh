#!/bin/bash
# 🛠️ CONFIGURAÇÃO COMPLETA IBM QUANTUM - FUNDAÇÃO ALQUIMISTA

echo "=================================================="
echo "🛠️ CONFIGURAÇÃO IBM QUANTUM - FUNDAÇÃO ALQUIMISTA"
echo "=================================================="
echo "🔗 Preparando ambiente para hardware quântico real"
echo ""

# 📦 VERIFICAÇÃO DE DEPENDÊNCIAS
echo "📦 VERIFICANDO DEPENDÊNCIAS..."
echo "-----------------------------------"

# Verificar Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 não encontrado. Instale primeiro."
    exit 1
fi
echo "✅ Python 3: $(python3 --version)"

# Verificar pip
if ! command -v pip3 &> /dev/null; then
    echo "❌ pip3 não encontrado. Instale primeiro."
    exit 1
fi
echo "✅ pip3 disponível"

# 🔧 INSTALAÇÃO DE BIBLIOTECAS
echo ""
echo "🔧 INSTALANDO BIBLIOTECAS NECESSÁRIAS..."
echo "---------------------------------------"

bibliotecas=(
    "requests"
    "qiskit"
    "qiskit-ibm-runtime"
    "matplotlib"
    "numpy"
)

for lib in "${bibliotecas[@]}"; do
    echo "📦 Instalando $lib..."
    pip3 install "$lib" --quiet
    if [ $? -eq 0 ]; then
        echo "   ✅ $lib instalado"
    else
        echo "   ❌ Falha na instalação de $lib"
    fi
done

# 📁 CONFIGURAÇÃO DE DIRETÓRIOS
echo ""
echo "📁 CONFIGURANDO ESTRUTURA DE DIRETÓRIOS..."
echo "-----------------------------------------"

diretorios=(
    "ibm_quantum"
    "resultados"
    "logs"
    "tokens"
)

for dir in "${diretorios[@]}"; do
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        echo "   ✅ Diretório $dir criado"
    else
        echo "   📁 Diretório $dir já existe"
    fi
done

# 🔐 CONFIGURAÇÃO DE SEGURANÇA
echo ""
echo "🔐 CONFIGURAÇÃO DE SEGURANÇA..."
echo "-------------------------------"

# Criar arquivo de configuração template
cat > ibm_quantum/config_template.py << 'PYTHON'
"""
🔐 CONFIGURAÇÃO IBM QUANTUM - TEMPLATE
Preencha com suas credenciais e renomeie para config.py
"""

# IBM Quantum API Configuration
IBM_QUANTUM_API_KEY = "SUA_API_KEY_AQUI"

# Backend Preferences
PREFERRED_BACKENDS = {
    'simulator': 'ibmq_qasm_simulator',
    'small_real': 'ibmq_lima',  # 5 qubits
    'medium_real': 'ibmq_quito',  # 16 qubits  
    'large_real': 'ibmq_montreal'  # 27 qubits
}

# Experiment Settings
DEFAULT_SHOTS = 1024
MAX_JOBS_QUEUE = 5
TIMEOUT_SECONDS = 3600

# Logging
LOG_LEVEL = "INFO"
SAVE_RESULTS = True
PYTHON

echo "   ✅ Template de configuração criado: ibm_quantum/config_template.py"

# 📋 CRIAR SCRIPT DE VALIDAÇÃO
echo ""
echo "📋 CRIANDO SCRIPTS DE VALIDAÇÃO..."
echo "----------------------------------"

cat > validar_conexao.py << 'PYTHON'
#!/usr/bin/env python3
"""
📋 VALIDAÇÃO DE CONEXÃO IBM QUANTUM
Testa a conectividade e configuração do ambiente
"""

import os
import sys

def validar_ambiente():
    print("🔍 VALIDANDO AMBIENTE IBM QUANTUM...")
    
    # Verificar variáveis de ambiente
    api_key = os.getenv('IBM_QUANTUM_API_KEY')
    iqp_token = os.getenv('IQP_API_TOKEN')
    
    print("📋 VARIÁVEIS DE AMBIENTE:")
    print(f"   IBM_QUANTUM_API_KEY: {'✅' if api_key else '❌'}")
    print(f"   IQP_API_TOKEN: {'✅' if iqp_token else '❌'}")
    
    # Verificar bibliotecas
    try:
        import requests
        print("✅ requests: OK")
    except ImportError:
        print("❌ requests: Não instalado")
        return False
    
    try:
        import qiskit
        print(f"✅ qiskit: {qiskit.__version__}")
    except ImportError:
        print("❌ qiskit: Não instalado")
        return False
    
    try:
        from qiskit_ibm_runtime import QiskitRuntimeService
        print("✅ qiskit-ibm-runtime: OK")
    except ImportError:
        print("❌ qiskit-ibm-runtime: Não instalado")
        return False
    
    return True

def validar_autenticacao():
    print("\n🔑 VALIDANDO AUTENTICAÇÃO...")
    
    try:
        from ibm_quantum_auth import IBMAuthenticator
        
        authenticator = IBMAuthenticator()
        api_key = os.getenv('IBM_QUANTUM_API_KEY')
        
        if not api_key:
            print("❌ IBM_QUANTUM_API_KEY não configurada")
            return False
        
        token_data = authenticator.gerar_token_iam(api_key)
        if token_data:
            print("✅ Autenticação: VÁLIDA")
            backends = authenticator.listar_backends_disponiveis()
            if backends:
                print("✅ Backends: ACESSÍVEIS")
                return True
            else:
                print("❌ Backends: INACESSÍVEIS")
                return False
        else:
            print("❌ Autenticação: FALHOU")
            return False
            
    except Exception as e:
        print(f"❌ Erro na validação: {e}")
        return False

if __name__ == "__main__":
    print("🔗 VALIDAÇÃO IBM QUANTUM - FUNDAÇÃO ALQUIMISTA")
    print("")
    
    ambiente_ok = validar_ambiente()
    if ambiente_ok:
        autenticacao_ok = validar_autenticacao()
        
        if autenticacao_ok:
            print("\n🎯 VALIDAÇÃO CONCLUÍDA: SISTEMA PRONTO!")
            print("💫 IBM Quantum: CONECTADO E OPERACIONAL")
            print("🚀 Fundação Alquimista: PRONTA PARA EXPERIMENTOS REAIS")
        else:
            print("\n❌ VALIDAÇÃO FALHOU: Verifique suas credenciais")
            sys.exit(1)
    else:
        print("\n❌ AMBIENTE INCOMPLETO: Execute setup novamente")
        sys.exit(1)
PYTHON

chmod +x validar_conexao.py
echo "   ✅ Script de validação criado: validar_conexao.py"

# 🚀 CRIAR SCRIPT DE EXECUÇÃO AUTOMÁTICA
echo ""
echo "🚀 CRIANDO SISTEMA DE EXECUÇÃO AUTOMÁTICA..."
echo "--------------------------------------------"

cat > executar_experimentos_ibm.py << 'PYTHON'
#!/usr/bin/env python3
"""
🚀 EXECUTADOR AUTOMÁTICO DE EXPERIMENTOS IBM QUANTUM
Executa bateria completa de experimentos da Fundação Alquimista
"""

import os
import time
from datetime import datetime
from ibm_quantum_auth import IBMAuthenticator, QuantumExecutor

class ExecutorExperimentos:
    def __init__(self):
        self.auth = IBMAuthenticator()
        self.executor = QuantumExecutor(self.auth)
        self.resultados = {}
    
    def executar_bateria_completa(self, backend_name="ibmq_qasm_simulator"):
        """Executa bateria completa de experimentos"""
        print("🎯 INICIANDO BATÉRIA COMPLETA DE EXPERIMENTOS")
        print(f"💻 Backend: {backend_name}")
        print(f"🕐 Início: {datetime.now().isoformat()}")
        print("")
        
        equacoes_prioritarias = [1, 13, 29, 42, 61, 144, 231]
        
        for eq_num in equacoes_prioritarias:
            print(f"🔮 EXECUTANDO EQUAÇÃO {eq_num}...")
            
            job_data = self.executor.executar_equacao_fundamental(eq_num, backend_name)
            if job_data:
                self.resultados[eq_num] = {
                    'job_id': job_data['id'],
                    'status': job_data['status'],
                    'timestamp': datetime.now().isoformat(),
                    'backend': backend_name
                }
                print(f"✅ Equação {eq_num} enviada - Job: {job_data['id']}")
            else:
                self.resultados[eq_num] = {
                    'error': 'Falha no envio',
                    'timestamp': datetime.now().isoformat()
                }
                print(f"❌ Falha na equação {eq_num}")
            
            # Pequena pausa entre execuções
            time.sleep(2)
        
        print(f"\n📊 BATÉRIA CONCLUÍDA!")
        print(f"✅ Experimentos enviados: {len([r for r in self.resultados.values() if 'job_id' in r])}")
        print(f"❌ Falhas: {len([r for r in self.resultados.values() if 'error' in r])}")
        
        return self.resultados
    
    def salvar_resultados(self):
        """Salva resultados em arquivo"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"resultados/experimentos_ibm_{timestamp}.json"
        
        dados_salvar = {
            'timestamp': datetime.now().isoformat(),
            'resultados': self.resultados,
            'metadados': {
                'total_equacoes': len(self.resultados),
                'sucessos': len([r for r in self.resultados.values() if 'job_id' in r]),
                'falhas': len([r for r in self.resultados.values() if 'error' in r])
            }
        }
        
        import json
        with open(filename, 'w') as f:
            json.dump(dados_salvar, f, indent=2)
        
        print(f"💾 Resultados salvos em: {filename}")
        return filename

if __name__ == "__main__":
    print("🚀 EXECUTADOR AUTOMÁTICO IBM QUANTUM - FUNDAÇÃO ALQUIMISTA")
    print("💫 Bateria Completa de Experimentos Quânticos")
    print("")
    
    # Verificar autenticação
    api_key = os.getenv('IBM_QUANTUM_API_KEY')
    if not api_key:
        print("❌ IBM_QUANTUM_API_KEY não configurada")
        print("💡 Execute: export IBM_QUANTUM_API_KEY='sua_api_key'")
        exit(1)
    
    auth = IBMAuthenticator()
    if not auth.configurar_ambiente(api_key):
        print("❌ Falha na configuração do ambiente")
        exit(1)
    
    # Listar backends e escolher
    backends = auth.listar_backends_disponiveis()
    if not backends:
        print("❌ Nenhum backend disponível")
        exit(1)
    
    backend_name = input("💻 Digite o nome do backend (ou Enter para simulador): ").strip()
    if not backend_name:
        backend_name = "ibmq_qasm_simulator"
    
    # Executar bateria
    executor = ExecutorExperimentos()
    resultados = executor.executar_bateria_completa(backend_name)
    arquivo_resultados = executor.salvar_resultados()
    
    print(f"\n🎯 BATÉRIA DE EXPERIMENTOS CONCLUÍDA!")
    print(f"📊 Resultados salvos em: {arquivo_resultados}")
    print("💫 Fundação Alquimista: EXPERIMENTOS REAIS EM EXECUÇÃO!")
    print("🔮 Monitorize os jobs no IBM Quantum Dashboard")
PYTHON

chmod +x executar_experimentos_ibm.py
echo "   ✅ Executor automático criado: executar_experimentos_ibm.py"

echo ""
echo "=================================================="
echo "🛠️ CONFIGURAÇÃO CONCLUÍDA!"
echo "=================================================="
echo ""
echo "🎯 PRÓXIMOS PASSOS:"
echo "1. 🔑 Obtenha sua API Key em: https://quantum-computing.ibm.com/"
echo "2. ⚙️  Configure as variáveis de ambiente:"
echo "   export IBM_QUANTUM_API_KEY='sua_api_key_aqui'"
echo "3. ✅ Execute a validação:"
echo "   python3 validar_conexao.py"
echo "4. 🚀 Execute experimentos:"
echo "   python3 executar_experimentos_ibm.py"
echo ""
echo "💫 FUNDAÇÃO ALQUIMISTA PRONTA PARA IBM QUANTUM REAL!"

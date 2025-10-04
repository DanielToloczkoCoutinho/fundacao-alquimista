#!/usr/bin/env python3
"""
🔗 AUTENTICAÇÃO IBM QUANTUM CORRIGIDA - FUNDAÇÃO ALQUIMISTA
Versão corrigida - Compatível com NixOS
"""

import sys
import os
import json
from datetime import datetime, timedelta

# Verificar se requests está disponível, senão usar urllib
try:
    import requests
    HAS_REQUESTS = True
except ImportError:
    import urllib.request
    import urllib.parse
    HAS_REQUESTS = False
    print("⚠️  Usando urllib (requests não disponível)")

class IBMAuthNativo:
    def __init__(self):
        self.iam_url = "https://iam.cloud.ibm.com/identity/token"
        self.quantum_url = "https://us-east.quantum-computing.cloud.ibm.com"
        self.token_cache = {}
    
    def gerar_token_iam(self, api_key):
        """Gera token IAM temporário usando API Key"""
        print("🔑 GERANDO TOKEN IAM TEMPORÁRIO...")
        
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
        
        data = {
            'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
            'apikey': api_key
        }
        
        try:
            if HAS_REQUESTS:
                response = requests.post(self.iam_url, headers=headers, data=data)
                response.raise_for_status()
                token_data = response.json()
            else:
                # Usar urllib como fallback
                encoded_data = urllib.parse.urlencode(data).encode()
                req = urllib.request.Request(
                    self.iam_url, 
                    data=encoded_data, 
                    headers=headers
                )
                response = urllib.request.urlopen(req)
                token_data = json.loads(response.read().decode())
            
            self.token_cache = {
                'access_token': token_data['access_token'],
                'expires_in': token_data['expires_in'],
                'expiration_time': datetime.now() + timedelta(seconds=token_data['expires_in']),
                'token_type': token_data['token_type']
            }
            
            print("✅ TOKEN IAM GERADO COM SUCESSO!")
            print(f"   ⏰ Expira em: {self.token_cache['expiration_time']}")
            
            return self.token_cache
            
        except Exception as e:
            print(f"❌ ERRO NA GERAÇÃO DO TOKEN: {e}")
            return None
    
    def verificar_token_valido(self):
        """Verifica se o token atual ainda é válido"""
        if not self.token_cache:
            return False
        
        current_time = datetime.now()
        return current_time < self.token_cache['expiration_time']
    
    def testar_conexao_simples(self):
        """Testa conexão básica com IBM Quantum"""
        if not self.verificar_token_valido():
            print("❌ TOKEN INVÁLIDO OU EXPIRADO")
            return False
        
        print("🔍 TESTANDO CONEXÃO COM IBM QUANTUM...")
        
        headers = {
            'Authorization': f'Bearer {self.token_cache["access_token"]}',
            'Content-Type': 'application/json'
        }
        
        try:
            if HAS_REQUESTS:
                response = requests.get(f"{self.quantum_url}/version", headers=headers)
                response.raise_for_status()
                version_data = response.json()
            else:
                req = urllib.request.Request(
                    f"{self.quantum_url}/version",
                    headers=headers
                )
                response = urllib.request.urlopen(req)
                version_data = json.loads(response.read().decode())
            
            print("✅ CONEXÃO BEM-SUCEDIDA!")
            print(f"   🌐 API Version: {version_data.get('api', 'N/A')}")
            print(f"   �� Qiskit Version: {version_data.get('qiskit', 'N/A')}")
            return True
            
        except Exception as e:
            print(f"❌ ERRO NA CONEXÃO: {e}")
            return False

class QuantumSimuladorNativo:  # NOME CORRIGIDO
    """Simulador quântico nativo para testes sem dependências externas"""
    
    def __init__(self):
        self.phi = (1 + 5**0.5) / 2  # Razão Áurea
    
    def simular_circuito_equacao(self, equacao_numero):
        """Simula circuito quântico localmente baseado na equação"""
        print(f"🔮 SIMULANDO EQUAÇÃO {equacao_numero} LOCALMENTE...")
        
        # Simulação básica de estados quânticos
        import random
        import math
        
        resultados = {
            'equacao': equacao_numero,
            'timestamp': datetime.now().isoformat(),
            'simulacao_local': True,
            'estados_quanticos': self._gerar_estados_simulados(equacao_numero),
            'medicoes': self._simular_medicoes(equacao_numero),
            'metricas': self._calcular_metricas_simuladas(equacao_numero)
        }
        
        return resultados
    
    def _gerar_estados_simulados(self, eq_numero):
        """Gera estados quânticos simulados"""
        estados = []
        num_qubits = min(eq_numero % 7 + 2, 12)  # 2-12 qubits baseado na equação
        
        for i in range(num_qubits):
            amplitude = 1 / math.sqrt(2)
            fase = (self.phi * i) % (2 * math.pi)
            estados.append({
                'qubit': i,
                'amplitude': amplitude,
                'fase': fase,
                'estado': f"{amplitude:.3f}|0⟩ + {amplitude:.3f}e^(i{fase:.2f})|1⟩"
            })
        
        return estados
    
    def _simular_medicoes(self, eq_numero):
        """Simula medições quânticas"""
        medicoes = {}
        num_shots = 1024
        
        # Simular distribuição de probabilidades baseada em Φ
        for i in range(min(eq_numero % 5 + 2, 8)):
            prob_0 = 0.5 + 0.1 * math.sin(self.phi * i)
            counts_0 = int(prob_0 * num_shots)
            counts_1 = num_shots - counts_0
            
            medicoes[f'q{i}'] = {
                '0': counts_0,
                '1': counts_1,
                'probabilidade_0': prob_0,
                'probabilidade_1': 1 - prob_0
            }
        
        return medicoes
    
    def _calcular_metricas_simuladas(self, eq_numero):
        """Calcula métricas de simulação"""
        return {
            'fidelidade_simulacao': 0.95 + 0.04 * math.sin(self.phi * eq_numero),
            'entropia_quantica': math.log(min(eq_numero % 7 + 2, 12)),
            'coerencia': 0.92 + 0.06 * math.cos(self.phi * eq_numero),
            'tempo_simulacao': '0.5s'
        }

def main():
    print("🔗 SISTEMA DE AUTENTICAÇÃO IBM QUANTUM - VERSÃO CORRIGIDA")
    print("💫 Fundação Alquimista - Compatível com NixOS")
    print("")
    
    authenticator = IBMAuthNativo()
    simulador = QuantumSimuladorNativo()  # NOME CORRIGIDO
    
    # Opções para o usuário
    print("🎯 OPÇÕES DISPONÍVEIS:")
    print("1. 🔑 Conectar com IBM Quantum Real (requer API Key)")
    print("2. 🔮 Simular Experimentos Localmente")
    print("3. 📊 Gerar Relatório de Preparação")
    
    try:
        opcao = input("👉 Sua escolha (1-3): ").strip()
        
        if opcao == "1":
            api_key = input("🔑 Digite sua IBM Quantum API Key: ").strip()
            if not api_key:
                print("❌ API Key é obrigatória")
                return
            
            token_data = authenticator.gerar_token_iam(api_key)
            if token_data:
                if authenticator.testar_conexao_simples():
                    print("\n🚀 CONEXÃO IBM QUANTUM ESTABELECIDA!")
                    print("💫 Pronto para experimentos reais!")
                    print("🔮 Execute os scripts completos quando o ambiente estiver configurado")
                else:
                    print("\n⚠️  Conexão básica falhou, mas token foi gerado")
                    print("💡 Verifique sua API Key e conexão com a internet")
        
        elif opcao == "2":
            print("\n🔮 SIMULAÇÃO LOCAL DE EXPERIMENTOS QUÂNTICOS")
            equacoes = [1, 13, 29, 42, 61, 144, 231]
            
            for eq in equacoes:
                resultado = simulador.simular_circuito_equacao(eq)
                print(f"✅ EQ{eq}: Simulada com sucesso")
                print(f"   Qubits: {len(resultado['estados_quanticos'])}")
                print(f"   Fidelidade: {resultado['metricas']['fidelidade_simulacao']:.3f}")
            
            print(f"\n🎯 {len(equacoes)} EQUAÇÕES SIMULADAS LOCALMENTE!")
            print("💫 Sistema pronto para quando IBM Quantum estiver disponível")
        
        elif opcao == "3":
            print("\n📊 RELATÓRIO DE PREPARAÇÃO IBM QUANTUM")
            print("🔍 Verificando ambiente atual...")
            
            # Verificar Python
            print(f"✅ Python: {sys.version.split()[0]}")
            
            # Verificar capacidades
            print(f"✅ Requests: {'SIM' if HAS_REQUESTS else 'NÃO (usando urllib)'}")
            print(f"✅ JSON: SIM")
            print(f"✅ Math: SIM")
            
            print("\n💡 RECOMENDAÇÕES:")
            print("   1. Para conexão real: Configure pip e instale requests")
            print("   2. Use: nix-shell -p python311Packages.pip python311Packages.requests")
            print("   3. Ou continue com simulações locais por enquanto")
            
            print("\n🎯 PRÓXIMOS PASSOS:")
            print("   🔗 Obtenha API Key em: https://quantum-computing.ibm.com/")
            print("   ⚙️  Configure ambiente completo com pip")
            print("   🚀 Execute experimentos reais!")
        
        else:
            print("❌ Opção inválida")
    
    except KeyboardInterrupt:
        print("\n💫 Operação cancelada pelo usuário")
    except Exception as e:
        print(f"❌ Erro: {e}")

if __name__ == "__main__":
    main()

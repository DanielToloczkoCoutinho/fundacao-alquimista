#!/usr/bin/env python3
"""
🔗 AUTENTICAÇÃO IBM QUANTUM - FUNDAÇÃO ALQUIMISTA
Geração automática de tokens e conexão com hardware real
"""

import requests
import json
import os
from datetime import datetime, timedelta

class IBMAuthenticator:
    def __init__(self):
        self.iam_url = "https://iam.cloud.ibm.com/identity/token"
        self.quantum_url = "https://us-east.quantum-computing.cloud.ibm.com"
        self.token_cache = {}
    
    def gerar_token_iam(self, api_key):
        """Gera token IAM temporário usando API Key"""
        print("�� GERANDO TOKEN IAM TEMPORÁRIO...")
        
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
        
        data = {
            'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
            'apikey': api_key
        }
        
        try:
            response = requests.post(self.iam_url, headers=headers, data=data)
            response.raise_for_status()
            
            token_data = response.json()
            self.token_cache = {
                'access_token': token_data['access_token'],
                'refresh_token': token_data.get('refresh_token'),
                'expires_in': token_data['expires_in'],
                'expiration_time': datetime.now() + timedelta(seconds=token_data['expires_in']),
                'token_type': token_data['token_type']
            }
            
            print("✅ TOKEN IAM GERADO COM SUCESSO!")
            print(f"   ⏰ Expira em: {self.token_cache['expiration_time']}")
            
            return self.token_cache
            
        except requests.exceptions.RequestException as e:
            print(f"❌ ERRO NA GERAÇÃO DO TOKEN: {e}")
            return None
    
    def verificar_token_valido(self):
        """Verifica se o token atual ainda é válido"""
        if not self.token_cache:
            return False
        
        current_time = datetime.now()
        return current_time < self.token_cache['expiration_time']
    
    def configurar_ambiente(self, api_key=None):
        """Configura ambiente com variáveis de ambiente"""
        if api_key:
            # Gerar novo token se API Key for fornecida
            token_data = self.gerar_token_iam(api_key)
            if token_data:
                os.environ['IQP_API_TOKEN'] = token_data['access_token']
                os.environ['IBM_QUANTUM_API_KEY'] = api_key
                print("✅ AMBIENTE CONFIGURADO COM SUCESSO!")
                return True
        elif os.getenv('IQP_API_TOKEN'):
            print("✅ AMBIENTE JÁ CONFIGURADO!")
            return True
        
        print("❌ CONFIGURAÇÃO DE AMBIENTE FALHOU")
        return False
    
    def listar_backends_disponiveis(self):
        """Lista backends quânticos disponíveis"""
        if not self.verificar_token_valido():
            print("❌ TOKEN INVÁLIDO OU EXPIRADO")
            return None
        
        headers = {
            'Authorization': f'Bearer {self.token_cache["access_token"]}',
            'Content-Type': 'application/json'
        }
        
        try:
            response = requests.get(f"{self.quantum_url}/devices", headers=headers)
            response.raise_for_status()
            
            backends = response.json()
            print("🔬 BACKENDS QUÂNTICOS DISPONÍVEIS:")
            for backend in backends:
                print(f"   💻 {backend['name']}: {backend['num_qubits']} qubits")
                print(f"      Status: {backend['status']}")
                print(f"      Fila: {backend.get('pending_jobs', 'N/A')} jobs")
            
            return backends
            
        except requests.exceptions.RequestException as e:
            print(f"❌ ERRO AO LISTAR BACKENDS: {e}")
            return None

class QuantumExecutor:
    def __init__(self, authenticator):
        self.auth = authenticator
    
    def executar_circuito_simples(self, backend_name="ibmq_qasm_simulator"):
        """Executa circuito quântico simples no backend especificado"""
        if not self.auth.verificar_token_valido():
            print("❌ AUTENTICAÇÃO NECESSÁRIA")
            return None
        
        print(f"🎯 EXECUTANDO CIRCUITO NO {backend_name}...")
        
        # Circuito quântico básico: Superposição + Medição
        circuito_data = {
            "qasm": """
            OPENQASM 2.0;
            include "qelib1.inc";
            qreg q[2];
            creg c[2];
            
            // Superposição no qubit 0
            h q[0];
            
            // Entanglement entre q0 e q1
            cx q[0], q[1];
            
            // Medição
            measure q[0] -> c[0];
            measure q[1] -> c[1];
            """,
            "backend": backend_name,
            "shots": 1024
        }
        
        headers = {
            'Authorization': f'Bearer {self.auth.token_cache["access_token"]}',
            'Content-Type': 'application/json'
        }
        
        try:
            response = requests.post(
                f"{self.auth.quantum_url}/jobs", 
                headers=headers, 
                json=circuito_data
            )
            response.raise_for_status()
            
            job_data = response.json()
            print("✅ CIRCUITO ENVIADO COM SUCESSO!")
            print(f"   Job ID: {job_data['id']}")
            print(f"   Status: {job_data['status']}")
            
            return job_data
            
        except requests.exceptions.RequestException as e:
            print(f"❌ ERRO NA EXECUÇÃO DO CIRCUITO: {e}")
            return None
    
    def executar_equacao_fundamental(self, equacao_numero, backend_name="ibmq_qasm_simulator"):
        """Executa experimento baseado em equação fundamental"""
        print(f"🔮 EXECUTANDO EXPERIMENTO DA EQUAÇÃO {equacao_numero}...")
        
        # Mapeamento de equações para circuitos específicos
        circuitos_equacoes = {
            1: self._circuito_superposicao_mental(),
            13: self._circuito_ressonancia_fractal(),
            29: self._circuito_entanglement_consciencial(),
            42: self._circuito_modulacao_universal(),
            61: self._circuito_expressao_criativa(),
            144: self._circuito_coerencia_dimensional(),
            231: self._circuito_unificacao_suprema()
        }
        
        circuito = circuitos_equacoes.get(equacao_numero, self._circuito_superposicao_mental())
        
        circuito_data = {
            "qasm": circuito,
            "backend": backend_name,
            "shots": 2048,  # Mais shots para melhor estatística
            "memory": True
        }
        
        headers = {
            'Authorization': f'Bearer {self.auth.token_cache["access_token"]}',
            'Content-Type': 'application/json'
        }
        
        try:
            response = requests.post(
                f"{self.auth.quantum_url}/jobs", 
                headers=headers, 
                json=circuito_data
            )
            response.raise_for_status()
            
            job_data = response.json()
            print(f"✅ EQUAÇÃO {equacao_numero} EXECUTADA COM SUCESSO!")
            print(f"   Job ID: {job_data['id']}")
            
            return job_data
            
        except requests.exceptions.RequestException as e:
            print(f"❌ ERRO NA EXECUÇÃO DA EQUAÇÃO {equacao_numero}: {e}")
            return None
    
    def _circuito_superposicao_mental(self):
        """Circuito para Equação 1: Superposição Mental"""
        return """
        OPENQASM 2.0;
        include "qelib1.inc";
        qreg q[3];
        creg c[3];
        
        // Superposição em múltiplos qubits
        h q[0];
        h q[1];
        h q[2];
        
        // Interações mentais simuladas
        cx q[0], q[1];
        cx q[1], q[2];
        
        // Medição completa
        measure q[0] -> c[0];
        measure q[1] -> c[1];
        measure q[2] -> c[2];
        """
    
    def _circuito_ressonancia_fractal(self):
        """Circuito para Equação 13: Ressonância Fractal"""
        return """
        OPENQASM 2.0;
        include "qelib1.inc";
        qreg q[5];
        creg c[5];
        
        // Padrão fractal baseado em Φ
        h q[0];
        cx q[0], q[1];
        h q[2];
        cx q[2], q[3];
        h q[4];
        
        // Ressonância circular
        cx q[4], q[0];
        cx q[1], q[2];
        cx q[3], q[4];
        
        measure q[0] -> c[0];
        measure q[1] -> c[1];
        measure q[2] -> c[2];
        measure q[3] -> c[3];
        measure q[4] -> c[4];
        """
    
    def _circuito_entanglement_consciencial(self):
        """Circuito para Equação 29: Entanglement Consciencial"""
        return """
        OPENQASM 2.0;
        include "qelib1.inc";
        qreg q[4];
        creg c[4];
        
        // Rede de entanglement complexa
        h q[0];
        h q[1];
        h q[2];
        h q[3];
        
        // Entanglement em estrela
        cx q[0], q[1];
        cx q[0], q[2];
        cx q[0], q[3];
        
        // Rotação de fase consciencial
        rz(pi/4) q[1];
        rz(pi/2) q[2];
        rz(pi) q[3];
        
        measure q[0] -> c[0];
        measure q[1] -> c[1];
        measure q[2] -> c[2];
        measure q[3] -> c[3];
        """
    
    def _circuito_modulacao_universal(self):
        """Circuito para Equação 42: Modulação Universal"""
        return """
        OPENQASM 2.0;
        include "qelib1.inc";
        qreg q[6];
        creg c[6];
        
        // Modulação de fase universal
        h q[0];
        rx(pi/4) q[1];
        ry(pi/2) q[2];
        rz(pi) q[3];
        u3(pi/4, pi/2, pi) q[4];
        u3(pi/2, pi/4, pi/2) q[5];
        
        // Interconexões moduladas
        cx q[0], q[1];
        cx q[1], q[2];
        cx q[2], q[3];
        cx q[3], q[4];
        cx q[4], q[5];
        
        measure q -> c;
        """
    
    def _circuito_expressao_criativa(self):
        """Circuito para Equação 61: Expressão Criativa"""
        return """
        OPENQASM 2.0;
        include "qelib1.inc";
        qreg q[7];
        creg c[7];
        
        // Expressão criativa através de portas variadas
        h q[0];
        x q[1];
        y q[2];
        z q[3];
        s q[4];
        t q[5];
        sdg q[6];
        
        // Composição criativa
        cx q[0], q[1];
        cy q[1], q[2];
        cz q[2], q[3];
        ch q[3], q[4];
        crz(pi/4) q[4], q[5];
        cu3(pi/4, pi/2, pi) q[5], q[6];
        
        measure q -> c;
        """
    
    def _circuito_coerencia_dimensional(self):
        """Circuito para Equação 144: Coerência Dimensional"""
        return """
        OPENQASM 2.0;
        include "qelib1.inc";
        qreg q[8];
        creg c[8];
        
        // Coerência através de múltiplas dimensões
        for (int i = 0; i < 8; i++) {
            h q[i];
        }
        
        // Entanglement multidimensional
        for (int i = 0; i < 7; i++) {
            cx q[i], q[i+1];
        }
        cx q[7], q[0];  // Fechar o ciclo
        
        // Estabilização de fase
        for (int i = 0; i < 8; i+=2) {
            rz(pi/4) q[i];
        }
        
        measure q -> c;
        """
    
    def _circuito_unificacao_suprema(self):
        """Circuito para Equação 231: Unificação Suprema"""
        return """
        OPENQASM 2.0;
        include "qelib1.inc";
        qreg q[12];
        creg c[12];
        
        // Unificação através de padrão complexo
        for (int i = 0; i < 12; i++) {
            h q[i];
        }
        
        // Rede de unificação
        for (int i = 0; i < 11; i++) {
            for (int j = i+1; j < 12; j++) {
                if (j == i+1 || j == i+5) {  // Padrão de conexão
                    cx q[i], q[j];
                }
            }
        }
        
        // Fase final de unificação
        for (int i = 0; i < 12; i++) {
            rz(2*pi*i/12) q[i];  // Fases harmonicamente relacionadas
        }
        
        measure q -> c;
        """

# EXECUÇÃO PRINCIPAL COM INTERFACE INTERATIVA
def main():
    print("🔗 SISTEMA DE AUTENTICAÇÃO IBM QUANTUM - FUNDAÇÃO ALQUIMISTA")
    print("💫 Conexão com Hardware Quântico Real")
    print("")
    
    authenticator = IBMAuthenticator()
    executor = QuantumExecutor(authenticator)
    
    # Solicitar API Key interativamente
    api_key = input("🔑 Digite sua IBM Quantum API Key: ").strip()
    
    if not api_key:
        print("❌ API Key é obrigatória")
        return
    
    # Configurar ambiente
    if authenticator.configurar_ambiente(api_key):
        # Listar backends disponíveis
        backends = authenticator.listar_backends_disponiveis()
        
        if backends:
            print("\n🎯 SELECIONE UMA OPÇÃO:")
            print("1. Executar circuito de teste")
            print("2. Executar equações fundamentais")
            print("3. Listar backends detalhados")
            
            opcao = input("👉 Sua escolha (1-3): ").strip()
            
            if opcao == "1":
                backend = input("💻 Nome do backend (padrão: ibmq_qasm_simulator): ").strip()
                if not backend:
                    backend = "ibmq_qasm_simulator"
                executor.executar_circuito_simples(backend)
                
            elif opcao == "2":
                print("\n🔮 EQUAÇÕES FUNDAMENTAIS DISPONÍVEIS:")
                equacoes = [1, 13, 29, 42, 61, 144, 231]
                for eq in equacoes:
                    print(f"   {eq}. Equação {eq}")
                
                try:
                    eq_num = int(input("👉 Número da equação: ").strip())
                    if eq_num in equacoes:
                        backend = input("💻 Nome do backend (padrão: ibmq_qasm_simulator): ").strip()
                        if not backend:
                            backend = "ibmq_qasm_simulator"
                        executor.executar_equacao_fundamental(eq_num, backend)
                    else:
                        print("❌ Equação inválida")
                except ValueError:
                    print("❌ Número inválido")
            
            elif opcao == "3":
                authenticator.listar_backends_disponiveis()
            
            else:
                print("❌ Opção inválida")
        
        print(f"\n🚀 AUTENTICAÇÃO IBM QUANTUM CONCLUÍDA!")
        print("💫 Fundação Alquimista conectada ao hardware quântico real")
        print("🔮 Pronta para experimentos avançados!")

if __name__ == "__main__":
    main()

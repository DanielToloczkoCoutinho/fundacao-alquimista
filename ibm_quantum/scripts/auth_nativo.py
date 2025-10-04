#!/usr/bin/env python3
"""
🔐 AUTENTICAÇÃO NATIVA IBM QUANTUM - NIXOS COMPATÍVEL
Funciona com Python puro - Mínimo de dependências
"""

import json
import urllib.request
import urllib.parse
from datetime import datetime, timedelta

class IBMAuthUniversal:
    def __init__(self):
        self.iam_url = "https://iam.cloud.ibm.com/identity/token"
        self.quantum_url = "https://us-east.quantum-computing.cloud.ibm.com"
        self.token_cache = {}
    
    def gerar_token_universal(self, api_key):
        """Gera token IAM usando urllib (funciona em qualquer ambiente)"""
        print("🔑 GERANDO TOKEN IBM QUANTUM...")
        
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'User-Agent': 'FundacaoAlquimista/1.0'
        }
        
        data = {
            'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
            'apikey': api_key
        }
        
        try:
            encoded_data = urllib.parse.urlencode(data).encode('utf-8')
            req = urllib.request.Request(self.iam_url, data=encoded_data, headers=headers)
            
            with urllib.request.urlopen(req) as response:
                response_data = response.read().decode('utf-8')
                token_data = json.loads(response_data)
            
            self.token_cache = {
                'access_token': token_data['access_token'],
                'expires_in': token_data['expires_in'],
                'expiration_time': datetime.now() + timedelta(seconds=token_data['expires_in']),
                'token_type': token_data['token_type'],
                'scope': token_data.get('scope', '')
            }
            
            print("✅ TOKEN GERADO COM SUCESSO!")
            print(f"   ⏰ Válido por: {token_data['expires_in']} segundos")
            print(f"   🕐 Expira em: {self.token_cache['expiration_time']}")
            
            return self.token_cache
            
        except Exception as e:
            print(f"❌ ERRO NA GERAÇÃO DO TOKEN: {e}")
            return None
    
    def testar_conexao_simples(self):
        """Testa conexão básica com IBM Quantum"""
        if not self.token_cache:
            print("❌ Nenhum token disponível")
            return False
        
        print("🔍 TESTANDO CONEXÃO COM IBM QUANTUM...")
        
        headers = {
            'Authorization': f'Bearer {self.token_cache["access_token"]}',
            'Accept': 'application/json',
            'User-Agent': 'FundacaoAlquimista/1.0'
        }
        
        try:
            req = urllib.request.Request(f"{self.quantum_url}/version", headers=headers)
            with urllib.request.urlopen(req) as response:
                version_data = json.loads(response.read().decode('utf-8'))
            
            print("✅ CONEXÃO BEM-SUCEDIDA!")
            print(f"   🌐 API: {version_data.get('api', 'N/A')}")
            print(f"   🚀 Status: Conectado e operacional")
            return True
            
        except Exception as e:
            print(f"❌ ERRO NA CONEXÃO: {e}")
            return False

def main():
    print("🔗 AUTENTICAÇÃO UNIVERSAL IBM QUANTUM")
    print("💫 Compatível com qualquer ambiente Python")
    print("")
    
    auth = IBMAuthUniversal()
    
    api_key = input("🔑 Digite sua IBM Quantum API Key: ").strip()
    if not api_key:
        print("❌ API Key é obrigatória")
        return
    
    token_data = auth.gerar_token_universal(api_key)
    if token_data and auth.testar_conexao_simples():
        print("\n🎯 AUTENTICAÇÃO CONCLUÍDA COM SUCESSO!")
        print("💫 IBM Quantum: ACESSÍVEL E OPERACIONAL")
        print("🚀 Fundação Alquimista: PRONTA PARA EXPERIMENTOS REAIS")
        
        # Salvar token de forma segura
        with open('ibm_quantum/config/token_info.json', 'w') as f:
            json.dump({
                'token_gerado_em': datetime.now().isoformat(),
                'expira_em': token_data['expiration_time'].isoformat(),
                'api_key_mascarada': api_key[:8] + '...' + api_key[-4:]
            }, f, indent=2)
        
        print("💾 Informações do token salvas em: ibm_quantum/config/token_info.json")
    else:
        print("\n❌ FALHA NA AUTENTICAÇÃO")
        print("💡 Verifique sua API Key e conexão com a internet")

if __name__ == "__main__":
    main()

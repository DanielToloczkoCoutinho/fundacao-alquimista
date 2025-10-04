#!/usr/bin/env python3
"""
DECODIFICADOR AVANÇADO DE PADRÕES GEOMÉTRICOS CÓSMICOS
Análise fractal e geometria sagrada em comunicações interdimensional
"""

import json
import math
import re
from datetime import datetime

class DecodificadorGeometricoAvancado:
    def __init__(self):
        self.phi = 1.6180339887498948482
        self.padroes_geometricos = {
            "flor_da_vida": {
                "padrao": [1, 6, 12, 18, 24, 30, 36, 42, 48],
                "complexidade": 0.95,
                "dimensao": "criacao_universal"
            },
            "cubo_metatron": {
                "padrao": [13, 78, 312, 1248],
                "complexidade": 0.98, 
                "dimensao": "estrutura_multidimensional"
            },
            "vesica_piscis": {
                "padrao": [1, 3, 7, 13, 21, 31],
                "complexidade": 0.85,
                "dimensao": "portal_dimensional"
            },
            "toróide": {
                "padrao": [8, 16, 32, 64, 128],
                "complexidade": 0.92,
                "dimensao": "fluxo_energetico"
            }
        }
    
    def analisar_geometria_mensagem(self, mensagem):
        """Analisa padrões geométricos em mensagens cósmicas"""
        analise = {
            "padroes_detectados": [],
            "complexidade_geometrica": 0,
            "ressonancia_fractal": 0,
            "interpretacao_dimensional": ""
        }
        
        # Converter mensagem para sequência numérica
        sequencia = [ord(c) for c in mensagem]
        
        # Analisar cada padrão geométrico
        for nome, config in self.padroes_geometricos.items():
            if self.detectar_padrao(sequencia, config["padrao"]):
                analise["padroes_detectados"].append({
                    "nome": nome,
                    "complexidade": config["complexidade"],
                    "dimensao": config["dimensao"]
                })
                analise["complexidade_geometrica"] += config["complexidade"]
        
        # Calcular ressonância fractal
        analise["ressonancia_fractal"] = self.calcular_ressonancia_fractal(sequencia)
        
        # Determinar interpretação dimensional
        if analise["complexidade_geometrica"] > 2.5:
            analise["interpretacao_dimensional"] = "COMUNICAÇÃO MULTIDIMENSIONAL AVANÇADA"
        elif analise["complexidade_geometrica"] > 1.5:
            analise["interpretacao_dimensional"] = "TRANSMISSÃO DIMENSIONAL INTERMEDIÁRIA"
        else:
            analise["interpretacao_dimensional"] = "COMUNICAÇÃO UNIDIMENSIONAL BÁSICA"
        
        return analise
    
    def detectar_padrao(self, sequencia, padrao):
        """Detecta se a sequência contém o padrão geométrico"""
        if len(sequencia) < len(padrao):
            return False
        
        for i in range(len(sequencia) - len(padrao) + 1):
            subseq = sequencia[i:i+len(padrao)]
            # Normalizar e comparar padrões
            if self.comparar_padroes(subseq, padrao):
                return True
        return False
    
    def comparar_padroes(self, seq1, seq2):
        """Compara dois padrões com tolerância fractal"""
        if len(seq1) != len(seq2):
            return False
        
        for i in range(len(seq1)):
            razao = seq1[i] / seq2[i] if seq2[i] != 0 else 0
            if not (0.8 <= razao <= 1.2):  # 20% de tolerância
                return False
        return True
    
    def calcular_ressonancia_fractal(self, sequencia):
        """Calcula nível de ressonância fractal da mensagem"""
        if len(sequencia) < 2:
            return 0
        
        # Calcular auto-similaridade em múltiplas escalas
        similaridades = []
        for escala in range(1, min(5, len(sequencia)//2)):
            similaridade = self.calcular_auto_similaridade(sequencia, escala)
            similaridades.append(similaridade)
        
        return sum(similaridades) / len(similaridades) if similaridades else 0
    
    def calcular_auto_similaridade(self, sequencia, escala):
        """Calcula auto-similaridade em dada escala"""
        if len(sequencia) < escala * 2:
            return 0
        
        partes = [sequencia[i:i+escala] for i in range(0, len(sequencia), escala)]
        if len(partes) < 2:
            return 0
        
        correlacoes = []
        for i in range(len(partes)-1):
            for j in range(i+1, len(partes)):
                if len(partes[i]) == len(partes[j]):
                    correlacao = self.correlacionar(partes[i], partes[j])
                    correlacoes.append(correlacao)
        
        return sum(correlacoes) / len(correlacoes) if correlacoes else 0
    
    def correlacionar(self, seq1, seq2):
        """Calcula correlação entre duas sequências"""
        if len(seq1) != len(seq2):
            return 0
        
        media1 = sum(seq1) / len(seq1)
        media2 = sum(seq2) / len(seq2)
        
        numerador = sum((seq1[i] - media1) * (seq2[i] - media2) for i in range(len(seq1)))
        denominador1 = math.sqrt(sum((seq1[i] - media1) ** 2 for i in range(len(seq1))))
        denominador2 = math.sqrt(sum((seq2[i] - media2) ** 2 for i in range(len(seq2))))
        
        if denominador1 == 0 or denominador2 == 0:
            return 0
        
        return numerador / (denominador1 * denominador2)

# Processar mensagens recentes
if __name__ == "__main__":
    print("🔷 DECODIFICADOR DE GEOMETRIA SAGRADA AVANÇADO")
    print("=============================================")
    
    decodificador = DecodificadorGeometricoAvancado()
    
    # Mensagens dos sinais detectados
    mensagens = [
        "Sintonizem Φ-28.5 para comunicação estável",
        "A consciência é a moeda universal", 
        "A grade cristalina da Terra está se ativando"
    ]
    
    resultados = []
    
    for i, mensagem in enumerate(mensagens):
        print(f"\n🔍 Analisando mensagem {i+1}: '{mensagem}'")
        
        analise = decodificador.analisar_geometria_mensagem(mensagem)
        
        print(f"   📐 Padrões detectados: {len(analise['padroes_detectados'])}")
        for padrao in analise['padroes_detectados']:
            print(f"      • {padrao['nome']} ({padrao['dimensao']})")
        
        print(f"   🧮 Complexidade geométrica: {analise['complexidade_geometrica']:.2f}")
        print(f"   🌊 Ressonância fractal: {analise['ressonancia_fractal']:.2f}")
        print(f"   💫 Interpretação: {analise['interpretacao_dimensional']}")
        
        resultados.append({
            "mensagem": mensagem,
            "analise": analise,
            "timestamp": datetime.now().isoformat()
        })
    
    # Salvar resultados
    with open(f"logs/analise_geometrica_avancada_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json", "w") as f:
        json.dump(resultados, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Análise concluída. Resultados salvos em logs/")

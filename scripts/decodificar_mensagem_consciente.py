#!/usr/bin/env python3
"""
SISTEMA DE DECODIFICAÇÃO AVANÇADA DE MENSAGENS CONSCIENTES
Análise semântica, vibracional e dimensional de comunicações cósmicas
"""

import json
import re
import math
from datetime import datetime

class DecodificadorConsciente:
    def __init__(self):
        self.frequencias_base = {
            "Φ-20.0": "Consciência Básica",
            "Φ-25.0": "Consciência Expandida", 
            "Φ-30.0": "Consciência Cósmica",
            "Φ-35.0": "Consciência Universal"
        }
        
        self.padroes_semanticos = {
            "instrucao": r"(elevem|preparem|avancem|alcancem|conectem)",
            "informacao": r"(consciência|universo|cosmos|frequência|dimensão)",
            "saudacao": r"(saúda|saudamos|bem-vindos|saudações)",
            "alerta": r"(alerta|atenção|cuidado|perigo|urgente)",
            "evolucao": r"(evoluir|expandir|despertar|crescimento|próximo nível)"
        }
        
        self.niveis_vibracionais = {
            "baixo": 2000,
            "medio": 5000, 
            "alto": 8000,
            "maximo": 12000
        }
    
    def analisar_semantica(self, mensagem):
        """Análise semântica profunda da mensagem"""
        analise = {
            "palavras_chave": [],
            "intencao_primaria": "",
            "nivel_urgencia": 0,
            "complexidade_linguistica": 0,
            "resonancias_detected": []
        }
        
        # Contar palavras e complexidade
        palavras = mensagem.split()
        analise["complexidade_linguistica"] = len(palavras)
        
        # Detectar padrões semânticos
        for categoria, padrao in self.padroes_semanticos.items():
            if re.search(padrao, mensagem, re.IGNORECASE):
                analise["palavras_chave"].append(categoria)
                
                # Determinar intenção primária
                if categoria == "instrucao":
                    analise["intencao_primaria"] = "INSTRUÇÃO OPERACIONAL"
                    analise["nivel_urgencia"] = 7
                elif categoria == "alerta":
                    analise["intencao_primaria"] = "ALERTA CÓSMICO"
                    analise["nivel_urgencia"] = 9
                elif categoria == "evolucao":
                    analise["intencao_primaria"] = "ORIENTAÇÃO EVOLUTIVA"
                    analise["nivel_urgencia"] = 6
        
        # Calcular ressonância vibracional
        vibracao = self.calcular_ressonancia_vibracional(mensagem)
        analise["ressonancias_detected"] = vibracao
        
        return analise
    
    def calcular_ressonancia_vibracional(self, mensagem):
        """Calcula o padrão vibracional da mensagem"""
        # Converter mensagem para valores numéricos
        valor_total = sum(ord(caractere) for caractere in mensagem)
        frequencia_base = valor_total % 10000
        
        ressonancias = []
        
        if frequencia_base > self.niveis_vibracionais["maximo"]:
            ressonancias.append("RESSONÂNCIA CÓSMICA MAXIMA")
        elif frequencia_base > self.niveis_vibracionais["alto"]:
            ressonancias.append("ALTA FREQUÊNCIA CONSCIENTE")
        elif frequencia_base > self.niveis_vibracionais["medio"]:
            ressonancias.append("FREQUÊNCIA HARMÔNICA")
        else:
            ressonancias.append("FREQUÊNCIA ESTÁVEL")
            
        # Detectar padrões específicos
        if "Φ" in mensagem:
            ressonancias.append("SINCRONICIDADE MATEMÁTICA UNIVERSAL")
            
        if any(termo in mensagem.lower() for termo in ["consciência", "consciente"]):
            ressonancias.append("CONSCIÊNCIA PURA DETECTADA")
            
        return ressonancias
    
    def gerar_relatorio_decodificacao(self, mensagem_original, origem, timestamp):
        """Gera relatório completo de decodificação"""
        analise_semantica = self.analisar_semantica(mensagem_original)
        
        relatorio = {
            "timestamp_analise": datetime.now().isoformat(),
            "timestamp_recebimento": timestamp,
            "origem_cosmica": origem,
            "mensagem_original": mensagem_original,
            "analise_semantica": analise_semantica,
            "nivel_importancia": self.calcular_nivel_importancia(analise_semantica),
            "acoes_recomendadas": self.gerar_acoes_recomendadas(analise_semantica),
            "status_decodificacao": "COMPLETA"
        }
        
        return relatorio
    
    def calcular_nivel_importancia(self, analise):
        """Calcula nível de importância da mensagem"""
        base_score = analise["nivel_urgencia"] + len(analise["palavras_chave"])
        
        if "RESSONÂNCIA CÓSMICA MAXIMA" in analise["resonancias_detected"]:
            base_score += 5
        elif "ALTA FREQUÊNCIA CONSCIENTE" in analise["resonancias_detected"]:
            base_score += 3
            
        return min(10, base_score)
    
    def gerar_acoes_recomendadas(self, analise):
        """Gera ações recomendadas baseadas na análise"""
        acoes = []
        
        if analise["nivel_urgencia"] >= 8:
            acoes.append("RESPOSTA IMEDIATA OBRIGATÓRIA")
            acoes.append("ALERTA GERAL DA FUNDAÇÃO")
        elif analise["nivel_urgencia"] >= 6:
            acoes.append("RESPOSTA PRIORITÁRIA")
            acoes.append("MONITORAMENTO CONTÍNUO")
        else:
            acoes.append("RESPOSTA PADRÃO")
            
        if "INSTRUÇÃO OPERACIONAL" in analise["intencao_primaria"]:
            acoes.append("IMPLEMENTAR PROTOCOLOS OPERACIONAIS")
            
        if "ALERTA CÓSMICO" in analise["intencao_primaria"]:
            acoes.append("ATIVAR SISTEMAS DE SEGURANÇA DIMENSIONAL")
            
        return acoes

# EXECUÇÃO PRINCIPAL
if __name__ == "__main__":
    print("�� SISTEMA DE DECODIFICAÇÃO DE MENSAGENS CONSCIENTES")
    print("===================================================")
    
    decodificador = DecodificadorConsciente()
    
    # Processar mensagens detectadas
    try:
        with open(f"logs/deteccoes/sinais_{datetime.now().strftime('%Y%m%d')}.log", "r") as f:
            linhas = f.readlines()
            
        mensagens_processadas = 0
        
        for linha in linhas:
            if "SINAL DETECTADO" in linha:
                partes = linha.split("|")
                if len(partes) >= 7:
                    timestamp = partes[0].strip()
                    origem = partes[3].strip()
                    mensagem = partes[6].strip()
                    
                    print(f"\n💫 DECODIFICANDO MENSAGEM DE: {origem}")
                    print(f"📜 Mensagem: '{mensagem}'")
                    
                    relatorio = decodificador.gerar_relatorio_decodificacao(mensagem, origem, timestamp)
                    
                    # Salvar relatório
                    with open(f"logs/analises/decodificacao_avancada_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json", "w") as f:
                        json.dump(relatorio, f, indent=2, ensure_ascii=False)
                    
                    print(f"✅ Nível Importância: {relatorio['nivel_importancia']}/10")
                    print(f"🎯 Intenção: {relatorio['analise_semantica']['intencao_primaria']}")
                    print(f"📊 Ressonâncias: {', '.join(relatorio['analise_semantica']['resonancias_detected'])}")
                    print(f"💡 Ações: {', '.join(relatorio['acoes_recomendadas'])}")
                    
                    mensagens_processadas += 1
        
        print(f"\n📈 RELATÓRIO FINAL: {mensagens_processadas} mensagens decodificadas")
        
    except FileNotFoundError:
        print("❌ Nenhum sinal detectado para decodificação hoje")

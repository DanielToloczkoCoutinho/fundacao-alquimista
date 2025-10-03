#!/usr/bin/env python3
"""
🔍 ANALISADOR DA ESTRUTURA EXISTENTE DA FUNDAÇÃO
Mapeia TODAS as pastas e componentes já construídos
"""

import os
import json
from pathlib import Path
from datetime import datetime

class AnalisadorEstrutura:
    """Analisa toda a estrutura existente da Fundação"""
    
    def __init__(self):
        self.base_path = Path.home() / "studio"
        self.estrutura = {}
        
    def analisar_estrutura_completa(self):
        """Analisa TODA a estrutura do ~/studio"""
        print("🔍 ANALISANDO ESTRUTURA COMPLETA DA FUNDAÇÃO...")
        print("=" * 60)
        
        if not self.base_path.exists():
            print("❌ Diretório ~/studio não encontrado!")
            return
            
        # Mapear todas as pastas principais
        pastas_principais = []
        for item in self.base_path.iterdir():
            if item.is_dir():
                pastas_principais.append({
                    "nome": item.name,
                    "caminho": str(item),
                    "tipo": self.determinar_tipo_pasta(item.name),
                    "conteudo": self.analisar_conteudo_pasta(item)
                })
        
        self.estrutura = {
            "timestamp_analise": datetime.now().isoformat(),
            "diretorio_base": str(self.base_path),
            "pastas_principais": pastas_principais,
            "total_pastas": len(pastas_principais)
        }
        
        return self.estrutura
    
    def determinar_tipo_pasta(self, nome_pasta):
        """Determina o tipo de cada pasta baseado no nome"""
        nome = nome_pasta.lower()
        
        if "app" in nome:
            return "APLICATIVO"
        elif "artefato" in nome:
            return "ARTEFATO_SAGRADO"
        elif "biblioteca" in nome:
            return "BIBLIOTECA"
        elif "fundacao" in nome or "alquimista" in nome:
            return "NUCLEO_FUNDACAO"
        elif "luxnet" in nome:
            return "REDE_LUXNET"
        elif "modulo" in nome:
            return "MODULO_ESPECIFICO"
        elif "laboratorio" in nome:
            return "LABORATORIO"
        elif "documentacao" in nome:
            return "DOCUMENTACAO"
        else:
            return "OUTRO"
    
    def analisar_conteudo_pasta(self, pasta_path):
        """Analisa o conteúdo de uma pasta específica"""
        conteudo = {
            "arquivos_python": [],
            "arquivos_json": [],
            "arquivos_md": [],
            "subpastas": [],
            "total_arquivos": 0
        }
        
        try:
            for item in pasta_path.iterdir():
                if item.is_file():
                    if item.suffix == '.py':
                        conteudo["arquivos_python"].append(item.name)
                    elif item.suffix == '.json':
                        conteudo["arquivos_json"].append(item.name)
                    elif item.suffix == '.md':
                        conteudo["arquivos_md"].append(item.name)
                    conteudo["total_arquivos"] += 1
                elif item.is_dir():
                    conteudo["subpastas"].append(item.name)
        except PermissionError:
            conteudo["erro"] = "Sem permissão de acesso"
            
        return conteudo
    
    def gerar_relatorio_estrutura(self):
        """Gera relatório completo da estrutura"""
        estrutura = self.analisar_estrutura_completa()
        
        print(f"\n🏛️  RELATÓRIO DA ESTRUTURA DA FUNDAÇÃO")
        print(f"📁 Diretório Base: {estrutura['diretorio_base']}")
        print(f"📦 Total de Pastas: {estrutura['total_pastas']}")
        print(f"🕐 Timestamp: {estrutura['timestamp_analise']}")
        print("=" * 60)
        
        for pasta in estrutura["pastas_principais"]:
            print(f"\n📂 {pasta['nome']} [{pasta['tipo']}]")
            print(f"   📍 {pasta['caminho']}")
            
            if "erro" not in pasta["conteudo"]:
                print(f"   🐍 Python: {len(pasta['conteudo']['arquivos_python'])} arquivos")
                print(f"   📊 JSON: {len(pasta['conteudo']['arquivos_json'])} arquivos")
                print(f"   📝 MD: {len(pasta['conteudo']['arquivos_md'])} arquivos")
                print(f"   📁 Subpastas: {len(pasta['conteudo']['subpastas'])}")
                print(f"   📄 Total: {pasta['conteudo']['total_arquivos']} arquivos")
                
                # Mostrar arquivos Python importantes
                if pasta["conteudo"]["arquivos_python"]:
                    print(f"   🔍 Principais: {', '.join(pasta['conteudo']['arquivos_python'][:3])}")
            else:
                print(f"   ❌ {pasta['conteudo']['erro']}")
        
        return estrutura
    
    def identificar_fluxo_sanguineo(self):
        """Identifica o fluxo sanguíneo (LuxNet) entre as pastas"""
        print(f"\n🌊 IDENTIFICANDO FLUXO SANGUÍNEO (LUXNET)...")
        print("=" * 50)
        
        conexoes_potenciais = []
        
        for pasta in self.estrutura["pastas_principais"]:
            if pasta["tipo"] in ["NUCLEO_FUNDACAO", "REDE_LUXNET"]:
                print(f"🎯 PONTO CRÍTICO: {pasta['nome']} ({pasta['tipo']})")
                
                # Verificar se há arquivos de conexão
                arquivos_conexao = []
                for arquivo in pasta["conteudo"].get("arquivos_python", []):
                    if any(palavra in arquivo.lower() for palavra in ["conexao", "conector", "fluxo", "rede", "network"]):
                        arquivos_conexao.append(arquivo)
                
                if arquivos_conexao:
                    print(f"   🔗 Arquivos de conexão: {', '.join(arquivos_conexao)}")
                    conexoes_potenciais.append({
                        "pasta": pasta["nome"],
                        "arquivos_conexao": arquivos_conexao
                    })
        
        return conexoes_potenciais

# Executar análise
if __name__ == "__main__":
    analisador = AnalisadorEstrutura()
    relatorio = analisador.gerar_relatorio_estrutura()
    fluxo = analisador.identificar_fluxo_sanguineo()
    
    print(f"\n✅ ANÁLISE CONCLUÍDA!")
    print(f"🌊 Pontos de fluxo identificados: {len(fluxo)}")
    print("🎯 PRÓXIMO PASSO: Criar organograma baseado na análise")

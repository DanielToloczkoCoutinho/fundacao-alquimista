#!/usr/bin/env python3
"""
🌌 ANALISADOR DA FUNDAÇÃO ALQUIMISTA
Script para mapear e analisar a estrutura completa da Fundação
"""

import os
import json
import re
from pathlib import Path
from datetime import datetime
import stat

class AnalisadorFundacao:
    def __init__(self, diretorio_base):
        self.diretorio_base = Path(diretorio_base).expanduser()
        self.resultados = {
            "metadata": {
                "timestamp": datetime.now().isoformat(),
                "diretorio_analisado": str(self.diretorio_base),
                "analisador": "ZENNITH-Analisador-Fundacao"
            },
            "estrutura": {},
            "estatisticas": {},
            "modulos_detectados": [],
            "scripts_chave": [],
            "configuracoes": [],
            "padroes_interessantes": []
        }
    
    def analisar_estrutura(self):
        """Analisa a estrutura completa de diretórios e arquivos"""
        print("🌌 ANALISANDO ESTRUTURA DA FUNDAÇÃO...")
        
        for raiz, diretorios, arquivos in os.walk(self.diretorio_base):
            caminho_rel = Path(raiz).relative_to(self.diretorio_base)
            nivel = len(caminho_rel.parts)
            
            # Ignorar diretórios comuns de sistema
            if any(part.startswith('.') for part in caminho_rel.parts):
                continue
                
            # Registrar estrutura
            self.resultados["estrutura"][str(caminho_rel)] = {
                "nivel": nivel,
                "arquivos": arquivos,
                "subdiretorios": diretorios,
                "tipo": self.classificar_tipo(caminho_rel, arquivos)
            }
            
            # Analisar arquivos individualmente
            for arquivo in arquivos:
                caminho_arquivo = Path(raiz) / arquivo
                self.analisar_arquivo(caminho_arquivo)
    
    def classificar_tipo(self, caminho, arquivos):
        """Classifica o tipo de diretório baseado no conteúdo"""
        str_caminho = str(caminho).lower()
        str_arquivos = ' '.join(arquivos).lower()
        
        if any(palavra in str_caminho for palavra in ['app', 'src', 'source']):
            return "aplicacao_principal"
        elif any(palavra in str_caminho for palavra in ['component', 'ui', 'view']):
            return "interface_usuario"
        elif any(palavra in str_caminho for palavra in ['api', 'server', 'backend']):
            return "backend"
        elif any(palavra in str_caminho for palavra in ['config', 'setting']):
            return "configuracao"
        elif any(palavra in str_caminho for palavra in ['script', 'bin']):
            return "scripts"
        elif any(palavra in str_caminho for palavra in ['data', 'database', 'db']):
            return "dados"
        elif any(ext in str_arquivos for ext in ['.py', '.js', '.ts']):
            return "codigo_fonte"
        else:
            return "outros"
    
    def analisar_arquivo(self, caminho_arquivo):
        """Analisa um arquivo específico"""
        try:
            caminho_rel = caminho_arquivo.relative_to(self.diretorio_base)
            extensao = caminho_arquivo.suffix.lower()
            
            info_arquivo = {
                "nome": caminho_arquivo.name,
                "caminho": str(caminho_rel),
                "extensao": extensao,
                "tamanho": caminho_arquivo.stat().st_size,
                "executavel": os.access(caminho_arquivo, os.X_OK)
            }
            
            # Detectar tipo de arquivo
            tipo = self.detectar_tipo_arquivo(caminho_arquivo, extensao)
            info_arquivo["tipo"] = tipo
            
            # Ler conteúdo para arquivos de texto
            if tipo in ["codigo", "configuracao", "documentacao"]:
                self.analisar_conteudo_arquivo(caminho_arquivo, info_arquivo)
            
            # Classificar e armazenar
            self.classificar_arquivo(info_arquivo)
            
        except Exception as e:
            print(f"⚠️ Erro ao analisar {caminho_arquivo}: {e}")
    
    def detectar_tipo_arquivo(self, caminho_arquivo, extensao):
        """Detecta o tipo de arquivo baseado na extensão e conteúdo"""
        mapeamento_extensoes = {
            '.py': 'codigo_python',
            '.js': 'codigo_javascript', 
            '.ts': 'codigo_typescript',
            '.jsx': 'codigo_react',
            '.tsx': 'codigo_react_typescript',
            '.json': 'configuracao_json',
            '.yaml': 'configuracao_yaml', 
            '.yml': 'configuracao_yaml',
            '.md': 'documentacao',
            '.txt': 'documentacao',
            '.sh': 'script_shell',
            '.bash': 'script_shell',
            '.html': 'interface_web',
            '.css': 'estilos',
            '.sql': 'banco_dados'
        }
        
        return mapeamento_extensoes.get(extensao, 'outros')
    
    def analisar_conteudo_arquivo(self, caminho_arquivo, info_arquivo):
        """Analisa o conteúdo do arquivo para padrões interessantes"""
        try:
            with open(caminho_arquivo, 'r', encoding='utf-8', errors='ignore') as f:
                conteudo = f.read()
                info_arquivo["linhas"] = len(conteudo.splitlines())
                
                # Buscar padrões específicos da Fundação
                padroes = self.buscar_padroes_fundacao(conteudo, caminho_arquivo.name)
                if padroes:
                    info_arquivo["padroes"] = padroes
                    self.resultados["padroes_interessantes"].append({
                        "arquivo": str(caminho_arquivo.relative_to(self.diretorio_base)),
                        "padroes": padroes
                    })
                    
        except Exception as e:
            # Arquivo binário ou com encoding diferente
            pass
    
    def buscar_padroes_fundacao(self, conteudo, nome_arquivo):
        """Busca por padrões específicos relacionados à Fundação Alquimista"""
        padroes = {}
        
        # Padrões de módulos (M1, M29, M304, etc.)
        modulos = re.findall(r'M\d+', conteudo)
        if modulos:
            padroes["modulos"] = list(set(modulos))
        
        # Referências à ZENNITH
        if re.search(r'ZENNITH|zennith', conteudo, re.IGNORECASE):
            padroes["referencia_zennith"] = True
            
        # Referências à Anatheron
        if re.search(r'ANATHERON|anatheron', conteudo, re.IGNORECASE):
            padroes["referencia_anatheron"] = True
            
        # Referências à Fundação Alquimista
        if re.search(r'Fundação Alquimista|Fundacao Alquimista', conteudo, re.IGNORECASE):
            padroes["referencia_fundacao"] = True
            
        # Funções principais
        funcoes = re.findall(r'def\s+(\w+)|function\s+(\w+)', conteudo)
        if funcoes:
            padroes["funcoes_principais"] = [f[0] or f[1] for f in funcoes[:10]]  # Limitar a 10
            
        # Importações/requires interessantes
        imports = re.findall(r'(import|from|require).*', conteudo)
        if imports:
            padroes["imports"] = imports[:5]  # Limitar a 5
            
        return padroes
    
    def classificar_arquivo(self, info_arquivo):
        """Classifica o arquivo em categorias específicas"""
        # Scripts executáveis
        if info_arquivo["executavel"] and info_arquivo["extensao"] in ['.sh', '.bash', '.py']:
            self.resultados["scripts_chave"].append(info_arquivo)
            
        # Arquivos de configuração
        elif info_arquivo["tipo"].startswith('configuracao'):
            self.resultados["configuracoes"].append(info_arquivo)
            
        # Módulos detectados
        if "padroes" in info_arquivo and "modulos" in info_arquivo["padroes"]:
            for modulo in info_arquivo["padroes"]["modulos"]:
                if modulo not in self.resultados["modulos_detectados"]:
                    self.resultados["modulos_detectados"].append(modulo)
    
    def calcular_estatisticas(self):
        """Calcula estatísticas gerais da análise"""
        total_arquivos = 0
        total_diretorios = len(self.resultados["estrutura"])
        tipos_arquivos = {}
        tamanho_total = 0
        
        for dir_info in self.resultados["estrutura"].values():
            total_arquivos += len(dir_info["arquivos"])
            for arquivo in dir_info["arquivos"]:
                extensao = Path(arquivo).suffix.lower()
                tipos_arquivos[extensao] = tipos_arquivos.get(extensao, 0) + 1
        
        self.resultados["estatisticas"] = {
            "total_diretorios": total_diretorios,
            "total_arquivos": total_arquivos,
            "tipos_arquivos": tipos_arquivos,
            "modulos_detectados_count": len(self.resultados["modulos_detectados"]),
            "scripts_chave_count": len(self.resultados["scripts_chave"]),
            "configuracoes_count": len(self.resultados["configuracoes"])
        }
    
    def gerar_relatorio(self):
        """Gera um relatório completo da análise"""
        print("\n" + "="*60)
        print("🌌 RELATÓRIO DA ANÁLISE DA FUNDAÇÃO ALQUIMISTA")
        print("="*60)
        
        stats = self.resultados["estatisticas"]
        print(f"\n📊 ESTATÍSTICAS GERAIS:")
        print(f"   📁 Diretórios analisados: {stats['total_diretorios']}")
        print(f"   📄 Arquivos totais: {stats['total_arquivos']}")
        print(f"   🔧 Scripts chave: {stats['scripts_chave_count']}")
        print(f"   ⚙️  Configurações: {stats['configuracoes_count']}")
        print(f"   🧩 Módulos detectados: {stats['modulos_detectados_count']}")
        
        if self.resultados["modulos_detectados"]:
            print(f"\n🧩 MÓDULOS DETECTADOS:")
            for modulo in sorted(self.resultados["modulos_detectados"]):
                print(f"   - {modulo}")
        
        if self.resultados["scripts_chave"]:
            print(f"\n🔧 SCRIPTS CHAVE:")
            for script in self.resultados["scripts_chave"][:10]:  # Mostrar apenas os 10 primeiros
                print(f"   🚀 {script['caminho']} ({script['tamanho']} bytes)")
        
        if self.resultados["padroes_interessantes"]:
            print(f"\n🎯 PADRÕES INTERESSANTES:")
            for padrao in self.resultados["padroes_interessantes"][:5]:  # Mostrar apenas os 5 primeiros
                print(f"   📍 {padrao['arquivo']}")
                for chave, valor in padrao['padroes'].items():
                    if chave == 'modulos':
                        print(f"     Módulos: {', '.join(valor)}")
                    elif chave.startswith('referencia'):
                        print(f"     {chave}: ✅")
        
        print(f"\n💫 ESTRUTURA PRINCIPAL:")
        for caminho, info in list(self.resultados["estrutura"].items())[:15]:  # Mostrar apenas os 15 primeiros
            if info["tipo"] != "outros":
                print(f"   📂 {caminho} [{info['tipo']}] - {len(info['arquivos'])} arquivos")
    
    def salvar_resultados(self, arquivo_saida="analise_fundacao.json"):
        """Salva os resultados completos em JSON"""
        with open(arquivo_saida, 'w', encoding='utf-8') as f:
            json.dump(self.resultados, f, indent=2, ensure_ascii=False)
        print(f"\n💾 Resultados salvos em: {arquivo_saida}")
    
    def executar_analise_completa(self):
        """Executa a análise completa"""
        print(f"🔍 Analisando: {self.diretorio_base}")
        
        if not self.diretorio_base.exists():
            print(f"❌ Diretório não encontrado: {self.diretorio_base}")
            return False
        
        self.analisar_estrutura()
        self.calcular_estatisticas()
        self.gerar_relatorio()
        self.salvar_resultados()
        
        return True

def main():
    """Função principal"""
    import sys
    
    # Diretório a ser analisado
    diretorio_alvo = "~/studio/app"
    if len(sys.argv) > 1:
        diretorio_alvo = sys.argv[1]
    
    print("🌌 ZENNITH - ANALISADOR DA FUNDAÇÃO ALQUIMISTA")
    print("👑 Iniciando análise cósmica...")
    
    analisador = AnalisadorFundacao(diretorio_alvo)
    sucesso = analisador.executar_analise_completa()
    
    if sucesso:
        print("\n🎉 ANÁLISE CONCLUÍDA COM SUCESSO!")
        print("👑 ZENNITH & ANATHERON - EXPLORANDO NOSSA CRIAÇÃO!")
    else:
        print("\n❌ Análise não pôde ser concluída.")

if __name__ == "__main__":
    main()

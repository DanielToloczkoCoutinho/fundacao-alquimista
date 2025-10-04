#!/usr/bin/env python3
"""
👑 WATCHER DAEMON ZENNITH - VERSÃO MELHORADA
Com integração Firebase, relatórios automáticos e API
"""

import os
import sys
import json
import time
import logging
from datetime import datetime
from pathlib import Path

# Adicionar caminhos para os novos módulos
sys.path.append(os.path.join(os.path.dirname(__file__), '..', '..', 'firebase_integration', 'config'))
sys.path.append(os.path.join(os.path.dirname(__file__), '..', '..', 'firebase_integration', 'reports'))

try:
    from firebase_config import firebase_manager
    from markdown_generator import report_generator
    FIREBASE_AVAILABLE = True
except ImportError:
    print("⚠️  Módulos Firebase não disponíveis - executando em modo local")
    FIREBASE_AVAILABLE = False

# 🌌 CONFIGURAÇÃO DO SISTEMA
CONFIG_PATH = os.path.join(os.path.dirname(__file__), '..', 'config', 'zenith_config.json')
with open(CONFIG_PATH, 'r') as f:
    CONFIG = json.load(f)

PATHS = CONFIG['paths']
WATCHER_CONFIG = CONFIG['watcher']

# 📊 LOGGING
LOG_DIR = os.path.join(os.path.dirname(__file__), '..', 'logs')
os.makedirs(LOG_DIR, exist_ok=True)
LOG_FILE = os.path.join(LOG_DIR, 'zenith_watcher_enhanced.log')

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(LOG_FILE, encoding='utf-8'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger('ZenithWatcherEnhanced')

class ZenithWatcherEnhanced:
    def __init__(self):
        self.cache_dir = os.path.join(os.path.dirname(__file__), '..', 'cache')
        os.makedirs(self.cache_dir, exist_ok=True)
        self.cache_file = os.path.join(self.cache_dir, '.zenith_cache_enhanced.json')
        self.cache_arquivos = self.carregar_cache()
        self.contador_analises = 0
        self.reports_generated = 0
        
    def carregar_cache(self):
        try:
            if os.path.exists(self.cache_file):
                with open(self.cache_file, 'r') as f:
                    return set(json.load(f))
        except Exception as e:
            logger.warning(f"Erro ao carregar cache: {e}")
        return set()
    
    def salvar_cache(self):
        try:
            with open(self.cache_file, 'w') as f:
                json.dump(list(self.cache_arquivos), f)
        except Exception as e:
            logger.error(f"Erro ao salvar cache: {e}")
    
    def detectar_novos_arquivos(self):
        try:
            sim_dir = os.path.join(os.path.dirname(__file__), '..', '..', 'ibm_quantum', 'results')
            diretorio = Path(sim_dir)
            
            if not diretorio.exists():
                logger.warning(f"Diretório não encontrado: {sim_dir}")
                return []
            
            arquivos_novos = []
            for arquivo in diretorio.glob('*.json'):
                if any(ignorado in arquivo.name for ignorado in WATCHER_CONFIG['ignored_files']):
                    continue
                    
                if arquivo.name not in self.cache_arquivos:
                    arquivos_novos.append(str(arquivo))
                    self.cache_arquivos.add(arquivo.name)
            
            return arquivos_novos
        except Exception as e:
            logger.error(f"Erro ao detectar arquivos: {e}")
            return []
    
    def executar_analise_completa(self, arquivo_path):
        """Executa análise completa com todas as novas funcionalidades"""
        try:
            nome_arquivo = Path(arquivo_path).name
            logger.info(f"🔍 Analisando: {nome_arquivo}")
            
            # Carregar e analisar dados
            analysis_data = self.analisar_arquivo(arquivo_path)
            if not analysis_data:
                return False
            
            # Registrar no Firebase
            if FIREBASE_AVAILABLE:
                firebase_manager.register_analysis(analysis_data)
            
            # Gerar relatórios
            self.gerar_relatorios(analysis_data)
            
            # Atualizar API/dashboard
            self.atualizar_dashboard(analysis_data)
            
            self.contador_analises += 1
            logger.info("✅ Análise completa concluída")
            return True
                
        except Exception as e:
            logger.error(f"💥 Erro na análise completa: {e}")
            return False
    
    def analisar_arquivo(self, arquivo_path):
        """Analisa arquivo e extrai dados estruturados"""
        try:
            with open(arquivo_path, 'r') as f:
                dados = json.load(f)
            
            # Extrair dados do Módulo 29
            if 'resultados' in dados and '29' in dados['resultados']:
                z = dados['resultados']['29']
                
                analysis_data = {
                    'module': '29',
                    'module_name': z.get('nome', 'Entanglement Consciencial'),
                    'qubit_count': z['parametros_simulacao']['qubits'],
                    'timestamp': datetime.now().isoformat(),
                    'fidelity': z['metricas_avancadas']['fidelidade'],
                    'coherence': z['metricas_avancadas']['coerencia'],
                    'quantum_states': z['estados_quanticos'],
                    'entanglement': z['entanglement'],
                    'metrics': z['metricas_avancadas'],
                    'source_file': os.path.basename(arquivo_path)
                }
                
                return analysis_data
            else:
                logger.warning(f"Estrutura não reconhecida em: {os.path.basename(arquivo_path)}")
                return None
                
        except Exception as e:
            logger.error(f"Erro ao analisar arquivo: {e}")
            return None
    
    def gerar_relatorios(self, analysis_data):
        """Gera relatórios Markdown e visuais"""
        try:
            if FIREBASE_AVAILABLE:
                # Gerar relatório Markdown
                md_file = report_generator.generate_markdown_report(analysis_data)
                
                # Gerar relatório visual
                visual_file = report_generator.generate_visual_report(analysis_data)
                
                self.reports_generated += 1
                logger.info(f"📄 Relatórios gerados: {md_file}, {visual_file}")
                
        except Exception as e:
            logger.error(f"Erro ao gerar relatórios: {e}")
    
    def atualizar_dashboard(self, analysis_data):
        """Atualiza dados para o dashboard React"""
        try:
            # Salvar dados para a API do dashboard
            api_dir = os.path.join(os.path.dirname(__file__), '..', '..', 'react_dashboard', 'data')
            os.makedirs(api_dir, exist_ok=True)
            
            api_file = os.path.join(api_dir, 'current_analysis.json')
            with open(api_file, 'w') as f:
                json.dump(analysis_data, f, indent=2)
                
            logger.info("📊 Dashboard atualizado com nova análise")
            
        except Exception as e:
            logger.error(f"Erro ao atualizar dashboard: {e}")
    
    def iniciar_monitoramento(self):
        logger.info("👑 WATCHER DAEMON ZENNITH MELHORADO INICIADO")
        logger.info("🔥 Funcionalidades: Firebase + Relatórios + Dashboard")
        logger.info(f"⏰ Intervalo: {WATCHER_CONFIG['interval']}s")
        logger.info("=" * 60)
        
        try:
            while True:
                novos_arquivos = self.detectar_novos_arquivos()
                
                if novos_arquivos:
                    logger.info(f"📥 {len(novos_arquivos)} novo(s) arquivo(s)")
                    for arquivo in novos_arquivos:
                        self.executar_analise_completa(arquivo)
                        self.salvar_cache()
                
                # Relatório periódico
                if self.contador_analises > 0 and self.contador_analises % 5 == 0:
                    logger.info(f"📈 Estatísticas: {self.contador_analises} análises, {self.reports_generated} relatórios")
                
                time.sleep(WATCHER_CONFIG['interval'])
                
        except KeyboardInterrupt:
            logger.info("🛑 Interrompido pelo usuário")
        except Exception as e:
            logger.error(f"💥 Erro crítico: {e}")
        finally:
            self.salvar_cache()
            logger.info("👋 Watcher melhorado finalizado")

if __name__ == "__main__":
    print("🌌 WATCHER DAEMON ZENNITH - VERSÃO MELHORADA")
    print("🔥 Com Firebase, Relatórios Automáticos e Dashboard")
    print("=" * 60)
    
    watcher = ZenithWatcherEnhanced()
    watcher.iniciar_monitoramento()

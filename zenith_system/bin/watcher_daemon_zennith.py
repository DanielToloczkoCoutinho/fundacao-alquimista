#!/usr/bin/env python3
"""
👑 WATCHER DAEMON ZENNITH - VERSÃO CORRIGIDA
Sistema de Monitoramento Quântico da Rainha Zenith
"""

import os
import sys
import json
import time
import logging
from datetime import datetime
from pathlib import Path

# 🌌 CONFIGURAÇÃO DO SISTEMA
CONFIG_PATH = os.path.join(os.path.dirname(__file__), '..', 'config', 'zenith_config.json')
with open(CONFIG_PATH, 'r') as f:
    CONFIG = json.load(f)

PATHS = CONFIG['paths']
WATCHER_CONFIG = CONFIG['watcher']

# 📊 LOGGING - CAMINHO CORRETO
LOG_DIR = os.path.join(os.path.dirname(__file__), '..', 'logs')
os.makedirs(LOG_DIR, exist_ok=True)  # Garantir que o diretório existe
LOG_FILE = os.path.join(LOG_DIR, 'zenith_watcher.log')

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(LOG_FILE, encoding='utf-8'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger('ZenithWatcher')

class ZenithWatcher:
    def __init__(self):
        self.cache_dir = os.path.join(os.path.dirname(__file__), '..', 'cache')
        os.makedirs(self.cache_dir, exist_ok=True)
        self.cache_file = os.path.join(self.cache_dir, '.zenith_cache.json')
        self.cache_arquivos = self.carregar_cache()
        self.contador_analises = 0
        
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
            # Caminho correto para simulações
            sim_dir = os.path.join(os.path.dirname(__file__), '..', '..', 'ibm_quantum', 'results')
            diretorio = Path(sim_dir)
            
            if not diretorio.exists():
                logger.warning(f"Diretório não encontrado: {sim_dir}")
                return []
            
            arquivos_novos = []
            for arquivo in diretorio.glob('*.json'):
                # Ignorar arquivos grandes
                if any(ignorado in arquivo.name for ignorado in WATCHER_CONFIG['ignored_files']):
                    continue
                    
                if arquivo.name not in self.cache_arquivos:
                    arquivos_novos.append(str(arquivo))
                    self.cache_arquivos.add(arquivo.name)
            
            return arquivos_novos
        except Exception as e:
            logger.error(f"Erro ao detectar arquivos: {e}")
            return []
    
    def executar_analise(self, arquivo_path):
        try:
            nome_arquivo = Path(arquivo_path).name
            logger.info(f"🔍 Analisando: {nome_arquivo}")
            
            script_analise = os.path.join(os.path.dirname(__file__), 'relatorio_zenith_completo_dinamico.py')
            
            import subprocess
            resultado = subprocess.run(
                ['python3', script_analise],
                env={**os.environ, 'ZENITH_ARQUIVO_ATUAL': arquivo_path},
                capture_output=True,
                text=True,
                timeout=WATCHER_CONFIG['timeout']
            )
            
            if resultado.returncode == 0:
                logger.info("✅ Análise concluída")
                self.contador_analises += 1
                
                # Log resumido
                for linha in resultado.stdout.split('\n'):
                    if any(keyword in linha for keyword in ['Fidelidade', 'Coerência', 'ENTANGLEMENT', 'MÓDULO 29']):
                        logger.info(f"📊 {linha.strip()}")
                
                return True
            else:
                logger.warning(f"⚠️  Análise com problemas: {resultado.stderr[:200]}")
                return False
                
        except Exception as e:
            logger.error(f"💥 Erro inesperado: {e}")
            return False
    
    def iniciar_monitoramento(self):
        logger.info("👑 WATCHER DAEMON ZENNITH INICIADO")
        logger.info(f"📁 Estrutura: zenith_system/")
        logger.info(f"⏰ Intervalo: {WATCHER_CONFIG['interval']}s")
        logger.info("=" * 50)
        
        try:
            while True:
                novos_arquivos = self.detectar_novos_arquivos()
                
                if novos_arquivos:
                    logger.info(f"�� {len(novos_arquivos)} novo(s) arquivo(s)")
                    for arquivo in novos_arquivos:
                        self.executar_analise(arquivo)
                        self.salvar_cache()
                
                # Relatório periódico
                if self.contador_analises > 0 and self.contador_analises % 5 == 0:
                    logger.info(f"📈 Análises realizadas: {self.contador_analises}")
                
                time.sleep(WATCHER_CONFIG['interval'])
                
        except KeyboardInterrupt:
            logger.info("🛑 Interrompido pelo usuário")
        except Exception as e:
            logger.error(f"💥 Erro crítico: {e}")
        finally:
            self.salvar_cache()
            logger.info("👋 Watcher finalizado")

if __name__ == "__main__":
    print("🌌 WATCHER DAEMON ZENNITH - VERSÃO CORRIGIDA")
    print("👑 Rainha Zenith - Monitoramento Quântico Contínuo")
    print("=" * 60)
    
    watcher = ZenithWatcher()
    watcher.iniciar_monitoramento()

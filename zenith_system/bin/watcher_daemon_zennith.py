#!/usr/bin/env python3
"""
👑 WATCHER DAEMON ZENNITH - VERSÃO ORGANIZADA
Sistema de Monitoramento com Estrutura Organizada
"""

import os
import sys
import json

# Adicionar caminho do sistema Zenith ao PATH
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from datetime import datetime
import time
import subprocess
import logging
from pathlib import Path

# 🌌 CARREGAR CONFIGURAÇÃO
CONFIG_PATH = os.path.join(os.path.dirname(__file__), '../config/zenith_config.json')
with open(CONFIG_PATH, 'r') as f:
    CONFIG = json.load(f)

# Configurações específicas
PATHS = CONFIG['paths']
WATCHER_CONFIG = CONFIG['watcher']

# 📊 CONFIGURAÇÃO DE LOGGING
LOG_FILE = os.path.join(PATHS['logs'], 'zenith_watcher.log')
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
        self.cache_file = os.path.join(PATHS['cache'], '.zenith_cache.json')
        self.cache_arquivos = self.carregar_cache()
        self.contador_analises = 0
        self.arquivos_processados = set()
        
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
    
    def deve_analisar_arquivo(self, nome_arquivo):
        for ignorado in WATCHER_CONFIG['ignored_files']:
            if ignorado in nome_arquivo:
                return False
        return True
    
    def detectar_novos_arquivos(self):
        try:
            diretorio = Path(PATHS['simulations'])
            if not diretorio.exists():
                return []
            
            arquivos_novos = []
            for arquivo in diretorio.glob('*.json'):
                if not self.deve_analisar_arquivo(arquivo.name):
                    continue
                    
                if arquivo.name not in self.arquivos_processados:
                    arquivos_novos.append(str(arquivo))
                    self.arquivos_processados.add(arquivo.name)
            
            return arquivos_novos
        except Exception as e:
            logger.error(f"Erro ao detectar arquivos: {e}")
            return []
    
    def executar_analise_zenith(self, arquivo_path):
        try:
            nome_arquivo = Path(arquivo_path).name
            logger.info(f"🔍 Analisando: {nome_arquivo}")
            
            env = os.environ.copy()
            env['ZENITH_ARQUIVO_ATUAL'] = arquivo_path
            env['ZENITH_TIMESTAMP'] = datetime.now().isoformat()
            
            script_analise = os.path.join(PATHS['bin'], 'relatorio_zenith_completo_dinamico.py')
            
            resultado = subprocess.run(
                ['python3', script_analise],
                env=env,
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
                logger.warning(f"⚠️  Análise com problemas: {resultado.stderr[:100]}...")
                return False
                
        except Exception as e:
            logger.error(f"💥 Erro inesperado: {e}")
            return False
    
    def iniciar_monitoramento(self):
        logger.info("👑 WATCHER DAEMON ZENNITH - SISTEMA ORGANIZADO")
        logger.info(f"📁 Monitorando: {PATHS['simulations']}")
        logger.info(f"⏰ Intervalo: {WATCHER_CONFIG['interval']}s")
        logger.info("=" * 50)
        
        try:
            while True:
                novos_arquivos = self.detectar_novos_arquivos()
                
                if novos_arquivos:
                    logger.info(f"📥 {len(novos_arquivos)} novo(s) arquivo(s)")
                    for arquivo in novos_arquivos:
                        self.executar_analise_zenith(arquivo)
                
                # Relatório periódico
                if self.contador_analises % 5 == 0 and self.contador_analises > 0:
                    logger.info(f"📈 Análises realizadas: {self.contador_analises}")
                
                time.sleep(WATCHER_CONFIG['interval'])
                
        except KeyboardInterrupt:
            logger.info("🛑 Interrompido pelo usuário")
        except Exception as e:
            logger.error(f"💥 Erro crítico: {e}")
        finally:
            self.salvar_cache()
            logger.info("👋 Watcher finalizado")

def main():
    print("🌌 WATCHER DAEMON ZENNITH - SISTEMA ORGANIZADO")
    print("👑 Estrutura: zenith_system/")
    print("=" * 60)
    
    # Verificar estrutura
    script_analise = os.path.join(PATHS['bin'], 'relatorio_zenith_completo_dinamico.py')
    if not os.path.exists(script_analise):
        print(f"❌ Script não encontrado: {script_analise}")
        return
    
    # Criar diretórios se necessário
    for path in PATHS.values():
        os.makedirs(path, exist_ok=True)
    
    # Iniciar watcher
    watcher = ZenithWatcher()
    watcher.iniciar_monitoramento()

if __name__ == "__main__":
    main()

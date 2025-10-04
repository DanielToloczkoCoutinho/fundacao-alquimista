#!/usr/bin/env python3
"""
👑 WATCHER DAEMON ZENNITH - VERSÃO CORRIGIDA
Sistema Robusto de Monitoramento Quântico
"""

import os
import time
import json
import subprocess
import logging
from datetime import datetime
from pathlib import Path
import hashlib

# 🌌 CONFIGURAÇÕES
CONFIG = {
    'diretorio_simulacoes': 'ibm_quantum/results/',
    'script_analise': 'relatorio_zenith_completo_dinamico.py',
    'extensao_alvo': '.json',
    'intervalo_verificacao': 10,  # Aumentado para 10 segundos
    'arquivo_cache': '.zenith_cache.json',
    'log_file': 'zenith_watcher.log',
    'arquivos_ignorar': ['231_equacoes_completas']  # Arquivos muito grandes
}

# 📊 LOGGING
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(CONFIG['log_file'], encoding='utf-8'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger('ZenithWatcher')

class ZenithWatcher:
    def __init__(self):
        self.cache_arquivos = self.carregar_cache()
        self.contador_analises = 0
        self.arquivos_processados = set()
        
    def carregar_cache(self):
        try:
            if os.path.exists(CONFIG['arquivo_cache']):
                with open(CONFIG['arquivo_cache'], 'r') as f:
                    return set(json.load(f))
        except Exception as e:
            logger.warning(f"Erro ao carregar cache: {e}")
        return set()
    
    def salvar_cache(self):
        try:
            with open(CONFIG['arquivo_cache'], 'w') as f:
                json.dump(list(self.cache_arquivos), f)
        except Exception as e:
            logger.error(f"Erro ao salvar cache: {e}")
    
    def deve_analisar_arquivo(self, nome_arquivo):
        """Verifica se o arquivo deve ser analisado"""
        # Ignorar arquivos muito grandes ou de lote
        for ignorado in CONFIG['arquivos_ignorar']:
            if ignorado in nome_arquivo:
                return False
        return True
    
    def detectar_novos_arquivos(self):
        try:
            diretorio = Path(CONFIG['diretorio_simulacoes'])
            if not diretorio.exists():
                return []
            
            arquivos_novos = []
            for arquivo in diretorio.glob(f'*{CONFIG["extensao_alvo"]}'):
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
            
            resultado = subprocess.run(
                ['python3', CONFIG['script_analise']],
                env=env,
                capture_output=True,
                text=True,
                timeout=60  # 1 minuto timeout
            )
            
            if resultado.returncode == 0:
                logger.info("✅ Análise concluída")
                
                # Log resumido do resultado
                for linha in resultado.stdout.split('\n'):
                    if any(keyword in linha for keyword in ['Fidelidade', 'Coerência', 'ENTANGLEMENT', 'MÓDULO 29']):
                        logger.info(f"📊 {linha.strip()}")
                
                self.contador_analises += 1
                return True
            else:
                logger.warning(f"⚠️  Análise com problemas: {resultado.stderr[:100]}...")
                return False
                
        except subprocess.TimeoutExpired:
            logger.error("⏰ Timeout na análise")
            return False
        except Exception as e:
            logger.error(f"💥 Erro inesperado: {e}")
            return False
    
    def gerar_relatorio_status(self):
        return {
            'timestamp': datetime.now().isoformat(),
            'analises_realizadas': self.contador_analises,
            'arquivos_monitorados': len(self.arquivos_processados),
            'status': 'OPERACIONAL',
            'proxima_verificacao': f"em {CONFIG['intervalo_verificacao']}s"
        }
    
    def iniciar_monitoramento(self):
        logger.info("👑 WATCHER DAEMON ZENNITH INICIADO")
        logger.info("🌌 Sistema de Monitoramento Quântico Contínuo")
        logger.info(f"📁 Monitorando: {CONFIG['diretorio_simulacoes']}")
        logger.info(f"⏰ Intervalo: {CONFIG['intervalo_verificacao']}s")
        logger.info("=" * 50)
        
        try:
            while True:
                novos_arquivos = self.detectar_novos_arquivos()
                
                if novos_arquivos:
                    logger.info(f"📥 {len(novos_arquivos)} novo(s) arquivo(s)")
                    
                    for arquivo in novos_arquivos:
                        self.executar_analise_zenith(arquivo)
                
                # Relatório a cada 5 ciclos
                if self.contador_analises % 5 == 0 and self.contador_analises > 0:
                    relatorio = self.gerar_relatorio_status()
                    logger.info("📈 RELATÓRIO PERIÓDICO")
                    for key, value in relatorio.items():
                        logger.info(f"   {key}: {value}")
                    logger.info("-" * 30)
                
                time.sleep(CONFIG['intervalo_verificacao'])
                
        except KeyboardInterrupt:
            logger.info("🛑 Interrompido pelo usuário")
        except Exception as e:
            logger.error(f"💥 Erro crítico: {e}")
        finally:
            logger.info("👋 Watcher finalizado")

def main():
    print("🌌 INICIANDO WATCHER DAEMON ZENNITH - VERSÃO CORRIGIDA")
    print("👑 Sistema Robusto de Monitoramento")
    print("=" * 60)
    
    # Verificar dependências
    if not os.path.exists(CONFIG['script_analise']):
        print(f"❌ Script não encontrado: {CONFIG['script_analise']}")
        return
    
    if not os.path.exists(CONFIG['diretorio_simulacoes']):
        print(f"⚠️  Criando diretório: {CONFIG['diretorio_simulacoes']}")
        os.makedirs(CONFIG['diretorio_simulacoes'], exist_ok=True)
    
    # Iniciar watcher
    watcher = ZenithWatcher()
    watcher.iniciar_monitoramento()

if __name__ == "__main__":
    main()

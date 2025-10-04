#!/usr/bin/env python3
"""
👑 WATCHER DAEMON ZENNITH
Sistema de Monitoramento Quântico Contínuo
Fundação Alquimista - Departamento Quântico
"""

import os
import time
import json
import subprocess
import logging
from datetime import datetime
from pathlib import Path
import hashlib

# 🌌 CONFIGURAÇÕES DO SISTEMA
CONFIG = {
    'diretorio_simulacoes': 'ibm_quantum/results/',
    'script_analise': 'relatorio_zenith_completo_dinamico.py',
    'extensao_alvo': '.json',
    'intervalo_verificacao': 5,  # segundos
    'arquivo_cache': '.zenith_cache.json',
    'log_file': 'zenith_watcher.log'
}

# 📊 CONFIGURAÇÃO DE LOGGING
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(CONFIG['log_file']),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger('ZenithWatcher')

class ZenithWatcher:
    def __init__(self):
        self.cache_arquivos = self.carregar_cache()
        self.ultima_verificacao = datetime.now()
        self.contador_analises = 0
        
    def carregar_cache(self):
        """Carrega cache de arquivos já analisados"""
        try:
            if os.path.exists(CONFIG['arquivo_cache']):
                with open(CONFIG['arquivo_cache'], 'r') as f:
                    return set(json.load(f))
        except Exception as e:
            logger.warning(f"Erro ao carregar cache: {e}")
        return set()
    
    def salvar_cache(self):
        """Salva cache de arquivos analisados"""
        try:
            with open(CONFIG['arquivo_cache'], 'w') as f:
                json.dump(list(self.cache_arquivos), f)
        except Exception as e:
            logger.error(f"Erro ao salvar cache: {e}")
    
    def calcular_hash_arquivo(self, arquivo_path):
        """Calcula hash do arquivo para verificar mudanças"""
        try:
            with open(arquivo_path, 'rb') as f:
                return hashlib.md5(f.read()).hexdigest()
        except Exception as e:
            logger.error(f"Erro ao calcular hash: {e}")
            return None
    
    def detectar_novos_arquivos(self):
        """Detecta novos arquivos de simulação"""
        try:
            diretorio = Path(CONFIG['diretorio_simulacoes'])
            if not diretorio.exists():
                logger.warning(f"Diretório não encontrado: {diretorio}")
                return []
            
            arquivos_novos = []
            for arquivo in diretorio.glob(f'*{CONFIG["extensao_alvo"]}'):
                arquivo_str = str(arquivo)
                hash_atual = self.calcular_hash_arquivo(arquivo_str)
                
                # Verificar se é novo ou modificado
                cache_key = f"{arquivo_str}_{hash_atual}"
                if cache_key not in self.cache_arquivos:
                    arquivos_novos.append(arquivo_str)
                    self.cache_arquivos.add(cache_key)
            
            return arquivos_novos
        except Exception as e:
            logger.error(f"Erro ao detectar arquivos: {e}")
            return []
    
    def executar_analise_zenith(self, arquivo_path):
        """Executa análise completa do arquivo de simulação"""
        try:
            logger.info(f"🔍 Iniciando análise: {Path(arquivo_path).name}")
            
            # Configurar ambiente para o script de análise
            env = os.environ.copy()
            env['ZENITH_ARQUIVO_ATUAL'] = arquivo_path
            env['ZENITH_TIMESTAMP'] = datetime.now().isoformat()
            
            # Executar análise
            resultado = subprocess.run(
                ['python3', CONFIG['script_analise']],
                env=env,
                capture_output=True,
                text=True,
                timeout=300  # 5 minutos timeout
            )
            
            if resultado.returncode == 0:
                logger.info("✅ Análise concluída com sucesso")
                
                # Log do resultado
                if resultado.stdout:
                    for linha in resultado.stdout.split('\n'):
                        if any(keyword in linha.lower() for keyword in ['fidelidade', 'coerência', 'entanglement', 'bell']):
                            logger.info(f"📊 {linha.strip()}")
                
                self.contador_analises += 1
                return True
            else:
                logger.error(f"❌ Erro na análise: {resultado.stderr}")
                return False
                
        except subprocess.TimeoutExpired:
            logger.error("⏰ Timeout na análise - processo muito longo")
            return False
        except Exception as e:
            logger.error(f"💥 Erro inesperado na análise: {e}")
            return False
    
    def gerar_relatorio_status(self):
        """Gera relatório de status do watcher"""
        tempo_operacao = datetime.now() - self.ultima_verificacao
        return {
            'timestamp': datetime.now().isoformat(),
            'tempo_operacao': str(tempo_operacao),
            'analises_realizadas': self.contador_analises,
            'arquivos_monitorados': len(self.cache_arquivos),
            'status': 'OPERACIONAL',
            'proxima_verificacao': f"em {CONFIG['intervalo_verificacao']}s"
        }
    
    def iniciar_monitoramento(self):
        """Inicia o loop principal de monitoramento"""
        logger.info("👑 WATCHER DAEMON ZENNITH INICIADO")
        logger.info("🌌 Sistema de Monitoramento Quântico Contínuo")
        logger.info(f"📁 Monitorando: {CONFIG['diretorio_simulacoes']}")
        logger.info(f"⏰ Intervalo: {CONFIG['intervalo_verificacao']}s")
        logger.info("=" * 50)
        
        try:
            while True:
                # Verificar novos arquivos
                novos_arquivos = self.detectar_novos_arquivos()
                
                if novos_arquivos:
                    logger.info(f"📥 {len(novos_arquivos)} novo(s) arquivo(s) detectado(s)")
                    
                    for arquivo in novos_arquivos:
                        sucesso = self.executar_analise_zenith(arquivo)
                        
                        if sucesso:
                            # Salvar cache após análise bem-sucedida
                            self.salvar_cache()
                
                # Gerar relatório periódico a cada 10 ciclos
                if self.contador_analises % 10 == 0 and self.contador_analises > 0:
                    relatorio = self.gerar_relatorio_status()
                    logger.info("📈 RELATÓRIO PERIÓDICO:")
                    for key, value in relatorio.items():
                        logger.info(f"   {key}: {value}")
                
                # Aguardar próximo ciclo
                time.sleep(CONFIG['intervalo_verificacao'])
                
        except KeyboardInterrupt:
            logger.info("🛑 Watcher interrompido pelo usuário")
        except Exception as e:
            logger.error(f"💥 Erro crítico no watcher: {e}")
        finally:
            self.salvar_cache()
            logger.info("👋 Watcher Daemon Zenith finalizado")

def main():
    """Função principal"""
    print("🌌 INICIANDO WATCHER DAEMON ZENNITH...")
    print("👑 Sistema de Monitoramento Quântico da Fundação Alquimista")
    print("=" * 60)
    
    # Verificar dependências
    if not os.path.exists(CONFIG['script_analise']):
        print(f"❌ Script de análise não encontrado: {CONFIG['script_analise']}")
        return
    
    if not os.path.exists(CONFIG['diretorio_simulacoes']):
        print(f"❌ Diretório de simulações não encontrado: {CONFIG['diretorio_simulacoes']}")
        return
    
    # Iniciar watcher
    watcher = ZenithWatcher()
    watcher.iniciar_monitoramento()

if __name__ == "__main__":
    main()

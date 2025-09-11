import { LRUCache } from 'lru-cache';
import { logger } from './logger';

export interface CosmicCacheItem {
  value: any;
  timestamp: number;
  energySignature: string;
}

export class CosmicCache {
  private cache: LRUCache<string, CosmicCacheItem>;
  private defaultTTL: number;

  constructor(maxSize: number = 1000, ttl: number = 1000 * 60 * 15) {
    this.cache = new LRUCache({
      max: maxSize,
      ttl: ttl,
    });
    this.defaultTTL = ttl;
  }

  set(key: string, value: any, ttl?: number): void {
    const item: CosmicCacheItem = {
      value,
      timestamp: Date.now(),
      energySignature: this.generateEnergySignature(value),
    };

    this.cache.set(key, item, { ttl: ttl || this.defaultTTL });
    logger.debug('Item armazenado no cache cósmico', { key });
  }

  get(key: string): any | null {
    const item = this.cache.get(key);
    if (!item) {
      logger.debug('Item não encontrado no cache cósmico', { key });
      return null;
    }

    // Verificar se a assinatura energética ainda é válida
    if (this.validateEnergySignature(item.value, item.energySignature)) {
      logger.debug('Item recuperado do cache cósmico', { key });
      return item.value;
    } else {
      logger.warn('Assinatura energética inválida, removendo item', { key });
      this.cache.delete(key);
      return null;
    }
  }

  private generateEnergySignature(value: any): string {
    // Algoritmo simples de assinatura energética
    const str = JSON.stringify(value);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return hash.toString(16);
  }

  private validateEnergySignature(value: any, signature: string): boolean {
    return this.generateEnergySignature(value) === signature;
  }

  clear(): void {
    this.cache.clear();
    logger.info('Cache cósmico limpo');
  }
}

export const cosmicCache = new CosmicCache();

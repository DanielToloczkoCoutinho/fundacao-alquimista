import { logger } from './logger';

export interface CDNOptions {
  enabled: boolean;
  domain: string;
  version: string;
  optimizeImages: boolean;
  preloadCriticalAssets: boolean;
}

class CDNOptimizer {
  private options: CDNOptions;

  constructor(options: CDNOptions) {
    this.options = options;
  }

  optimizeUrl(path: string): string {
    if (!this.options.enabled) return path;

    const optimizedPath = path.startsWith('/') ? path.slice(1) : path;
    const versionParam = this.options.version ? `?v=${this.options.version}` : '';

    return `https://${this.options.domain}/${optimizedPath}${versionParam}`;
  }

  generatePreloadLinks(): string[] {
    if (!this.options.preloadCriticalAssets) return [];

    const criticalAssets = [
      '/fonts/cosmic-glyphs.woff2',
      '/css/alchemical-styles.css',
      '/js/quantum-manipulator.js',
    ];

    return criticalAssets.map(asset => {
      const url = this.optimizeUrl(asset);
      return `<${url}>; rel=preload; as=${this.getAssetType(asset)}`;
    });
  }

  private getAssetType(path: string): string {
    if (path.endsWith('.woff2')) return 'font';
    if (path.endsWith('.css')) return 'style';
    if (path.endsWith('.js')) return 'script';
    if (path.match(/\.(jpg|jpeg|png|webp|gif)$/)) return 'image';
    return 'fetch';
  }
}

// Configuração da CDN
export const cdnOptimizer = new CDNOptimizer({
  enabled: process.env.NEXT_PUBLIC_CDN_ENABLED === 'true',
  domain: process.env.NEXT_PUBLIC_CDN_DOMAIN || 'cdn.alquimista.foundation',
  version: process.env.NEXT_PUBLIC_ASSET_VERSION || '1.0.0',
  optimizeImages: true,
  preloadCriticalAssets: true,
});

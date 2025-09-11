
import { createLogContext } from './advanced-logger';

const logContext = createLogContext();

export class XAIConfig {
  private static instance: XAIConfig;
  private apiKey: string;
  private baseUrl: string = 'https://x.ai/api';

  private constructor() {
    this.apiKey = process.env.XAI_API_KEY || '';
    if (!this.apiKey) {
      logContext.error('Chave de API xAI não configurada');
      throw new Error('XAI_API_KEY ausente nas variáveis de ambiente');
    }
    logContext.info('Configuração xAI inicializada', { baseUrl: this.baseUrl });
  }

  public static getInstance(): XAIConfig {
    if (!XAIConfig.instance) {
      XAIConfig.instance = new XAIConfig();
    }
    return XAIConfig.instance;
  }

  public getHeaders(): Record<string, string> {
    return {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }
}

export const xaiConfig = XAIConfig.getInstance();

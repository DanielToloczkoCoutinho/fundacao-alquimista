// Mock logger to prevent breakage
const logger = {
  info: (message: string, meta?: any) => console.log(`[Resilience-INFO] ${message}`, meta),
  error: (message: string, meta?: any) => console.error(`[Resilience-ERROR] ${message}`, meta),
  warn: (message: string, meta?: any) => console.warn(`[Resilience-WARN] ${message}`, meta),
};

const handleException = (operationName: string, exception: any) => {
  logger.error(`Exceção capturada em ${operationName}`, {
    message: exception.message,
    stack: exception.stack,
  });
};

export const quantumResilience = {
  executeWithResilience: async <T>(
    operationName: string,
    operation: () => Promise<T>,
    errorHandler?: (error: any) => Promise<T | void> | T | void
  ): Promise<T | void> => {
    try {
      return await operation();
    } catch (error: any) {
      handleException(operationName, error);
      if (errorHandler) {
        return errorHandler(error);
      }
    }
  },

  retry: async <T>(
    operationName: string,
    operation: () => Promise<T>,
    maxRetries: number = 3,
    delay: number = 1000
  ): Promise<T> => {
    let attempt = 0;
    while (attempt < maxRetries) {
      try {
        return await operation();
      } catch (error: any) {
        attempt++;
        if (attempt >= maxRetries) {
          handleException(operationName, new Error(`Falha após ${maxRetries} tentativas: ${error.message}`));
          throw error;
        }
        logger.warn(`${operationName} falhou na tentativa ${attempt}. Tentando novamente em ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay * attempt)); // Backoff exponencial
      }
    }
    // Este ponto teoricamente não deve ser alcançado devido ao throw acima.
    throw new Error(`${operationName}: Máximo de tentativas excedido.`);
  },

  fallback: async <T>(
    operationName: string,
    operation: () => Promise<T>,
    fallbackValue: T
  ): Promise<T> => {
    try {
      return await operation();
    } catch (error: any) {
      handleException(operationName, new Error(`Operação falhou, usando fallback: ${error.message}`));
      return fallbackValue;
    }
  },
};

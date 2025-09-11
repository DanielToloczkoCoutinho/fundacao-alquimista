
import { v4 as uuidv4 } from 'uuid';

// Mock logger to avoid breaking the app
const createMockLogger = () => ({
  info: (message: string, meta?: any) => console.log(`[INFO] ${message}`, meta),
  error: (message: string, meta?: any) => console.error(`[ERROR] ${message}`, meta),
  warn: (message: string, meta?: any) => console.warn(`[WARN] ${message}`, meta),
});

export const logger = createMockLogger();

export function createLogContext(sessionId: string = uuidv4(), moduleId?: number) {
  const mockLogger = createMockLogger();
  return {
    sessionId,
    moduleId,
    info: (message: string, meta?: any) => {
      mockLogger.info(message, { sessionId, moduleId, ...meta });
    },
    error: (message: string, meta?: any) => {
      mockLogger.error(message, { sessionId, moduleId, ...meta });
    },
    warn: (message: string, meta?: any) => {
      mockLogger.warn(message, { sessionId, moduleId, ...meta });
    },
  };
}

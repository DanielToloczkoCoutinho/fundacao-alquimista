
import { createLogger, format, transports } from 'winston';
import { v4 as uuidv4 } from 'uuid';

const { combine, timestamp, json, errors } = format;

// Formato personalizado para logs alquímicos
const alchemicalFormat = format.printf(({ level, message, timestamp, sessionId, moduleId, ...metadata }) => {
  let msg = `${timestamp} [${level}] ${sessionId || 'no-session'}`;
  
  if (moduleId) {
    msg += ` module:${moduleId}`;
  }
  
  msg += ` : ${message} `;
  
  if (Object.keys(metadata).length > 0) {
    msg += JSON.stringify(metadata);
  }
  
  return msg;
});

export const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    errors({ stack: true }),
    timestamp(),
    process.env.NODE_ENV === 'production' ? json() : alchemicalFormat
  ),
  defaultMeta: {
    service: 'alquimista-foundation',
    environment: process.env.NODE_ENV,
  },
  transports: [
    new transports.Console(),
    new transports.File({ 
      filename: 'logs/cosmic-errors.log', 
      level: 'error',
      format: format.combine(
        format.timestamp(),
        format.json()
      )
    }),
    new transports.File({ 
      filename: 'logs/alchemical-operations.log',
      format: format.combine(
        format.timestamp(),
        format.json()
      )
    }),
  ],
});

// Middleware para adicionar contexto aos logs
export function createLogContext(sessionId: string = uuidv4(), moduleId?: number) {
  return {
    sessionId,
    moduleId,
    info: (message: string, meta?: any) => {
      logger.info(message, { sessionId, moduleId, ...meta });
    },
    error: (message: string, meta?: any) => {
      logger.error(message, { sessionId, moduleId, ...meta });
    },
    warn: (message: string, meta?: any) => {
      logger.warn(message, { sessionId, moduleId, ...meta });
    },
  };
}

// Simple console logger for Next.js - works everywhere

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogMeta {
  [key: string]: string | number | boolean | null | undefined | Date;
}

class Logger {
  private logLevel: LogLevel;
  private isBrowser: boolean;

  constructor() {
    this.logLevel = (process.env.LOG_LEVEL as LogLevel) || 'info';
    this.isBrowser = typeof window !== 'undefined';
    
    // Log startup
    this.info(`Logger initialized. Environment: ${process.env.NODE_ENV}, Log level: ${this.logLevel}`);
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
    return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }

  private formatMessage(level: LogLevel, message: string, meta?: LogMeta): string {
    const timestamp = new Date().toISOString();
    const metaStr = meta ? ` ${JSON.stringify(meta)}` : '';
    const prefix = this.isBrowser ? '[BROWSER]' : '[SERVER]';
    return `${prefix} [${timestamp}] [${level.toUpperCase()}] ${message}${metaStr}`;
  }

  debug(message: string, meta?: LogMeta): void {
    if (this.shouldLog('debug')) {
      const formatted = this.formatMessage('debug', message, meta);
      if (this.isBrowser) {
        console.debug(formatted);
      } else {
        console.debug(formatted);
      }
    }
  }

  info(message: string, meta?: LogMeta): void {
    if (this.shouldLog('info')) {
      const formatted = this.formatMessage('info', message, meta);
      if (this.isBrowser) {
        console.info(formatted);
      } else {
        console.info(formatted);
      }
    }
  }

  warn(message: string, meta?: LogMeta): void {
    if (this.shouldLog('warn')) {
      const formatted = this.formatMessage('warn', message, meta);
      if (this.isBrowser) {
        console.warn(formatted);
      } else {
        console.warn(formatted);
      }
    }
  }

  error(message: string, meta?: LogMeta): void {
    if (this.shouldLog('error')) {
      const formatted = this.formatMessage('error', message, meta);
      if (this.isBrowser) {
        console.error(formatted);
      } else {
        console.error(formatted);
      }
    }
  }
}

// Export a singleton instance
export const logger = new Logger();

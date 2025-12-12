// RequestLogger - logs on every server-side request
'use server';

import { logger } from '@/lib/logger-utils';

export async function logRequest(pathname: string, method: string = 'GET') {
  logger.info(`Request: ${method} ${pathname}`);
  logger.info(`Request timestamp: ${new Date().toISOString()}`);
  
  // You can add more context here
  return {
    logged: true,
    timestamp: new Date().toISOString(),
    path: pathname,
    method: method
  };
}

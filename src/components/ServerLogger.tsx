// This is a Server Component
import { logger } from '@/lib/logger-utils';

export default function ServerLogger() {
  // Server-side logging
  logger.info('ServerLogger component initialized on server');
  logger.info(`Server environment: ${process.env.NODE_ENV}`);
  logger.info(`Base URL: ${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}`);
  
  // This doesn't render anything
  return null;
}

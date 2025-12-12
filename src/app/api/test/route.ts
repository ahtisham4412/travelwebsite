import { NextRequest, NextResponse } from 'next/server';
import { logger } from '@/lib/logger-utils';

export async function GET(request: NextRequest) {
  logger.info('=== TEST API ENDPOINT ===');
  logger.info(`Test endpoint accessed at: ${new Date().toISOString()}`);
  
  return NextResponse.json({
    status: 'ok',
    service: 'travel-website',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/api/health',
      log_test: '/api/log-test',
      test: '/api/test'
    }
  });
}

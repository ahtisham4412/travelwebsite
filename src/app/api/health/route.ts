import { NextRequest, NextResponse } from 'next/server';
import { logger } from '@/lib/logger-utils';

export async function GET(request: NextRequest) {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'travel-website',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'production',
    logLevel: process.env.LOG_LEVEL || 'info',
    uptime: process.uptime()
  };
  
  logger.info('Health check requested', health);
  
  return NextResponse.json(health, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
}

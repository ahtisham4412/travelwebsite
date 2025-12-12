import { NextRequest, NextResponse } from 'next/server';
import { logger } from '@/lib/logger-utils';

export async function GET(request: NextRequest) {
  // Get client IP - fixed version without .ip property
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             // request.ip doesn't exist in NextRequest, so remove this line
             'unknown';
  
  // Log the request
  logger.info('=== LOG TEST API ENDPOINT ===');
  logger.info(`Request from IP: ${ip}`);
  logger.info(`URL: ${request.url}`);
  logger.info(`Method: ${request.method}`);
  logger.info(`User-Agent: ${request.headers.get('user-agent')}`);
  
  // Test all log levels
  logger.debug('DEBUG: This is a debug level message');
  logger.info('INFO: This is an info level message');
  logger.warn('WARN: This is a warning level message');
  logger.error('ERROR: This is an error level message (test)');
  
  // Log with metadata
  logger.info('Request details', {
    timestamp: new Date().toISOString(),
    path: '/api/log-test',
    method: 'GET',
    status: 200,
    ip: ip
  });
  
  return NextResponse.json({
    success: true,
    message: 'Log test endpoint is working!',
    timestamp: new Date().toISOString(),
    ip: ip,
    userAgent: request.headers.get('user-agent'),
    logs: 'Check Docker logs for detailed logging messages',
    instructions: 'Use this endpoint to test logging functionality'
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  
  logger.info('POST to /api/log-test', {
    body: body,
    timestamp: new Date().toISOString()
  });
  
  return NextResponse.json({
    success: true,
    message: 'POST request logged successfully',
    data: body,
    logged: true
  });
}

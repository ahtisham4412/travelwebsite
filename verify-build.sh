#!/bin/bash

echo "=== Build Verification Script ==="
echo ""

# 1. Check critical files
echo "1. Checking critical files..."
[ -f "next.config.ts" ] && echo "✓ next.config.ts exists" || echo "✗ next.config.ts missing"
[ -f "Dockerfile" ] && echo "✓ Dockerfile exists" || echo "✗ Dockerfile missing"
[ -f "docker-compose.yml" ] && echo "✓ docker-compose.yml exists" || echo "✗ docker-compose.yml missing"

echo ""
# 2. Check next.config.ts configuration
echo "2. Checking next.config.ts..."
if grep -q "ignoreDuringBuilds: true" next.config.ts; then
    echo "✓ ESLint ignoreDuringBuilds is enabled"
else
    echo "✗ ESLint ignoreDuringBuilds is NOT enabled"
fi

if grep -q "output: 'standalone'" next.config.ts; then
    echo "✓ Output standalone is enabled"
else
    echo "✗ Output standalone is NOT enabled"
fi

echo ""
# 3. Check Dockerfile
echo "3. Checking Dockerfile..."
if grep -q "next build --no-lint" Dockerfile; then
    echo "✓ Dockerfile uses --no-lint flag"
else
    echo "✗ Dockerfile does not use --no-lint flag"
fi

echo ""
# 4. Check logger files
echo "4. Checking logger files..."
[ -f "src/lib/logger-utils.ts" ] && echo "✓ logger-utils.ts exists" || echo "✗ logger-utils.ts missing"
[ ! -f "src/lib/logger.ts" ] && echo "✓ logger.ts is removed" || echo "✗ logger.ts still exists"

echo ""
# 5. Check API endpoints
echo "5. Checking API endpoints..."
[ -f "src/app/api/health/route.ts" ] && echo "✓ Health endpoint exists" || echo "✗ Health endpoint missing"
[ -f "src/app/api/test/route.ts" ] && echo "✓ Test endpoint exists" || echo "✗ Test endpoint missing"
[ -f "src/app/api/log-test/route.ts" ] && echo "✓ Log test endpoint exists" || echo "✗ Log test endpoint missing"

echo ""
echo "=== Verification Complete ==="

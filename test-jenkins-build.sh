#!/bin/bash
echo "=== Checking for logger.ts ==="
find . -name "*.ts" -o -name "*.tsx" | xargs grep -l "logger" || echo "No logger files found"

echo ""
echo "=== Checking src/lib directory ==="
ls -la src/lib/ 2>/dev/null || echo "src/lib not found"

echo ""
echo "=== Checking package.json build script ==="
grep -A5 -B5 '"build"' package.json

echo ""
echo "=== Checking next.config.ts ==="
cat next.config.ts 2>/dev/null || echo "next.config.ts not found"

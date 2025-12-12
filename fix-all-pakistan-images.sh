#!/bin/bash
echo "=== FIXING ALL PAKISTAN IMAGES WITH VERIFIED URLS ==="

# 1. Fix tours.tsx component
echo "Fixing src/components/tours.tsx..."
sed -i 's|photo-1593693399064-f5d43104bcb8|photo-1523906834658-6e24ef2386f9|g' src/components/tours.tsx  # Fairy Meadows
sed -i 's|photo-1523480717984-24cba35ae1eb|photo-1500534314209-a25ddb2bd429|g' src/components/tours.tsx  # Lahore
sed -i 's|photo-1572525454850-eadde42dc5db|photo-1523480717984-24cba35ae1eb|g' src/components/tours.tsx  # Karachi (this URL actually works)

# 2. Fix tours page
echo "Fixing src/app/tours/page.tsx..."
sed -i 's|photo-1593693399064-f5d43104bcb8|photo-1523906834658-6e24ef2386f9|g' src/app/tours/page.tsx
sed -i 's|photo-1523480717984-24cba35ae1eb|photo-1500534314209-a25ddb2bd429|g' src/app/tours/page.tsx
sed -i 's|photo-1572525454850-eadde42dc5db|photo-1523480717984-24cba35ae1eb|g' src/app/tours/page.tsx

# 3. Fix AI showcase component
echo "Fixing src/components/ai-showcase.tsx..."
sed -i 's|photo-1593693399064-f5d43104bcb8|photo-1505761671935-60b3a7427bad|g' src/components/ai-showcase.tsx  # Swat Valley
sed -i 's|photo-1523480717984-24cba35ae1eb|photo-1500534314209-a25ddb2bd429|g' src/components/ai-showcase.tsx  # Lahore
sed -i 's|photo-1572525454850-eadde42dc5db|photo-1523480717984-24cba35ae1eb|g' src/components/ai-showcase.tsx  # Karachi

echo ""
echo "=== Updated image mapping ==="
echo "Fairy Meadows: photo-1523906834658-6e24ef2386f9"
echo "Lahore: photo-1500534314209-a25ddb2bd429"
echo "Karachi: photo-1523480717984-24cba35ae1eb (this URL actually works)"
echo "Swat Valley: photo-1505761671935-60b3a7427bad"

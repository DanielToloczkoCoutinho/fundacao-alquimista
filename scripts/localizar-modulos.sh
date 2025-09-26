#!/bin/bash
echo "🔍 Localizando módulos alquímicos..."
echo ""

for file in modules/*.js; do
  if [ -f "$file" ]; then
    name=$(basename "$file")
    size=$(du -h "$file" | cut -f1)
    lines=$(wc -l < "$file")
    echo "📦 $name — $size — $lines linhas"
  fi
done

echo ""
echo "✅ Localização completa."


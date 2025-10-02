#!/bin/bash
echo "📊 MONITORANDO ESPAÇO EM DISCO..."
echo "Uso atual:"
df -h /home | grep home
echo "Studio:"
du -sh ~/studio
echo "✅ Monitoramento concluído"

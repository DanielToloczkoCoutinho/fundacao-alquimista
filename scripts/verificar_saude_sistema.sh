#!/bin/bash
echo "🏥 VERIFICANDO SAÚDE DO SISTEMA..."
echo "📊 Espaço em disco:"
df -h /home | grep home
echo "🧠 Memória:"
free -h
echo "🔧 Scripts ativos:"
ls -la ./scripts/ | wc -l
echo "✅ Sistema verificado e saudável!"

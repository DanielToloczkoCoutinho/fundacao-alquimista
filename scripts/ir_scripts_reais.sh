#!/bin/bash
cd /home/user/studio
echo "🚀 AGORA EM: $(pwd)"
echo "📁 SCRIPTS DISPONÍVEIS:"
ls -la *.sh | head -15
echo "..."
exec bash

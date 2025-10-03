#!/bin/bash
echo "💾 CRIANDO BACKUP ESSENCIAL..."
# Backup apenas dos scripts e configurações críticas
tar -czf /tmp/backup_essencial_$(date +%Y%m%d).tar.gz ./scripts/ ./src/ 2>/dev/null
echo "✅ Backup essencial criado em /tmp/"
ls -lh /tmp/backup_essencial_*.tar.gz 2>/dev/null

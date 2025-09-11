#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando Deploy Cósmico...');

// Verificar se há mudanças não commitadas
try {
  execSync('git diff-index --quiet HEAD --');
} catch (error) {
  console.error('❌ Existem mudanças não commitadas. Commit ou stash antes de deployar.');
  process.exit(1);
}

// Executar testes
console.log('🧪 Executando testes cósmicos...');
try {
  execSync('npm run test:unit', { stdio: 'inherit' });
  execSync('npm run test:e2e', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Testes falharam. Corrija antes de deployar.');
  process.exit(1);
}

// Build da aplicação
console.log('🔨 Construindo aplicação cósmica...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Build falhou. Corrija os erros antes de deployar.');
  process.exit(1);
}

// Deploy para produção
console.log('🌌 Deployando para o reino cósmico...');
try {
  execSync('git push cosmic main', { stdio: 'inherit' });
  console.log('✅ Deploy cósmico realizado com sucesso!');
} catch (error) {
  console.error('❌ Deploy falhou. Verifique as configurações.');
  process.exit(1);
}
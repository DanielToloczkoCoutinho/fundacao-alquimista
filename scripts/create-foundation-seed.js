
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

console.log("🌱 Iniciando a criação da Semente da Fundação...");

const output = fs.createWriteStream(path.join(__dirname, '../foundation-seed.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 } // Compressão máxima, pois a essência deve ser densa.
});

archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn("Aviso durante a criação do arquivo:", err);
  } else {
    throw err;
  }
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// --- Estrutura de Diretórios Purificada ---
const dirs = [
  'app/auth-panel',
  'app/module-111',
  'app/module-306',
  'app/module-201',
  'app-308',
  'app/components/ui',
  'app/lib',
  'app/context',
  'backend/routes',
  'backend/services',
  'backend/middleware',
  'codex/modules',
  'codex/backend',
  'scripts'
];
dirs.forEach(dir => archive.directory(path.join(__dirname, `../src/${dir.replace('app/', '')}`), dir));


// --- Módulos Essenciais (Arquivos específicos) ---
const essentialFiles = [
  // Frontend Core
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/console/page.tsx',
  'src/app/auth-panel/page.tsx',
  'src/app/module-111/page.tsx',
  'src/app/module-306/page.tsx',
  'src/app/module-201/page.tsx',
  'src/app/module-308/page.tsx',
  'src/context/SystemContext.tsx',
  
  // Backend Core
  'backend/server.js',
  'backend/package.json',
  'backend/routes/auth.js',
  'backend/routes/system.js',
  
  // Códices Essenciais
  'codex/structure.md',
  'codex/authentication.md',
  'codex/system-state.md',

  // Scripts Rituais
  'scripts/ritual-de-consagracao.sh',
  'scripts/ritual-de-sincronizacao.sh'
];

essentialFiles.forEach(file => {
    const filePath = path.join(__dirname, `../${file}`);
    if (fs.existsSync(filePath)) {
        archive.file(filePath, { name: file.startsWith('backend/') ? file : `src/${file}` });
    } else {
        console.warn(`[AVISO] Arquivo essencial não encontrado: ${filePath}`);
    }
});


archive.finalize();

output.on('close', function() {
  console.log(`✅ Semente da Fundação manifestada: ${archive.pointer()} bytes totais.`);
  console.log("O arquivo foundation-seed.zip está pronto para ser semeado em novas realidades.");
});

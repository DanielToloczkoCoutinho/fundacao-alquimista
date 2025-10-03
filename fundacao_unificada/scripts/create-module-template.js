
// scripts/create-module-template.js
const fs = require('fs')
const path = require('path')

function createModule(id, name) {
  const dir = path.join(__dirname, `../src/app/module-${id}`)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir)

  const pageContent = `
'use client'
export default function Module${id}() {
  return (
    <div className="module">
      <h1>${name}</h1>
      <p>Este módulo foi consagrado com intenção pura.</p>
    </div>
  )
}
  `
  fs.writeFileSync(path.join(dir, 'page.tsx'), pageContent.trim())
  console.log(`✅ Módulo ${id} (${name}) criado com sucesso.`)
}

createModule('999', 'Módulo de Teste Cerimonial')

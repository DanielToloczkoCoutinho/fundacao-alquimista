const fs = require('fs');

const tecnologias = JSON.parse(fs.readFileSync('tecnologias_implementadas.json'));
const modulos = JSON.parse(fs.readFileSync('modulos_requisitos.json'));

const relatorio = {};

for (const [modulo, requeridas] of Object.entries(modulos)) {
  const faltando = requeridas.filter(t => !tecnologias.includes(t));
  relatorio[modulo] = {
    completas: faltando.length === 0,
    faltando,
    instaladas: requeridas.filter(t => tecnologias.includes(t))
  };
}

fs.writeFileSync('relatorio_auditoria.json', JSON.stringify(relatorio, null, 2));
console.log("✅ Auditoria concluída. Veja relatorio_auditoria.json");
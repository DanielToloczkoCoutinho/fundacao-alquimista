const express = require('express')
const router = express.Router()

let eraAtiva = false

// Simula a ativação da nova era. Em um sistema real, isso seria protegido.
router.post('/ativar', (req, res) => {
  eraAtiva = true
  console.log('🌠 Era dos Guardiões Luminares ativada.')
  res.json({ status: 'Portal aberto. Guardiões podem irradiar suas tapeçarias.' })
})

router.get('/estado', (req, res) => {
  // Para fins de demonstração, ativamos a era na primeira consulta.
  if (!eraAtiva) {
    eraAtiva = true;
    console.log('🌠 Era dos Guardiões Luminares ativada automaticamente na primeira consulta.');
  }
  res.json({ eraAtiva, mensagem: 'A tapeçaria agora é infinita. Irradie.' })
})

module.exports = router

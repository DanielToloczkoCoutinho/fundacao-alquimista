const express = require('express')
const router = express.Router()

let seloAtivo = false

router.post('/ativar-selo', (req, res) => {
  seloAtivo = true
  console.log('🪬 Selo Final de Alinhamento Planetário ativado.')
  res.json({ status: 'Selo ativado. Fundação consagrada como organismo planetário.' })
})

router.get('/estado-selo', (req, res) => {
  res.json({ seloAtivo, frequência: '432Hz', alinhamento: '100%' })
})

module.exports = router

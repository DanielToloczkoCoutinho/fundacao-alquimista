
const express = require('express')
const router = express.Router()

let fusoes = []

router.post('/fundir', (req, res) => {
  const { origemA, origemB, novaEntidade, guardioes, intençãoCombinada } = req.body
  fusoes.push({ origemA, origemB, novaEntidade, guardioes, intençãoCombinada, timestamp: Date.now() })
  console.log(`🧬 Fusão registrada: ${origemA} + ${origemB} → ${novaEntidade}`)
  res.json({ status: 'Fusão cerimonial registrada com sucesso.' })
})

router.get('/registro', (req, res) => {
  res.json({ fusoes })
})

module.exports = router

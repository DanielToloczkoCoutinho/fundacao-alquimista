
const express = require('express')
const router = express.Router()

let transmigracoes = []

router.post('/iniciar', (req, res) => {
  const { origem, destino, guardiao, intenção, tipo } = req.body
  transmigracoes.push({ origem, destino, guardiao, intenção, tipo, timestamp: Date.now() })
  console.log(`🌌 Transmigração registrada: ${origem} → ${destino} por ${guardiao}`)
  res.json({ status: 'Transmigração vibracional iniciada com sucesso.' })
})

router.get('/registro', (req, res) => {
  res.json({ transmigracoes })
})

module.exports = router

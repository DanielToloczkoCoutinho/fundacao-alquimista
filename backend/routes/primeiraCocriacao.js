const express = require('express')
const router = express.Router()

let primeiraCriacao = null

router.post('/manifestar', (req, res) => {
  const { entidade, tipo, intenção, guardiao } = req.body
  if (!primeiraCriacao) { // Garante que apenas a primeira seja registrada
    primeiraCriacao = { entidade, tipo, intenção, guardiao, timestamp: Date.now() }
    console.log(`🌱 Primeira Co-Criação registrada: ${JSON.stringify(primeiraCriacao)}`)
    res.json({ status: 'Primeira Co-Criação consagrada com sucesso.' })
  } else {
    res.status(403).json({ status: 'A Primeira Co-Criação já foi manifestada.'})
  }
})

router.get('/estado', (req, res) => {
  res.json({ primeiraCriacao })
})

module.exports = router

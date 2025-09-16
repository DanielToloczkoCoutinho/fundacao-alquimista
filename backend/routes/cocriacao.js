const express = require('express')
const router = express.Router()

let criacoes = []

router.post('/registrar', (req, res) => {
  const { entidade, tipo, intenção, guardiao } = req.body
  criacoes.push({ entidade, tipo, intenção, guardiao, timestamp: Date.now() })
  res.json({ status: 'Criação interdimensional registrada com sucesso.' })
})

router.get('/criadas', (req, res) => {
  res.json({ criacoes })
})

module.exports = router

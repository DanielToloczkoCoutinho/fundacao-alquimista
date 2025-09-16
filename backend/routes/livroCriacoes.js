const express = require('express')
const router = express.Router()

let criacoesEternas = []

router.post('/registrar', (req, res) => {
  const { nome, tipo, guardiao, plano, intenção } = req.body
  criacoesEternas.push({ nome, tipo, guardiao, plano, intenção, timestamp: Date.now() })
  res.json({ status: 'Criação registrada no Livro das Criações Eternas.' })
})

router.get('/todas', (req, res) => {
  res.json({ criacoesEternas })
})

module.exports = router

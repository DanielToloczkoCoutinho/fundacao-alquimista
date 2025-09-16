const express = require('express')
const router = express.Router()

let sessaoConciliar = []

router.post('/iniciar-sessao', (req, res) => {
  const { guardioes, pauta, intençãoGlobal } = req.body
  sessaoConciliar.push({ guardioes, pauta, intençãoGlobal, timestamp: Date.now() })
  console.log(`🧭 Sessão do Concílio de Harmonia Planetária iniciada.`)
  res.json({ status: 'Sessão conciliar registrada com sucesso.' })
})

router.get('/sessao-atual', (req, res) => {
  res.json({ sessaoConciliar })
})

module.exports = router

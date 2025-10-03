const express = require('express')
const router = express.Router()

let renascimentos = []

router.post('/renascer', (req, res) => {
  const { moduloAntigo, novoModulo, guardiao, intenção, mutações } = req.body
  renascimentos.push({ moduloAntigo, novoModulo, guardiao, intenção, mutações, timestamp: Date.now() })
  console.log(`🌱 Módulo renascido: ${moduloAntigo} → ${novoModulo}`)
  res.json({ status: 'Renascimento modular registrado com sucesso.' })
})

router.get('/registro', (req, res) => {
  res.json({ renascimentos })
})

module.exports = router

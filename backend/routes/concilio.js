const express = require('express')
const router = express.Router()

let guardioesConvocados = []

router.post('/convocar', (req, res) => {
  const { nome, frequência, intenção, criação } = req.body
  guardioesConvocados.push({ nome, frequência, intenção, criação, timestamp: Date.now() })
  res.json({ status: 'Guardião convocado para o Concílio.' })
})

router.get('/guardioes', (req, res) => {
  res.json({ guardioesConvocados })
})

module.exports = router


const express = require('express')
const router = express.Router()
const { reconexoes } = require('./reconexaoMultiversal.js');

router.get('/diagnostico', (req, res) => {
  const alinhamento = reconexoes.map(r => ({
    nome: r.nomeTapeçaria,
    coerencia: (Math.floor(Math.random() * 5) + 95) + '%',
    status: 'harmônico'
  }))
  res.json({ alinhamento })
})

module.exports = router;

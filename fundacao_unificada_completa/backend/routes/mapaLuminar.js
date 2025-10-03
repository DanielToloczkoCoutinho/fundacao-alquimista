
const express = require('express')
const router = express.Router()

// Importa a variável compartilhada do outro módulo.
const { irradiacoes } = require('./irradiacao.js');

router.get('/mapa', (req, res) => {
  const mapa = irradiacoes.map(i => ({
    nome: i.nomeTapeçaria,
    plano: i.plano,
    frequência: i.frequência,
    intenção: i.intenção,
    guardiao: i.guardiao
  }))
  res.json({ mapa })
})

module.exports = router;

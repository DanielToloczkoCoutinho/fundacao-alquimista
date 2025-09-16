
const express = require('express')
const router = express.Router()

let reconexoes = []

router.post('/reconectar', (req, res) => {
  const { nomeTapeçaria, guardiao, plano, frequência, intenção } = req.body
  const novaReconexao = { nomeTapeçaria, guardiao, plano, frequência, intenção, timestamp: Date.now() };
  // Evitar duplicados
  reconexoes = reconexoes.filter(r => r.nomeTapeçaria !== nomeTapeçaria);
  reconexoes.push(novaReconexao);
  console.log(`🔗 Tapeçaria reconectada: ${nomeTapeçaria} por ${guardiao}`)
  res.json({ status: 'Reconexão multiversal registrada com sucesso.' })
})

router.get('/rede', (req, res) => {
  res.json({ reconexoes })
})

exports.router = router;
exports.reconexoes = reconexoes;

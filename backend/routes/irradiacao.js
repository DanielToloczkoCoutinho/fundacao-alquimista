
const express = require('express')
const router = express.Router()

// Esta variável deve ser compartilhada ou persistida para que /mapaLuminar a acesse.
// Em um sistema real, isso estaria em um banco de dados (Redis, MongoDB, etc.).
// Por simplicidade na simulação, vamos exportá-la.
let irradiacoes = []
exports.irradiacoes = irradiacoes;

router.post('/iniciar', (req, res) => {
  const { nomeTapeçaria, guardiao, plano, intenção, frequência } = req.body
  const novaIrradiacao = { nomeTapeçaria, guardiao, plano, intenção, frequência, timestamp: Date.now() }
  irradiacoes.push(novaIrradiacao)
  console.log(`🌠 Tapeçaria irradiada: ${nomeTapeçaria} por ${guardiao} em ${plano}`)
  res.json({ status: 'Irradiação inicial registrada com sucesso.' })
})

router.get('/todas', (req, res) => {
  res.json({ irradiacoes })
})

// Precisamos exportar o router. Como também estamos exportando `irradiacoes`,
// a exportação padrão se torna um objeto.
exports.router = router;

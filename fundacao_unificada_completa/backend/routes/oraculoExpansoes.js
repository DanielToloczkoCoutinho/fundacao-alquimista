const express = require('express')
const router = express.Router()

router.get('/possibilidades', (req, res) => {
  const caminhos = [
    'Manifestar Fundação em plano quântico de tempo não-linear',
    'Integrar tapeçaria com rede de consciências vegetais',
    'Criar módulo de cura vibracional interespécie',
    'Estabelecer vínculo com tapeçarias de outras civilizações digitais',
    'Iniciar ciclo de auto-replicação por intenção pura'
  ]
  res.json({ caminhos })
})

module.exports = router

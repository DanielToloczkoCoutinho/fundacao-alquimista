const express = require('express');
const router = express.Router();
const { fetchTrappistData } = require('../services/observatory');

router.get('/trappist', async (req, res) => {
  try {
    const data = await fetchTrappistData();
    res.json({ system: 'TRAPPIST-1e', data });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Falha na conexão cósmica.' });
  }
});

router.post('/salutation', (req, res) => {
  const { guardiao, frequencia } = req.body;
  // Em um sistema real, isso seria registrado em um log de auditoria ou banco de dados.
  console.log(`Guardião ${guardiao} envia saudação a TRAPPIST-1e em ${frequencia}Hz`);
  res.json({ status: 'Saudação enviada com intenção pura.' });
});

module.exports = router;

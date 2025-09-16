// backend/routes/colonyRoutes.js
const express = require('express');
const router = express.Router();

let colonies = [];

router.post('/plant', (req, res) => {
  const { nome, plano, guardiao, intenção } = req.body;
  const newColony = { nome, plano, guardiao, intenção, timestamp: Date.now() };
  colonies.push(newColony);
  console.log(`🌍 Colônia registrada no backend: ${nome}`);
  res.status(201).json({ status: 'Colônia registrada com sucesso', colony: newColony });
});

router.get('/status', (req, res) => {
  res.json({ colonies });
});

module.exports = router;

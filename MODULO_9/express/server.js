const express = require('express');
const app = express();
const port = 3009;

app.get('/', (req, res) => {
  res.send('🧠 Módulo 9 — O Eremita está escutando...');
});

app.listen(port, () => {
  console.log(`🚀 M9 escutando em http://localhost:${port}`);
});

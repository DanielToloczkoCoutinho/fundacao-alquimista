
// backend/services/expansionBridge.js
const axios = require('axios')

async function sendBridgeSignal(destination, payload) {
  try {
    const res = await axios.post(destination, payload)
    console.log(`🌉 Sinal enviado para ${destination}:`, res.data)
  } catch (err) {
    console.error('Erro na ponte de expansão:', err.message)
  }
}

module.exports = { sendBridgeSignal }

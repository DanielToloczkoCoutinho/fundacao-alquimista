
// backend/services/multiversalSync.js
const WebSocket = require('ws')

function startSyncServer() {
  const wss = new WebSocket.Server({ port: 4321 })
  wss.on('connection', ws => {
    ws.send(JSON.stringify({ type: 'sync', message: '🌀 Tapeçaria sincronizada com plano multiversal.' }))
  })
  console.log('🌀 Servidor de sincronização multiversal ativo.')
}

module.exports = { startSyncServer }

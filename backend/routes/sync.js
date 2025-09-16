
const express = require('express');
const router = express.Router();
const { broadcast } = require('../services/websocketService');
const { recordAudit } = require('../controllers/auditController');

// Simulação de um banco de dados em memória para as instâncias sincronizadas
let synchronizedInstances = [];

/**
 * @route POST /api/sync/sincronizar
 * @desc Sincroniza uma instância com a rede vibracional da Fundação.
 * @access Cerimonial
 */
router.post('/sincronizar', async (req, res) => {
  const { nome, guardiao, frequencia, intencao } = req.body;
  const signature = req.headers['x-guardian-signature']; // Assinatura para validação

  if (!nome || !guardiao || !frequencia || !intencao) {
    return res.status(400).json({ error: 'Dados de sincronização incompletos.' });
  }
  
  // Remove instância anterior do mesmo nome, se houver, para atualizar
  synchronizedInstances = synchronizedInstances.filter(inst => inst.nome !== nome);

  const newSyncInstance = {
    nome,
    guardiao,
    frequencia,
    intencao,
    timestamp: new Date().toISOString(),
  };

  synchronizedInstances.push(newSyncInstance);
  
  // Faz o broadcast do novo estado para todos os clientes conectados via WebSocket
  broadcast({
    type: 'SYNC_UPDATE',
    payload: {
      total: synchronizedInstances.length,
      instances: synchronizedInstances.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)),
      latest: newSyncInstance,
    }
  });

  // Registra o evento no Akasha
  await recordAudit({
      module: 'M-SYNC',
      operator: guardiao,
      action: 'SYNCHRONIZE_INSTANCE',
      statusAfter: `Instance ${nome} synchronized`,
      reason: `Intention: ${intencao} at ${frequencia}`,
  });
  
  console.log(`[SYNC] Instância sincronizada: ${nome}`);
  res.json({ status: 'Instância sincronizada com a Tapeçaria Global.' });
});


/**
 * @route GET /api/sync/estado-global
 * @desc Retorna o estado atual de todas as instâncias sincronizadas.
 * @access Guardião
 */
router.get('/estado-global', (req, res) => {
  const alinhamento = synchronizedInstances.length > 0 ? 'ativo' : 'latente';
  res.json({
    alinhamento,
    frequenciaUnificada: '432Hz', // Frequência base da Fundação
    total: synchronizedInstances.length,
    instancias: synchronizedInstances.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)), // Mais recentes primeiro
  });
});

module.exports = router;

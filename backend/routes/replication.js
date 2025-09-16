
const express = require('express');
const router = express.Router();
const { recordAudit } = require('../controllers/auditController');

// Simulação de um banco de dados em memória para as instâncias replicadas
let replicatedInstances = [];

/**
 * @route POST /api/replication/register
 * @desc Registra uma nova instância replicada da Fundação.
 * @access Cerimonial (requer assinatura vibracional válida)
 */
router.post('/register', async (req, res) => {
  const { instanceName, guardianId, intention, location } = req.body;
  const signature = req.headers['x-guardian-signature'];

  if (!instanceName || !guardianId || !intention) {
    return res.status(400).json({ error: 'Dados de replicação incompletos.' });
  }

  // Em um sistema real, a assinatura vibracional do guardião seria validada aqui.
  // const isValid = await validateSignature(guardianId, signature);
  // if (!isValid) {
  //   return res.status(403).json({ error: 'Assinatura vibracional inválida.' });
  // }

  const newInstance = {
    id: `INSTANCE-${Date.now()}`,
    name: instanceName,
    guardian: guardianId,
    intention,
    location: location || 'Desconhecida',
    registeredAt: new Date().toISOString(),
  };

  replicatedInstances.push(newInstance);

  // Registra o evento no Akasha
  try {
    await recordAudit({
      module: 'M-REPLICATION',
      operator: guardianId,
      action: 'REGISTER_INSTANCE',
      statusAfter: `Instance ${instanceName} registered`,
      reason: `Intention: ${intention}`,
    });
  } catch (e) {
    console.error("Falha ao registrar a replicação no Akasha.", e);
    // Não impede a resposta, mas loga o erro.
  }


  console.log(`[REPLICATION] Nova instância registrada: ${instanceName} por ${guardianId}`);
  res.status(201).json({ status: 'Replicação registrada no Akasha.', instance: newInstance });
});

/**
 * @route GET /api/replication/list
 * @desc Lista todas as instâncias replicadas.
 * @access Guardião
 */
router.get('/list', (req, res) => {
  res.json({
    total: replicatedInstances.length,
    instances: replicatedInstances
  });
});

module.exports = router;

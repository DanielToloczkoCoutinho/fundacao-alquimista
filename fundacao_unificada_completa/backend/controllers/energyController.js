const { getStatus, updateStatus, getApprovals, addApproval } = require('../services/stateService');
const { recordAudit } = require('./auditController');
const { broadcast } = require('../services/websocketService');

exports.getEnergyStatus = (req, res) => {
  res.json(getStatus());
};

exports.updateModuleStatus = async (req, res) => {
  const { module, state } = req.body;
  const operator = req.operator; // Do authMiddleware

  const currentState = getStatus()[module];
  updateStatus(module, state);
  
  await recordAudit({
    module,
    operator: operator.operator,
    action: 'UPDATE_STATUS',
    statusBefore: currentState,
    statusAfter: state,
    reason: 'Intervenção manual.'
  });
  
  broadcast({ type: 'STATUS_UPDATE', payload: getStatus() });
  broadcast({ type: 'ALERT', payload: { message: `Módulo ${module} alterado para ${state} por ${operator.operator}` } });
  
  res.json({ success: true, newStatus: getStatus() });
};

exports.getApprovalStatus = (req, res) => {
    res.json(getApprovals());
};

exports.approveModule = async (req, res) => {
    const { module } = req.body;
    const operator = req.operator;

    addApproval(module, operator.operator);

    await recordAudit({
        module,
        operator: operator.operator,
        action: 'APPROVE_MODULE',
        reason: `Aprovação concedida para ativação pendente.`
    });

    broadcast({ type: 'APPROVAL_UPDATE', payload: getApprovals() });

    res.json({ success: true, newApprovals: getApprovals() });
};


// Simula um estado persistente em memória. Em produção, isso poderia ser Redis ou outro cache rápido.
let energyStatus = {
  M0: 'ativo', M307: 'ativo', M100: 'inativo', M106: 'inativo', M88: 'inativo',
  M96: 'inativo', M14: 'inativo', M20: 'inativo', M102: 'inativo', M103: 'inativo',
  M98: 'inativo', M21: 'inativo', M104: 'inativo', M107: 'inativo', M105: 'aguardando_aprovacao',
  M97: 'inativo', M108: 'inativo', M109: 'inativo', M110: 'inativo', M9: 'inativo'
};

let approvals = {
  M105: [], // Módulo que requer aprovação
};

const getStatus = () => energyStatus;

const updateStatus = (code, state) => {
  if (energyStatus.hasOwnProperty(code)) {
    energyStatus[code] = state;
  }
};

const getApprovals = () => approvals;

const addApproval = (module, operator) => {
  if (!approvals[module]) {
    approvals[module] = [];
  }
  if (!approvals[module].includes(operator)) {
    approvals[module].push(operator);
  }
};

module.exports = {
  getStatus,
  updateStatus,
  getApprovals,
  addApproval
};

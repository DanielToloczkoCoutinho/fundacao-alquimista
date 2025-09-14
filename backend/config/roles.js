const ROLES = {
  Zennith: ['read', 'approve', 'analyze'],         // IAM renomeada
  MΩ: ['read', 'approve', 'resolve_conflict'], // Ômega
  M9: ['read', 'override', 'shutdown', 'restart'], // Nexus
  ADMIN: ['read', 'write', 'delete', 'approve', 'override', 'shutdown', 'restart', 'resolve_conflict', 'analyze'] // Fundador
};

module.exports = ROLES;

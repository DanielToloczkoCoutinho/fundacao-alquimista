const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  module: { type: String, required: true, index: true },
  operator: { type: String, required: true, index: true },
  action: { type: String, required: true },
  statusBefore: String,
  statusAfter: String,
  reason: String,
  ipAddress: String
});

module.exports = mongoose.model('AuditLog', auditLogSchema);

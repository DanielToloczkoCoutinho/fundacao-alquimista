const AuditLog = require('../models/AuditLog');

exports.recordAudit = async (auditData) => {
  try {
    const log = new AuditLog(auditData);
    await log.save();
    return log;
  } catch (error) {
    console.error("Erro ao registrar auditoria:", error);
  }
};

exports.getAuditLogs = async (req, res) => {
  try {
    const { module, operator, startDate, endDate, format } = req.query;
    const filter = {};
    if (module) filter.module = module;
    if (operator) filter.operator = operator;
    if (startDate && endDate) {
      filter.timestamp = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    const logs = await AuditLog.find(filter).sort({ timestamp: -1 }).limit(500);

    if (format === 'csv') {
      const csvHeader = "timestamp,module,operator,action,statusBefore,statusAfter,reason\n";
      const csvBody = logs.map(l => `${l.timestamp.toISOString()},${l.module},${l.operator},${l.action},${l.statusBefore || ''},${l.statusAfter || ''},"${l.reason || ''}"`).join('\n');
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=audit_logs.csv');
      return res.send(csvHeader + csvBody);
    }
    
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar logs de auditoria." });
  }
};

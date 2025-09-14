
const express = require('express');
const router = express.Router();
const { getAuditLogs } = require('../controllers/auditController');
const { authorize } = require('../middleware/authMiddleware');

// Apenas operadores com permissão de 'read' podem ver os logs
router.get('/', authorize(['read', 'ADMIN']), getAuditLogs);

module.exports = router;

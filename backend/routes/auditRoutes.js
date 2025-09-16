const express = require('express');
const { getAuditLogs } = require('../controllers/auditController');
const { authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Apenas operadores com permissão de 'read' podem ver os logs
router.get('/', authorize(['read', 'ADMIN']), getAuditLogs);

module.exports = router;


const express = require('express');
const router = express.Router();
const { getEnergyStatus, updateModuleStatus, approveModule, getApprovalStatus } = require('../controllers/energyController');
const { authorize } = require('../middleware/authMiddleware');

router.get('/status', authorize(['read', 'ADMIN']), getEnergyStatus);
router.post('/status', authorize(['override', 'shutdown', 'restart', 'ADMIN']), updateModuleStatus);

router.get('/approvals', authorize(['read', 'ADMIN']), getApprovalStatus);
router.post('/approve', authorize(['approve', 'ADMIN']), approveModule);

module.exports = router;

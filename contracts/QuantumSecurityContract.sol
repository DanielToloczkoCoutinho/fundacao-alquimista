// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract QuantumSecurityContract is Ownable, AccessControl, Pausable, ReentrancyGuard {

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");

    // Estrutura para uma transação
    struct Transaction {
        uint256 id;
        address user;
        uint256 value;
        bytes32 dataHash; // Hash dos dados da transação para verificação de integridade
        uint256 timestamp;
        uint256 expirationTime;
        Status status;
    }

    // Estrutura para uma chave quântica registrada
    struct QuantumKey {
        bytes32 keyId;
        string keyData; // Representação simplificada da chave
        uint256 timestamp;
        bool isValid;
        uint256 errorRate; // Em base points (e.g., 100 = 1%)
    }

    enum Status { Pending, Completed, Expired }

    uint256 private nextTransactionId;
    mapping(uint256 => Transaction) public transactionRecords;
    mapping(bytes32 => QuantumKey) public quantumKeys;

    uint256 public errorThreshold = 500; // Limite de erro de 5%

    // Eventos de auditoria aprimorados
    event TransactionRegistered(uint256 indexed transactionId, address indexed user, uint256 value, bytes32 dataHash);
    event TransactionStatusChanged(uint256 indexed transactionId, Status oldStatus, Status newStatus);
    event KeyRegistered(bytes32 indexed keyId, bool isValid, uint256 errorRate);
    event ThresholdUpdated(uint256 newThreshold);

    constructor() Ownable(msg.sender) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(OPERATOR_ROLE, msg.sender);
    }

    // --- Funções de Gestão de Papéis ---

    function grantOperatorRole(address operator) public onlyRole(ADMIN_ROLE) {
        grantRole(OPERATOR_ROLE, operator);
    }

    function revokeOperatorRole(address operator) public onlyRole(ADMIN_ROLE) {
        revokeRole(OPERATOR_ROLE, operator);
    }

    // --- Funções de Segurança e Controle ---

    function pause() public onlyRole(ADMIN_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(ADMIN_ROLE) {
        _unpause();
    }

    function updateErrorThreshold(uint256 _newThreshold) public onlyRole(ADMIN_ROLE) {
        errorThreshold = _newThreshold;
        emit ThresholdUpdated(_newThreshold);
    }

    // --- Funções do Contrato ---

    function registerTransaction(address user, uint256 value, bytes32 dataHash, uint256 expiresIn) public onlyRole(OPERATOR_ROLE) whenNotPaused nonReentrant {
        uint256 id = nextTransactionId++;
        transactionRecords[id] = Transaction({
            id: id,
            user: user,
            value: value,
            dataHash: dataHash,
            timestamp: block.timestamp,
            expirationTime: block.timestamp + expiresIn,
            status: Status.Pending
        });
        emit TransactionRegistered(id, user, value, dataHash);
    }

    function registerAndValidateKey(string calldata keyData, uint256 qber) public onlyRole(OPERATOR_ROLE) whenNotPaused nonReentrant {
        bytes32 keyId = keccak256(abi.encodePacked(keyData, block.timestamp));
        bool isValid = qber <= errorThreshold;
        quantumKeys[keyId] = QuantumKey({
            keyId: keyId,
            keyData: keyData,
            timestamp: block.timestamp,
            isValid: isValid,
            errorRate: qber
        });
        emit KeyRegistered(keyId, isValid, qber);
        if (!isValid) {
            // Lógica de alerta pode ser acionada aqui
        }
    }
    
    function adjustTransaction(uint256 transactionId, uint256 newValue, bytes32 newDataHash) public onlyRole(ADMIN_ROLE) whenNotPaused {
        require(transactionRecords[transactionId].timestamp != 0, "Transaction does not exist");
        Transaction storage t = transactionRecords[transactionId];
        t.value = newValue;
        t.dataHash = newDataHash;
        emit TransactionRegistered(transactionId, t.user, newValue, newDataHash);
    }

    function verifyTransactionIntegrity(uint256 transactionId, bytes32 dataHash) public view returns (bool) {
        return transactionRecords[transactionId].dataHash == dataHash;
    }

    function expireOldTransactions(uint256 transactionId) public {
        Transaction storage t = transactionRecords[transactionId];
        require(t.timestamp != 0, "Transaction does not exist");
        if (block.timestamp > t.expirationTime) {
            Status oldStatus = t.status;
            t.status = Status.Expired;
            emit TransactionStatusChanged(transactionId, oldStatus, Status.Expired);
        }
    }

    function invalidateKey(bytes32 keyId) public onlyRole(ADMIN_ROLE) {
        require(quantumKeys[keyId].timestamp != 0, "Key does not exist");
        quantumKeys[keyId].isValid = false;
        emit KeyRegistered(keyId, false, quantumKeys[keyId].errorRate);
    }
}

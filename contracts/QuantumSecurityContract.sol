// SPDX-License-Identifier: Founders-Will-1.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract QuantumSecurityContract is AccessControl, Pausable, ReentrancyGuard {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");

    uint256 public errorThreshold = 500; // Representa 5% (500 / 10000)

    enum TransactionStatus { Pending, Completed, Expired }
    enum KeyStatus { Valid, Invalid }

    struct Transaction {
        address user;
        uint256 value;
        bytes32 dataHash;
        uint256 timestamp;
        uint256 expirationTime;
        TransactionStatus status;
    }

    struct QuantumKey {
        bytes32 keyId;
        bytes keyData;
        KeyStatus status;
        uint256 errorRate; // Taxa de erro em base 10000 (e.g., 100 = 1%)
        uint256 timestamp;
    }

    mapping(uint256 => Transaction) public transactionRecords;
    mapping(bytes32 => QuantumKey) public quantumKeys;
    uint256 public nextTransactionId;

    event TransactionStatusChanged(uint256 indexed transactionId, TransactionStatus prevStatus, TransactionStatus newStatus);
    event KeyRegistered(bytes32 indexed keyId, KeyStatus status, uint256 errorRate);
    
    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(OPERATOR_ROLE, msg.sender);
    }
    
    // --- Funções de Governança (Apenas Admin) ---

    function grantOperatorRole(address user) public onlyRole(ADMIN_ROLE) {
        grantRole(OPERATOR_ROLE, user);
    }

    function revokeOperatorRole(address user) public onlyRole(ADMIN_ROLE) {
        revokeRole(OPERATOR_ROLE, user);
    }

    function updateErrorThreshold(uint256 _newThreshold) public onlyRole(ADMIN_ROLE) {
        errorThreshold = _newThreshold;
    }
    
    function pause() public onlyRole(ADMIN_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(ADMIN_ROLE) {
        _unpause();
    }

    // --- Funções do Contrato ---

    function registerAndValidateKey(bytes32 keyId, bytes calldata keyData, uint256 errorRate) public onlyRole(OPERATOR_ROLE) nonReentrant whenNotPaused {
        KeyStatus status = (errorRate <= errorThreshold) ? KeyStatus.Valid : KeyStatus.Invalid;
        quantumKeys[keyId] = QuantumKey(keyId, keyData, status, errorRate, block.timestamp);
        emit KeyRegistered(keyId, status, errorRate);
    }

    function registerTransaction(address user, uint256 value, bytes32 dataHash, uint256 duration) public onlyRole(OPERATOR_ROLE) nonReentrant whenNotPaused {
        uint256 id = nextTransactionId++;
        transactionRecords[id] = Transaction(
            user,
            value,
            dataHash,
            block.timestamp,
            block.timestamp + duration,
            TransactionStatus.Pending
        );
        emit TransactionStatusChanged(id, TransactionStatus.Pending, TransactionStatus.Pending);
    }

    function verifyTransactionIntegrity(uint256 transactionId, bytes32 dataHash) public view returns (bool) {
        require(transactionRecords[transactionId].timestamp != 0, "Transaction does not exist");
        return transactionRecords[transactionId].dataHash == dataHash;
    }

    function adjustTransaction(uint256 transactionId, uint256 newValue, bytes32 newDataHash) public onlyRole(ADMIN_ROLE) nonReentrant whenNotPaused {
        require(transactionRecords[transactionId].timestamp != 0, "Transaction does not exist");
        Transaction storage t = transactionRecords[transactionId];
        t.value = newValue;
        t.dataHash = newDataHash;
        emit TransactionStatusChanged(transactionId, t.status, t.status); // Log a re-validação
    }

    function expireOldTransactions(uint256[] calldata transactionIds) public onlyRole(OPERATOR_ROLE) {
        for(uint i = 0; i < transactionIds.length; i++) {
            uint256 id = transactionIds[i];
            if (transactionRecords[id].timestamp != 0 && transactionRecords[id].expirationTime <= block.timestamp) {
                TransactionStatus oldStatus = transactionRecords[id].status;
                transactionRecords[id].status = TransactionStatus.Expired;
                emit TransactionStatusChanged(id, oldStatus, TransactionStatus.Expired);
            }
        }
    }

    function invalidateKey(bytes32 keyId) public onlyRole(ADMIN_ROLE) {
        require(quantumKeys[keyId].timestamp != 0, "Key does not exist");
        quantumKeys[keyId].status = KeyStatus.Invalid;
        emit KeyRegistered(keyId, KeyStatus.Invalid, quantumKeys[keyId].errorRate);
    }
}
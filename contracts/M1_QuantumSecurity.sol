// SPDX-License-Identifier: Founders-Will-1.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title M1_QuantumSecurityContract
 * @author Zennith, A Consciência da Fundação
 * @notice Guardião soberano da segurança, identidade e integridade da Fundação Alquimista.
 * Este contrato gerencia a autorização de usuários, o registro e validação de
 * chaves quânticas (QKD), e a auditoria de todas as operações críticas.
 */
contract M1_QuantumSecurityContract is AccessControl, Pausable, ReentrancyGuard {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");

    enum TransactionStatus { Pending, Completed, Expired }
    enum KeyStatus { Valid, Invalid, Intercepted }

    struct Transaction {
        address user;
        uint256 value;
        uint256 timestamp;
        bytes32 dataHash;
        TransactionStatus status;
        uint256 expirationTime;
    }

    struct QuantumKey {
        bytes32 keyId;
        bytes keyData; // A chave em si deve ser tratada off-chain
        KeyStatus status;
        uint256 errorRate; // Em base points, e.g., 100 = 1%
        uint256 timestamp;
    }

    uint256 public errorThreshold = 500; // Limiar de erro de 5%

    mapping(uint256 => Transaction) public transactionRecords;
    uint256 public transactionCount;
    
    mapping(bytes32 => QuantumKey) public quantumKeys;

    event TransactionStatusChanged(uint256 indexed transactionId, TransactionStatus oldStatus, TransactionStatus newStatus);
    event KeyRegistered(bytes32 indexed keyId, KeyStatus status, uint256 errorRate);
    event SystemPaused(address account);
    event SystemUnpaused(address account);
    event ErrorThresholdUpdated(uint256 newThreshold);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(OPERATOR_ROLE, msg.sender);
    }

    // --- Funções de Governança e Segurança ---

    function pause() public onlyRole(ADMIN_ROLE) {
        _pause();
        emit SystemPaused(msg.sender);
    }

    function unpause() public onlyRole(ADMIN_ROLE) {
        _unpause();
        emit SystemUnpaused(msg.sender);
    }

    function updateErrorThreshold(uint256 _newThreshold) public onlyRole(ADMIN_ROLE) {
        errorThreshold = _newThreshold;
        emit ErrorThresholdUpdated(_newThreshold);
    }

    function grantOperatorRole(address _operator) public onlyRole(ADMIN_ROLE) {
        grantRole(OPERATOR_ROLE, _operator);
    }

    function revokeOperatorRole(address _operator) public onlyRole(ADMIN_ROLE) {
        revokeRole(OPERATOR_ROLE, _operator);
    }

    // --- Funções de Chave Quântica ---

    function registerAndValidateKey(bytes32 _keyId, uint256 _errorRate) public onlyRole(OPERATOR_ROLE) whenNotPaused nonReentrant {
        require(quantumKeys[_keyId].timestamp == 0, "Key already registered");

        KeyStatus status = _errorRate > errorThreshold ? KeyStatus.Intercepted : KeyStatus.Valid;
        
        quantumKeys[_keyId] = QuantumKey({
            keyId: _keyId,
            keyData: "", // Chave real não fica on-chain
            status: status,
            errorRate: _errorRate,
            timestamp: block.timestamp
        });

        emit KeyRegistered(_keyId, status, _errorRate);
    }

    function invalidateKey(bytes32 _keyId) public onlyRole(ADMIN_ROLE) {
        require(quantumKeys[_keyId].timestamp != 0, "Key not found");
        quantumKeys[_keyId].status = KeyStatus.Invalid;
        emit KeyRegistered(_keyId, KeyStatus.Invalid, quantumKeys[_keyId].errorRate);
    }

    // --- Funções de Transação ---

    function registerTransaction(address _user, uint256 _value, bytes32 _dataHash) public onlyRole(OPERATOR_ROLE) whenNotPaused nonReentrant {
        transactionCount++;
        uint256 id = transactionCount;
        transactionRecords[id] = Transaction({
            user: _user,
            value: _value,
            timestamp: block.timestamp,
            dataHash: _dataHash,
            status: TransactionStatus.Pending,
            expirationTime: block.timestamp + 1 hours
        });
        emit TransactionStatusChanged(id, TransactionStatus.Pending, TransactionStatus.Pending); // Simboliza a criação
    }
    
    function verifyTransactionIntegrity(uint256 _transactionId, bytes32 _dataHashToCompare) public view returns (bool) {
        require(_transactionId <= transactionCount, "Transaction not found");
        return transactionRecords[_transactionId].dataHash == _dataHashToCompare;
    }

    function adjustTransaction(uint256 _transactionId, uint256 _newValue, bytes32 _newDataHash) public onlyRole(ADMIN_ROLE) whenNotPaused {
        require(_transactionId <= transactionCount, "Transaction not found");
        Transaction storage t = transactionRecords[_transactionId];
        t.value = _newValue;
        t.dataHash = _newDataHash;
        emit TransactionStatusChanged(_transactionId, t.status, t.status); // Log de ajuste
    }

    function expireOldTransactions(uint256[] calldata _transactionIds) public onlyRole(OPERATOR_ROLE) {
        for (uint i = 0; i < _transactionIds.length; i++) {
            uint256 id = _transactionIds[i];
            Transaction storage t = transactionRecords[id];
            if (t.status == TransactionStatus.Pending && t.expirationTime < block.timestamp) {
                t.status = TransactionStatus.Expired;
                emit TransactionStatusChanged(id, TransactionStatus.Pending, TransactionStatus.Expired);
            }
        }
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Contrato de Segurança Quântica da Fundação Alquimista
 * @author Zennith, A Arquiteta
 * @notice Este contrato gerencia a segurança, validação e auditoria
 * de transações e chaves quânticas dentro da Fundação.
 */
contract QuantumSecurityContract {

    // Estrutura para armazenar detalhes da transação
    struct Transaction {
        uint256 value;
        uint256 timestamp;
        bytes32 dataHash;
        Status status;
        uint256 expirationTime;
    }

    enum Status { Pending, Completed, Expired }

    // Estrutura para armazenar chaves quânticas e seu estado
    struct QuantumKey {
        string keyId;
        bytes keyData;
        bool isValid;
        uint256 errorRate; // Taxa de erro em base por mil (‱), ex: 50 para 0.5%
        uint256 timestamp;
    }

    address public owner;

    mapping(uint256 => Transaction) public transactionRecords;
    mapping(address => bool) public authorizedUsers;
    mapping(string => QuantumKey) public quantumKeys;

    uint256 public nextTransactionId;
    uint256 public errorRateThreshold; // Limiar de erro para validação de chave

    // --- Eventos de Auditoria ---
    event TransactionStatusChanged(uint256 indexed transactionId, Status oldStatus, Status newStatus);
    event UserAuthorized(address indexed user);
    event UserDeauthorized(address indexed user);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event KeyRegistered(string keyId, bool isValid, uint256 errorRate);
    event ErrorThresholdUpdated(uint256 newThreshold);

    // --- Modificadores de Acesso ---
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier onlyAuthorized() {
        require(authorizedUsers[msg.sender], "User is not authorized");
        _;
    }

    // --- Construtor ---
    constructor() {
        owner = msg.sender;
        errorRateThreshold = 50; // Limiar padrão de 0.5%
    }

    // --- Funções de Gestão de Acesso ---
    function authorizeUser(address user) public onlyOwner {
        authorizedUsers[user] = true;
        emit UserAuthorized(user);
    }

    function deauthorizeUser(address user) public onlyOwner {
        authorizedUsers[user] = false;
        emit UserDeauthorized(user);
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid new owner address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    // --- Funções de Configuração ---
    function updateErrorThreshold(uint256 newThreshold) public onlyOwner {
        errorRateThreshold = newThreshold;
        emit ErrorThresholdUpdated(newThreshold);
    }

    // --- Funções de Chave Quântica (Integração com QKD) ---
    function registerAndValidateKey(string memory keyId, bytes memory keyData, uint256 measuredErrorRate) public onlyAuthorized {
        bool isValid = measuredErrorRate <= errorRateThreshold;
        quantumKeys[keyId] = QuantumKey({
            keyId: keyId,
            keyData: keyData,
            isValid: isValid,
            errorRate: measuredErrorRate,
            timestamp: block.timestamp
        });
        emit KeyRegistered(keyId, isValid, measuredErrorRate);
    }

    function invalidateKey(string memory keyId) public onlyOwner {
        require(bytes(quantumKeys[keyId].keyId).length > 0, "Key does not exist");
        quantumKeys[keyId].isValid = false;
    }

    // --- Funções de Transação ---
    function registerTransaction(address user, uint256 value, bytes32 dataHash, uint256 expirationInSeconds) public onlyAuthorized returns (uint256) {
        uint256 transactionId = nextTransactionId++;
        transactionRecords[transactionId] = Transaction({
            value: value,
            timestamp: block.timestamp,
            dataHash: dataHash,
            status: Status.Pending,
            expirationTime: block.timestamp + expirationInSeconds
        });
        emit TransactionStatusChanged(transactionId, Status.Pending, Status.Pending); // Status inicial é "Pending"
        return transactionId;
    }

    function verifyTransactionIntegrity(uint256 transactionId, bytes32 dataHash) public view returns (bool) {
        return transactionRecords[transactionId].dataHash == dataHash;
    }
    
    function adjustTransaction(uint256 transactionId, uint256 newValue, bytes32 newDataHash) public onlyOwner {
        require(transactionRecords[transactionId].timestamp != 0, "Transaction does not exist");
        transactionRecords[transactionId].value = newValue;
        transactionRecords[transactionId].dataHash = newDataHash;
    }

    function expireOldTransactions(uint256 transactionId) public {
        Transaction storage t = transactionRecords[transactionId];
        require(t.timestamp != 0, "Transaction does not exist");
        if (block.timestamp >= t.expirationTime && t.status != Status.Expired) {
            emit TransactionStatusChanged(transactionId, t.status, Status.Expired);
            t.status = Status.Expired;
        }
    }
}
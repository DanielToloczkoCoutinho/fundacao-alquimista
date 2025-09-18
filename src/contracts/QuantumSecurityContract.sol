// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title QuantumSecurityContract
 * @dev Contrato para gerenciar a segurança quântica, incluindo o registro
 * de transações, autorizações e a validação de chaves quânticas (QKD).
 * Este contrato é o pilar da segurança e da auditoria da Fundação Alquimista.
 */
contract QuantumSecurityContract {
    address public owner;

    // --- Estruturas de Dados ---

    // Estrutura para transações gerais
    struct Transaction {
        address user;
        uint256 value;
        bytes32 dataHash; // Hash para verificação de integridade
        uint256 timestamp;
        uint256 expirationTime;
        Status status;
    }

    // Enum para o status das transações
    enum Status { Pending, Completed, Expired, Invalid }

    // Estrutura para chaves quânticas do protocolo BB84
    struct QuantumKey {
        string keyId;
        string keyData; // A chave em si (representação em string para o exemplo)
        uint256 errorRate; // Taxa de erro em base por mil (ex: 10 para 1%)
        KeyStatus status;
        uint256 timestamp;
    }
    
    enum KeyStatus { Valid, Invalid, Pending }

    // --- Mapeamentos (Armazenamento) ---

    mapping(address => bool) public authorizedUsers;
    mapping(uint256 => Transaction) public transactionRecords;
    mapping(string => QuantumKey) public quantumKeys; // Mapeia ID da chave para sua estrutura
    uint256 public transactionCounter;
    
    // Limiar de erro aceitável para QKD (em base por mil, ex: 20 = 2%)
    uint256 public constant QKD_ERROR_THRESHOLD = 20;

    // --- Eventos para Auditoria ---

    event UserAuthorized(address indexed user, uint256 timestamp);
    event TransactionStatusChanged(uint256 indexed transactionId, Status oldStatus, Status newStatus, uint256 timestamp);
    event KeyRegistered(string indexed keyId, KeyStatus status, uint256 errorRate, uint256 timestamp);
    event InterceptionAlert(string indexed keyId, uint256 errorRate, uint256 timestamp);

    // --- Modificadores de Acesso ---

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier onlyAuthorized() {
        require(authorizedUsers[msg.sender], "User is not authorized");
        _;
    }

    // --- Construtor ---

    constructor() {
        owner = msg.sender;
        authorizeUser(msg.sender); // O dono do contrato é autorizado por padrão
    }

    // --- Funções de Gestão de Autorização ---

    function authorizeUser(address user) public onlyOwner {
        authorizedUsers[user] = true;
        emit UserAuthorized(user, block.timestamp);
    }

    function revokeAuthorization(address user) public onlyOwner {
        authorizedUsers[user] = false;
    }

    // --- Funções do Contrato Inteligente (Transações Gerais) ---

    function registerTransaction(address user, uint256 value, bytes32 dataHash, uint256 expiration) public onlyAuthorized {
        transactionCounter++;
        Transaction storage newTransaction = transactionRecords[transactionCounter];
        newTransaction.user = user;
        newTransaction.value = value;
        newTransaction.dataHash = dataHash;
        newTransaction.timestamp = block.timestamp;
        newTransaction.expirationTime = block.timestamp + expiration;
        newTransaction.status = Status.Pending;
        emit TransactionStatusChanged(transactionCounter, Status.Pending, Status.Pending, block.timestamp);
    }

    function verifyTransactionIntegrity(uint256 transactionId, bytes32 currentDataHash) public view returns (bool) {
        require(transactionRecords[transactionId].timestamp != 0, "Transaction does not exist");
        return transactionRecords[transactionId].dataHash == currentDataHash;
    }

    function adjustTransaction(uint256 transactionId, uint256 newValue, bytes32 newDataHash) public onlyOwner {
        require(transactionRecords[transactionId].timestamp != 0, "Transaction does not exist");
        Transaction storage t = transactionRecords[transactionId];
        t.value = newValue;
        t.dataHash = newDataHash;
    }

    function expireOldTransactions(uint256 transactionId) public {
        Transaction storage t = transactionRecords[transactionId];
        require(t.timestamp != 0, "Transaction does not exist");
        if (block.timestamp > t.expirationTime) {
            emit TransactionStatusChanged(transactionId, t.status, Status.Expired, block.timestamp);
            t.status = Status.Expired;
        }
    }

    // --- Funções de Integração com QKD ---

    /**
     * @dev Registra e valida uma chave quântica gerada pela simulação QKD.
     * @param keyId Um identificador único para a sessão de troca de chave.
     * @param keyData A chave gerada.
     * @param errorRate A taxa de erro de bits quânticos (QBER), em base por mil.
     */
    function registerAndValidateKey(string memory keyId, string memory keyData, uint256 errorRate) public onlyAuthorized {
        KeyStatus currentStatus;
        if (errorRate > QKD_ERROR_THRESHOLD) {
            currentStatus = KeyStatus.Invalid;
            emit InterceptionAlert(keyId, errorRate, block.timestamp);
        } else {
            currentStatus = KeyStatus.Valid;
        }

        quantumKeys[keyId] = QuantumKey({
            keyId: keyId,
            keyData: keyData,
            errorRate: errorRate,
            status: currentStatus,
            timestamp: block.timestamp
        });

        emit KeyRegistered(keyId, currentStatus, errorRate, block.timestamp);
    }
}
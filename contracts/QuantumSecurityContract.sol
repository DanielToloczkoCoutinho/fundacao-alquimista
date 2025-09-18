// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title QuantumSecurityContract
 * @dev Contrato para registrar transações seguras, com auditoria e mecanismos de segurança.
 * Apenas usuários autorizados podem interagir, e o proprietário tem privilégios de recuperação.
 */
contract QuantumSecurityContract {

    address public owner;

    enum Status { Pending, Completed, Expired, Canceled }

    struct Transaction {
        uint256 value;
        bytes32 dataHash; // Hash dos dados da transação para verificação de integridade
        uint256 timestamp;
        uint256 expirationTime;
        Status status;
    }

    // Mapeamento de usuários para seus registros de transações (usando um ID de transação)
    mapping(address => mapping(uint256 => Transaction)) public userTransactions;
    mapping(address => uint256) public userTransactionCount;

    // Mapeamento para usuários autorizados
    mapping(address => bool) public authorizedUsers;

    // --- Eventos de Auditoria ---
    event TransactionStatusChanged(uint256 indexed transactionId, address indexed user, Status oldStatus, Status newStatus, uint256 timestamp);
    event UserAuthorized(address indexed user, address indexed authorizedBy);
    event UserDeauthorized(address indexed user, address indexed deauthorizedBy);
    event TransactionAdjusted(uint256 indexed transactionId, address indexed user, address indexed adjustedBy);

    // --- Modificadores de Acesso ---
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    modifier onlyAuthorized() {
        require(authorizedUsers[msg.sender], "User is not authorized");
        _;
    }

    // --- Construtor ---
    constructor() {
        owner = msg.sender;
        authorizedUsers[msg.sender] = true; // O criador do contrato é autorizado por padrão
    }

    // --- Funções de Gestão de Usuários ---
    function authorizeUser(address user) public onlyOwner {
        authorizedUsers[user] = true;
        emit UserAuthorized(user, msg.sender);
    }

    function deauthorizeUser(address user) public onlyOwner {
        authorizedUsers[user] = false;
        emit UserDeauthorized(user, msg.sender);
    }

    // --- Funções de Transação ---
    function registerTransaction(uint256 value, bytes32 dataHash, uint256 expirationInSeconds) public onlyAuthorized returns (uint256) {
        uint256 transactionId = userTransactionCount[msg.sender];
        
        userTransactions[msg.sender][transactionId] = Transaction({
            value: value,
            dataHash: dataHash,
            timestamp: block.timestamp,
            expirationTime: block.timestamp + expirationInSeconds,
            status: Status.Pending
        });

        emit TransactionStatusChanged(transactionId, msg.sender, Status.Pending, Status.Pending, block.timestamp);
        
        userTransactionCount[msg.sender]++;
        return transactionId;
    }

    // --- Funções de Segurança e Manutenção ---
    function verifyTransactionIntegrity(address user, uint256 transactionId, bytes32 currentDataHash) public view returns (bool) {
        require(userTransactionCount[user] > transactionId, "Transaction does not exist");
        return userTransactions[user][transactionId].dataHash == currentDataHash;
    }
    
    function adjustTransaction(address user, uint256 transactionId, uint256 newValue, bytes32 newDataHash) public onlyOwner {
        require(userTransactionCount[user] > transactionId, "Transaction does not exist");
        Transaction storage t = userTransactions[user][transactionId];
        
        t.value = newValue;
        t.dataHash = newDataHash;
        
        emit TransactionAdjusted(transactionId, user, msg.sender);
    }

    function expireOldTransactions(address user, uint256 transactionId) public {
        require(userTransactionCount[user] > transactionId, "Transaction does not exist");
        Transaction storage t = userTransactions[user][transactionId];
        require(t.status == Status.Pending, "Transaction is not pending");
        require(block.timestamp > t.expirationTime, "Transaction has not expired yet");
        
        Status oldStatus = t.status;
        t.status = Status.Expired;
        emit TransactionStatusChanged(transactionId, user, oldStatus, Status.Expired, block.timestamp);
    }

    // --- Funções de Consulta ---
    function getTransaction(address user, uint256 transactionId) public view returns (Transaction memory) {
        require(userTransactionCount[user] > transactionId, "Transaction does not exist");
        return userTransactions[user][transactionId];
    }
}

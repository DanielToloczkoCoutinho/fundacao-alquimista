// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title QuantumSecurityContract
 * @dev Contrato para registrar transações de dados quânticos com segurança,
 * auditoria e mecanismos de verificação aprimorados.
 * Apenas usuários autorizados podem registrar transações, e apenas o
 * proprietário do contrato (Fundador) pode ajustar transações ou autorizar novos usuários.
 */
contract QuantumSecurityContract {

    // --- State Variables ---

    address public owner;

    enum TransactionStatus { Pending, Completed, Expired }

    struct Transaction {
        uint256 value;
        uint256 timestamp;
        uint256 expirationTime;
        bytes32 dataHash; // Hash para verificação de integridade dos dados
        TransactionStatus status;
        bool exists;
    }

    mapping(address => Transaction) public transactionRecords;
    mapping(address => bool) public authorizedUsers;

    // --- Events ---

    event TransactionRegistered(address indexed user, uint256 value, bytes32 dataHash, uint256 expiration);
    event TransactionAdjusted(address indexed user, uint256 newValue, bytes32 newDataHash);
    event TransactionCompleted(address indexed user);
    event UserAuthorized(address indexed user);
    event UserDeauthorized(address indexed user);

    // --- Modifiers ---

    modifier onlyAuthorized() {
        require(authorizedUsers[msg.sender], "QuantumSecurity: User not authorized");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "QuantumSecurity: Caller is not the owner");
        _;
    }

    // --- Constructor ---

    constructor() {
        owner = msg.sender;
        authorizedUsers[msg.sender] = true; // O proprietário é autorizado por padrão
        emit UserAuthorized(msg.sender);
    }

    // --- Functions ---

    /**
     * @dev Autoriza um novo usuário a registrar transações.
     * @param user O endereço do usuário a ser autorizado.
     */
    function authorizeUser(address user) public onlyOwner {
        require(user != address(0), "QuantumSecurity: Invalid user address");
        authorizedUsers[user] = true;
        emit UserAuthorized(user);
    }

    /**
     * @dev Remove a autorização de um usuário.
     * @param user O endereço do usuário a ser desautorizado.
     */
    function deauthorizeUser(address user) public onlyOwner {
        require(user != owner, "QuantumSecurity: Cannot deauthorize owner");
        authorizedUsers[user] = false;
        emit UserDeauthorized(user);
    }

    /**
     * @dev Registra uma nova transação com expiração e hash de integridade.
     * @param user O endereço do usuário associado à transação.
     * @param value O valor numérico da transação.
     * @param dataHash O hash SHA-256 dos dados da transação para verificação de integridade.
     * @param validityDurationInSeconds A duração em segundos pela qual a transação é válida.
     */
    function registerTransaction(address user, uint256 value, bytes32 dataHash, uint256 validityDurationInSeconds) public onlyAuthorized {
        uint256 expirationTimestamp = block.timestamp + validityDurationInSeconds;
        transactionRecords[user] = Transaction({
            value: value,
            timestamp: block.timestamp,
            expirationTime: expirationTimestamp,
            dataHash: dataHash,
            status: TransactionStatus.Pending,
            exists: true
        });
        emit TransactionRegistered(user, value, dataHash, expirationTimestamp);
    }

    /**
     * @dev Permite que um usuário autorizado marque sua transação como concluída antes da expiração.
     */
    function completeTransaction() public onlyAuthorized {
        Transaction storage trx = transactionRecords[msg.sender];
        require(trx.exists, "QuantumSecurity: No transaction found for this user");
        require(block.timestamp < trx.expirationTime, "QuantumSecurity: Transaction has expired");
        require(trx.status == TransactionStatus.Pending, "QuantumSecurity: Transaction not pending");

        trx.status = TransactionStatus.Completed;
        emit TransactionCompleted(msg.sender);
    }

    /**
     * @dev Verifica a integridade de uma transação comparando o hash.
     * @param user O usuário cuja transação será verificada.
     * @param dataHash O hash dos dados atuais para comparação.
     * @return bool True se o hash corresponder, false caso contrário.
     */
    function verifyTransactionIntegrity(address user, bytes32 dataHash) public view returns (bool) {
        return transactionRecords[user].exists && transactionRecords[user].dataHash == dataHash;
    }

    /**
     * @dev Função de recuperação para o proprietário ajustar uma transação.
     * @param user O usuário cuja transação será ajustada.
     * @param newValue O novo valor da transação.
     * @param newDataHash O novo hash de integridade dos dados.
     */
    function adjustTransaction(address user, uint256 newValue, bytes32 newDataHash) public onlyOwner {
        require(transactionRecords[user].exists, "QuantumSecurity: No transaction found to adjust");
        transactionRecords[user].value = newValue;
        transactionRecords[user].dataHash = newDataHash;
        emit TransactionAdjusted(user, newValue, newDataHash);
    }

    /**
     * @dev Obtém os detalhes de uma transação de um usuário.
     * @param user O endereço do usuário.
     * @return A estrutura completa da transação.
     */
    function getTransaction(address user) public view returns (Transaction memory) {
        Transaction storage trx = transactionRecords[user];
        if (block.timestamp >= trx.expirationTime && trx.status == TransactionStatus.Pending) {
             Transaction memory expiredTrx = trx;
             expiredTrx.status = TransactionStatus.Expired;
             return expiredTrx;
        }
        return trx;
    }
}

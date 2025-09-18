// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title QuantumSecurityContract
 * @dev Contrato para registrar transações seguras e gerenciar autorizações
 * na Blockchain Quântica da Fundação Alquimista.
 * Este contrato é a primeira manifestação da Lei Imutável (Módulo 144)
 * em um ambiente de blockchain, garantindo a integridade e a rastreabilidade
 * de eventos vibracionais e operacionais.
 */
contract QuantumSecurityContract {

    // Endereço do Fundador, que tem a autoridade máxima
    address public owner;

    // Mapeamento para armazenar dados de transações (user => value)
    mapping(address => uint256) public transactionRecords;

    // Mapeamento para usuários autorizados (guardian => isAuthorized)
    mapping(address => bool) public authorizedGuardians;

    // --- Eventos de Auditoria ---
    event TransactionLogged(address indexed user, uint256 value, uint256 timestamp);
    event GuardianAuthorized(address indexed guardian);
    event GuardianRevoked(address indexed guardian);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    // --- Modificadores de Acesso ---

    /**
     * @dev Garante que a chamada seja feita apenas pelo proprietário do contrato (Fundador).
     */
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    /**
     * @dev Garante que a chamada seja feita apenas por um guardião autorizado.
     */
    modifier onlyAuthorized() {
        require(authorizedGuardians[msg.sender], "Guardian is not authorized");
        _;
    }

    /**
     * @dev Construtor do contrato, define o Fundador como o proprietário inicial.
     */
    constructor() {
        owner = msg.sender;
        authorizedGuardians[msg.sender] = true; // O proprietário é sempre autorizado
        emit GuardianAuthorized(msg.sender);
    }

    /**
     * @dev Autoriza um novo guardião a interagir com o contrato. Apenas o Fundador pode chamar.
     * @param guardian O endereço do guardião a ser autorizado.
     */
    function authorizeGuardian(address guardian) public onlyOwner {
        require(guardian != address(0), "Invalid address");
        authorizedGuardians[guardian] = true;
        emit GuardianAuthorized(guardian);
    }

    /**
     * @dev Revoga a autorização de um guardião. Apenas o Fundador pode chamar.
     * @param guardian O endereço do guardião a ser revogado.
     */
    function revokeGuardian(address guardian) public onlyOwner {
        require(guardian != owner, "Cannot revoke owner");
        authorizedGuardians[guardian] = false;
        emit GuardianRevoked(guardian);
    }
    
    /**
     * @dev Registra uma transação de dados quânticos ou vibracionais.
     * @param user O endereço associado à transação.
     * @param value O valor ou dado a ser registrado.
     */
    function registerTransaction(address user, uint256 value) public onlyAuthorized {
        transactionRecords[user] = value;
        emit TransactionLogged(user, value, block.timestamp);
    }

    /**
     * @dev Retorna o valor de uma transação para um usuário específico.
     * @param user O endereço a ser consultado.
     * @return O valor da última transação registrada para o usuário.
     */
    function getTransactionValue(address user) public view returns (uint256) {
        return transactionRecords[user];
    }

    /**
     * @dev Permite ao Fundador atual transferir a propriedade do contrato.
     * @param newOwner O endereço do novo Fundador.
     */
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid new owner address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
        authorizedGuardians[newOwner] = true;
    }
}

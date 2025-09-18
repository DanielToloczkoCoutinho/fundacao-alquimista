// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Importando contratos da OpenZeppelin para segurança e controle de acesso
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title QuantumSecurityContract
 * @dev Um contrato para gerenciar transações e chaves quânticas com segurança.
 * - Herda de Ownable para um controle de proprietário claro.
 * - Herda de Pausable para permitir a interrupção de emergência das funções.
 * - Herda de ReentrancyGuard para prevenir ataques de re-entrada.
 */
contract QuantumSecurityContract is Ownable, Pausable, ReentrancyGuard {

    // --- Estruturas de Dados ---

    enum TransactionStatus { Pending, Completed, Expired }
    enum KeyStatus { Valid, Invalid, Deprecated }

    struct Transaction {
        uint256 value;
        bytes32 dataHash; // Hash para verificação de integridade
        uint256 timestamp;
        uint256 expirationTime;
        TransactionStatus status;
    }

    struct QuantumKey {
        bytes keyData;
        KeyStatus status;
        uint256 errorRate; // Taxa de erro em base points (e.g., 100 = 1%)
        uint256 timestamp;
    }

    // --- Variáveis de Estado ---

    mapping(address => bool) public authorizedUsers;
    mapping(bytes32 => Transaction) public transactionRecords;
    mapping(bytes32 => QuantumKey) public quantumKeys;

    uint256 public errorThreshold = 500; // Limiar de erro de 5% (500/10000)

    // --- Eventos para Auditoria ---

    event UserAuthorized(address indexed user);
    event UserDeauthorized(address indexed user);
    event TransactionStatusChanged(bytes32 indexed txId, TransactionStatus prevStatus, TransactionStatus newStatus);
    event KeyRegistered(bytes32 indexed keyId, KeyStatus status, uint256 errorRate);
    event ErrorThresholdUpdated(uint256 newThreshold);
    
    // --- Construtor ---

    constructor() Ownable(msg.sender) {}

    // --- Modificadores ---

    modifier onlyAuthorized() {
        require(authorizedUsers[msg.sender], "Auth: sender is not authorized");
        _;
    }

    // --- Funções de Gestão de Acesso (Apenas Proprietário) ---

    function authorizeUser(address user) public onlyOwner {
        authorizedUsers[user] = true;
        emit UserAuthorized(user);
    }

    function deauthorizeUser(address user) public onlyOwner {
        authorizedUsers[user] = false;
        emit UserDeauthorized(user);
    }

    function updateErrorThreshold(uint256 _newThreshold) public onlyOwner {
        errorThreshold = _newThreshold;
        emit ErrorThresholdUpdated(_newThreshold);
    }

    // --- Funções de Transação e Chave (Autorizadas e Não Pausadas) ---

    function registerAndValidateKey(bytes32 keyId, bytes calldata keyData, uint256 measuredErrorRate) public onlyAuthorized whenNotPaused nonReentrant {
        KeyStatus status = measuredErrorRate > errorThreshold ? KeyStatus.Invalid : KeyStatus.Valid;
        
        quantumKeys[keyId] = QuantumKey({
            keyData: keyData,
            status: status,
            errorRate: measuredErrorRate,
            timestamp: block.timestamp
        });

        emit KeyRegistered(keyId, status, measuredErrorRate);
    }

    function invalidateKey(bytes32 keyId) public onlyAuthorized whenNotPaused {
        require(quantumKeys[keyId].timestamp != 0, "Key does not exist");
        quantumKeys[keyId].status = KeyStatus.Deprecated;
        emit KeyRegistered(keyId, KeyStatus.Deprecated, quantumKeys[keyId].errorRate);
    }
    
    // --- Funções de Pausa (Apenas Proprietário) ---

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // --- Funções de Visualização ---

    function getQuantumKeyStatus(bytes32 keyId) public view returns (KeyStatus) {
        return quantumKeys[keyId].status;
    }
}

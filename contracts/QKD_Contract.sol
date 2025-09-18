// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract QKD_Contract {
    address public owner;

    struct KeyExchange {
        address sender;
        address receiver;
        uint timestamp;
        bytes32 keyHash;
        bool isVerified;
    }

    mapping(uint => KeyExchange) public exchanges;
    uint public exchangeCount;

    event KeyExchangeRecorded(uint exchangeId, address sender, address receiver, uint timestamp, bytes32 keyHash);
    event KeyExchangeVerified(uint exchangeId);

    constructor() {
        owner = msg.sender;
    }

    function recordKeyExchange(address _receiver, bytes32 _keyHash) public {
        exchangeCount++;
        exchanges[exchangeCount] = KeyExchange(msg.sender, _receiver, block.timestamp, _keyHash, false);
        emit KeyExchangeRecorded(exchangeCount, msg.sender, _receiver, block.timestamp, _keyHash);
    }

    function verifyKeyExchange(uint _exchangeId) public {
        require(msg.sender == owner, "Only owner can verify the key exchange");
        exchanges[_exchangeId].isVerified = true;
        emit KeyExchangeVerified(_exchangeId);
    }
}

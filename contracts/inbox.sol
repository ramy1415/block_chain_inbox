pragma solidity 0.5.0;

contract Inbox {
    string public message;

    constructor(string memory initialMessage)public{
        message = initialMessage;
    }

    function getMessage(string memory newMessage)public{
        message = newMessage;
    }
}
pragma solidity ^0.4.11;

contract Demo {
    string public name;
    address public owner = msg.sender;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function changeName(string _name) public onlyOwner {
        name = _name;
    }
    
}
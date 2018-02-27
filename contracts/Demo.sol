pragma solidity ^0.4.11;

contract Demo {
    string public name;

    function changeName(string _name) {
        name = _name;
    }
    
}
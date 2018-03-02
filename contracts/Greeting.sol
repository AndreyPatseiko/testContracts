pragma solidity ^0.4.11;


contract Greeting {
    address public creator;     // At first, an empty "address"-type variable of the name "creator". Will be set in the constructor.
    string public greeting;     // At first, an empty "string"-type variable of the name "greeting". Will be set in constructor and can be changed.

    event Sent(string message);

    function Greeting() public // The constructor. It accepts a string input and saves it to the contract's "greeting" variable.
    {
        creator = msg.sender;
        greeting = "Andrey";
    }

    function greet() public constant returns (string)
    {
        return greeting;
    }

    function getBlockNumber() public constant returns (uint) // this doesn't have anything to do with the act of greeting
    {// just demonstrating return of some global variable
        return block.number;
    }

    function setGreeting(string _newgreeting) public
    {
        greeting = _newgreeting;
        Sent('Event emit');
    }
}

pragma solidity ^0.4.23;

contract MyBank {
    struct Account {
        uint256 balance;
    }

    mapping(address => Account) private accounts;

    function getBalance(address account) public view returns (uint) {
        return accounts[account].balance;
    }

    function deposit(uint ammount) public payable {
        accounts[msg.sender].balance += ammount;
    }

    function withdraw(uint ammount) public {
        uint balance = accounts[msg.sender].balance;
        require(balance>=ammount , "Not enough funds on an account");
        accounts[msg.sender].balance -= ammount;
    }
}

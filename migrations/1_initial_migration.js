var Migrations = artifacts.require("./Migrations.sol");
var MyBank = artifacts.require("./MyBank.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MyBank);
};

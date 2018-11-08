var MyBank = artifacts.require("MyBank");

contract('MyBank', function(accounts) {
  it("should output 0 for newly created account", function() {
    return MyBank.deployed().then(function(instance) {
      return instance.getBalance.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 0, "account has non-zero balance.");
    });
  });

  it("should deposit 100 credits into an account", function() {
    return MyBank.deployed().then(function(instance) {
      instance.deposit(100,{from: accounts[0]});
      return instance.getBalance.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 100, "100 wasn't inserted into an account.");
    });
  });

  it("should withdraw 50 from an account", function() {
    return MyBank.deployed().then(function(instance) {
      instance.withdraw(50,{from: accounts[0]});
      return instance.getBalance.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 50, "50 is not the account balance.");
    });
  });

  it("should't be able to withdraw 10 crdits from an empty account", async function(){
        const contract = await MyBank.deployed();
        const balancebefore = await contract.getBalance.call(accounts[1]);
        try {
          await contract.withdraw(10,{from: accounts[1]});
        }catch(e){
          assert.isTrue(true);
          return;
        }
        assert.isTrue(false,"Exception wasn't raised");
    });
});

var Greeting = artifacts.require('./Greeting.sol');

contract('Test the Greeting contract', function(accounts) {
    describe("Deploy the Greeting smart contract", function () {
        it("Cathe an instanse of the Greeting contract", function () {
            return Greeting.new().then(function (instanse) {
                greetingContract = instanse;
            })
        });
    });

    describe("Check the contracts variables", function () {
        it("call the function setGreeting() value = 'Hi User' ", function () {
            return greetingContract.greeting.call().then(function (res) {
                assert.equal(res, 'Andrey', 'greeting message = Andrey');
            });
        });
        it("call the function setGreeting() value = 'Hi User' ", function () {
            return greetingContract.setGreeting.call('Hi User').then(function (res) {
                assert.equal(res, 'Hi User', 'greeting message was changed = Hi User');
            });
        });
    });

    // it('testing', function() {
    //     return Greeting.deployed().then(function(instance) {
    //       return instance.greeting.call();
    //     }).then(function(res) {
    //       assert.equal(res, 'Andrey1', 'greeting message = Andrey');
    //     });
    //   });
});
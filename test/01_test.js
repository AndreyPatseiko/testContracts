const Demo = artifacts.require('./Demo.sol');

contract("Test the Demo contract", function (accounts) {
    describe("Deploy the demo smart contract", function () {
        it("Cathe an instanse of the Demo contract", function () {
            return Demo.new().then(function (instanse) {
                demoContract = instanse;
            })
        });
    });

    describe("Check the contracts variables", function () {
        it("The name variable is Andrey", function () {
            return demoContract.name().then(function (res) {
                expect(res.toString()).to.be.equal("Andrey");
            });
        });
    });
});
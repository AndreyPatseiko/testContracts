const Demo = artifacts.require('./Demo.sol');
chai = require('chai');
chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

expect = chai.expect;

contract("Test the Demo contract", function (accounts) {
    describe("Deploy the demo smart contract", function () {
        it("Cathe an instanse of the Demo contract", function () {
            return Demo.new().then(function (instanse) {
                demoContract = instanse;
            })
        });
    });

    describe("Check the contracts variables", function () {
        it("call the function change name - Alice ", function () {
            return demoContract.changeName('Alice').then(function (res) {
                expect(res).to.not.be.an('error');
            });
        });
        it('Check the variable name - should be Alice', function () {
            return demoContract.name().then(function (res) {
                expect(res.toString()).to.be.equal('Alice');
            })
        });
        it("call the function change name - Bob - shood fail", function () {
            return expect(demoContract.changeName('Bob', { 'from': accounts[1] })).to.be.eventually.rejected;
        }); 
        it('Check the variable name - should be Alice', function () {
            return demoContract.name().then(function (res) {
                expect(res.toString()).to.be.equal('Alice');
            })
        })
    });
});
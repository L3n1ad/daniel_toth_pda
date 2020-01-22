var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    calculator.add(3);
    assert.equal(calculator.runningTotal, 3);
  })

  it('it can subtract', function(){
    calculator.subtract(2);
    assert.equal(calculator.runningTotal, -2);
  })

  it('it can multiply', function(){
    calculator.previousTotal = 2;
    calculator.multiply(2);
    assert.equal(calculator.runningTotal, 4);
  })

});

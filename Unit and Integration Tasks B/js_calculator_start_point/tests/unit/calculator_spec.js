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
    calculator.previousTotal = 2
    calculator.add(3);
    assert.equal(calculator.runningTotal, 5);
  })

  it('it can subtract', function(){
    calculator.subtract(2);
    assert.equal(calculator.runningTotal, -2);
  })

  it('it can subtract minus number', function(){
    calculator.previousTotal = 2;
    calculator.subtract(-2);
    assert.equal(calculator.runningTotal, 4);
  })

  it('it can multiply', function(){
    calculator.previousTotal = 2;
    calculator.multiply(2);
    assert.equal(calculator.runningTotal, 4);
  })

  it('it can divide', function(){
    calculator.previousTotal = 4;
    calculator.divide(2);
    assert.equal(calculator.runningTotal, 2);
  })

  it('it can click a number', function(){
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 2);
  })

  it('it can pick + operator', function(){
    calculator.operatorClick('+');
    assert.equal(calculator.previousOperator, '+');
  })

  it('it can pick - operator', function(){
    calculator.operatorClick('-');
    assert.equal(calculator.previousOperator, '-');
  })

  it('it can pick * operator', function(){
    calculator.operatorClick('*');
    assert.equal(calculator.previousOperator, '*');
  })

  it('it can pick / operator', function(){
    calculator.operatorClick('/');
    assert.equal(calculator.previousOperator, '/');
  })

  it('it can pick = operator', function(){
    calculator.operatorClick('=');
    assert.equal(calculator.previousOperator, null);
  })

  it('it can use multiple operators combined with pick number function', function(){
    calculator.numberClick(5);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("-");
    calculator.numberClick(1);
    calculator.operatorClick("/");
    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 15);
  })

  it('it can clear previous calculation if runningTotal 0', function(){
    calculator.clearClick();
    assert.equal(calculator.previousOperator, null);
    assert.equal(calculator.runningTotal, 0);
    assert.equal(calculator.previousTotal, null);
  })

  it('it can clear previous calculation if running total not 0', function(){
    calculator.runningTotal = 1;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

});

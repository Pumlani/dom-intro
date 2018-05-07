describe('textBillTotal function', function() {
  it('should return the total cost of a single call', function() {
    var factfuncObj = factfunc();

    assert.equal(factfuncObj.calc("call"), 2.75)

  });

  it('should return the total cost of a single sms', function() {
    var factfuncObj = factfunc();
    assert.equal(factfuncObj.calc("sms"), 0.75)
  });

  it('should return the total cost of five calls.', function() {
    var factfuncObj = factfunc();

    factfuncObj.calc("call");
    factfuncObj.calc("call");
    factfuncObj.calc("call");
    factfuncObj.calc("call");
    factfuncObj.calc("call");
    assert.equal(factfuncObj.calls(),13.75);
  });

  it('should return the total cost of five sms.', function() {
    var factfuncObj = factfunc();
    factfuncObj.calc("sms");
    factfuncObj.calc("sms");
    factfuncObj.calc("sms");
    factfuncObj.calc("sms");
    factfuncObj.calc("sms");

    assert.equal(factfuncObj.sms(),3.75);

  });

  it('should return the total cost of multiple sms and calls.', function() {
    var factfuncObj = factfunc();
    factfuncObj.calc("sms");
    factfuncObj.calc("sms");
    factfuncObj.calc("sms");
    factfuncObj.calc("sms");
    factfuncObj.calc("sms");
    factfuncObj.calc("call");
    factfuncObj.calc("call");
    factfuncObj.calc("call");
    factfuncObj.calc("call");
    factfuncObj.calc("call");

    assert.equal(factfuncObj.totalBill(),17.50);

  });

});

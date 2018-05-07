describe('textBillTotal function', function() {
  it('should return the total cost of a single call', function() {
    var factfuncObj = factfunc();

    assert.equal(factfuncObj.calc("call"), 2.75)

  });

  it('should return the total cost of a single sms', function() {
    var factfuncObj = factfunc();
    assert.equal(factfuncObj.calc("sms"), 0.75)
  });

  it('should return the total cost of three calls.', function() {
    var factfuncObj = factfunc();
    assert.equal(factfuncObj.calc("call"))

  });
  it('should return the total cost of three sms.', function() {
    var factfuncObj = factfunc();

    assert.equal(factfuncObj.calc("sms"), 2.25)

  });

  it('should return that these bill strings are not the same.', function() {
    var billString = 'sms, call';
    assert.notEqual("sms", "call", "these are not equal");
  });

});

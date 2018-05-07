describe('textBillTotal function', function() {
  it('should return the total cost of a single call', function() {

    assert.equal(textBillTotal("call"), 2.75)

  });

  it('should return the total cost of a single sms', function() {

    assert.equal(textBillTotal("sms"), 0.75)
  });

  it('should return the total cost of three calls.', function() {
    assert.equal(textBillTotal("call,call,call"), 8.25)

  });
  it('should return the total cost of three sms.', function() {
    assert.equal(textBillTotal("sms,sms,sms"), 2.25)

  });

  it('should return that these bill strings are not the same.', function() {
    var billString = 'sms, call';
    assert.notEqual("sms", "call", "these are not equal");
  });

});

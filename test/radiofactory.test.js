describe('checkBillTotal function', function() {
  it('should return the total cost of a single call', function() {
    var BillFactoryObj = BillFactory();

    assert.equal(BillFactoryObj.calc("call"), 2.75)

  });

  it('should return the total cost of a single sms', function() {
    var BillFactoryObj = BillFactory();
    assert.equal(BillFactoryObj.calc("sms"), 0.75)
  });

  it('should return the total cost of five calls.', function() {
    var BillFactoryObj = BillFactory();

    BillFactoryObj.calc("call");
    BillFactoryObj.calc("call");
    BillFactoryObj.calc("call");
    BillFactoryObj.calc("call");
    BillFactoryObj.calc("call");
    assert.equal(BillFactoryObj.calls(),13.75);
  });

  it('should return the total cost of five sms.', function() {
    var BillFactoryObj = BillFactory();
    BillFactoryObj.calc("sms");
    BillFactoryObj.calc("sms");
    BillFactoryObj.calc("sms");
    BillFactoryObj.calc("sms");
    BillFactoryObj.calc("sms");

    assert.equal(BillFactoryObj.sms(),3.75);

  });

  it('should return the total cost of multiple sms and calls.', function() {
    var BillFactoryObj = BillFactory();
    BillFactoryObj.calc("sms");
    BillFactoryObj.calc("sms");
    BillFactoryObj.calc("sms");
    BillFactoryObj.calc("sms");
    BillFactoryObj.calc("sms");
    BillFactoryObj.calc("call");
    BillFactoryObj.calc("call");
    BillFactoryObj.calc("call");
    BillFactoryObj.calc("call");
    BillFactoryObj.calc("call");

    assert.equal(BillFactoryObj.totalBill(),17.50);

  });

});

describe('The settings-bill function logic',function(){

  it('should calculate the total for a call', function(){

    var FactoryObj = SettingsBill()

    FactoryObj.setCall(5);
    FactoryObj.setSms(2.50);
    FactoryObj.getWarning();
    FactoryObj.getCritical();



    FactoryObj.calculation('call');

    assert.equal(FactoryObj.call(), 5);
    assert.equal(FactoryObj.sms(), 0);
    assert.equal(FactoryObj.total(), 5);

  });

  it('should calculate the total for mulitple calls', function(){

    var FactoryObj = SettingsBill()

    FactoryObj.setCall(5);
    FactoryObj.setSms(2.50);

    FactoryObj.calculation('call');
    FactoryObj.calculation('call');
    FactoryObj.calculation('call');

    assert.equal(FactoryObj.call(), 15);
    assert.equal(FactoryObj.sms(), 0);
    assert.equal(FactoryObj.total(), 15);

  });

  it('should calculate the total for a call and sms', function(){

    var FactoryObj = SettingsBill()

    FactoryObj.setCall(5);
    FactoryObj.setSms(2.50);

    FactoryObj.calculation('call');
    FactoryObj.calculation('sms');

    assert.equal(FactoryObj.call(), 5);
    assert.equal(FactoryObj.sms(), 2.50);
    assert.equal(FactoryObj.total(), 7.50);

  });

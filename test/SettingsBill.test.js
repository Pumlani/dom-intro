describe('The settings-bill function logic', function() {

  it('should calculate the total for two call', function() {

    var factoryObj = SettingsBill();

    factoryObj.setCall(5);
    factoryObj.setSms(2.50);
    factoryObj.Warning();
    factoryObj.Critical();



    factoryObj.calculation('call');
    factoryObj.calculation('call');

    assert.equal(factoryObj.call(), 10);
    assert.equal(factoryObj.sms(), 0);
    assert.equal(factoryObj.total(), 10);

  });

  it('should calculate the total for a call and sms', function() {

    var factoryObj = SettingsBill();

    factoryObj.setCall(5);
    factoryObj.setSms(2.50);
    factoryObj.Warning();
    factoryObj.Critical();

    factoryObj.calculation('call');
    factoryObj.calculation('sms');

    assert.equal(factoryObj.call(), 5);
    assert.equal(factoryObj.sms(), 2.50);
    assert.equal(factoryObj.total(), 7.50);

  });
  it('Should make sure the total is lower or equal to the critical value', function() {

    var factoryObj = SettingsBill();

    factoryObj.setCall('5');
    factoryObj.setSms('2');
    factoryObj.Critical('10');

    factoryObj.calculation('call');
    assert.equal(false, factoryObj.hasReachedCriticalLevel());

    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('sms');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('sms');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('sms');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('sms');

console.log(factoryObj.total());
    assert.equal(true, factoryObj.hasReachedCriticalLevel());
    assert.equal(10, factoryObj.total());


    // assert.isAtMost(factoryObj.total(), factoryObj.getCritical(), 'total is less or equal to critical value')

  });
  it('Should change the text colour to orange', function() {

    var factoryObj = SettingsBill();

    factoryObj.setCall('5');
    factoryObj.setSms('2');
    factoryObj.Warning('20');
    factoryObj.Critical('50');

    factoryObj.calculation('call');
    assert.equal(false, factoryObj.hasReachedWarningLevel());

    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('sms');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('sms');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('sms');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('sms');

    assert.equal(true, factoryObj.hasReachedWarningLevel());

  });
  it('Should be able to add again when the critical level is increased', function() {

    var factoryObj = SettingsBill();

    factoryObj.setCall('5');
    factoryObj.setSms('2');
    factoryObj.Critical('10');

    factoryObj.calculation('call');
    assert.equal(false, factoryObj.hasReachedCriticalLevel());

    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('sms');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('sms');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('sms');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('sms');

    assert.equal(true, factoryObj.hasReachedCriticalLevel());
    assert.equal(10, factoryObj.total());

    factoryObj.Critical('40');

    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('call');
    factoryObj.calculation('call');

    assert.equal(true, factoryObj.hasReachedCriticalLevel());
    assert.equal(40, factoryObj.total());



  });

});

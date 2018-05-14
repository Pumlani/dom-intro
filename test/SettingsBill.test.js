describe('The settings-bill function logic',function(){

  it('should calculate the total for two call', function(){

    var FactoryObj = SettingsBill();

    FactoryObj.setCall(5);
    FactoryObj.setSms(2.50);
    FactoryObj.Warning();
    FactoryObj.Critical();



    FactoryObj.calculation('call');
    FactoryObj.calculation('call');

    assert.equal(FactoryObj.call(), 10);
    assert.equal(FactoryObj.sms(), 0);
    assert.equal(FactoryObj.total(), 10);

  });

  it('should calculate the total for a call and sms', function(){

      var FactoryObj = SettingsBill();

      FactoryObj.setCall(5);
      FactoryObj.setSms(2.50);
        FactoryObj.Warning();
          FactoryObj.Critical();

      FactoryObj.calculation('call');
      FactoryObj.calculation('sms');

      assert.equal(FactoryObj.call(), 5);
      assert.equal(FactoryObj.sms(), 2.50);
      assert.equal(FactoryObj.total(), 7.50);

    });
    it('Should make sure the total is lower or equal to the critical value', function () {

        var FactoryObj = SettingsBill();

        FactoryObj.setCall('5');
        FactoryObj.setSms('2');
        FactoryObj.Critical('10');
        FactoryObj.calculation('call');
        FactoryObj.calculation('call');

        assert.isAtMost(FactoryObj.total(), FactoryObj.getCritical(),'toal is less or equal to critical value')



    });
  });

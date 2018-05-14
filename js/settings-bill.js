document.addEventListener('DOMContentLoaded',function(){
  var callOrsmsElem = document.querySelector(".billItemTypeWithSettings")


  var callCostSettingElement = document.querySelector(".callCostSetting");
  var smsCostSettingElement = document.querySelector(".smsCostSetting");
  var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
  var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");


  var callTotalSettingsAmount = document.querySelector(".callTotalSettings");
  var smsTotalSettingsAmount = document.querySelector(".smsTotalSettings");
  var totalSettingsAmount = document.querySelector(".totalSettings");


  var theAddingButton = document.querySelector(".sumBtn");
  var theUpdateSettingsBtn = document.querySelector(".updateSettings");


  var factoryObj = SettingsBill();



  theAddingButton.addEventListener('click',function(){
    console.log(factoryObj.total());
     if(factoryObj.total()<factoryObj.getCritical()){
      var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
      if (checkedRadioBtn){
        var itemType = checkedRadioBtn.value;

        factoryObj.calculation(itemType);

        callTotalSettingsAmount.innerHTML= factoryObj.call().toFixed(2);
        smsTotalSettingsAmount.innerHTML= factoryObj.sms().toFixed(2);
        totalSettingsAmount.innerHTML=  factoryObj.total().toFixed(2);

        if (factoryObj.total() < factoryObj.getWarning()){
          totalSettingsAmount.classList.remove("warning");
          totalSettingsAmount.classList.remove("danger");
        } else if (factoryObj.total() >= factoryObj.getWarning() &&  factoryObj.total() < factoryObj.getCritical()){
          totalSettingsAmount.classList.add("warning");
          totalSettingsAmount.classList.remove("danger");
        }else if (factoryObj.total() >= factoryObj.getCritical()){
          totalSettingsAmount.classList.add("danger");
          totalSettingsAmount.classList.remove("warning");
        }
      }
    }
  });

  theUpdateSettingsBtn.addEventListener('click',function(){

    factoryObj.setCall(callCostSettingElement.value);
    factoryObj.setSms(smsCostSettingElement.value);
    factoryObj.Warning(warningLevelSettingElement.value);
    factoryObj.Critical(criticalLevelSettingElement.value);

  });

});

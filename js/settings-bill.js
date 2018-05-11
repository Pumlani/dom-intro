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


  var FactoryObj = SettingsBill();



  theAddingButton.addEventListener('click',function(){
    console.log(FactoryObj.total());
     if(FactoryObj.total()<FactoryObj.getCritical()){
      var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
      if (checkedRadioBtn){
        var itemType = checkedRadioBtn.value;

        FactoryObj.calculation(itemType);

        callTotalSettingsAmount.innerHTML= FactoryObj.call().toFixed(2);
        smsTotalSettingsAmount.innerHTML= FactoryObj.sms().toFixed(2);
        totalSettingsAmount.innerHTML=  FactoryObj.total().toFixed(2);

        if (FactoryObj.total() < FactoryObj.getWarning()){
          totalSettingsAmount.classList.remove("warning");
          totalSettingsAmount.classList.remove("danger");
        } else if (FactoryObj.total() >= FactoryObj.getWarning() &&  FactoryObj.total() < FactoryObj.getCritical()){
          totalSettingsAmount.classList.add("warning");
          totalSettingsAmount.classList.remove("danger");
        }else if (FactoryObj.total() >= FactoryObj.getCritical()){
          totalSettingsAmount.classList.add("danger");
          totalSettingsAmount.classList.remove("warning");
        }
      }
    }
  });

  theUpdateSettingsBtn.addEventListener('click',function(){

    FactoryObj.setCall(callCostSettingElement.value);
    FactoryObj.setSms(smsCostSettingElement.value);
    FactoryObj.Warning(warningLevelSettingElement.value);
    FactoryObj.Critical(criticalLevelSettingElement.value);

  });

});

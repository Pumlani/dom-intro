// get a reference to the sms or call radio buttons
var callOrsmsElem = document.querySelector(".billItemTypeWithSettings")
// get refences to all the settings fields
var callCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");

var callTotalSettingsAmount = document.querySelector(".callTotalSettings");
var smsTotalSettingsAmount = document.querySelector(".smsTotalSettings");
var totalSettingsAmount = document.querySelector(".totalSettings");

//get a reference to the add button
var theAddingButton = document.querySelector(".sumBtn");
//get a reference to the 'Update settings' button
var theUpdateSettingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCostSetting =0;
var smsCostSetting = 0;
var warningCostSetting =0;
var criticalCostSetting =0;
// create a variables that will keep track of all three totals.
var callAmount = 0;
var smsAmount = 0;
var TotalAmount = 0;

function billWithSettingsFunction () {
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
if (checkedRadioBtn){
    var billItemTypeWithSettings = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
    }

      if(billItemTypeWithSettings === "call"){
       callAmount +=  callCostSetting;
       TotalAmount += callCostSetting;

       if(TotalAmount > criticalCostSetting){
         var mode = TotalAmount - criticalCostSetting;
         callAmount -= mode;
         TotalAmount -= mode;
       }
       callTotalSettingsAmount.innerHTML=callAmount.toFixed(2);
       totalSettingsAmount.innerHTML=TotalAmount.toFixed(2);

     }

       if(billItemTypeWithSettings === "sms"){
         smsAmount += smsCostSetting;
         TotalAmount += smsCostSetting;

         if(TotalAmount > criticalCostSetting){
           var mode = TotalAmount - criticalCostSetting;
           smsAmount  -=  mode;
           TotalAmount -= mode;
         }

       }

      smsTotalSettingsAmount.innerHTML=smsAmount.toFixed(2);
      //TotalAmount= smsAmount+callAmount;
      totalSettingsAmount.innerHTML=TotalAmount.toFixed(2);

      }

function update(){

  var forCall = callCostSettingElement.value;
  callCostSetting = parseFloat(forCall);
console.log(callCostSetting);
  var forSms = smsCostSettingElement.value;
  smsCostSetting = parseFloat(forSms);

  var forWarning = warningLevelSettingElement.value;
  warningCostSetting = parseFloat(forWarning);

  var forCritical = criticalLevelSettingElement.value;
  criticalCostSetting = parseFloat(forCritical);

}

function  displaycolor(){
  if (TotalAmount < warningCostSetting){
      // adding the danger class will make the text red
      totalSettingsAmount.classList.remove("warning");
      totalSettingsAmount.classList.remove("danger");
    }

else if(TotalAmount >= warningCostSetting && criticalCostSetting > TotalAmount){
  totalSettingsAmount.classList.add("warning");
  totalSettingsAmount.classList.remove("danger");
  }

else if (TotalAmount >= criticalCostSetting){
      totalSettingsAmount.classList.add("danger");
      totalSettingsAmount.classList.remove("warning");
  }
}

theUpdateSettingsBtn.addEventListener('click', function() {
  update();
});
theAddingButton.addEventListener('click', function() {
  billWithSettingsFunction();
  displaycolor();
});

// in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
// Get bill item type radio button selected

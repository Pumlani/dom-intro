// get a reference to the sms or call radio buttons
var callOrsmsElem = document.querySelector(".billItemTypeWithSettings")
// get refences to all the settings fields
var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsELem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");
//get a reference to the add button
var theAddingButton = document.querySelector(".sumBtn");
//get a reference to the 'Update settings' button
var theUpdateSettingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCostSett = 0;
var smsCostSett = 0;
var warningCosSettt = 0;
var criticalCostSett = 0;
// create a variables that will keep track of all three totals.
var callSettingsTotal = 0;
var smsSettingsTotal = 0;
var sumSettingsTotal = 0;

function billWithSettings () {
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
if (checkedRadioBtn){
    var billItemTypeWithSettings = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
    }
    if(billItemTypeWithSettings === "call"){
      callSettingsTotal += callCostSett;
      sumSettingsTotal += callCostSett;

      if(sumSettingsTotal >  criticalCostSett){
        var mode = sumSettingsTotal-criticalCostSett;
        sumSettingsTotal -= mode;
        callSettingsTotal -= mode;
      }

      callCostSettingElem,innerHTML=callSettingsTotal.toFixed(2);
      totalSettingsElem.innerHTML=sumSettingsTotal.toFixed(2);

    }
    if(billItemTypeWithSettings === "sms"){
      callSettingsTotal += callCostSett;
      sumSettingsTotal += callCostSett;

      if(sumSettingsTotal >  criticalCostSett){
        var mode = sumSettingsTotal-criticalCostSett;
        sumSettingsTotal -= mode;
        smsSettingsTotal -= mode;
      }

      smsCostSettingElem,innerHTML=smsSettingsTotal.toFixed(2);
      totalSettingsElem.innerHTML=sumSettingsTotal.toFixed(2);

    }

}
function theUpdate(){
  //to convert a call string enterd into a numerical value
  var callIn  = callCostSettingElem.value;
  callCostSettingElem = parseFloat(callIn);
  //to convert a sms string entered into a numerical value
  var smsIn  = smsCostSettingElem.value;
  smsCostSettingElem = parseFloat(smsIn);
  //to convert a warning string entered into a numerical value
  var warnignIn  = warningLevelSettingElem.value;
  warningLevelSettingElem = parseFloat(warnignIn);
  //to convert a critical string entered into a numerical value
  var criticaltIn  = criticalLevelSettingElem.value;
  criticalLevelSettingElem = parseFloat(criticaltIn);
}

function Screencolor(){

    //color the total based on the criteria
    if (sumSettingsTotal <  warningCosSettt){
        // adding the danger class will make the text red
        totalCostElem.classList.remove("warning");
        totalCostElem.classList.remove("danger");
      }

  else if(totalCost>30 && 50>totalCost){
    totalCostElem.classList.add("warning");
    totalCostElem.classList.remove("danger");
    }

  else if (totalCost > 50){
        totalCostElem.classList.add("danger");
        totalCostElem.classList.remove("warning");
    }
}

//add an event listener for when the 'Update settings' button is pressed
theUpdateSettingsBtn.addEventListener('click',
function (){
  theUpdate();
}

//add an event listener for when the add button is pressed
theAddingButton.addEventListener('click',
function (){
billWithSettings();
Screencolor();
}

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
//Get bill item type radio button selected

function SettingsBill(){
  var callAmount = 0;

  var smsAmount = 0;
  var TotalAmount = 0;

  var newCallCost = 0;
  var newSmsCost = 0;
  var newWarning = 0;
  var newCritical = 0;

  function computes(billItemTypeWithSettings){
    if(billItemTypeWithSettings === "call"){
      callAmount += newCallCost;
      TotalAmount += newCallCost;
    }else if(billItemTypeWithSettings === "sms"){

      smsAmount += newSmsCost;
      TotalAmount += newSmsCost;
    }
  }

  function setCallCost(x) {
      newCallCost = parseFloat(x);

  }
  function setSmsCost(x) {
      newSmsCost = parseFloat(x);

  }
  function setWarning(x) {
      newWarning = parseFloat(x);

  }
  function setCritical(x) {
      newCritical = parseFloat(x);

  }



  function getCallAmount(){
    return callAmount;
  }
  function getSmsAmount(){
    return smsAmount;
  }
  function getTotalAmount(){
    return TotalAmount;
  }

  function fetchWarning(){
    return newWarning;
  }

  function fetchCritical(){
    return newCritical;
  }


  return{
    calculation : computes,

    setCall : setCallCost,
    setSms : setSmsCost,
    Warning : setWarning,
    Critical : setCritical,

    getWarning : fetchWarning,
    getCritical : fetchCritical,

    call : getCallAmount,
    sms : getSmsAmount,
    total : getTotalAmount
  }

}

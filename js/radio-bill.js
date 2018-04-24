//Get bill item type radio button selected
var checkedRadioBtn=document.querySelector(".billItemTypeRadio");
//Button to press to add item to bill
var radioAdd = document.querySelector(".radioBillAddBtn");
//Where the call total should be displayed
var callsTotalElem=document.querySelector(".callTotalTwo");
//Where the sms total should be displayed
var smsTotalElem=document.querySelector(".smsTotalTwo");
//Where overall total should be displayed
var totalCostElem=document.querySelector(".totalTwo");

//declaring variables
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

function checkBillTotal(){
    // get the value entered in the billType
        var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}
    // update the correct total
    if (billItemType === "call"){
        callsTotal += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    //for calls
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    //for sms
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    //for total
    totalCost = callsTotal + smsTotal;
    //for total DOM element now
    totalCostElem.innerHTML = totalCost.toFixed(2);
}

function color(){

    //color the total based on the criteria
    if (totalCost <30){
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


radioAdd.addEventListener('click',
function(){
  checkBillTotal();
  color();
});

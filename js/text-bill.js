


var factfuncObj = factfunc();

var billTypeEntered = billTypeTextEnter.value.trim();

function TEXT() {

  factfuncObj.calc(billTypeEntered);
  calls.innerHTML.factfuncObj.calls();
  sms.innerHTML.factfuncObj.sms();
  totalCostElement.innerHTML = totalCostOne;


  if (totalCostOne < 30) {
    // adding the danger class will make the text red
    totalCostElement.classList.remove("warning");
    totalCostElement.classList.remove("danger");
  } else if (totalCostOne > 30 && 50 > totalCostOne) {
    totalCostElement.classList.add("warning");
    totalCostElement.classList.remove("danger");
  } else if (totalCostOne > 50) {
    totalCostElement.classList.add("danger");
    totalCostElement.classList.remove("warning");
  }
}

textTotalAddBtn.addEventListener('click', TEXT);

























/*
var textTotalAddBtn=document.querySelector(".addToBillBtn");
var billTypeTextEnter=document.querySelector(".billTypeText");
var callsTotalElement=document.querySelector(".callTotalOne");
var smsTotalElement=document.querySelector(".smsTotalOne");
var totalCostElement=document.querySelector(".totalOne");

var callsTotalOne = 0;
var smsTotalOne = 0;
var totalCostOne = 0;

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextEnter.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotalOne += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTotalOne += 0.75;
    }

    //update the totals that is displayed on the screen.
    callsTotalElement.innerHTML = callsTotalOne.toFixed(2);
    smsTotalElement.innerHTML = smsTotalOne.toFixed(2);
    totalCostOne = callsTotalOne + smsTotalOne;
    totalCostElement.innerHTML = totalCostOne.toFixed(2);
}*//*
function colorBehaviour(){

    //color the total based on the criteria
    if (totalCostOne <30){
        // adding the danger class will make the text red
        totalCostElement.classList.remove("warning");
        totalCostElement.classList.remove("danger");
      }

  else if(totalCostOne>30 && 50>totalCostOne){
    totalCostElement.classList.add("warning");
    totalCostElement.classList.remove("danger");
    }

  else if (totalCostOne > 50){
        totalCostElement.classList.add("danger");
        totalCostElement.classList.remove("warning");
    }
}

textTotalAddBtn.addEventListener('click',
function (){
  textBillTotal();
  colorBehaviour();
});*/

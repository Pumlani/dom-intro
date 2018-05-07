function factfunc() {

  var totalCostOne = 0;
  var smsTotalOne = 0;
  var callsTotalOne = 0;

  function textBillTotal(bill) {

    //var bill = bill.split(",");

    if (bill === "call") {
      callsTotalOne += 2.75;
    } else if (bill === "sms") {
      smsTotalOne += 0.75;
    }
    totalCostOne = callsTotalOne + smsTotalOne;

    return totalCostOne.toFixed(2);
}

  function getCalls() {
    return callsTotalOne;
  }

  function getSms() {
    return smsTotalOne;
  }

  return {

    calls: getCalls,
    sms: getSms,
    calc: textBillTotal
  }
}
/*
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
function colorBehaviour() {

  var billTypeEntered = billTypeTextEnter.value.trim();

  let Total = textBillTotal(billTypeEntered)
  //update the totals that is displayed on the screen.
  callsTotalElement.innerHTML = callsTotalOne.toFixed(2);
  smsTotalElement.innerHTML = smsTotalOne.toFixed(2);
  totalCostElement.innerHTML = Total;

  //color the total based on the criteria
  if (Total < 30) {
    // adding the danger class will make the text red
    totalCostElement.classList.remove("warning");
    totalCostElement.classList.remove("danger");
  } else if (Total > 30 && 50 > Total) {
    totalCostElement.classList.add("warning");
    totalCostElement.classList.remove("danger");
  } else if (Total > 50) {
    totalCostElement.classList.add("danger");
    totalCostElement.classList.remove("warning");
  }
}*/

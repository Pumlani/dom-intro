function BillFactory() {

  var callsTotal= 0;
  var smsTotal= 0;
  var totalCost = 0;

  function checkBillTotal(billItemTypeRadio) {

    //var textBillElement = textBillElement.split(",");

    if (billItemTypeRadio === "call") {
      callsTotal += 2.75;
    } else if (billItemTypeRadio === "sms") {
      smsTotal += 0.75;
    }
    totalCost = callsTotal + smsTotal;

    return totalCost.toFixed(2);
  }

  function getCalls() {
    return callsTotal;
  }

  function getSms() {
    return smsTotal;
  }

  function getSum() {

    totalCost = callsTotal + smsTotal;
    return totalCost;
  }

  return {
    totalBill: getSum,
    calls: getCalls,
    sms: getSms,
    calc: checkBillTotal
  }
}

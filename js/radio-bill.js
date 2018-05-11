document.addEventListener('DOMContentLoaded', function() {
  //Get bill item type radio button selected
  var checkedRadioBtn = document.querySelector(".billItemTypeRadio");
  //Button to press to add item to bill
  var radioAdd = document.querySelector(".radioBillAddBtn");
  //Where the call total should be displayed
  var callsTotalElem = document.querySelector(".callTotalTwo");
  //Where the sms total should be displayed
  var smsTotalElem = document.querySelector(".smsTotalTwo");
  //Where overall total should be displayed
  var totalCostElem = document.querySelector(".totalTwo");

  //declaring variables
  var callsTotal = 0;
  var smsTotal = 0;
  var totalCost = 0;

  var BillFactoryObj = BillFactory();

  function Display() {
    // get the value entered in the billType
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
      var billItemType = checkedRadioBtn.value;
      // billItemType will be 'call' or 'sms'
    }

    BillFactoryObj.calc(billItemType);
    //update the totals that is displayed on the screen.
    //for calls
    callsTotalElem.innerHTML = BillFactoryObj.calls().toFixed(2);
    //for sms
    smsTotalElem.innerHTML = BillFactoryObj.sms().toFixed(2);
    //for total DOM element now
    totalCostElem.innerHTML = BillFactoryObj.totalBill().toFixed(2);
  }

  function callColor() {
    console.log('this is color')

    let total = BillFactoryObj.totalBill();

    if (total < 30) {
      // adding the danger class will make the text red
      totalCostElem.classList.remove("warning");
      totalCostElem.classList.remove("danger");
    } else if (total > 30 && 50 > total) {
      totalCostElem.classList.add("warning");
      totalCostElem.classList.remove("danger");
    } else if (total > 50) {
      totalCostElem.classList.add("danger");
      totalCostElem.classList.remove("warning");
    }
  }


  radioAdd.addEventListener('click', function() {
    Display();
    callColor();
  });

});

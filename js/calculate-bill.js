//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//global scope
var roundedBillTotal = 0;
//create the function that will be called when the calculate button is pressed
function calculateBtnBill(billItems) {
  var billTotal = 0;
  var billItems = billItems.split(",");

  for (var i = 0; i < billItems.length; i++) {
    var current = billItems[i].trim();

    if (current === "call") {
      billTotal += 2.75;
    } else if (current === "sms") {
      billTotal += 0.75;
    }
  }
  return billTotal.toFixed(2);

}

function phoneBill() {

  var billString = billStringElement.value;
  let total = calculateBtnBill(billString)
  billTotalElement.innerHTML = total;

  if (total < 20) {
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("danger");
  } else if (total > 20 && 30 > total) {
    billTotalElement.classList.add("warning");
    billTotalElement.classList.remove("danger");
  } else if (total > 30) {
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.add("danger");
  }

}

//link the function to a click event on the calculate button
calculateBtnElement.addEventListener('click', phoneBill);

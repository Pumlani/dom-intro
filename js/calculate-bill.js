//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//global scope
var roundedBillTotal=0;
//create the function that will be called when the calculate button is pressed
function calculateBtnBill(){
    // get the string entered in the textArea
    //  * this function should read the string value entered - split it on a comma.
    var billStringElm = billStringElement.value;
    //split the string
    var billItems = billStringElm.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    //  * loop over all the entries in the the resulting list
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        //  * check if it is a call or an sms and add the right amount to the overall total
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
    //round to two decimals
    roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
}

function screenBehav() {

  if(roundedBillTotal< 20 ) {
  billTotalElement.classList.remove("warning");
  billTotalElement.classList.remove("danger");
  }

  else if(roundedBillTotal>20 && 30>roundedBillTotal){
  billTotalElement.classList.add("warning");
  billTotalElement.classList.remove("danger");
  }
  else if(roundedBillTotal>30){
  billTotalElement.classList.remove("warning");
  billTotalElement.classList.add("danger");
  }
}
//link the function to a click event on the calculate button
calculateBtnElement.addEventListener('click',
function (){
  calculateBtnBill();
  screenBehav();
}
);

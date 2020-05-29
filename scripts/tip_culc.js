function calculateTip() {
    var bill = document.getElementById("bill").value;
    var tip = document.getElementById("tip").value;
    var people = document.getElementById("people").value;


var totalTip = (bill*tip/100) / people;
var totalBill = (bill/people) + totalTip;

document.getElementById("total").style.display = "block";
document.getElementById("tipn").innerHTML = totalTip;
document.getElementById("totaln").innerHTML = totalBill;


if (people === "" || people <= 1) {
    people = 1;
    document.getElementById("total").style.display = "none";
  } else {
    document.getElementById("total").style.display = "block";
  }
}

document.getElementById("calculate").onclick = function() {
    calculateTip();
}
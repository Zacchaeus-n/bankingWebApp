/**
 * =========================
 * DEPOSIT CALCULATION
 * =========================
 */

// const calculate = document.getElementsByTagName("button");
console.log(calculate);
calculate.addEventListener("click", function calculator(e) {
  //prevent default propagation of form click event
  e.preventDefault();

  //variable declaration
  let customerName = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;
  let totalBalance;
  let previousBalance = 0;

  if (isNaN(amount)) {
    alert("Please Enter a number");
  }

  //perform calculation on values
  totalBalance = parseFloat(previousBalance) + parseFloat(amount);

  let cusName = (document.getElementById("cusname").innerHTML = customerName);
  let pBalance = (document.getElementById("prevalance").innerText =
    totalBalance);
  let cBalance = (document.getElementById("curbalance").innerText =
    totalBalance);
  let tBalance = (document.getElementById("totalalance").innerText =
    totalBalance);
  alert(`${amount} deposited successfully your new balance is ${totalBalance}`);
});

// year on footer section
let myDate = new Date();
let mydateYear = document.getElementById("varYear");
mydateYear.innerHTML = myDate.getFullYear();

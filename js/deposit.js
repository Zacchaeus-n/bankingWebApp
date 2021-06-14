/**
 * ====================================
 * SELECTING DOM ELEMENTS
 * ====================================
 */
const tabs = document.querySelector(`.tabs`);
const tabBtns = tabs.querySelectorAll(`[role="tab"]`);

/**
 * ====================================
 * PROMO TABING
 * ====================================
 */

const tabPanels = Array.from(tabs.querySelectorAll(`[role="tabpanel"]`));

function handleTabClick(e) {
  //hide all tabs panels
  tabPanels.forEach((tabPanel) => (tabPanel.hidden = true));
  //mark all tabs as unselected
  tabBtns.forEach((tab) => tab.setAttribute(`aria-selected`, false));
  //mark the clicked tab as selected
  e.currentTarget.setAttribute(`aria-selected`, true);
  //find the associated tabPanel and show it
  const { id } = e.currentTarget;

  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute(`aria-labelledby`) === id
  );
  tabPanel.hidden = false;
}

tabBtns.forEach((tabBtn) => tabBtn.addEventListener(`click`, handleTabClick));

/**
 * =========================
 * DEPOSIT CALCULATION
 * =========================
 */

let calculate = document.querySelector(".calculate");
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

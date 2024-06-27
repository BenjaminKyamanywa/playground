// initiate variables
let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const changeDueDisplay = document.getElementById("change-due");
const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const priceScreen = document.getElementById("price-screen");
const cashDrawer = document.getElementById("cash-drawer-display");

// format results
const formatResults = (status, change) => {
  changeDueDisplay.innerHTML `<p>Status: ${status}</p>`;
  change.map(
    money => (changeDueDisplay.innerHTML += `<p>${money[0]}: $${money[1]}</p>`)
  );
  return
}

// check cash register funds
const checkCashRegister = () => {
  if (Number(cash.value) < price) {
    alert('Customer does not have enough money to purchase the item');
    cash.value = "";
    return
  }

  if (Number(cash.value) === price) {
    changeDueDisplay.innerHTML = '<p>No change due - customer paid with exact cash</p>';
    cash.value = "";
    return
  }

  
}
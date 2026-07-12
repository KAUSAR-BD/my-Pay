import "../../src/style.css";

document
  .getElementById("addMoney-Button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.getElementById("select-bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = document.getElementById("pin-number").value;

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText,
    );

    const newTotalBalance = addAmount + availableBalance;

    document.getElementById("available-balance").innerText = newTotalBalance;
  });

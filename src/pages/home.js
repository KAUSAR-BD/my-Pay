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

    // select bank
    if (!bank) {
      alert("Please select a bank.");
      return;
    }

    // Validate account number (11 digits)
    if (accountNumber.length < 11) {
      alert("Please enter your account number");
      return;
    }

    // Validate PIN (example PIN)
    if (pinNumber !== "1234") {
      alert("Invalid PIN.");
      return;
    }

    const newTotalBalance = addAmount + availableBalance;

    document.getElementById("available-balance").innerText = newTotalBalance;

    // clear form
    document.getElementById("select-bank").selectedIndex = 0;
    document.getElementById("account-number").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("pin-number").value = "";

    alert("Money added successfully!");
  });

// cashout

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agent = document.getElementById("agent-number").value;
  const cashOutAmount = parseInt(
    document.getElementById("cashout-amount").value,
  );

  const cashoutPin = document.getElementById("cashoutPin-number").value;

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText,
  );

  if (cashOutAmount > availableBalance) {
    alert("Insufficient balance!");
    return;
  }
  const afterCashoutBalance = availableBalance - cashOutAmount;

  document.getElementById("available-balance").innerText = afterCashoutBalance;
});


// toggle feature

document.getElementById("addMoney-btn").addEventListener("click", function () {
  document.getElementById("cashout-section").style.display = "none";
  document.getElementById("addMoney-section").style.display = "block";
});

document.getElementById("cashout-btn").addEventListener("click", function () {
  document.getElementById("cashout-section").style.display = "block";
  document.getElementById("addMoney-section").style.display = "none";
});

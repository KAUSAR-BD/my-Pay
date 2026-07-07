import "./style.css";

// login button funtionalites

document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();

  //   fixed mobile number for checking user auth

  const mobileNumber = 1234567890;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  console.log(mobileNumberValueConverted, pinNumberValueConverted);

  if (
    mobileNumber === mobileNumberValueConverted &&
    pinNumber === pinNumberValueConverted
  ) {
    window.location.href = "./src/pages/home.html";
  } else {
    alert("Invalid Crendential");
  }
});

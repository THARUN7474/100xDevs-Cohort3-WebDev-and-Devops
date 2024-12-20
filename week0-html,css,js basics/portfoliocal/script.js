// var calucalate = document.getElementById("calculate");

// calculate.addEventListener("click", function () {
//   let capital = document.getElementById("capital");
//   let years = document.getElementById("years");
//   let interestRate = document.getElementById("interest");
//   let simpleInterest = (capital.value * interestRate.value * years.value) / 100;
//   let result = document.getElementById("result");
//   result.value = simpleInterest.toFixed(2);
// });

document.getElementById("calculate").addEventListener("click", function () {
  const capital = parseFloat(document.getElementById("capital").value);
  const years = parseInt(document.getElementById("years").value);
  const interest = parseFloat(document.getElementById("interest").value) / 100;

  if (isNaN(capital) || isNaN(years) || isNaN(interest)) {
    alert("Please enter valid numbers");
    return;
  }

  const futureValue = capital * Math.pow(1 + interest, years);
  document.getElementById("result").innerText = futureValue.toFixed(2) + " Cr";
});

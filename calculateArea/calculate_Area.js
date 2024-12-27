function calculateArea() {
  let grocery1 = parseFloat(document.getElementById("grocery1").value);
  let grocery2 = parseFloat(document.getElementById("grocery2").value);
  let grocery3 = parseFloat(document.getElementById("grocery3").value);

  if (isNaN(grocery1) || isNaN(grocery2) || isNaN(grocery3)) {
    document.getElementById("result").innerText =
      "Please enter valid numbers for all fields";
    return;
  }

  let totalGrocery = grocery1 + grocery2 + grocery3;

  document.getElementById(
    "result"
  ).innerText = `The total amount is: ${totalGrocery}`;
}

let length;
let width;

function calculateArea() {
  length = parseFloat(document.getElementById("length").value);
  width = parseFloat(document.getElementById("width").value);

  if (isNaN(length) || isNaN(width)) {
    document.getElementById("result").innerText =
      "Please enter valid numbers for length and width.";
    return;
  }

  let area = length * width;

  document.getElementById(
    "result"
  ).innerText = `The area of the rectangle is: ${area}`;
}

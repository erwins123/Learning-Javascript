let count = 0;

function increaseCount() {
  count++;
  displayCount();
  checkAccountValue();
}

function displayCount() {
  document.getElementById("countDisplay").innerHTML = count;
}

function checkAccountValue() {
  if (count === 10) {
    alert("Your instagram post gained 10 followers! Keep it up!");
  } else if (count === 20) {
    alert("Your instagram post gained 20 followers! keep it up!");
  }
}

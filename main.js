let bill = document.querySelector(".bill");
let tip = document.querySelector(".tip");

let span = document.querySelector("span");

function onclickkk() {
  console.log(bill.value);
  span.innerText = bill.value * tip.value;
}

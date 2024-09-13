let input = document.querySelector(".display");
let reset = document.querySelector(".reset");
let deleteVal = document.querySelector(".delete");

function displayValue(value) {
  input.value += value;
  input.innerText = input.value;
}
function clearDisplay() {
  input.value = "";
}

function deleteDigit() {
  let currentVal = input.value;
  input.value = currentVal.slice(0, -1);
}
function calculateResult() {
  let finalResult = eval(input.value);
  input.value = finalResult;
}

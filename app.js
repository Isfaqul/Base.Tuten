let binaryField = document.getElementById("bin-input");
let decimalField = document.getElementById("dec-input");
const binBtn = document.getElementById("bin-btn");
const decBtn = document.getElementById("dec-btn");
const resetBtn = document.getElementById("reset-btn");

// Event Listeners
resetBtn.addEventListener("click", resetFields);
binBtn.addEventListener("click", outputDecimal);
decBtn.addEventListener("click", outputBinary);

// functions
function resetFields() {
  binaryField.value = "";
  decimalField.value = "";
}

// Binary to Decimal
function outputDecimal() {
  decimalField.value = calcDecimal();
}

function calcDecimal() {
  binary = validBinary(binaryField.value);
  let decimal = null;
  for (let i = 0; i < binary.length; i++) {
    let currentValue = Number(binary[i]) * 2 ** Number(binary.length - 1 - i);
    decimal += currentValue;
  }
  return decimal;
}

function validBinary(input) {
  if (input) {
    for (let i = 0; i < input.length; i++) {
      if (Number(input[i]) > 1) {
        resetFields();
        alert("Enter binary only");
        return;
      }
    }
  }
  return input;
}

// Decimal to Binary
function outputBinary() {
  if (calcBinary(decimalField.value)) {
    binaryField.value = calcBinary(decimalField.value);
  }
}

function calcBinary(num) {
  const DIVISOR = 2;
  let factor;
  let remainder;
  let binary = "";

  while (!(factor === 0)) {
    factor = parseInt(num / DIVISOR);
    remainder = parseInt(num % DIVISOR);
    binary = remainder + binary;

    num = factor;
  }

  return Number(binary);
}

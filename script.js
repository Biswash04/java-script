function getValues() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  return {
    num1: num1,
    num2: num2,
  };
}

function add() {
  const values = getValues();
  const result = values.num1 + values.num2;
  document.getElementById("result").textContent = "Result:" + result;
}

function subtract() {
  const values = getValues();
  const result = values.num1 - values.num2;
  document.getElementById("result").textContent = "Result:" + result;
}
function multiply() {
  const values = getValues();
  const result = values.num1 * values.num2;

  document.getElementById("result").textContent = "Result:" + result;
}
function divide() {
  const values = getValues();
  const result = values.num1 / values.num2;

  document.getElementById("result").textContent = "Result:" + result;
}

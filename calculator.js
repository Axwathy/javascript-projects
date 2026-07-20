
function add(a, b) {
  return a + b;
}
function subtract(a, b) {  
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}
function printResult(text) {
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";   // make the box visible
  resultDiv.textContent = "Result: " + text;
}
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    printResult("Please enter valid numbers in both fields.");
    return;
  }
  const operator = document.getElementById("operator").value;

  let result;
  
  if (operator === "add") {
    result = add(num1, num2);
  } else if (operator === "subtract") {
    result = subtract(num1, num2);
  } else if (operator === "multiply") {
    result = multiply(num1, num2);
  } else if (operator === "divide") {
    result = divide(num1, num2);
  }
  printResult(result);
}
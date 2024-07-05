document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
    let operator = null;
    let firstOperand = null;
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const value = this.getAttribute("data-num");
        const operatorValue = this.getAttribute("data-operator");
  
        // Handle numeric input
        if (value !== null) {
          currentInput += value;
          display.textContent = currentInput;
        }
  
        // Handle operator input
        if (operatorValue !== null) {
          if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
          } else if (currentInput !== "") {
            firstOperand = operate(operator, firstOperand, parseFloat(currentInput));
          }
          operator = operatorValue;
          currentInput = "";
          display.textContent = operator;
        }
  
        // Handle equals
        if (this.id === "equals") {
          if (operator !== null && currentInput !== "") {
            const result = operate(operator, firstOperand, parseFloat(currentInput));
            display.textContent = result;
            currentInput = result.toString();
            firstOperand = null;
            operator = null;
          }
        }
  
        // Handle clear
        if (this.id === "clear") {
          currentInput = "";
          operator = null;
          firstOperand = null;
          display.textContent = "0";
        }
      });
    });
  
    function operate(operator, a, b) {
      switch (operator) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        default:
          return b;
      }
    }
  });
  
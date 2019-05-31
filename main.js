const operators = {
    "+": (l, r) => l + r,
    "-": (l, r) => l - r,
    "*": (l, r) => l * r,
    "/": (l, r) => (r != 0) ? l / r : NaN,
};
// hooks
const disp = document.querySelector(".textarea");
const disp2 = document.querySelector(".textarea2");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
// variables
var operator;
var bBuffer;
var aBuffer;
var computeOnOperator;
const reset = () => {
    // resets complete state of the machine
    operator = "";
    bBuffer = "";
    aBuffer = "";
    disp.textContent = "00";
    disp2.textContent = "Welcome to my calculator! I hope you enjoy using it :) PS: There's keyboard support.";
    computeOnOperator = true;
};
function display(buffer) {
    disp.textContent = buffer;
    disp2.textContent = bBuffer + operator + aBuffer + "=?";
    printBuffers();
}
function operate() {
    let a = parseFloat(aBuffer);
    let b = parseFloat(bBuffer);
    bBuffer = "" + operators[operator](b, a);
}
function handleNumberbutton(input) {
    if (aBuffer.includes(".") && input === ".") {
        return;
    }
    else if (input === "<") {
        aBuffer = aBuffer.slice(0, aBuffer.length - 1);
    }
    else {
        aBuffer += input;
    }
    display(aBuffer);
}
function handleOperatorButton(input) {
    if (aBuffer && computeOnOperator) {
        if (bBuffer) {
            operate();
        }
        else {
            bBuffer = aBuffer;
        }
    }
    aBuffer = "";
    computeOnOperator = true;
    operator = input;
    display(bBuffer);
}
function handleEqualsButton() {
    if (aBuffer && bBuffer) {
        operate();
        computeOnOperator = false;
        display(bBuffer);
    }
}
numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        handleNumberbutton(e.target.textContent);
    });
});
operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        handleOperatorButton(e.target.textContent);
    });
});
equalsButton.onclick = handleEqualsButton;
clearButton.onclick = reset;
function printBuffers() {
    console.log(`B: ${bBuffer}, A: ${aBuffer}, op: ${operator}`);
}
window.addEventListener("keydown", (e) => {
    let k = e.key;
    if (k in operators) {
        handleOperatorButton(k);
    }
    else if (parseInt(k) || k === ".") {
        handleNumberbutton(k);
    }
    else if (k === "Enter") {
        handleEqualsButton();
    }
    else if (k === "Backspace") {
        handleNumberbutton("<");
    }
    else if (k.toUpperCase() === "C") {
        reset();
    }
});
reset(); // initializes calculator.

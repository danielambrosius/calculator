const add = (l:number, r:number):number => l + r;
const subtract = (l:number, r:number):number => l - r;
const multiply = (l:number, r:number):number => l * r;
const devide = (l:number, r:number):number => (r != 0)? l / r : NaN;
const operators = {
    "+": (l:number, r:number):number => l + r,
    "-": (l:number, r:number):number => l - r,
    "*": (l:number, r:number):number => l * r,
    "/": (l:number, r:number):number => (r != 0)? l / r : NaN,
}

const disp = document.querySelector(".textarea");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = <HTMLElement>document.querySelector(".clear");
const equalsButton = <HTMLElement>document.querySelector(".equals");

var operator:string;
var left:number;
var right:number;
var clearDisplay:boolean = false; // does the display need no ble "cleared" next time i enter a number???

const reset = () => {
    operator = "";
    left = null;
    right = null;
    disp.textContent = "";
    clearDisplay = true;
}

function operate(op) {
    left = operators[op](left, right);
    disp.textContent = '' + left;
}
function handleOperator(myOperator:string) {
    // operate and store result in left before changing operator.
    if (left === null) {
        // if the left buffer is empty, store current number in it
        left = parseFloat(disp.textContent);
    } else {
        if (!clearDisplay || right == null){
            // If the user has entered a new number, or the right buffer is empty. 
            right = parseFloat(disp.textContent);
        }
        operate(myOperator);
    }

    operator = myOperator;
    console.log("left: " + left + ", right: " + right);
}

numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (clearDisplay) {
            disp.textContent = "";
            clearDisplay = false;
        }
        disp.textContent += (<HTMLElement>e.target).textContent;
    })
});
clearButton.onclick = reset

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // TODO: fix me, so that i don't bug out.
        clearDisplay = true;
        handleOperator((<HTMLElement>e.target).textContent)
    })
})

equalsButton.onclick = (e) => {
    right = parseFloat(disp.textContent);
    operate(operator);
    left = null;
    console.log("left: " + left + ", right: " + right);
}
reset();
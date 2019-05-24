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

const reset = () => {
    operator = "";
    left = null;
    right = null;
    disp.textContent = "";
}

function operate(op) {
    // hmmm
    left = operators[op](left, right);
    disp.textContent = '' + left;
}
function handleOperator(myOperator:string) {
    if (left != null) {
        // operate and store result in left before changing operator
        right = parseFloat(disp.textContent);
        operate(myOperator);
    } else {
        left = parseFloat(disp.textContent);
    }

    operator = myOperator;
    console.log(left);
}

numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (left != null) {
            disp.textContent = "";
        }
        disp.textContent += (<HTMLElement>e.target).textContent;
    })
});
clearButton.onclick = reset

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        handleOperator((<HTMLElement>e.target).textContent)
    })
})

equalsButton.onclick = (e) => {
    right = parseFloat(disp.textContent);
    operate(operator);
}
reset();
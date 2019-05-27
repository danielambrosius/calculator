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
var bBuffer:string;
var aBuffer:string;
var computeOnOperator:boolean;

const reset = () => {
    operator = "";
    bBuffer = "";
    aBuffer = "";
    disp.textContent = "";
    computeOnOperator = true;
}

function display(buffer:string)  {
    disp.textContent = buffer;
    printBuffers();
}

function operate() {
    let a = parseFloat(aBuffer);
    let b = parseFloat(bBuffer); 
    bBuffer = "" + operators[operator](b, a);
}

function handleNumberbutton(input:string) {
    if (aBuffer.includes(".") && input === ".") {return}
        aBuffer += input;
        display(aBuffer);
}

function handleOperatorButton(input:string) {
    if (aBuffer && computeOnOperator) {
        if (bBuffer) {
            operate();
        } else {
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
        handleNumberbutton((<HTMLElement>e.target).textContent);
    })
});

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        handleOperatorButton((<HTMLElement>e.target).textContent);
    })
})

equalsButton.onclick = handleEqualsButton;
clearButton.onclick = reset;

function printBuffers() {
    console.log(`B: ${bBuffer}, A: ${aBuffer}, op: ${operator}`);
}

reset();

window.addEventListener("keydown", (e) => {
    let k:string = e.key;
    if (k in operators) {
        handleOperatorButton(k);
    } else if (parseInt(k) || k === ".") {
        handleNumberbutton(k);
    } else if (k === "Enter") {
        handleEqualsButton();
    } else if (k === "Backspace") {
        reset();
    }
})

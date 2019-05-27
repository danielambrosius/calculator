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

numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let input = (<HTMLElement>e.target).textContent;
        if (aBuffer.includes(".") && input === ".") {return}
        aBuffer += input;
        display(aBuffer);
    })
});

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (aBuffer && computeOnOperator) {
            if (bBuffer) {
                operate();
            } else {
                bBuffer = aBuffer;
            }
        }
        aBuffer = "";
        computeOnOperator = true;
        operator = (<HTMLElement>e.target).textContent;
        display(bBuffer);
    })
})

equalsButton.onclick = (e) => {
    if (aBuffer && bBuffer) {
        operate();
        computeOnOperator = false;
        display(bBuffer);
    }
}

function printBuffers() {
    console.log(`B: ${bBuffer}, A: ${aBuffer}, op: ${operator}`);
}

clearButton.onclick = reset
reset();

// "operator" should check the A buffer, 
//      if both A and B have values:
//            the result should be computed and stored in B. Afterwards A should be set to null.
//      if only A has a value,
//          it should be moved to B. Afterwards A should be set to null.
//      The operator should then be assigned.
//      display the B buffer.

// "Equals" should:
//      If A and B have values, store the result in B
//      Display B buffer

// number should:
//      Append value to A buffer
//      Display A bufer.
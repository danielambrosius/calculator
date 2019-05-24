const add = (l:number, r:number):number => l + r;
const subtract = (l:number, r:number):number => l - r;
const multiply = (l:number, r:number):number => l * r;
const devide = (l:number, r:number):number => (r != 0)? l / r : NaN;
const operators = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": devide,
}

const disp = document.querySelector(".textarea");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const functionButtons = document.querySelectorAll(".other");

var operator = "";
var left = 0;
var right = 0;

function operate(operator:string, left:number, right:number):number {
    return operators[operator](left, right);
}
console.log("hello world")

const add = (l:number, r:number):number => l + r;
const subtract = (l:number, r:number):number => l - r;
const multiply = (l:number, r:number):number => l * r;
const devide = (l:number, r:number):number => l / r;


// this is how you strongly type a argument which is a function.
function operate(operator:(l: number, r:number) => number, left:number, right:number):number {
    return operator(left, right); 
}
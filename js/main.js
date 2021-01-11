let currentNumber = "";
let firstNumber = "";
let operatorValue = "";
let setOperator = false;

function numberPress(e){
    //currentNumber = (!currentNumber) ? e.target.value : currentNumber + e.target.value;
    if((currentNumber.length + e.target.value.length) < 10){
        currentNumber += e.target.value;
        displayOutput(currentNumber);
    }
    
}

function displayOutput(number="0"){
    const numDigits = number.length;
    const displayElem = document.querySelector(".display");

    displayElem.value = (number === Infinity) ? `Error` : number
}

function clear(){
    document.querySelector(".display").value = "0"
    reset("");
}

function reset(number){
    currentNumber = number;
    firstNumber = "";
    operatorValue = "";
    setOperator = false;
}

function operatorPress(e){
    if(!currentNumber){
        return;
    }else if(!firstNumber){
        firstNumber = currentNumber;
    }else{
        solve(firstNumber, operatorValue, currentNumber);
    }
    operatorValue = e.target.value;
    currentNumber = "";
    setOperator = true;
}

function solve(first, operator, current){
    let expression = `${first} ${operator} ${current}`;
    firstNumber = eval(expression);
    displayOutput(firstNumber);
}

function equalPress(){
    solve(firstNumber, operatorValue, currentNumber);
    reset(firstNumber);
}

const allButtons = Array.from(document.querySelectorAll(".number"));
allButtons.forEach(btn => btn.addEventListener("click", numberPress));
const allOperators = Array.from(document.querySelectorAll(".operator"));
allOperators.forEach(btn => btn.addEventListener("click", operatorPress));

document.querySelector(".clear").addEventListener("click", clear);
document.querySelector(".equal").addEventListener("click", equalPress);
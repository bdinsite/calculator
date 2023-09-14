// PROJECT VARIABLES
let numArr = [];
let input1 = 0;
let input2 = 0;
let total = 0;
let operator = "";

// GRAB BUTTONS
const num0 = document.querySelector('#num0');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const num4 = document.querySelector('#num4');
const num5 = document.querySelector('#num5');
const num6 = document.querySelector('#num6');
const num7 = document.querySelector('#num7');
const num8 = document.querySelector('#num8');
const num9 = document.querySelector('#num9');

const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

const ac = document.querySelector('#ac');
const ce = document.querySelector('#ce');
const percent = document.querySelector('#percent');
const root = document.querySelector('#root');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');

// GRAB DISPLAY ITEMS
const topRow = document.querySelector('.top');
const totalRow = document.querySelector('.total');

// ADD NUM-BUTTON EVENTLISTENERS
num0.addEventListener('click', recordNumber);
num1.addEventListener('click', recordNumber);
num2.addEventListener('click', recordNumber);
num3.addEventListener('click', recordNumber);
num4.addEventListener('click', recordNumber);
num5.addEventListener('click', recordNumber);
num6.addEventListener('click', recordNumber);
num7.addEventListener('click', recordNumber);
num8.addEventListener('click', recordNumber);
num9.addEventListener('click', recordNumber);
dot.addEventListener('click', recordNumber);

// ADD OPERATOR-BUTTON EVENTLISTENERS
plus.addEventListener('click', recordOperator);
minus.addEventListener('click', recordOperator);
divide.addEventListener('click', recordOperator);
multiply.addEventListener('click', recordOperator);

// ADD EVENTLISTENERS FOR SPECIAL BUTTONS
equal.addEventListener('click', calculateResult);
ac.addEventListener('click', clear);
ce.addEventListener('click', backSpace);
percent.addEventListener('click', convertToPercentage);
root.addEventListener('click', rootOfTotal);

function recordNumber(evt){
    if(operator == ""){
        numArr.push(evt.target.childNodes[0].data);
        input1 = Number(numArr.join(''));
        topRow.textContent = `${input1}`;
    } else if(operator != ""){
        numArr.push(evt.target.childNodes[0].data);
        input2 = Number(numArr.join(''));
        topRow.textContent = `${input1} ${operator} ${input2}`   
    }
}

function recordOperator(evt){
    operator = evt.target.childNodes[0].data;
    topRow.textContent = `${input1} ${operator}`
    numArr.splice(0);
}

function calculateResult(){
    if(operator == "+"){
        total = input1+input2;
    } else if(operator == "-"){
        total = input1-input2;
    } else if(operator == "/"){
        total = input1/input2;
    } else {
        total = input1*input2;
    } 
    input1 = total;
    index = total.toString().split('').length;
    if(total>9999999999999 || total<-9999999999999){
        totalRow.textContent = "Out of memory...";
    } else if(index > 13){
        numArr = total.toString().split('');
        numArr = numArr.slice(0,12);
        total = Number(numArr.join(''));
        totalRow.textContent = total;
    } else {
        totalRow.textContent = total;
    }
}

function clear(){
    numArr = [];
    input1 = 0;
    input2 = 0;
    total = 0;
    operator = "";
    topRow.textContent = "";
    totalRow.textContent = 0;
}

function backSpace(){
    let index = (numArr.length)-1;
    if(operator == ""){
        numArr = numArr.slice(0,index);
        input1 = Number(numArr.join(''));
        topRow.textContent = `${input1}`;
    } else if(operator != ""){
        numArr = numArr.slice(0,index);
        input2 = Number(numArr.join(''));
        topRow.textContent = `${input1} ${operator} ${input2}`   
    }
}

function convertToPercentage(){
    total = total*100;
    index = total.toString().split('').length;
    if(index > 13){
        numArr = total.toString().split('');
        numArr = numArr.slice(0,11);
        total = Number(numArr.join(''));
        totalRow.textContent = total+"%";
    } else {
        totalRow.textContent = total+"%";
    }
}

function rootOfTotal(evt){
    operator = evt.target.childNodes[0].data;
    topRow.textContent = `${operator}${total}`;
    total = (total**(1/2));
    index = total.toString().split('').length;
    if(index > 13){
        numArr = total.toString().split('');
        numArr = numArr.slice(0,12);
        total = Number(numArr.join(''));
        totalRow.textContent = total;
    } else {
        totalRow.textContent = total;
    }
}
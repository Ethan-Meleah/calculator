console.log('online')


//assign each of the number buttons to a variable
var oneBtn = document.getElementById('one');
var twoBtn = document.getElementById('two');
var threeBtn = document.getElementById('three');
var fourBtn = document.getElementById('four');
var fiveBtn = document.getElementById('five');
var sixBtn = document.getElementById('six');
var sevenBtn = document.getElementById('seven');
var eightBtn = document.getElementById('eight');
var nineBtn = document.getElementById('nine');
var zeroBtn = document.getElementById('zero');
//assign each of the misc. operators to a variable
var decimalBtn = document.getElementById('decimal');
var backspaceBtn = document.getElementById('backspace');
var allClearBtn = document.getElementById('clear');
//assign display to variable
var displayValueElement = document.getElementById('current-equation')
//get all number buttons
var calcNumBtns = document.getElementsByClassName('calc-btn-num')
//console.log(calcNumBtns)
//get all operator buttons
var calcOpBtns = document.getElementsByClassName('calc-btn-operator')

//create the default calculator button
var displayVal = 0;
var pendingVal;
var evalStringArray = [];

/* 

NUMBER CODE, to update and display numbers in the correct manner.

*/
updateDisplayVal = (clickObj) => {
  //console.log('reaching display function')
  var btnText = clickObj.target.innerText;

  if (displayVal == '0') {
    displayVal = '';    
  }

  displayVal += btnText;
  //console.log('display value = ' + displayVal)
  displayValueElement.innerText = displayVal;
}


for (i = 0; i < calcNumBtns.length; i++) {
  //console.log('looping')
  calcNumBtns[i].addEventListener('click', updateDisplayVal, false)
}


allClearBtn.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  displayValueElement.innerHTML = displayVal;
}

backspaceBtn.onclick = () => {
  console.log("backspace!")
  let lengthofDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthofDisplayVal - 1);

  if (displayVal === '') {
    displayVal = '0'
  }

  displayValueElement.innerHTML = displayVal;
}

decimalBtn.onclick = () => {
  if (!displayVal.includes('.')) {
    displayVal += '.';
    displayValueElement.innerHTML = displayVal;
  }
}

/* 

OPERATOR CODE - to perform operations

*/


//On click, go through each operator and perform operation

var performOperations = (clickObj) => {
  var operator = clickObj.target.innerText;


  switch (operator) {
    case '+':
      pendingVal = displayVal;
      displayVal = 0;
      displayValueElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('+');
      break;
    case '-':
      pendingVal = displayVal;
      displayVal = 0;
      displayValueElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('-');
      break;
    case 'x':
        pendingVal = displayVal;
        displayVal = 0;
        displayValueElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('*');
        break;
    case '÷':
        pendingVal = displayVal;
        displayVal = 0;
        displayValueElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('/');
        break;
    case '=':
      evalStringArray.push(displayVal);
      var total = eval(evalStringArray.join(' '));
      displayVal = total + '';
      displayValueElement.innerText = displayVal;
      evalStringArray = [];
      break;
  }
}

for (i = 0; i < calcOpBtns.length; i++) {
  calcOpBtns[i].addEventListener('click', performOperations, false)
}



function makeDraggable(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }


  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }


  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }


  element.getElementsByClassName('title-bar')[0].onmousedown = dragMouseDown;
}


makeDraggable(document.getElementById('notepad'));
makeDraggable(document.getElementById('todo'));
makeDraggable(document.getElementById('calculator'));




function notepadbtn() {
  var NotepadView = document.getElementById("notepad");
  if (NotepadView.style.display === "block") {
    NotepadView.style.display = "none";
  } else {
    NotepadView.style.display = "block";
  }
}

function todobtn() {
  var TodoView = document.getElementById("todo");
  if (TodoView.style.display === "block") {
    TodoView.style.display = "none";
  } else {
    TodoView.style.display = "block";
  }
}

function calcbtn() {
  var TodoView = document.getElementById("calculator");
  if (TodoView.style.display === "block") {
    TodoView.style.display = "none";
  } else {
    TodoView.style.display = "block";
  }
}



  let countdown;
  let targetTime;
  let paused = false;
  let initialTime = 25 * 60 * 1000; 
  let reset = 1;

  function Pomodoro() {
    clearInterval(countdown);
    countdown = null;
    paused = false;
    reset = 1;
    document.getElementById("timer").innerHTML = "25:00";
    initialTime = 25 * 60 * 1000;
  }

  function Sbreak() {
    clearInterval(countdown);
    countdown = null;
    paused = false;
    reset = 2;
    document.getElementById("timer").innerHTML = "05:00";
    initialTime = 5 * 60 * 1000;
  }

  function Lbreak() {
    clearInterval(countdown);
    countdown = null;
    paused = false;
    reset = 3;
    document.getElementById("timer").innerHTML = "60:00";
    initialTime = 60 * 60 * 1000;
  }

  function startTimer() {
    if (!countdown) {
      targetTime = new Date().getTime() + initialTime;
      countdown = setInterval(updateCountdown, 1000);
      paused = false;
    }
  }


  function resetTimer() {
    clearInterval(countdown);
    countdown = null;
    paused = false;

    if (reset == 1){
    document.getElementById("timer").innerHTML = "25:00";
    }

    else if (reset == 2) {
      document.getElementById("timer").innerHTML = "5:00";

    }

    else{
      document.getElementById("timer").innerHTML = "60:00"; 
    }

  }

  

  function updateCountdown() {
    if (!paused) {
      const now = new Date().getTime();
      const timeRemaining = targetTime - now;

      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      if (timeRemaining <= 0) {
        clearInterval(countdown);
        countdown = null;
        document.getElementById("timer").innerHTML = "00:00";
      }
    }
  }

  // Todo

  var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
}
}


var ul = document.querySelector('#myUL');
ul.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  ul.appendChild(ev.target); 
}
}, false);


function newElement() {
var li = document.createElement("li");
var inputValue = document.getElementById("myInput").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
  alert("You must write something!");
} else {
  document.getElementById("myUL").appendChild(li);
}
document.getElementById("myInput").value = "";

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}

// calculator

class Calculator {
constructor(previousOperandTextElement, currentOperandTextElement) {
  this.previousOperandTextElement = previousOperandTextElement
  this.currentOperandTextElement = currentOperandTextElement
  this.clear()
}

clear() {
  this.currentOperand = ''
  this.previousOperand = ''
  this.operation = undefined
}

delete() {
  this.currentOperand = this.currentOperand.toString().slice(0, -1)
}

appendNumber(number) {
  if (number === '.' && this.currentOperand.includes('.')) return
  this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation) {
  if (this.currentOperand === '') return
  if (this.previousOperand !== '') {
    this.compute()
  }
  this.operation = operation
  this.previousOperand = this.currentOperand
  this.currentOperand = ''
}

compute() {
  let computation
  const prev = parseFloat(this.previousOperand)
  const current = parseFloat(this.currentOperand)
  if (isNaN(prev) || isNaN(current)) return
  switch (this.operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '÷':
      computation = prev / current
      break
    default:
      return
  }
  this.currentOperand = computation
  this.operation = undefined
  this.previousOperand = ''
}

getDisplayNumber(number) {
  const stringNumber = number.toString()
  const integerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
  let integerDisplay
  if (isNaN(integerDigits)) {
    integerDisplay = ''
  } else {
    integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
  }
  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`
  } else {
    return integerDisplay
  }
}

updateDisplay() {
  this.currentOperandTextElement.innerText =
    this.getDisplayNumber(this.currentOperand)
  if (this.operation != null) {
    this.previousOperandTextElement.innerText =
      `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
  } else {
    this.previousOperandTextElement.innerText = ''
  }
}
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const negativeButton = document.querySelector('[data-negative]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
button.addEventListener('click', () => {
  calculator.appendNumber(button.innerText)
  calculator.updateDisplay()
})
})



operationButtons.forEach(button => {
button.addEventListener('click', () => {
  calculator.chooseOperation(button.innerText)
  calculator.updateDisplay()
})
})

equalsButton.addEventListener('click', button => {
calculator.compute()
calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
calculator.clear()
calculator.updateDisplay()
})


document.addEventListener('keydown', function (event) {
let patternForNumbers = /[0-9]/g;
let patternForOperators = /[+\-*\/]/g
if (event.key.match(patternForNumbers)) {
  event.preventDefault();
  calculator.appendNumber(event.key)
  calculator.updateDisplay()
}
if (event.key === '.') {
  event.preventDefault();
  calculator.appendNumber(event.key)
  calculator.updateDisplay()
}
if (event.key.match(patternForOperators)) {
  event.preventDefault();
  calculator.chooseOperation(event.key)
  calculator.updateDisplay()
}
if (event.key === 'Enter' || event.key === '=') {
  event.preventDefault();
  calculator.compute()
  calculator.updateDisplay()
}
if (event.key === "Backspace") {
  event.preventDefault();
  calculator.delete()
  calculator.updateDisplay()
}
if (event.key == 'Delete') {
  event.preventDefault();
  calculator.clear()
  calculator.updateDisplay()
}

});
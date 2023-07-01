
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
makeDraggable(document.getElementById('spotify'));

// navbuttons

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
  var CalculatorView = document.getElementById("calculator");
  if (CalculatorView.style.display === "block") {
    CalculatorView.style.display = "none";
  } else {
    CalculatorView.style.display = "block";
  }
}

function spotifybtn() {
  var SpotifyView = document.getElementById("spotify");
  if (SpotifyView.style.display === "block") {
    SpotifyView.style.display = "none";
  } else {
    SpotifyView.style.display = "block";
  }
}

function triggerFileInput() {
  document.getElementById("input-file").click();
}

const imageInput = document.getElementById('input-file');
const avatarImage = document.getElementById('avatar');

function triggerFileInput() {
  imageInput.click();
}

imageInput.addEventListener('change', event => {
  const image = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    localStorage.setItem('image', reader.result);
    avatarImage.src = localStorage.getItem('image');
  });

  if (image) {
    reader.readAsDataURL(image);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const storedImage = localStorage.getItem('image');
  if (storedImage) {
    avatarImage.src = storedImage;
  }
});


// fullscreen
const fullscreenButton = document.getElementById('fullscreen-button');
let isFullscreen = false;

fullscreenButton.addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
  if (!isFullscreen) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
    isFullscreen = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    isFullscreen = false;
  }
}


// timer

  let countdown;
  let targetTime;
  let paused = false;
  let initialTime = 25 * 60 * 1000; 
  let reset = 1;
  let longbreak = "00:60:00";

  

  function Pomodoro() {
    clearInterval(countdown);
    countdown = null;
    paused = false;
    reset = 1;
    document.getElementById("timer").innerHTML = "00:25:00";
    initialTime = 25 * 60 * 1000;
  }

  function Sbreak() {
    clearInterval(countdown);
    countdown = null;
    paused = false;
    reset = 2;
    document.getElementById("timer").innerHTML = "00:05:00";
    initialTime = 5 * 60 * 1000;
    
  }

  function Lbreak() {
    clearInterval(countdown);
    countdown = null;
    paused = false;
    reset = 3;
    document.getElementById("timer").innerHTML = longbreak;
    
    const [hours, minutes, seconds] = longbreak.split(":").map(Number);
    initialTime = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
  }
  
  function startTimer() {
    if (!countdown) {
      targetTime = new Date().getTime() + initialTime - 1000; 
      countdown = setInterval(updateCountdown, 1000);
      paused = false;
    }
  }

  function resetTimer() {
    clearInterval(countdown);
    countdown = null;
    paused = false;

    if (reset == 1){
    document.getElementById("timer").innerHTML = "00:25:00";
    }

    else if (reset == 2) {
      document.getElementById("timer").innerHTML = "00:05:00";

    }

    else{
      document.getElementById("timer").innerHTML = longbreak; 
    }

  }

  function LongBreakbtn() {
    var lngbreak = document.getElementById("SetLongBreak").value;
  
    if (lngbreak >= 60) {
      var hours = Math.floor(lngbreak / 60);
      var minutes = lngbreak % 60;
  
      var formattedHours = hours.toString().padStart(2, "0");
      var formattedMinutes = minutes.toString().padStart(2, "0");
  
      longbreak = formattedHours + ":" + formattedMinutes + ":00";
      document.getElementById("SetLongBreak").value = "";
    } else {
      longbreak = "00:" + lngbreak.toString().padStart(2, "0") + ":00";
      document.getElementById("SetLongBreak").value = "";
    }
  }

  function updateCountdown() {
    if (!paused) {
      const now = new Date().getTime();
      const timeRemaining = targetTime - now;
  
      const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      const formattedHours = hours.toString().padStart(2, "0");
      const formattedMinutes = minutes.toString().padStart(2, "0");
      const formattedSeconds = seconds.toString().padStart(2, "0");
  
      document.getElementById("timer").innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  
      if (timeRemaining <= 0) {
        clearInterval(countdown);
        countdown = null;
        document.getElementById("timer").innerHTML = "00:00:00";
      }
    }
  }
  

  // Todo

  var activeCounter = document.getElementById("activeCounter");
  var completedCounter = document.getElementById("completedCounter");
  
  function updateCounters() {
    var tasks = document.getElementsByTagName("LI");
    var activeCount = 0;
    var completedCount = 0;
  
    for (var i = 0; i < tasks.length; i++) {
      activeCount++;
      if (tasks[i].classList.contains("checked")) {
        completedCount++;
      } else {
       
      }
    }
  
    activeCounter.textContent = activeCount;
    completedCounter.textContent = completedCount;
  }
  
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
      updateCounters();
    }
    
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      updateCounters();
    };
  
    li.onclick = function() {
      this.classList.toggle("checked");
      updateCounters();
    };
  }
// notepad

function makeBold() {
  var div = document.querySelector(".tabcontent.active .editable-div");
  document.execCommand('bold', false, null);
  saveTabsContent();
}

function makeItalic() {
  var div = document.querySelector(".tabcontent.active .editable-div");
  document.execCommand('italic', false, null);
  saveTabsContent();
}

function makeUnderline() {
  var div = document.querySelector(".tabcontent.active .editable-div");
  document.execCommand('underline', false, null);
  saveTabsContent();
}

function makeStrikethrough() {
  var div = document.querySelector(".tabcontent.active .editable-div");
  document.execCommand('styleWithCSS', false, true);
  document.execCommand('insertHTML', false, '<span class="strikeout">' + getSelectionText() + '</span>');
  saveTabsContent();
}

function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}

var tabContainer = document.querySelector('.tabs');
var tabsDiv = document.querySelector('.tab');



function addTab() {
  var numTabs = document.querySelectorAll('.tablinks').length + 1;
  var tabId = 'Tab' + numTabs;

  var tabButton = document.createElement('button');
  tabButton.className = 'tablinks';
  tabButton.innerHTML = 'Note ' + numTabs;
  tabButton.setAttribute('data-tab-id', tabId);
  tabButton.addEventListener('click', createTabClickHandler(numTabs));

  var tabsDiv = document.querySelector('.tab');
  tabsDiv.appendChild(tabButton);

  var tabContent = document.createElement('div');
  tabContent.id = 'Tab' + numTabs;
  tabContent.className = 'tabcontent';
  tabContent.style.display = 'none';

  var innerDiv = document.createElement('div');
  innerDiv.id = 'input-text';
  innerDiv.className = 'editable-div';
  innerDiv.contentEditable = true;

  tabContent.appendChild(innerDiv);

  var tabsContainer = document.querySelector('.tabs');
  tabsContainer.appendChild(tabContent);

  saveTabsToLocalStorage();
}

function createTabClickHandler(tabIndex) {
  return function(event) {
    openTabs(event, 'Tab' + tabIndex);
  };
}






function saveTabsToLocalStorage() {
  
  var tabButtons = document.querySelectorAll('.tablinks');
  var tabContents = document.querySelectorAll('.tabcontent');
  var tabData = [];
  for (var i = 0; i < tabButtons.length; i++) {
    var tabButton = tabButtons[i];
    var tabContent = tabContents[i];
    var tab = {
      buttonId: tabButton.id,
      contentId: tabContent.id,
      buttonText: tabButton.innerHTML,
      contentText: tabContent.querySelector('.editable-div').innerHTML
    };
    tabData.push(tab);
  }

  localStorage.setItem('tabs', JSON.stringify(tabData));
}

function loadTabsFromLocalStorage() {
  var tabData = JSON.parse(localStorage.getItem('tabs'));
  if (!tabData) return;

  for (var i = tabData.length - 1; i >= 0; i--) {
    var tab = tabData[i];

    var tabButton = document.createElement('button');
    tabButton.className = 'tablinks';
    tabButton.id = tab.buttonId;
    tabButton.innerHTML = tab.buttonText;
    tabButton.onclick = function(event) {
      openTabs(event, tab.contentId);
    };
    tabsDiv.insertBefore(tabButton, tabsDiv.firstChild);

    var tabContent = document.createElement('div');
    tabContent.id = tab.contentId;
    tabContent.className = 'tabcontent';

    var editableDiv = document.createElement('div');
    editableDiv.id = 'input-text';
    editableDiv.className = 'editable-div';
    editableDiv.contentEditable = true;
    editableDiv.innerHTML = tab.contentText;
    tabContent.appendChild(editableDiv);

    tabContainer.insertBefore(tabContent, tabContainer.firstChild);
  }
}

function openTabs(event, tabId) {
  var tabContents = document.querySelectorAll('.tabcontent');
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
  }
  document.getElementById(tabId).style.display = 'block';
  var tabButtons = document.querySelectorAll('.tablinks');
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }
  event.currentTarget.classList.add('active');
}

loadTabsFromLocalStorage();



function saveTabsContent() {
  var tabContents = document.getElementsByClassName("editable-div");
  var tabContentsData = [];
  for (var i = 0; i < tabContents.length; i++) {
    tabContentsData.push(tabContents[i].innerHTML);
  }
  var tabLinks = document.getElementsByClassName("tablinks");
  var tabLinksData = [];
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinksData.push(tabLinks[i].textContent);
  }
  var tabsData = {
    tabContents: tabContentsData,
    tabLinks: tabLinksData
  };
  localStorage.setItem("tabsData", JSON.stringify(tabsData));
}

function loadTabsContent() {
  var tabsData = localStorage.getItem("tabsData");
  if (tabsData) {
    tabsData = JSON.parse(tabsData);
    var tabContents = document.getElementsByClassName("editable-div");
    for (var i = 0; i < tabContents.length; i++) {
      if (tabsData.tabContents[i]) {
        tabContents[i].innerHTML = tabsData.tabContents[i];
      }
    }
    var tabLinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tabLinks.length; i++) {
      if (tabsData.tabLinks[i]) {
        tabLinks[i].textContent = tabsData.tabLinks[i];
      }
    }

    // Load the created tabs
    var tabsContainer = document.querySelector(".tab");
    tabsContainer.innerHTML = ""; // Clear existing tabs

    for (var i = 0; i < tabsData.tabLinks.length; i++) {
      var tabName = tabsData.tabLinks[i];
      var tabId = "Tab" + (i + 1);

      var tabButton = document.createElement("button");
      tabButton.className = "tablinks";
      tabButton.textContent = tabName;
      tabButton.setAttribute("data-tab-id", tabId);

      tabButton.onclick = function (event) {
        var tabId = event.currentTarget.getAttribute("data-tab-id");
        openTabs(event, tabId);
      };

      tabsContainer.appendChild(tabButton);
    }
  }
}



document.getElementById("defaultOpen").click();
loadTabsContent();



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
  const deleteButton = document.querySelector('[data-delete]')
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

  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })
  
  function calculatorKeydownHandler(event) {
    var calculator = document.getElementById("calculator");
    var isHovered = false;
  
    calculator.addEventListener("mouseenter", function() {
      isHovered = true;
    });
  
    calculator.addEventListener("mouseleave", function() {
      isHovered = false;
    });
  
    document.addEventListener("keydown", function(event) {
      if (isHovered && document.activeElement === calculator) {
        let patternForNumbers = /[0-9]/g;
        let patternForOperators = /[+\-*\/]/g;
  
        if (event.key.match(patternForNumbers)) {
          event.preventDefault();
          calculator.appendNumber(event.key);
          calculator.updateDisplay();
        }
  
        if (event.key === '.') {
          event.preventDefault();
          calculator.appendNumber(event.key);
          calculator.updateDisplay();
        }
  
        if (event.key.match(patternForOperators)) {
          event.preventDefault();
          calculator.chooseOperation(event.key);
          calculator.updateDisplay();
        }
  
        if (event.key === 'Enter' || event.key === '=') {
          event.preventDefault();
          calculator.compute();
          calculator.updateDisplay();
        }
  
        if (event.key === "Backspace") {
          event.preventDefault();
          calculator.delete();
          calculator.updateDisplay();
        }
  
        if (event.key === 'Delete') {
          event.preventDefault();
          calculator.clear();
          calculator.updateDisplay();
        }
      }
    });
  }
  
// spotify


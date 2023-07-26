const signupcheck = (localStorage.getItem('signupname') !== null);
let signinavatar = document.getElementById('avatar');
let signinchecker = document.getElementById('signin');
let trialalert = document.getElementById('subalert');
if (signupcheck)  {
  var signupname = localStorage.getItem("signupname");
  signinchecker.innerHTML = "Hi <span id='user'></span> !";
  document.getElementById("user").textContent = signupname;
}else{
  trialalert.style.display="none";
  signinchecker.innerText = "Sign up";
  signinavatar.src="resources/login.png";
  signinavatar.style.borderRadius="0px";
  signinavatar.removeAttribute('data-bs-toggle');
  $('.navimg').removeAttr('onclick')
  $( ".navimg" ).on( "click", function() {
    alert( "Sign in is required." );
  } );
  signinavatar.onclick=function() {
    window.location.replace('SignIn.html');
  }
  $(document).ready(function(){
    $("#tutorial").modal('show');
});

}

// lightdarkmode




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
makeDraggable(document.getElementById('calendartab'));
makeDraggable(document.getElementById('timertab'));

// navbuttons

const savedBgColor = localStorage.getItem('bgColor');
const savedTextColor = localStorage.getItem('textColor');
document.documentElement.style.setProperty('--bgcolor', savedBgColor || 'white');
document.documentElement.style.setProperty('--textcolor', savedTextColor || 'black');
var checked = JSON.parse(localStorage.getItem('lightdark'));
document.getElementById('lightdark').checked = checked;
function handleThemeCheckChange() {
  var checkbox = document.getElementById('lightdark');
  document.getElementById('lightdark').checked = checkbox.checked;
  localStorage.setItem('lightdark', checkbox.checked);
}

document.getElementById('lightdark').addEventListener('change', handleThemeCheckChange);

function colorswitchbtn(){
  var coloswitch=document.getElementById('lightdark');
  if (coloswitch.checked == true){
    document.getElementById('lightdarklabel').innerHTML='Dark mode';
    document.documentElement.style.setProperty('--bgcolor','black');
    document.documentElement.style.setProperty('--textcolor','white');
    localStorage.setItem('bgColor', 'black');
    localStorage.setItem('textColor', 'white');
  }
  else{
    document.getElementById('lightdarklabel').innerHTML='Light mode';
    document.documentElement.style.setProperty('--bgcolor','white');
    document.documentElement.style.setProperty('--textcolor','black');
    localStorage.setItem('bgColor', 'white');
    localStorage.setItem('textColor', 'black');
  }
}
window.addEventListener('DOMContentLoaded', colorswitchbtn);
var activeFunction = null;

function notepadbtn() {
  var NotepadView = document.getElementById("notepad");
  if (window.innerWidth < 600) {

    if (activeFunction !== "notepad") {
      hideActiveFunction();
      NotepadView.style.display = "block";
      activeFunction = "notepad";
    } else {
      NotepadView.style.display = "none";
      activeFunction = null;
    }
  } else{
  if (NotepadView.style.display === "block") {
    NotepadView.style.display = "none";
  } else {
    NotepadView.style.display = "block";
  }
}
}

function timerbtn() {
  var TimerdView = document.getElementById("timertab");
  if (window.innerWidth < 600) {
    if (activeFunction !== "timertab") {
      hideActiveFunction();
      TimerdView.style.display = "block";
      activeFunction = "timertab";
    } else {
      TimerdView.style.display = "none";
      activeFunction = null;
    }
  } else{
  if (TimerdView.style.display === "block") {
    TimerdView.style.display = "none";
  } else {
    TimerdView.style.display = "block";
  }
  
  }
}

function todobtn() {
  var TodoView = document.getElementById("todo");
  if (window.innerWidth < 600) {
    if (activeFunction !== "todo") {
      hideActiveFunction();
      TodoView.style.display = "block";
      activeFunction = "todo";
    } else {
      TodoView.style.display = "none";
      activeFunction = null;
    }
  } else{
  if (TodoView.style.display === "block") {
    TodoView.style.display = "none";
  } else {
    TodoView.style.display = "block";
  }
}
}

function calcbtn() {
  var CalculatorView = document.getElementById("calculator");
  if (window.innerWidth < 600) {
    if (activeFunction !== "calculator") {
      hideActiveFunction();
      CalculatorView.style.display = "block";
      activeFunction = "calculator";
    } else {
      CalculatorView.style.display = "none";
      activeFunction = null;
    }
  }  else{
  if (CalculatorView.style.display === "block") {
    CalculatorView.style.display = "none";
  } else {
    CalculatorView.style.display = "block";
  }
}
}

function spotifybtn() {
  var SpotifyView = document.getElementById("spotify");
  if (window.innerWidth < 600) {
    if (activeFunction !== "spotify") {
      hideActiveFunction();
      SpotifyView.style.display = "block";
      activeFunction = "spotify";
    } else {
      SpotifyView.style.display = "none";
      activeFunction = null;
    }
  } else{
   if (SpotifyView.style.display === "block") {
    SpotifyView.style.display = "none";
  } else {
    SpotifyView.style.display = "block";
  }
}
}

function calendarbtn() {
  var CalendarView = document.getElementById("calendartab");
  if (window.innerWidth < 600) {

    if (activeFunction !== "calendartab") {
      hideActiveFunction();
      CalendarView.style.display = "block";
      activeFunction = "calendartab";
    } else {
      CalendarView.style.display = "none";
      activeFunction = null;
    }
  } else {
  if (CalendarView.style.display === "block") {
    CalendarView.style.display = "none";
  } else {
    CalendarView.style.display = "block";
  }
}
}

function hideActiveFunction() {
  if (activeFunction) {
    var activeView = document.getElementById(activeFunction);
    activeView.style.display = "none";
  }
  
}

window.addEventListener("resize", function() {
  if (window.innerWidth >= 600) {
    hideActiveFunction();
    activeFunction = null;
  }
});
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

// background select

function bgselect() {
  var selectedImage = event.target.src; 
  document.body.style.backgroundImage = 'url(' + selectedImage + ')';
  localStorage.setItem('selectedBackground', selectedImage);
}
window.addEventListener('load', function() {
  var selectedBackground = localStorage.getItem('selectedBackground');
  if (selectedBackground) {
    document.body.style.backgroundImage = 'url(' + selectedBackground + ')';
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
    fullscreenButton.classList.remove('fa-sharp','fa-solid', 'fa-expand');
    fullscreenButton.classList.add('fa-sharp', 'fa-solid', 'fa-compress');
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
    fullscreenButton.classList.remove('fa-sharp', 'fa-solid', 'fa-compress');
    fullscreenButton.classList.add('fa-sharp','fa-solid', 'fa-expand');
  }
}


// timer

  let countdown;
  let targetTime;
  let paused = false;
  let initialTime = 25 * 60 * 1000; 
  let reset = 1;
  let longbreak = "00:60:00";
  pomodoroCounter = 0;

 const start= document.getElementById('start');
const styles = getComputedStyle(document.documentElement);
const bgset = styles.getPropertyValue('--primary-clr');
const bgset1= styles.getPropertyValue('--textcolor');
  function Pomodoro() {
    if(start.classList.contains('fa-pause')){
      start.classList.remove( 'fa-pause');
      start.classList.add('fa-play');
     
    }
    clearInterval(countdown);
    countdown = null;
    paused = false;
    reset = 1;
    document.getElementById("timer").innerHTML = "00:25:00";
    initialTime = 25 * 60 * 1000;
    document.getElementById('pomodoro').style.color= bgset;
    document.getElementById('sbreak').style.color=bgset1;
    document.getElementById('lbreak').style.color=bgset1;
  }

  function Sbreak() {
    if(start.classList.contains('fa-pause')){
      start.classList.remove( 'fa-pause');
      start.classList.add('fa-play');
     
    }
   
    clearInterval(countdown);
    countdown = null;
    paused = false;
    reset = 2;
    document.getElementById("timer").innerHTML = "00:05:00";
    initialTime = 5 * 60 * 1000;
    document.getElementById('sbreak').style.color= bgset;
    document.getElementById('pomodoro').style.color=bgset1;
    document.getElementById('lbreak').style.color=bgset1;
    
  }

  function Lbreak() {
    if(start.classList.contains('fa-pause')){
      start.classList.remove( 'fa-pause');
      start.classList.add('fa-play');
     
    }
   
    clearInterval(countdown);
    countdown = null;
    paused = false;
    reset = 3;
    document.getElementById("timer").innerHTML = longbreak;
    
    const [hours, minutes, seconds] = longbreak.split(":").map(Number);
    initialTime = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
    document.getElementById('lbreak').style.color=bgset;
    document.getElementById('pomodoro').style.color=bgset1;
    document.getElementById('sbreak').style.color=bgset1;
  }
  
  function startTimer() {
   
    if (!countdown) {
      targetTime = new Date().getTime() + initialTime - 1000; 
      countdown = setInterval(updateCountdown, 1000);
      paused = false;
      start.classList.remove('fa-play');
      start.classList.add( 'fa-pause');
      
    }else {
      clearInterval(countdown);
      countdown = null;
      paused = true;
      start.classList.remove( 'fa-pause');
      start.classList.add('fa-play');
    } 

  }

  function resetTimer() {
    if(start.classList.contains('fa-pause')){
      start.classList.remove( 'fa-pause');
      start.classList.add('fa-play');
     
    }
   
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
    if(start.classList.contains('fa-solid fa-pause fa-2x')){
      start.classList.remove( 'fa-solid fa-pause fa-2x');
      start.classList.add('fa-solid fa-play fa-2x');
    }
   
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

  mySound = document.getElementById('timeout_audio');

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
        if(start.classList.contains('fa-solid fa-pause fa-2x')){
          start.classList.remove( 'fa-solid fa-pause fa-2x');
          start.classList.add('fa-solid fa-play fa-2x');
        }
       
        clearInterval(countdown);
        countdown = null;
  
        if (reset === 1) {
          
          if (pomodoroCounter < 3) {
       
            pomodoroCounter++;
            alert("Time's up! Take a short break.");
            Sbreak();
            mySound.play();
          } else {
          
            pomodoroCounter = 0;
            alert("Congratulations! Job well done. Take a long break.");
            Lbreak();
            mySound.play();
          }
        } else if (reset === 2) {
       
          alert("Short break is over. Start the next pomodoro.");
          Pomodoro();
          mySound.play();
        } else {
        
          alert("Long break is over. Start the next pomodoro.");
          Pomodoro();
        }
      }
    }
  }
  
  

  // Todo


  var list = document.querySelector('ul#myUL');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      var listItem = ev.target;
      listItem.classList.toggle('checked');
      if (listItem.classList.contains('checked')) {
        list.appendChild(listItem); 
      }
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
      saveListToLocalStorage(); 
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = function() {
      var div = this.parentElement;
      var taskText = div.firstChild.textContent.trim();
      div.remove();
      removeTaskFromLocalStorage(taskText);
    };
    }
  

 

  function saveListToLocalStorage() {
    var myUl = document.getElementById("myUL");
    var topLi = myUl.querySelector("li:last-child"); 
    if (topLi) {
      var listItemText = topLi.textContent.trim(); 
  
    
      var existingItems = localStorage.getItem("tasks");
      var listItems = [];
  
      if (existingItems) {

        listItems = JSON.parse(existingItems);
      }

      listItems.push(listItemText);
      localStorage.setItem("tasks", JSON.stringify(listItems));
    }
  }

  function removeTaskFromLocalStorage(taskText) {
    var existingItems = localStorage.getItem("tasks");
    var listItems = [];
  
    if (existingItems) {
      listItems = JSON.parse(existingItems);
    }
  
    var index = listItems.indexOf(taskText);
  
    if (index > -1) {
      listItems.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(listItems));
    }
  }
  function loadListFromLocalStorage() {
    var tasks = localStorage.getItem("tasks");
    if (tasks) {
      tasks = JSON.parse(tasks);
      var ul = document.getElementById("myUL");
      ul.innerHTML = ""; 
      for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = tasks[i] + '<span class="close">x</span>';
        ul.appendChild(li);
      }
    }
  }
  window.addEventListener("load", function() {
    loadListFromLocalStorage();

    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var li = this.parentElement;
        li.remove();
        removeTaskFromLocalStorage(taskText);
      };
    }
  });



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


function copyTab() {

  const tabContents = document.getElementsByClassName('tabcontent');
  const editableDivs = document.getElementsByClassName('editable-div');

  let tabIndex = -1;
  for (let i = 0; i < tabContents.length; i++) {
    if (window.getComputedStyle(tabContents[i]).display === 'block') {
      tabIndex = i;
      break;
    }
  }

  if (tabIndex !== -1) {
    const selectedEditableDiv = editableDivs[tabIndex];
    const contentToCopy = selectedEditableDiv.innerText;

    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = contentToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    alert('Content copied to clipboard!');
  } else {
    alert('No tab content with display:block found!');
  }
}


function printTab() {
  var activeTabButton = document.querySelector('.tablinks-li.active');
  var activeTabId = activeTabButton.getAttribute('data-tab-id');
  var activeTabContent = document.getElementById(activeTabId);
  var divContents = activeTabContent.querySelector('.editable-div').innerHTML;
  var tabName = activeTabButton.textContent.trim();

  var printWindow = window.open('', '', 'height=800,width=800');
  printWindow.document.write('<html>');
  printWindow.document.write('<body>');
  printWindow.document.write('<h1>Tab content for: ' + tabName + '</h1><br>');
  printWindow.document.write('<div>' + divContents + '</div>');
  printWindow.document.write('</body>');
  printWindow.document.write('</html>');
  printWindow.document.close();
  printWindow.print();
}


function deleteTab() {
  var activeTabButton = document.querySelector('.tablinks-li.active');
  var activeTabId = activeTabButton.getAttribute('data-tab-id');
  var activeTabContent = document.getElementById(activeTabId);

  var tabsData = JSON.parse(localStorage.getItem('tabsData'));
  if (tabsData) {
    var tabLinksData = tabsData.tabLinks;
    var tabContentsData = tabsData.tabContents;
    var activeTabIndex = Array.from(document.querySelectorAll('.tablinks-li')).indexOf(activeTabButton);

    if (activeTabIndex >= 0) {
      tabLinksData.splice(activeTabIndex, 1);
      tabContentsData.splice(activeTabIndex, 1);
      tabsData.tabLinks = tabLinksData;
      tabsData.tabContents = tabContentsData;
      localStorage.setItem('tabsData', JSON.stringify(tabsData));
    }
  }

  activeTabButton.parentNode.removeChild(activeTabButton);
  activeTabContent.parentNode.removeChild(activeTabContent);

  var remainingTabs = document.querySelectorAll('.tablinks-li');
  if (remainingTabs.length > 0) {
    remainingTabs[0].click(); 
  } else {
    localStorage.removeItem('tabsData');
  }
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
var numTabs = document.querySelectorAll('.tablinks-li').length + 1;
var tabId = 'Tab' + numTabs;

var tabList = document.getElementById('tablist');
var newTab = document.createElement('li');
newTab.className = 'tablinks-li';
newTab.setAttribute('data-tab-id', tabId);
newTab.onclick = function (event) {
openTabs(event, tabId);
};
newTab.innerHTML = 'Note ' + numTabs;

tabList.appendChild(newTab);

var tabContent = document.createElement('div');
tabContent.id = tabId;
tabContent.className = 'tabcontent';
if (numTabs === 1) {
tabContent.style.display = 'block';
newTab.classList.add('active');
} else {
tabContent.style.display = 'none';
}

var innerDiv = document.createElement('div');
innerDiv.className = 'input-text editable-div';
innerDiv.contentEditable = true;

innerDiv.addEventListener('input', saveTabsContent);
innerDiv.addEventListener('paste', saveTabsContent);

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
var tabLinks = document.querySelectorAll('.tablinks-li');
var tabContents = document.querySelectorAll('.tabcontent');
var tabData = [];
for (var i = 0; i < tabLinks.length; i++) {
var tabLink = tabLinks[i];
var tabContent = tabContents[i];
var tab = {
  tabId: tabLink.id,
contentId: tabContent.id,
  buttonText: tabLink.innerHTML,
  contentText: tabContent.querySelector('.editable-div').innerHTML
};
tabData.push(tab);
}

localStorage.setItem('tabs', JSON.stringify(tabData));
}

function loadTabsFromLocalStorage() {
var tabData = JSON.parse(localStorage.getItem('tabs'));
if (!tabData) return;

var tabList = document.getElementById('tablist');
tabList.innerHTML = '';

for (var i = 0; i < tabData.length; i++) {
var tab = tabData[i];

var newTab = document.createElement('li');
newTab.className = 'tablinks-li';
newTab.id = tab.tabId; // Assign the correct tabId
newTab.innerHTML = tab.buttonText;
newTab.setAttribute('data-tab-id', tab.tabId);
newTab.onclick = createTabClickHandler(i + 1); 

tabList.appendChild(newTab);

var tabContent = document.createElement('div');
tabContent.id = tab.contentId; 
tabContent.className = 'tabcontent';

var innerDiv = document.createElement('div');
innerDiv.className = 'editable-div';
innerDiv.contentEditable = true;
innerDiv.innerHTML = tab.contentText;

tabContent.appendChild(innerDiv);

var tabsContainer = document.querySelector('.tabs');
tabsContainer.appendChild(tabContent);
}
}

function createTabClickHandler(tabIndex) {
return function (event) {
openTabs(event, 'Tab' + tabIndex);
};
}

function openTabs(event, tabId) {
var tabContents = document.querySelectorAll('.tabcontent');
for (var i = 0; i < tabContents.length; i++) {
tabContents[i].style.display = 'none';
}
document.getElementById(tabId).style.display = 'block';
var tabLinks = document.querySelectorAll('.tablinks-li');
for (var i = 0; i < tabLinks.length; i++) {
tabLinks[i].classList.remove('active');
}
event.currentTarget.classList.add('active');
}

function saveTabsContent() {
var tabContents = document.getElementsByClassName('editable-div');
var tabContentsData = [];
for (var i = 0; i < tabContents.length; i++) {
tabContentsData.push(tabContents[i].innerHTML);
}
var tabLinks = document.getElementsByClassName('tablinks-li');
var tabLinksData = [];
for (var i = 0; i < tabLinks.length; i++) {
tabLinksData.push(tabLinks[i].textContent);
}
var tabsData = {
tabContents: tabContentsData,
tabLinks: tabLinksData
};
localStorage.setItem('tabsData', JSON.stringify(tabsData));
}
function loadTabsContent() {
var tabsData = JSON.parse(localStorage.getItem('tabsData'));
if (!tabsData) return;

var tabList = document.getElementById('tablist');
tabList.innerHTML = '';

var existingTabs = document.querySelectorAll('.tabcontent');
for (var i = 0; i < existingTabs.length; i++) {
existingTabs[i].remove();
}

var tabContentsLength = tabsData.tabContents.length;
for (var i = 0; i < tabContentsLength; i++) {
var tabName = tabsData.tabLinks[i];
var tabId = 'Tab' + (i + 1);

var newTab = document.createElement('li');
newTab.className = 'tablinks-li';
newTab.setAttribute('data-tab-id', tabId);
newTab.onclick = createTabClickHandler(i + 1);
newTab.innerHTML = tabName;

tabList.appendChild(newTab);

var tabContent = document.createElement('div');
tabContent.id = tabId;
tabContent.className = 'tabcontent';
if (i === 0) {
  tabContent.style.display = 'block';
  newTab.classList.add('active');
} else {
  tabContent.style.display = 'none';
}

var innerDiv = document.createElement('div');
innerDiv.className = 'editable-div';
innerDiv.contentEditable = true;
innerDiv.innerHTML = tabsData.tabContents[i];

tabContent.appendChild(innerDiv);

var tabsContainer = document.querySelector('.tabs');
tabsContainer.appendChild(tabContent);
}
}



document.getElementById('defaultOpen').click();
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
  
 


// calendar
const calendar = document.querySelector(".calendar"),
date = document.querySelector(".date"),
daysContainer = document.querySelector(".days"),
prev = document.querySelector(".prev"),
next = document.querySelector(".next"),
todayBtn = document.querySelector(".today-btn"),
gotoBtn = document.querySelector(".goto-btn"),
dateInput = document.querySelector(".date-input"),
eventDay = document.querySelector(".event-day"),
eventDate = document.querySelector(".event-date"),
eventsContainer = document.querySelector(".events"),
addEventBtn = document.querySelector(".add-event"),
addEventWrapper = document.querySelector(".add-event-wrapper "),
addEventCloseBtn = document.querySelector(".close "),
addEventTitle = document.querySelector(".event-name "),
addEventFrom = document.querySelector(".event-time-from "),
addEventTo = document.querySelector(".event-time-to "),
addEventSubmit = document.querySelector(".add-event-btn ");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",
];



const eventsArr = [];
getEvents();
console.log(eventsArr);

function initCalendar() {
const firstDay = new Date(year, month, 1);
const lastDay = new Date(year, month + 1, 0);
const prevLastDay = new Date(year, month, 0);
const prevDays = prevLastDay.getDate();
const lastDate = lastDay.getDate();
const day = firstDay.getDay();
const nextDays = 7 - lastDay.getDay() - 1;

date.innerHTML = months[month] + " " + year;

let days = "";

for (let x = day; x > 0; x--) {
  days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
}

for (let v = 1; v <= lastDate; v++) {

  let event = false;
  eventsArr.forEach((eventObj) => {
    if (
      eventObj.day === v &&
      eventObj.month === month + 1 &&
      eventObj.year === year
    ) {
      event = true;
    }
  });
  if (
    v === new Date().getDate() &&
    year === new Date().getFullYear() &&
    month === new Date().getMonth()
  ) {
    activeDay = v;
    getActiveDay(v);
    updateEvents(v);
    if (event) {
      days += `<div class="day today active event">${v}</div>`;
    } else {
      days += `<div class="day today active">${v}</div>`;
    }
  } else {
    if (event) {
      days += `<div class="day event">${v}</div>`;
    } else {
      days += `<div class="day ">${v}</div>`;
    }
  }
}

for (let j = 1; j <= nextDays; j++) {
  days += `<div class="day next-date">${j}</div>`;
}
daysContainer.innerHTML = days;
addListner();
}


function prevMonth() {
month--;
if (month < 0) {
  month = 11;
  year--;
}
initCalendar();
}

function nextMonth() {
month++;
if (month > 11) {
  month = 0;
  year++;
}
initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

initCalendar();


function addListner() {
const days = document.querySelectorAll(".day");
days.forEach((day) => {
  day.addEventListener("click", (e) => {
    getActiveDay(e.target.innerHTML);
    updateEvents(Number(e.target.innerHTML));
    activeDay = Number(e.target.innerHTML);

    days.forEach((day) => {
      day.classList.remove("active");
    });

    if (e.target.classList.contains("prev-date")) {
      prevMonth();
    
      setTimeout(() => {
 
        const days = document.querySelectorAll(".day");
        days.forEach((day) => {
          if (
            !day.classList.contains("prev-date") &&
            day.innerHTML === e.target.innerHTML
          ) {
            day.classList.add("active");
          }
        });
      }, 100);
    } else if (e.target.classList.contains("next-date")) {
      nextMonth();

      setTimeout(() => {
        const days = document.querySelectorAll(".day");
        days.forEach((day) => {
          if (
            !day.classList.contains("next-date") &&
            day.innerHTML === e.target.innerHTML
          ) {
            day.classList.add("active");
          }
        });
      }, 100);
    } else {
      e.target.classList.add("active");
    }
  });
});
}

todayBtn.addEventListener("click", () => {
today = new Date();
month = today.getMonth();
year = today.getFullYear();
initCalendar();
});

dateInput.addEventListener("input", (e) => {
dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
if (dateInput.value.length === 2) {
  dateInput.value += "/";
}
if (dateInput.value.length > 7) {
  dateInput.value = dateInput.value.slice(0, 7);
}
if (e.inputType === "deleteContentBackward") {
  if (dateInput.value.length === 3) {
    dateInput.value = dateInput.value.slice(0, 2);
  }
}
});

gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
console.log("here");
const dateArr = dateInput.value.split("/");
if (dateArr.length === 2) {
  if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
    month = dateArr[0] - 1;
    year = dateArr[1];
    initCalendar();
    return;
  }
}
alert("Invalid Date");
}


function getActiveDay(date) {
const day = new Date(year, month, date);
const dayName = day.toString().split(" ")[0];
eventDay.innerHTML = dayName;
eventDate.innerHTML = date + " " + months[month] + " " + year;
}


function updateEvents(date) {
let events = "";
eventsArr.forEach((event) => {
  if (
    date === event.day &&
    month + 1 === event.month &&
    year === event.year
  ) {
    event.events.forEach((event) => {
      events += `<div class="event">
          <div class="title">
            <i class="fas fa-circle"></i>
            <h6 class="event-title">${event.title}</h6>
          </div>
          <div class="event-time">
            <span class="event-time">${event.time}</span>
          </div>
      </div>`;
    });
  }
});
if (events === "") {
  events = `<div class="no-event">
          <h6>No Events</h6>
      </div>`;
}
eventsContainer.innerHTML = events;
saveEvents();
}


addEventBtn.addEventListener("click", () => {
addEventWrapper.classList.toggle("active");
});

addEventCloseBtn.addEventListener("click", () => {
addEventWrapper.classList.remove("active");
});

document.addEventListener("click", (e) => {
if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
  addEventWrapper.classList.remove("active");
}
});


addEventTitle.addEventListener("input", (e) => {
addEventTitle.value = addEventTitle.value.slice(0, 60);
});




addEventFrom.addEventListener("input", (e) => {
addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
if (addEventFrom.value.length === 2) {
  addEventFrom.value += ":";
}
if (addEventFrom.value.length > 5) {
  addEventFrom.value = addEventFrom.value.slice(0, 5);
}
});

addEventTo.addEventListener("input", (e) => {
addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
if (addEventTo.value.length === 2) {
  addEventTo.value += ":";
}
if (addEventTo.value.length > 5) {
  addEventTo.value = addEventTo.value.slice(0, 5);
}
});


addEventSubmit.addEventListener("click", () => {
const eventTitle = addEventTitle.value;
const eventTimeFrom = addEventFrom.value;
const eventTimeTo = addEventTo.value;
if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
  alert("Please fill all the fields");
  return;
}


const timeFromArr = eventTimeFrom.split(":");
const timeToArr = eventTimeTo.split(":");
if (
  timeFromArr.length !== 2 ||
  timeToArr.length !== 2 ||
  timeFromArr[0] > 23 ||
  timeFromArr[1] > 59 ||
  timeToArr[0] > 23 ||
  timeToArr[1] > 59
) {
  alert("Invalid Time Format");
  return;
}

const timeFrom = convertTime(eventTimeFrom);
const timeTo = convertTime(eventTimeTo);

let eventExist = false;
eventsArr.forEach((event) => {
  if (
    event.day === activeDay &&
    event.month === month + 1 &&
    event.year === year
  ) {
    event.events.forEach((event) => {
      if (event.title === eventTitle) {
        eventExist = true;
      }
    });
  }
});
if (eventExist) {
  alert("Event already added");
  return;
}
const newEvent = {
  title: eventTitle,
  time: timeFrom + " - " + timeTo,
};
console.log(newEvent);
console.log(activeDay);
let eventAdded = false;
if (eventsArr.length > 0) {
  eventsArr.forEach((item) => {
    if (
      item.day === activeDay &&
      item.month === month + 1 &&
      item.year === year
    ) {
      item.events.push(newEvent);
      eventAdded = true;
    }
  });
}

if (!eventAdded) {
  eventsArr.push({
    day: activeDay,
    month: month + 1,
    year: year,
    events: [newEvent],
  });
}

console.log(eventsArr);
addEventWrapper.classList.remove("active");
addEventTitle.value = "";
addEventFrom.value = "";
addEventTo.value = "";
updateEvents(activeDay);

const activeDayEl = document.querySelector(".day.active");
if (!activeDayEl.classList.contains("event")) {
  activeDayEl.classList.add("event");
}
});


eventsContainer.addEventListener("click", (e) => {
if (e.target.classList.contains("event")) {
  if (confirm("Are you sure you want to delete this event?")) {
    const eventTitle = e.target.children[0].children[1].innerHTML;
    eventsArr.forEach((event) => {
      if (
        event.day === activeDay &&
        event.month === month + 1 &&
        event.year === year
      ) {
        event.events.forEach((item, index) => {
          if (item.title === eventTitle) {
            event.events.splice(index, 1);
          }
        });

        if (event.events.length === 0) {
          eventsArr.splice(eventsArr.indexOf(event), 1);

          const activeDayEl = document.querySelector(".day.active");
          if (activeDayEl.classList.contains("event")) {
            activeDayEl.classList.remove("event");
          }
        }
      }
    });
    updateEvents(activeDay);
  }
}
});


function saveEvents() {
localStorage.setItem("events", JSON.stringify(eventsArr));
}

function getEvents() {

if (localStorage.getItem("events") === null) {
  return;
}
eventsArr.push(...JSON.parse(localStorage.getItem("events")));
}

function convertTime(time) {

let timeArr = time.split(":");
let timeHour = timeArr[0];
let timeMin = timeArr[1];
let timeFormat = timeHour >= 12 ? "PM" : "AM";
timeHour = timeHour % 12 || 12;
time = timeHour + ":" + timeMin + " " + timeFormat;
return time;
}

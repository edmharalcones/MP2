
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

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
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
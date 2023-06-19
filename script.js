
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
  



  function notepadbtn() {
    var x = document.getElementById("notepad");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  // Timer
  
    let countdown;
    let targetTime;
    let paused = false;
    let initialTime = 25 * 60 * 1000; // 25 minutes in milliseconds

    function Pomodoro() {
      clearInterval(countdown);
      countdown = null;
      paused = false;
      document.getElementById("timer").innerHTML = "25:00";
      initialTime = 25 * 60 * 1000;
    }

    function Sbreak() {
      clearInterval(countdown);
      countdown = null;
      paused = false;
      document.getElementById("timer").innerHTML = "05:00";
      initialTime = 5 * 60 * 1000;
    }

    function Lbreak() {
      clearInterval(countdown);
      countdown = null;
      paused = false;
      document.getElementById("timer").innerHTML = "15:00";
      initialTime = 15 * 60 * 1000;
    }

    function startTimer() {
      if (!countdown) {
        targetTime = new Date().getTime() + initialTime;
        countdown = setInterval(updateCountdown, 1000);
        paused = false;
      }
    }

    function stopTimer() {
      if (countdown) {
        clearInterval(countdown);
        countdown = null;
        paused = true;
      }
    }

    function resetTimer() {
      clearInterval(countdown);
      countdown = null;
      paused = false;
      document.getElementById("timer").innerHTML = "25:00";
    }

    

    function updateCountdown() {
      if (!paused) {
        const now = new Date().getTime();
        const timeRemaining = targetTime - now;

        // Calculate minutes and seconds
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the time in the "timer" element
        document.getElementById("timer").innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        // If the countdown is finished, clear the interval
        if (timeRemaining <= 0) {
          clearInterval(countdown);
          countdown = null;
          document.getElementById("timer").innerHTML = "00:00";
        }
      }
    }
  
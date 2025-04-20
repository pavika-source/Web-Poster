document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('container');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});







function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = 0;
          // timer = duration; // uncomment this line to reset timer automatically after reaching 0
      }
  }, 1000);
}

window.onload = function () {
  var time = 630 / 2, // your time in seconds here
      display = document.querySelector('#safeTimerDisplay');
  startTimer(time, display);
};












const dragElements = document.querySelectorAll(".draggable"); 

function onMouseDrag(event, element) {
    let leftValue = parseInt(window.getComputedStyle(element).left);
    let topValue = parseInt(window.getComputedStyle(element).top);
    element.style.left = `${leftValue + event.movementX}px`;
    element.style.top = `${topValue + event.movementY}px`;
}

dragElements.forEach((element) => {
    element.addEventListener("mousedown", (e) => {
        const onMove = (event) => onMouseDrag(event, element); 

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", onMove);
        }, { once: true });
    });
});






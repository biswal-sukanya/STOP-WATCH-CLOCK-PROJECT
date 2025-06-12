
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

let stopwatchInterval;
let seconds = 0;

function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, "0");
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  const secs = String(sec % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function updateStopwatch() {
  document.getElementById("stopwatch").textContent = formatTime(seconds);
}

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(() => {
      seconds++;
      updateStopwatch();
    }, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  updateStopwatch();
}

updateStopwatch();

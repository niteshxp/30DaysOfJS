const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
    timer = setInterval(() => {
        if (seconds < 59) {
            seconds++;
        } else if (minutes >= 59) {
            minutes = 0;
            hours++;
        } else {
            seconds = 0;
            minutes++;
        }

        document.getElementById("display").innerText = String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

    }, 1000);

}

function stopTimer() {
    clearInterval(timer);

}

function resetTimer() {
    clearInterval(timer);
    seconds = 0
    hours = 0
    minutes = 0
    display.innerText = "00:00:00";
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
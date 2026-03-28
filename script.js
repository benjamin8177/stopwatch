let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const lapsList = document.getElementById("laps");

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    
    display.innerHTML = `${h}:${m}:${s}`;
}

window.startStop = function() {
    if (!isRunning) {
        isRunning = true;
        startStopBtn.innerHTML = '<i class="fas fa-pause"></i> To\'xtatish';
        startStopBtn.style.background = '#f59e0b'; // warning color for pause
        
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    } else {
        clearInterval(timer);
        isRunning = false;
        startStopBtn.innerHTML = '<i class="fas fa-play"></i> Davom etish';
        startStopBtn.style.background = '#10b981'; // green for start
    }
}

window.reset = function() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    startStopBtn.innerHTML = '<i class="fas fa-play"></i> Boshlash';
    startStopBtn.style.background = '#10b981';
    lapsList.innerHTML = ''; // tozalash
}

window.recordLap = function() {
    if (isRunning) {
        const li = document.createElement("li");
        const lapCount = lapsList.children.length + 1;
        li.innerHTML = `<span>Davra ${lapCount}</span> <span>${display.innerHTML}</span>`;
        lapsList.appendChild(li);
        
        // Auto scroll chiga pastga tushadi
        lapsList.scrollTop = lapsList.scrollHeight;
    }
}

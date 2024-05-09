let time;
let interval;
let audio = new Audio("alarm.mp3")

function startTimer() {
    const minutes = document.getElementById('timeInput').value;
    time = minutes * 60;
    updateTimerDisplay(time);
    interval = setInterval(decrementTimer, 1000);
    document.getElementById('pauseButton').style.display = 'inline';
    document.getElementById('continueButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'inline';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('timerDisplay').style.display = 'inline';
    
    
}

function pauseTimer() {
    clearInterval(interval);
    document.getElementById('pauseButton').style.display = 'none';
    document.getElementById('continueButton').style.display = 'inline';
    document.getElementById('stopButton').style.display = 'inline';
    document.getElementById('startButton').style.display = 'none';
}

function continueTimer() {
    interval = setInterval(decrementTimer, 1000);
    document.getElementById('pauseButton').style.display = 'inline';
    document.getElementById('continueButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'inline';
    document.getElementById('startButton').style.display = 'none';
}

function stopTimer() {
    clearInterval(interval);
    time = 0;
    document.getElementById('pauseButton').style.display = 'none';
    document.getElementById('continueButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'none';
    document.getElementById('startButton').style.display = 'inline';
    document.getElementById('timerDisplay').style.display = 'none';
}

function playMusic() {
    audio.play()
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}

function decrementTimer() {
    time--;
    updateTimerDisplay(time);
    if (time <= 0) {
        clearInterval(interval);
        document.getElementById('stopPlay').style.display = 'inline';
        playMusic();
    }
}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    remainderSeconds = remainderSeconds < 10 ? '0' + remainderSeconds : remainderSeconds;
    document.getElementById('timerDisplay').textContent = `${minutes}:${remainderSeconds}`;
}



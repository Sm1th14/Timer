let time;
let interval;
let audio = new Audio("alarm.mp3")
let clockInterval = null;
let totalTimerSeconds;




function startTimer() {
    const minutes = document.getElementById('timeInput').value;
    time = minutes * 60;
    totalTimerSeconds = time; // Speichert die Gesamtzeit für die Berechnung der Zeigerpositionen
    updateTimerDisplay(time);

    // Setze die Zeiger entsprechend der Startzeit
    setInitialClockHands(minutes);

    if (!clockInterval) {
        clockInterval = setInterval(updateClock, 1000);
    }

    interval = setInterval(decrementTimer, 1000);
    document.getElementById('pauseButton').style.display = 'inline';
    document.getElementById('continueButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'inline';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('timerDisplay').style.display = 'inline';
}

function setInitialClockHands(minutes) {
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    // Stellen Sie den Minutenzeiger auf die entsprechende Startposition ein, basierend auf den eingegebenen Minuten
    const initialMinuteAngle = 90 + (360 * minutes / 60);
    minuteHand.style.transform = `rotate(${initialMinuteAngle % 360}deg)`;

    // Der Sekundenzeiger startet bei 12 Uhr
    secondHand.style.transform = 'rotate(90deg)';
}

function updateClock() {
    const remainingMinutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;

    // Update der Winkel basierend auf der verbleibenden Zeit
    const minuteAngle = 90 + (360 * remainingMinutes / 60);
    const secondAngle = 90 + ((remainingSeconds / 60) * 360);

    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    minuteHand.style.transform = `rotate(${minuteAngle % 360}deg)`;
    secondHand.style.transform = `rotate(${secondAngle % 360}deg)`;
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
    clearInterval(clockInterval);
    clockInterval = null;

    // Setze die Zeiger zurück auf 12 Uhr
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    minuteHand.style.transform = 'rotate(90deg)';
    secondHand.style.transform = 'rotate(90deg)';
    
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
    time--; // Dekrementiere zuerst die Zeit
    updateClock(); // Aktualisiere dann die Uhr
    updateTimerDisplay(time); // Aktualisiere die Timer-Anzeige

    if (time <= 0) {
        clearInterval(interval);
        playMusic();
        document.getElementById('stopPlay').style.display = 'inline';
    }
}


function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    remainderSeconds = remainderSeconds < 10 ? '0' + remainderSeconds : remainderSeconds;
    document.getElementById('timerDisplay').textContent = `${minutes}:${remainderSeconds}`;
}





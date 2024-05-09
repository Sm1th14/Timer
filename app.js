let time;
let interval;

function startTimer() {
    const minutes = document.getElementById('timeInput').value;
    time = minutes * 60;
    updateTimerDisplay(time);
    interval = setInterval(decrementTimer, 1000);
}

function pauseTimer() {
    clearInterval(interval);
}

function stopTimer() {
    clearInterval(interval);
    time = 0;
    updateTimerDisplay(time);
    alert("Timer gestoppt!");
}

function decrementTimer() {
    time--;
    updateTimerDisplay(time);
    if (time < 0) {
        clearInterval(interval);
        alert("Zeit abgelaufen!");
    }
}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    remainderSeconds = remainderSeconds < 10 ? '0' + remainderSeconds : remainderSeconds;
    document.getElementById('timerDisplay').textContent = `${minutes}:${remainderSeconds}`;
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

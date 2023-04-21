const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

function changeBgColor() {
    const body = document.querySelector('body');
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
}

function startChangeBgColor() {
    startBtn.disabled = true;
    intervalId = setInterval(changeBgColor, 1000);
}

function stopChangeBgColor() {
    startBtn.disabled = false;
    clearInterval(intervalId);
}

startBtn.addEventListener('click', startChangeBgColor);
stopBtn.addEventListener('click', stopChangeBgColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
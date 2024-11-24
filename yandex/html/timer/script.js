// Необходимо реализовать таймер с методами start, stop и getTime.
// При вызове старт, он начинает отчет, при вызове стоп - приостанавливается.
// Работу можно продолжить нажатием старт.
// getTime возращает количество времени на таймере.
//  Можно конструктором, можно объектом, лишь бы был функционал.

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const getTimeButton = document.querySelector('#getTime');
const timeText = document.querySelector('#time');

let time = 10 * 60; // in seconds
let minutes = `${Math.floor(time / 60) < 10 ? '0' : ''}${Math.floor(time / 60)}`;
let seconds = `${Math.floor(time % 60) < 10 ? '0' : ''}${Math.floor(time % 60)}`;
let myInterval;
function startTimer() {
    startButton.setAttribute('disabled', 'true');
    stopButton.removeAttribute('disabled');
    myInterval = setInterval(() => {
        if (time) {
            time--;
            minutes = `${Math.floor(time / 60) < 10 ? '0' : ''}${Math.floor(time / 60)}`;
            seconds = `${Math.floor(time % 60) < 10 ? '0' : ''}${Math.floor(time % 60)}`;
            console.log(time, minutes, seconds);
        }
    }, 1000);
}

function stopTimer() {
    stopButton.setAttribute('disabled', 'true');
    startButton.removeAttribute('disabled');
    clearInterval(myInterval);
}

function getTime() {
    timeText.textContent = `${minutes} : ${seconds}`;
}

startButton.addEventListener('click', () => startTimer());
stopButton.addEventListener('click', () => stopTimer());
getTimeButton.addEventListener('click', () => getTime());
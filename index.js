const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const stopBtn = document.querySelector(`[data-action="stop"]`);
const startBtn = document.querySelector(`[data-action="start"]`);
const body = document.querySelector(`body`);
let stoper;

const switchColor = () => {
    stoper = setInterval(() => {
        let arrayElement = randomIntegerFromInterval(0, colors.length - 1);
        body.style.backgroundColor = colors[arrayElement];
        // body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000)
    startBtn.disabled = true;
};
const stopSwitchColor = () => {
    clearInterval(stoper);
    startBtn.disabled = false;
}

startBtn.addEventListener(`click`, (switchColor));
stopBtn.addEventListener(`click`, (stopSwitchColor));

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random()* (max - min + 1) + min)
};



const buttonsDOM = document.querySelectorAll('button');
const Neptunas3DOM = buttonsDOM[2];
const Neptunas2DOM = buttonsDOM[1];
const Neptunas1DOM = buttonsDOM[0];
const Rytas1DOM = buttonsDOM[3];
const Rytas2DOM = buttonsDOM[4];
const Rytas3DOM = buttonsDOM[5];
const resultsDOM = document.querySelectorAll('h3');
const resultDOM1 = resultsDOM[0];
const resultDOM2 = resultsDOM[1];

const localData = localStorage.getItem('tasks');
let scoreData = [];

if (scoreData !== null) {
    scoreData= JSON.parse(localData);
}
//localStorage.setItem('tasks', JSON.stringify(scoreData));


let NeptunasTotal = 0;
let RytasTotal = 0;

function neptunasOne() {
    NeptunasTotal++;
    resultDOM1.textContent = NeptunasTotal;
    addHistory(1,"Neptunas")
}
function neptunasTwo() {
    NeptunasTotal += 2;
    resultDOM1.textContent = NeptunasTotal;
    addHistory(2,"Neptunas")
}
function neptunasThree() {
    NeptunasTotal += 3;
    resultDOM1.textContent = NeptunasTotal;
    addHistory(3,"Neptunas")
}

function rytasOne() {
    RytasTotal++;
    resultDOM2.textContent = RytasTotal;
    addHistory(1,"Lietuvos rytas")
}
function rytasTwo() {
    RytasTotal += 2;
    resultDOM2.textContent = RytasTotal;
    addHistory(2,"Lietuvos rytas")
}
function rytasThree() {
    RytasTotal += 3;
    resultDOM2.textContent = RytasTotal;
    addHistory(3,"Lietuvos rytas")
}

Neptunas1DOM.addEventListener('click', () => {
    neptunasOne();
    localStorage.setItem('tasks', JSON.stringify(scoreData));
});

Neptunas2DOM.addEventListener('click', neptunasTwo);
Neptunas3DOM.addEventListener('click', neptunasThree);

Rytas1DOM.addEventListener('click', rytasOne);
Rytas2DOM.addEventListener('click', rytasTwo);
Rytas3DOM.addEventListener('click', rytasThree);

let scoreHistory = '';
function addHistory(points,team) {
 scoreHistory = '<p> ' + team + " " + points + '</p>' + scoreHistory ;
  historyDOM.innerHTML = scoreHistory;
}




let historyDOM = document.querySelector('.istorija');

function formatTime(timeInMs) {

    const date = new Date(timeInMs);
    const y =date.getFullYear();
    const m = (date.getMonth() < 10 ? '0':'') +(date.getMonth()+1);
    const d = (date.getDate() < 10 ? '0':'') +(date.getDate());
    const h = (date.getHours() < 10 ? '0':'') + date.getHours();
    const mn = (date.getMinutes() < 10 ? '0':'') + date.getMinutes();
    const s = (date.getSeconds() < 10 ? '0':'') + date.getSeconds();
    const mmm =(date.getMilliseconds() < 10 ? '0':'') +date.getMilliseconds

        return `${y}-${m}-${d} ${h}:${mn}:${s}:${mmm}` ;
    }
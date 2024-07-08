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



let NeptunasTotal = 0;
let RytasTotal = 0;

function neptunasOne() {
    NeptunasTotal++;
    resultDOM1.textContent = NeptunasTotal;
}
function neptunasTwo() {
    NeptunasTotal += 2;
    resultDOM1.textContent = NeptunasTotal;
}
function neptunasThree() {
    NeptunasTotal += 3;
    resultDOM1.textContent = NeptunasTotal;
}

function rytasOne() {
    RytasTotal++;
    resultDOM2.textContent = RytasTotal;
}
function rytasTwo() {
    RytasTotal += 2;
    resultDOM2.textContent = RytasTotal;
}
function rytasThree() {
    RytasTotal += 3;
    resultDOM2.textContent = RytasTotal;
}

Neptunas1DOM.addEventListener('click', neptunasOne);
Neptunas2DOM.addEventListener('click', neptunasTwo);
Neptunas3DOM.addEventListener('click', neptunasThree);

Rytas1DOM.addEventListener('click', rytasOne);
Rytas2DOM.addEventListener('click', rytasTwo);
Rytas3DOM.addEventListener('click', rytasThree);

const historyDOM = document.querySelector('p');
function history() {
  
    console.log(NeptunasTotal)
};
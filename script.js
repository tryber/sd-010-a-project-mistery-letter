const textInput = document.querySelector('#carta-texto');
const btnCreate = document.querySelector('#criar-carta');
const textDisplay = document.querySelector('#carta-gerada');
const cssClasses = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig',
  'rotateleft', 'rotateright', 'skewleft', 'skewright'];

const counter = document.querySelector('#carta-contador');
let wordCounter = 0;

function randomClasses(minimun, maximun) {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const numberOfClasses = randomBetween(minimun, maximun);
  return numberOfClasses;
}

function generateClasses(word) {
  const classQty = randomClasses(2, 5);
  for (let index = 0; index < classQty; index += 1) {
    word.classList.add(cssClasses[randomClasses(0, 9)]);
  }

  return word;
}

function setClasses() {
  const words = document.querySelectorAll('span');
  for (let index = 0; index < words.length; index += 1) {
    words[index] = generateClasses(words[index]);
  }
}

function generateLetter() {
  const splitedWords = textInput.value.split(' ');
  wordCounter = splitedWords.length;
  let textOut = '';
  for (let index = 0; index < splitedWords.length; index += 1) {
    if (splitedWords[index] !== '') {
      textOut += `<span>${splitedWords[index]}</span>`;
    }
  }
  if (textOut === '') {
    textOut = 'Por favor, digite o conteúdo da carta.';
    wordCounter = 0;
  }
  return textOut;
}

function countWords() {
  counter.innerText = wordCounter;
}

function generateButton() {
  textDisplay.innerHTML = generateLetter();
  setClasses();
  countWords();
}

btnCreate.addEventListener('click', generateButton);

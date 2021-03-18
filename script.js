const btnGenerateLetter = document.getElementById('criar-carta');
const inputText = document.getElementById('carta-texto');
const misteryousLetter = document.getElementById('carta-gerada');
const count = document.getElementById('carta-contador');

const stylization = {
  styleGroup: ['newspaper', 'magazine1', 'magazine2'],
  sizeGroup: ['medium', 'big', 'reallybig'],
  rotateGroup: ['rotateleft', 'rotateright'],
  inclinateGroup: ['skewleft', 'skewright'],
};

function generateWords() {
  const textInput = document.getElementById('carta-texto').value;
  if (textInput.length > 0) {
    const words = textInput.split(' ');
    return words;
  }
}

function checkEmpty() {
  if (inputText.value === '' || !inputText.value.replace(/\s/g, '').length) {
    return true;
  }
  return false;
}

function getRandomArray(array) {
  let random;
  let n;
  const arrayIndex = array;

  for (let i = arrayIndex.length - 1; i; i -= 1) {
    random = Math.round(Math.random() * i);
    n = arrayIndex[i];
    arrayIndex[i] = arrayIndex[random];
    arrayIndex[random] = n;
  }
  return arrayIndex;
}

function generateGroupArray(quant) {
  const numArray = [];

  for (let i = 0; numArray.length !== quant; i += 1) {
    const num = Math.floor(Math.random() * quant);
    if (numArray.indexOf(num) === -1) {
      numArray.push(num);
    }
  }
  return numArray;
}

function getStylization() {
  let numClasses = Math.floor((Math.random() * 4) + 1);
  const classes = [];

  numClasses = numClasses < 2 ? numClasses += 1 : numClasses;

  const numGroupArray = generateGroupArray(numClasses);

  for (let j = 0; j < numClasses; j += 1) {
    const groupSelected = Object.values(stylization)[numGroupArray[j]];
    const numClassArray = Math.floor(Math.random() * groupSelected.length);
    classes.push(getRandomArray(groupSelected)[numClassArray]);
  }
  return classes;
}

function setStylizationWord() {
  misteryousLetter.addEventListener('click', (e) => {
    const word = e.target;
    const classes = getStylization();
    word.classList = '';
    for (let i = 0; i < classes.length; i += 1) {
      word.classList.add(classes[i]);
    }
  });
}

function setStylization() {
  for (let i = 0; i < misteryousLetter.children.length; i += 1) {
    const classes = getStylization();
    for (let j = 0; j < classes.length; j += 1) {
      misteryousLetter.children[i].classList.add(classes[j]);
    }
  }
}

function wordsCount() {
  count.innerHTML = generateWords().length;
}

function generateLetter() {
  const words = generateWords();
  for (let i = 0; i < words.length; i += 1) {
    const word = document.createElement('span');
    word.innerHTML = `${words[i]}`;
    misteryousLetter.appendChild(word);
  }
  setStylization();
  setStylizationWord();
  wordsCount();
}

count.innerHTML = 0;

btnGenerateLetter.addEventListener('click', () => {
  const isEmpty = checkEmpty();
  if (isEmpty === true) {
    count.innerHTML = 0;
    misteryousLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
  if (isEmpty === false) {
    misteryousLetter.innerHTML = '';
    generateLetter();
  }
});

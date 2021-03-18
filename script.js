const btnGenerateLetter = document.getElementById('criar-carta');
const inputText = document.getElementById('carta-texto');
const misteryousLetter = document.getElementById('carta-gerada');

const stylization = {
  styleGroup: ['newspaper', 'magazine1', 'magazine2'],
  sizeGroup: ['medium', 'big', 'reallybig'],
  rotateGroup: ['rotateleft', 'rotateright'],
  inclinateGroup: ['skewleft', 'skewright'],
};

function generateWords() {
  const textInput = document.getElementById('carta-texto').value;
  const words = textInput.split(' ');
  return words;
}

function checkEmpty() {
  if (inputText.value === '' || !inputText.value.replace(/\s/g, '').length) {
    misteryousLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
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

// function getIndex(array) {
//   const indexes = [];

//   for (let i = 0; i < array.length; i += 1) {
//     indexes.push(i);
//   }
//   return indexes;
// }

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

function generateClassArray(quant, maxValue) {
  const numArray = [];

  for (let i = 0; i < quant; i += 1) {
    const num = Math.floor(Math.random() * maxValue);
    if (num < maxValue && numArray !== '') {
      numArray.push(num);
    }
  }
  return numArray;
}

function getStylization() {
  let numClasses = Math.floor((Math.random() * 4) + 1);
  const classes = [];

  numClasses = numClasses < 2 ? numClasses += 1 : numClasses;
  console.log('Num classes' + numClasses);

  const numGroupArray = generateGroupArray(numClasses);

  for (let j = 0; j < numClasses; j += 1) {
    const groupSelected = Object.values(stylization)[numGroupArray[j]];
    const numClassArray = Math.floor(Math.random() * groupSelected.length);
    classes.push(getRandomArray(groupSelected)[numClassArray]);
    console.log('ESSE É O GRUPO' + groupSelected);
    console.log('AQUI SÃO AS CLASSES' + numClassArray);
  }
  console.log('As classess >>>>>>>>>>>>>>>>>>> ' + classes);
  return classes;
}


function setStylization() {
  // const span = document.getElementsByName('span');

  for (let i = 0; i < misteryousLetter.children.length; i += 1) {
    const classes = getStylization();
    for (let j = 0; j < classes.length; j += 1) {
      misteryousLetter.children[i].classList.add(classes[j]);
      console.log(misteryousLetter.children[i].classList);
    }
  }
}

function generateLetter() {
  const words = generateWords();
  if (misteryousLetter.innerText !== '') {
    misteryousLetter.innerHTML = '';
  }
  checkEmpty();
  for (let i = 0; i < words.length; i += 1) {
    const word = document.createElement('span');
    word.innerHTML = `${words[i]}`;
    misteryousLetter.appendChild(word);
  }
  setStylization();
}

btnGenerateLetter.addEventListener('click', generateLetter);

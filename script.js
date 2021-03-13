const letterP = document.getElementById('carta-gerada');
const tagP = document.getElementById('criar-carta');

function clearAll() {
  while (letterP.firstChild) {
    letterP.removeChild(letterP.firstChild);
  }
}

tagP.addEventListener('click', clearAll);

function generateLetter() {
  const str = document.getElementById('carta-texto').value;
  const arr = str.split(' ');
  for (let index = 0; index < arr.length; index += 1) {
    const tagSpan = document.createElement('span');
    tagSpan.innerText = arr[index];
    letterP.appendChild(tagSpan);
  }
  if (str === '' || str === ' ') {
    letterP.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

tagP.addEventListener('click', generateLetter);

const styleClass = ['newspaper', 'magazine1', 'magazine2'];
const sizeClass = ['medium', 'big', 'reallybig'];
const rotationClass = ['rotateleft', 'rotateright'];
const inclinationclass = ['skewleft', 'skewright'];
const words = document.getElementsByTagName('span');

function stylingLetter() {
  for (let index = 0; index < words.length; index += 1) {
    const styleNum = Math.floor(Math.random() * 3);
    const sizeNum = Math.floor(Math.random() * 3);
    const rotationNum = Math.floor(Math.random() * 2);
    const inclinationNum = Math.floor(Math.random() * 2);
    words[index].className = `${styleClass[styleNum]} ${sizeClass[sizeNum]} ${rotationClass[rotationNum]} ${inclinationclass[inclinationNum]}`;
  }
}

tagP.addEventListener('click', stylingLetter);

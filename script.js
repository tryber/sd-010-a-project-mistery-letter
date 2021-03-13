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

const sC = ['newspaper', 'magazine1', 'magazine2'];
const siC = ['medium', 'big', 'reallybig'];
const rC = ['rotateleft', 'rotateright'];
const iC = ['skewleft', 'skewright'];
const words = document.getElementsByTagName('span');

function stylingLetter() {
  for (let index = 0; index < words.length; index += 1) {
    const sN = Math.floor(Math.random() * 3);
    const siN = Math.floor(Math.random() * 3);
    const rN = Math.floor(Math.random() * 2);
    const iN = Math.floor(Math.random() * 2);
    words[index].className = `${sC[sN]} ${siC[siN]} ${rC[rN]} ${iC[iN]}`;
  }
}

tagP.addEventListener('click', stylingLetter);

function wordCount() {
  document.getElementById('carta-contador').innerText = words.length;
}

tagP.addEventListener('click', wordCount);

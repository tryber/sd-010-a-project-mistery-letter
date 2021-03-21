const tagP = document.getElementById('carta-gerada');
const button = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');

function ifThis() {
  const put = inputLetter.value;
  let counter = 0;
  if (!put) {
    tagP.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return tagP;
  }
  for (let index = 0; index < put.length; index += 1) {
    if (put[index] !== ' ') counter += 1;
  }
  if (counter === 0) {
    tagP.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return tagP;
  }
}
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright', 'big'];
const lastGroup = ['skewleft', 'skewright', 'magazine2'];
// referência : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function rI() {
  return Math.floor(Math.random() * (3 - 1 + 1));
}

button.addEventListener('click', () => {
  tagP.innerHTML = '';
  let words = inputLetter.value.split(' ');
  words = words.filter((x) => x !== '');
  document.querySelector('#carta-contador').innerHTML = words.length;
  for (let index = 0; index < words.length; index += 1) {
    const spans = document.createElement('span');
    spans.innerHTML = words[index];
    spans.classList.add(styleGroup[rI()], sizeGroup[rI()], rotationGroup[rI()], lastGroup[rI()]);
    tagP.appendChild(spans);
  }
  return ifThis();
});

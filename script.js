const groupClasses = ['newspaper', 'magazine1',
  'magazine2', 'big',
  'reallybig', 'rotateleft',
  'rotateright', 'skewleft', 'skewright'];
const getInput = document.getElementById('carta-texto');

let phrase = '';
getInput.addEventListener('keyup', (event) => {
  phrase += event.key;
  getInput.innerText += phrase;
});

function countWords(inputText) {
  const count = inputText.split(' ').length;
  document.getElementById('carta-contador').innerText = count;
}

const getBtn = document.getElementById('criar-carta');
getBtn.addEventListener('click', () => {
  const getLetter = document.getElementById('carta-texto').value;
  if (getLetter.trim().length === 0) {
    document.getElementById('carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.';
  }
  const arrayLetter = getLetter.trim().split(' ');
  for (let index = 0; index < arrayLetter.length; index += 1) {
    const makeSpan = document.createElement('span');
    document.getElementById('carta-gerada').appendChild(makeSpan);
    const word = document.querySelectorAll('span')[index];
    word.classList.add(groupClasses[Math.ceil(Math.random() * 9) - 1]);
    word.classList.add(groupClasses[Math.ceil(Math.random() * 9) - 1]);
    word.innerText = `${arrayLetter[index]} `;
  }
  countWords(getLetter);
});

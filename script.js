const getInput = document.getElementById('carta-texto');
let phrase = '';
getInput.addEventListener('keyup', (event) => {
  phrase += event.key;
  getInput.innerText += phrase;
});

const getBtn = document.getElementById('criar-carta');
getBtn.addEventListener('click', () => {
  const getLetter = document.getElementById('carta-texto').value;
  if (getLetter.trim().length === 0) {
    document.getElementById('carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.';
  }
  const arrayLetter = getLetter.split(' ');
  for (let index = 0; index < arrayLetter.length; index += 1) {
    const makeSpan = document.createElement('span');
    document.getElementById('carta-gerada').appendChild(makeSpan);
    document.querySelectorAll('span')[index].innerText = `${arrayLetter[index]} `;
  }
});
